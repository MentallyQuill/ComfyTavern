/*! Svelte runtime: Copyright (c) 2016-2025 Svelte Contributors. MIT license; see THIRD_PARTY_NOTICES.md. */
//#region node_modules/svelte/src/internal/shared/utils.js
var e = Array.isArray, t = Array.prototype.indexOf, n = Array.prototype.includes, r = Array.from, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyDescriptors, s = Object.prototype, c = Array.prototype, l = Object.getPrototypeOf, u = Object.isExtensible, d = () => {};
function f(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function p() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var m = 1024, h = 2048, g = 4096, _ = 8192, v = 16384, y = 32768, b = 1 << 25, x = 65536, S = 1 << 19, ee = 1 << 20, te = 1 << 25, C = 65536, ne = 1 << 21, re = 1 << 22, ie = 1 << 23, ae = Symbol("$state"), oe = Symbol(""), se = Symbol("attributes"), ce = Symbol("class"), le = Symbol("style"), ue = Symbol("text"), de = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), fe = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function pe() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function me(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function he() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ge() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _e() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function ve() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ye() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/constants.js
var be = {}, w = Symbol("uninitialized"), xe = "http://www.w3.org/1999/xhtml";
function Se() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ce(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function we() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var T = !1;
function Te(e) {
	T = e;
}
var E;
function D(e) {
	if (e === null) throw Ce(), be;
	return E = e;
}
function Ee() {
	return D(/* @__PURE__ */ Gt(E));
}
function O(e) {
	if (T) {
		if (/* @__PURE__ */ Gt(E) !== null) throw Ce(), be;
		E = e;
	}
}
function De(e = 1) {
	if (T) {
		for (var t = e, n = E; t--;) n = /* @__PURE__ */ Gt(n);
		E = n;
	}
}
function Oe(e = !0) {
	for (var t = 0, n = E;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Gt(n);
		e && n.remove(), n = i;
	}
}
function ke(e) {
	if (!e || e.nodeType !== 8) throw Ce(), be;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ae(e) {
	return e === this.v;
}
function je(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Me(e) {
	return !je(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var k = null;
function Ne(e) {
	k = e;
}
function Pe(e, t = !1, n) {
	k = {
		p: k,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: H,
		l: null
	};
}
function Fe(e) {
	var t = k, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) tn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, k = t.p, e ?? {};
}
function Ie() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Le = [];
function Re() {
	var e = Le;
	Le = [], f(e);
}
function ze(e) {
	if (Le.length === 0 && !ht) {
		var t = Le;
		queueMicrotask(() => {
			t === Le && Re();
		});
	}
	Le.push(e);
}
function Be() {
	for (; Le.length > 0;) Re();
}
function Ve(e) {
	var t = H;
	if (t === null) return B.f |= ie, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	He(e, t);
}
function He(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ue = ~(h | g | m);
function A(e, t) {
	e.f = e.f & Ue | t;
}
function We(e) {
	e.f & 512 || e.deps === null ? A(e, m) : A(e, g);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ge(e) {
	if (e !== null) for (let t of e) t.f & 2 && t.f & 65536 && (t.f ^= C, Ge(t.deps));
}
function Ke(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ge(e.deps), A(e, m);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function qe(e) {
	var t = B, n = H;
	V(null), Cn(null);
	try {
		return e();
	} finally {
		V(t), Cn(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Je(e) {
	let t = 0, n = Mt(0), r;
	return () => {
		$t() && (K(n), on(() => (t === 0 && (r = Bn(() => e(() => It(n)))), t += 1, () => {
			ze(() => {
				--t, t === 0 && (r?.(), r = void 0, It(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ye = x | S;
function Xe(e, t, n, r) {
	new Ze(e, t, n, r);
}
var Ze = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = T ? E : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = Je(() => (this.#m = Mt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = H;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = H.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = sn(() => {
			if (T) {
				let e = this.#t;
				Ee();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ye), T && (this.#e = E);
	}
	#g() {
		try {
			this.#a = R(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		ze(r), t && (this.#s = R(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			t ? we() : (t = !0, n && ye(), this.#s !== null && pn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			}));
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					He(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = R(() => e(this.#e)), ze(() => {
			var e = this.#c = document.createDocumentFragment(), t = P();
			e.append(t), this.#a = this.#S(() => R(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, pn(this.#o, () => {
				this.#o = null;
			}), this.#x(j));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = R(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				_n(this.#a, e);
				let t = this.#n.pending;
				this.#o = R(() => t(this.#e));
			} else this.#x(j);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ke(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = H, n = B, r = k;
		Cn(this.#i), V(this.#i), Ne(this.#i.ctx);
		try {
			return xt.ensure(), e();
		} catch (e) {
			return Ve(e), null;
		} finally {
			Cn(t), V(n), Ne(r);
		}
	}
	#C(e, t) {
		this.has_pending_snippet() ? (this.#u += e, this.#u === 0 && (this.#x(t), this.#o && pn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null))) : this.parent && this.parent.#C(e, t);
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, ze(() => {
			this.#d = !1, this.#m && Pt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), K(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		j?.is_fork ? (this.#a && j.skip_effect(this.#a), this.#o && j.skip_effect(this.#o), this.#s && j.skip_effect(this.#s), j.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (z(this.#a), null), this.#o &&= (z(this.#o), null), this.#s &&= (z(this.#s), null), T && (D(this.#t), De(), D(Oe()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return R(() => {
						var r = H;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return He(e, this.#i.parent), null;
				}
			}));
		};
		ze(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				He(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => He(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Qe(e, t, n, r) {
	let i = Ie() ? nt : at;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = H, c = $e(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				He(e, s);
			}
			et();
		}
	}
	var d = tt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ it(e))).then(u).catch((e) => He(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), et();
	}) : f();
}
function $e() {
	var e = H, t = B, n = k, r = j;
	return function(i = !0) {
		Cn(e), V(t), Ne(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function et(e = !0) {
	Cn(null), V(null), Ne(null), e && j?.deactivate();
}
function tt() {
	var e = H, t = e.b, n = j, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function nt(e) {
	var t = 2 | h;
	return H !== null && (H.f |= S), {
		ctx: k,
		deps: null,
		effects: null,
		equals: Ae,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: w,
		wv: 0,
		parent: H,
		ac: null
	};
}
var rt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function it(e, t, n) {
	let r = H;
	r === null && pe();
	var i = void 0, a = Mt(w), o = !B, s = /* @__PURE__ */ new Set();
	return an(() => {
		var t = H, n = p();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== de && n.reject(e);
			}).finally(et);
		} catch (e) {
			n.reject(e), et();
		}
		var c = j;
		if (o) {
			if (t.f & 32768) var l = tt();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(rt);
			else for (let e of s.values()) e.reject(rt);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== rt && (c.activate(), t ? (a.f |= ie, Pt(a, t)) : (a.f & 8388608 && (a.f ^= ie), Pt(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), en(() => {
		for (let e of s) e.reject(rt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(a) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function at(e) {
	let t = /* @__PURE__ */ nt(e);
	return t.equals = Me, t;
}
function ot(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) z(t[n]);
	}
}
function st(e) {
	var t, n = H, r = e.parent;
	if (!bn && r !== null && e.v !== w && r.f & 24576) return Se(), e.v;
	Cn(r);
	try {
		e.f &= ~C, ot(e), t = Pn(e);
	} finally {
		Cn(n);
	}
	return t;
}
function ct(e) {
	var t = st(e);
	!e.equals(t) && (e.wv = jn(), (!j?.is_fork || e.deps === null) && (j === null ? e.v = t : (j.capture(e, t, !0), ft?.capture(e, t, !0)), e.deps === null)) ? A(e, m) : bn || (pt === null ? We(e) : ($t() || j?.is_fork) && pt.set(e, t));
}
function lt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && qe(() => {
		t.ac.abort(de), t.ac = null;
	}), t.fn !== null && (t.teardown = d), In(t, 0), ln(t));
}
function ut(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Ln(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var dt = null, j = null, ft = null, pt = null, mt = null, ht = !1, gt = !1, _t = null, vt = null, yt = 0, bt = 1, xt = class e {
	id = bt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		dt === null ? dt = this : (dt.#n = this, this.#t = dt), dt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) A(r, h), t(r);
			for (r of n.m) A(r, g), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, yt++ > 1e3 && (this.#x(), Ct());
		for (let e of this.#u) this.#d.delete(e), A(e, h), this.schedule(e);
		for (let e of this.#d) A(e, g), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = _t = [], r = [], i = vt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Ot(e), this.#h() || this.discard(), t;
		}
		if (j = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (_t = null, vt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Dt(e, t);
			i.length > 0 && j.#g();
			return;
		}
		let o = this.#v();
		if (o) this.#b(r), this.#b(n), o.#y(this);
		else {
			this.#u.clear(), this.#d.clear();
			for (let e of this.#r) e(this);
			this.#r.clear(), ft = this, Tt(r), Tt(n), ft = null, this.#s?.resolve();
			var s = j;
			if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
				if (s !== null) {
					let e = s;
					e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
				} else s = this;
			}
			s !== null && (At.clear(), s.#g());
		}
	}
	#_(e, t, n) {
		e.f ^= m;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= m : i & 4 ? t.push(r) : Mn(r) && (i & 16 && this.#d.add(r), Ln(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), A(i, h), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), j = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Ke(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== w && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), pt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		j = this;
	}
	deactivate() {
		j = null, pt = null;
	}
	flush() {
		try {
			gt = !0, j = this, this.#g();
		} finally {
			yt = 0, mt = null, _t = null, vt = null, gt = !1, j = null, pt = null, At.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(rt);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, ze(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= p()).promise;
	}
	static ensure() {
		if (j === null) {
			let t = j = new e();
			!gt && !ht && ze(() => {
				t.#e || t.flush();
			});
		}
		return j;
	}
	apply() {
		pt = null;
	}
	schedule(e) {
		if (mt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) e.b.defer_effect(e);
		else {
			for (var t = e; t.parent !== null;) {
				t = t.parent;
				var n = t.f;
				if (_t !== null && t === H && (B === null || !(B.f & 2))) return;
				if (n & 96) {
					if (!(n & 1024)) return;
					t.f ^= m;
				}
			}
			this.#c.push(t);
		}
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? dt = e : t.#t = e, this.linked = !1;
		}
	}
};
function St(e) {
	var t = ht;
	ht = !0;
	try {
		var n;
		for (e && (j !== null && !j.is_fork && j.flush(), n = e());;) {
			if (Be(), j === null) return n;
			j.flush();
		}
	} finally {
		ht = t;
	}
}
function Ct() {
	try {
		he();
	} catch (e) {
		He(e, mt);
	}
}
var wt = null;
function Tt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Mn(r) && (wt = /* @__PURE__ */ new Set(), Ln(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && fn(r), wt?.size > 0)) {
				At.clear();
				for (let e of wt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) wt.has(n) && (wt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Ln(n);
					}
				}
				wt.clear();
			}
		}
		wt = null;
	}
}
function Et(e) {
	j.schedule(e);
}
function Dt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), A(e, m);
		for (var n = e.first; n !== null;) Dt(n, t), n = n.next;
	}
}
function Ot(e) {
	A(e, m);
	for (var t = e.first; t !== null;) Ot(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var kt = /* @__PURE__ */ new Set(), At = /* @__PURE__ */ new Map(), jt = !1;
function Mt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ae,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function M(e, t) {
	let n = Mt(e, t);
	return Tn(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Nt(e, t = !1, n = !0) {
	let r = Mt(e);
	return t || (r.equals = Me), r;
}
function N(e, t, n = !1) {
	return B !== null && (!Sn || B.f & 131072) && Ie() && B.f & 4325394 && (wn === null || !wn.has(e)) && ve(), Pt(e, n ? Rt(t) : t, vt);
}
function Pt(e, t, n = null) {
	if (!e.equals(t)) {
		bn ? At.set(e, t) : At.has(e) || At.set(e, e.v);
		var r = xt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && st(t), pt === null && We(t);
		}
		e.wv = jn(), Lt(e, h, n), Ie() && H !== null && H.f & 1024 && !(H.f & 96) && (G === null ? En([e]) : G.push(e)), !r.is_fork && kt.size > 0 && !jt && Ft();
	}
	return t;
}
function Ft() {
	jt = !1;
	for (let e of kt) {
		e.f & 1024 && A(e, g);
		let t;
		try {
			t = Mn(e);
		} catch {
			t = !0;
		}
		t && Ln(e);
	}
	kt.clear();
}
function It(e) {
	N(e, e.v + 1);
}
function Lt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ie(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (i || s !== H) {
			var l = (c & h) === 0;
			if (l && A(s, t), c & 131072) kt.add(s);
			else if (c & 2) {
				var u = s;
				pt?.delete(u), c & 65536 || (c & 512 && (H === null || !(H.f & 2097152)) && (s.f |= C), Lt(u, g, n));
			} else if (l) {
				var d = s;
				c & 16 && wt !== null && wt.add(d), n === null ? Et(d) : n.push(d);
			}
		}
	}
}
function Rt(t) {
	if (typeof t != "object" || !t || ae in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = /* @__PURE__ */ new Map(), i = e(t), o = /* @__PURE__ */ M(0), u = null, d = kn, f = (e) => {
		if (kn === d) return e();
		var t = B, n = kn;
		V(null), An(d);
		var r = e();
		return V(t), An(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ M(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && ge();
			var i = r.get(t);
			return i === void 0 ? f(() => {
				var e = /* @__PURE__ */ M(n.value, u);
				return r.set(t, e), e;
			}) : N(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (n === void 0) {
				if (t in e) {
					let e = f(() => /* @__PURE__ */ M(w, u));
					r.set(t, e), It(o);
				}
			} else N(n, w), It(o);
			return !0;
		},
		get(e, n, i) {
			if (n === ae) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ M(Rt(s ? e[n] : w), u)), r.set(n, o)), o !== void 0) {
				var c = K(o);
				return c === w ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			var n = Reflect.getOwnPropertyDescriptor(e, t);
			if (n && "value" in n) {
				var i = r.get(t);
				i && (n.value = K(i));
			} else if (n === void 0) {
				var a = r.get(t), o = a?.v;
				if (a !== void 0 && o !== w) return {
					enumerable: !0,
					configurable: !0,
					value: o,
					writable: !0
				};
			}
			return n;
		},
		has(e, t) {
			if (t === ae) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== w || Reflect.has(e, t);
			return (n !== void 0 || H !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ M(i ? Rt(e[t]) : w, u)), r.set(t, n)), K(n) === w) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => /* @__PURE__ */ M(w, u)), r.set(d + "", p)) : N(p, w);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => /* @__PURE__ */ M(void 0, u)), N(c, Rt(n)), r.set(t, c));
			else {
				l = c.v !== w;
				var m = f(() => Rt(n));
				N(c, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, n), !l) {
				if (i && typeof t == "string") {
					var g = r.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && N(g, _ + 1);
				}
				It(o);
			}
			return !0;
		},
		ownKeys(e) {
			K(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== w;
			});
			for (var [n, i] of r) i.v !== w && !(n in e) && t.push(n);
			return t;
		},
		setPrototypeOf() {
			_e();
		}
	});
}
var zt, Bt, Vt, Ht;
function Ut() {
	if (zt === void 0) {
		zt = window, Bt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Vt = a(t, "firstChild").get, Ht = a(t, "nextSibling").get, u(e) && (e[ce] = void 0, e[se] = null, e[le] = void 0, e.__e = void 0), u(n) && (n[ue] = void 0);
	}
}
function P(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Wt(e) {
	return Vt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Gt(e) {
	return Ht.call(e);
}
function F(e, t) {
	if (!T) return /* @__PURE__ */ Wt(e);
	var n = /* @__PURE__ */ Wt(E);
	if (n === null) n = E.appendChild(P());
	else if (t && n.nodeType !== 3) {
		var r = P();
		return n?.before(r), D(r), r;
	}
	return t && Xt(n), D(n), n;
}
function Kt(e, t = !1) {
	if (!T) {
		var n = /* @__PURE__ */ Wt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Gt(n) : n;
	}
	if (t) {
		if (E?.nodeType !== 3) {
			var r = P();
			return E?.before(r), D(r), r;
		}
		Xt(E);
	}
	return E;
}
function I(e, t = 1, n = !1) {
	let r = T ? E : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Gt(r);
	if (!T) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = P();
			return r === null ? i?.after(a) : r.before(a), D(a), a;
		}
		Xt(r);
	}
	return D(r), r;
}
function qt(e) {
	e.textContent = "";
}
function Jt() {
	return !1;
}
function Yt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Xt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Zt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qt(e, t) {
	var n = H;
	n !== null && n.f & 8192 && (e |= _);
	var r = {
		ctx: k,
		deps: null,
		nodes: null,
		f: e | h | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	j?.register_created_effect(r);
	var i = r;
	if (e & 4) _t === null ? xt.ensure().schedule(r) : _t.push(r);
	else if (t !== null) {
		try {
			Ln(r);
		} catch (e) {
			throw z(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= x));
	}
	if (i !== null && (i.parent = n, n !== null && Zt(i, n), B !== null && B.f & 2 && !(e & 64))) {
		var a = B;
		(a.effects ??= []).push(i);
	}
	return r;
}
function $t() {
	return B !== null && !Sn;
}
function en(e) {
	let t = Qt(8, null);
	return A(t, m), t.teardown = e, t;
}
function tn(e) {
	return Qt(4 | ee, e);
}
function nn(e) {
	xt.ensure();
	let t = Qt(64 | S, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? pn(t, () => {
			z(t), n(void 0);
		}) : (z(t), n(void 0));
	});
}
function rn(e) {
	return Qt(4, e);
}
function an(e) {
	return Qt(re | S, e);
}
function on(e, t = 0) {
	return Qt(8 | t, e);
}
function L(e, t = [], n = [], r = []) {
	Qe(r, t, n, (t) => {
		Qt(8, () => {
			e(...t.map(K));
		});
	});
}
function sn(e, t = 0) {
	return Qt(16 | t, e);
}
function R(e) {
	return Qt(32 | S, e);
}
function cn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = bn, n = B;
		xn(!0), V(null);
		try {
			t.call(null);
		} finally {
			xn(e), V(n);
		}
	}
}
function ln(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && qe(() => {
			e.abort(de);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : z(n, t), n = r;
	}
}
function un(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || z(t), t = n;
	}
}
function z(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (dn(e.nodes.start, e.nodes.end), n = !0), e.f |= b, ln(e, t && !n), In(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	cn(e), e.f ^= b, e.f |= v;
	var i = e.parent;
	i !== null && i.first !== null && fn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function dn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Gt(e);
		e.remove(), e = n;
	}
}
function fn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function pn(e, t, n = !0) {
	var r = [];
	mn(e, r, !0);
	var i = () => {
		n && z(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function mn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= _;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				mn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function hn(e) {
	gn(e, !0);
}
function gn(e, t) {
	if (e.f & 8192) {
		e.f ^= _, e.f & 1024 || (A(e, h), xt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			gn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function _n(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Gt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var vn = null, yn = !1, bn = !1;
function xn(e) {
	bn = e;
}
var B = null, Sn = !1;
function V(e) {
	B = e;
}
var H = null;
function Cn(e) {
	H = e;
}
var wn = null;
function Tn(e) {
	B !== null && (wn ??= /* @__PURE__ */ new Set()).add(e);
}
var U = null, W = 0, G = null;
function En(e) {
	G = e;
}
var Dn = 1, On = 0, kn = On;
function An(e) {
	kn = e;
}
function jn() {
	return ++Dn;
}
function Mn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~C), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Mn(a) && ct(a), a.wv > e.wv) return !0;
		}
		t & 512 && pt === null && A(e, m);
	}
	return !1;
}
function Nn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(wn !== null && wn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Nn(a, t, !1) : t === a && (n ? A(a, h) : a.f & 1024 && A(a, g), Et(a));
	}
}
function Pn(e) {
	var t = U, n = W, r = G, i = B, a = wn, o = k, s = Sn, c = kn, l = e.f;
	U = null, W = 0, G = null, B = l & 96 ? null : e, wn = null, Ne(e.ctx), Sn = !1, kn = ++On, e.ac !== null && (qe(() => {
		e.ac.abort(de);
	}), e.ac = null);
	try {
		e.f |= ne;
		var u = e.fn, d = u();
		e.f |= y;
		var f = e.deps, p = j?.is_fork;
		if (U !== null) {
			var m;
			if (p || In(e, W), f !== null && W > 0) for (f.length = W + U.length, m = 0; m < U.length; m++) f[W + m] = U[m];
			else e.deps = f = U;
			if ($t() && e.f & 512) for (m = W; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && W < f.length && (In(e, W), f.length = W);
		if (Ie() && G !== null && !Sn && f !== null && !(e.f & 6146)) for (m = 0; m < G.length; m++) Nn(G[m], e);
		if (i !== null && i !== e) {
			if (On++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = On;
			if (t !== null) for (let e of t) e.rv = On;
			G !== null && (r === null ? r = G : r.push(...G));
		}
		return e.f & 8388608 && (e.f ^= ie), d;
	} catch (e) {
		return Ve(e);
	} finally {
		e.f ^= ne, U = t, W = n, G = r, B = i, wn = a, Ne(o), Sn = s, kn = c;
	}
}
function Fn(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (U === null || !n.call(U, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512, s.f &= ~C), s.v !== w && We(s), s.ac !== null && qe(() => {
			s.ac.abort(de), s.ac = null, A(s, h);
		}), lt(s), In(s, 0);
	}
}
function In(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Fn(e, n[r]);
}
function Ln(e) {
	var t = e.f;
	if (!(t & 16384)) {
		A(e, m);
		var n = H, r = yn;
		H = e, yn = !(t & 96);
		try {
			t & 16777232 ? un(e) : ln(e), cn(e);
			var i = Pn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Dn;
		} finally {
			yn = r, H = n;
		}
	}
}
function K(e) {
	var t = !!(e.f & 2);
	if (vn?.add(e), B !== null && !Sn && !(H !== null && H.f & 16384) && (wn === null || !wn.has(e))) {
		var r = B.deps;
		if (B.f & 2097152) e.rv < On && (e.rv = On, U === null && r !== null && r[W] === e ? W++ : U === null ? U = [e] : U.push(e));
		else {
			B.deps ??= [], n.call(B.deps, e) || B.deps.push(e);
			var i = e.reactions;
			i === null ? e.reactions = [B] : n.call(i, B) || i.push(B);
		}
	}
	if (bn && At.has(e)) return At.get(e);
	if (t) {
		var a = e;
		if (bn) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || zn(a)) && (o = st(a)), At.set(a, o), o;
		}
		var s = !(a.f & 512) && !Sn && B !== null && (yn || !!(B.f & 512)), c = (a.f & y) === 0;
		Mn(a) && (s && (a.f |= 512), ct(a)), s && !c && (ut(a), Rn(a));
	}
	if (pt?.has(e)) return pt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Rn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ut(t), Rn(t));
}
function zn(e) {
	if (e.v === w) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (At.has(t) || t.f & 2 && zn(t)) return !0;
	return !1;
}
function Bn(e) {
	var t = Sn;
	try {
		return Sn = !0, e();
	} finally {
		Sn = t;
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Vn = ["touchstart", "touchmove"];
function Hn(e) {
	return Vn.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Un = Symbol("events"), Wn = /* @__PURE__ */ new Set(), Gn = /* @__PURE__ */ new Set();
function Kn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Qn.call(t, e), !e.cancelBubble) return qe(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ze(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function qn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Kn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && en(() => {
		t.removeEventListener(e, o, a);
	});
}
function Jn(e, t, n) {
	(t[Un] ??= {})[e] = n;
}
function Yn(e) {
	for (var t = 0; t < e.length; t++) Wn.add(e[t]);
	for (var n of Gn) n(e);
}
var Xn = null, Zn = !1;
function Qn(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	Xn = e, Zn || (Zn = !0, setTimeout(() => {
		Zn = !1, Xn = null;
	}));
	var s = 0, c = Xn === e && e[Un];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[Un] = t;
			return;
		}
		var u = a.indexOf(t);
		if (u === -1) return;
		l <= u && (s = l);
	}
	if (o = a[s] || e.target, o !== t) {
		i(e, "currentTarget", {
			configurable: !0,
			get() {
				return o || n;
			}
		});
		var d = B, f = H;
		V(null), Cn(null);
		try {
			for (var p, m = []; o !== null && o !== t;) {
				try {
					var h = o[Un]?.[r];
					h != null && (!o.disabled || e.target === o) && h.call(o, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				s++, o = s < a.length ? a[s] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Un] = t, delete e.currentTarget, V(d), Cn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var $n = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function er(e) {
	return $n?.createHTML(e) ?? e;
}
function tr(e) {
	var t = Yt("template");
	return t.innerHTML = er(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function nr(e, t) {
	var n = H;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function q(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (T) return nr(E, null), E;
		i === void 0 && (i = tr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Wt(i)));
		var t = r || Bt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Wt(t), s = t.lastChild;
			nr(o, s);
		} else nr(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function rr(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = !!(t & 1), a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (T) return nr(E, null), E;
		if (!o) {
			var e = /* @__PURE__ */ Wt(tr(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Wt(e);) o.appendChild(/* @__PURE__ */ Wt(e));
			else o = /* @__PURE__ */ Wt(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Wt(t), r = t.lastChild;
			nr(n, r);
		} else nr(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function ir(e, t) {
	return /* @__PURE__ */ rr(e, t, "svg");
}
function ar() {
	if (T) return nr(E, null), E;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = P();
	return e.append(t, n), nr(t, n), e;
}
function J(e, t) {
	if (T) {
		var n = H;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = E), Ee();
	} else e !== null && e.before(t);
}
function Y(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ue] ??= e.nodeValue) && (e[ue] = n, e.nodeValue = `${n}`);
}
function or(e, t) {
	return cr(e, t);
}
var sr = /* @__PURE__ */ new Map();
function cr(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Ut();
	var l = void 0, u = nn(() => {
		var s = n ?? t.appendChild(P());
		Xe(s, { pending: () => {} }, (t) => {
			Pe({});
			var n = k;
			if (o && (n.c = o), a && (i.$$events = a), T && nr(t, null), l = e(t, i) || {}, T && (H.nodes.end = E, E === null || E.nodeType !== 8 || E.data !== "]")) throw Ce(), be;
			Fe();
		}, c);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = Hn(r);
					for (let e of [t, document]) {
						var a = sr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), sr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Qn, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(r(Wn)), Gn.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = sr.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, Qn), r.delete(e), r.size === 0 && sr.delete(n)) : r.set(e, i);
			}
			Gn.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return lr.set(l, u), l;
}
var lr = /* @__PURE__ */ new WeakMap();
function ur(e, t) {
	let n = lr.get(e);
	return n ? (lr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var dr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) hn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (hn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (z(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						_n(r, t), t.append(P()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else z(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), pn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (z(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = j, r = Jt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = P();
				i.append(a), this.#n.set(e, {
					effect: R(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, R(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else T && (this.anchor = E), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function X(e, t, n = !1) {
	var r;
	T && (r = E, Ee());
	var i = new dr(e), a = n ? x : 0;
	function o(e, t) {
		if (T) {
			var n = ke(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Oe();
				D(a), i.anchor = a, Te(!1), i.ensure(e, t), Te(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	sn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function fr(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		pn(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					pr(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null && e.pending.size === 0;
		if (l) {
			var u = n, d = u.parentNode;
			qt(d), d.append(u), e.items.clear();
		}
		pr(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(o);
}
function pr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= te, _n(a, document.createDocumentFragment())) : z(t[i], n);
	}
}
var mr;
function hr(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = T ? D(/* @__PURE__ */ Wt(u)) : u.appendChild(P());
	}
	T && Ee();
	var d = null, f = /* @__PURE__ */ at(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, _r(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= te, yr(d, null, c)) : hn(d) : pn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: sn(() => {
			p = K(f);
			var e = p.length;
			let t = !1;
			T && ke(c) === "[!" != (e === 0) && (c = Oe(), D(c), Te(!1), t = !0);
			for (var r = /* @__PURE__ */ new Set(), u = j, v = Jt(), y = 0; y < e; y += 1) {
				T && E.nodeType === 8 && E.data === "]" && (c = E, t = !0, Te(!1));
				var b = p[y], x = a(b, y), S = h ? null : l.get(x);
				S ? (S.v && Pt(S.v, b), S.i && Pt(S.i, y), v && u.unskip_effect(S.e)) : (S = vr(l, h ? c : mr ??= P(), b, x, y, o, n, i), h || (S.e.f |= te), l.set(x, S)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = R(() => s(c)) : (d = R(() => s(mr ??= P())), d.f |= te)), e > r.size && me("", "", ""), T && e > 0 && D(Oe()), !h) {
				if (m.set(u, r), v) {
					for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			t && Te(!0), K(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, T && (c = E);
}
function gr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function _r(e, t, n, i, a) {
	var o = !!(i & 8), s = t.length, c = e.items, l = gr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (hn(_), o && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= te, _ === l) yr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), br(e, d, _), br(e, _, y), yr(_, y, n), d = _, p = [], m = [], l = gr(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) yr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					br(e, S.prev, ee.next), br(e, d, S), br(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), yr(_, l, n), br(e, _.prev, _.next), br(e, _, d === null ? e.effect.first : d.next), br(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = gr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = gr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (pr(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && C.push(l), l = gr(l.next);
		var ne = C.length;
		if (ne > 0) {
			var re = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < ne; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) C[v].nodes?.a?.fix();
			}
			fr(e, C, re);
		}
	}
	o && ze(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function vr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Mt(n) : /* @__PURE__ */ Nt(n, !1, !1) : null, l = o & 2 ? Mt(i) : null;
	return {
		v: c,
		i: l,
		e: R(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function yr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Gt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function br(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function xr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = xr(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function Sr() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = xr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Z(e) {
	return typeof e == "object" ? Sr(e) : e ?? "";
}
var Cr = [..." 	\n\r\f\xA0\v﻿"];
function wr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Cr.includes(r[o - 1])) && (s === r.length || Cr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Tr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Er(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Dr(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Er)), i && c.push(...Object.keys(i).map(Er));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Er(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Tr(r)), i && (n += Tr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Q(e, t, n, r, i, a) {
	var o = e[ce];
	if (T || o !== n || o === void 0) {
		var s = wr(n, r, a);
		(!T || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ce] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Or(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function kr(e, t, n, r) {
	var i = e[le];
	if (T || i !== t) {
		var a = Dr(t, r);
		(!T || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[le] = t;
	} else r && (Array.isArray(r) ? (Or(e, n?.[0], r[0]), Or(e, n?.[1], r[1], "important")) : Or(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Ar = Symbol("is custom element"), jr = Symbol("is html"), Mr = fe ? "link" : "LINK";
function $(e, t, n, r) {
	var i = Nr(e);
	T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Mr) || i[t] !== (i[t] = n) && (t === "loading" && (e[oe] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Fr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Nr(e) {
	return e[se] ??= {
		[Ar]: e.nodeName.includes("-"),
		[jr]: e.namespaceURI === xe
	};
}
var Pr = /* @__PURE__ */ new Map();
function Fr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Pr.get(t);
	if (n) return n;
	Pr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var s in r = o(i), r) r[s].set && s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.push(s);
		i = l(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Ir(e, t) {
	return e === t || e?.[ae] === t;
}
function Lr(e = {}, t, n, r) {
	var i = k.r, a = H;
	return rn(() => {
		var o, s;
		return on(() => {
			o = s, s = r?.() || [], Bn(() => {
				Ir(n(...s), e) || (t(e, ...s), o && Ir(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ir(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region ui/NodeCard.svelte
var Rr = /* @__PURE__ */ q("<span> </span>"), zr = /* @__PURE__ */ q("<span class=\"pc-off-pill\">OFF</span>"), Br = /* @__PURE__ */ q("<button type=\"button\" class=\"pc-node-action pc-help-btn fa-solid fa-circle-question\" title=\"How Deciders work\" aria-label=\"How Deciders work\"></button>"), Vr = /* @__PURE__ */ q("<button type=\"button\"></button>"), Hr = /* @__PURE__ */ q("<div class=\"pc-node-body\"> </div>"), Ur = /* @__PURE__ */ q("<div> </div>"), Wr = /* @__PURE__ */ q("<div><b> </b><span> </span></div>"), Gr = /* @__PURE__ */ q("<div><!> <!></div>"), Kr = /* @__PURE__ */ q("· <b> </b>", 1), qr = /* @__PURE__ */ q("<button type=\"button\" class=\"pc-node-action pc-node-model pc-node-model-pick\"><i class=\"fa-solid fa-microchip\"></i> <!> <i class=\"fa-solid fa-caret-down pc-model-caret\"></i></button>"), Jr = /* @__PURE__ */ q("<div class=\"pc-node-model\"><i class=\"fa-solid fa-microchip\"></i> <!></div>"), Yr = /* @__PURE__ */ q("<div><i></i> </div>"), Xr = /* @__PURE__ */ q("<span class=\"pc-port-keyname\"> </span>"), Zr = /* @__PURE__ */ q("<i></i>"), Qr = /* @__PURE__ */ q("<div><!><!></div>"), $r = /* @__PURE__ */ q("<div role=\"group\"><div class=\"pc-node-head\"><span class=\"pc-badge\"><i></i> </span> <span class=\"pc-node-title\"> </span> <!> <!> <!> <!></div> <!> <!> <!> <!> <!></div>");
function ei(e, t) {
	Pe(t, !0);
	let n = (e) => e.stopPropagation();
	var r = $r();
	let i;
	var a = F(r), o = F(a), s = F(o), c = I(s);
	O(o);
	var l = I(o, 2), u = F(l, !0);
	O(l);
	var d = I(l, 2), f = (e) => {
		var n = Rr(), r = F(n, !0);
		O(n), L(() => {
			Q(n, 1, Z(t.card.token.className)), $(n, "title", t.card.token.title), Y(r, t.card.token.text);
		}), J(e, n);
	};
	X(d, (e) => {
		t.card.token && e(f);
	});
	var p = I(d, 2), m = (e) => {
		var n = zr();
		L(() => $(n, "title", t.card.offHint)), J(e, n);
	};
	X(p, (e) => {
		t.card.offHint && e(m);
	});
	var h = I(p, 2), g = (e) => {
		var r = Br();
		Jn("mousedown", r, n), Jn("click", r, (e) => {
			n(e), t.actions.help(t.card.id);
		}), J(e, r);
	};
	X(h, (e) => {
		t.card.help && e(g);
	});
	var _ = I(h, 2), v = (e) => {
		var r = Vr();
		L(() => {
			Q(r, 1, `pc-node-action pc-toggle fa-solid ${t.card.enabled ? "fa-toggle-on pc-toggle-on" : "fa-toggle-off pc-toggle-off"}`), $(r, "title", t.card.enabled ? "Switched on — click to switch off" : "Switched off — click to switch on"), $(r, "aria-label", `Switch ${t.card.title} ${t.card.enabled ? "off" : "on"}`), $(r, "aria-pressed", t.card.enabled);
		}), Jn("mousedown", r, n), Jn("click", r, (e) => {
			n(e), t.actions.toggle(t.card.id);
		}), J(e, r);
	};
	X(_, (e) => {
		t.card.toggle && e(v);
	}), O(a);
	var y = I(a, 2), b = (e) => {
		var n = Hr(), r = F(n, !0);
		O(n), L(() => Y(r, t.card.body)), J(e, n);
	};
	X(y, (e) => {
		t.card.body !== null && e(b);
	});
	var x = I(y, 2), S = (e) => {
		var n = Gr(), r = F(n), i = (e) => {
			var n = Ur(), r = F(n, !0);
			O(n), L(() => {
				Q(n, 1, Z(t.card.mode.className)), Y(r, t.card.mode.text);
			}), J(e, n);
		};
		X(r, (e) => {
			t.card.mode && e(i);
		}), hr(I(r, 2), 17, () => t.card.rows, (e) => e.id, (e, t) => {
			var n = Wr(), r = F(n), i = F(r, !0);
			O(r);
			var a = I(r), o = F(a, !0);
			O(a), O(n), L(() => {
				Q(n, 1, `pc-dec-key${K(t).chosen ? " pc-dec-chosen" : ""}${K(t).fallback ? " pc-dec-fallback" : ""}`), Y(i, K(t).name), Y(o, K(t).text);
			}), J(e, n);
		}), O(n), L(() => Q(n, 1, Z(t.card.rowClass))), J(e, n);
	};
	X(x, (e) => {
		t.card.body === null && e(S);
	});
	var ee = I(x, 2), te = (e) => {
		var r = ar(), i = Kt(r), a = (e) => {
			var r = qr(), i = I(F(r)), a = I(i), o = (e) => {
				var n = Kr(), r = I(Kt(n)), i = F(r, !0);
				O(r), L(() => Y(i, t.card.model.actual)), J(e, n);
			};
			X(a, (e) => {
				t.card.model.actual && e(o);
			}), De(2), O(r), L(() => {
				$(r, "title", t.card.model.title), Y(i, ` ${t.card.model.where ?? ""}`);
			}), Jn("mousedown", r, n), Jn("dblclick", r, n), Jn("click", r, (e) => {
				n(e), t.actions.model(t.card.id, e.currentTarget);
			}), J(e, r);
		}, o = (e) => {
			var n = Jr(), r = I(F(n)), i = I(r), a = (e) => {
				var n = Kr(), r = I(Kt(n)), i = F(r, !0);
				O(r), L(() => Y(i, t.card.model.actual)), J(e, n);
			};
			X(i, (e) => {
				t.card.model.actual && e(a);
			}), O(n), L(() => {
				$(n, "title", t.card.model.title), Y(r, ` ${t.card.model.where ?? ""}`);
			}), J(e, n);
		};
		X(i, (e) => {
			t.card.model.pick ? e(a) : e(o, -1);
		}), J(e, r);
	};
	X(ee, (e) => {
		t.card.model && e(te);
	});
	var C = I(ee, 2);
	hr(C, 19, () => t.card.notices, (e, t) => `${e.className}:${t}`, (e, t) => {
		var n = Yr(), r = F(n), i = I(r);
		O(n), L(() => {
			Q(n, 1, Z(K(t).className)), $(n, "title", K(t).title), Q(r, 1, `fa-solid ${K(t).icon}`), Y(i, ` ${K(t).text ?? ""}`);
		}), J(e, n);
	}), hr(I(C, 2), 17, () => t.card.ports, (e) => e.id, (e, n) => {
		var r = Qr();
		let i;
		var a = F(r), o = (e) => {
			var t = Xr(), r = F(t, !0);
			O(t), L(() => Y(r, K(n).label)), J(e, t);
		};
		X(a, (e) => {
			K(n).label && e(o);
		});
		var s = I(a), c = (e) => {
			var t = Zr();
			L(() => Q(t, 1, `fa-solid ${K(n).icon}`)), J(e, t);
		};
		X(s, (e) => {
			K(n).icon && e(c);
		}), O(r), L(() => {
			Q(r, 1, Z(K(n).className)), $(r, "data-node", t.card.id), $(r, "data-dir", K(n).dir), $(r, "data-port", K(n).port), $(r, "data-side", K(n).side), $(r, "title", K(n).title), i = kr(r, "", i, { left: K(n).left === void 0 ? void 0 : `${K(n).left}%` });
		}), J(e, r);
	}), O(r), L(() => {
		Q(r, 1, Z(t.card.className)), $(r, "data-id", t.card.id), $(r, "title", t.card.hint), $(r, "aria-label", `${t.card.label}: ${t.card.title}`), i = kr(r, "", i, {
			left: `${t.card.x}px`,
			top: `${t.card.y}px`,
			width: `${t.card.w}px`
		}), Q(s, 1, `fa-solid ${t.card.icon} pc-badge-icon`), Y(c, ` ${t.card.label ?? ""}`), $(l, "title", t.card.titleHint), Y(u, t.card.title);
	}), qn("mouseenter", r, () => t.actions.hover(t.card.id)), qn("mouseleave", r, () => t.actions.hover(null)), J(e, r), Fe();
}
Yn([
	"mousedown",
	"click",
	"dblclick"
]);
//#endregion
//#region ui/GroupCard.svelte
var ti = /* @__PURE__ */ q("<span class=\"pc-badge\"><i class=\"fa-solid fa-object-group pc-badge-icon\"></i> Group</span>"), ni = /* @__PURE__ */ q("<i class=\"fa-solid fa-object-group\"></i>"), ri = /* @__PURE__ */ q("<span class=\"pc-group-frame-count\"> </span>"), ii = /* @__PURE__ */ q("<span> </span>"), ai = /* @__PURE__ */ q("<span class=\"pc-off-pill\" title=\"This whole group is switched off. Nothing in it is sent, and nothing passes through it.\">OFF</span>"), oi = /* @__PURE__ */ q("<div class=\"pc-node-body\"> </div><div class=\"pc-node-model pc-group-io\"> </div> <div class=\"pc-node-cond\"> </div> <div class=\"pc-gport pc-gport-in\" data-gport=\"in\" title=\"Drag up to a block to wire it into this group\"></div> <div class=\"pc-gport pc-gport-out\" data-gport=\"out\" title=\"Drag to wire a block in this group into another block\"></div>", 1), si = /* @__PURE__ */ q("<div class=\"pc-group-resize\" data-action=\"resize\" title=\"Drag to resize the blanket\"></div>"), ci = /* @__PURE__ */ q("<div role=\"group\"><div><!> <span> </span> <!> <!> <!> <button type=\"button\"></button> <button type=\"button\" data-action=\"toggle\" aria-label=\"Toggle group\"></button></div> <!></div>");
function li(e, t) {
	Pe(t, !0);
	function n(e, n) {
		e.stopPropagation(), e.preventDefault(), t.actions.group(t.group.id, n);
	}
	function r(e, n) {
		e.stopPropagation(), e.detail === 0 && t.actions.group(t.group.id, n);
	}
	var i = ci();
	let a;
	var o = F(i), s = F(o), c = (e) => {
		J(e, ti());
	}, l = (e) => {
		J(e, ni());
	};
	X(s, (e) => {
		t.group.collapsed ? e(c) : e(l, -1);
	});
	var u = I(s, 2), d = F(u, !0);
	O(u);
	var f = I(u, 2), p = (e) => {
		var n = ri(), r = F(n, !0);
		O(n), L(() => Y(r, t.group.count)), J(e, n);
	};
	X(f, (e) => {
		t.group.collapsed || e(p);
	});
	var m = I(f, 2), h = (e) => {
		var n = ii(), r = F(n, !0);
		O(n), L(() => {
			Q(n, 1, Z(t.group.token.className)), $(n, "title", t.group.token.title), Y(r, t.group.token.text);
		}), J(e, n);
	};
	X(m, (e) => {
		t.group.token && e(h);
	});
	var g = I(m, 2), _ = (e) => {
		J(e, ai());
	};
	X(g, (e) => {
		t.group.enabled || e(_);
	});
	var v = I(g, 2), y = I(v, 2);
	O(o);
	var b = I(o, 2), x = (e) => {
		var n = oi(), r = Kt(n), i = F(r, !0);
		O(r);
		var a = I(r), o = F(a, !0);
		O(a);
		var s = I(a, 2), c = F(s, !0);
		O(s);
		var l = I(s, 2), u = I(l, 2);
		L(() => {
			Y(i, t.group.body), Y(o, t.group.io), Y(c, t.group.enabled ? "double-click to open" : "switched off — nothing goes through"), $(l, "data-group", t.group.id), $(u, "data-group", t.group.id);
		}), J(e, n);
	}, S = (e) => {
		J(e, si());
	};
	X(b, (e) => {
		t.group.collapsed ? e(x) : e(S, -1);
	}), O(i), L(() => {
		Q(i, 1, Z(t.group.className)), $(i, "data-group", t.group.id), $(i, "aria-label", `Group: ${t.group.title}`), a = kr(i, "", a, {
			left: `${t.group.x}px`,
			top: `${t.group.y}px`,
			width: `${t.group.w}px`,
			height: t.group.collapsed ? void 0 : `${t.group.h}px`
		}), Q(o, 1, Z(t.group.collapsed ? "pc-node-head" : "pc-group-frame-head")), Q(u, 1, Z(t.group.collapsed ? "pc-node-title" : "pc-group-frame-title")), Y(d, t.group.title), Q(v, 1, `pc-node-action fa-solid pc-group-btn ${t.group.collapsed ? "fa-up-right-and-down-left-from-center" : "fa-down-left-and-up-right-to-center"}`), $(v, "data-action", t.group.collapsed ? "open" : "collapse"), $(v, "title", t.group.collapsed ? "Open the group as a blanket" : "Fold the group"), $(v, "aria-label", t.group.collapsed ? "Open group" : "Fold group"), Q(y, 1, `pc-node-action pc-toggle fa-solid ${t.group.enabled ? "fa-toggle-on pc-toggle-on" : "fa-toggle-off pc-toggle-off"}`), $(y, "title", t.group.enabled ? "Switch the whole group off" : "Switch the whole group on"), $(y, "aria-pressed", t.group.enabled);
	}), Jn("mousedown", v, (e) => n(e, t.group.collapsed ? "open" : "collapse")), Jn("click", v, (e) => r(e, t.group.collapsed ? "open" : "collapse")), Jn("mousedown", y, (e) => n(e, "toggle")), Jn("click", y, (e) => r(e, "toggle")), J(e, i), Fe();
}
Yn(["mousedown", "click"]);
//#endregion
//#region ui/WireLayer.svelte
var ui = /* @__PURE__ */ ir("<title> </title>"), di = /* @__PURE__ */ ir("<path class=\"pc-wire-hit\"></path><path></path><text> <!></text>", 1), fi = /* @__PURE__ */ ir("<path></path>"), pi = /* @__PURE__ */ ir("<defs><marker viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" class=\"pc-loop-arrow\"></path></marker></defs><!><!>", 1);
function mi(e, t) {
	Pe(t, !0);
	var n = pi(), r = Kt(n), i = F(r);
	O(r);
	var a = I(r);
	hr(a, 17, () => t.wires, (e) => e.id, (e, n) => {
		var r = di(), i = Kt(r), a = I(i), o = I(a), s = F(o, !0), c = I(s), l = (e) => {
			var t = ui(), r = F(t, !0);
			O(t), L(() => Y(r, K(n).label.title)), J(e, t);
		};
		X(c, (e) => {
			K(n).label.title && e(l);
		}), O(o), L(() => {
			$(i, "d", K(n).d), $(i, "data-id", K(n).id), $(a, "d", K(n).d), Q(a, 0, Z(K(n).className)), $(a, "data-id", K(n).id), $(a, "marker-end", K(n).arrow ? `url(#${t.markerId})` : void 0), $(o, "x", K(n).label.x), $(o, "y", K(n).label.y), Q(o, 0, Z(K(n).label.className)), $(o, "data-id", K(n).label.id), $(o, "text-anchor", K(n).label.anchor), Y(s, K(n).label.text);
		}), J(e, r);
	});
	var o = I(a), s = (e) => {
		var n = fi();
		L(() => {
			$(n, "d", t.ghost.d), Q(n, 0, Z(t.ghost.className));
		}), J(e, n);
	};
	X(o, (e) => {
		t.ghost && e(s);
	}), L(() => $(i, "id", t.markerId)), J(e, n), Fe();
}
//#endregion
//#region ui/CanvasLayer.svelte
var hi = /* @__PURE__ */ q("<div class=\"pc-viewport\" data-pc-renderer=\"svelte\"><svg class=\"pc-wires\" aria-label=\"Canvas connections\"><!></svg> <div class=\"pc-nodes\"><!> <!> <!></div></div>");
function gi(e, t) {
	Pe(t, !0);
	let n = /* @__PURE__ */ M([]), r = /* @__PURE__ */ M([]), i = /* @__PURE__ */ M([]), a = /* @__PURE__ */ M(null), o = /* @__PURE__ */ M({
		w: 4e3,
		h: 4e3
	}), s, c, l;
	function u() {
		return {
			viewport: s,
			svg: c,
			nodeLayer: l
		};
	}
	function d(e) {
		N(n, e);
	}
	function f(e) {
		N(r, e);
	}
	function p(e, t, n) {
		N(i, e), N(o, t), N(a, n);
	}
	function m(e, t) {
		let i = new Map(e.map((e) => [e.id, e])), a = new Map(t.map((e) => [e.id, e]));
		N(n, K(n).map((e) => i.has(e.id) ? {
			...e,
			...i.get(e.id)
		} : e)), N(r, K(r).map((e) => a.has(e.id) ? {
			...e,
			...a.get(e.id)
		} : e));
	}
	var h = {
		getLayers: u,
		setNodes: d,
		setGroups: f,
		setWires: p,
		setPositions: m
	}, g = hi(), _ = F(g);
	mi(F(_), {
		get wires() {
			return K(i);
		},
		get markerId() {
			return t.markerId;
		},
		get ghost() {
			return K(a);
		}
	}), O(_), Lr(_, (e) => c = e, () => c);
	var v = I(_, 2), y = F(v);
	hr(y, 17, () => K(r).filter((e) => !e.collapsed), (e) => e.id, (e, n) => {
		li(e, {
			get group() {
				return K(n);
			},
			get actions() {
				return t.actions;
			}
		});
	});
	var b = I(y, 2);
	return hr(b, 17, () => K(n), (e) => e.id, (e, n) => {
		ei(e, {
			get card() {
				return K(n);
			},
			get actions() {
				return t.actions;
			}
		});
	}), hr(I(b, 2), 17, () => K(r).filter((e) => e.collapsed), (e) => e.id, (e, n) => {
		li(e, {
			get group() {
				return K(n);
			},
			get actions() {
				return t.actions;
			}
		});
	}), O(v), Lr(v, (e) => l = e, () => l), O(g), Lr(g, (e) => s = e, () => s), L(() => {
		$(_, "width", K(o).w), $(_, "height", K(o).h), $(_, "viewBox", `0 0 ${K(o).w} ${K(o).h}`);
	}), J(e, g), Fe(h);
}
//#endregion
//#region ui/entry.js
var _i = 0;
function vi(e, t) {
	let n = or(gi, {
		target: e,
		props: {
			actions: t,
			markerId: `pc-loop-arrow-${++_i}`
		}
	});
	return St(), {
		...n.getLayers(),
		setNodes: (e) => St(() => n.setNodes(e)),
		setGroups: (e) => St(() => n.setGroups(e)),
		setWires: (e, t, r) => St(() => n.setWires(e, t, r)),
		setPositions: (e, t) => St(() => n.setPositions(e, t)),
		destroy: () => ur(n)
	};
}
//#endregion
export { vi as mountCanvas };
