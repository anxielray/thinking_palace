(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[46], {
    3009: function (t, e, i) {
        "use strict";
        /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = i(2310)
            , r = Symbol.for("react.element")
            , s = Symbol.for("react.fragment")
            , o = Object.prototype.hasOwnProperty
            , a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
            , l = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
        function u(t, e, i) {
            var n, s = {}, u = null, h = null;
            for (n in void 0 !== i && (u = "" + i),
                void 0 !== e.key && (u = "" + e.key),
                void 0 !== e.ref && (h = e.ref),
                e)
                o.call(e, n) && !l.hasOwnProperty(n) && (s[n] = e[n]);
            if (t && t.defaultProps)
                for (n in e = t.defaultProps)
                    void 0 === s[n] && (s[n] = e[n]);
            return {
                $$typeof: r,
                type: t,
                key: u,
                ref: h,
                props: s,
                _owner: a.current
            }
        }
        e.Fragment = s,
            e.jsx = u,
            e.jsxs = u
    },
    3955: function (t, e, i) {
        "use strict";
        t.exports = i(3009)
    },
    5846: function (t, e, i) {
        t.exports = i(414)
    },
    9467: function (t, e, i) {
        "use strict";
        i.d(e, {
            s: function () {
                return o
            }
        });
        var n = i(1553)
            , r = i(6118);
        let s = (0,
            r.X)(() => void 0 !== window.ScrollTimeline);
        class o {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                    this.animations = t.filter(Boolean)
            }
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++)
                    this.animations[i][t] = e
            }
            attachTimeline(t) {
                let e = this.animations.map(e => {
                    if (!s() || !e.attachTimeline)
                        return e.pause(),
                            function (t, e) {
                                let i;
                                let r = () => {
                                    let { currentTime: n } = e
                                        , r = null === n ? 0 : n.value
                                        , s = r / 100;
                                    i !== s && t(s),
                                        i = s
                                }
                                    ;
                                return n.Wi.update(r, !0),
                                    () => (0,
                                        n.Pn)(r)
                            }(t => {
                                e.time = e.duration * t
                            }
                                , t);
                    e.attachTimeline(t)
                }
                );
                return () => {
                    e.forEach((t, e) => {
                        t && t(),
                            this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
    },
    5457: function (t, e, i) {
        "use strict";
        i.d(e, {
            j: function () {
                return k
            }
        });
        var n, r = i(3602), s = i(8253), o = i(2864), a = i(9467), l = i(6031), u = i(1568), h = i(1198), c = i(5465), d = i(2770), p = i(1667), f = i(2098), m = i(9683), v = i(8460), g = i(3401), y = i(2581), x = i(769);
        function P(t, e, i, n) {
            var r;
            return "number" == typeof e ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : "<" === e ? i : null !== (r = n.get(e)) && void 0 !== r ? r : t
        }
        let w = (t, e, i) => {
            let n = e - t;
            return ((i - t) % n + n) % n + t
        }
            ;
        var T = i(5747)
            , b = i(3563)
            , A = i(6076);
        function S(t, e) {
            return t.at !== e.at ? t.at - e.at : null === t.value ? 1 : null === e.value ? -1 : 0
        }
        function V(t, e) {
            return e.has(t) || e.set(t, {}),
                e.get(t)
        }
        function C(t, e) {
            return e[t] || (e[t] = []),
                e[t]
        }
        let M = t => "number" == typeof t
            , E = t => t.every(M);
        function R(t, e, i, n) {
            let d = (0,
                r.I)(t, n)
                , p = d.length;
            (0,
                o.k)(!!p, "No valid element provided.");
            let f = [];
            for (let t = 0; t < p; t++) {
                let n = d[t];
                s.R.has(n) || function (t) {
                    let e = {
                        presenceContext: null,
                        props: {},
                        visualState: {
                            renderState: {
                                transform: {},
                                transformOrigin: {},
                                style: {},
                                vars: {},
                                attrs: {}
                            },
                            latestValues: {}
                        }
                    }
                        , i = (0,
                            u.v)(t) ? new h.e(e) : new c.W(e);
                    i.mount(t),
                        s.R.set(t, i)
                }(n);
                let r = s.R.get(n)
                    , o = {
                        ...i
                    };
                "function" == typeof o.delay && (o.delay = o.delay(t, p)),
                    f.push(...(0,
                        l.w)(r, {
                            ...e,
                            transition: o
                        }, {}))
            }
            return new a.s(f)
        }
        let D = t => Array.isArray(t) && Array.isArray(t[0])
            , k = function (t, e, i) {
                let s;
                return s = D(t) ? function (t, e, i) {
                    let n = []
                        , s = function (t, { defaultTransition: e = {}, ...i } = {}, n) {
                            let s = e.duration || .3
                                , o = new Map
                                , a = new Map
                                , l = {}
                                , u = new Map
                                , h = 0
                                , c = 0
                                , d = 0;
                            for (let i = 0; i < t.length; i++) {
                                let o = t[i];
                                if ("string" == typeof o) {
                                    u.set(o, c);
                                    continue
                                }
                                if (!Array.isArray(o)) {
                                    u.set(o.name, P(c, o.at, h, u));
                                    continue
                                }
                                let [y, S, R = {}] = o;
                                void 0 !== R.at && (c = P(c, R.at, h, u));
                                let D = 0
                                    , k = (t, i, n, r = 0, o = 0) => {
                                        let a = Array.isArray(t) ? t : [t]
                                            , { delay: l = 0, times: u = (0,
                                                v.Y)(a), type: h = "keyframes", ...y } = i
                                            , { ease: x = e.ease || "easeOut", duration: P } = i
                                            , S = "function" == typeof l ? l(r, o) : l
                                            , V = a.length;
                                        if (V <= 2 && "spring" === h) {
                                            let t = 100;
                                            if (2 === V && E(a)) {
                                                let e = a[1] - a[0];
                                                t = Math.abs(e)
                                            }
                                            let e = {
                                                ...y
                                            };
                                            void 0 !== P && (e.duration = (0,
                                                m.w)(P));
                                            let i = function (t, e = 100) {
                                                let i = (0,
                                                    p.S)({
                                                        keyframes: [0, e],
                                                        ...t
                                                    })
                                                    , n = Math.min((0,
                                                        f.i)(i), f.E);
                                                return {
                                                    type: "keyframes",
                                                    ease: t => i.next(n * t).value / e,
                                                    duration: (0,
                                                        m.X)(n)
                                                }
                                            }(e, t);
                                            x = i.ease,
                                                P = i.duration
                                        }
                                        null != P || (P = s);
                                        let C = c + S
                                            , M = C + P;
                                        1 === u.length && 0 === u[0] && (u[1] = 1);
                                        let R = u.length - a.length;
                                        R > 0 && (0,
                                            g.c)(u, R),
                                            1 === a.length && a.unshift(null),
                                            function (t, e, i, n, r, s) {
                                                !function (t, e, i) {
                                                    for (let n = 0; n < t.length; n++) {
                                                        let r = t[n];
                                                        r.at > e && r.at < i && ((0,
                                                            b.cl)(t, r),
                                                            n--)
                                                    }
                                                }(t, r, s);
                                                for (let a = 0; a < e.length; a++) {
                                                    var o;
                                                    t.push({
                                                        value: e[a],
                                                        at: (0,
                                                            A.t)(r, s, n[a]),
                                                        easing: (o = a,
                                                            (0,
                                                                T.N)(i) ? i[w(0, i.length, o)] : i)
                                                    })
                                                }
                                            }(n, a, x, u, C, M),
                                            D = Math.max(S + P, D),
                                            d = Math.max(M, d)
                                    }
                                    ;
                                if ((0,
                                    x.i)(y)) {
                                    let t = V(y, a);
                                    k(S, R, C("default", t))
                                } else {
                                    let t = (0,
                                        r.I)(y, n, l)
                                        , e = t.length;
                                    for (let i = 0; i < e; i++) {
                                        let n = t[i]
                                            , r = V(n, a);
                                        for (let t in S) {
                                            var M;
                                            k(S[t], R[M = t] ? {
                                                ...R,
                                                ...R[M]
                                            } : {
                                                ...R
                                            }, C(t, r), i, e)
                                        }
                                    }
                                }
                                h = c,
                                    c += D
                            }
                            return a.forEach((t, n) => {
                                for (let r in t) {
                                    let s = t[r];
                                    s.sort(S);
                                    let a = []
                                        , l = []
                                        , u = [];
                                    for (let t = 0; t < s.length; t++) {
                                        let { at: e, value: i, easing: n } = s[t];
                                        a.push(i),
                                            l.push((0,
                                                y.Y)(0, d, e)),
                                            u.push(n || "easeOut")
                                    }
                                    0 !== l[0] && (l.unshift(0),
                                        a.unshift(a[0]),
                                        u.unshift("easeInOut")),
                                        1 !== l[l.length - 1] && (l.push(1),
                                            a.push(null)),
                                        o.has(n) || o.set(n, {
                                            keyframes: {},
                                            transition: {}
                                        });
                                    let h = o.get(n);
                                    h.keyframes[r] = a,
                                        h.transition[r] = {
                                            ...e,
                                            duration: d,
                                            ease: u,
                                            times: l,
                                            ...i
                                        }
                                }
                            }
                            ),
                                o
                        }(t, e, i);
                    return s.forEach(({ keyframes: t, transition: e }, i) => {
                        let r;
                        r = (0,
                            x.i)(i) ? (0,
                                d.D)(i, t.default, e.default) : R(i, t, e),
                            n.push(r)
                    }
                    ),
                        new a.s(n)
                }(t, e, n) : "object" != typeof e || Array.isArray(e) ? (0,
                    d.D)(t, e, i) : R(t, e, i, n),
                    n && n.animations.push(s),
                    s
            }
    },
    2105: function (t, e, i) {
        "use strict";
        i.d(e, {
            t: function () {
                return n
            }
        });
        let n = new Set(["opacity", "clipPath", "filter", "transform"])
    },
    1667: function (t, e, i) {
        "use strict";
        i.d(e, {
            S: function () {
                return c
            }
        });
        var n = i(9683)
            , r = i(2110)
            , s = i(2864)
            , o = i(232);
        function a(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let l = ["duration", "bounce"]
            , u = ["stiffness", "damping", "mass"];
        function h(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function c({ keyframes: t, restDelta: e, restSpeed: i, ...c }) {
            let d;
            let p = t[0]
                , f = t[t.length - 1]
                , m = {
                    done: !1,
                    value: p
                }
                , { stiffness: v, damping: g, mass: y, duration: x, velocity: P, isResolvedFromDuration: w } = function (t) {
                    let e = {
                        velocity: 0,
                        stiffness: 100,
                        damping: 10,
                        mass: 1,
                        isResolvedFromDuration: !1,
                        ...t
                    };
                    if (!h(t, u) && h(t, l)) {
                        let i = function ({ duration: t = 800, bounce: e = .25, velocity: i = 0, mass: r = 1 }) {
                            let l, u;
                            (0,
                                s.K)(t <= (0,
                                    n.w)(10), "Spring duration must be 10 seconds or less");
                            let h = 1 - e;
                            h = (0,
                                o.u)(.05, 1, h),
                                t = (0,
                                    o.u)(.01, 10, (0,
                                        n.X)(t)),
                                h < 1 ? (l = e => {
                                    let n = e * h
                                        , r = n * t
                                        , s = a(e, h);
                                    return .001 - (n - i) / s * Math.exp(-r)
                                }
                                    ,
                                    u = e => {
                                        let n = e * h
                                            , r = n * t
                                            , s = Math.pow(h, 2) * Math.pow(e, 2) * t
                                            , o = a(Math.pow(e, 2), h)
                                            , u = -l(e) + .001 > 0 ? -1 : 1;
                                        return u * ((r * i + i - s) * Math.exp(-r)) / o
                                    }
                                ) : (l = e => {
                                    let n = Math.exp(-e * t)
                                        , r = (e - i) * t + 1;
                                    return -.001 + n * r
                                }
                                    ,
                                    u = e => {
                                        let n = Math.exp(-e * t)
                                            , r = (i - e) * (t * t);
                                        return n * r
                                    }
                                );
                            let c = 5 / t
                                , d = function (t, e, i) {
                                    let n = i;
                                    for (let i = 1; i < 12; i++)
                                        n -= t(n) / e(n);
                                    return n
                                }(l, u, c);
                            if (t = (0,
                                n.w)(t),
                                isNaN(d))
                                return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                };
                            {
                                let e = Math.pow(d, 2) * r;
                                return {
                                    stiffness: e,
                                    damping: 2 * h * Math.sqrt(r * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = {
                            ...e,
                            ...i,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    }
                    return e
                }({
                    ...c,
                    velocity: -(0,
                        n.X)(c.velocity || 0)
                })
                , T = P || 0
                , b = g / (2 * Math.sqrt(v * y))
                , A = f - p
                , S = (0,
                    n.X)(Math.sqrt(v / y))
                , V = 5 > Math.abs(A);
            if (i || (i = V ? .01 : 2),
                e || (e = V ? .005 : .5),
                b < 1) {
                let t = a(S, b);
                d = e => f - Math.exp(-b * S * e) * ((T + b * S * A) / t * Math.sin(t * e) + A * Math.cos(t * e))
            } else if (1 === b)
                d = t => f - Math.exp(-S * t) * (A + (T + S * A) * t);
            else {
                let t = S * Math.sqrt(b * b - 1);
                d = e => {
                    let i = Math.min(t * e, 300);
                    return f - Math.exp(-b * S * e) * ((T + b * S * A) * Math.sinh(i) + t * A * Math.cosh(i)) / t
                }
            }
            return {
                calculatedDuration: w && x || null,
                next: t => {
                    let s = d(t);
                    if (w)
                        m.done = t >= x;
                    else {
                        let o = 0;
                        b < 1 && (o = 0 === t ? (0,
                            n.w)(T) : (0,
                                r.P)(d, t, s));
                        let a = Math.abs(o) <= i
                            , l = Math.abs(f - s) <= e;
                        m.done = a && l
                    }
                    return m.value = m.done ? f : s,
                        m
                }
            }
        }
    },
    2098: function (t, e, i) {
        "use strict";
        i.d(e, {
            E: function () {
                return n
            },
            i: function () {
                return r
            }
        });
        let n = 2e4;
        function r(t) {
            let e = 0
                , i = t.next(e);
            for (; !i.done && e < n;)
                e += 50,
                    i = t.next(e);
            return e >= n ? 1 / 0 : e
        }
    },
    2110: function (t, e, i) {
        "use strict";
        i.d(e, {
            P: function () {
                return r
            }
        });
        var n = i(1977);
        function r(t, e, i) {
            let r = Math.max(e - 5, 0);
            return (0,
                n.R)(i - t(r), e - r)
        }
    },
    3148: function (t, e, i) {
        "use strict";
        i.d(e, {
            v: function () {
                return tM
            }
        });
        var n = i(9683)
            , r = i(6400);
        let s = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
            , o = t => ({
                type: "spring",
                stiffness: 550,
                damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            })
            , a = {
                type: "keyframes",
                duration: .8
            }
            , l = {
                type: "keyframes",
                ease: [.25, .1, .35, 1],
                duration: .3
            }
            , u = (t, { keyframes: e }) => e.length > 2 ? a : r.G.has(t) ? t.startsWith("scale") ? o(e[1]) : s : l;
        var h = i(3112)
            , c = i(8794);
        let d = {
            current: !1
        }
            , p = t => null !== t;
        function f(t, { repeat: e, repeatType: i = "loop" }, n) {
            let r = t.filter(p)
                , s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
            return s && void 0 !== n ? n : r[s]
        }
        var m = i(1553)
            , v = i(1937)
            , g = i(6118)
            , y = i(1806)
            , x = i(1497)
            , P = i(2389)
            , w = i(2864)
            , T = i(7081);
        let b = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (T.P.test(t) || "0" === t) && !t.startsWith("url("));
        class A {
            constructor({ autoplay: t = !0, delay: e = 0, type: i = "keyframes", repeat: n = 0, repeatDelay: r = 0, repeatType: s = "loop", ...o }) {
                this.isStopped = !1,
                    this.hasAttemptedResolve = !1,
                    this.createdAt = x.X.now(),
                    this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: n,
                        repeatDelay: r,
                        repeatType: s,
                        ...o
                    },
                    this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (0,
                    P.m)(),
                    this._resolved
            }
            onKeyframesResolved(t, e) {
                this.resolvedAt = x.X.now(),
                    this.hasAttemptedResolve = !0;
                let { name: i, type: n, velocity: r, delay: s, onComplete: o, onUpdate: a, isGenerator: l } = this.options;
                if (!l && !function (t, e, i, n) {
                    let r = t[0];
                    if (null === r)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let s = t[t.length - 1]
                        , o = b(r, e)
                        , a = b(s, e);
                    return (0,
                        w.K)(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`),
                        !!o && !!a && (function (t) {
                            let e = t[0];
                            if (1 === t.length)
                                return !0;
                            for (let i = 0; i < t.length; i++)
                                if (t[i] !== e)
                                    return !0
                        }(t) || "spring" === i && n)
                }(t, i, n, r)) {
                    if (d.current || !s) {
                        null == a || a(f(t, this.options, e)),
                            null == o || o(),
                            this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                    this.onPostResolved())
            }
            onPostResolved() { }
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        var S = i(1667)
            , V = i(2110);
        function C({ keyframes: t, velocity: e = 0, power: i = .8, timeConstant: n = 325, bounceDamping: r = 10, bounceStiffness: s = 500, modifyTarget: o, min: a, max: l, restDelta: u = .5, restSpeed: h }) {
            let c, d;
            let p = t[0]
                , f = {
                    done: !1,
                    value: p
                }
                , m = t => void 0 !== a && t < a || void 0 !== l && t > l
                , v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
                , g = i * e
                , y = p + g
                , x = void 0 === o ? y : o(y);
            x !== y && (g = x - p);
            let P = t => -g * Math.exp(-t / n)
                , w = t => x + P(t)
                , T = t => {
                    let e = P(t)
                        , i = w(t);
                    f.done = Math.abs(e) <= u,
                        f.value = f.done ? x : i
                }
                , b = t => {
                    m(f.value) && (c = t,
                        d = (0,
                            S.S)({
                                keyframes: [f.value, v(f.value)],
                                velocity: (0,
                                    V.P)(w, t, f.value),
                                damping: r,
                                stiffness: s,
                                restDelta: u,
                                restSpeed: h
                            }))
                }
                ;
            return b(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (d || void 0 !== c || (e = !0,
                        T(t),
                        b(t)),
                        void 0 !== c && t >= c) ? d.next(t - c) : (e || T(t),
                            f)
                }
            }
        }
        let M = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function E(t, e, i, n) {
            if (t === e && i === n)
                return y.Z;
            let r = e => (function (t, e, i, n, r) {
                let s, o;
                let a = 0;
                do
                    (s = M(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : M(r(t), e, n)
        }
        let R = E(.42, 0, 1, 1)
            , D = E(0, 0, .58, 1)
            , k = E(.42, 0, .58, 1);
        var j = i(5747)
            , L = i(9393)
            , F = i(1355)
            , O = i(4038);
        let B = E(.33, 1.53, .69, .99)
            , W = (0,
                O.M)(B)
            , $ = (0,
                F.o)(W)
            , I = t => (t *= 2) < 1 ? .5 * W(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            , U = {
                linear: y.Z,
                easeIn: R,
                easeInOut: k,
                easeOut: D,
                circIn: L.Z7,
                circInOut: L.X7,
                circOut: L.Bn,
                backIn: W,
                backInOut: $,
                backOut: B,
                anticipate: I
            }
            , N = t => {
                if (Array.isArray(t)) {
                    (0,
                        w.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                    let [e, i, n, r] = t;
                    return E(e, i, n, r)
                }
                return "string" == typeof t ? ((0,
                    w.k)(void 0 !== U[t], `Invalid easing type '${t}'`),
                    U[t]) : t
            }
            ;
        var X = i(232)
            , z = i(782)
            , Y = i(2581)
            , H = i(6076);
        function K(t, e, i) {
            return (i < 0 && (i += 1),
                i > 1 && (i -= 1),
                i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        var _ = i(1531)
            , G = i(5575)
            , Z = i(7058);
        function q(t, e) {
            return i => i > 0 ? e : t
        }
        let J = (t, e, i) => {
            let n = t * t
                , r = i * (e * e - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        }
            , Q = [_.$, G.m, Z.J]
            , tt = t => Q.find(e => e.test(t));
        function te(t) {
            let e = tt(t);
            if ((0,
                w.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
                !e)
                return !1;
            let i = e.parse(t);
            return e === Z.J && (i = function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
                t /= 360,
                    i /= 100;
                let r = 0
                    , s = 0
                    , o = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                        , a = 2 * i - n;
                    r = K(a, n, t + 1 / 3),
                        s = K(a, n, t),
                        o = K(a, n, t - 1 / 3)
                } else
                    r = s = o = i;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: n
                }
            }(i)),
                i
        }
        let ti = (t, e) => {
            let i = te(t)
                , n = te(e);
            if (!i || !n)
                return q(t, e);
            let r = {
                ...i
            };
            return t => (r.red = J(i.red, n.red, t),
                r.green = J(i.green, n.green, t),
                r.blue = J(i.blue, n.blue, t),
                r.alpha = (0,
                    H.t)(i.alpha, n.alpha, t),
                G.m.transform(r))
        }
            ;
        var tn = i(3969)
            , tr = i(9400);
        let ts = new Set(["none", "hidden"]);
        function to(t, e) {
            return i => (0,
                H.t)(t, e, i)
        }
        function ta(t) {
            return "number" == typeof t ? to : "string" == typeof t ? (0,
                tr.t)(t) ? q : tn.$.test(t) ? ti : th : Array.isArray(t) ? tl : "object" == typeof t ? tn.$.test(t) ? ti : tu : q
        }
        function tl(t, e) {
            let i = [...t]
                , n = i.length
                , r = t.map((t, i) => ta(t)(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++)
                    i[e] = r[e](t);
                return i
            }
        }
        function tu(t, e) {
            let i = {
                ...t,
                ...e
            }
                , n = {};
            for (let r in i)
                void 0 !== t[r] && void 0 !== e[r] && (n[r] = ta(t[r])(t[r], e[r]));
            return t => {
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
        let th = (t, e) => {
            let i = T.P.createTransformer(e)
                , n = (0,
                    T.V)(t)
                , r = (0,
                    T.V)(e)
                , s = n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length;
            return s ? ts.has(t) && !r.values.length || ts.has(e) && !n.values.length ? ts.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : (0,
                z.z)(tl(function (t, e) {
                    var i;
                    let n = []
                        , r = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s]
                            , a = t.indexes[o][r[o]]
                            , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        n[s] = l,
                            r[o]++
                    }
                    return n
                }(n, r), r.values), i) : ((0,
                    w.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
                    q(t, e))
        }
            ;
        function tc(t, e, i) {
            if ("number" == typeof t && "number" == typeof e && "number" == typeof i)
                return (0,
                    H.t)(t, e, i);
            let n = ta(t);
            return n(t, e)
        }
        var td = i(8460);
        function tp({ duration: t = 300, keyframes: e, times: i, ease: n = "easeInOut" }) {
            let r = (0,
                j.N)(n) ? n.map(N) : N(n)
                , s = {
                    done: !1,
                    value: e[0]
                }
                , o = (i && i.length === e.length ? i : (0,
                    td.Y)(e)).map(e => e * t)
                , a = function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
                    let s = t.length;
                    if ((0,
                        w.k)(s === e.length, "Both input and output ranges must be the same length"),
                        1 === s)
                        return () => e[0];
                    if (2 === s && t[0] === t[1])
                        return () => e[1];
                    t[0] > t[s - 1] && (t = [...t].reverse(),
                        e = [...e].reverse());
                    let o = function (t, e, i) {
                        let n = []
                            , r = i || tc
                            , s = t.length - 1;
                        for (let i = 0; i < s; i++) {
                            let s = r(t[i], t[i + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[i] || y.Z : e;
                                s = (0,
                                    z.z)(t, s)
                            }
                            n.push(s)
                        }
                        return n
                    }(e, n, r)
                        , a = o.length
                        , l = e => {
                            let i = 0;
                            if (a > 1)
                                for (; i < t.length - 2 && !(e < t[i + 1]); i++)
                                    ;
                            let n = (0,
                                Y.Y)(t[i], t[i + 1], e);
                            return o[i](n)
                        }
                        ;
                    return i ? e => l((0,
                        X.u)(t[0], t[s - 1], e)) : l
                }(o, e, {
                    ease: Array.isArray(r) ? r : e.map(() => r || k).splice(0, e.length - 1)
                });
            return {
                calculatedDuration: t,
                next: e => (s.value = a(e),
                    s.done = e >= t,
                    s)
            }
        }
        var tf = i(2098);
        let tm = t => {
            let e = ({ timestamp: e }) => t(e);
            return {
                start: () => m.Wi.update(e, !0),
                stop: () => (0,
                    m.Pn)(e),
                now: () => m.w0.isProcessing ? m.w0.timestamp : x.X.now()
            }
        }
            , tv = {
                decay: C,
                inertia: C,
                tween: tp,
                keyframes: tp,
                spring: S.S
            }
            , tg = t => t / 100;
        class ty extends A {
            constructor(t) {
                super(t),
                    this.holdTime = null,
                    this.cancelTime = null,
                    this.currentTime = 0,
                    this.playbackSpeed = 1,
                    this.pendingPlayState = "running",
                    this.startTime = null,
                    this.state = "idle",
                    this.stop = () => {
                        if (this.resolver.cancel(),
                            this.isStopped = !0,
                            "idle" === this.state)
                            return;
                        this.teardown();
                        let { onStop: t } = this.options;
                        t && t()
                    }
                    ;
                let { name: e, motionValue: i, element: n, keyframes: r } = this.options
                    , s = (null == n ? void 0 : n.KeyframeResolver) || P.e
                    , o = (t, e) => this.onKeyframesResolved(t, e);
                this.resolver = new s(r, o, e, i, n),
                    this.resolver.scheduleResolve()
            }
            initPlayback(t) {
                let e, i;
                let { type: n = "keyframes", repeat: r = 0, repeatDelay: s = 0, repeatType: o, velocity: a = 0 } = this.options
                    , l = tv[n] || tp;
                l !== tp && "number" != typeof t[0] && (e = (0,
                    z.z)(tg, tc(t[0], t[1])),
                    t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                    null === u.calculatedDuration && (u.calculatedDuration = (0,
                        tf.i)(u));
                let { calculatedDuration: h } = u
                    , c = h + s;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: c,
                    totalDuration: c * (r + 1) - s
                }
            }
            onPostResolved() {
                let { autoplay: t = !0 } = this.options;
                this.play(),
                    "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e = !1) {
                let { resolved: i } = this;
                if (!i) {
                    let { keyframes: t } = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let { finalKeyframe: n, generator: r, mirroredGenerator: s, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h } = i;
                if (null === this.startTime)
                    return r.next(0);
                let { delay: c, repeat: d, repeatType: p, repeatDelay: m, onUpdate: v } = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                    e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1)
                    , y = this.speed >= 0 ? g < 0 : g > u;
                this.currentTime = Math.max(g, 0),
                    "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let x = this.currentTime
                    , P = r;
                if (d) {
                    let t = Math.min(this.currentTime, u) / h
                        , e = Math.floor(t)
                        , i = t % 1;
                    !i && t >= 1 && (i = 1),
                        1 === i && e--,
                        e = Math.min(e, d + 1);
                    let n = !!(e % 2);
                    n && ("reverse" === p ? (i = 1 - i,
                        m && (i -= m / h)) : "mirror" === p && (P = s)),
                        x = (0,
                            X.u)(0, 1, i) * h
                }
                let w = y ? {
                    done: !1,
                    value: a[0]
                } : P.next(x);
                o && (w.value = o(w.value));
                let { done: T } = w;
                y || null === l || (T = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let b = null === this.holdTime && ("finished" === this.state || "running" === this.state && T);
                return b && void 0 !== n && (w.value = f(a, this.options, n)),
                    v && v(w.value),
                    b && this.finish(),
                    w
            }
            get duration() {
                let { resolved: t } = this;
                return t ? (0,
                    n.X)(t.calculatedDuration) : 0
            }
            get time() {
                return (0,
                    n.X)(this.currentTime)
            }
            set time(t) {
                t = (0,
                    n.w)(t),
                    this.currentTime = t,
                    null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                    e && (this.time = (0,
                        n.X)(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                    !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let { driver: t = tm, onPlay: e, startTime: i } = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                    e && e();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(),
                    "finished" === this.state && this.updateFinishedPromise(),
                    this.cancelTime = this.startTime,
                    this.holdTime = null,
                    this.state = "running",
                    this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                    this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                    this.pendingPlayState = this.state = "finished",
                    this.holdTime = null
            }
            finish() {
                this.teardown(),
                    this.state = "finished";
                let { onComplete: t } = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                    this.teardown(),
                    this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                    this.stopDriver(),
                    this.resolveFinishedPromise(),
                    this.updateFinishedPromise(),
                    this.startTime = this.cancelTime = null,
                    this.resolver.cancel()
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                    this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                    this.tick(t, !0)
            }
        }
        var tx = i(2105);
        let tP = t => Array.isArray(t) && "number" == typeof t[0]
            , tw = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`
            , tT = {
                linear: "linear",
                ease: "ease",
                easeIn: "ease-in",
                easeOut: "ease-out",
                easeInOut: "ease-in-out",
                circIn: tw([0, .65, .55, 1]),
                circOut: tw([.55, 0, 1, .45]),
                backIn: tw([.31, .01, .66, -.59]),
                backOut: tw([.33, 1.53, .69, .99])
            };
        function tb(t) {
            return tA(t) || tT.easeOut
        }
        function tA(t) {
            if (t)
                return tP(t) ? tw(t) : Array.isArray(t) ? t.map(tb) : tT[t]
        }
        let tS = (0,
            g.X)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
        class tV extends A {
            constructor(t) {
                super(t);
                let { name: e, motionValue: i, element: n, keyframes: r } = this.options;
                this.resolver = new v.s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n),
                    this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i, n;
                let { duration: r = 300, times: s, ease: o, type: a, motionValue: l, name: u, startTime: h } = this.options;
                if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
                    return !1;
                if ("spring" === (n = this.options).type || !function t(e) {
                    return !!(!e || "string" == typeof e && e in tT || tP(e) || Array.isArray(e) && e.every(t))
                }(n.ease)) {
                    let { onComplete: e, onUpdate: i, motionValue: n, element: l, ...u } = this.options
                        , h = function (t, e) {
                            let i = new ty({
                                ...e,
                                keyframes: t,
                                repeat: 0,
                                delay: 0,
                                isGenerator: !0
                            })
                                , n = {
                                    done: !1,
                                    value: t[0]
                                }
                                , r = []
                                , s = 0;
                            for (; !n.done && s < 2e4;)
                                r.push((n = i.sample(s)).value),
                                    s += 10;
                            return {
                                times: void 0,
                                keyframes: r,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]),
                        r = h.duration,
                        s = h.times,
                        o = h.ease,
                        a = "keyframes"
                }
                let c = function (t, e, i, { delay: n = 0, duration: r = 300, repeat: s = 0, repeatType: o = "loop", ease: a, times: l } = {}) {
                    let u = {
                        [e]: i
                    };
                    l && (u.offset = l);
                    let h = tA(a);
                    return Array.isArray(h) && (u.easing = h),
                        t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                }(l.owner.current, u, t, {
                    ...this.options,
                    duration: r,
                    times: s,
                    ease: o
                });
                return c.startTime = null != h ? h : this.calcStartTime(),
                    this.pendingTimeline ? (c.timeline = this.pendingTimeline,
                        this.pendingTimeline = void 0) : c.onfinish = () => {
                            let { onComplete: i } = this.options;
                            l.set(f(t, this.options, e)),
                                i && i(),
                                this.cancel(),
                                this.resolveFinishedPromise()
                        }
                    ,
                {
                    animation: c,
                    duration: r,
                    times: s,
                    type: a,
                    ease: o,
                    keyframes: t
                }
            }
            get duration() {
                let { resolved: t } = this;
                if (!t)
                    return 0;
                let { duration: e } = t;
                return (0,
                    n.X)(e)
            }
            get time() {
                let { resolved: t } = this;
                if (!t)
                    return 0;
                let { animation: e } = t;
                return (0,
                    n.X)(e.currentTime || 0)
            }
            set time(t) {
                let { resolved: e } = this;
                if (!e)
                    return;
                let { animation: i } = e;
                i.currentTime = (0,
                    n.w)(t)
            }
            get speed() {
                let { resolved: t } = this;
                if (!t)
                    return 1;
                let { animation: e } = t;
                return e.playbackRate
            }
            set speed(t) {
                let { resolved: e } = this;
                if (!e)
                    return;
                let { animation: i } = e;
                i.playbackRate = t
            }
            get state() {
                let { resolved: t } = this;
                if (!t)
                    return "idle";
                let { animation: e } = t;
                return e.playState
            }
            get startTime() {
                let { resolved: t } = this;
                if (!t)
                    return null;
                let { animation: e } = t;
                return e.startTime
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let { resolved: e } = this;
                    if (!e)
                        return y.Z;
                    let { animation: i } = e;
                    i.timeline = t,
                        i.onfinish = null
                } else
                    this.pendingTimeline = t;
                return y.Z
            }
            play() {
                if (this.isStopped)
                    return;
                let { resolved: t } = this;
                if (!t)
                    return;
                let { animation: e } = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                    e.play()
            }
            pause() {
                let { resolved: t } = this;
                if (!t)
                    return;
                let { animation: e } = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                    this.updateFinishedPromise();
                let { resolved: t } = this;
                if (!t)
                    return;
                let { animation: e, keyframes: i, duration: r, type: s, ease: o, times: a } = t;
                if ("idle" === e.playState || "finished" === e.playState)
                    return;
                if (this.time) {
                    let { motionValue: t, onUpdate: e, onComplete: l, element: u, ...h } = this.options
                        , c = new ty({
                            ...h,
                            keyframes: i,
                            duration: r,
                            type: s,
                            ease: o,
                            times: a,
                            isGenerator: !0
                        })
                        , d = (0,
                            n.w)(this.time);
                    t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10)
                }
                let { onStop: l } = this.options;
                l && l(),
                    this.cancel()
            }
            complete() {
                let { resolved: t } = this;
                t && t.animation.finish()
            }
            cancel() {
                let { resolved: t } = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let { motionValue: e, name: i, repeatDelay: n, repeatType: r, damping: s, type: o } = t;
                return tS() && i && tx.t.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== r && 0 !== s && "inertia" !== o
            }
        }
        var tC = i(9467);
        let tM = (t, e, i, r = {}, s, o, a) => l => {
            let p = (0,
                h.e)(r, t) || {}
                , v = p.delay || r.delay || 0
                , { elapsed: g = 0 } = r;
            g -= (0,
                n.w)(v);
            let y = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...p,
                delay: -g,
                onUpdate: t => {
                    e.set(t),
                        p.onUpdate && p.onUpdate(t)
                }
                ,
                onComplete: () => {
                    l(),
                        p.onComplete && p.onComplete(),
                        a && a()
                }
                ,
                onStop: a,
                name: t,
                motionValue: e,
                element: o ? void 0 : s
            };
            (0,
                h.r)(p) || (y = {
                    ...y,
                    ...u(t, y)
                }),
                y.duration && (y.duration = (0,
                    n.w)(y.duration)),
                y.repeatDelay && (y.repeatDelay = (0,
                    n.w)(y.repeatDelay)),
                void 0 !== y.from && (y.keyframes[0] = y.from);
            let x = !1;
            if (!1 !== y.type && (0 !== y.duration || y.repeatDelay) || (y.duration = 0,
                0 !== y.delay || (x = !0)),
                (d.current || c.c.skipAnimations) && (x = !0,
                    y.duration = 0,
                    y.delay = 0),
                x && !o && void 0 !== e.get()) {
                let t = f(y.keyframes, p);
                if (void 0 !== t)
                    return m.Wi.update(() => {
                        y.onUpdate(t),
                            y.onComplete()
                    }
                    ),
                        new tC.s([])
            }
            return !o && tV.supports(y) ? new tV(y) : new ty(y)
        }
    },
    2770: function (t, e, i) {
        "use strict";
        i.d(e, {
            D: function () {
                return o
            }
        });
        var n = i(3148)
            , r = i(2915)
            , s = i(769);
        function o(t, e, i) {
            let o = (0,
                s.i)(t) ? t : (0,
                    r.BX)(t);
            return o.start((0,
                n.v)("", o, e, i)),
                o.animation
        }
    },
    6031: function (t, e, i) {
        "use strict";
        i.d(e, {
            w: function () {
                return d
            }
        });
        var n = i(6400)
            , r = i(3148)
            , s = i(4080)
            , o = i(2915)
            , a = i(4157)
            , l = i(3112)
            , u = i(2629)
            , h = i(4665)
            , c = i(1553);
        function d(t, e, { delay: i = 0, transitionOverride: d, type: p } = {}) {
            var f;
            let { transition: m = t.getDefaultTransition(), transitionEnd: v, ...g } = e;
            d && (m = d);
            let y = []
                , x = p && t.animationState && t.animationState.getState()[p];
            for (let e in g) {
                let s = t.getValue(e, null !== (f = t.latestValues[e]) && void 0 !== f ? f : null)
                    , o = g[e];
                if (void 0 === o || x && function ({ protectedKeys: t, needsAnimating: e }, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                        n
                }(x, e))
                    continue;
                let a = {
                    delay: i,
                    ...(0,
                        l.e)(m || {}, e)
                }
                    , d = !1;
                if (window.MotionHandoffAnimation) {
                    let i = (0,
                        u.s)(t);
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, c.Wi);
                        null !== t && (a.startTime = t,
                            d = !0)
                    }
                }
                s.start((0,
                    r.v)(e, s, o, t.shouldReduceMotion && n.G.has(e) ? {
                        type: !1
                    } : a, t, d, (0,
                        h.K)(t, e)));
                let p = s.animation;
                p && y.push(p)
            }
            return v && Promise.all(y).then(() => {
                c.Wi.update(() => {
                    v && function (t, e) {
                        let i = (0,
                            a.x)(t, e)
                            , { transitionEnd: n = {}, transition: r = {}, ...l } = i || {};
                        for (let e in l = {
                            ...l,
                            ...n
                        }) {
                            var u;
                            let i = (0,
                                s.Y)(l[e]);
                            u = e,
                                t.hasValue(u) ? t.getValue(u).set(i) : t.addValue(u, (0,
                                    o.BX)(i))
                        }
                    }(t, v)
                }
                )
            }
            ),
                y
        }
    },
    4091: function (t, e, i) {
        "use strict";
        i.d(e, {
            M: function () {
                return r
            }
        });
        var n = i(483);
        let r = "data-" + (0,
            n.D)("framerAppearId")
    },
    2629: function (t, e, i) {
        "use strict";
        i.d(e, {
            s: function () {
                return r
            }
        });
        var n = i(4091);
        function r(t) {
            return t.props[n.M]
        }
    },
    3845: function (t, e, i) {
        "use strict";
        function n(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        i.d(e, {
            H: function () {
                return n
            }
        })
    },
    2305: function (t, e, i) {
        "use strict";
        i.d(e, {
            C: function () {
                return n
            }
        });
        let n = t => Array.isArray(t)
    },
    3112: function (t, e, i) {
        "use strict";
        function n({ when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: r, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h }) {
            return !!Object.keys(h).length
        }
        function r(t, e) {
            return t[e] || t.default || t
        }
        i.d(e, {
            e: function () {
                return r
            },
            r: function () {
                return n
            }
        })
    },
    8137: function (t, e, i) {
        "use strict";
        i.d(e, {
            M: function () {
                return g
            }
        });
        var n = i(3955)
            , r = i(2310)
            , s = i(3043)
            , o = i(789)
            , a = i(9061);
        class l extends r.Component {
            getSnapshotBeforeUpdate(t) {
                let e = this.props.childRef.current;
                if (e && t.isPresent && !this.props.isPresent) {
                    let t = this.props.sizeRef.current;
                    t.height = e.offsetHeight || 0,
                        t.width = e.offsetWidth || 0,
                        t.top = e.offsetTop,
                        t.left = e.offsetLeft
                }
                return null
            }
            componentDidUpdate() { }
            render() {
                return this.props.children
            }
        }
        function u({ children: t, isPresent: e }) {
            let i = (0,
                r.useId)()
                , s = (0,
                    r.useRef)(null)
                , o = (0,
                    r.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    })
                , { nonce: u } = (0,
                    r.useContext)(a._);
            return (0,
                r.useInsertionEffect)(() => {
                    let { width: t, height: n, top: r, left: a } = o.current;
                    if (e || !s.current || !t || !n)
                        return;
                    s.current.dataset.motionPopId = i;
                    let l = document.createElement("style");
                    return u && (l.nonce = u),
                        document.head.appendChild(l),
                        l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${r}px !important;
            left: ${a}px !important;
          }
        `),
                        () => {
                            document.head.removeChild(l)
                        }
                }
                    , [e]),
                (0,
                    n.jsx)(l, {
                        isPresent: e,
                        childRef: s,
                        sizeRef: o,
                        children: r.cloneElement(t, {
                            ref: s
                        })
                    })
        }
        let h = ({ children: t, initial: e, isPresent: i, onExitComplete: a, custom: l, presenceAffectsLayout: h, mode: d }) => {
            let p = (0,
                o.h)(c)
                , f = (0,
                    r.useId)()
                , m = (0,
                    r.useMemo)(() => ({
                        id: f,
                        initial: e,
                        isPresent: i,
                        custom: l,
                        onExitComplete: t => {
                            for (let e of (p.set(t, !0),
                                p.values()))
                                if (!e)
                                    return;
                            a && a()
                        }
                        ,
                        register: t => (p.set(t, !1),
                            () => p.delete(t))
                    }), h ? [Math.random()] : [i]);
            return (0,
                r.useMemo)(() => {
                    p.forEach((t, e) => p.set(e, !1))
                }
                    , [i]),
                r.useEffect(() => {
                    i || p.size || !a || a()
                }
                    , [i]),
                "popLayout" === d && (t = (0,
                    n.jsx)(u, {
                        isPresent: i,
                        children: t
                    })),
                (0,
                    n.jsx)(s.O.Provider, {
                        value: m,
                        children: t
                    })
        }
            ;
        function c() {
            return new Map
        }
        var d = i(2115)
            , p = i(2864);
        let f = t => t.key || "";
        function m(t) {
            let e = [];
            return r.Children.forEach(t, t => {
                (0,
                    r.isValidElement)(t) && e.push(t)
            }
            ),
                e
        }
        var v = i(3398);
        let g = ({ children: t, exitBeforeEnter: e, custom: i, initial: s = !0, onExitComplete: a, presenceAffectsLayout: l = !0, mode: u = "sync" }) => {
            (0,
                p.k)(!e, "Replace exitBeforeEnter with mode='wait'");
            let c = (0,
                r.useMemo)(() => m(t), [t])
                , g = c.map(f)
                , y = (0,
                    r.useRef)(!0)
                , x = (0,
                    r.useRef)(c)
                , P = (0,
                    o.h)(() => new Map)
                , [w, T] = (0,
                    r.useState)(c)
                , [b, A] = (0,
                    r.useState)(c);
            (0,
                v.L)(() => {
                    y.current = !1,
                        x.current = c;
                    for (let t = 0; t < b.length; t++) {
                        let e = f(b[t]);
                        g.includes(e) ? P.delete(e) : !0 !== P.get(e) && P.set(e, !1)
                    }
                }
                    , [b, g.length, g.join("-")]);
            let S = [];
            if (c !== w) {
                let t = [...c];
                for (let e = 0; e < b.length; e++) {
                    let i = b[e]
                        , n = f(i);
                    g.includes(n) || (t.splice(e, 0, i),
                        S.push(i))
                }
                "wait" === u && S.length && (t = S),
                    A(m(t)),
                    T(c);
                return
            }
            let { forceRender: V } = (0,
                r.useContext)(d.p);
            return (0,
                n.jsx)(n.Fragment, {
                    children: b.map(t => {
                        let e = f(t)
                            , r = c === b || g.includes(e)
                            , o = () => {
                                if (!P.has(e))
                                    return;
                                P.set(e, !0);
                                let t = !0;
                                P.forEach(e => {
                                    e || (t = !1)
                                }
                                ),
                                    t && (null == V || V(),
                                        A(x.current),
                                        a && a())
                            }
                            ;
                        return (0,
                            n.jsx)(h, {
                                isPresent: r,
                                initial: (!y.current || !!s) && void 0,
                                custom: r ? void 0 : i,
                                presenceAffectsLayout: l,
                                mode: u,
                                onExitComplete: r ? void 0 : o,
                                children: t
                            }, e)
                    }
                    )
                })
        }
    },
    2115: function (t, e, i) {
        "use strict";
        i.d(e, {
            p: function () {
                return r
            }
        });
        var n = i(2310);
        let r = (0,
            n.createContext)({})
    },
    9061: function (t, e, i) {
        "use strict";
        i.d(e, {
            _: function () {
                return r
            }
        });
        var n = i(2310);
        let r = (0,
            n.createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
    },
    3043: function (t, e, i) {
        "use strict";
        i.d(e, {
            O: function () {
                return r
            }
        });
        var n = i(2310);
        let r = (0,
            n.createContext)(null)
    },
    9393: function (t, e, i) {
        "use strict";
        i.d(e, {
            Bn: function () {
                return o
            },
            X7: function () {
                return a
            },
            Z7: function () {
                return s
            }
        });
        var n = i(1355)
            , r = i(4038);
        let s = t => 1 - Math.sin(Math.acos(t))
            , o = (0,
                r.M)(s)
            , a = (0,
                n.o)(s)
    },
    1355: function (t, e, i) {
        "use strict";
        i.d(e, {
            o: function () {
                return n
            }
        });
        let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    4038: function (t, e, i) {
        "use strict";
        i.d(e, {
            M: function () {
                return n
            }
        });
        let n = t => e => 1 - t(1 - e)
    },
    5747: function (t, e, i) {
        "use strict";
        i.d(e, {
            N: function () {
                return n
            }
        });
        let n = t => Array.isArray(t) && "number" != typeof t[0]
    },
    1011: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return s
            }
        });
        var n = i(8794);
        let r = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
        function s(t, e) {
            let i = !1
                , s = !0
                , o = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                }
                , a = () => i = !0
                , l = r.reduce((t, e) => (t[e] = function (t) {
                    let e = new Set
                        , i = new Set
                        , n = !1
                        , r = !1
                        , s = new WeakSet
                        , o = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        };
                    function a(e) {
                        s.has(e) && (l.schedule(e),
                            t()),
                            e(o)
                    }
                    let l = {
                        schedule: (t, r = !1, o = !1) => {
                            let a = o && n
                                , l = a ? e : i;
                            return r && s.add(t),
                                l.has(t) || l.add(t),
                                t
                        }
                        ,
                        cancel: t => {
                            i.delete(t),
                                s.delete(t)
                        }
                        ,
                        process: t => {
                            if (o = t,
                                n) {
                                r = !0;
                                return
                            }
                            n = !0,
                                [e, i] = [i, e],
                                i.clear(),
                                e.forEach(a),
                                n = !1,
                                r && (r = !1,
                                    l.process(t))
                        }
                    };
                    return l
                }(a),
                    t), {})
                , { read: u, resolveKeyframes: h, update: c, preRender: d, render: p, postRender: f } = l
                , m = () => {
                    let r = n.c.useManualTiming ? o.timestamp : performance.now();
                    i = !1,
                        o.delta = s ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1),
                        o.timestamp = r,
                        o.isProcessing = !0,
                        u.process(o),
                        h.process(o),
                        c.process(o),
                        d.process(o),
                        p.process(o),
                        f.process(o),
                        o.isProcessing = !1,
                        i && e && (s = !1,
                            t(m))
                }
                , v = () => {
                    i = !0,
                        s = !0,
                        o.isProcessing || t(m)
                }
                , g = r.reduce((t, e) => {
                    let n = l[e];
                    return t[e] = (t, e = !1, r = !1) => (i || v(),
                        n.schedule(t, e, r)),
                        t
                }
                    , {})
                , y = t => {
                    for (let e = 0; e < r.length; e++)
                        l[r[e]].cancel(t)
                }
                ;
            return {
                schedule: g,
                cancel: y,
                state: o,
                steps: l
            }
        }
    },
    1553: function (t, e, i) {
        "use strict";
        i.d(e, {
            Pn: function () {
                return o
            },
            S6: function () {
                return l
            },
            Wi: function () {
                return s
            },
            w0: function () {
                return a
            }
        });
        var n = i(1806)
            , r = i(1011);
        let { schedule: s, cancel: o, state: a, steps: l } = (0,
            r.Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
    },
    1497: function (t, e, i) {
        "use strict";
        let n;
        i.d(e, {
            X: function () {
                return a
            }
        });
        var r = i(8794)
            , s = i(1553);
        function o() {
            n = void 0
        }
        let a = {
            now: () => (void 0 === n && a.set(s.w0.isProcessing || r.c.useManualTiming ? s.w0.timestamp : performance.now()),
                n),
            set: t => {
                n = t,
                    queueMicrotask(o)
            }
        }
    },
    8657: function (t, e, i) {
        "use strict";
        i.d(e, {
            A: function () {
                return r
            }
        });
        let n = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
            , r = {};
        for (let t in n)
            r[t] = {
                isEnabled: e => n[t].some(t => !!e[t])
            }
    },
    9217: function (t, e, i) {
        "use strict";
        i.d(e, {
            j: function () {
                return s
            }
        });
        var n = i(2141)
            , r = i(6400);
        function s(t, { layout: e, layoutId: i }) {
            return r.G.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!n.P[t] || "opacity" === t)
        }
    },
    6858: function (t, e, i) {
        "use strict";
        function n({ top: t, left: e, right: i, bottom: n }) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function r({ x: t, y: e }) {
            return {
                top: e.min,
                right: t.max,
                bottom: e.max,
                left: t.min
            }
        }
        function s(t, e) {
            if (!e)
                return t;
            let i = e({
                x: t.left,
                y: t.top
            })
                , n = e({
                    x: t.right,
                    y: t.bottom
                });
            return {
                top: i.y,
                left: i.x,
                bottom: n.y,
                right: n.x
            }
        }
        i.d(e, {
            d7: function () {
                return s
            },
            i8: function () {
                return n
            },
            z2: function () {
                return r
            }
        })
    },
    6272: function (t, e, i) {
        "use strict";
        i.d(e, {
            D2: function () {
                return d
            },
            YY: function () {
                return u
            },
            am: function () {
                return h
            },
            o2: function () {
                return l
            },
            q2: function () {
                return s
            }
        });
        var n = i(6076)
            , r = i(4794);
        function s(t, e, i) {
            return i + e * (t - i)
        }
        function o(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)),
                n + i * (t - n) + e
        }
        function a(t, e = 0, i = 1, n, r) {
            t.min = o(t.min, e, i, n, r),
                t.max = o(t.max, e, i, n, r)
        }
        function l(t, { x: e, y: i }) {
            a(t.x, e.translate, e.scale, e.originPoint),
                a(t.y, i.translate, i.scale, i.originPoint)
        }
        function u(t, e, i, n = !1) {
            let s, o;
            let a = i.length;
            if (a) {
                e.x = e.y = 1;
                for (let u = 0; u < a; u++) {
                    o = (s = i[u]).projectionDelta;
                    let { visualElement: a } = s.options;
                    (!a || !a.props.style || "contents" !== a.props.style.display) && (n && s.options.layoutScroll && s.scroll && s !== s.root && d(t, {
                        x: -s.scroll.offset.x,
                        y: -s.scroll.offset.y
                    }),
                        o && (e.x *= o.x.scale,
                            e.y *= o.y.scale,
                            l(t, o)),
                        n && (0,
                            r.ud)(s.latestValues) && d(t, s.latestValues))
                }
                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                    e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
            }
        }
        function h(t, e) {
            t.min = t.min + e,
                t.max = t.max + e
        }
        function c(t, e, i, r, s = .5) {
            let o = (0,
                n.t)(t.min, t.max, s);
            a(t, e, i, o, r)
        }
        function d(t, e) {
            c(t.x, e.x, e.scaleX, e.scale, e.originX),
                c(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
    },
    22: function (t, e, i) {
        "use strict";
        i.d(e, {
            dO: function () {
                return o
            },
            wc: function () {
                return r
            }
        });
        let n = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
            , r = () => ({
                x: n(),
                y: n()
            })
            , s = () => ({
                min: 0,
                max: 0
            })
            , o = () => ({
                x: s(),
                y: s()
            })
    },
    2141: function (t, e, i) {
        "use strict";
        i.d(e, {
            B: function () {
                return r
            },
            P: function () {
                return n
            }
        });
        let n = {};
        function r(t) {
            Object.assign(n, t)
        }
    },
    4794: function (t, e, i) {
        "use strict";
        function n(t) {
            return void 0 === t || 1 === t
        }
        function r({ scale: t, scaleX: e, scaleY: i }) {
            return !n(t) || !n(e) || !n(i)
        }
        function s(t) {
            return r(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function o(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        i.d(e, {
            D_: function () {
                return o
            },
            Lj: function () {
                return r
            },
            ud: function () {
                return s
            }
        })
    },
    7955: function (t, e, i) {
        "use strict";
        i.d(e, {
            J: function () {
                return s
            },
            z: function () {
                return o
            }
        });
        var n = i(6858)
            , r = i(6272);
        function s(t, e) {
            return (0,
                n.i8)((0,
                    n.d7)(t.getBoundingClientRect(), e))
        }
        function o(t, e, i) {
            let n = s(t, i)
                , { scroll: o } = e;
            return o && ((0,
                r.am)(n.x, o.offset.x),
                (0,
                    r.am)(n.y, o.offset.y)),
                n
        }
    },
    1579: function (t, e, i) {
        "use strict";
        i.d(e, {
            E: function () {
                return iT
            }
        });
        var n, r, s = i(3845), o = i(2305);
        function a(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        var l = i(3209)
            , u = i(4157)
            , h = i(6933)
            , c = i(6031);
        function d(t, e, i = {}) {
            var n;
            let r = (0,
                u.x)(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0)
                , { transition: s = t.getDefaultTransition() || {} } = r || {};
            i.transitionOverride && (s = i.transitionOverride);
            let o = r ? () => Promise.all((0,
                c.w)(t, r, i)) : () => Promise.resolve()
                , a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                    let { delayChildren: r = 0, staggerChildren: o, staggerDirection: a } = s;
                    return function (t, e, i = 0, n = 0, r = 1, s) {
                        let o = []
                            , a = (t.variantChildren.size - 1) * n
                            , l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                        return Array.from(t.variantChildren).sort(p).forEach((t, n) => {
                            t.notify("AnimationStart", e),
                                o.push(d(t, e, {
                                    ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                        }
                        ),
                            Promise.all(o)
                    }(t, e, r + n, o, a, i)
                }
                    : () => Promise.resolve()
                , { when: l } = s;
            if (!l)
                return Promise.all([o(), a(i.delay)]);
            {
                let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                return t().then(() => e())
            }
        }
        function p(t, e) {
            return t.sortNodePosition(e)
        }
        let f = [...h.e].reverse()
            , m = h.e.length;
        function v(t = !1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function g() {
            return {
                animate: v(!0),
                whileInView: v(),
                whileHover: v(),
                whileTap: v(),
                whileDrag: v(),
                whileFocus: v(),
                exit: v()
            }
        }
        class y {
            constructor(t) {
                this.isMounted = !1,
                    this.node = t
            }
            update() { }
        }
        let x = 0;
        var P = i(1806)
            , w = i(2864);
        let T = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function b(t, e = "page") {
            return {
                point: {
                    x: t[`${e}X`],
                    y: t[`${e}Y`]
                }
            }
        }
        let A = t => e => T(e) && t(e, b(e));
        var S = i(9683);
        function V(t, e, i, n = {
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
                () => t.removeEventListener(e, i)
        }
        function C(t, e, i, n) {
            return V(t, e, A(i), n)
        }
        var M = i(782);
        let E = (t, e) => Math.abs(t - e);
        var R = i(1553);
        class D {
            constructor(t, e, { transformPagePoint: i, contextWindow: n, dragSnapToOrigin: r = !1 } = {}) {
                if (this.startEvent = null,
                    this.lastMoveEvent = null,
                    this.lastMoveEventInfo = null,
                    this.handlers = {},
                    this.contextWindow = window,
                    this.updatePoint = () => {
                        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                            return;
                        let t = L(this.lastMoveEventInfo, this.history)
                            , e = null !== this.startEvent
                            , i = function (t, e) {
                                let i = E(t.x, e.x)
                                    , n = E(t.y, e.y);
                                return Math.sqrt(i ** 2 + n ** 2)
                            }(t.offset, {
                                x: 0,
                                y: 0
                            }) >= 3;
                        if (!e && !i)
                            return;
                        let { point: n } = t
                            , { timestamp: r } = R.w0;
                        this.history.push({
                            ...n,
                            timestamp: r
                        });
                        let { onStart: s, onMove: o } = this.handlers;
                        e || (s && s(this.lastMoveEvent, t),
                            this.startEvent = this.lastMoveEvent),
                            o && o(this.lastMoveEvent, t)
                    }
                    ,
                    this.handlePointerMove = (t, e) => {
                        this.lastMoveEvent = t,
                            this.lastMoveEventInfo = k(e, this.transformPagePoint),
                            R.Wi.update(this.updatePoint, !0)
                    }
                    ,
                    this.handlePointerUp = (t, e) => {
                        this.end();
                        let { onEnd: i, onSessionEnd: n, resumeAnimation: r } = this.handlers;
                        if (this.dragSnapToOrigin && r && r(),
                            !(this.lastMoveEvent && this.lastMoveEventInfo))
                            return;
                        let s = L("pointercancel" === t.type ? this.lastMoveEventInfo : k(e, this.transformPagePoint), this.history);
                        this.startEvent && i && i(t, s),
                            n && n(t, s)
                    }
                    ,
                    !T(t))
                    return;
                this.dragSnapToOrigin = r,
                    this.handlers = e,
                    this.transformPagePoint = i,
                    this.contextWindow = n || window;
                let s = b(t)
                    , o = k(s, this.transformPagePoint)
                    , { point: a } = o
                    , { timestamp: l } = R.w0;
                this.history = [{
                    ...a,
                    timestamp: l
                }];
                let { onSessionStart: u } = e;
                u && u(t, L(o, this.history)),
                    this.removeListeners = (0,
                        M.z)(C(this.contextWindow, "pointermove", this.handlePointerMove), C(this.contextWindow, "pointerup", this.handlePointerUp), C(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                    (0,
                        R.Pn)(this.updatePoint)
            }
        }
        function k(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function j(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function L({ point: t }, e) {
            return {
                point: t,
                delta: j(t, F(e)),
                offset: j(t, e[0]),
                velocity: function (t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                        , n = null
                        , r = F(t);
                    for (; i >= 0 && (n = t[i],
                        !(r.timestamp - n.timestamp > (0,
                            S.w)(.1)));)
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = (0,
                        S.X)(r.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (r.x - n.x) / s,
                        y: (r.y - n.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                        o.y === 1 / 0 && (o.y = 0),
                        o
                }(e, 0)
            }
        }
        function F(t) {
            return t[t.length - 1]
        }
        function O(t) {
            let e = null;
            return () => {
                let i = () => {
                    e = null
                }
                    ;
                return null === e && (e = t,
                    i)
            }
        }
        let B = O("dragHorizontal")
            , W = O("dragVertical");
        function $(t) {
            let e = !1;
            if ("y" === t)
                e = W();
            else if ("x" === t)
                e = B();
            else {
                let t = B()
                    , i = W();
                t && i ? e = () => {
                    t(),
                        i()
                }
                    : (t && t(),
                        i && i())
            }
            return e
        }
        function I() {
            let t = $(!0);
            return !t || (t(),
                !1)
        }
        function U(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        var N = i(2581)
            , X = i(6076);
        function z(t) {
            return t.max - t.min
        }
        function Y(t, e, i, n = .5) {
            t.origin = n,
                t.originPoint = (0,
                    X.t)(e.min, e.max, t.origin),
                t.scale = z(i) / z(e),
                t.translate = (0,
                    X.t)(i.min, i.max, t.origin) - t.originPoint,
                (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
                (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function H(t, e, i, n) {
            Y(t.x, e.x, i.x, n ? n.originX : void 0),
                Y(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function K(t, e, i) {
            t.min = i.min + e.min,
                t.max = t.min + z(e)
        }
        function _(t, e, i) {
            t.min = e.min - i.min,
                t.max = t.min + z(e)
        }
        function G(t, e, i) {
            _(t.x, e.x, i.x),
                _(t.y, e.y, i.y)
        }
        var Z = i(232);
        function q(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function J(t, e) {
            let i = e.min - t.min
                , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function Q(t, e, i) {
            return {
                min: tt(t, e),
                max: tt(t, i)
            }
        }
        function tt(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        var te = i(22);
        function ti(t) {
            return [t("x"), t("y")]
        }
        var tn = i(7955)
            , tr = i(6858)
            , ts = i(459)
            , to = i(3148);
        let ta = ({ current: t }) => t ? t.ownerDocument.defaultView : null;
        var tl = i(4665);
        let tu = new WeakMap;
        class th {
            constructor(t) {
                this.openGlobalLock = null,
                    this.isDragging = !1,
                    this.currentDirection = null,
                    this.originPoint = {
                        x: 0,
                        y: 0
                    },
                    this.constraints = !1,
                    this.hasMutatedConstraints = !1,
                    this.elastic = (0,
                        te.dO)(),
                    this.visualElement = t
            }
            start(t, { snapToCursor: e = !1 } = {}) {
                let { presenceContext: i } = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let n = t => {
                    let { dragSnapToOrigin: i } = this.getProps();
                    i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(b(t, "page").point)
                }
                    , r = (t, e) => {
                        var i;
                        let { drag: n, dragPropagation: r, onDragStart: s } = this.getProps();
                        if (n && !r && (this.openGlobalLock && this.openGlobalLock(),
                            this.openGlobalLock = $(n),
                            !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                            this.currentDirection = null,
                            this.resolveConstraints(),
                            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                                this.visualElement.projection.target = void 0),
                            ti(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (ts.aQ.test(e)) {
                                    let { projection: i } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let t = z(n);
                                            e = t * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }
                            ),
                            s && R.Wi.postRender(() => s(t, e)),
                            null === (i = this.removeWillChange) || void 0 === i || i.call(this),
                            this.removeWillChange = (0,
                                tl.K)(this.visualElement, "transform");
                        let { animationState: o } = this.visualElement;
                        o && o.setActive("whileDrag", !0)
                    }
                    , s = (t, e) => {
                        let { dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s } = this.getProps();
                        if (!i && !this.openGlobalLock)
                            return;
                        let { offset: o } = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function (t, e = 10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                    i
                            }(o),
                                null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                            this.updateAxis("y", e.point, o),
                            this.visualElement.render(),
                            s && s(t, e)
                    }
                    , o = (t, e) => this.stop(t, e)
                    , a = () => ti(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                    , { dragSnapToOrigin: l } = this.getProps();
                this.panSession = new D(t, {
                    onSessionStart: n,
                    onStart: r,
                    onMove: s,
                    onSessionEnd: o,
                    resumeAnimation: a
                }, {
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: l,
                    contextWindow: ta(this.visualElement)
                })
            }
            stop(t, e) {
                var i;
                null === (i = this.removeWillChange) || void 0 === i || i.call(this);
                let n = this.isDragging;
                if (this.cancel(),
                    !n)
                    return;
                let { velocity: r } = e;
                this.startAnimation(r);
                let { onDragEnd: s } = this.getProps();
                s && R.Wi.postRender(() => s(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let { projection: t, animationState: e } = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                    this.panSession && this.panSession.end(),
                    this.panSession = void 0;
                let { dragPropagation: i } = this.getProps();
                !i && this.openGlobalLock && (this.openGlobalLock(),
                    this.openGlobalLock = null),
                    e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let { drag: n } = this.getProps();
                if (!i || !tc(t, n, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                    , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function (t, { min: e, max: i }, n) {
                    return void 0 !== e && t < e ? t = n ? (0,
                        X.t)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0,
                            X.t)(i, t, n.max) : Math.min(t, i)),
                        t
                }(s, this.constraints[t], this.elastic[t])),
                    r.set(s)
            }
            resolveConstraints() {
                var t;
                let { dragConstraints: e, dragElastic: i } = this.getProps()
                    , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                    , r = this.constraints;
                e && U(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function (t, { top: e, left: i, bottom: n, right: r }) {
                    return {
                        x: q(t.x, i, r),
                        y: q(t.y, e, n)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                    this.elastic = function (t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35),
                        {
                            x: Q(t, "left", "right"),
                            y: Q(t, "top", "bottom")
                        }
                    }(i),
                    r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ti(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function (t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min),
                                void 0 !== e.max && (i.max = e.max - t.min),
                                i
                        }(n.layoutBox[t], this.constraints[t]))
                    }
                    )
            }
            resolveRefConstraints() {
                var t;
                let { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
                if (!e || !U(e))
                    return !1;
                let n = e.current;
                (0,
                    w.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let { projection: r } = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = (0,
                    tn.z)(n, r.root, this.visualElement.getTransformPagePoint())
                    , o = {
                        x: J((t = r.layout.layoutBox).x, s.x),
                        y: J(t.y, s.y)
                    };
                if (i) {
                    let t = i((0,
                        tr.z2)(o));
                    this.hasMutatedConstraints = !!t,
                        t && (o = (0,
                            tr.i8)(t))
                }
                return o
            }
            startAnimation(t) {
                let { drag: e, dragMomentum: i, dragElastic: n, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: o } = this.getProps()
                    , a = this.constraints || {}
                    , l = ti(o => {
                        if (!tc(o, e, this.currentDirection))
                            return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    }
                    );
                return Promise.all(l).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return i.start((0,
                    to.v)(t, i, 0, e, this.visualElement, !1, (0,
                        tl.K)(this.visualElement, t)))
            }
            stopAnimation() {
                ti(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                ti(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                    , i = this.visualElement.getProps()
                    , n = i[e];
                return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                ti(e => {
                    let { drag: i } = this.getProps();
                    if (!tc(e, i, this.currentDirection))
                        return;
                    let { projection: n } = this.visualElement
                        , r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let { min: i, max: s } = n.layout.layoutBox[e];
                        r.set(t[e] - (0,
                            X.t)(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let { drag: t, dragConstraints: e } = this.getProps()
                    , { projection: i } = this.visualElement;
                if (!U(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                ti(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        n[t] = function (t, e) {
                            let i = .5
                                , n = z(t)
                                , r = z(e);
                            return r > n ? i = (0,
                                N.Y)(e.min, e.max - n, t.min) : n > r && (i = (0,
                                    N.Y)(t.min, t.max - r, e.min)),
                                (0,
                                    Z.u)(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let { transformTemplate: r } = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                    i.root && i.root.updateScroll(),
                    i.updateLayout(),
                    this.resolveConstraints(),
                    ti(e => {
                        if (!tc(e, t, null))
                            return;
                        let i = this.getAxisMotionValue(e)
                            , { min: r, max: s } = this.constraints[e];
                        i.set((0,
                            X.t)(r, s, n[e]))
                    }
                    )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                tu.set(this.visualElement, this);
                let t = this.visualElement.current
                    , e = C(t, "pointerdown", t => {
                        let { drag: e, dragListener: i = !0 } = this.getProps();
                        e && i && this.start(t)
                    }
                    )
                    , i = () => {
                        let { dragConstraints: t } = this.getProps();
                        U(t) && t.current && (this.constraints = this.resolveRefConstraints())
                    }
                    , { projection: n } = this.visualElement
                    , r = n.addEventListener("measure", i);
                n && !n.layout && (n.root && n.root.updateScroll(),
                    n.updateLayout()),
                    R.Wi.read(i);
                let s = V(window, "resize", () => this.scalePositionWithinConstraints())
                    , o = n.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e }) => {
                        this.isDragging && e && (ti(e => {
                            let i = this.getAxisMotionValue(e);
                            i && (this.originPoint[e] += t[e].translate,
                                i.set(i.get() + t[e].translate))
                        }
                        ),
                            this.visualElement.render())
                    }
                    );
                return () => {
                    s(),
                        e(),
                        r(),
                        o && o()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                    , { drag: e = !1, dragDirectionLock: i = !1, dragPropagation: n = !1, dragConstraints: r = !1, dragElastic: s = .35, dragMomentum: o = !0 } = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function tc(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        let td = t => (e, i) => {
            t && R.Wi.postRender(() => t(e, i))
        }
            ;
        var tp = i(3955)
            , tf = i(2310)
            , tm = i(3043)
            , tv = i(2115);
        let tg = (0,
            tf.createContext)({})
            , ty = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };
        function tx(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let tP = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!ts.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = tx(t, e.target.x)
                    , n = tx(t, e.target.y);
                return `${i}% ${n}%`
            }
        };
        var tw = i(7081)
            , tT = i(2141)
            , tb = i(1011);
        let { schedule: tA, cancel: tS } = (0,
            tb.Z)(queueMicrotask, !1);
        class tV extends tf.Component {
            componentDidMount() {
                let { visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n } = this.props
                    , { projection: r } = t;
                (0,
                    tT.B)(tM),
                    r && (e.group && e.group.add(r),
                        i && i.register && n && i.register(r),
                        r.root.didUpdate(),
                        r.addEventListener("animationComplete", () => {
                            this.safeToRemove()
                        }
                        ),
                        r.setOptions({
                            ...r.options,
                            onExitComplete: () => this.safeToRemove()
                        })),
                    ty.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let { layoutDependency: e, visualElement: i, drag: n, isPresent: r } = this.props
                    , s = i.projection;
                return s && (s.isPresent = r,
                    n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                    t.isPresent === r || (r ? s.promote() : s.relegate() || R.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }
                    ))),
                    null
            }
            componentDidUpdate() {
                let { projection: t } = this.props.visualElement;
                t && (t.root.didUpdate(),
                    tA.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }
                    ))
            }
            componentWillUnmount() {
                let { visualElement: t, layoutGroup: e, switchLayoutGroup: i } = this.props
                    , { projection: n } = t;
                n && (n.scheduleCheckAfterUnmount(),
                    e && e.group && e.group.remove(n),
                    i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let { safeToRemove: t } = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function tC(t) {
            let [e, i] = function () {
                let t = (0,
                    tf.useContext)(tm.O);
                if (null === t)
                    return [!0, null];
                let { isPresent: e, onExitComplete: i, register: n } = t
                    , r = (0,
                        tf.useId)();
                (0,
                    tf.useEffect)(() => n(r), []);
                let s = (0,
                    tf.useCallback)(() => i && i(r), [r, i]);
                return !e && i ? [!1, s] : [!0]
            }()
                , n = (0,
                    tf.useContext)(tv.p);
            return (0,
                tp.jsx)(tV, {
                    ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0,
                        tf.useContext)(tg),
                    isPresent: e,
                    safeToRemove: i
                })
        }
        let tM = {
            borderRadius: {
                ...tP,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: tP,
            borderTopRightRadius: tP,
            borderBottomLeftRadius: tP,
            borderBottomRightRadius: tP,
            boxShadow: {
                correct: (t, { treeScale: e, projectionDelta: i }) => {
                    let n = tw.P.parse(t);
                    if (n.length > 5)
                        return t;
                    let r = tw.P.createTransformer(t)
                        , s = "number" != typeof n[0] ? 1 : 0
                        , o = i.x.scale * e.x
                        , a = i.y.scale * e.y;
                    n[0 + s] /= o,
                        n[1 + s] /= a;
                    let l = (0,
                        X.t)(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                        "number" == typeof n[3 + s] && (n[3 + s] /= l),
                        r(n)
                }
            }
        };
        var tE = i(2031)
            , tR = i(9393);
        let tD = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
            , tk = tD.length
            , tj = t => "string" == typeof t ? parseFloat(t) : t
            , tL = t => "number" == typeof t || ts.px.test(t);
        function tF(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let tO = tW(0, .5, tR.Bn)
            , tB = tW(.5, .95, P.Z);
        function tW(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i((0,
                N.Y)(t, e, n))
        }
        function t$(t, e) {
            t.min = e.min,
                t.max = e.max
        }
        function tI(t, e) {
            t$(t.x, e.x),
                t$(t.y, e.y)
        }
        function tU(t, e) {
            t.translate = e.translate,
                t.scale = e.scale,
                t.originPoint = e.originPoint,
                t.origin = e.origin
        }
        var tN = i(6272);
        function tX(t, e, i, n, r) {
            return t -= e,
                t = (0,
                    tN.q2)(t, 1 / i, n),
                void 0 !== r && (t = (0,
                    tN.q2)(t, 1 / r, n)),
                t
        }
        function tz(t, e, [i, n, r], s, o) {
            !function (t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                if (ts.aQ.test(e)) {
                    e = parseFloat(e);
                    let t = (0,
                        X.t)(o.min, o.max, e / 100);
                    e = t - o.min
                }
                if ("number" != typeof e)
                    return;
                let a = (0,
                    X.t)(s.min, s.max, n);
                t === s && (a -= e),
                    t.min = tX(t.min, e, i, a, r),
                    t.max = tX(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }
        let tY = ["x", "scaleX", "originX"]
            , tH = ["y", "scaleY", "originY"];
        function tK(t, e, i, n) {
            tz(t.x, e, tY, i ? i.x : void 0, n ? n.x : void 0),
                tz(t.y, e, tH, i ? i.y : void 0, n ? n.y : void 0)
        }
        var t_ = i(3112);
        function tG(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function tZ(t) {
            return tG(t.x) && tG(t.y)
        }
        function tq(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function tJ(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function tQ(t, e) {
            return tJ(t.x, e.x) && tJ(t.y, e.y)
        }
        function t0(t) {
            return z(t.x) / z(t.y)
        }
        function t1(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        var t2 = i(3563);
        class t3 {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                    t2.y4)(this.members, t),
                    t.scheduleRender()
            }
            remove(t) {
                if ((0,
                    t2.cl)(this.members, t),
                    t === this.prevLead && (this.prevLead = void 0),
                    t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                    !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                    this.lead = t,
                    t.show(),
                    i)) {
                    i.instance && i.scheduleRender(),
                        t.scheduleRender(),
                        t.resumeFrom = i,
                        e && (t.resumeFrom.preserveOpacity = !0),
                        i.snapshot && (t.snapshot = i.snapshot,
                            t.snapshot.latestValues = i.animationValues || i.latestValues),
                        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let { crossfade: n } = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let { options: e, resumingFrom: i } = t;
                    e.onExitComplete && e.onExitComplete(),
                        i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        var t5 = i(4794);
        let t6 = (t, e) => t.depth - e.depth;
        class t9 {
            constructor() {
                this.children = [],
                    this.isDirty = !1
            }
            add(t) {
                (0,
                    t2.y4)(this.children, t),
                    this.isDirty = !0
            }
            remove(t) {
                (0,
                    t2.cl)(this.children, t),
                    this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(t6),
                    this.isDirty = !1,
                    this.children.forEach(t)
            }
        }
        var t7 = i(4080)
            , t8 = i(769);
        function t4(t) {
            let e = (0,
                t8.i)(t) ? t.get() : t;
            return (0,
                t7.p)(e) ? e.toValue() : e
        }
        var et = i(1497)
            , ee = i(1568)
            , ei = i(2770)
            , en = i(2629);
        let er = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        }
            , es = "undefined" != typeof window && void 0 !== window.MotionDebug
            , eo = ["", "X", "Y", "Z"]
            , ea = {
                visibility: "hidden"
            }
            , el = 0;
        function eu(t, e, i, n) {
            let { latestValues: r } = e;
            r[t] && (i[t] = r[t],
                e.setStaticValue(t, 0),
                n && (n[t] = 0))
        }
        function eh({ attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: r }) {
            return class {
                constructor(t = {}, i = null == e ? void 0 : e()) {
                    this.id = el++,
                        this.animationId = 0,
                        this.children = new Set,
                        this.options = {},
                        this.isTreeAnimating = !1,
                        this.isAnimationBlocked = !1,
                        this.isLayoutDirty = !1,
                        this.isProjectionDirty = !1,
                        this.isSharedProjectionDirty = !1,
                        this.isTransformDirty = !1,
                        this.updateManuallyBlocked = !1,
                        this.updateBlockedByResize = !1,
                        this.isUpdating = !1,
                        this.isSVG = !1,
                        this.needsReset = !1,
                        this.shouldResetTransform = !1,
                        this.hasCheckedOptimisedAppear = !1,
                        this.treeScale = {
                            x: 1,
                            y: 1
                        },
                        this.eventHandlers = new Map,
                        this.hasTreeAnimated = !1,
                        this.updateScheduled = !1,
                        this.scheduleUpdate = () => this.update(),
                        this.projectionUpdateScheduled = !1,
                        this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1,
                                this.clearAllSnapshots())
                        }
                        ,
                        this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1,
                                es && (er.totalNodes = er.resolvedTargetDeltas = er.recalculatedProjection = 0),
                                this.nodes.forEach(ep),
                                this.nodes.forEach(eP),
                                this.nodes.forEach(ew),
                                this.nodes.forEach(ef),
                                es && window.MotionDebug.record(er)
                        }
                        ,
                        this.resolvedRelativeTargetAt = 0,
                        this.hasProjected = !1,
                        this.isVisible = !0,
                        this.animationProgress = 0,
                        this.sharedNodes = new Map,
                        this.latestValues = t,
                        this.root = i ? i.root || i : this,
                        this.path = i ? [...i.path, i] : [],
                        this.parent = i,
                        this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new t9)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tE.L),
                        this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i = this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = (0,
                        ee.v)(e),
                        this.instance = e;
                    let { layoutId: n, layout: r, visualElement: s } = this.options;
                    if (s && !s.current && s.mount(e),
                        this.root.nodes.add(this),
                        this.parent && this.parent.children.add(this),
                        i && (r || n) && (this.isLayoutDirty = !0),
                        t) {
                        let i;
                        let n = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                                i && i(),
                                i = function (t, e) {
                                    let i = et.X.now()
                                        , n = ({ timestamp: r }) => {
                                            let s = r - i;
                                            s >= e && ((0,
                                                R.Pn)(n),
                                                t(s - e))
                                        }
                                        ;
                                    return R.Wi.read(n, !0),
                                        () => (0,
                                            R.Pn)(n)
                                }(n, 250),
                                ty.hasAnimatedSinceResize && (ty.hasAnimatedSinceResize = !1,
                                    this.nodes.forEach(ex))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                        !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: n }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0,
                                    this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || eC
                                , { onLayoutAnimationStart: o, onLayoutAnimationComplete: a } = s.getProps()
                                , l = !this.targetLayout || !tQ(this.targetLayout, n) || i
                                , u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                                    this.resumingFrom.resumingFrom = void 0),
                                    this.setAnimationOrigin(t, u);
                                let e = {
                                    ...(0,
                                        t_.e)(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                                    e.type = !1),
                                    this.startAnimation(e)
                            } else
                                e || ex(this),
                                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        }
                        )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                        this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                        this.parent && this.parent.children.delete(this),
                        this.instance = void 0,
                        (0,
                            R.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                        this.nodes && this.nodes.forEach(eT),
                        this.animationId++)
                }
                getTransformTemplate() {
                    let { visualElement: t } = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t = !0) {
                    if (this.root.hasTreeAnimated = !0,
                        this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                            e.root === e)
                            return;
                        let { visualElement: i } = e.options;
                        if (!i)
                            return;
                        let n = (0,
                            en.s)(i);
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let { layout: t, layoutId: i } = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", R.Wi, !(t || i))
                        }
                        let { parent: r } = e;
                        r && !r.hasCheckedOptimisedAppear && t(r)
                    }(this),
                        this.root.isUpdating || this.root.startUpdate(),
                        this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                            e.updateScroll("snapshot"),
                            e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let { layoutId: e, layout: i } = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                        this.updateSnapshot(),
                        t && this.notifyListeners("willUpdate")
                }
                update() {
                    this.updateScheduled = !1;
                    let t = this.isUpdateBlocked();
                    if (t) {
                        this.unblockUpdate(),
                            this.clearAllSnapshots(),
                            this.nodes.forEach(ev);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(eg),
                        this.isUpdating = !1,
                        this.nodes.forEach(ey),
                        this.nodes.forEach(ec),
                        this.nodes.forEach(ed),
                        this.clearAllSnapshots();
                    let e = et.X.now();
                    R.w0.delta = (0,
                        Z.u)(0, 1e3 / 60, e - R.w0.timestamp),
                        R.w0.timestamp = e,
                        R.w0.isProcessing = !0,
                        R.S6.update.process(R.w0),
                        R.S6.preRender.process(R.w0),
                        R.S6.render.process(R.w0),
                        R.w0.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                        tA.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(em),
                        this.sharedNodes.forEach(eb)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                        R.Wi.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    R.Wi.postRender(() => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.updateScroll()
                        }
                    let t = this.layout;
                    this.layout = this.measure(!1),
                        this.layoutCorrected = (0,
                            te.dO)(),
                        this.isLayoutDirty = !1,
                        this.projectionDelta = void 0,
                        this.notifyListeners("measure", this.layout.layoutBox);
                    let { visualElement: e } = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t = "measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                        e) {
                        let e = n(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!r)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                        , e = this.projectionDelta && !tZ(this.projectionDelta)
                        , i = this.getTransformTemplate()
                        , n = i ? i(this.latestValues, "") : void 0
                        , s = n !== this.prevTransformTemplateValue;
                    t && (e || (0,
                        t5.ud)(this.latestValues) || s) && (r(this.instance, n),
                            this.shouldResetTransform = !1,
                            this.scheduleRender())
                }
                measure(t = !0) {
                    var e;
                    let i = this.measurePageBox()
                        , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                        eR((e = n).x),
                        eR(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var t;
                    let { visualElement: e } = this.options;
                    if (!e)
                        return (0,
                            te.dO)();
                    let i = e.measureViewportBox()
                        , n = (null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(ek);
                    if (!n) {
                        let { scroll: t } = this.root;
                        t && ((0,
                            tN.am)(i.x, t.offset.x),
                            (0,
                                tN.am)(i.y, t.offset.y))
                    }
                    return i
                }
                removeElementScroll(t) {
                    var e;
                    let i = (0,
                        te.dO)();
                    if (tI(i, t),
                        null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                        return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e]
                            , { scroll: r, options: s } = n;
                        n !== this.root && r && s.layoutScroll && (r.wasRoot && tI(i, t),
                            (0,
                                tN.am)(i.x, r.offset.x),
                            (0,
                                tN.am)(i.y, r.offset.y))
                    }
                    return i
                }
                applyTransform(t, e = !1) {
                    let i = (0,
                        te.dO)();
                    tI(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && (0,
                            tN.D2)(i, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }),
                            (0,
                                t5.ud)(n.latestValues) && (0,
                                    tN.D2)(i, n.latestValues)
                    }
                    return (0,
                        t5.ud)(this.latestValues) && (0,
                            tN.D2)(i, this.latestValues),
                        i
                }
                removeTransform(t) {
                    let e = (0,
                        te.dO)();
                    tI(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !(0,
                            t5.ud)(i.latestValues))
                            continue;
                        (0,
                            t5.Lj)(i.latestValues) && i.updateSnapshot();
                        let n = (0,
                            te.dO)()
                            , r = i.measurePageBox();
                        tI(n, r),
                            tK(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return (0,
                        t5.ud)(this.latestValues) && tK(e, this.latestValues),
                        e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                        this.root.scheduleUpdateProjection(),
                        this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                        this.layout = void 0,
                        this.snapshot = void 0,
                        this.prevTransformTemplateValue = void 0,
                        this.targetDelta = void 0,
                        this.target = void 0,
                        this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== R.w0.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t = !1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                        this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s
                        , a = !(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
                    if (a)
                        return;
                    let { layout: l, layoutId: u } = this.options;
                    if (this.layout && (l || u)) {
                        if (this.resolvedRelativeTargetAt = R.w0.timestamp,
                            !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = (0,
                                    te.dO)(),
                                this.relativeTargetOrigin = (0,
                                    te.dO)(),
                                G(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                                tI(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = (0,
                                te.dO)(),
                                this.targetWithTransforms = (0,
                                    te.dO)()),
                                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                                    i = this.target,
                                    n = this.relativeTarget,
                                    r = this.relativeParent.target,
                                    K(i.x, n.x, r.x),
                                    K(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tI(this.target, this.layout.layoutBox),
                                        (0,
                                            tN.o2)(this.target, this.targetDelta)) : tI(this.target, this.layout.layoutBox),
                                this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                    this.forceRelativeParentToResolveTarget(),
                                    this.relativeTarget = (0,
                                        te.dO)(),
                                    this.relativeTargetOrigin = (0,
                                        te.dO)(),
                                    G(this.relativeTargetOrigin, this.target, t.target),
                                    tI(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            es && er.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || (0,
                        t5.Lj)(this.parent.latestValues) || (0,
                            t5.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                        , i = !!this.resumingFrom || this !== e
                        , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                        i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                        this.resolvedRelativeTargetAt === R.w0.timestamp && (n = !1),
                        n)
                        return;
                    let { layout: r, layoutId: s } = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                        !this.layout || !(r || s))
                        return;
                    tI(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                        , a = this.treeScale.y;
                    (0,
                        tN.YY)(this.layoutCorrected, this.treeScale, this.path, i),
                        e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                            e.targetWithTransforms = (0,
                                te.dO)());
                    let { target: l } = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                            this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (tU(this.prevProjectionDelta.x, this.projectionDelta.x),
                        tU(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                        H(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                        this.treeScale.x === o && this.treeScale.y === a && t1(this.projectionDelta.x, this.prevProjectionDelta.x) && t1(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", l)),
                        es && er.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t = !0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
                        t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = (0,
                        te.wc)(),
                        this.projectionDelta = (0,
                            te.wc)(),
                        this.projectionDeltaWithTransform = (0,
                            te.wc)()
                }
                setAnimationOrigin(t, e = !1) {
                    let i;
                    let n = this.snapshot
                        , r = n ? n.latestValues : {}
                        , s = {
                            ...this.latestValues
                        }
                        , o = (0,
                            te.wc)();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                        this.attemptToResolveRelativeTarget = !e;
                    let a = (0,
                        te.dO)()
                        , l = n ? n.source : void 0
                        , u = this.layout ? this.layout.source : void 0
                        , h = l !== u
                        , c = this.getStack()
                        , d = !c || c.members.length <= 1
                        , p = !!(h && !d && !0 === this.options.crossfade && !this.path.some(eV));
                    this.animationProgress = 0,
                        this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (eA(o.x, t.x, n),
                                eA(o.y, t.y, n),
                                this.setTargetDelta(o),
                                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var l, u, c, f;
                                G(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                                    c = this.relativeTarget,
                                    f = this.relativeTargetOrigin,
                                    eS(c.x, f.x, a.x, n),
                                    eS(c.y, f.y, a.y, n),
                                    i && (l = this.relativeTarget,
                                        u = i,
                                        tq(l.x, u.x) && tq(l.y, u.y)) && (this.isProjectionDirty = !1),
                                    i || (i = (0,
                                        te.dO)()),
                                    tI(i, this.relativeTarget)
                            }
                            h && (this.animationValues = s,
                                function (t, e, i, n, r, s) {
                                    r ? (t.opacity = (0,
                                        X.t)(0, void 0 !== i.opacity ? i.opacity : 1, tO(n)),
                                        t.opacityExit = (0,
                                            X.t)(void 0 !== e.opacity ? e.opacity : 1, 0, tB(n))) : s && (t.opacity = (0,
                                                X.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                    for (let r = 0; r < tk; r++) {
                                        let s = `border${tD[r]}Radius`
                                            , o = tF(e, s)
                                            , a = tF(i, s);
                                        if (void 0 === o && void 0 === a)
                                            continue;
                                        o || (o = 0),
                                            a || (a = 0);
                                        let l = 0 === o || 0 === a || tL(o) === tL(a);
                                        l ? (t[s] = Math.max((0,
                                            X.t)(tj(o), tj(a), n), 0),
                                            (ts.aQ.test(a) || ts.aQ.test(o)) && (t[s] += "%")) : t[s] = a
                                    }
                                    (e.rotate || i.rotate) && (t.rotate = (0,
                                        X.t)(e.rotate || 0, i.rotate || 0, n))
                                }(s, r, this.latestValues, n, p, d)),
                                this.root.scheduleUpdateProjection(),
                                this.scheduleRender(),
                                this.animationProgress = n
                        }
                        ,
                        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                        this.currentAnimation && this.currentAnimation.stop(),
                        this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                        this.pendingAnimation && ((0,
                            R.Pn)(this.pendingAnimation),
                            this.pendingAnimation = void 0),
                        this.pendingAnimation = R.Wi.update(() => {
                            ty.hasAnimatedSinceResize = !0,
                                this.currentAnimation = (0,
                                    ei.D)(0, 1e3, {
                                        ...t,
                                        onUpdate: e => {
                                            this.mixTargetDelta(e),
                                                t.onUpdate && t.onUpdate(e)
                                        }
                                        ,
                                        onComplete: () => {
                                            t.onComplete && t.onComplete(),
                                                this.completeAnimation()
                                        }
                                    }),
                                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                                this.pendingAnimation = void 0
                        }
                        )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                        this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                        this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                        this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                        this.currentAnimation.stop()),
                        this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                        , { targetWithTransforms: e, target: i, layout: n, latestValues: r } = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && eD(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || (0,
                                te.dO)();
                            let e = z(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                                i.x.max = i.x.min + e;
                            let n = z(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                                i.y.max = i.y.min + n
                        }
                        tI(e, i),
                            (0,
                                tN.D2)(e, r),
                            H(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new t3);
                    let i = this.sharedNodes.get(t);
                    i.add(e);
                    let n = e.options.initialPromotionConfig;
                    e.promote({
                        transition: n ? n.transition : void 0,
                        preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let { layoutId: e } = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let { layoutId: e } = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let { layoutId: t } = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({ needsReset: t, transition: e, preserveFollowOpacity: i } = {}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                        t && (this.projectionDelta = void 0,
                            this.needsReset = !0),
                        e && this.setOptions({
                            transition: e
                        })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let { visualElement: t } = this.options;
                    if (!t)
                        return;
                    let e = !1
                        , { latestValues: i } = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                        !e)
                        return;
                    let n = {};
                    i.z && eu("z", t, n, this.animationValues);
                    for (let e = 0; e < eo.length; e++)
                        eu(`rotate${eo[e]}`, t, n, this.animationValues),
                            eu(`skew${eo[e]}`, t, n, this.animationValues);
                    for (let e in t.render(),
                        n)
                        t.setStaticValue(e, n[e]),
                            this.animationValues && (this.animationValues[e] = n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return ea;
                    let n = {
                        visibility: ""
                    }
                        , r = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                            n.opacity = "",
                            n.pointerEvents = t4(null == t ? void 0 : t.pointerEvents) || "",
                            n.transform = r ? r(this.latestValues, "") : "none",
                            n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                            e.pointerEvents = t4(null == t ? void 0 : t.pointerEvents) || ""),
                            this.hasProjected && !(0,
                                t5.ud)(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                                    this.hasProjected = !1),
                            e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                        n.transform = function (t, e, i) {
                            let n = ""
                                , r = t.x.translate / e.x
                                , s = t.y.translate / e.y
                                , o = (null == i ? void 0 : i.z) || 0;
                            if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                                (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                                i) {
                                let { transformPerspective: t, rotate: e, rotateX: r, rotateY: s, skewX: o, skewY: a } = i;
                                t && (n = `perspective(${t}px) ${n}`),
                                    e && (n += `rotate(${e}deg) `),
                                    r && (n += `rotateX(${r}deg) `),
                                    s && (n += `rotateY(${s}deg) `),
                                    o && (n += `skewX(${o}deg) `),
                                    a && (n += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x
                                , l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                                n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, o),
                        r && (n.transform = r(o, n.transform));
                    let { x: a, y: l } = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                        s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                        tT.P) {
                        if (void 0 === o[t])
                            continue;
                        let { correct: e, applyTo: i } = tT.P[t]
                            , r = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = r
                        } else
                            n[t] = r
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? t4(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                        n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                        this.root.nodes.forEach(ev),
                        this.root.sharedNodes.clear()
                }
            }
        }
        function ec(t) {
            t.updateLayout()
        }
        function ed(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let { layoutBox: e, measuredBox: n } = t.layout
                    , { animationType: r } = t.options
                    , s = i.source !== t.layout.source;
                "size" === r ? ti(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t]
                        , r = z(n);
                    n.min = e[t].min,
                        n.max = n.min + r
                }
                ) : eD(r, i.layoutBox, e) && ti(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n]
                        , o = z(e[n]);
                    r.max = r.min + o,
                        t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                            t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = (0,
                    te.wc)();
                H(o, e, i.layoutBox);
                let a = (0,
                    te.wc)();
                s ? H(a, t.applyTransform(n, !0), i.measuredBox) : H(a, e, i.layoutBox);
                let l = !tZ(o)
                    , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let { snapshot: r, layout: s } = n;
                        if (r && s) {
                            let o = (0,
                                te.dO)();
                            G(o, i.layoutBox, r.layoutBox);
                            let a = (0,
                                te.dO)();
                            G(a, e, s.layoutBox),
                                tQ(o, a) || (u = !0),
                                n.options.layoutRoot && (t.relativeTarget = a,
                                    t.relativeTargetOrigin = o,
                                    t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let { onExitComplete: e } = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function ep(t) {
            es && er.totalNodes++,
                t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
                    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
                    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function ef(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function em(t) {
            t.clearSnapshot()
        }
        function ev(t) {
            t.clearMeasurements()
        }
        function eg(t) {
            t.isLayoutDirty = !1
        }
        function ey(t) {
            let { visualElement: e } = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
                t.resetTransform()
        }
        function ex(t) {
            t.finishAnimation(),
                t.targetDelta = t.relativeTarget = t.target = void 0,
                t.isProjectionDirty = !0
        }
        function eP(t) {
            t.resolveTargetDelta()
        }
        function ew(t) {
            t.calcProjection()
        }
        function eT(t) {
            t.resetSkewAndRotation()
        }
        function eb(t) {
            t.removeLeadSnapshot()
        }
        function eA(t, e, i) {
            t.translate = (0,
                X.t)(e.translate, 0, i),
                t.scale = (0,
                    X.t)(e.scale, 1, i),
                t.origin = e.origin,
                t.originPoint = e.originPoint
        }
        function eS(t, e, i, n) {
            t.min = (0,
                X.t)(e.min, i.min, n),
                t.max = (0,
                    X.t)(e.max, i.max, n)
        }
        function eV(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let eC = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
            , eM = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
            , eE = eM("applewebkit/") && !eM("chrome/") ? Math.round : P.Z;
        function eR(t) {
            t.min = eE(t.min),
                t.max = eE(t.max)
        }
        function eD(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(t0(e) - t0(i)))
        }
        function ek(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }
        let ej = eh({
            attachResizeListener: (t, e) => V(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
            , eL = {
                current: void 0
            }
            , eF = eh({
                measureScroll: t => ({
                    x: t.scrollLeft,
                    y: t.scrollTop
                }),
                defaultParent: () => {
                    if (!eL.current) {
                        let t = new ej({});
                        t.mount(window),
                            t.setOptions({
                                layoutScroll: !0
                            }),
                            eL.current = t
                    }
                    return eL.current
                }
                ,
                resetTransform: (t, e) => {
                    t.style.transform = void 0 !== e ? e : "none"
                }
                ,
                checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
            });
        function eO(t, e) {
            let i = e ? "onHoverStart" : "onHoverEnd"
                , n = (n, r) => {
                    if ("touch" === n.pointerType || I())
                        return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e);
                    let o = s[i];
                    o && R.Wi.postRender(() => o(n, r))
                }
                ;
            return C(t.current, e ? "pointerenter" : "pointerleave", n, {
                passive: !t.getProps()[i]
            })
        }
        let eB = (t, e) => !!e && (t === e || eB(t, e.parentElement));
        function eW(t, e) {
            if (!e)
                return;
            let i = new PointerEvent("pointer" + t);
            e(i, b(i))
        }
        let e$ = new WeakMap
            , eI = new WeakMap
            , eU = t => {
                let e = e$.get(t.target);
                e && e(t)
            }
            , eN = t => {
                t.forEach(eU)
            }
            , eX = {
                some: 0,
                all: 1
            };
        var ez = i(9061);
        let eY = (0,
            tf.createContext)({});
        var eH = i(3398);
        let eK = (0,
            tf.createContext)({
                strict: !1
            });
        var e_ = i(4091);
        let eG = !1;
        function eZ() {
            window.MotionHandoffIsComplete = !0
        }
        var eq = i(827);
        function eJ(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        var eQ = i(8657)
            , e0 = i(5532);
        let e1 = Symbol.for("motionComponentSymbol")
            , e2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function e3(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (e2.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        var e5 = i(8767)
            , e6 = i(1872)
            , e9 = i(2822)
            , e7 = i(789)
            , e8 = i(6006);
        let e4 = t => (e, i) => {
            let n = (0,
                tf.useContext)(eY)
                , r = (0,
                    tf.useContext)(tm.O)
                , o = () => (function ({ applyWillChange: t = !1, scrapeMotionValuesFromProps: e, createRenderState: i, onMount: n }, r, o, a, l) {
                    let u = {
                        latestValues: function (t, e, i, n, r) {
                            var o;
                            let a = {}
                                , l = []
                                , u = n && (null === (o = t.style) || void 0 === o ? void 0 : o.willChange) === void 0
                                , h = r(t, {});
                            for (let t in h)
                                a[t] = t4(h[t]);
                            let { initial: c, animate: d } = t
                                , p = (0,
                                    eq.G)(t)
                                , f = (0,
                                    eq.M)(t);
                            e && f && !p && !1 !== t.inherit && (void 0 === c && (c = e.initial),
                                void 0 === d && (d = e.animate));
                            let m = !!i && !1 === i.initial;
                            m = m || !1 === c;
                            let v = m ? d : c;
                            return v && "boolean" != typeof v && !(0,
                                s.H)(v) && it(t, v, (t, e) => {
                                    for (let e in t) {
                                        let i = t[e];
                                        if (Array.isArray(i)) {
                                            let t = m ? i.length - 1 : 0;
                                            i = i[t]
                                        }
                                        null !== i && (a[e] = i)
                                    }
                                    for (let t in e)
                                        a[t] = e[t]
                                }
                                ),
                                u && (d && !1 !== c && !(0,
                                    s.H)(d) && it(t, d, t => {
                                        for (let e in t)
                                            !function (t, e) {
                                                let i = (0,
                                                    e8.p)(e);
                                                i && (0,
                                                    t2.y4)(t, i)
                                            }(l, e)
                                    }
                                    ),
                                    l.length && (a.willChange = l.join(","))),
                                a
                        }(r, o, a, !l && t, e),
                        renderState: i()
                    };
                    return n && (u.mount = t => n(r, t, u)),
                        u
                }
                )(t, e, n, r, i);
            return i ? o() : (0,
                e7.h)(o)
        }
            ;
        function it(t, e, i) {
            let n = Array.isArray(e) ? e : [e];
            for (let e = 0; e < n.length; e++) {
                let r = (0,
                    e9.o)(t, n[e]);
                if (r) {
                    let { transitionEnd: t, transition: e, ...n } = r;
                    i(n, t)
                }
            }
        }
        let ie = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        })
            , ii = () => ({
                ...ie(),
                attrs: {}
            });
        var ir = i(3877)
            , is = i(17);
        let io = {
            useVisualState: e4({
                scrapeMotionValuesFromProps: e6.U,
                createRenderState: ii,
                onMount: (t, e, { renderState: i, latestValues: n }) => {
                    R.Wi.read(() => {
                        try {
                            i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                        } catch (t) {
                            i.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                        R.Wi.render(() => {
                            (0,
                                ir.i)(i, n, (0,
                                    is.a)(e.tagName), t.transformTemplate),
                                (0,
                                    e5.K)(e, i)
                        }
                        )
                }
            })
        };
        var ia = i(6734);
        let il = {
            useVisualState: e4({
                applyWillChange: !0,
                scrapeMotionValuesFromProps: ia.U,
                createRenderState: ie
            })
        };
        var iu = i(9217)
            , ih = i(4223);
        function ic(t, e, i) {
            for (let n in e)
                (0,
                    t8.i)(e[n]) || (0,
                        iu.j)(n, i) || (t[n] = e[n])
        }
        function id(t, e) {
            let i = {}
                , n = function (t, e) {
                    let i = t.style || {}
                        , n = {};
                    return ic(n, i, t),
                        Object.assign(n, function ({ transformTemplate: t }, e) {
                            return (0,
                                tf.useMemo)(() => {
                                    let i = ie();
                                    return (0,
                                        ih.r)(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                }
                                    , [e])
                        }(t, e)),
                        n
                }(t, e);
            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
                n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
                n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
                i.style = n,
                i
        }
        let ip = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function im(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ip.has(t)
        }
        let iv = t => !im(t);
        try {
            (n = require("@emotion/is-prop-valid").default) && (iv = t => t.startsWith("on") ? !im(t) : n(t))
        } catch (t) { }
        function ig(t, e, i, n) {
            let r = (0,
                tf.useMemo)(() => {
                    let i = ii();
                    return (0,
                        ir.i)(i, e, (0,
                            is.a)(n), t.transformTemplate),
                    {
                        ...i.attrs,
                        style: {
                            ...i.style
                        }
                    }
                }
                    , [e]);
            if (t.style) {
                let e = {};
                ic(e, t.style, t),
                    r.style = {
                        ...e,
                        ...r.style
                    }
            }
            return r
        }
        var iy = i(5465)
            , ix = i(1198);
        let iP = (t, e) => e3(t) ? new ix.e(e) : new iy.W(e, {
            allowProjection: t !== tf.Fragment
        })
            , iw = (r = {
                animation: {
                    Feature: class extends y {
                        constructor(t) {
                            super(t),
                                t.animationState || (t.animationState = function (t) {
                                    let e = e => Promise.all(e.map(({ animation: e, options: i }) => (function (t, e, i = {}) {
                                        let n;
                                        if (t.notify("AnimationStart", e),
                                            Array.isArray(e)) {
                                            let r = e.map(e => d(t, e, i));
                                            n = Promise.all(r)
                                        } else if ("string" == typeof e)
                                            n = d(t, e, i);
                                        else {
                                            let r = "function" == typeof e ? (0,
                                                u.x)(t, e, i.custom) : e;
                                            n = Promise.all((0,
                                                c.w)(t, r, i))
                                        }
                                        return n.then(() => {
                                            t.notify("AnimationComplete", e)
                                        }
                                        )
                                    }
                                    )(t, e, i)))
                                        , i = g()
                                        , n = !0
                                        , r = e => (i, n) => {
                                            var r;
                                            let s = (0,
                                                u.x)(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                                            if (s) {
                                                let { transition: t, transitionEnd: e, ...n } = s;
                                                i = {
                                                    ...i,
                                                    ...n,
                                                    ...e
                                                }
                                            }
                                            return i
                                        }
                                        ;
                                    function h(u) {
                                        let h = t.getProps()
                                            , c = t.getVariantContext(!0) || {}
                                            , d = []
                                            , p = new Set
                                            , v = {}
                                            , g = 1 / 0;
                                        for (let e = 0; e < m; e++) {
                                            var y;
                                            let m = f[e]
                                                , x = i[m]
                                                , P = void 0 !== h[m] ? h[m] : c[m]
                                                , w = (0,
                                                    l.$)(P)
                                                , T = m === u ? x.isActive : null;
                                            !1 === T && (g = e);
                                            let b = P === c[m] && P !== h[m] && w;
                                            if (b && n && t.manuallyAnimateOnMount && (b = !1),
                                                x.protectedKeys = {
                                                    ...v
                                                },
                                                !x.isActive && null === T || !P && !x.prevProp || (0,
                                                    s.H)(P) || "boolean" == typeof P)
                                                continue;
                                            let A = (y = x.prevProp,
                                                "string" == typeof P ? P !== y : !!Array.isArray(P) && !a(P, y))
                                                , S = A || m === u && x.isActive && !b && w || e > g && w
                                                , V = !1
                                                , C = Array.isArray(P) ? P : [P]
                                                , M = C.reduce(r(m), {});
                                            !1 === T && (M = {});
                                            let { prevResolvedValues: E = {} } = x
                                                , R = {
                                                    ...E,
                                                    ...M
                                                }
                                                , D = e => {
                                                    S = !0,
                                                        p.has(e) && (V = !0,
                                                            p.delete(e)),
                                                        x.needsAnimating[e] = !0;
                                                    let i = t.getValue(e);
                                                    i && (i.liveStyle = !1)
                                                }
                                                ;
                                            for (let t in R) {
                                                let e = M[t]
                                                    , i = E[t];
                                                if (!v.hasOwnProperty(t))
                                                    ((0,
                                                        o.C)(e) && (0,
                                                            o.C)(i) ? a(e, i) : e === i) ? void 0 !== e && p.has(t) ? D(t) : x.protectedKeys[t] = !0 : null != e ? D(t) : p.add(t)
                                            }
                                            x.prevProp = P,
                                                x.prevResolvedValues = M,
                                                x.isActive && (v = {
                                                    ...v,
                                                    ...M
                                                }),
                                                n && t.blockInitialAnimation && (S = !1),
                                                S && (!b || V) && d.push(...C.map(t => ({
                                                    animation: t,
                                                    options: {
                                                        type: m
                                                    }
                                                })))
                                        }
                                        if (p.size) {
                                            let e = {};
                                            p.forEach(i => {
                                                let n = t.getBaseTarget(i)
                                                    , r = t.getValue(i);
                                                r && (r.liveStyle = !0),
                                                    e[i] = null != n ? n : null
                                            }
                                            ),
                                                d.push({
                                                    animation: e
                                                })
                                        }
                                        let x = !!d.length;
                                        return n && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (x = !1),
                                            n = !1,
                                            x ? e(d) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges: h,
                                        setActive: function (e, n) {
                                            var r;
                                            if (i[e].isActive === n)
                                                return Promise.resolve();
                                            null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                                var i;
                                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                            }
                                            ),
                                                i[e].isActive = n;
                                            let s = h(e);
                                            for (let t in i)
                                                i[t].protectedKeys = {};
                                            return s
                                        },
                                        setAnimateFunction: function (i) {
                                            e = i(t)
                                        },
                                        getState: () => i,
                                        reset: () => {
                                            i = g(),
                                                n = !0
                                        }
                                    }
                                }(t))
                        }
                        updateAnimationControlsSubscription() {
                            let { animate: t } = this.node.getProps();
                            (0,
                                s.H)(t) && (this.unmountControls = t.subscribe(this.node))
                        }
                        mount() {
                            this.updateAnimationControlsSubscription()
                        }
                        update() {
                            let { animate: t } = this.node.getProps()
                                , { animate: e } = this.node.prevProps || {};
                            t !== e && this.updateAnimationControlsSubscription()
                        }
                        unmount() {
                            var t;
                            this.node.animationState.reset(),
                                null === (t = this.unmountControls) || void 0 === t || t.call(this)
                        }
                    }
                },
                exit: {
                    Feature: class extends y {
                        constructor() {
                            super(...arguments),
                                this.id = x++
                        }
                        update() {
                            if (!this.node.presenceContext)
                                return;
                            let { isPresent: t, onExitComplete: e } = this.node.presenceContext
                                , { isPresent: i } = this.node.prevPresenceContext || {};
                            if (!this.node.animationState || t === i)
                                return;
                            let n = this.node.animationState.setActive("exit", !t);
                            e && !t && n.then(() => e(this.id))
                        }
                        mount() {
                            let { register: t } = this.node.presenceContext || {};
                            t && (this.unmount = t(this.id))
                        }
                        unmount() { }
                    }
                },
                inView: {
                    Feature: class extends y {
                        constructor() {
                            super(...arguments),
                                this.hasEnteredView = !1,
                                this.isInView = !1
                        }
                        startObserver() {
                            this.unmount();
                            let { viewport: t = {} } = this.node.getProps()
                                , { root: e, margin: i, amount: n = "some", once: r } = t
                                , s = {
                                    root: e ? e.current : void 0,
                                    rootMargin: i,
                                    threshold: "number" == typeof n ? n : eX[n]
                                }
                                , o = t => {
                                    let { isIntersecting: e } = t;
                                    if (this.isInView === e || (this.isInView = e,
                                        r && !e && this.hasEnteredView))
                                        return;
                                    e && (this.hasEnteredView = !0),
                                        this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                    let { onViewportEnter: i, onViewportLeave: n } = this.node.getProps()
                                        , s = e ? i : n;
                                    s && s(t)
                                }
                                ;
                            return function (t, e, i) {
                                let n = function ({ root: t, ...e }) {
                                    let i = t || document;
                                    eI.has(i) || eI.set(i, {});
                                    let n = eI.get(i)
                                        , r = JSON.stringify(e);
                                    return n[r] || (n[r] = new IntersectionObserver(eN, {
                                        root: t,
                                        ...e
                                    })),
                                        n[r]
                                }(e);
                                return e$.set(t, i),
                                    n.observe(t),
                                    () => {
                                        e$.delete(t),
                                            n.unobserve(t)
                                    }
                            }(this.node.current, s, o)
                        }
                        mount() {
                            this.startObserver()
                        }
                        update() {
                            if ("undefined" == typeof IntersectionObserver)
                                return;
                            let { props: t, prevProps: e } = this.node
                                , i = ["amount", "margin", "root"].some(function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                                    return i => t[i] !== e[i]
                                }(t, e));
                            i && this.startObserver()
                        }
                        unmount() { }
                    }
                },
                tap: {
                    Feature: class extends y {
                        constructor() {
                            super(...arguments),
                                this.removeStartListeners = P.Z,
                                this.removeEndListeners = P.Z,
                                this.removeAccessibleListeners = P.Z,
                                this.startPointerPress = (t, e) => {
                                    if (this.isPressing)
                                        return;
                                    this.removeEndListeners();
                                    let i = this.node.getProps()
                                        , n = (t, e) => {
                                            if (!this.checkPressEnd())
                                                return;
                                            let { onTap: i, onTapCancel: n, globalTapTarget: r } = this.node.getProps()
                                                , s = r || eB(this.node.current, t.target) ? i : n;
                                            s && R.Wi.update(() => s(t, e))
                                        }
                                        , r = C(window, "pointerup", n, {
                                            passive: !(i.onTap || i.onPointerUp)
                                        })
                                        , s = C(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                            passive: !(i.onTapCancel || i.onPointerCancel)
                                        });
                                    this.removeEndListeners = (0,
                                        M.z)(r, s),
                                        this.startPress(t, e)
                                }
                                ,
                                this.startAccessiblePress = () => {
                                    let t = t => {
                                        if ("Enter" !== t.key || this.isPressing)
                                            return;
                                        let e = t => {
                                            "Enter" === t.key && this.checkPressEnd() && eW("up", (t, e) => {
                                                let { onTap: i } = this.node.getProps();
                                                i && R.Wi.postRender(() => i(t, e))
                                            }
                                            )
                                        }
                                            ;
                                        this.removeEndListeners(),
                                            this.removeEndListeners = V(this.node.current, "keyup", e),
                                            eW("down", (t, e) => {
                                                this.startPress(t, e)
                                            }
                                            )
                                    }
                                        , e = V(this.node.current, "keydown", t)
                                        , i = () => {
                                            this.isPressing && eW("cancel", (t, e) => this.cancelPress(t, e))
                                        }
                                        , n = V(this.node.current, "blur", i);
                                    this.removeAccessibleListeners = (0,
                                        M.z)(e, n)
                                }
                        }
                        startPress(t, e) {
                            this.isPressing = !0;
                            let { onTapStart: i, whileTap: n } = this.node.getProps();
                            n && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                                i && R.Wi.postRender(() => i(t, e))
                        }
                        checkPressEnd() {
                            this.removeEndListeners(),
                                this.isPressing = !1;
                            let t = this.node.getProps();
                            return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                                !I()
                        }
                        cancelPress(t, e) {
                            if (!this.checkPressEnd())
                                return;
                            let { onTapCancel: i } = this.node.getProps();
                            i && R.Wi.postRender(() => i(t, e))
                        }
                        mount() {
                            let t = this.node.getProps()
                                , e = C(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                                    passive: !(t.onTapStart || t.onPointerStart)
                                })
                                , i = V(this.node.current, "focus", this.startAccessiblePress);
                            this.removeStartListeners = (0,
                                M.z)(e, i)
                        }
                        unmount() {
                            this.removeStartListeners(),
                                this.removeEndListeners(),
                                this.removeAccessibleListeners()
                        }
                    }
                },
                focus: {
                    Feature: class extends y {
                        constructor() {
                            super(...arguments),
                                this.isActive = !1
                        }
                        onFocus() {
                            let t = !1;
                            try {
                                t = this.node.current.matches(":focus-visible")
                            } catch (e) {
                                t = !0
                            }
                            t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                                this.isActive = !0)
                        }
                        onBlur() {
                            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                                this.isActive = !1)
                        }
                        mount() {
                            this.unmount = (0,
                                M.z)(V(this.node.current, "focus", () => this.onFocus()), V(this.node.current, "blur", () => this.onBlur()))
                        }
                        unmount() { }
                    }
                },
                hover: {
                    Feature: class extends y {
                        mount() {
                            this.unmount = (0,
                                M.z)(eO(this.node, !0), eO(this.node, !1))
                        }
                        unmount() { }
                    }
                },
                pan: {
                    Feature: class extends y {
                        constructor() {
                            super(...arguments),
                                this.removePointerDownListener = P.Z
                        }
                        onPointerDown(t) {
                            this.session = new D(t, this.createPanHandlers(), {
                                transformPagePoint: this.node.getTransformPagePoint(),
                                contextWindow: ta(this.node)
                            })
                        }
                        createPanHandlers() {
                            let { onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n } = this.node.getProps();
                            return {
                                onSessionStart: td(t),
                                onStart: td(e),
                                onMove: i,
                                onEnd: (t, e) => {
                                    delete this.session,
                                        n && R.Wi.postRender(() => n(t, e))
                                }
                            }
                        }
                        mount() {
                            this.removePointerDownListener = C(this.node.current, "pointerdown", t => this.onPointerDown(t))
                        }
                        update() {
                            this.session && this.session.updateHandlers(this.createPanHandlers())
                        }
                        unmount() {
                            this.removePointerDownListener(),
                                this.session && this.session.end()
                        }
                    }
                },
                drag: {
                    Feature: class extends y {
                        constructor(t) {
                            super(t),
                                this.removeGroupControls = P.Z,
                                this.removeListeners = P.Z,
                                this.controls = new th(t)
                        }
                        mount() {
                            let { dragControls: t } = this.node.getProps();
                            t && (this.removeGroupControls = t.subscribe(this.controls)),
                                this.removeListeners = this.controls.addListeners() || P.Z
                        }
                        unmount() {
                            this.removeGroupControls(),
                                this.removeListeners()
                        }
                    }
                    ,
                    ProjectionNode: eF,
                    MeasureLayout: tC
                },
                layout: {
                    ProjectionNode: eF,
                    MeasureLayout: tC
                }
            },
                function (t, { forwardMotionProps: e } = {
                    forwardMotionProps: !1
                }) {
                    let i = e3(t) ? io : il
                        , n = {
                            ...i,
                            preloadedFeatures: r,
                            useRender: function (t = !1) {
                                let e = (e, i, n, { latestValues: r }, s) => {
                                    let o = e3(e) ? ig : id
                                        , a = o(i, r, s, e)
                                        , l = function (t, e, i) {
                                            let n = {};
                                            for (let r in t)
                                                ("values" !== r || "object" != typeof t.values) && (iv(r) || !0 === i && im(r) || !e && !im(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                            return n
                                        }(i, "string" == typeof e, t)
                                        , u = e !== tf.Fragment ? {
                                            ...l,
                                            ...a,
                                            ref: n
                                        } : {}
                                        , { children: h } = i
                                        , c = (0,
                                            tf.useMemo)(() => (0,
                                                t8.i)(h) ? h.get() : h, [h]);
                                    return (0,
                                        tf.createElement)(e, {
                                            ...u,
                                            children: c
                                        })
                                }
                                    ;
                                return e
                            }(e),
                            createVisualElement: iP,
                            Component: t
                        };
                    return function ({ preloadedFeatures: t, createVisualElement: e, useRender: i, useVisualState: n, Component: r }) {
                        t && function (t) {
                            for (let e in t)
                                eQ.A[e] = {
                                    ...eQ.A[e],
                                    ...t[e]
                                }
                        }(t);
                        let s = (0,
                            tf.forwardRef)(function (t, s) {
                                var o, a;
                                let u;
                                let h = {
                                    ...(0,
                                        tf.useContext)(ez._),
                                    ...t,
                                    layoutId: function ({ layoutId: t }) {
                                        let e = (0,
                                            tf.useContext)(tv.p).id;
                                        return e && void 0 !== t ? e + "-" + t : t
                                    }(t)
                                }
                                    , { isStatic: c } = h
                                    , d = function (t) {
                                        let { initial: e, animate: i } = function (t, e) {
                                            if ((0,
                                                eq.G)(t)) {
                                                let { initial: e, animate: i } = t;
                                                return {
                                                    initial: !1 === e || (0,
                                                        l.$)(e) ? e : void 0,
                                                    animate: (0,
                                                        l.$)(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0,
                                            tf.useContext)(eY));
                                        return (0,
                                            tf.useMemo)(() => ({
                                                initial: e,
                                                animate: i
                                            }), [eJ(e), eJ(i)])
                                    }(t)
                                    , p = n(t, c);
                                if (!c && e0.j) {
                                    (0,
                                        tf.useContext)(eK).strict;
                                    let t = function (t) {
                                        let { drag: e, layout: i } = eQ.A;
                                        if (!e && !i)
                                            return {};
                                        let n = {
                                            ...e,
                                            ...i
                                        };
                                        return {
                                            MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                            ProjectionNode: n.ProjectionNode
                                        }
                                    }(h);
                                    u = t.MeasureLayout,
                                        d.visualElement = function (t, e, i, n, r) {
                                            var s;
                                            let { visualElement: o } = (0,
                                                tf.useContext)(eY)
                                                , a = (0,
                                                    tf.useContext)(eK)
                                                , l = (0,
                                                    tf.useContext)(tm.O)
                                                , u = (0,
                                                    tf.useContext)(ez._).reducedMotion
                                                , h = (0,
                                                    tf.useRef)();
                                            n = n || a.renderer,
                                                !h.current && n && (h.current = n(t, {
                                                    visualState: e,
                                                    parent: o,
                                                    props: i,
                                                    presenceContext: l,
                                                    blockInitialAnimation: !!l && !1 === l.initial,
                                                    reducedMotionConfig: u
                                                }));
                                            let c = h.current
                                                , d = (0,
                                                    tf.useContext)(tg);
                                            c && !c.projection && r && ("html" === c.type || "svg" === c.type) && function (t, e, i, n) {
                                                let { layoutId: r, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
                                                t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                                    if (e)
                                                        return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                                }(t.parent)),
                                                    t.projection.setOptions({
                                                        layoutId: r,
                                                        layout: s,
                                                        alwaysMeasureLayout: !!o || a && U(a),
                                                        visualElement: t,
                                                        animationType: "string" == typeof s ? s : "both",
                                                        initialPromotionConfig: n,
                                                        layoutScroll: l,
                                                        layoutRoot: u
                                                    })
                                            }(h.current, i, r, d),
                                                (0,
                                                    tf.useInsertionEffect)(() => {
                                                        c && c.update(i, l)
                                                    }
                                                    );
                                            let p = i[e_.M]
                                                , f = (0,
                                                    tf.useRef)(!!p && !window.MotionHandoffIsComplete && (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s ? void 0 : s.call(window, p)));
                                            return (0,
                                                eH.L)(() => {
                                                    c && (c.updateFeatures(),
                                                        tA.render(c.render),
                                                        f.current && c.animationState && c.animationState.animateChanges())
                                                }
                                                ),
                                                (0,
                                                    tf.useEffect)(() => {
                                                        c && (!f.current && c.animationState && c.animationState.animateChanges(),
                                                            f.current = !1,
                                                            eG || (eG = !0,
                                                                queueMicrotask(eZ)))
                                                    }
                                                    ),
                                                c
                                        }(r, p, h, e, t.ProjectionNode)
                                }
                                return (0,
                                    tp.jsxs)(eY.Provider, {
                                        value: d,
                                        children: [u && d.visualElement ? (0,
                                            tp.jsx)(u, {
                                                visualElement: d.visualElement,
                                                ...h
                                            }) : null, i(r, t, (o = d.visualElement,
                                                a = s,
                                                (0,
                                                    tf.useCallback)(t => {
                                                        t && p.mount && p.mount(t),
                                                            o && (t ? o.mount(t) : o.unmount()),
                                                            a && ("function" == typeof a ? a(t) : U(a) && (a.current = t))
                                                    }
                                                        , [o])), p, c, d.visualElement)]
                                    })
                            });
                        return s[e1] = r,
                            s
                    }(n)
                }
            )
            , iT = function (t) {
                if ("undefined" == typeof Proxy)
                    return t;
                let e = new Map
                    , i = (...e) => t(...e);
                return new Proxy(i, {
                    get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)),
                        e.get(n))
                })
            }(iw)
    },
    1937: function (t, e, i) {
        "use strict";
        i.d(e, {
            s: function () {
                return f
            }
        });
        var n = i(5368)
            , r = i(2864)
            , s = i(9701)
            , o = i(9400);
        let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
        var l = i(2114)
            , u = i(8717)
            , h = i(2389)
            , c = i(7081)
            , d = i(2311);
        let p = new Set(["auto", "none", "0"]);
        class f extends h.e {
            constructor(t, e, i, n, r) {
                super(t, e, i, n, r, !0)
            }
            readKeyframes() {
                let { unresolvedKeyframes: t, element: e, name: i } = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if ("string" == typeof n && (n = n.trim(),
                        (0,
                            o.t)(n))) {
                        let l = function t(e, i, n = 1) {
                            (0,
                                r.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let [l, u] = function (t) {
                                let e = a.exec(t);
                                if (!e)
                                    return [,];
                                let [, i, n, r] = e;
                                return [`--${null != i ? i : n}`, r]
                            }(e);
                            if (!l)
                                return;
                            let h = window.getComputedStyle(i).getPropertyValue(l);
                            if (h) {
                                let t = h.trim();
                                return (0,
                                    s.P)(t) ? parseFloat(t) : t
                            }
                            return (0,
                                o.t)(u) ? t(u, i, n + 1) : u
                        }(n, e.current);
                        void 0 !== l && (t[i] = l),
                            i === t.length - 1 && (this.finalKeyframe = n)
                    }
                }
                if (this.resolveNoneKeyframes(),
                    !l.z2.has(i) || 2 !== t.length)
                    return;
                let [n, h] = t
                    , c = (0,
                        u.C)(n)
                    , d = (0,
                        u.C)(h);
                if (c !== d) {
                    if ((0,
                        l.mP)(c) && (0,
                            l.mP)(d))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let { unresolvedKeyframes: t, name: e } = this
                    , i = [];
                for (let e = 0; e < t.length; e++) {
                    var r;
                    ("number" == typeof (r = t[e]) ? 0 === r : null === r || "none" === r || "0" === r || (0,
                        n.W)(r)) && i.push(e)
                }
                i.length && function (t, e, i) {
                    let n, r = 0;
                    for (; r < t.length && !n;) {
                        let e = t[r];
                        "string" == typeof e && !p.has(e) && (0,
                            c.V)(e).values.length && (n = t[r]),
                            r++
                    }
                    if (n && i)
                        for (let r of e)
                            t[r] = (0,
                                d.T)(i, n)
                }(t, i, e)
            }
            measureInitialState() {
                let { element: t, unresolvedKeyframes: e, name: i } = this;
                if (!t || !t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                    this.measuredOrigin = l.lw[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                    e[0] = this.measuredOrigin;
                let n = e[e.length - 1];
                void 0 !== n && t.getValue(i, n).jump(n, !1)
            }
            measureEndState() {
                var t;
                let { element: e, name: i, unresolvedKeyframes: n } = this;
                if (!e || !e.current)
                    return;
                let r = e.getValue(i);
                r && r.jump(this.measuredOrigin, !1);
                let s = n.length - 1
                    , o = n[s];
                n[s] = l.lw[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                    null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                    (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, i]) => {
                        e.getValue(t).set(i)
                    }
                    ),
                    this.resolveNoneKeyframes()
            }
        }
    },
    9753: function (t, e, i) {
        "use strict";
        i.d(e, {
            J: function () {
                return k
            }
        });
        var n = i(5532);
        let r = {
            current: null
        }
            , s = {
                current: !1
            };
        var o = i(2031)
            , a = i(2915)
            , l = i(769)
            , u = i(6400)
            , h = i(827)
            , c = i(3209)
            , d = i(2822)
            , p = i(8657)
            , f = i(6933)
            , m = i(8253)
            , v = i(2389)
            , g = i(9701)
            , y = i(5368)
            , x = i(3969)
            , P = i(7081)
            , w = i(8717)
            , T = i(3189);
        let b = [...w.$, x.$, P.P]
            , A = t => b.find((0,
                T.l)(t));
        var S = i(2311)
            , V = i(22)
            , C = i(1553);
        let M = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
            , E = f.V.length;
        class R {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({ parent: t, props: e, presenceContext: i, reducedMotionConfig: n, blockInitialAnimation: r, visualState: s }, o = {}) {
                this.applyWillChange = !1,
                    this.current = null,
                    this.children = new Set,
                    this.isVariantNode = !1,
                    this.isControllingVariants = !1,
                    this.shouldReduceMotion = null,
                    this.values = new Map,
                    this.KeyframeResolver = v.e,
                    this.features = {},
                    this.valueSubscriptions = new Map,
                    this.prevMotionValues = {},
                    this.events = {},
                    this.propEventSubscriptions = {},
                    this.notifyUpdate = () => this.notify("Update", this.latestValues),
                    this.render = () => {
                        this.isRenderScheduled = !1,
                            this.current && (this.triggerBuild(),
                                this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }
                    ,
                    this.isRenderScheduled = !1,
                    this.scheduleRender = () => {
                        this.isRenderScheduled || (this.isRenderScheduled = !0,
                            C.Wi.render(this.render, !1, !0))
                    }
                    ;
                let { latestValues: a, renderState: u } = s;
                this.latestValues = a,
                    this.baseTarget = {
                        ...a
                    },
                    this.initialValues = e.initial ? {
                        ...a
                    } : {},
                    this.renderState = u,
                    this.parent = t,
                    this.props = e,
                    this.presenceContext = i,
                    this.depth = t ? t.depth + 1 : 0,
                    this.reducedMotionConfig = n,
                    this.options = o,
                    this.blockInitialAnimation = !!r,
                    this.isControllingVariants = (0,
                        h.G)(e),
                    this.isVariantNode = (0,
                        h.M)(e),
                    this.isVariantNode && (this.variantChildren = new Set),
                    this.manuallyAnimateOnMount = !!(t && t.current);
                let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in d) {
                    let e = d[t];
                    void 0 !== a[t] && (0,
                        l.i)(e) && e.set(a[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                    m.R.set(t, this),
                    this.projection && !this.projection.instance && this.projection.mount(t),
                    this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                    this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
                    s.current || function () {
                        if (s.current = !0,
                            n.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)")
                                    , e = () => r.current = t.matches;
                                t.addListener(e),
                                    e()
                            } else
                                r.current = !1
                        }
                    }(),
                    this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || r.current),
                    this.parent && this.parent.children.add(this),
                    this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in m.R.delete(this.current),
                    this.projection && this.projection.unmount(),
                    (0,
                        C.Pn)(this.notifyUpdate),
                    (0,
                        C.Pn)(this.render),
                    this.valueSubscriptions.forEach(t => t()),
                    this.valueSubscriptions.clear(),
                    this.removeFromVariantTree && this.removeFromVariantTree(),
                    this.parent && this.parent.children.delete(this),
                    this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                        e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let n = u.G.has(t)
                    , r = e.on("change", e => {
                        this.latestValues[t] = e,
                            this.props.onUpdate && C.Wi.preRender(this.notifyUpdate),
                            n && this.projection && (this.projection.isTransformDirty = !0)
                    }
                    )
                    , s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                    this.valueSubscriptions.set(t, () => {
                        r(),
                            s(),
                            i && i(),
                            e.owner && e.stop()
                    }
                    )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in p.A) {
                    let e = p.A[t];
                    if (!e)
                        continue;
                    let { isEnabled: i, Feature: n } = e;
                    if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)),
                        this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                            e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0,
                    V.dO)()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                    this.prevProps = this.props,
                    this.props = t,
                    this.prevPresenceContext = this.presenceContext,
                    this.presenceContext = e;
                for (let e = 0; e < M.length; e++) {
                    let i = M[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                        delete this.propEventSubscriptions[i]);
                    let n = "on" + i
                        , r = t[n];
                    r && (this.propEventSubscriptions[i] = this.on(i, r))
                }
                this.prevMotionValues = function (t, e, i) {
                    for (let n in e) {
                        let r = e[n]
                            , s = i[n];
                        if ((0,
                            l.i)(r))
                            t.addValue(n, r);
                        else if ((0,
                            l.i)(s))
                            t.addValue(n, (0,
                                a.BX)(r, {
                                    owner: t
                                }));
                        else if (s !== r) {
                            if (t.hasValue(n)) {
                                let e = t.getValue(n);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(n);
                                t.addValue(n, (0,
                                    a.BX)(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                    this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(t = !1) {
                if (t)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                        t
                }
                let e = {};
                for (let t = 0; t < E; t++) {
                    let i = f.V[t]
                        , n = this.props[i];
                    ((0,
                        c.$)(n) || !1 === n) && (e[i] = n)
                }
                return e
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                        () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                    this.bindToMotionValue(t, e),
                    this.values.set(t, e),
                    this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                    this.valueSubscriptions.delete(t)),
                    delete this.latestValues[t],
                    this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = (0,
                    a.BX)(null === e ? void 0 : e, {
                        owner: this
                    }),
                    this.addValue(t, i)),
                    i
            }
            readValue(t, e) {
                var i;
                let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && ((0,
                    g.P)(n) || (0,
                        y.W)(n)) ? n = parseFloat(n) : !A(n) && P.P.test(e) && (n = (0,
                            S.T)(t, e)),
                    this.setBaseTarget(t, (0,
                        l.i)(n) ? n.get() : n)),
                    (0,
                        l.i)(n) ? n.get() : n
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let { initial: n } = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let r = (0,
                        d.o)(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    r && (i = r[t])
                }
                if (n && void 0 !== i)
                    return i;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || (0,
                    l.i)(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new o.L),
                    this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        var D = i(1937);
        class k extends R {
            constructor() {
                super(...arguments),
                    this.KeyframeResolver = D.s
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, { vars: e, style: i }) {
                delete e[t],
                    delete i[t]
            }
        }
    },
    483: function (t, e, i) {
        "use strict";
        i.d(e, {
            D: function () {
                return n
            }
        });
        let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
    },
    9400: function (t, e, i) {
        "use strict";
        i.d(e, {
            f: function () {
                return r
            },
            t: function () {
                return o
            }
        });
        let n = t => e => "string" == typeof e && e.startsWith(t)
            , r = n("--")
            , s = n("var(--")
            , o = t => {
                let e = s(t);
                return !!e && a.test(t.split("/*")[0].trim())
            }
            , a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
    },
    1568: function (t, e, i) {
        "use strict";
        function n(t) {
            return t instanceof SVGElement && "svg" !== t.tagName
        }
        i.d(e, {
            v: function () {
                return n
            }
        })
    },
    3602: function (t, e, i) {
        "use strict";
        i.d(e, {
            I: function () {
                return r
            }
        });
        var n = i(2864);
        function r(t, e, i) {
            var r;
            if ("string" == typeof t) {
                let s = document;
                e && ((0,
                    n.k)(!!e.current, "Scope provided, but no element detected."),
                    s = e.current),
                    i ? (null !== (r = i[t]) && void 0 !== r || (i[t] = s.querySelectorAll(t)),
                        t = i[t]) : t = s.querySelectorAll(t)
            } else
                t instanceof Element && (t = [t]);
            return Array.from(t || [])
        }
    },
    2114: function (t, e, i) {
        "use strict";
        i.d(e, {
            Ei: function () {
                return d
            },
            lw: function () {
                return p
            },
            mP: function () {
                return a
            },
            z2: function () {
                return o
            }
        });
        var n = i(6400)
            , r = i(1293)
            , s = i(459);
        let o = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
            , a = t => t === r.Rx || t === s.px
            , l = (t, e) => parseFloat(t.split(", ")[e])
            , u = (t, e) => (i, { transform: n }) => {
                if ("none" === n || !n)
                    return 0;
                let r = n.match(/^matrix3d\((.+)\)$/u);
                if (r)
                    return l(r[1], e);
                {
                    let e = n.match(/^matrix\((.+)\)$/u);
                    return e ? l(e[1], t) : 0
                }
            }
            , h = new Set(["x", "y", "z"])
            , c = n._.filter(t => !h.has(t));
        function d(t) {
            let e = [];
            return c.forEach(i => {
                let n = t.getValue(i);
                void 0 !== n && (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0))
            }
            ),
                e
        }
        let p = {
            width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, { top: e }) => parseFloat(e),
            left: (t, { left: e }) => parseFloat(e),
            bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
            right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
            x: u(4, 13),
            y: u(5, 14)
        };
        p.translateX = p.x,
            p.translateY = p.y
    },
    2311: function (t, e, i) {
        "use strict";
        i.d(e, {
            T: function () {
                return o
            }
        });
        var n = i(7081)
            , r = i(6828)
            , s = i(3256);
        function o(t, e) {
            let i = (0,
                s.A)(t);
            return i !== r.h && (i = n.P),
                i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
    },
    3256: function (t, e, i) {
        "use strict";
        i.d(e, {
            A: function () {
                return a
            }
        });
        var n = i(3969)
            , r = i(6828)
            , s = i(8740);
        let o = {
            ...s.j,
            color: n.$,
            backgroundColor: n.$,
            outlineColor: n.$,
            fill: n.$,
            stroke: n.$,
            borderColor: n.$,
            borderTopColor: n.$,
            borderRightColor: n.$,
            borderBottomColor: n.$,
            borderLeftColor: n.$,
            filter: r.h,
            WebkitFilter: r.h
        }
            , a = t => o[t]
    },
    8717: function (t, e, i) {
        "use strict";
        i.d(e, {
            $: function () {
                return o
            },
            C: function () {
                return a
            }
        });
        var n = i(1293)
            , r = i(459)
            , s = i(3189);
        let o = [n.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, {
            test: t => "auto" === t,
            parse: t => t
        }]
            , a = t => o.find((0,
                s.l)(t))
    },
    8740: function (t, e, i) {
        "use strict";
        i.d(e, {
            j: function () {
                return o
            }
        });
        var n = i(1293)
            , r = i(459);
        let s = {
            ...n.Rx,
            transform: Math.round
        }
            , o = {
                borderWidth: r.px,
                borderTopWidth: r.px,
                borderRightWidth: r.px,
                borderBottomWidth: r.px,
                borderLeftWidth: r.px,
                borderRadius: r.px,
                radius: r.px,
                borderTopLeftRadius: r.px,
                borderTopRightRadius: r.px,
                borderBottomRightRadius: r.px,
                borderBottomLeftRadius: r.px,
                width: r.px,
                maxWidth: r.px,
                height: r.px,
                maxHeight: r.px,
                size: r.px,
                top: r.px,
                right: r.px,
                bottom: r.px,
                left: r.px,
                padding: r.px,
                paddingTop: r.px,
                paddingRight: r.px,
                paddingBottom: r.px,
                paddingLeft: r.px,
                margin: r.px,
                marginTop: r.px,
                marginRight: r.px,
                marginBottom: r.px,
                marginLeft: r.px,
                rotate: r.RW,
                rotateX: r.RW,
                rotateY: r.RW,
                rotateZ: r.RW,
                scale: n.bA,
                scaleX: n.bA,
                scaleY: n.bA,
                scaleZ: n.bA,
                skew: r.RW,
                skewX: r.RW,
                skewY: r.RW,
                distance: r.px,
                translateX: r.px,
                translateY: r.px,
                translateZ: r.px,
                x: r.px,
                y: r.px,
                z: r.px,
                perspective: r.px,
                transformPerspective: r.px,
                opacity: n.Fq,
                originX: r.$C,
                originY: r.$C,
                originZ: r.px,
                zIndex: s,
                backgroundPositionX: r.px,
                backgroundPositionY: r.px,
                fillOpacity: n.Fq,
                strokeOpacity: n.Fq,
                numOctaves: s
            }
    },
    3189: function (t, e, i) {
        "use strict";
        i.d(e, {
            l: function () {
                return n
            }
        });
        let n = t => e => e.test(t)
    },
    5465: function (t, e, i) {
        "use strict";
        i.d(e, {
            W: function () {
                return d
            }
        });
        var n = i(4223)
            , r = i(9400)
            , s = i(6400)
            , o = i(6734)
            , a = i(8170)
            , l = i(3256)
            , u = i(7955)
            , h = i(9753)
            , c = i(769);
        class d extends h.J {
            constructor() {
                super(...arguments),
                    this.type = "html",
                    this.applyWillChange = !0,
                    this.renderInstance = a.N
            }
            readValueFromInstance(t, e) {
                if (s.G.has(e)) {
                    let t = (0,
                        l.A)(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                        , n = ((0,
                            r.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, { transformPagePoint: e }) {
                return (0,
                    u.J)(t, e)
            }
            build(t, e, i) {
                (0,
                    n.r)(t, e, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return (0,
                    o.U)(t, e, i)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                    delete this.childSubscription);
                let { children: t } = this.props;
                (0,
                    c.i)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }
                    ))
            }
        }
    },
    4223: function (t, e, i) {
        "use strict";
        i.d(e, {
            r: function () {
                return u
            }
        });
        var n = i(6400);
        let r = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
        var s = i(8740);
        let o = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
            , a = n._.length;
        var l = i(9400);
        function u(t, e, i) {
            let { style: u, vars: h, transformOrigin: c } = t
                , d = !1
                , p = !1;
            for (let t in e) {
                let i = e[t];
                if (n.G.has(t)) {
                    d = !0;
                    continue
                }
                if ((0,
                    l.f)(t)) {
                    h[t] = i;
                    continue
                }
                {
                    let e = r(i, s.j[t]);
                    t.startsWith("origin") ? (p = !0,
                        c[t] = e) : u[t] = e
                }
            }
            if (!e.transform && (d || i ? u.transform = function (t, e, i) {
                let l = ""
                    , u = !0;
                for (let h = 0; h < a; h++) {
                    let a = n._[h]
                        , c = t[a];
                    if (void 0 === c)
                        continue;
                    let d = !0;
                    if (!(d = "number" == typeof c ? c === (a.startsWith("scale") ? 1 : 0) : 0 === parseFloat(c)) || i) {
                        let t = r(c, s.j[a]);
                        if (!d) {
                            u = !1;
                            let e = o[a] || a;
                            l += `${e}(${t}) `
                        }
                        i && (e[a] = t)
                    }
                }
                return l = l.trim(),
                    i ? l = i(e, u ? "" : l) : u && (l = "none"),
                    l
            }(e, t.transform, i) : u.transform && (u.transform = "none")),
                p) {
                let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = c;
                u.transformOrigin = `${t} ${e} ${i}`
            }
        }
    },
    8170: function (t, e, i) {
        "use strict";
        function n(t, { style: e, vars: i }, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)),
                i)
                t.style.setProperty(s, i[s])
        }
        i.d(e, {
            N: function () {
                return n
            }
        })
    },
    6734: function (t, e, i) {
        "use strict";
        i.d(e, {
            U: function () {
                return s
            }
        });
        var n = i(9217)
            , r = i(769);
        function s(t, e, i) {
            var s;
            let { style: o } = t
                , a = {};
            for (let l in o)
                ((0,
                    r.i)(o[l]) || e.style && (0,
                        r.i)(e.style[l]) || (0,
                            n.j)(l, t) || (null === (s = null == i ? void 0 : i.getValue(l)) || void 0 === s ? void 0 : s.liveStyle) !== void 0) && (a[l] = o[l]);
            return i && o && "string" == typeof o.willChange && (i.applyWillChange = !1),
                a
        }
    },
    6400: function (t, e, i) {
        "use strict";
        i.d(e, {
            G: function () {
                return r
            },
            _: function () {
                return n
            }
        });
        let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
            , r = new Set(n)
    },
    8253: function (t, e, i) {
        "use strict";
        i.d(e, {
            R: function () {
                return n
            }
        });
        let n = new WeakMap
    },
    1198: function (t, e, i) {
        "use strict";
        i.d(e, {
            e: function () {
                return p
            }
        });
        var n = i(1872)
            , r = i(9753)
            , s = i(3877)
            , o = i(483)
            , a = i(8149)
            , l = i(6400)
            , u = i(8767)
            , h = i(3256)
            , c = i(22)
            , d = i(17);
        class p extends r.J {
            constructor() {
                super(...arguments),
                    this.type = "svg",
                    this.isSVGTag = !1,
                    this.measureInstanceViewportBox = c.dO
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (l.G.has(e)) {
                    let t = (0,
                        h.A)(e);
                    return t && t.default || 0
                }
                return e = a.s.has(e) ? e : (0,
                    o.D)(e),
                    t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return (0,
                    n.U)(t, e, i)
            }
            build(t, e, i) {
                (0,
                    s.i)(t, e, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                (0,
                    u.K)(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = (0,
                    d.a)(t.tagName),
                    super.mount(t)
            }
        }
    },
    3877: function (t, e, i) {
        "use strict";
        i.d(e, {
            i: function () {
                return l
            }
        });
        var n = i(4223)
            , r = i(459);
        function s(t, e, i) {
            return "string" == typeof t ? t : r.px.transform(e + i * t)
        }
        let o = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
            , a = {
                offset: "strokeDashoffset",
                array: "strokeDasharray"
            };
        function l(t, { attrX: e, attrY: i, attrScale: l, originX: u, originY: h, pathLength: c, pathSpacing: d = 1, pathOffset: p = 0, ...f }, m, v) {
            if ((0,
                n.r)(t, f, v),
                m) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
                t.style = {};
            let { attrs: g, style: y, dimensions: x } = t;
            g.transform && (x && (y.transform = g.transform),
                delete g.transform),
                x && (void 0 !== u || void 0 !== h || y.transform) && (y.transformOrigin = function (t, e, i) {
                    let n = s(e, t.x, t.width)
                        , r = s(i, t.y, t.height);
                    return `${n} ${r}`
                }(x, void 0 !== u ? u : .5, void 0 !== h ? h : .5)),
                void 0 !== e && (g.x = e),
                void 0 !== i && (g.y = i),
                void 0 !== l && (g.scale = l),
                void 0 !== c && function (t, e, i = 1, n = 0, s = !0) {
                    t.pathLength = 1;
                    let l = s ? o : a;
                    t[l.offset] = r.px.transform(-n);
                    let u = r.px.transform(e)
                        , h = r.px.transform(i);
                    t[l.array] = `${u} ${h}`
                }(g, c, d, p, !1)
        }
    },
    8149: function (t, e, i) {
        "use strict";
        i.d(e, {
            s: function () {
                return n
            }
        });
        let n = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    17: function (t, e, i) {
        "use strict";
        i.d(e, {
            a: function () {
                return n
            }
        });
        let n = t => "string" == typeof t && "svg" === t.toLowerCase()
    },
    8767: function (t, e, i) {
        "use strict";
        i.d(e, {
            K: function () {
                return o
            }
        });
        var n = i(483)
            , r = i(8170)
            , s = i(8149);
        function o(t, e, i, o) {
            for (let i in (0,
                r.N)(t, e, void 0, o),
                e.attrs)
                t.setAttribute(s.s.has(i) ? i : (0,
                    n.D)(i), e.attrs[i])
        }
    },
    1872: function (t, e, i) {
        "use strict";
        i.d(e, {
            U: function () {
                return o
            }
        });
        var n = i(769)
            , r = i(6734)
            , s = i(6400);
        function o(t, e, i) {
            let o = (0,
                r.U)(t, e, i);
            for (let i in t)
                if ((0,
                    n.i)(t[i]) || (0,
                        n.i)(e[i])) {
                    let e = -1 !== s._.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
                    o[e] = t[i]
                }
            return o
        }
    },
    2389: function (t, e, i) {
        "use strict";
        i.d(e, {
            e: function () {
                return c
            },
            m: function () {
                return h
            }
        });
        var n = i(2114)
            , r = i(1553);
        let s = new Set
            , o = !1
            , a = !1;
        function l() {
            if (a) {
                let t = Array.from(s).filter(t => t.needsMeasurement)
                    , e = new Set(t.map(t => t.element))
                    , i = new Map;
                e.forEach(t => {
                    let e = (0,
                        n.Ei)(t);
                    e.length && (i.set(t, e),
                        t.render())
                }
                ),
                    t.forEach(t => t.measureInitialState()),
                    e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            var n;
                            null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                        }
                        )
                    }
                    ),
                    t.forEach(t => t.measureEndState()),
                    t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    }
                    )
            }
            a = !1,
                o = !1,
                s.forEach(t => t.complete()),
                s.clear()
        }
        function u() {
            s.forEach(t => {
                t.readKeyframes(),
                    t.needsMeasurement && (a = !0)
            }
            )
        }
        function h() {
            u(),
                l()
        }
        class c {
            constructor(t, e, i, n, r, s = !1) {
                this.isComplete = !1,
                    this.isAsync = !1,
                    this.needsMeasurement = !1,
                    this.isScheduled = !1,
                    this.unresolvedKeyframes = [...t],
                    this.onComplete = e,
                    this.name = i,
                    this.motionValue = n,
                    this.element = r,
                    this.isAsync = s
            }
            scheduleResolve() {
                this.isScheduled = !0,
                    this.isAsync ? (s.add(this),
                        o || (o = !0,
                            r.Wi.read(u),
                            r.Wi.resolveKeyframes(l))) : (this.readKeyframes(),
                                this.complete())
            }
            readKeyframes() {
                let { unresolvedKeyframes: t, name: e, element: i, motionValue: n } = this;
                for (let r = 0; r < t.length; r++)
                    if (null === t[r]) {
                        if (0 === r) {
                            let r = null == n ? void 0 : n.get()
                                , s = t[t.length - 1];
                            if (void 0 !== r)
                                t[0] = r;
                            else if (i && e) {
                                let n = i.readValue(e, s);
                                null != n && (t[0] = n)
                            }
                            void 0 === t[0] && (t[0] = s),
                                n && void 0 === r && n.set(t[0])
                        } else
                            t[r] = t[r - 1]
                    }
            }
            setFinalKeyframe() { }
            measureInitialState() { }
            renderEndStyles() { }
            measureEndState() { }
            complete() {
                this.isComplete = !0,
                    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                    s.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                    s.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
    },
    827: function (t, e, i) {
        "use strict";
        i.d(e, {
            G: function () {
                return o
            },
            M: function () {
                return a
            }
        });
        var n = i(3845)
            , r = i(3209)
            , s = i(6933);
        function o(t) {
            return (0,
                n.H)(t.animate) || s.V.some(e => (0,
                    r.$)(t[e]))
        }
        function a(t) {
            return !!(o(t) || t.variants)
        }
    },
    3209: function (t, e, i) {
        "use strict";
        function n(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        i.d(e, {
            $: function () {
                return n
            }
        })
    },
    4157: function (t, e, i) {
        "use strict";
        i.d(e, {
            x: function () {
                return r
            }
        });
        var n = i(2822);
        function r(t, e, i) {
            let r = t.getProps();
            return (0,
                n.o)(r, e, void 0 !== i ? i : r.custom, t)
        }
    },
    2822: function (t, e, i) {
        "use strict";
        function n(t) {
            let e = [{}, {}];
            return null == t || t.values.forEach((t, i) => {
                e[0][i] = t.get(),
                    e[1][i] = t.getVelocity()
            }
            ),
                e
        }
        function r(t, e, i, r) {
            if ("function" == typeof e) {
                let [s, o] = n(r);
                e = e(void 0 !== i ? i : t.custom, s, o)
            }
            if ("string" == typeof e && (e = t.variants && t.variants[e]),
                "function" == typeof e) {
                let [s, o] = n(r);
                e = e(void 0 !== i ? i : t.custom, s, o)
            }
            return e
        }
        i.d(e, {
            o: function () {
                return r
            }
        })
    },
    6933: function (t, e, i) {
        "use strict";
        i.d(e, {
            V: function () {
                return r
            },
            e: function () {
                return n
            }
        });
        let n = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
            , r = ["initial", ...n]
    },
    8794: function (t, e, i) {
        "use strict";
        i.d(e, {
            c: function () {
                return n
            }
        });
        let n = {
            skipAnimations: !1,
            useManualTiming: !1
        }
    },
    3563: function (t, e, i) {
        "use strict";
        function n(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function r(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        i.d(e, {
            cl: function () {
                return r
            },
            y4: function () {
                return n
            }
        })
    },
    232: function (t, e, i) {
        "use strict";
        i.d(e, {
            u: function () {
                return n
            }
        });
        let n = (t, e, i) => i > e ? e : i < t ? t : i
    },
    2864: function (t, e, i) {
        "use strict";
        i.d(e, {
            K: function () {
                return r
            },
            k: function () {
                return s
            }
        });
        var n = i(1806);
        let r = n.Z
            , s = n.Z
    },
    5532: function (t, e, i) {
        "use strict";
        i.d(e, {
            j: function () {
                return n
            }
        });
        let n = "undefined" != typeof window
    },
    9701: function (t, e, i) {
        "use strict";
        i.d(e, {
            P: function () {
                return n
            }
        });
        let n = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
    },
    5368: function (t, e, i) {
        "use strict";
        i.d(e, {
            W: function () {
                return n
            }
        });
        let n = t => /^0[^.\s]+$/u.test(t)
    },
    6118: function (t, e, i) {
        "use strict";
        function n(t) {
            let e;
            return () => (void 0 === e && (e = t()),
                e)
        }
        i.d(e, {
            X: function () {
                return n
            }
        })
    },
    6076: function (t, e, i) {
        "use strict";
        i.d(e, {
            t: function () {
                return n
            }
        });
        let n = (t, e, i) => t + (e - t) * i
    },
    1806: function (t, e, i) {
        "use strict";
        i.d(e, {
            Z: function () {
                return n
            }
        });
        let n = t => t
    },
    8460: function (t, e, i) {
        "use strict";
        i.d(e, {
            Y: function () {
                return r
            }
        });
        var n = i(3401);
        function r(t) {
            let e = [0];
            return (0,
                n.c)(e, t.length - 1),
                e
        }
    },
    3401: function (t, e, i) {
        "use strict";
        i.d(e, {
            c: function () {
                return s
            }
        });
        var n = i(6076)
            , r = i(2581);
        function s(t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
                let o = (0,
                    r.Y)(0, e, s);
                t.push((0,
                    n.t)(i, 1, o))
            }
        }
    },
    782: function (t, e, i) {
        "use strict";
        i.d(e, {
            z: function () {
                return r
            }
        });
        let n = (t, e) => i => e(t(i))
            , r = (...t) => t.reduce(n)
    },
    2581: function (t, e, i) {
        "use strict";
        i.d(e, {
            Y: function () {
                return n
            }
        });
        let n = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
    },
    4080: function (t, e, i) {
        "use strict";
        i.d(e, {
            Y: function () {
                return s
            },
            p: function () {
                return r
            }
        });
        var n = i(2305);
        let r = t => !!(t && "object" == typeof t && t.mix && t.toValue)
            , s = t => (0,
                n.C)(t) ? t[t.length - 1] || 0 : t
    },
    2031: function (t, e, i) {
        "use strict";
        i.d(e, {
            L: function () {
                return r
            }
        });
        var n = i(3563);
        class r {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                    n.y4)(this.subscriptions, t),
                    () => (0,
                        n.cl)(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let r = 0; r < n; r++) {
                            let n = this.subscriptions[r];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    9683: function (t, e, i) {
        "use strict";
        i.d(e, {
            X: function () {
                return r
            },
            w: function () {
                return n
            }
        });
        let n = t => 1e3 * t
            , r = t => t / 1e3
    },
    789: function (t, e, i) {
        "use strict";
        i.d(e, {
            h: function () {
                return r
            }
        });
        var n = i(2310);
        function r(t) {
            let e = (0,
                n.useRef)(null);
            return null === e.current && (e.current = t()),
                e.current
        }
    },
    5803: function (t, e, i) {
        "use strict";
        i.d(e, {
            Y: function () {
                return o
            }
        });
        var n = i(2310)
            , r = i(3602);
        let s = {
            some: 0,
            all: 1
        };
        function o(t, { root: e, margin: i, amount: o, once: a = !1 } = {}) {
            let [l, u] = (0,
                n.useState)(!1);
            return (0,
                n.useEffect)(() => {
                    if (!t.current || a && l)
                        return;
                    let n = () => (u(!0),
                        a ? void 0 : () => u(!1))
                        , h = {
                            root: e && e.current || void 0,
                            margin: i,
                            amount: o
                        };
                    return function (t, e, { root: i, margin: n, amount: o = "some" } = {}) {
                        let a = (0,
                            r.I)(t)
                            , l = new WeakMap
                            , u = t => {
                                t.forEach(t => {
                                    let i = l.get(t.target);
                                    if (!!i !== t.isIntersecting) {
                                        if (t.isIntersecting) {
                                            let i = e(t);
                                            "function" == typeof i ? l.set(t.target, i) : h.unobserve(t.target)
                                        } else
                                            i && (i(t),
                                                l.delete(t.target))
                                    }
                                }
                                )
                            }
                            , h = new IntersectionObserver(u, {
                                root: i,
                                rootMargin: n,
                                threshold: "number" == typeof o ? o : s[o]
                            });
                        return a.forEach(t => h.observe(t)),
                            () => h.disconnect()
                    }(t.current, n, h)
                }
                    , [e, t, i, a, o]),
                l
        }
    },
    3398: function (t, e, i) {
        "use strict";
        i.d(e, {
            L: function () {
                return s
            }
        });
        var n = i(2310)
            , r = i(5532);
        let s = r.j ? n.useLayoutEffect : n.useEffect
    },
    1977: function (t, e, i) {
        "use strict";
        function n(t, e) {
            return e ? t * (1e3 / e) : 0
        }
        i.d(e, {
            R: function () {
                return n
            }
        })
    },
    2915: function (t, e, i) {
        "use strict";
        i.d(e, {
            BX: function () {
                return h
            },
            Hg: function () {
                return u
            }
        });
        var n = i(2031)
            , r = i(1977)
            , s = i(1497)
            , o = i(1553);
        let a = t => !isNaN(parseFloat(t))
            , l = {
                current: void 0
            };
        class u {
            constructor(t, e = {}) {
                this.version = "11.5.4",
                    this.canTrackVelocity = null,
                    this.events = {},
                    this.updateAndNotify = (t, e = !0) => {
                        let i = s.X.now();
                        this.updatedAt !== i && this.setPrevFrameValue(),
                            this.prev = this.current,
                            this.setCurrent(t),
                            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                            e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }
                    ,
                    this.hasAnimated = !1,
                    this.setCurrent(t),
                    this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                    this.updatedAt = s.X.now(),
                    null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
            }
            setPrevFrameValue(t = this.current) {
                this.prevFrameValue = t,
                    this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new n.L);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                        o.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        }
                        )
                }
                    : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                    this.stopPassiveEffect = e
            }
            set(t, e = !0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                    this.prev = void 0,
                    this.prevFrameValue = t,
                    this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e = !0) {
                this.updateAndNotify(t),
                    this.prev = t,
                    this.prevUpdatedAt = this.prevFrameValue = void 0,
                    e && this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return l.current && l.current.push(this),
                    this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                let t = s.X.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                    return 0;
                let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return (0,
                    r.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
            }
            start(t) {
                return this.stop(),
                    new Promise(e => {
                        this.hasAnimated = !0,
                            this.animation = t(e),
                            this.events.animationStart && this.events.animationStart.notify()
                    }
                    ).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(),
                            this.clearAnimation()
                    }
                    )
            }
            stop() {
                this.animation && (this.animation.stop(),
                    this.events.animationCancel && this.events.animationCancel.notify()),
                    this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function h(t, e) {
            return new u(t, e)
        }
    },
    1531: function (t, e, i) {
        "use strict";
        i.d(e, {
            $: function () {
                return s
            }
        });
        var n = i(5575)
            , r = i(6769);
        let s = {
            test: (0,
                r.i)("#"),
            parse: function (t) {
                let e = ""
                    , i = ""
                    , n = ""
                    , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                    i = t.substring(3, 5),
                    n = t.substring(5, 7),
                    r = t.substring(7, 9)) : (e = t.substring(1, 2),
                        i = t.substring(2, 3),
                        n = t.substring(3, 4),
                        r = t.substring(4, 5),
                        e += e,
                        i += i,
                        n += n,
                        r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: n.m.transform
        }
    },
    7058: function (t, e, i) {
        "use strict";
        i.d(e, {
            J: function () {
                return a
            }
        });
        var n = i(1293)
            , r = i(459)
            , s = i(6375)
            , o = i(6769);
        let a = {
            test: (0,
                o.i)("hsl", "hue"),
            parse: (0,
                o.d)("hue", "saturation", "lightness"),
            transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0,
                s.Nw)(e)) + ", " + r.aQ.transform((0,
                    s.Nw)(i)) + ", " + (0,
                        s.Nw)(n.Fq.transform(o)) + ")"
        }
    },
    3969: function (t, e, i) {
        "use strict";
        i.d(e, {
            $: function () {
                return a
            }
        });
        var n = i(6375)
            , r = i(1531)
            , s = i(7058)
            , o = i(5575);
        let a = {
            test: t => o.m.test(t) || r.$.test(t) || s.J.test(t),
            parse: t => o.m.test(t) ? o.m.parse(t) : s.J.test(t) ? s.J.parse(t) : r.$.parse(t),
            transform: t => (0,
                n.HD)(t) ? t : t.hasOwnProperty("red") ? o.m.transform(t) : s.J.transform(t)
        }
    },
    5575: function (t, e, i) {
        "use strict";
        i.d(e, {
            m: function () {
                return u
            }
        });
        var n = i(232)
            , r = i(1293)
            , s = i(6375)
            , o = i(6769);
        let a = t => (0,
            n.u)(0, 255, t)
            , l = {
                ...r.Rx,
                transform: t => Math.round(a(t))
            }
            , u = {
                test: (0,
                    o.i)("rgb", "red"),
                parse: (0,
                    o.d)("red", "green", "blue"),
                transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0,
                    s.Nw)(r.Fq.transform(n)) + ")"
            }
    },
    6769: function (t, e, i) {
        "use strict";
        i.d(e, {
            d: function () {
                return s
            },
            i: function () {
                return r
            }
        });
        var n = i(6375);
        let r = (t, e) => i => !!((0,
            n.HD)(i) && n.mj.test(i) && i.startsWith(t) || e && !(0,
                n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
            , s = (t, e, i) => r => {
                if (!(0,
                    n.HD)(r))
                    return r;
                let [s, o, a, l] = r.match(n.KP);
                return {
                    [t]: parseFloat(s),
                    [e]: parseFloat(o),
                    [i]: parseFloat(a),
                    alpha: void 0 !== l ? parseFloat(l) : 1
                }
            }
    },
    6828: function (t, e, i) {
        "use strict";
        i.d(e, {
            h: function () {
                return l
            }
        });
        var n = i(7081)
            , r = i(6375);
        let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function o(t) {
            let [e, i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let [n] = i.match(r.KP) || [];
            if (!n)
                return t;
            let o = i.replace(n, "")
                , a = s.has(e) ? 1 : 0;
            return n !== i && (a *= 100),
                e + "(" + a + o + ")"
        }
        let a = /\b([a-z-]*)\(.*?\)/gu
            , l = {
                ...n.P,
                getAnimatableNone: t => {
                    let e = t.match(a);
                    return e ? e.map(o).join(" ") : t
                }
            }
    },
    7081: function (t, e, i) {
        "use strict";
        i.d(e, {
            P: function () {
                return d
            },
            V: function () {
                return l
            }
        });
        var n = i(3969)
            , r = i(6375);
        let s = "number"
            , o = "color"
            , a = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function l(t) {
            let e = t.toString()
                , i = []
                , r = {
                    color: [],
                    number: [],
                    var: []
                }
                , l = []
                , u = 0
                , h = e.replace(a, t => (n.$.test(t) ? (r.color.push(u),
                    l.push(o),
                    i.push(n.$.parse(t))) : t.startsWith("var(") ? (r.var.push(u),
                        l.push("var"),
                        i.push(t)) : (r.number.push(u),
                            l.push(s),
                            i.push(parseFloat(t))),
                    ++u,
                    "${}"))
                , c = h.split("${}");
            return {
                values: i,
                split: c,
                indexes: r,
                types: l
            }
        }
        function u(t) {
            return l(t).values
        }
        function h(t) {
            let { split: e, types: i } = l(t)
                , a = e.length;
            return t => {
                let l = "";
                for (let u = 0; u < a; u++)
                    if (l += e[u],
                        void 0 !== t[u]) {
                        let e = i[u];
                        e === s ? l += (0,
                            r.Nw)(t[u]) : e === o ? l += n.$.transform(t[u]) : l += t[u]
                    }
                return l
            }
        }
        let c = t => "number" == typeof t ? 0 : t
            , d = {
                test: function (t) {
                    var e, i;
                    return isNaN(t) && (0,
                        r.HD)(t) && ((null === (e = t.match(r.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(r.dA)) || void 0 === i ? void 0 : i.length) || 0) > 0
                },
                parse: u,
                createTransformer: h,
                getAnimatableNone: function (t) {
                    let e = u(t)
                        , i = h(t);
                    return i(e.map(c))
                }
            }
    },
    1293: function (t, e, i) {
        "use strict";
        i.d(e, {
            Fq: function () {
                return s
            },
            Rx: function () {
                return r
            },
            bA: function () {
                return o
            }
        });
        var n = i(232);
        let r = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
            , s = {
                ...r,
                transform: t => (0,
                    n.u)(0, 1, t)
            }
            , o = {
                ...r,
                default: 1
            }
    },
    459: function (t, e, i) {
        "use strict";
        i.d(e, {
            $C: function () {
                return h
            },
            RW: function () {
                return s
            },
            aQ: function () {
                return o
            },
            px: function () {
                return a
            },
            vh: function () {
                return l
            },
            vw: function () {
                return u
            }
        });
        var n = i(6375);
        let r = t => ({
            test: e => (0,
                n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
            , s = r("deg")
            , o = r("%")
            , a = r("px")
            , l = r("vh")
            , u = r("vw")
            , h = {
                ...o,
                parse: t => o.parse(t) / 100,
                transform: t => o.transform(100 * t)
            }
    },
    6375: function (t, e, i) {
        "use strict";
        i.d(e, {
            HD: function () {
                return a
            },
            KP: function () {
                return r
            },
            Nw: function () {
                return n
            },
            Rw: function () {
                return l
            },
            dA: function () {
                return s
            },
            mj: function () {
                return o
            }
        });
        let n = t => Math.round(1e5 * t) / 1e5
            , r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
            , s = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
            , o = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
        function a(t) {
            return "string" == typeof t
        }
        function l(t) {
            return null == t
        }
    },
    4665: function (t, e, i) {
        "use strict";
        i.d(e, {
            K: function () {
                return l
            }
        });
        var n = i(2915)
            , r = i(6006)
            , s = i(3563);
        class o extends n.Hg {
            constructor() {
                super(...arguments),
                    this.output = [],
                    this.counts = new Map
            }
            add(t) {
                let e = (0,
                    r.p)(t);
                if (!e)
                    return;
                let i = this.counts.get(e) || 0;
                this.counts.set(e, i + 1),
                    0 === i && (this.output.push(e),
                        this.update());
                let n = !1;
                return () => {
                    if (n)
                        return;
                    n = !0;
                    let t = this.counts.get(e) - 1;
                    this.counts.set(e, t),
                        0 === t && ((0,
                            s.cl)(this.output, e),
                            this.update())
                }
            }
            update() {
                this.set(this.output.length ? this.output.join(", ") : "auto")
            }
        }
        var a = i(769);
        function l(t, e) {
            var i, n;
            if (!t.applyWillChange)
                return;
            let r = t.getValue("willChange");
            if (r || (null === (i = t.props.style) || void 0 === i ? void 0 : i.willChange) || (r = new o("auto"),
                t.addValue("willChange", r)),
                n = r,
                (0,
                    a.i)(n) && n.add)
                return r.add(e)
        }
    },
    6006: function (t, e, i) {
        "use strict";
        i.d(e, {
            p: function () {
                return o
            }
        });
        var n = i(2105)
            , r = i(483)
            , s = i(6400);
        function o(t) {
            return s.G.has(t) ? "transform" : n.t.has(t) ? (0,
                r.D)(t) : void 0
        }
    },
    769: function (t, e, i) {
        "use strict";
        i.d(e, {
            i: function () {
                return n
            }
        });
        let n = t => !!(t && t.getVelocity)
    }
}]);
