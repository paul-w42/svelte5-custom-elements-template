typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const en = 2, _t = "[", vt = "[!", pt = "]", $e = {}, m = /* @__PURE__ */ Symbol(), Ye = !1;
var tn = Array.isArray, nn = Array.prototype.indexOf, rn = Array.from, Re = Object.keys, Ae = Object.defineProperty, ue = Object.getOwnPropertyDescriptor, sn = Object.prototype, fn = Array.prototype, ln = Object.getPrototypeOf, ft = Object.isExtensible;
function un(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function $t() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const y = 2, Je = 4, Ze = 8, on = 1 << 24, U = 16, re = 32, J = 64, Le = 128, D = 512, b = 1024, R = 2048, I = 4096, K = 8192, V = 16384, Qe = 32768, Ce = 65536, lt = 1 << 17, gt = 1 << 18, se = 1 << 19, an = 1 << 20, ne = 32768, Be = 1 << 21, Xe = 1 << 22, G = 1 << 23, qe = /* @__PURE__ */ Symbol("$state"), cn = /* @__PURE__ */ Symbol("legacy props"), le = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Me = 8;
function hn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function dn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function _n() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function vn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function pn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function gn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function et(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function yn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let S = !1;
function Ee(e) {
  S = e;
}
let g;
function oe(e) {
  if (e === null)
    throw et(), $e;
  return g = e;
}
function yt() {
  return oe(/* @__PURE__ */ ie(g));
}
function mn(e) {
  if (S) {
    if (/* @__PURE__ */ ie(g) !== null)
      throw et(), $e;
    g = e;
  }
}
function wn(e = 1) {
  if (S) {
    for (var t = e, n = g; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ie(n);
    g = n;
  }
}
function bn(e = !0) {
  for (var t = 0, n = g; ; ) {
    if (n.nodeType === Me) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === pt) {
        if (t === 0) return n;
        t -= 1;
      } else (r === _t || r === vt) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(n)
    );
    e && n.remove(), n = s;
  }
}
function mt(e) {
  return e === this.v;
}
function En(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xn(e) {
  return !En(e, this.v);
}
let Tn = !1, F = null;
function ae(e) {
  F = e;
}
function wt(e, t = !1, n) {
  F = {
    p: F,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function bt(e) {
  var t = (
    /** @type {ComponentContext} */
    F
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Vn(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, F = t.p, e ?? /** @type {T} */
  {};
}
function Et() {
  return !0;
}
let X = [];
function xt() {
  var e = X;
  X = [], un(e);
}
function tt(e) {
  if (X.length === 0 && !ve) {
    var t = X;
    queueMicrotask(() => {
      t === X && xt();
    });
  }
  X.push(e);
}
function Sn() {
  for (; X.length > 0; )
    xt();
}
function Tt(e) {
  var t = v;
  if (t === null)
    return _.f |= G, e;
  if ((t.f & Qe) === 0) {
    if ((t.f & Le) === 0)
      throw e;
    t.b.error(e);
  } else
    ce(e, t);
}
function ce(e, t) {
  for (; t !== null; ) {
    if ((t.f & Le) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const xe = /* @__PURE__ */ new Set();
let $ = null, N = null, C = [], Ie = null, Ve = !1, ve = !1;
class O {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #u = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #s = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #o = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #f = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#s > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    C = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#n(r, n);
    this.is_fork || this.#a(), this.is_deferred() ? (this.#i(n.effects), this.#i(n.render_effects)) : ($ = null, ut(n.render_effects), ut(n.effects), this.#o?.resolve()), N = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #n(t, n) {
    t.f ^= b;
    for (var r = t.first; r !== null; ) {
      var s = r.f, i = (s & (re | J)) !== 0, f = i && (s & b) !== 0, l = f || (s & K) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Le) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !l && r.fn !== null) {
        i ? r.f ^= b : (s & Je) !== 0 ? n.effects.push(r) : be(r) && ((r.f & U) !== 0 && this.#f.add(r), me(r));
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      }
      var o = r.parent;
      for (r = r.next; r === null && o !== null; )
        o === n.effect && (this.#i(n.effects), this.#i(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = o.next, o = o.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #i(t) {
    for (const n of t)
      (n.f & R) !== 0 ? this.#f.add(n) : (n.f & I) !== 0 && this.#r.add(n), this.#l(n.deps), E(n, b);
  }
  /**
   * @param {Value[] | null} deps
   */
  #l(t) {
    if (t !== null)
      for (const n of t)
        (n.f & y) === 0 || (n.f & ne) === 0 || (n.f ^= ne, this.#l(
          /** @type {Derived} */
          n.deps
        ));
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & G) === 0 && (this.current.set(t, t.v), N?.set(t, t.v));
  }
  activate() {
    $ = this, this.apply();
  }
  deactivate() {
    $ === this && ($ = null, N = null);
  }
  flush() {
    if (this.activate(), C.length > 0) {
      if (St(), $ !== null && $ !== this)
        return;
    } else this.#u === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #a() {
    if (this.#s === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#u === 0 && this.#c();
  }
  #c() {
    if (xe.size > 1) {
      this.previous.clear();
      var t = N, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of xe) {
        if (i === this) {
          n = !1;
          continue;
        }
        const f = [];
        for (const [u, o] of this.current) {
          if (i.current.has(u))
            if (n && o !== i.current.get(u))
              i.current.set(u, o);
            else
              continue;
          f.push(u);
        }
        if (f.length === 0)
          continue;
        const l = [...i.current.keys()].filter((u) => !this.current.has(u));
        if (l.length > 0) {
          var s = C;
          C = [];
          const u = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
          for (const c of f)
            kt(c, l, u, o);
          if (C.length > 0) {
            $ = i, i.apply();
            for (const c of C)
              i.#n(c, r);
            i.deactivate();
          }
          C = s;
        }
      }
      $ = null, N = t;
    }
    this.committed = !0, xe.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#u += 1, t && (this.#s += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#u -= 1, t && (this.#s -= 1), this.revive();
  }
  revive() {
    for (const t of this.#f)
      this.#r.delete(t), E(t, R), he(t);
    for (const t of this.#r)
      E(t, I), he(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#t.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#o ??= $t()).promise;
  }
  static ensure() {
    if ($ === null) {
      const t = $ = new O();
      xe.add($), ve || O.enqueue(() => {
        $ === t && t.flush();
      });
    }
    return $;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    tt(t);
  }
  apply() {
  }
}
function He(e) {
  var t = ve;
  ve = !0;
  try {
    for (var n; ; ) {
      if (Sn(), C.length === 0 && ($?.flush(), C.length === 0))
        return Ie = null, /** @type {T} */
        n;
      St();
    }
  } finally {
    ve = t;
  }
}
function St() {
  var e = ee;
  Ve = !0;
  var t = null;
  try {
    var n = 0;
    for (De(!0); C.length > 0; ) {
      var r = O.ensure();
      if (n++ > 1e3) {
        var s, i;
        kn();
      }
      r.process(C), W.clear();
    }
  } finally {
    Ve = !1, De(e), Ie = null;
  }
}
function kn() {
  try {
    dn();
  } catch (e) {
    ce(e, Ie);
  }
}
let B = null;
function ut(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (V | K)) === 0 && be(r) && (B = /* @__PURE__ */ new Set(), me(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? qt(r) : r.fn = null), B?.size > 0)) {
        W.clear();
        for (const s of B) {
          if ((s.f & (V | K)) !== 0) continue;
          const i = [s];
          let f = s.parent;
          for (; f !== null; )
            B.has(f) && (B.delete(f), i.push(f)), f = f.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const u = i[l];
            (u.f & (V | K)) === 0 && me(u);
          }
        }
        B.clear();
      }
    }
    B = null;
  }
}
function kt(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & y) !== 0 ? kt(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (i & (Xe | U)) !== 0 && (i & R) === 0 && Rt(s, t, r) && (E(s, R), he(
        /** @type {Effect} */
        s
      ));
    }
}
function Rt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (t.includes(s))
        return !0;
      if ((s.f & y) !== 0 && Rt(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function he(e) {
  for (var t = Ie = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ve && t === v && (n & U) !== 0 && (n & gt) === 0)
      return;
    if ((n & (J | re)) !== 0) {
      if ((n & b) === 0) return;
      t.f ^= b;
    }
  }
  C.push(t);
}
function Rn(e) {
  let t = 0, n = we(0), r;
  return () => {
    ge() && (k(n), Mt(() => (t === 0 && (r = tr(() => e(() => pe(n)))), t += 1, () => {
      tt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, pe(n));
      });
    })));
  };
}
var An = Ce | se | Le;
function Cn(e, t, n) {
  new Nn(e, t, n);
}
class Nn {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #u = S ? g : null;
  /** @type {BoundaryProps} */
  #s;
  /** @type {((anchor: Node) => void)} */
  #o;
  /** @type {Effect} */
  #f;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {DocumentFragment | null} */
  #l = null;
  /** @type {TemplateNode | null} */
  #a = null;
  #c = 0;
  #h = 0;
  #_ = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #y = Rn(() => (this.#d = we(this.#c), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#s = n, this.#o = r, this.parent = /** @type {Effect} */
    v.b, this.#t = !!this.#s.pending, this.#f = Wn(() => {
      if (v.b = this, S) {
        const i = this.#u;
        yt(), /** @type {Comment} */
        i.nodeType === Me && /** @type {Comment} */
        i.data === vt ? this.#w() : this.#m();
      } else {
        var s = this.#$();
        try {
          this.#r = Q(() => r(s));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#a?.remove();
      };
    }, An), S && (this.#e = g);
  }
  #m() {
    try {
      this.#r = Q(() => this.#o(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #w() {
    const t = this.#s.pending;
    t && (this.#n = Q(() => t(this.#e)), O.enqueue(() => {
      var n = this.#$();
      this.#r = this.#v(() => (O.ensure(), Q(() => this.#o(n)))), this.#h > 0 ? this.#p() : (Se(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#t = !1);
    }));
  }
  #$() {
    var t = this.#e;
    return this.#t && (this.#a = st(), this.#e.before(this.#a), t = this.#a), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#s.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #v(t) {
    var n = v, r = _, s = F;
    j(this.#f), x(this.#f), ae(this.#f.ctx);
    try {
      return t();
    } catch (i) {
      return Tt(i), null;
    } finally {
      j(n), x(r), ae(s);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#s.pending
    );
    this.#r !== null && (this.#l = document.createDocumentFragment(), this.#l.append(
      /** @type {TemplateNode} */
      this.#a
    ), Qn(this.#r, this.#l)), this.#n === null && (this.#n = Q(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #g(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#g(t);
      return;
    }
    this.#h += t, this.#h === 0 && (this.#t = !1, this.#n && Se(this.#n, () => {
      this.#n = null;
    }), this.#l && (this.#e.before(this.#l), this.#l = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#g(t), this.#c += t, this.#d && Oe(this.#d, this.#c);
  }
  get_effect_pending() {
    return this.#y(), k(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#s.onerror;
    let r = this.#s.failed;
    if (this.#_ || !n && !r)
      throw t;
    this.#r && (P(this.#r), this.#r = null), this.#n && (P(this.#n), this.#n = null), this.#i && (P(this.#i), this.#i = null), S && (oe(
      /** @type {TemplateNode} */
      this.#u
    ), wn(), oe(bn()));
    var s = !1, i = !1;
    const f = () => {
      if (s) {
        yn();
        return;
      }
      s = !0, i && gn(), O.ensure(), this.#c = 0, this.#i !== null && Se(this.#i, () => {
        this.#i = null;
      }), this.#t = this.has_pending_snippet(), this.#r = this.#v(() => (this.#_ = !1, Q(() => this.#o(this.#e)))), this.#h > 0 ? this.#p() : this.#t = !1;
    };
    var l = _;
    try {
      x(null), i = !0, n?.(t, f), i = !1;
    } catch (u) {
      ce(u, this.#f && this.#f.parent);
    } finally {
      x(l);
    }
    r && tt(() => {
      this.#i = this.#v(() => {
        O.ensure(), this.#_ = !0;
        try {
          return Q(() => {
            r(
              this.#e,
              () => t,
              () => f
            );
          });
        } catch (u) {
          return ce(
            u,
            /** @type {Effect} */
            this.#f.parent
          ), null;
        } finally {
          this.#_ = !1;
        }
      });
    });
  }
}
function On(e, t, n, r) {
  const s = nt;
  if (n.length === 0 && e.length === 0) {
    r(t.map(s));
    return;
  }
  var i = $, f = (
    /** @type {Effect} */
    v
  ), l = Pn();
  function u() {
    Promise.all(n.map((o) => /* @__PURE__ */ Dn(o))).then((o) => {
      l();
      try {
        r([...t.map(s), ...o]);
      } catch (c) {
        (f.f & V) === 0 && ce(c, f);
      }
      i?.deactivate(), Ne();
    }).catch((o) => {
      ce(o, f);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    l();
    try {
      return u();
    } finally {
      i?.deactivate(), Ne();
    }
  }) : u();
}
function Pn() {
  var e = v, t = _, n = F, r = $;
  return function(i = !0) {
    j(e), x(t), ae(n), i && r?.activate();
  };
}
function Ne() {
  j(null), x(null), ae(null);
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  var t = y | R, n = _ !== null && (_.f & y) !== 0 ? (
    /** @type {Derived} */
    _
  ) : null;
  return v !== null && (v.f |= se), {
    ctx: F,
    deps: null,
    effects: null,
    equals: mt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      m
    ),
    wv: 0,
    parent: n ?? v,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Dn(e, t) {
  let n = (
    /** @type {Effect | null} */
    v
  );
  n === null && hn();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = we(
    /** @type {V} */
    m
  ), f = !_, l = /* @__PURE__ */ new Map();
  return Kn(() => {
    var u = $t();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        o === $ && o.committed && o.deactivate(), Ne();
      });
    } catch (a) {
      u.reject(a), Ne();
    }
    var o = (
      /** @type {Batch} */
      $
    );
    if (f) {
      var c = !r.is_pending();
      r.update_pending_count(1), o.increment(c), l.get(o)?.reject(le), l.delete(o), l.set(o, u);
    }
    const d = (a, h = void 0) => {
      if (o.activate(), h)
        h !== le && (i.f |= G, Oe(i, h));
      else {
        (i.f & G) !== 0 && (i.f ^= G), Oe(i, a);
        for (const [p, Y] of l) {
          if (l.delete(p), p === o) break;
          Y.reject(le);
        }
      }
      f && (r.update_pending_count(-1), o.decrement(c));
    };
    u.promise.then(d, (a) => d(null, a || "unknown"));
  }), Bn(() => {
    for (const u of l.values())
      u.reject(le);
  }), new Promise((u) => {
    function o(c) {
      function d() {
        c === s ? u(i) : o(s);
      }
      c.then(d, d);
    }
    o(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  const t = /* @__PURE__ */ nt(e);
  return Bt(t), t;
}
function At(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      P(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ln(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & y) === 0)
      return (t.f & V) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function rt(e) {
  var t, n = v;
  j(Ln(e));
  try {
    e.f &= ~ne, At(e), t = zt(e);
  } finally {
    j(n);
  }
  return t;
}
function Ct(e) {
  var t = rt(e);
  if (e.equals(t) || ($?.is_fork || (e.v = t), e.wv = Ht()), !de)
    if (N !== null)
      (ge() || $?.is_fork) && N.set(e, t);
    else {
      var n = (e.f & D) === 0 ? I : b;
      E(e, n);
    }
}
let Ue = /* @__PURE__ */ new Set();
const W = /* @__PURE__ */ new Map();
let Nt = !1;
function we(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mt,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  const n = we(e);
  return Bt(n), n;
}
// @__NO_SIDE_EFFECTS__
function Mn(e, t = !1, n = !0) {
  const r = we(e);
  return t || (r.equals = xn), r;
}
function L(e, t, n = !1) {
  _ !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!M || (_.f & lt) !== 0) && Et() && (_.f & (y | U | Xe | lt)) !== 0 && !H?.includes(e) && $n();
  let r = n ? _e(t) : t;
  return Oe(e, r);
}
function Oe(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    de ? W.set(e, t) : W.set(e, n), e.v = t;
    var r = O.ensure();
    r.capture(e, n), (e.f & y) !== 0 && ((e.f & R) !== 0 && rt(
      /** @type {Derived} */
      e
    ), E(e, (e.f & D) !== 0 ? b : I)), e.wv = Ht(), Ot(e, R), v !== null && (v.f & b) !== 0 && (v.f & (re | J)) === 0 && (A === null ? Xn([e]) : A.push(e)), !r.is_fork && Ue.size > 0 && !Nt && In();
  }
  return t;
}
function In() {
  Nt = !1;
  var e = ee;
  De(!0);
  const t = Array.from(Ue);
  try {
    for (const n of t)
      (n.f & b) !== 0 && E(n, I), be(n) && me(n);
  } finally {
    De(e);
  }
  Ue.clear();
}
function pe(e) {
  L(e, e.v + 1);
}
function Ot(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, s = 0; s < r; s++) {
      var i = n[s], f = i.f, l = (f & R) === 0;
      if (l && E(i, t), (f & y) !== 0) {
        var u = (
          /** @type {Derived} */
          i
        );
        N?.delete(u), (f & ne) === 0 && (f & D && (i.f |= ne), Ot(u, I));
      } else l && ((f & U) !== 0 && B !== null && B.add(
        /** @type {Effect} */
        i
      ), he(
        /** @type {Effect} */
        i
      ));
    }
}
function _e(e) {
  if (typeof e != "object" || e === null || qe in e)
    return e;
  const t = ln(e);
  if (t !== sn && t !== fn)
    return e;
  var n = /* @__PURE__ */ new Map(), r = tn(e), s = /* @__PURE__ */ z(0), i = te, f = (l) => {
    if (te === i)
      return l();
    var u = _, o = te;
    x(null), ct(i);
    var c = l();
    return x(u), ct(o), c;
  };
  return r && n.set("length", /* @__PURE__ */ z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && vn();
        var c = n.get(u);
        return c === void 0 ? c = f(() => {
          var d = /* @__PURE__ */ z(o.value);
          return n.set(u, d), d;
        }) : L(c, o.value, !0), !0;
      },
      deleteProperty(l, u) {
        var o = n.get(u);
        if (o === void 0) {
          if (u in l) {
            const c = f(() => /* @__PURE__ */ z(m));
            n.set(u, c), pe(s);
          }
        } else
          L(o, m), pe(s);
        return !0;
      },
      get(l, u, o) {
        if (u === qe)
          return e;
        var c = n.get(u), d = u in l;
        if (c === void 0 && (!d || ue(l, u)?.writable) && (c = f(() => {
          var h = _e(d ? l[u] : m), p = /* @__PURE__ */ z(h);
          return p;
        }), n.set(u, c)), c !== void 0) {
          var a = k(c);
          return a === m ? void 0 : a;
        }
        return Reflect.get(l, u, o);
      },
      getOwnPropertyDescriptor(l, u) {
        var o = Reflect.getOwnPropertyDescriptor(l, u);
        if (o && "value" in o) {
          var c = n.get(u);
          c && (o.value = k(c));
        } else if (o === void 0) {
          var d = n.get(u), a = d?.v;
          if (d !== void 0 && a !== m)
            return {
              enumerable: !0,
              configurable: !0,
              value: a,
              writable: !0
            };
        }
        return o;
      },
      has(l, u) {
        if (u === qe)
          return !0;
        var o = n.get(u), c = o !== void 0 && o.v !== m || Reflect.has(l, u);
        if (o !== void 0 || v !== null && (!c || ue(l, u)?.writable)) {
          o === void 0 && (o = f(() => {
            var a = c ? _e(l[u]) : m, h = /* @__PURE__ */ z(a);
            return h;
          }), n.set(u, o));
          var d = k(o);
          if (d === m)
            return !1;
        }
        return c;
      },
      set(l, u, o, c) {
        var d = n.get(u), a = u in l;
        if (r && u === "length")
          for (var h = o; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var p = n.get(h + "");
            p !== void 0 ? L(p, m) : h in l && (p = f(() => /* @__PURE__ */ z(m)), n.set(h + "", p));
          }
        if (d === void 0)
          (!a || ue(l, u)?.writable) && (d = f(() => /* @__PURE__ */ z(void 0)), L(d, _e(o)), n.set(u, d));
        else {
          a = d.v !== m;
          var Y = f(() => _e(o));
          L(d, Y);
        }
        var Z = Reflect.getOwnPropertyDescriptor(l, u);
        if (Z?.set && Z.set.call(c, o), !a) {
          if (r && typeof u == "string") {
            var it = (
              /** @type {Source<number>} */
              n.get("length")
            ), je = Number(u);
            Number.isInteger(je) && je >= it.v && L(it, je + 1);
          }
          pe(s);
        }
        return !0;
      },
      ownKeys(l) {
        k(s);
        var u = Reflect.ownKeys(l).filter((d) => {
          var a = n.get(d);
          return a === void 0 || a.v !== m;
        });
        for (var [o, c] of n)
          c.v !== m && !(o in l) && u.push(o);
        return u;
      },
      setPrototypeOf() {
        pn();
      }
    }
  );
}
var ot, Pt, Dt, Ft;
function ze() {
  if (ot === void 0) {
    ot = window, Pt = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Dt = ue(t, "firstChild").get, Ft = ue(t, "nextSibling").get, ft(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ft(n) && (n.__t = void 0);
  }
}
function st(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return (
    /** @type {TemplateNode | null} */
    Dt.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  return (
    /** @type {TemplateNode | null} */
    Ft.call(e)
  );
}
function jn(e, t) {
  if (!S)
    return /* @__PURE__ */ Pe(e);
  var n = /* @__PURE__ */ Pe(g);
  return n === null && (n = g.appendChild(st())), oe(n), n;
}
function qn(e) {
  e.textContent = "";
}
function Lt(e) {
  var t = _, n = v;
  x(null), j(null);
  try {
    return e();
  } finally {
    x(t), j(n);
  }
}
function Yn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function q(e, t, n) {
  var r = v;
  r !== null && (r.f & K) !== 0 && (e |= K);
  var s = {
    ctx: F,
    deps: null,
    nodes: null,
    f: e | R | D,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      me(s), s.f |= Qe;
    } catch (l) {
      throw P(s), l;
    }
  else t !== null && he(s);
  var i = s;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & se) === 0 && (i = i.first, (e & U) !== 0 && (e & Ce) !== 0 && i !== null && (i.f |= Ce)), i !== null && (i.parent = r, r !== null && Yn(i, r), _ !== null && (_.f & y) !== 0 && (e & J) === 0)) {
    var f = (
      /** @type {Derived} */
      _
    );
    (f.effects ??= []).push(i);
  }
  return s;
}
function ge() {
  return _ !== null && !M;
}
function Bn(e) {
  const t = q(Ze, null, !1);
  return E(t, b), t.teardown = e, t;
}
function Vn(e) {
  return q(Je | an, e, !1);
}
function Hn(e) {
  O.ensure();
  const t = q(J | se, e, !0);
  return () => {
    P(t);
  };
}
function Un(e) {
  O.ensure();
  const t = q(J | se, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Se(t, () => {
      P(t), r(void 0);
    }) : (P(t), r(void 0));
  });
}
function zn(e) {
  return q(Je, e, !1);
}
function Kn(e) {
  return q(Xe | se, e, !0);
}
function Mt(e, t = 0) {
  return q(Ze | t, e, !0);
}
function Gn(e, t = [], n = [], r = []) {
  On(r, t, n, (s) => {
    q(Ze, () => e(...s.map(k)), !0);
  });
}
function Wn(e, t = 0) {
  var n = q(U | t, e, !0);
  return n;
}
function Q(e) {
  return q(re | se, e, !0);
}
function It(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = de, r = _;
    at(!0), x(null);
    try {
      t.call(null);
    } finally {
      at(n), x(r);
    }
  }
}
function jt(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Lt(() => {
      s.abort(le);
    });
    var r = n.next;
    (n.f & J) !== 0 ? n.parent = null : P(n, t), n = r;
  }
}
function Jn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & re) === 0 && P(t), t = n;
  }
}
function P(e, t = !0) {
  var n = !1;
  (t || (e.f & gt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Zn(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), jt(e, t && !n), Fe(e, 0), E(e, V);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  It(e);
  var s = e.parent;
  s !== null && s.first !== null && qt(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Zn(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ ie(e);
    e.remove(), e = n;
  }
}
function qt(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Se(e, t, n = !0) {
  var r = [];
  Yt(e, r, !0);
  var s = () => {
    n && P(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var f = () => --i || s();
    for (var l of r)
      l.out(f);
  } else
    s();
}
function Yt(e, t, n) {
  if ((e.f & K) === 0) {
    e.f ^= K;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var i = s.next, f = (s.f & Ce) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & re) !== 0 && (e.f & U) !== 0;
      Yt(s, t, f ? n : !1), s = i;
    }
  }
}
function Qn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ ie(n);
      t.append(n), n = s;
    }
}
let ee = !1;
function De(e) {
  ee = e;
}
let de = !1;
function at(e) {
  de = e;
}
let _ = null, M = !1;
function x(e) {
  _ = e;
}
let v = null;
function j(e) {
  v = e;
}
let H = null;
function Bt(e) {
  _ !== null && (H === null ? H = [e] : H.push(e));
}
let w = null, T = 0, A = null;
function Xn(e) {
  A = e;
}
let Vt = 1, ye = 0, te = ye;
function ct(e) {
  te = e;
}
function Ht() {
  return ++Vt;
}
function be(e) {
  var t = e.f;
  if ((t & R) !== 0)
    return !0;
  if (t & y && (e.f &= ~ne), (t & I) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, s = 0; s < r; s++) {
        var i = n[s];
        if (be(
          /** @type {Derived} */
          i
        ) && Ct(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & D) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    N === null && E(e, b);
  }
  return !1;
}
function Ut(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !H?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & y) !== 0 ? Ut(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? E(i, R) : (i.f & b) !== 0 && E(i, I), he(
        /** @type {Effect} */
        i
      ));
    }
}
function zt(e) {
  var t = w, n = T, r = A, s = _, i = H, f = F, l = M, u = te, o = e.f;
  w = /** @type {null | Value[]} */
  null, T = 0, A = null, _ = (o & (re | J)) === 0 ? e : null, H = null, ae(e.ctx), M = !1, te = ++ye, e.ac !== null && (Lt(() => {
    e.ac.abort(le);
  }), e.ac = null);
  try {
    e.f |= Be;
    var c = (
      /** @type {Function} */
      e.fn
    ), d = c(), a = e.deps;
    if (w !== null) {
      var h;
      if (Fe(e, T), a !== null && T > 0)
        for (a.length = T + w.length, h = 0; h < w.length; h++)
          a[T + h] = w[h];
      else
        e.deps = a = w;
      if (ge() && (e.f & D) !== 0)
        for (h = T; h < a.length; h++)
          (a[h].reactions ??= []).push(e);
    } else a !== null && T < a.length && (Fe(e, T), a.length = T);
    if (Et() && A !== null && !M && a !== null && (e.f & (y | I | R)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      A.length; h++)
        Ut(
          A[h],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (ye++, A !== null && (r === null ? r = A : r.push(.../** @type {Source[]} */
    A))), (e.f & G) !== 0 && (e.f ^= G), d;
  } catch (p) {
    return Tt(p);
  } finally {
    e.f ^= Be, w = t, T = n, A = r, _ = s, H = i, ae(f), M = l, te = u;
  }
}
function er(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = nn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & y) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (w === null || !w.includes(t)) && (E(t, I), (t.f & D) !== 0 && (t.f ^= D, t.f &= ~ne), At(
    /** @type {Derived} **/
    t
  ), Fe(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Fe(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      er(e, n[r]);
}
function me(e) {
  var t = e.f;
  if ((t & V) === 0) {
    E(e, b);
    var n = v, r = ee;
    v = e, ee = !0;
    try {
      (t & (U | on)) !== 0 ? Jn(e) : jt(e), It(e);
      var s = zt(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Vt;
      var i;
      Ye && Tn && (e.f & R) !== 0 && e.deps;
    } finally {
      ee = r, v = n;
    }
  }
}
function k(e) {
  var t = e.f, n = (t & y) !== 0;
  if (_ !== null && !M) {
    var r = v !== null && (v.f & V) !== 0;
    if (!r && !H?.includes(e)) {
      var s = _.deps;
      if ((_.f & Be) !== 0)
        e.rv < ye && (e.rv = ye, w === null && s !== null && s[T] === e ? T++ : w === null ? w = [e] : w.includes(e) || w.push(e));
      else {
        (_.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [_] : i.includes(_) || i.push(_);
      }
    }
  }
  if (de) {
    if (W.has(e))
      return W.get(e);
    if (n) {
      var f = (
        /** @type {Derived} */
        e
      ), l = f.v;
      return ((f.f & b) === 0 && f.reactions !== null || Gt(f)) && (l = rt(f)), W.set(f, l), l;
    }
  } else n && (!N?.has(e) || $?.is_fork && !ge()) && (f = /** @type {Derived} */
  e, be(f) && Ct(f), ee && ge() && (f.f & D) === 0 && Kt(f));
  if (N?.has(e))
    return N.get(e);
  if ((e.f & G) !== 0)
    throw e.v;
  return e.v;
}
function Kt(e) {
  if (e.deps !== null) {
    e.f ^= D;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & y) !== 0 && (t.f & D) === 0 && Kt(
        /** @type {Derived} */
        t
      );
  }
}
function Gt(e) {
  if (e.v === m) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (W.has(t) || (t.f & y) !== 0 && Gt(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function tr(e) {
  var t = M;
  try {
    return M = !0, e();
  } finally {
    M = t;
  }
}
const nr = -7169;
function E(e, t) {
  e.f = e.f & nr | t;
}
const Wt = /* @__PURE__ */ new Set(), Ke = /* @__PURE__ */ new Set();
function rr(e) {
  for (var t = 0; t < e.length; t++)
    Wt.add(e[t]);
  for (var n of Ke)
    n(e);
}
let ht = null;
function Te(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  ht = e;
  var f = 0, l = ht === e && e.__root;
  if (l) {
    var u = s.indexOf(l);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var o = s.indexOf(t);
    if (o === -1)
      return;
    u <= o && (f = u);
  }
  if (i = /** @type {Element} */
  s[f] || e.target, i !== t) {
    Ae(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = _, d = v;
    x(null), j(null);
    try {
      for (var a, h = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var Y = i["__" + r];
          Y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && Y.call(i, e);
        } catch (Z) {
          a ? h.push(Z) : a = Z;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (a) {
        for (let Z of h)
          queueMicrotask(() => {
            throw Z;
          });
        throw a;
      }
    } finally {
      e.__root = t, delete e.currentTarget, x(c), j(d);
    }
  }
}
function sr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ge(e, t) {
  var n = (
    /** @type {Effect} */
    v
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
  var n = (t & en) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    if (S)
      return Ge(g, null), g;
    r === void 0 && (r = sr(s ? e : "<!>" + e), r = /** @type {TemplateNode} */
    /* @__PURE__ */ Pe(r));
    var i = (
      /** @type {TemplateNode} */
      n || Pt ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Ge(i, i), i;
  };
}
function Jt(e, t) {
  if (S) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      v
    );
    ((n.f & Qe) === 0 || n.nodes.end === null) && (n.nodes.end = g), yt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const fr = ["touchstart", "touchmove"];
function lr(e) {
  return fr.includes(e);
}
function ur(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Zt(e, t) {
  return Qt(e, t);
}
function or(e, t) {
  ze(), t.intro = t.intro ?? !1;
  const n = t.target, r = S, s = g;
  try {
    for (var i = /* @__PURE__ */ Pe(n); i && (i.nodeType !== Me || /** @type {Comment} */
    i.data !== _t); )
      i = /* @__PURE__ */ ie(i);
    if (!i)
      throw $e;
    Ee(!0), oe(
      /** @type {Comment} */
      i
    );
    const f = Qt(e, { ...t, anchor: i });
    return Ee(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw f;
    return f !== $e && console.warn("Failed to hydrate: ", f), t.recover === !1 && _n(), ze(), qn(n), Ee(!1), Zt(e, t);
  } finally {
    Ee(r), oe(s);
  }
}
const fe = /* @__PURE__ */ new Map();
function Qt(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: f = !0 }) {
  ze();
  var l = /* @__PURE__ */ new Set(), u = (d) => {
    for (var a = 0; a < d.length; a++) {
      var h = d[a];
      if (!l.has(h)) {
        l.add(h);
        var p = lr(h);
        t.addEventListener(h, Te, { passive: p });
        var Y = fe.get(h);
        Y === void 0 ? (document.addEventListener(h, Te, { passive: p }), fe.set(h, 1)) : fe.set(h, Y + 1);
      }
    }
  };
  u(rn(Wt)), Ke.add(u);
  var o = void 0, c = Un(() => {
    var d = n ?? t.appendChild(st());
    return Cn(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (a) => {
        if (i) {
          wt({});
          var h = (
            /** @type {ComponentContext} */
            F
          );
          h.c = i;
        }
        if (s && (r.$$events = s), S && Ge(
          /** @type {TemplateNode} */
          a,
          null
        ), o = e(a, r) || {}, S && (v.nodes.end = g, g === null || g.nodeType !== Me || /** @type {Comment} */
        g.data !== pt))
          throw et(), $e;
        i && bt();
      }
    ), () => {
      for (var a of l) {
        t.removeEventListener(a, Te);
        var h = (
          /** @type {number} */
          fe.get(a)
        );
        --h === 0 ? (document.removeEventListener(a, Te), fe.delete(a)) : fe.set(a, h);
      }
      Ke.delete(u), d !== n && d.parentNode?.removeChild(d);
    };
  });
  return We.set(o, c), o;
}
let We = /* @__PURE__ */ new WeakMap();
function ar(e, t) {
  const n = We.get(e);
  return n ? (We.delete(e), n(t)) : Promise.resolve();
}
function cr(e, t) {
  zn(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
function dt(e, t, n, r) {
  var s = (
    /** @type {V} */
    r
  ), i = !0, f = () => (i && (i = !1, s = /** @type {V} */
  r), s), l;
  l = /** @type {V} */
  e[t], l === void 0 && r !== void 0 && (l = f());
  var u;
  u = () => {
    var a = (
      /** @type {V} */
      e[t]
    );
    return a === void 0 ? f() : (i = !0, a);
  };
  var o = !1, c = /* @__PURE__ */ nt(() => (o = !1, u())), d = (
    /** @type {Effect} */
    v
  );
  return (
    /** @type {() => V} */
    (function(a, h) {
      if (arguments.length > 0) {
        const p = h ? k(c) : a;
        return L(c, p), o = !0, s !== void 0 && (s = p), a;
      }
      return de && o || (d.f & V) !== 0 ? c.v : k(c);
    })
  );
}
function hr(e) {
  return new dr(e);
}
class dr {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, f) => {
      var l = /* @__PURE__ */ Mn(f, !1, !1);
      return n.set(i, l), l;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, f) {
          return k(n.get(f) ?? r(f, Reflect.get(i, f)));
        },
        has(i, f) {
          return f === cn ? !0 : (k(n.get(f) ?? r(f, Reflect.get(i, f))), Reflect.has(i, f));
        },
        set(i, f, l) {
          return L(n.get(f) ?? r(f, l), l), Reflect.set(i, f, l);
        }
      }
    );
    this.#e = (t.hydrate ? or : Zt)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && He(), this.#t = s.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Ae(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(f) {
          this.#e[i] = f;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#e.$destroy = () => {
      ar(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...s) => n.call(this, ...s);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Xt;
typeof HTMLElement == "function" && (Xt = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return (i) => {
          const f = document.createElement("slot");
          s !== "default" && (f.name = s), Jt(i, f);
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = _r(this);
      for (const s of this.$$s)
        s in r && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), n.default = !0) : n[s] = t(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = ke(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = hr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Hn(() => {
        Mt(() => {
          this.$$r = !0;
          for (const s of Re(this.$$c)) {
            if (!this.$$p_d[s]?.reflect) continue;
            this.$$d[s] = this.$$c[s];
            const i = ke(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const f = this.$$c.$on(s, i);
          this.$$l_u.set(i, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ke(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Re(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function ke(e, t, n, r) {
  const s = n[e]?.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function _r(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function vr(e, t, n, r, s, i) {
  let f = class extends Xt {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Re(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Re(t).forEach((l) => {
    Ae(f.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        u = ke(l, u, t), this.$$d[l] = u;
        var o = this.$$c;
        if (o) {
          var c = ue(o, l)?.get;
          c ? o[l] = u : o.$set({ [l]: u });
        }
      }
    });
  }), r.forEach((l) => {
    Ae(f.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), e.element = /** @type {any} */
  f, f;
}
var pr = /* @__PURE__ */ ir('<button class="svelte-dfcawr"> </button>');
const $r = {
  hash: "svelte-dfcawr",
  code: `
  /* Style is automatically scoped to the component */button.svelte-dfcawr {box-sizing:border-box;font-family:inherit;font-size:inherit;padding:0.5em 1em;color:black;border-radius:5px;background-color:rgba(176, 202, 235, 0.979);border:1px solid #b5b7d8b9;outline:none;font-variant-numeric:tabular-nums;cursor:pointer;}button.svelte-dfcawr:hover {border:1px solid #0011f883;}button.svelte-dfcawr:focus {border:2px solid #0011f883;}`
};
function gr(e, t) {
  wt(t, !0), cr(e, $r);
  let n = dt(t, "startCount", 7, 0), r = dt(t, "step", 7, 1), s = /* @__PURE__ */ Fn(n);
  const i = () => {
    L(s, k(s) + r());
  };
  var f = {
    get startCount() {
      return n();
    },
    set startCount(o = 0) {
      n(o), He();
    },
    get step() {
      return r();
    },
    set step(o = 1) {
      r(o), He();
    }
  }, l = pr();
  l.__click = i;
  var u = jn(l);
  return mn(l), Gn(() => ur(u, `count is ${k(s) ?? ""}`)), Jt(e, l), bt(f);
}
rr(["click"]);
customElements.define("ui-counter", vr(
  gr,
  {
    startCount: { attribute: "start-count", type: "Number" },
    step: { attribute: "step", type: "Number" }
  },
  [],
  [],
  !0
));
