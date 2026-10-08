import { mount, unmount, flushSync } from 'svelte';
import CanvasLayer from './CanvasLayer.svelte';
let nextId = 0;
export function mountCanvas(target, actions) {
    const component = mount(CanvasLayer, { target, props: { actions, markerId: `pc-loop-arrow-${++nextId}` } });
    flushSync();
    return {
        ...component.getLayers(),
        setNodes: nodes => flushSync(() => component.setNodes(nodes)),
        setGroups: groups => flushSync(() => component.setGroups(groups)),
        setWires: (wires, bounds, ghost) => flushSync(() => component.setWires(wires, bounds, ghost)),
        setPositions: (nodes, groups) => flushSync(() => component.setPositions(nodes, groups)),
        destroy: () => unmount(component),
    };
}
