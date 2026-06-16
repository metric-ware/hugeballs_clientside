window.HUGEBALLS_WS_URL = "wss://eu.hugeballs.org";
const t = document.getElementById("game"),
  e = t.getContext("2d");
Ft(e);
const n = document.getElementById("menuPanel"),
  o = document.getElementById("joinForm"),
  a = o.querySelector("button"),
  l = document.getElementById("nameInput"),
  r = document.getElementById("menuStatus"),
  i = document.getElementById("gameTitle"),
  s = document.getElementById("chatMessages"),
  c = document.getElementById("chatForm"),
  d = document.getElementById("chatInput"),
  f = {
    area: document.getElementById("areaLine"),
    stat: document.getElementById("statLine"),
    cooldown: document.getElementById("cooldownLine"),
  },
  u = document.getElementById("lobbyPanel"),
  g = document.getElementById("worldButtons"),
  h = document.getElementById("characterButtons"),
  m = document.getElementById("deathPanel"),
  y =
    (document.getElementById("deathText"),
    document.getElementById("reconnectButton")),
  b = 1,
  x = 2,
  p = 3,
  w = 4,
  S = 5,
  v = 6,
  C = 21,
  E = "3000",
  L = "hugeballs.progress",
  I = 580,
  M = 700,
  k = 1500,
  B = {
    0: { core: "255, 255, 255", fill: "237, 241, 245", glow: "200, 208, 216" },
    1: { core: "106, 106, 106", fill: "69, 69, 69", glow: "43, 43, 43" },
    2: { core: "238, 252, 255", fill: "142, 220, 244", glow: "61, 143, 189" },
    3: { core: "255, 243, 166", fill: "244, 197, 66", glow: "201, 131, 18" },
    4: { core: "216, 255, 107", fill: "148, 216, 45", glow: "79, 143, 22" },
    5: { core: "255, 170, 162", fill: "92, 171, 255", glow: "23, 63, 153" },
    6: { core: "236, 226, 255", fill: "158, 102, 255", glow: "42, 67, 214" },
  },
  N = {
    0: {
      fill: "#c8d0da",
      grid: "rgba(42, 50, 61, 0.2)",
      border: "rgba(28, 36, 46, 0.38)",
      text: "#182230",
      portal: "#bfc8d3",
      start: "rgba(48, 129, 94, 0.16)",
    },
    1: {
      fill: "#b7afa4",
      grid: "rgba(61, 55, 48, 0.2)",
      border: "rgba(43, 39, 34, 0.42)",
      text: "#27231f",
      portal: "#a79f94",
      start: "rgba(48, 116, 93, 0.17)",
    },
    2: {
      fill: "#8fd3e5",
      grid: "rgba(28, 81, 106, 0.2)",
      border: "rgba(25, 80, 105, 0.44)",
      text: "#0f3d54",
      portal: "#78c9df",
      start: "rgba(224, 252, 255, 0.26)",
    },
    3: {
      fill: "#d8b348",
      grid: "rgba(96, 68, 12, 0.2)",
      border: "rgba(103, 73, 13, 0.45)",
      text: "#51370a",
      portal: "#cfa83a",
      start: "rgba(255, 244, 184, 0.22)",
    },
    4: {
      fill: "#96c85a",
      grid: "rgba(48, 86, 20, 0.2)",
      border: "rgba(44, 82, 19, 0.42)",
      text: "#25430f",
      portal: "#89bc49",
      start: "rgba(225, 255, 172, 0.21)",
    },
    5: {
      fill: "#8e9db9",
      grid: "rgba(32, 45, 79, 0.2)",
      border: "rgba(28, 41, 75, 0.44)",
      text: "#182746",
      portal: "#8292b2",
      start: "rgba(167, 228, 255, 0.18)",
    },
    6: {
      fill: "#9b83c9",
      grid: "rgba(45, 35, 95, 0.2)",
      border: "rgba(50, 36, 101, 0.45)",
      text: "#241a55",
      portal: "#8d73bf",
      start: "rgba(199, 237, 255, 0.2)",
    },
  },
  $ = { [b]: 42, [x]: 64, [p]: 62, [w]: 44, [S]: 48, [v]: 46 },
  T = { 0: 0, 1: 3e3, 2: 1e3, 3: 12e3, 4: 2e3, 5: 12e3, 6: 1e4 },
  P = {
    0: ["Starter", "No ability"],
    1: ["Dash", "Dash upward, then keep a short shield"],
    2: ["Freeze Shot", "Shoot a bolt that stops one ball"],
    3: ["Shield", "Protect yourself and clear touched balls"],
    4: ["Blast Shot", "Shoot a bolt that destroys one ball"],
    5: ["Guard Dash", "Dash upward with a long shield"],
    6: ["Storm Pulse", "Dash upward, then clear nearby balls"],
  },
  W = {
    0: ["No ability"],
    1: [
      "Cooldown 3s",
      "Dash 0.24s",
      "Shield 1s after dash",
      "Clears touched balls",
    ],
    2: ["Cooldown 1s", "Projectile speed 920", "Stops one ball"],
    3: ["Cooldown 12s", "Shield 5s", "Clears touched balls"],
    4: ["Cooldown 2s", "Projectile speed 1250", "Destroys one ball"],
    5: [
      "Cooldown 12s",
      "Dash 0.36s",
      "Shield 5s after dash",
      "Clears touched balls",
    ],
    6: ["Cooldown 10s", "Dash 0.48s", "Shield 1s after dash", "Radius 600"],
  },
  A = Wt(
    {
      [b]: "img/ball_flying.svg",
      [x]: "img/ball_frozen.svg",
      [p]: "img/ball_orbitting.svg",
      [w]: "img/ball_bouncy.svg",
      [S]: "img/ball_magnetic.svg",
      [v]: "img/ball_lightning.svg",
    },
    $,
  ),
  _ = Wt({
    0: "img/player_0.svg",
    1: "img/player_1.svg",
    2: "img/player_2.svg",
    3: "img/player_3.svg",
    4: "img/player_4.svg",
    5: "img/player_5.svg",
    6: "img/player_6.svg",
  });
let D = null,
  R = !1,
  O = 0,
  G = [],
  H = [],
  q = 720,
  F = k,
  j = 1e4,
  U = k,
  J = null,
  z = new Map(),
  Q = new Map(),
  K = new Map(),
  V = new Map(),
  X = new Set(),
  Y = 0,
  Z = 0,
  tt = performance.now(),
  et = tt,
  nt =
    localStorage.getItem("hugeballs.name") ||
    `Runner${Math.floor(1e3 + 9e3 * Math.random())}`,
  ot = (function () {
    const t = Ot(Rt()).completedWorlds;
    let e = 0;
    for (let n = 1; n <= 30; n++) t[String(n)] && (e |= 1 << (n - 1));
    return e;
  })(),
  at = !1,
  lt = 0,
  rt = { x: 0, y: U - M },
  it = "",
  st = 0,
  ct = 0,
  dt = "",
  ft = -1,
  ut = -1,
  gt = 0;
function ht(t) {
  (gt++,
    D &&
      D.readyState !== WebSocket.CLOSED &&
      D.readyState !== WebSocket.CLOSING &&
      D.close(),
    document.body.classList.add("menuMode"),
    (at = !1),
    (R = !1),
    (J = null),
    Q.clear(),
    K.clear(),
    V.clear(),
    (it = ""),
    (st = 0),
    (ct = 0),
    (dt = ""),
    (ft = -1),
    (ut = -1),
    Dt(!1),
    (r.textContent = t || ""),
    n.classList.remove("hidden"),
    i.classList.add("hidden"),
    document.getElementById("chat").classList.add("hidden"),
    document.getElementById("hud").classList.add("hidden"),
    u.classList.add("hidden"));
}
function mt() {
  g.innerHTML = "";
  for (const t of G) {
    const e = document.createElement("button");
    ((e.type = "button"),
      (e.textContent = t[1]),
      e.addEventListener("click", () => _t([2, t[0]])),
      g.appendChild(e));
  }
  yt(1, 0, !0);
}
function yt(t, e, n = !1) {
  if (n || t !== st || e !== ct || 7 !== h.children.length) {
    ((st = t),
      (ct = e),
      (h.className = "buttonGrid compact"),
      (h.innerHTML = ""));
    for (let n = 0; n <= 6; n++) {
      const o = document.createElement("button");
      ((o.type = "button"),
        (o.textContent = `${n}`),
        (o.title = `${P[n][0]}: ${P[n][1]}`));
      const a = !!(t & (1 << n));
      ((o.disabled = !a),
        a || o.classList.add("locked"),
        n === e && (o.style.outline = "2px solid #ffffff"),
        o.addEventListener("click", () => _t([3, n])),
        h.appendChild(o));
    }
  }
}
function bt(t, e) {
  const n = u.querySelectorAll(".panelTitle");
  (n[0] && (n[0].textContent = t), n[1] && (n[1].textContent = e));
}
function xt(t) {
  const e = document.createElement("div");
  if (((e.className = "chatLine" + (t[3] ? " system" : "")), t[3]))
    e.textContent = t[2];
  else {
    const n = document.createElement("span");
    ((n.className = "chatName"),
      (n.textContent = `${t[1]}: `),
      e.appendChild(n),
      e.appendChild(document.createTextNode(t[2])));
  }
  for (s.appendChild(e); s.children.length > 50; ) s.removeChild(s.firstChild);
}
function pt(t) {
  if (!R || !at) return;
  if (t && (!J || 1 !== J[2])) return;
  const e = wt();
  (_t([1, ++Y, e.x, e.y, t ? 1 : 0]), t && (Z = performance.now()));
}
function wt() {
  const t = X.has("a") || X.has("arrowleft"),
    e = X.has("d") || X.has("arrowright"),
    n = X.has("w") || X.has("arrowup"),
    o = (e ? 1 : 0) - (t ? 1 : 0),
    a = (X.has("s") || X.has("arrowdown") ? 1 : 0) - (n ? 1 : 0),
    l = Math.hypot(o, a);
  return l > 1 ? { x: o / l, y: a / l } : { x: o, y: a };
}
function St(t, e, n) {
  return {
    x: t,
    y: e,
    sx: t,
    sy: e,
    tx: t,
    ty: e,
    t0: n,
    duration: 50,
    trail: [],
    trailAt: 0,
  };
}
function vt(t, e, n, o, a) {
  ((t.sx = t.x),
    (t.sy = t.y),
    (t.tx = e),
    (t.ty = n),
    (t.t0 = o),
    (t.duration = a));
}
function Ct(t, e, n, o, a) {
  ((t.sx = t.tx),
    (t.sy = t.ty),
    (t.tx = e),
    (t.ty = n),
    (t.t0 = o),
    (t.duration = a));
}
function Et(t, e) {
  const n = It(t, e);
  ((t.x = n.x), (t.y = n.y));
}
function Lt(t, e, n, o) {
  const a = It(t, e),
    l = 1 - Math.exp(-n * o);
  ((t.x = Jt(t.x, a.x, l)), (t.y = Jt(t.y, a.y, l)));
}
function It(t, e) {
  const n = Ut((e - t.t0) / t.duration, 0, 1);
  return { x: Jt(t.sx, t.tx, n), y: Jt(t.sy, t.ty, n) };
}
function Mt(t, e, n) {
  const o = t.x,
    a = t.y,
    l = It(t, e),
    r = wt(),
    i = 0 !== r.x || 0 !== r.y ? 0.05 : 0;
  ((l.x += 400 * r.x * i), (l.y += 400 * r.y * i));
  const s = 1 - Math.exp(26 * -n);
  (Math.hypot(t.x - l.x, t.y - l.y) > 180
    ? ((t.x = l.x), (t.y = l.y))
    : ((t.x = Jt(t.x, l.x, s)), (t.y = Jt(t.y, l.y, s))),
    (t.x = Ut(t.x, C, q - C)),
    (t.y = Ut(t.y, C, U - C)),
    (function (t, e, n, o, a) {
      ((t.trail = (t.trail || [])
        .map((t) => ({ ...t, age: t.age + a }))
        .filter((t) => t.age < 0.34)),
        !(Math.hypot(t.x - e, t.y - n) > 0.15) ||
          o - (t.trailAt || 0) < 35 ||
          ((t.trailAt = o),
          t.trail.unshift({ x: t.x, y: t.y, age: 0 }),
          t.trail.length > 11 && (t.trail.length = 11)));
    })(t, o, a, e, n));
}
function kt() {
  const t = Q.get(O);
  let e = Ut((q - I) / 2, 0, Math.max(0, q - I)),
    n = Math.max(0, U - M);
  if (t && J) {
    e = t.x - 290;
    const o = 1 === J[2] ? 0.68 : 0.8;
    n = t.y - M * o;
  }
  return { x: Ut(e, 0, Math.max(0, q - I)), y: Ut(n, 0, Math.max(0, U - M)) };
}
function Bt(t) {
  const n = A[t.type],
    o = n && n.raster,
    a = 2 * t.r;
  if (o) {
    (e.save(), e.translate(t.x, t.y));
    const n = t.id % 2 == 0 ? 1 : -1;
    (e.rotate(n * (0.0016 * et + 0.47 * t.id)),
      e.drawImage(o, -a / 2, -a / 2, a, a),
      e.restore());
  } else
    ((e.fillStyle = "#ff5276"),
      e.beginPath(),
      e.arc(t.x, t.y, t.r, 0, 2 * Math.PI),
      e.fill());
}
function Nt(t) {
  ((e.fillStyle = 2 === t.kind ? "#7de3ff" : "#ffe36e"),
    e.beginPath(),
    e.arc(t.x, t.y, 7, 0, 2 * Math.PI),
    e.fill(),
    (e.strokeStyle = "rgba(20,28,38,0.45)"),
    (e.lineWidth = 2),
    e.stroke());
}
function $t(t) {
  const n = _[t.character],
    o = 65.10000000000001;
  (1 & t.flags &&
    (function (t) {
      (e.save(),
        (e.fillStyle = "#28c6ff"),
        jt(e, t.x - 33.6, t.y - 33.6, 67.2, 67.2, 9),
        e.fill(),
        e.restore());
    })(t),
    2 & t.flags &&
      ((e.fillStyle = "rgba(81, 171, 255, 0.18)"),
      e.beginPath(),
      e.ellipse(t.x, t.y + 28, 24, 42, 0, 0, 2 * Math.PI),
      e.fill()),
    n && n.complete
      ? e.drawImage(n, t.x - o / 2, t.y - o / 2, o, o)
      : ((e.fillStyle = "#2b7fff"),
        e.beginPath(),
        e.arc(t.x, t.y, C, 0, 2 * Math.PI),
        e.fill()),
    (e.textAlign = "center"),
    (e.textBaseline = "bottom"),
    (e.font = "900 19px Inter, sans-serif"),
    (e.fillStyle = t.id === O ? "#101820" : "#45525f"),
    e.fillText(t.name || "Player", t.x, t.y - C - 10),
    t.id === O &&
      0 !== t.character &&
      (function (t) {
        const n = t.x - 35,
          o = t.y + C + 17,
          a = T[t.character] || 3e3,
          l = Ut(t.cooldown || 0, 0, a),
          r = l <= 0,
          i = r ? 1 : 1 - l / a;
        (e.save(),
          jt(e, n - 2, o - 2, 74, 12, 5),
          (e.fillStyle = "rgba(16, 24, 32, 0.72)"),
          e.fill(),
          jt(e, n, o, 70, 8, 4),
          (e.fillStyle = "rgba(255, 255, 255, 0.35)"),
          e.fill(),
          jt(e, n, o, 70 * i, 8, 4),
          (e.fillStyle = r ? "#62e68c" : "#8ee4ff"),
          e.fill(),
          e.restore());
      })(t));
}
function Tt(t) {
  return N[t] || N[0];
}
function Pt(t, n, o, a) {
  const l = t.split(" ").filter(Boolean),
    r = o - ((l.length - 1) * a) / 2;
  l.forEach((t, o) => e.fillText(t, n, r + o * a));
}
function Wt(t, e = null) {
  const n = {};
  for (const [o, a] of Object.entries(t)) {
    const t = new Image(),
      l = e && e[o];
    (l &&
      t.addEventListener("load", () => {
        t.raster = At(t, Math.ceil(2 * l * 2));
      }),
      (t.src = a),
      (n[o] = t));
  }
  return n;
}
function At(t, e) {
  const n = document.createElement("canvas");
  ((n.width = e), (n.height = e));
  const o = n.getContext("2d");
  return (
    (o.imageSmoothingEnabled = !0),
    (o.imageSmoothingQuality = "high"),
    o.drawImage(t, 0, 0, e, e),
    n
  );
}
function _t(t) {
  D && D.readyState === WebSocket.OPEN && D.send(JSON.stringify(t));
}
function Dt(t) {
  ((a.disabled = t), (l.disabled = t));
}
function Rt() {
  let t = null;
  try {
    t = JSON.parse(localStorage.getItem(L) || "null");
  } catch {}
  return Ot(t);
}
function Ot(t) {
  const e =
      t && "object" == typeof t && !Array.isArray(t)
        ? t.completedWorlds &&
          "object" == typeof t.completedWorlds &&
          !Array.isArray(t.completedWorlds)
          ? t.completedWorlds
          : t
        : {},
    n = {};
  for (let t = 1; t <= 30; t++) !0 === e[String(t)] && (n[String(t)] = !0);
  return { completedWorlds: n };
}
function Gt(t) {
  const e = t.toLowerCase();
  return (
    "w" === e || "a" === e || "s" === e || "d" === e || e.startsWith("arrow")
  );
}
function Ht(t) {
  if (!t || !t.tagName) return !1;
  const e = t.tagName.toLowerCase();
  return "input" === e || "textarea" === e || t.isContentEditable;
}
function qt() {
  const n = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  ((t.width = Math.floor(window.innerWidth * n)),
    (t.height = Math.floor(window.innerHeight * n)),
    e.setTransform(1, 0, 0, 1, 0, 0),
    Ft(e));
}
function Ft(t) {
  ((t.imageSmoothingEnabled = !0), (t.imageSmoothingQuality = "high"));
}
function jt(t, e, n, o, a, l) {
  (t.beginPath(),
    t.moveTo(e + l, n),
    t.lineTo(e + o - l, n),
    t.quadraticCurveTo(e + o, n, e + o, n + l),
    t.lineTo(e + o, n + a - l),
    t.quadraticCurveTo(e + o, n + a, e + o - l, n + a),
    t.lineTo(e + l, n + a),
    t.quadraticCurveTo(e, n + a, e, n + a - l),
    t.lineTo(e, n + l),
    t.quadraticCurveTo(e, n, e + l, n),
    t.closePath());
}
function Ut(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Jt(t, e, n) {
  return t + (e - t) * n;
}
(requestAnimationFrame(function n(o) {
  const a = Math.min(0.05, (o - tt) / 1e3);
  ((tt = o),
    (et = o),
    (function (t) {
      !R || !at || t - Z < 48 || ((Z = t), pt(!1));
    })(o),
    (function (t, e) {
      for (const n of Q.values())
        (n.id === O && J ? Mt(n, t, e) : Lt(n, t, e, 24),
          (n.cooldown = Math.max(0, (n.cooldown || 0) - 1e3 * e)));
      for (const e of K.values()) Et(e, t);
      for (const e of V.values()) Et(e, t);
    })(o, a),
    (function (t) {
      const e = kt(),
        n = 1 - Math.exp(10 * -t);
      ((rt.x = Jt(rt.x, e.x, n)), (rt.y = Jt(rt.y, e.y, n)));
    })(a),
    (function () {
      const n = (function () {
        const e = Math.min(t.height / M, t.width / I);
        return {
          scale: e,
          x: (t.width - I * e) / 2,
          y: (t.height - M * e) / 2,
        };
      })();
      (e.clearRect(0, 0, t.width, t.height),
        (e.fillStyle = "#0f1115"),
        e.fillRect(0, 0, t.width, t.height),
        e.save(),
        e.beginPath(),
        e.rect(n.x, n.y, I * n.scale, M * n.scale),
        e.clip(),
        e.translate(n.x, n.y),
        e.scale(n.scale, n.scale),
        e.translate(-rt.x, -rt.y),
        (function () {
          const t = Tt(J ? J[3] : 0);
          ((e.fillStyle = t.fill),
            e.fillRect(0, 0, q, U),
            (function (t, n) {
              ((e.strokeStyle = n), (e.lineWidth = 2), e.beginPath());
              for (let t = 0; t <= q; t += 80) (e.moveTo(t, 0), e.lineTo(t, U));
              for (let t = 0; t <= U; t += 80) (e.moveTo(0, t), e.lineTo(q, t));
              e.stroke();
            })(0, t.grid),
            (e.strokeStyle = t.border),
            (e.lineWidth = 2),
            e.strokeRect(0, 0, q, U));
        })(),
        J &&
          0 === J[2] &&
          (function () {
            (e.save(),
              (e.textAlign = "center"),
              (e.textBaseline = "middle"),
              (e.font = "900 23px Inter, sans-serif"));
            for (const t of H) {
              const [n, o, a, l, r] = t,
                i = z.get(n) || `World ${n}`,
                s = Tt(n);
              ((e.fillStyle = s.portal),
                jt(e, o - l / 2, a - r / 2, l, r, 8),
                e.fill(),
                (e.strokeStyle = s.border),
                (e.lineWidth = 3),
                e.stroke(),
                (e.fillStyle = s.text),
                Pt(i, o, a, 25));
            }
            e.restore();
          })(),
        J &&
          1 === J[2] &&
          (function (t, n) {
            const o = Tt(t);
            ((e.fillStyle = o.start),
              e.fillRect(0, 0, q, 78),
              (e.textAlign = "center"),
              (e.textBaseline = "middle"),
              (e.font = "900 28px Inter, sans-serif"),
              (e.fillStyle = o.text),
              e.fillText(`${z.get(t) || "World"} ${n}`, q / 2, 38));
          })(J[3], J[4]));
      for (const t of V.values()) Nt(t);
      for (const t of K.values()) Bt(t);
      const o = Q.get(O);
      o &&
        (function (t) {
          if (!t.trail || 0 === t.trail.length) return;
          const n = ((o = t.character), B[o] || B[0]);
          var o;
          e.save();
          for (let o = t.trail.length - 1; o >= 0; o--) {
            const a = t.trail[o],
              l = Ut(1 - a.age / 0.34, 0, 1),
              r = C * (0.78 + 0.44 * l),
              i = a.y + 3,
              s = e.createRadialGradient(a.x, i, 0.12 * r, a.x, i, r);
            (s.addColorStop(0, `rgba(${n.core}, ${1 * l})`),
              s.addColorStop(0.48, `rgba(${n.fill}, ${0.8 * l})`),
              s.addColorStop(1, `rgba(${n.glow}, 0)`),
              (e.fillStyle = s),
              e.beginPath(),
              e.ellipse(a.x, i, r, 0.76 * r, 0, 0, 2 * Math.PI),
              e.fill());
          }
          e.restore();
        })(o);
      for (const t of Q.values()) $t(t);
      e.restore();
    })(),
    requestAnimationFrame(n));
}),
  (l.value = nt.slice(0, 16)),
  window.addEventListener("resize", qt),
  qt(),
  window.addEventListener("keydown", (t) => {
    if (!Ht(t.target))
      return "Space" === t.code
        ? (pt(!0), void t.preventDefault())
        : void (Gt(t.key) && (X.add(t.key.toLowerCase()), t.preventDefault()));
  }),
  window.addEventListener("keyup", (t) => {
    Ht(t.target) ||
      (Gt(t.key) && (X.delete(t.key.toLowerCase()), t.preventDefault()));
  }),
  t.addEventListener("mousedown", () => {
    pt(!0);
  }),
  o.addEventListener("submit", (t) => {
    t.preventDefault();
    const e = (function (t) {
      return (
        String(t || "")
          .replace(/[\u0000-\u001f<>`{}[\]\\]/g, "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 16) || `Runner${Math.floor(1e3 + 9e3 * Math.random())}`
      );
    })(l.value || nt);
    ((nt = e),
      localStorage.setItem("hugeballs.name", nt),
      (r.textContent = "Connecting"),
      Dt(!0),
      (s.innerHTML = ""),
      (function (t) {
        !D ||
          (D.readyState !== WebSocket.OPEN &&
            D.readyState !== WebSocket.CONNECTING) ||
          D.close();
        const e = ++gt;
        ((at = !0),
          (R = !1),
          (J = null),
          Q.clear(),
          K.clear(),
          V.clear(),
          (lt = 0),
          (it = ""),
          (st = 0),
          (ct = 0),
          (dt = ""),
          (ft = -1),
          (ut = -1),
          (f.area.textContent = "Connecting"),
          (f.stat.textContent = ""),
          (f.cooldown.textContent = ""));
        const o = new WebSocket(
          (function () {
            const t =
              window.HUGEBALLS_WS_URL ||
              localStorage.getItem("hugeballs.wsUrl");
            if (t) return t;
            const e = location.hostname || "localhost";
            return ("file:" !== location.protocol &&
              "localhost" !== e &&
              "127.0.0.1" !== e) ||
              location.port === E
              ? `${"https:" === location.protocol ? "wss:" : "ws:"}//${location.host}`
              : `ws://${e}:${E}`;
          })(),
        );
        D = o;
        const a = () => D === o && e === gt;
        (o.addEventListener("open", () => {
          a() && _t([0, t, Rt()]);
        }),
          o.addEventListener("message", (t) => {
            a() &&
              (function (t) {
                let e;
                try {
                  e = JSON.parse(t);
                } catch {
                  return;
                }
                var o;
                if (Array.isArray(e) && "number" == typeof e[0])
                  if (0 === e[0]) {
                    ((R = !0),
                      (O = e[1]),
                      (G = e[2] || []),
                      (H = e[3] || []),
                      (q = e[4] || 720),
                      (F = e[5] || k),
                      (j = e[7] || 1e4),
                      (U = F),
                      (z = new Map(G.map((t) => [t[0], t[1]]))),
                      mt());
                    for (const t of e[6] || []) xt(t);
                    (Dt(!1),
                      n.classList.add("hidden"),
                      document.body.classList.remove("menuMode"),
                      i.classList.remove("hidden"),
                      document
                        .getElementById("chat")
                        .classList.remove("hidden"),
                      document.getElementById("hud").classList.remove("hidden"),
                      u.classList.add("hidden"));
                  } else if (1 === e[0]) {
                    const t = performance.now(),
                      n = `${e[2]}:${e[3]}:${e[4]}`,
                      a = n !== it;
                    (a && (Q.clear(), K.clear(), V.clear(), (lt = 0), (it = n)),
                      (J = e),
                      (o = e[2]),
                      (U = 1 === o ? j : F),
                      (function (t, e) {
                        const n = Ut(
                          50 * (lt > 0 ? Math.max(1, t[1] - lt) : 1),
                          35,
                          140,
                        );
                        lt = t[1];
                        const o = new Set();
                        for (const a of t[5] || []) {
                          const t = a[0];
                          o.add(t);
                          const l = Q.get(t) || St(a[2], a[3], e);
                          (t === O
                            ? Ct(l, a[2], a[3], e, n)
                            : vt(l, a[2], a[3], e, n),
                            (l.id = t),
                            (l.character = a[1]),
                            (l.flags = a[4]),
                            (l.cooldown = a[5]),
                            (l.name = a[6]),
                            Q.set(t, l));
                        }
                        for (const t of [...Q.keys()]) o.has(t) || Q.delete(t);
                        const a = new Set();
                        for (const o of t[6] || []) {
                          const t = o[0];
                          a.add(t);
                          const l = K.get(t) || St(o[2], o[3], e);
                          (vt(l, o[2], o[3], e, n),
                            (l.id = t),
                            (l.type = o[1]),
                            (l.r = o[4]),
                            K.set(t, l));
                        }
                        for (const t of [...K.keys()]) a.has(t) || K.delete(t);
                        const l = new Set();
                        for (const o of t[7] || []) {
                          const t = o[0];
                          l.add(t);
                          const a = V.get(t) || St(o[3], o[4], e);
                          (vt(a, o[3], o[4], e, n),
                            (a.id = t),
                            (a.ownerId = o[1]),
                            (a.kind = o[2]),
                            V.set(t, a));
                        }
                        for (const t of [...V.keys()]) l.has(t) || V.delete(t);
                      })(e, t),
                      a &&
                        (function () {
                          const t = kt();
                          ((rt.x = t.x), (rt.y = t.y));
                        })(),
                      (function (t) {
                        const e = t[2],
                          n = t[3],
                          o = t[4],
                          a = t[8] || [0, 0, 1, 0, 0, 0];
                        if (
                          ((function (t) {
                            if (!Number.isSafeInteger(t) || t <= 0) return;
                            const e = ot | t;
                            e !== ot &&
                              ((ot = e),
                              (function (t) {
                                try {
                                  localStorage.setItem(
                                    L,
                                    JSON.stringify(Ot(t)),
                                  );
                                } catch {}
                              })(
                                (function (t) {
                                  const e = {};
                                  for (let n = 1; n <= 30; n++)
                                    t & (1 << (n - 1)) && (e[String(n)] = !0);
                                  return { completedWorlds: e };
                                })(ot),
                              ));
                          })(a[5] || 0),
                          0 === e)
                        )
                          ((f.area.textContent = "Global Lobby"),
                            (f.stat.textContent = `Score ${a[4]}`),
                            (f.cooldown.textContent =
                              "Pick a world and character"));
                        else {
                          ((f.area.textContent = `${z.get(n) || "World"} ${o}`),
                            (f.stat.textContent = `Score ${a[4]}`));
                          const t =
                              0 === a[3]
                                ? "No ability"
                                : a[0] > 0
                                  ? `${(a[0] / 1e3).toFixed(1)}s`
                                  : "Ready",
                            e =
                              a[1] > 0
                                ? ` | Shield ${(a[1] / 1e3).toFixed(1)}s`
                                : "";
                          f.cooldown.textContent = `Ability ${t}${e}`;
                        }
                        !(function (t, e) {
                          if ((u.classList.remove("hidden"), 0 === t))
                            return (
                              "lobby" !== dt &&
                                (bt("Worlds", "Character"),
                                (g.className = "buttonGrid"),
                                mt(),
                                (dt = "lobby")),
                              void yt(e[2] || 1, e[3] || 0)
                            );
                          const n = e[2] || 1,
                            o = e[3] || 0;
                          ("sector" === dt && n === ft && o === ut) ||
                            (bt("Current Ability", "Stats"),
                            (function (t) {
                              const e = P[t] || P[0];
                              ((g.className = "abilityList"),
                                (g.innerHTML = ""));
                              const n = document.createElement("div");
                              n.className = "abilityItem active";
                              const o = document.createElement("div");
                              ((o.className = "abilityName"),
                                (o.textContent = e[0]));
                              const a = document.createElement("div");
                              ((a.className = "abilityText"),
                                (a.textContent = e[1]),
                                n.appendChild(o),
                                n.appendChild(a),
                                g.appendChild(n));
                              const l = document.createElement("div");
                              ((l.className = "abilityHint"),
                                (l.textContent =
                                  0 === t
                                    ? "No input needed."
                                    : "Use Space or mouse click."),
                                g.appendChild(l));
                            })(o),
                            (function (t) {
                              ((h.className = "abilityStats"),
                                (h.innerHTML = ""));
                              for (const e of W[t] || W[0]) {
                                const t = document.createElement("div");
                                ((t.textContent = e), h.appendChild(t));
                              }
                            })(o),
                            (dt = "sector"),
                            (ft = n),
                            (ut = o));
                        })(e, a);
                      })(e));
                  } else
                    2 === e[0]
                      ? xt(e)
                      : 3 === e[0] &&
                        (m.classList.add("hidden"),
                        (f.cooldown.textContent = `Returned to lobby | Score ${e[2] || 0}`));
              })(t.data);
          }),
          o.addEventListener("close", () => {
            a() &&
              ((R = !1),
              m.classList.contains("hidden") && at && ht("Disconnected."));
          }),
          o.addEventListener("error", () => {
            a() && (R = !1);
          }));
      })(nt));
  }),
  c.addEventListener("submit", (t) => {
    t.preventDefault();
    const e = d.value.trim();
    e && (_t([4, e]), (d.value = ""));
  }),
  y.addEventListener("click", () => {
    (m.classList.add("hidden"), ht("Pick a nickname for the next run."));
  }));
