import { test, expect } from '@playwright/test';
test('Svelte workbench exposes selection/pan modes and camera controls without remounting editors', async ({ page }) => {
    await page.goto('/tests/browser/harness.html'); await page.waitForFunction(() => !!window.canvasHarness);
    const ids = await page.evaluate(() => window.canvasHarness.reset());
    await page.locator(`.pc-node[data-id="${ids[0]}"]`).click();
    const text = page.locator('.pc-inspector textarea').first(); await text.focus();
    await page.evaluate(() => { window.editorProbe = document.activeElement; });
    await expect(page.getByRole('button', { name: 'Select tool', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Pan tool', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Pan tool', exact: true })).toHaveAttribute('aria-pressed', 'true');
    expect(await page.evaluate(() => window.canvasHarness.canvas.mode)).toBe('pan');
    await page.getByRole('button', { name: 'Zoom in', exact: true }).click();
    expect(await page.evaluate(() => window.canvasHarness.canvas.view.zoom)).toBeGreaterThan(1);
    expect(await page.evaluate(() => document.contains(window.editorProbe))).toBe(true);
    await page.getByRole('button', { name: 'Select tool', exact: true }).click();
    await expect(page.locator('.pc-header')).toHaveAttribute('data-pc-ui', 'svelte');
});
test('a delayed model list preserves the new graph’s active editor', async ({ page }) => {
    await page.goto('/tests/browser/harness.html'); await page.waitForFunction(() => !!window.canvasHarness);
    const other = await page.evaluate(() => {
        const { context, S, UI, canvas, graph } = window.canvasHarness;
        context.chatCompletionSettings.chat_completion_source = 'openai'; context.getRequestHeaders = () => ({});
        const second = S.createGraph('Model response target'), prompt = S.addNode(second, 'prompt', 40, 40);
        const gen = S.addNode(graph, 'generate', 40, 40); canvas.render(); canvas.select({ kind: 'node', id: gen.id }); UI.refreshIfOpen();
        const realFetch = window.fetch;
        window.fetch = (url, options) => url === '/api/backends/chat-completions/status' ? new Promise(resolve => { window.answerModels = resolve; }) : realFetch(url, options);
        return { graph: second.id, prompt: prompt.id };
    });
    await page.locator('.pc-load-models').first().click();
    await page.locator('.pc-graph-select').selectOption(other.graph);
    await page.evaluate(id => window.canvasHarness.canvas.select({ kind: 'node', id }), other.prompt);
    await page.locator('.pc-inspector textarea').first().focus();
    const retained = await page.evaluate(async () => {
        const editor = document.activeElement;
        window.answerModels(new Response(JSON.stringify({ data: [{ id: 'listed-model' }] }), { status: 200, headers: { 'Content-Type': 'application/json' } }));
        await window.canvasHarness.settle(); return editor === document.activeElement && document.contains(editor);
    });
    expect(retained).toBe(true);
});
test('a preview from the previous graph cannot overwrite the current canvas', async ({ page }) => {
    await page.goto('/tests/browser/harness.html'); await page.waitForFunction(() => !!window.canvasHarness);
    const ids = await page.evaluate(() => window.canvasHarness.reset());
    const other = await page.evaluate(() => { const { S, UI } = window.canvasHarness; const g = S.createGraph('Other preview'); UI.refreshIfOpen(); return g.id; });
    await page.evaluate(() => {
        const { context, UI } = window.canvasHarness;
        context.getWorldInfoPrompt = () => new Promise(resolve => { window.finishScan = resolve; });
        window.pendingPreview = UI.runPreview();
    });
    await page.locator('.pc-graph-select').selectOption(other);
    const stale = await page.evaluate(async id => {
        window.finishScan({ worldInfoBefore: '', worldInfoAfter: '' }); await window.pendingPreview;
        return !!window.canvasHarness.UI.lastPreview()?.trace?.some(row => row.id === id);
    }, ids[0]);
    expect(stale).toBe(false);
});
test('a delayed rename is cancelled when another graph is opened', async ({ page }) => {
    await page.goto('/tests/browser/harness.html'); await page.waitForFunction(() => !!window.canvasHarness);
    const graphs = await page.evaluate(() => {
        const { context, S, UI, graph } = window.canvasHarness;
        const other = S.createGraph('Second canvas'); UI.close(); UI.open();
        context.POPUP_TYPE = { INPUT: 'input' }; context.callGenericPopup = () => new Promise(resolve => { window.answerPopup = resolve; });
        return { original: graph.id, originalName: graph.name, other: other.id };
    });
    await page.locator('.pc-toolbar-menu summary').click();
    await page.getByText('Rename canvas', { exact: true }).click();
    await page.locator('.pc-graph-select').selectOption(graphs.other);
    const names = await page.evaluate(async ({ original, other }) => {
        window.answerPopup('Delayed rename'); await window.canvasHarness.settle();
        return [window.canvasHarness.S.getGraph(original).name, window.canvasHarness.S.getGraph(other).name];
    }, graphs);
    expect(names).toEqual([graphs.originalName, 'Second canvas']);
});
test('close and reopen reuse one workbench and reset its inspector selection', async ({ page }) => {
    await page.goto('/tests/browser/harness.html'); await page.waitForFunction(() => !!window.canvasHarness);
    const ids = await page.evaluate(() => window.canvasHarness.reset());
    await page.locator(`.pc-node[data-id="${ids[0]}"]`).click();
    const reused = await page.evaluate(async () => {
        const { UI, canvas, settle } = window.canvasHarness, root = document.querySelector('.pc-root');
        UI.close(); UI.open(); await settle();
        return root === document.querySelector('.pc-root') && canvas === window.canvasHarness.canvas;
    });
    expect(reused).toBe(true);
    await expect(page.locator('.pc-root')).toHaveCount(1);
    await expect(page.locator('.pc-inspector .pc-empty')).toHaveText('Select a block or a wire.');
    const before = await page.evaluate(() => window.canvasHarness.canvas.view.zoom);
    await page.getByRole('button', { name: 'Zoom in', exact: true }).click();
    expect(await page.evaluate(() => window.canvasHarness.canvas.view.zoom)).toBeCloseTo(before * 1.15);
});
