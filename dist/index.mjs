import { jsx as e, jsxs as c, Fragment as M } from "react/jsx-runtime";
import { forwardRef as m, useState as h, useRef as ee, useEffect as P, createContext as E, useContext as N } from "react";
import { ChevronDown as z, X as T, Menu as W, XCircle as te, AlertCircle as re, CheckCircle as ae, Info as se, User as U, Calendar as de, MapPin as le, Mail as G, Lock as B, Image as ne } from "lucide-react";
function X(r) {
  var t, a, s = "";
  if (typeof r == "string" || typeof r == "number") s += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var d = r.length;
    for (t = 0; t < d; t++) r[t] && (a = X(r[t])) && (s && (s += " "), s += a);
  } else for (a in r) r[a] && (s && (s += " "), s += a);
  return s;
}
function l() {
  for (var r, t, a = 0, s = "", d = arguments.length; a < d; a++) (r = arguments[a]) && (t = X(r)) && (s && (s += " "), s += t);
  return s;
}
const ie = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-primary"
}, oe = m(
  ({ variant: r = "primary", className: t, children: a, ...s }, d) => /* @__PURE__ */ e(
    "span",
    {
      ref: d,
      className: l(
        "inline-flex items-center justify-center font-semibold rounded-full",
        "px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
        ie[r],
        t
      ),
      ...s,
      children: a
    }
  )
);
oe.displayName = "Badge";
const ce = {
  primary: "bg-primary hover:bg-primary-hover active:bg-primary-active text-white",
  secondary: "bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-primary"
}, q = m(
  ({
    variant: r = "primary",
    icon: t,
    iconPosition: a = "left",
    fullWidth: s = !1,
    className: d,
    children: n,
    disabled: o,
    ...i
  }, x) => /* @__PURE__ */ c(
    "button",
    {
      ref: x,
      disabled: o,
      className: l(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors duration-200",
        "px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base lg:px-6 lg:py-3 lg:text-lg",
        ce[r],
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        s && "w-full",
        d
      ),
      ...i,
      children: [
        t && a === "left" && /* @__PURE__ */ e(t, { className: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" }),
        n,
        t && a === "right" && /* @__PURE__ */ e(t, { className: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" })
      ]
    }
  )
);
q.displayName = "Button";
const me = {
  blue: {
    elevated: "bg-primary text-white shadow-lg",
    outlined: "bg-primary text-white border-2 border-secondary",
    filled: "bg-primary/90 text-white"
  },
  gold: {
    elevated: "bg-secondary text-primary shadow-lg",
    outlined: "bg-secondary text-primary border-2 border-primary",
    filled: "bg-secondary/90 text-primary"
  }
}, xe = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
}, pe = m(
  ({ variant: r = "elevated", padding: t = "md", hoverable: a = !1, colorScheme: s = "blue", className: d, children: n, ...o }, i) => /* @__PURE__ */ e(
    "div",
    {
      ref: i,
      className: l(
        "rounded-lg transition-all duration-200",
        me[s][r],
        xe[t],
        a && "hover:shadow-xl hover:scale-[1.02] cursor-pointer",
        d
      ),
      ...o,
      children: n
    }
  )
);
pe.displayName = "Card";
const ue = m(
  ({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e("div", { ref: s, className: l("mb-4", r), ...a, children: t })
);
ue.displayName = "CardHeader";
const he = m(({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e("div", { ref: s, className: l("", r), ...a, children: t }));
he.displayName = "CardBody";
const be = m(
  ({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e("div", { ref: s, className: l("mt-4 pt-4 border-t border-secondary/30", r), ...a, children: t })
);
be.displayName = "CardFooter";
const ye = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-full"
}, ge = m(
  ({ size: r = "lg", padding: t = !0, className: a, children: s, ...d }, n) => /* @__PURE__ */ e(
    "div",
    {
      ref: n,
      className: l(
        "mx-auto w-full",
        ye[r],
        t && "px-4 sm:px-6 lg:px-8",
        a
      ),
      ...d,
      children: s
    }
  )
);
ge.displayName = "Container";
const fe = m(
  ({ trigger: r, align: t = "left", className: a, children: s, ...d }, n) => {
    const [o, i] = h(!1), x = ee(null);
    return P(() => {
      const u = (p) => {
        x.current && !x.current.contains(p.target) && i(!1);
      };
      return o && document.addEventListener("mousedown", u), () => {
        document.removeEventListener("mousedown", u);
      };
    }, [o]), /* @__PURE__ */ c("div", { ref: x, className: l("relative inline-block", a), ...d, children: [
      /* @__PURE__ */ c(
        "button",
        {
          onClick: () => i(!o),
          className: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          children: [
            r,
            /* @__PURE__ */ e(
              z,
              {
                className: l("w-4 h-4 transition-transform duration-200", o && "rotate-180")
              }
            )
          ]
        }
      ),
      o && /* @__PURE__ */ e(
        "div",
        {
          className: l(
            "absolute z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            t === "left" ? "left-0" : "right-0"
          ),
          children: /* @__PURE__ */ e("div", { className: "py-1", role: "menu", children: s })
        }
      )
    ] });
  }
);
fe.displayName = "Dropdown";
const Ne = m(
  ({ disabled: r = !1, className: t, children: a, onClick: s, ...d }, n) => /* @__PURE__ */ e(
    "button",
    {
      ref: n,
      disabled: r,
      className: l(
        "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        "focus:outline-none focus:bg-gray-100 focus:text-gray-900",
        r && "opacity-50 cursor-not-allowed",
        t
      ),
      role: "menuitem",
      onClick: s,
      ...d,
      children: a
    }
  )
);
Ne.displayName = "DropdownItem";
const Ce = m(
  ({ logo: r, copyright: t, columns: a, className: s, children: d, ...n }, o) => /* @__PURE__ */ e(
    "footer",
    {
      ref: o,
      className: l("bg-primary text-white border-t-2 border-secondary", s),
      ...n,
      children: /* @__PURE__ */ c("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12", children: [
        /* @__PURE__ */ c("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8", children: [
          r && /* @__PURE__ */ e("div", { className: "col-span-1", children: r }),
          a == null ? void 0 : a.map((i, x) => /* @__PURE__ */ e("div", { className: "col-span-1", children: i }, x)),
          d
        ] }),
        t && /* @__PURE__ */ e("div", { className: "pt-6 md:pt-8 border-t border-secondary/30 text-center text-sm md:text-base text-white/80", children: t })
      ] })
    }
  )
);
Ce.displayName = "Footer";
const ve = m(
  ({ title: r, className: t, children: a, ...s }, d) => /* @__PURE__ */ c("div", { ref: d, className: l("", t), ...s, children: [
    r && /* @__PURE__ */ e("h3", { className: "text-secondary font-semibold text-base md:text-lg mb-3 md:mb-4", children: r }),
    /* @__PURE__ */ e("ul", { className: "space-y-2", children: a })
  ] })
);
ve.displayName = "FooterSection";
const we = m(
  ({ href: r, className: t, children: a, ...s }, d) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
    "a",
    {
      ref: d,
      href: r,
      className: l(
        "text-sm md:text-base text-white/80 hover:text-secondary transition-colors duration-200",
        t
      ),
      ...s,
      children: a
    }
  ) })
);
we.displayName = "FooterLink";
const ke = m(
  ({ logo: r, navItems: t = [], actions: a, sticky: s = !1, className: d, ...n }, o) => {
    const [i, x] = h(!1);
    return /* @__PURE__ */ e(
      "header",
      {
        ref: o,
        className: l(
          "w-full bg-primary border-b-2 border-secondary shadow-md z-50",
          s && "sticky top-0",
          d
        ),
        ...n,
        children: /* @__PURE__ */ c("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between h-16 md:h-20", children: [
            /* @__PURE__ */ e("div", { className: "flex items-center", children: r && /* @__PURE__ */ e("div", { className: "text-secondary font-bold text-lg md:text-xl lg:text-2xl", children: r }) }),
            /* @__PURE__ */ e("nav", { className: "hidden md:flex items-center gap-6 lg:gap-8", children: t.map((u, p) => /* @__PURE__ */ e(
              "a",
              {
                href: u.href,
                className: "text-white hover:text-secondary transition-colors duration-200 text-sm lg:text-base font-medium",
                children: u.label
              },
              p
            )) }),
            /* @__PURE__ */ e("div", { className: "hidden md:flex items-center gap-4", children: a }),
            /* @__PURE__ */ e(
              "button",
              {
                className: "md:hidden text-white hover:text-secondary transition-colors p-2",
                onClick: () => x(!i),
                "aria-label": "Toggle menu",
                children: i ? /* @__PURE__ */ e(T, { className: "w-6 h-6" }) : /* @__PURE__ */ e(W, { className: "w-6 h-6" })
              }
            )
          ] }),
          i && /* @__PURE__ */ c("div", { className: "md:hidden py-4 border-t border-secondary/30", children: [
            /* @__PURE__ */ e("nav", { className: "flex flex-col gap-3", children: t.map((u, p) => /* @__PURE__ */ e(
              "a",
              {
                href: u.href,
                className: "text-white hover:text-secondary transition-colors duration-200 py-2 text-base font-medium",
                onClick: () => x(!1),
                children: u.label
              },
              p
            )) }),
            a && /* @__PURE__ */ e("div", { className: "mt-4 pt-4 border-t border-secondary/30", children: a })
          ] })
        ] })
      }
    );
  }
);
ke.displayName = "Header";
const Ie = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 md:grid-cols-6 lg:grid-cols-12"
}, Me = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12"
}, Te = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12"
}, Fe = m(
  ({ cols: r = 3, gap: t = "md", responsive: a = !0, className: s, children: d, ...n }, o) => /* @__PURE__ */ e(
    "div",
    {
      ref: o,
      className: l(
        "grid",
        a ? Ie[r] : Me[r],
        Te[t],
        s
      ),
      ...n,
      children: d
    }
  )
);
Fe.displayName = "Grid";
const He = {
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
  h4: "text-lg sm:text-xl md:text-2xl",
  h5: "text-base sm:text-lg md:text-xl",
  h6: "text-sm sm:text-base md:text-lg"
}, $e = {
  primary: "text-primary",
  secondary: "text-secondary"
}, je = m(
  ({ as: r = "h2", variant: t = "primary", className: a, children: s, ...d }, n) => /* @__PURE__ */ e(
    r,
    {
      ref: n,
      className: l(
        "font-bold",
        He[r],
        $e[t],
        a
      ),
      ...d,
      children: s
    }
  )
);
je.displayName = "Heading";
const Ae = {
  sm: "h-64",
  md: "h-96",
  lg: "h-[32rem]",
  full: "h-screen"
}, Se = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end"
}, Le = m(
  ({
    title: r,
    subtitle: t,
    image: a,
    overlay: s = !0,
    height: d = "lg",
    alignment: n = "center",
    actions: o,
    className: i,
    ...x
  }, u) => /* @__PURE__ */ c(
    "section",
    {
      ref: u,
      className: l("relative flex items-center justify-center", Ae[d], i),
      ...x,
      children: [
        a && /* @__PURE__ */ c(M, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: { backgroundImage: `url(${a})` }
            }
          ),
          s && /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/50" })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full", children: /* @__PURE__ */ c("div", { className: l("flex flex-col gap-6", Se[n]), children: [
          /* @__PURE__ */ e(
            "h1",
            {
              className: l(
                "text-4xl sm:text-5xl md:text-6xl font-bold",
                a ? "text-white" : "text-gray-900"
              ),
              children: r
            }
          ),
          t && /* @__PURE__ */ e(
            "p",
            {
              className: l(
                "text-lg sm:text-xl md:text-2xl max-w-3xl",
                a ? "text-gray-100" : "text-gray-600"
              ),
              children: t
            }
          ),
          o && /* @__PURE__ */ e("div", { className: "flex gap-4 mt-4", children: o })
        ] }) })
      ]
    }
  )
);
Le.displayName = "Hero";
const ft = ({ icon: r, className: t }) => /* @__PURE__ */ e(r, { className: l("w-5 h-5 md:w-6 md:h-6", t) }), f = m(
  ({
    label: r,
    error: t,
    helperText: a,
    icon: s,
    fullWidth: d = !1,
    className: n,
    disabled: o,
    id: i,
    ...x
  }, u) => {
    const p = i || (r == null ? void 0 : r.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ c("div", { className: l("", d && "w-full"), children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: p,
          className: "block text-sm font-medium text-secondary mb-1",
          children: r
        }
      ),
      /* @__PURE__ */ c("div", { className: "relative", children: [
        s && /* @__PURE__ */ e("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-primary/70", children: s }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: u,
            id: p,
            disabled: o,
            className: l(
              "block w-full rounded-md border transition-colors duration-200",
              "py-2 text-sm md:py-2.5 md:text-base",
              "bg-secondary text-primary placeholder:text-primary/60",
              "focus:outline-none focus:ring-2 focus:ring-white focus:border-white",
              "disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500",
              s ? "pl-10 md:pl-11 pr-3 md:pr-4" : "px-3 md:px-4",
              t ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-primary/30",
              n
            ),
            "aria-invalid": t ? "true" : "false",
            "aria-describedby": t ? `${p}-error` : a ? `${p}-helper` : void 0,
            ...x
          }
        )
      ] }),
      t && /* @__PURE__ */ e("p", { id: `${p}-error`, className: "mt-1 text-sm text-red-600", children: t }),
      !t && a && /* @__PURE__ */ e("p", { id: `${p}-helper`, className: "mt-1 text-sm text-gray-500", children: a })
    ] });
  }
);
f.displayName = "Input";
const Pe = m(
  ({ required: r = !1, className: t, children: a, ...s }, d) => /* @__PURE__ */ c(
    "label",
    {
      ref: d,
      className: l("text-gray-700 text-xs md:text-sm font-medium", t),
      ...s,
      children: [
        a,
        r && /* @__PURE__ */ e("span", { className: "text-red-500 ml-1", children: "*" })
      ]
    }
  )
);
Pe.displayName = "Label";
const Be = m(
  ({ logo: r, sticky: t = !1, className: a, children: s, ...d }, n) => {
    const [o, i] = h(!1);
    return /* @__PURE__ */ c(M, { children: [
      /* @__PURE__ */ e(
        "nav",
        {
          ref: n,
          className: l(
            "bg-white shadow-md z-40",
            t && "sticky top-0",
            a
          ),
          ...d,
          children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ c("div", { className: "flex justify-between items-center h-16", children: [
            r && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: r }),
            /* @__PURE__ */ e("div", { className: "hidden md:flex md:items-center md:space-x-8", children: s }),
            /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
              "button",
              {
                onClick: () => i(!o),
                className: "p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary",
                "aria-label": "Toggle menu",
                children: o ? /* @__PURE__ */ e(T, { className: "w-6 h-6" }) : /* @__PURE__ */ e(W, { className: "w-6 h-6" })
              }
            ) })
          ] }) })
        }
      ),
      /* @__PURE__ */ e(_, { isOpen: o, onClose: () => i(!1), children: s })
    ] });
  }
);
Be.displayName = "Nav";
const Ee = m(
  ({ href: r, active: t = !1, className: a, children: s, ...d }, n) => /* @__PURE__ */ e(
    "a",
    {
      ref: n,
      href: r,
      className: l(
        "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
        "hover:bg-gray-100 hover:text-primary",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        t ? "text-primary bg-gray-50" : "text-gray-700",
        a
      ),
      ...d,
      children: s
    }
  )
);
Ee.displayName = "NavItem";
const _ = m(
  ({ isOpen: r, onClose: t, className: a, children: s, ...d }, n) => r ? /* @__PURE__ */ c(M, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",
        onClick: t,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        ref: n,
        className: l(
          "fixed top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden",
          "max-h-[calc(100vh-4rem)] overflow-y-auto",
          a
        ),
        ...d,
        children: /* @__PURE__ */ e("div", { className: "px-4 py-4 space-y-2", children: s })
      }
    )
  ] }) : null
);
_.displayName = "MobileMenu";
const ze = m(
  ({
    as: r = "p",
    className: t,
    children: a,
    ...s
  }, d) => /* @__PURE__ */ e(
    r,
    {
      ref: d,
      className: l("text-sm md:text-base text-gray-900", t),
      ...s,
      children: a
    }
  )
);
ze.displayName = "Text";
const qe = m(
  ({
    label: r,
    error: t,
    helperText: a,
    fullWidth: s = !1,
    className: d,
    disabled: n,
    id: o,
    rows: i = 4,
    ...x
  }, u) => {
    const p = o || (r == null ? void 0 : r.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ c("div", { className: l("", s && "w-full"), children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: p,
          className: "block text-xs md:text-sm font-medium text-secondary mb-1",
          children: r
        }
      ),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: u,
          id: p,
          rows: i,
          disabled: n,
          className: l(
            "block w-full rounded-md border transition-colors duration-200",
            "px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base",
            "bg-secondary text-primary placeholder:text-primary/60",
            "focus:outline-none focus:ring-2 focus:ring-white focus:border-white",
            "disabled:bg-secondary/50 disabled:cursor-not-allowed disabled:text-primary/50",
            "resize-y",
            t ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-primary/30",
            d
          ),
          "aria-invalid": t ? "true" : "false",
          "aria-describedby": t ? `${p}-error` : a ? `${p}-helper` : void 0,
          ...x
        }
      ),
      t && /* @__PURE__ */ e("p", { id: `${p}-error`, className: "mt-1 text-sm text-red-600", children: t }),
      !t && a && /* @__PURE__ */ e("p", { id: `${p}-helper`, className: "mt-1 text-sm text-gray-500", children: a })
    ] });
  }
);
qe.displayName = "Textarea";
const De = m(
  ({
    label: r,
    error: t,
    helperText: a,
    fullWidth: s = !1,
    className: d,
    disabled: n,
    id: o,
    children: i,
    ...x
  }, u) => {
    const p = o || (r == null ? void 0 : r.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ c("div", { className: l("", s && "w-full"), children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: p,
          className: "block text-xs md:text-sm font-medium text-secondary mb-1",
          children: r
        }
      ),
      /* @__PURE__ */ c("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          "select",
          {
            ref: u,
            id: p,
            disabled: n,
            className: l(
              "block w-full rounded-md border transition-colors duration-200 appearance-none",
              "px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base",
              "pr-10",
              "bg-secondary text-primary",
              "focus:outline-none focus:ring-2 focus:ring-white focus:border-white",
              "disabled:bg-secondary/50 disabled:cursor-not-allowed disabled:text-primary/50",
              t ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-primary/30",
              d
            ),
            "aria-invalid": t ? "true" : "false",
            "aria-describedby": t ? `${p}-error` : a ? `${p}-helper` : void 0,
            ...x,
            children: i
          }
        ),
        /* @__PURE__ */ e("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ e(z, { className: "w-4 h-4 md:w-5 md:h-5 text-primary/70" }) })
      ] }),
      t && /* @__PURE__ */ e("p", { id: `${p}-error`, className: "mt-1 text-sm text-red-600", children: t }),
      !t && a && /* @__PURE__ */ e("p", { id: `${p}-helper`, className: "mt-1 text-sm text-gray-500", children: a })
    ] });
  }
);
De.displayName = "Select";
const D = m(
  ({ label: r, error: t, className: a, disabled: s, id: d, ...n }, o) => {
    const i = d || (r == null ? void 0 : r.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ c("div", { className: "flex items-start", children: [
      /* @__PURE__ */ e("div", { className: "flex items-center h-5 md:h-6", children: /* @__PURE__ */ e(
        "input",
        {
          ref: o,
          type: "checkbox",
          id: i,
          disabled: s,
          className: l(
            "w-4 h-4 md:w-5 md:h-5 rounded border-secondary transition-colors duration-200",
            "text-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            t && "border-red-500",
            a
          ),
          "aria-invalid": t ? "true" : "false",
          "aria-describedby": t ? `${i}-error` : void 0,
          ...n
        }
      ) }),
      r && /* @__PURE__ */ c("div", { className: "ml-3", children: [
        /* @__PURE__ */ e(
          "label",
          {
            htmlFor: i,
            className: l(
              "text-sm md:text-base text-white",
              s && "opacity-50 cursor-not-allowed"
            ),
            children: r
          }
        ),
        t && /* @__PURE__ */ e("p", { id: `${i}-error`, className: "mt-1 text-sm text-red-600", children: t })
      ] })
    ] });
  }
);
D.displayName = "Checkbox";
const Oe = m(
  ({ label: r, error: t, className: a, disabled: s, id: d, ...n }, o) => {
    const i = d || (r == null ? void 0 : r.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ c("div", { className: "flex items-start", children: [
      /* @__PURE__ */ e("div", { className: "flex items-center h-5 md:h-6", children: /* @__PURE__ */ e(
        "input",
        {
          ref: o,
          type: "radio",
          id: i,
          disabled: s,
          className: l(
            "w-4 h-4 md:w-5 md:h-5 border-secondary transition-colors duration-200",
            "text-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            t && "border-red-500",
            a
          ),
          "aria-invalid": t ? "true" : "false",
          "aria-describedby": t ? `${i}-error` : void 0,
          ...n
        }
      ) }),
      r && /* @__PURE__ */ c("div", { className: "ml-3", children: [
        /* @__PURE__ */ e(
          "label",
          {
            htmlFor: i,
            className: l(
              "text-sm md:text-base text-white",
              s && "opacity-50 cursor-not-allowed"
            ),
            children: r
          }
        ),
        t && /* @__PURE__ */ e("p", { id: `${i}-error`, className: "mt-1 text-sm text-red-600", children: t })
      ] })
    ] });
  }
);
Oe.displayName = "Radio";
const Re = m(
  ({ isOpen: r, onClose: t, title: a, footer: s, className: d, children: n, ...o }, i) => (P(() => (r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [r]), P(() => {
    const x = (u) => {
      u.key === "Escape" && r && t();
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [r, t]), r ? /* @__PURE__ */ c(M, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity",
        onClick: t,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ e("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: /* @__PURE__ */ e("div", { className: "flex min-h-full items-center justify-center p-4", children: /* @__PURE__ */ c(
      "div",
      {
        ref: i,
        className: l(
          "relative bg-primary rounded-lg shadow-xl",
          "w-full max-w-md md:max-w-lg",
          "transform transition-all",
          d
        ),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": a ? "modal-title" : void 0,
        ...o,
        children: [
          a && /* @__PURE__ */ c("div", { className: "flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-secondary", children: [
            /* @__PURE__ */ e(
              "h2",
              {
                id: "modal-title",
                className: "text-lg md:text-xl font-bold text-secondary",
                children: a
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: t,
                className: "p-1 rounded-md text-white hover:text-secondary hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-secondary",
                "aria-label": "Close modal",
                children: /* @__PURE__ */ e(T, { className: "w-5 h-5 md:w-6 md:h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "px-4 py-4 md:px-6 md:py-6 text-white", children: n }),
          s && /* @__PURE__ */ e("div", { className: "px-4 py-3 md:px-6 md:py-4 border-t border-secondary bg-primary/70 rounded-b-lg", children: s })
        ]
      }
    ) }) })
  ] }) : null)
);
Re.displayName = "Modal";
const Ve = {
  info: {
    icon: se,
    bgClass: "bg-blue-50",
    borderClass: "border-blue-200",
    textClass: "text-blue-800",
    iconClass: "text-blue-400"
  },
  success: {
    icon: ae,
    bgClass: "bg-green-50",
    borderClass: "border-green-200",
    textClass: "text-green-800",
    iconClass: "text-green-400"
  },
  warning: {
    icon: re,
    bgClass: "bg-yellow-50",
    borderClass: "border-yellow-200",
    textClass: "text-yellow-800",
    iconClass: "text-yellow-400"
  },
  error: {
    icon: te,
    bgClass: "bg-red-50",
    borderClass: "border-red-200",
    textClass: "text-red-800",
    iconClass: "text-red-400"
  }
}, Ze = m(
  ({ variant: r = "primary", type: t = "info", onClose: a, className: s, children: d, ...n }, o) => {
    const i = Ve[t], x = i.icon;
    return /* @__PURE__ */ e(
      "div",
      {
        ref: o,
        role: "alert",
        className: l(
          "rounded-md border p-3 md:p-4",
          i.bgClass,
          i.borderClass,
          s
        ),
        ...n,
        children: /* @__PURE__ */ c("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ e(x, { className: l("w-5 h-5 md:w-6 md:h-6 flex-shrink-0", i.iconClass) }),
          /* @__PURE__ */ e("div", { className: l("flex-1 text-sm md:text-base", i.textClass), children: d }),
          a && /* @__PURE__ */ e(
            "button",
            {
              onClick: a,
              className: l(
                "flex-shrink-0 p-1 rounded-md transition-colors",
                "hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2",
                i.textClass
              ),
              "aria-label": "Dismiss alert",
              children: /* @__PURE__ */ e(T, { className: "w-4 h-4 md:w-5 md:h-5" })
            }
          )
        ] })
      }
    );
  }
);
Ze.displayName = "Alert";
const We = m(
  ({ variant: r = "primary", label: t, className: a, ...s }, d) => {
    const n = r === "primary" ? "border-primary" : "border-secondary";
    return /* @__PURE__ */ c("div", { ref: d, className: l("inline-flex flex-col items-center gap-2", a), ...s, children: [
      /* @__PURE__ */ e(
        "div",
        {
          className: l(
            "w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-gray-200",
            "border-t-4",
            n,
            "animate-spin"
          ),
          role: "status",
          "aria-label": t || "Loading"
        }
      ),
      t && /* @__PURE__ */ e("span", { className: "text-sm md:text-base text-gray-600", children: t })
    ] });
  }
);
We.displayName = "Spinner";
const Ue = m(
  ({ variant: r = "primary", className: t, ...a }, s) => /* @__PURE__ */ e(
    "hr",
    {
      ref: s,
      className: l(
        "border-0 h-px",
        r === "primary" ? "bg-gray-200" : "bg-secondary",
        t
      ),
      ...a
    }
  )
);
Ue.displayName = "Divider";
const Ge = m(
  ({ defaultValue: r, value: t, onValueChange: a, className: s, children: d, ...n }, o) => {
    const [i, x] = h(r || ""), u = t !== void 0 ? t : i, p = (g) => {
      t === void 0 && x(g), a == null || a(g);
    };
    return /* @__PURE__ */ e("div", { ref: o, className: l("w-full", s), ...n, children: /* @__PURE__ */ e(O.Provider, { value: { value: u, onValueChange: p }, children: d }) });
  }
);
Ge.displayName = "Tabs";
const O = E({
  value: "",
  onValueChange: () => {
  }
}), Xe = m(
  ({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      role: "tablist",
      className: l(
        "inline-flex items-center gap-1 p-1 bg-primary border border-secondary rounded-lg",
        r
      ),
      ...a,
      children: t
    }
  )
);
Xe.displayName = "TabsList";
const _e = m(
  ({ value: r, className: t, children: a, ...s }, d) => {
    const n = N(O), o = n.value === r;
    return /* @__PURE__ */ e(
      "button",
      {
        ref: d,
        role: "tab",
        "aria-selected": o,
        onClick: () => n.onValueChange(r),
        className: l(
          "px-3 py-2 text-sm md:px-4 md:text-base font-medium rounded-md transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
          o ? "bg-secondary text-primary shadow-sm" : "text-white hover:text-secondary hover:bg-white/10",
          t
        ),
        ...s,
        children: a
      }
    );
  }
);
_e.displayName = "TabsTrigger";
const Je = m(
  ({ value: r, className: t, children: a, ...s }, d) => N(O).value !== r ? null : /* @__PURE__ */ e(
    "div",
    {
      ref: d,
      role: "tabpanel",
      className: l("mt-4", t),
      ...s,
      children: a
    }
  )
);
Je.displayName = "TabsContent";
const Ke = m(
  ({ variant: r = "primary", className: t, children: a, ...s }, d) => {
    const [n, o] = h([]), i = (x) => {
      o(
        (u) => u.includes(x) ? u.filter((p) => p !== x) : [...u, x]
      );
    };
    return /* @__PURE__ */ e("div", { ref: d, className: l("space-y-2", t), ...s, children: /* @__PURE__ */ e(R.Provider, { value: { openItems: n, toggleItem: i, variant: r }, children: a }) });
  }
);
Ke.displayName = "Accordion";
const R = E({
  openItems: [],
  toggleItem: () => {
  },
  variant: "primary"
}), V = E({
  value: "",
  isOpen: !1
}), Qe = m(
  ({ value: r, className: t, children: a, ...s }, d) => {
    const o = N(R).openItems.includes(r);
    return /* @__PURE__ */ e(
      "div",
      {
        ref: d,
        className: l("border-2 border-secondary rounded-lg bg-primary", t),
        ...s,
        children: /* @__PURE__ */ e(V.Provider, { value: { value: r, isOpen: o }, children: a })
      }
    );
  }
);
Qe.displayName = "AccordionItem";
const Ye = m(
  ({ className: r, children: t, ...a }, s) => {
    const d = N(R), n = N(V);
    return /* @__PURE__ */ c(
      "button",
      {
        ref: s,
        onClick: () => d.toggleItem(n.value),
        className: l(
          "flex w-full items-center justify-between px-4 py-3 md:px-5 md:py-4",
          "text-left text-sm md:text-base font-medium",
          "text-white hover:text-secondary transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-inset",
          "rounded-t-lg",
          n.isOpen ? "" : "rounded-b-lg",
          r
        ),
        ...a,
        children: [
          t,
          /* @__PURE__ */ e(
            z,
            {
              className: l(
                "w-5 h-5 md:w-6 md:h-6 transition-transform duration-200",
                n.isOpen && "rotate-180"
              )
            }
          )
        ]
      }
    );
  }
);
Ye.displayName = "AccordionTrigger";
const et = m(
  ({ className: r, children: t, ...a }, s) => N(V).isOpen ? /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      className: l(
        "px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white/90 border-t border-secondary/30",
        r
      ),
      ...a,
      children: t
    }
  ) : null
);
et.displayName = "AccordionContent";
const tt = m(
  ({ variant: r = "primary", className: t, children: a, ...s }, d) => /* @__PURE__ */ e("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ e(
    "table",
    {
      ref: d,
      className: l("w-full border-collapse", t),
      ...s,
      children: a
    }
  ) })
);
tt.displayName = "Table";
const rt = m(
  ({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e(
    "thead",
    {
      ref: s,
      className: l("bg-primary border-b-2 border-secondary", r),
      ...a,
      children: t
    }
  )
);
rt.displayName = "TableHeader";
const at = m(
  ({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e("tbody", { ref: s, className: l("divide-y divide-secondary/20 bg-primary/90", r), ...a, children: t })
);
at.displayName = "TableBody";
const st = m(
  ({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e(
    "tr",
    {
      ref: s,
      className: l("hover:bg-secondary/10 transition-colors duration-200", r),
      ...a,
      children: t
    }
  )
);
st.displayName = "TableRow";
const dt = m(
  ({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e(
    "th",
    {
      ref: s,
      className: l(
        "px-3 py-3 md:px-4 md:py-4 text-left text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider",
        r
      ),
      ...a,
      children: t
    }
  )
);
dt.displayName = "TableHead";
const lt = m(
  ({ className: r, children: t, ...a }, s) => /* @__PURE__ */ e(
    "td",
    {
      ref: s,
      className: l("px-3 py-3 md:px-4 md:py-4 text-sm md:text-base text-white", r),
      ...a,
      children: t
    }
  )
);
lt.displayName = "TableCell";
const nt = m(
  ({ name: r, position: t, number: a, image: s, stats: d, variant: n = "primary", className: o, ...i }, x) => /* @__PURE__ */ c(
    "div",
    {
      ref: x,
      className: l(
        "bg-primary rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1",
        o
      ),
      ...i,
      children: [
        /* @__PURE__ */ c("div", { className: l(
          "relative h-48 md:h-64 flex items-center justify-center",
          n === "primary" ? "bg-primary" : "bg-secondary"
        ), children: [
          s ? /* @__PURE__ */ e("img", { src: s, alt: r, className: "w-full h-full object-cover" }) : /* @__PURE__ */ e(U, { className: "w-20 h-20 md:w-24 md:h-24 text-white opacity-50" }),
          /* @__PURE__ */ c("div", { className: l(
            "absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl",
            n === "primary" ? "bg-secondary text-black" : "bg-primary text-white"
          ), children: [
            "#",
            a
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "p-4 md:p-5", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg md:text-xl font-bold text-secondary mb-1", children: r }),
          /* @__PURE__ */ e("p", { className: "text-sm md:text-base text-white/80 mb-4", children: t }),
          d && d.length > 0 && /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-4 border-t border-secondary/30", children: d.map((u, p) => /* @__PURE__ */ c("div", { className: "text-center", children: [
            /* @__PURE__ */ e("p", { className: "text-lg md:text-xl font-bold text-secondary", children: u.value }),
            /* @__PURE__ */ e("p", { className: "text-xs md:text-sm text-white/70", children: u.label })
          ] }, p)) })
        ] })
      ]
    }
  )
);
nt.displayName = "PlayerCard";
const it = m(
  ({
    homeTeam: r,
    awayTeam: t,
    homeScore: a,
    awayScore: s,
    date: d,
    time: n,
    location: o,
    status: i = "upcoming",
    variant: x = "primary",
    className: u,
    ...p
  }, g) => /* @__PURE__ */ c(
    "div",
    {
      ref: g,
      className: l(
        "bg-primary rounded-lg shadow-md p-4 md:p-6 transition-shadow duration-200 hover:shadow-lg",
        u
      ),
      ...p,
      children: [
        i === "live" && /* @__PURE__ */ c("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ e("div", { className: "w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 animate-pulse" }),
          /* @__PURE__ */ e("span", { className: "text-xs md:text-sm font-semibold text-red-500 uppercase", children: "Live" })
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ c("div", { className: "flex-1 text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-base md:text-lg font-bold text-white mb-2", children: r }),
            i !== "upcoming" && a !== void 0 && /* @__PURE__ */ e("p", { className: l(
              "text-3xl md:text-4xl font-bold",
              x === "primary" ? "text-secondary" : "text-white"
            ), children: a })
          ] }),
          /* @__PURE__ */ e("div", { className: "px-4 md:px-6", children: /* @__PURE__ */ e("span", { className: "text-xl md:text-2xl font-bold text-secondary", children: "VS" }) }),
          /* @__PURE__ */ c("div", { className: "flex-1 text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-base md:text-lg font-bold text-white mb-2", children: t }),
            i !== "upcoming" && s !== void 0 && /* @__PURE__ */ e("p", { className: l(
              "text-3xl md:text-4xl font-bold",
              x === "primary" ? "text-secondary" : "text-white"
            ), children: s })
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: "space-y-2 pt-4 border-t border-secondary/30", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2 text-sm md:text-base text-white/80", children: [
            /* @__PURE__ */ e(de, { className: "w-4 h-4 md:w-5 md:h-5" }),
            /* @__PURE__ */ c("span", { children: [
              d,
              " at ",
              n
            ] })
          ] }),
          o && /* @__PURE__ */ c("div", { className: "flex items-center gap-2 text-sm md:text-base text-white/80", children: [
            /* @__PURE__ */ e(le, { className: "w-4 h-4 md:w-5 md:h-5" }),
            /* @__PURE__ */ e("span", { children: o })
          ] })
        ] }),
        i === "finished" && /* @__PURE__ */ e("div", { className: "mt-4 text-center", children: /* @__PURE__ */ e("span", { className: "text-xs md:text-sm font-medium text-secondary uppercase", children: "Final" }) })
      ]
    }
  )
);
it.displayName = "MatchCard";
const ot = m(
  ({
    onSubmit: r,
    isLoading: t = !1,
    error: a,
    className: s,
    emailLabel: d = "Email",
    emailPlaceholder: n,
    passwordLabel: o = "Password",
    passwordPlaceholder: i,
    rememberLabel: x = "Remember me",
    forgotPasswordText: u,
    forgotPasswordHref: p,
    submitText: g = "Sign in",
    loadingText: F = "Signing in...",
    ...H
  }, $) => {
    const [C, j] = h(""), [v, w] = h(""), [k, I] = h(!1);
    return /* @__PURE__ */ c(
      "form",
      {
        ref: $,
        onSubmit: (b) => {
          b.preventDefault(), r({ email: C, password: v, remember: k });
        },
        className: l("space-y-4 md:space-y-6 p-6 md:p-8 bg-primary border-2 border-secondary rounded-lg", s),
        ...H,
        children: [
          a && /* @__PURE__ */ e("div", { className: "p-3 md:p-4 bg-red-50 border border-red-200 rounded-md", children: /* @__PURE__ */ e("p", { className: "text-sm md:text-base text-red-800", children: a }) }),
          /* @__PURE__ */ e(
            f,
            {
              type: "email",
              label: d,
              placeholder: n,
              value: C,
              onChange: (b) => j(b.target.value),
              icon: /* @__PURE__ */ e(G, { className: "w-5 h-5" }),
              required: !0,
              disabled: t,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ e(
            f,
            {
              type: "password",
              label: o,
              placeholder: i,
              value: v,
              onChange: (b) => w(b.target.value),
              icon: /* @__PURE__ */ e(B, { className: "w-5 h-5" }),
              required: !0,
              disabled: t,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e(
              D,
              {
                label: x,
                checked: k,
                onChange: (b) => I(b.target.checked),
                disabled: t
              }
            ),
            u && p && /* @__PURE__ */ e(
              "a",
              {
                href: p,
                className: "text-sm md:text-base text-secondary hover:text-secondary/80 font-medium",
                children: u
              }
            )
          ] }),
          /* @__PURE__ */ e(q, { type: "submit", fullWidth: !0, disabled: t, children: t ? F : g })
        ]
      }
    );
  }
);
ot.displayName = "LoginForm";
const ct = {
  sm: "w-12 h-9",
  md: "w-20 h-16",
  lg: "w-28 h-22"
}, mt = m(
  ({ size: r = "md", className: t, ...a }, s) => /* @__PURE__ */ c(
    "svg",
    {
      ref: s,
      className: t || ct[r],
      viewBox: "0 0 80 60",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...a,
      children: [
        /* @__PURE__ */ e(
          "path",
          {
            d: "M2.32425 42.7382C2.32425 42.7382 13.4718 21.8576 40.044 16.267C42.0651 13.0002 46.982 10.0701 50.2824 8.45356C56.7149 5.28779 56.0753 2.59351 56.0753 2.59351C56.0753 2.59351 60.8912 5.96135 57.961 12.2929C57.557 13.2023 57.2204 14.0442 57.0183 14.8525C61.8004 15.8965 66.2123 18.1867 69.6814 21.184C71.3316 22.5986 71.9041 23.9457 72.0726 24.7876C72.2072 25.3602 72.2072 25.3939 72.7123 25.7307C73.9584 26.5726 77.3262 29.3343 78.4713 32.399C78.4713 32.399 78.8082 33.7124 77.0906 34.8913C75.9455 37.8551 73.5879 38.6632 70.9275 38.9663C69.2099 41.2565 65.5726 41.9636 65.5726 41.9636C65.5726 41.9636 65.9767 40.1449 66.0777 38.0571C61.9014 36.272 59.3756 38.3263 59.3756 38.3263C59.3082 38.7978 59.2072 39.3032 59.1061 39.7747C58.5336 42.5361 58.5336 43.2771 59.7797 44.0856C59.7461 44.0517 59.7461 44.0856 59.7797 44.0856C59.8136 44.1192 59.8472 44.1192 59.7797 44.0856C61.6322 45.0622 63.8211 43.9171 64.7641 43.5131C64.7641 43.5131 65.4716 45.7019 63.4509 47.8575C63.4845 48.4636 63.2824 49.6761 62.0699 50.3833C61.2278 50.8887 59.8471 51.4948 58.2305 51.5622C52.8085 51.8314 53.4146 46.7799 47.7902 45.0622C43.5132 43.7487 37.6193 47.588 39.539 56.7148C36.6427 54.189 32.3655 49.0026 32.3318 42.3341C24.0132 42.031 16.3008 43.0751 14.7516 43.5131C15.1894 42.6036 15.6946 41.728 16.1998 40.8859C7.74647 41.5934 2.32425 42.7382 2.32425 42.7382Z",
            fill: "#00205C"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M74.0253 35.531C72.4426 36.8442 70.0514 36.9452 69.9504 36.9452C69.3779 38.0903 68.0979 39.2354 67.3233 39.6734C67.6267 38.6293 67.6938 37.4167 67.6602 36.5411C64.629 34.453 59.7456 34.8574 56.5127 37.4842C58.6005 38.2923 55.1317 43.5801 58.3985 45.7354C60.3182 46.7795 62.3053 45.769 63.3829 45.3313C63.4168 45.4324 62.8443 46.712 61.1266 47.5876L61.1602 47.6215C61.1602 47.6215 61.6653 48.1602 60.9917 48.5646C60.3182 48.9686 59.4426 49.2717 58.0955 49.4737C56.4788 49.7097 54.7276 48.4636 53.7171 46.9141C52.471 45.0283 50.0463 43.0412 46.8805 42.4686C47.689 42.0307 48.5981 41.694 48.5981 41.694C46.308 41.391 44.4557 41.6266 42.9066 42.0645C46.7459 37.6188 52.37 36.1371 52.37 36.1371C51.8649 35.9015 51.1239 35.6991 50.3493 35.5645C55.2666 33.0388 60.6551 32.264 65.168 33.6113C66.3806 31.0516 71.668 30.6812 73.4867 32.062C74.3958 32.6345 75.3389 34.4194 74.0253 35.531ZM78.0331 35.6655C76.686 38.7639 74.2274 39.7069 71.4996 40.111C70.5229 41.1889 68.5023 42.5361 65.8416 43.1086V43.1422C65.8751 43.2432 66.6497 45.769 64.5619 48.3286C64.4606 49.4063 63.9219 50.6524 62.6083 51.4273C61.6317 51.9995 59.8805 52.6734 58.028 52.7744C52.067 52.7744 52.4375 47.7561 47.3856 46.2069C46.948 46.0724 46.51 46.0049 46.0385 46.0049C40.111 46.1395 39.3364 53.347 41.189 59.8131C37.8547 56.8829 31.7252 51.9324 31.119 43.5127C24.8884 43.3781 18.4558 43.6137 12.4274 45.3649C12.9326 44.3547 13.404 43.3107 13.9429 42.3001C9.26159 42.7717 4.58029 43.4452 0 44.4893C7.24087 30.5127 21.7563 19.0621 39.2354 15.2564C41.6266 11.7538 46.7795 8.92481 49.6758 7.44294C56.9168 3.73832 54.3907 0.336814 54.2897 0C54.2897 0 57.6914 1.65024 58.9711 4.14245C59.9477 6.02846 60.7222 9.05952 59.0049 12.7642C58.8026 13.1683 58.6344 13.5725 58.4995 13.9766C62.8778 15.1553 66.9867 17.3108 70.4219 20.2745C71.9036 21.5543 72.9141 23.1035 73.2508 24.6527C74.8674 25.7304 78.3362 28.7951 79.5487 32.062C79.7508 32.7692 79.6498 34.3859 78.0331 35.6655ZM78.4372 32.3988C77.2921 29.334 73.9243 26.5724 72.6782 25.7304C72.2067 25.3936 72.1731 25.3599 72.0385 24.7874C71.8362 23.9117 71.2975 22.5983 69.6474 21.1838C66.1782 18.1527 61.7663 15.8963 56.9839 14.8186C57.2199 14.0439 57.5229 13.202 57.927 12.259C60.8572 5.92741 56.0412 2.55957 56.0412 2.55957C56.0412 2.55957 56.6809 5.25385 50.2483 8.41962C46.948 10.0362 42.0307 12.9326 40.01 16.233C13.404 21.8237 2.29014 42.7046 2.29014 42.7046C2.29014 42.7046 7.7124 41.5256 16.132 40.852C15.6268 41.6605 15.1553 42.5361 14.6838 43.4791C16.2667 43.0412 23.9791 41.9971 32.264 42.3001C32.2977 48.9686 36.575 54.1551 39.4713 56.6809C37.5517 47.5541 43.4452 43.7147 47.7225 45.0283C53.3805 46.7459 52.7744 51.7975 58.1629 51.5283C59.7795 51.4608 61.1266 50.8547 62.0022 50.3493C63.2483 49.6422 63.4168 48.4297 63.3829 47.8236C65.4036 45.6344 64.6965 43.4791 64.6965 43.4791C63.7534 43.8832 61.5643 45.0283 59.7121 44.0517C59.7456 44.0852 59.7795 44.0852 59.7121 44.0517C59.6785 44.0178 59.6785 44.0178 59.7121 44.0517C58.4324 43.2768 58.4324 42.5022 59.0385 39.7408C59.1395 39.2693 59.2405 38.7978 59.308 38.2923C59.308 38.2923 61.8002 36.2381 66.0101 38.0232C65.909 40.111 65.5046 41.9296 65.5046 41.9296C65.5046 41.9296 69.1419 41.2225 70.8596 38.9323C73.5202 38.6293 75.8779 37.8211 77.023 34.8574C78.7742 33.7123 78.4372 32.3988 78.4372 32.3988Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M52.4046 36.1034C51.8992 35.8674 51.1585 35.6654 50.384 35.5308C55.3009 33.0047 60.6894 32.2302 65.2023 33.5773C66.4149 31.0178 71.7023 30.6473 73.521 32.0281C74.2956 31.7924 75.3732 32.1629 76.1142 32.4997C75.2047 30.7484 72.5779 28.1551 71.5678 27.4816C69.2437 25.9324 70.6247 24.7536 68.3345 22.7666C65.0677 19.9376 61.0264 17.8832 56.6481 16.9739C56.6145 17.9168 56.7491 18.6915 57.0521 19.365C55.8735 18.6241 55.3345 17.6811 55.1325 16.7044C54.5263 13.404 57.9277 9.42987 55.4694 9.36251C52.4382 9.26146 45.2646 13.1682 42.6378 17.8832C41.5599 19.8029 41.2568 21.8236 42.2673 23.8106C39.8761 22.1604 39.0341 20.4091 39.2026 18.7252C26.0679 22.4298 15.998 30.8494 10.8115 38.4271C13.5732 38.1241 15.9307 37.8881 18.3218 37.821C21.6897 33.5437 25.6637 30.8494 29.0316 29.1992C25.1586 32.2639 23.1379 35.7329 22.1948 37.7871C25.1249 37.8546 28.4591 38.1241 32.7699 38.6292C33.7131 34.0152 36.5083 29.6707 40.7853 26.6733C43.1094 25.0567 45.4331 23.979 47.8917 23.5075C43.0083 25.3935 39.2026 29.2328 37.4849 33.9142C39.0341 32.2639 40.9538 30.8494 43.0755 29.7717C39.9771 32.8028 37.9229 36.7769 37.4514 41.2559C37.2829 42.738 37.3839 44.3207 37.687 45.8027C38.327 44.8932 39.9771 42.94 43.0419 42.0309C46.7802 37.5515 52.4046 36.1034 52.4046 36.1034ZM68.0315 25.6966C68.5366 27.6836 70.2542 29.0644 70.2542 29.0644C69.6481 29.0308 69.2101 28.9297 68.8732 28.8287C68.1996 28.4919 68.1661 27.9194 67.5935 27.5489C67.6945 27.8857 67.5935 28.0878 67.2569 28.0878C67.0884 28.0541 66.9535 28.0204 66.8189 27.9867C66.7854 27.9867 66.7854 27.9867 66.7515 27.953C65.3708 27.4479 65.3372 25.9324 63.4176 25.8313C63.4176 25.8313 64.9328 25.4608 66.0444 25.6966C63.6867 23.7432 58.5003 22.5982 58.5003 22.5982C58.5003 22.5982 63.9562 22.6318 68.0315 25.6966ZM46.1741 21.1163C42.8734 18.1863 50.148 13.505 50.9901 13.3366C49.104 15.4246 48.6663 17.0412 48.8684 18.2873C48.0599 18.0516 47.8243 17.3443 47.8243 17.3443C47.2853 19.4324 48.7335 20.7458 49.7775 21.3521C48.6999 21.6215 47.0497 21.8572 46.1741 21.1163Z",
            fill: "#BC955C"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M41.7949 55.637H41.5254V55.5021H42.2328V55.637H41.9634V56.6472H41.7613V55.637H41.7949ZM42.3674 55.4685H42.6369L42.8725 56.4116L43.142 55.5021H43.4115V56.6472H43.243V55.6705L42.9735 56.6472H42.8054L42.5359 55.6705V56.6472H42.3674V55.4685Z",
            fill: "white"
          }
        )
      ]
    }
  )
);
mt.displayName = "Logo";
const xt = m(
  ({
    onSubmit: r,
    isLoading: t = !1,
    error: a,
    className: s,
    nameLabel: d = "Full Name",
    namePlaceholder: n,
    emailLabel: o = "Email",
    emailPlaceholder: i,
    passwordLabel: x = "Password",
    passwordPlaceholder: u,
    confirmPasswordLabel: p = "Confirm Password",
    confirmPasswordPlaceholder: g,
    termsLabel: F = "I agree to the Terms of Service and Privacy Policy",
    passwordMismatchError: H = "Passwords do not match",
    submitText: $ = "Create account",
    loadingText: C = "Creating account...",
    ...j
  }, v) => {
    const [w, k] = h(""), [I, Z] = h(""), [b, J] = h(""), [A, K] = h(""), [S, Q] = h(!1), [Y, L] = h("");
    return /* @__PURE__ */ c(
      "form",
      {
        ref: v,
        onSubmit: (y) => {
          if (y.preventDefault(), b !== A) {
            L(H);
            return;
          }
          L(""), r({ name: w, email: I, password: b, confirmPassword: A, terms: S });
        },
        className: l("space-y-4 md:space-y-6 p-6 md:p-8 bg-primary border-2 border-secondary rounded-lg", s),
        ...j,
        children: [
          a && /* @__PURE__ */ e("div", { className: "p-3 md:p-4 bg-red-50 border border-red-200 rounded-md", children: /* @__PURE__ */ e("p", { className: "text-sm md:text-base text-red-800", children: a }) }),
          /* @__PURE__ */ e(
            f,
            {
              type: "text",
              label: d,
              placeholder: n,
              value: w,
              onChange: (y) => k(y.target.value),
              icon: /* @__PURE__ */ e(U, { className: "w-5 h-5" }),
              required: !0,
              disabled: t,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ e(
            f,
            {
              type: "email",
              label: o,
              placeholder: i,
              value: I,
              onChange: (y) => Z(y.target.value),
              icon: /* @__PURE__ */ e(G, { className: "w-5 h-5" }),
              required: !0,
              disabled: t,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ e(
            f,
            {
              type: "password",
              label: x,
              placeholder: u,
              value: b,
              onChange: (y) => J(y.target.value),
              icon: /* @__PURE__ */ e(B, { className: "w-5 h-5" }),
              required: !0,
              disabled: t,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ e(
            f,
            {
              type: "password",
              label: p,
              placeholder: g,
              value: A,
              onChange: (y) => {
                K(y.target.value), L("");
              },
              icon: /* @__PURE__ */ e(B, { className: "w-5 h-5" }),
              required: !0,
              disabled: t,
              error: Y,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ e(
            D,
            {
              label: F,
              checked: S,
              onChange: (y) => Q(y.target.checked),
              disabled: t,
              required: !0
            }
          ),
          /* @__PURE__ */ e(q, { type: "submit", fullWidth: !0, disabled: t || !S, children: t ? C : $ })
        ]
      }
    );
  }
);
xt.displayName = "SignUpForm";
const pt = (r) => {
  switch (r) {
    case "wide":
      return "aspect-[4/3] md:aspect-[16/9]";
    case "tall":
      return "aspect-[3/4] md:aspect-[9/16]";
    case "panoramic":
      return "h-48 md:h-64 lg:h-80 xl:h-96 aspect-auto";
    case "square":
    default:
      return "aspect-square md:aspect-[5/4]";
  }
}, ut = m(
  ({
    image: r,
    title: t,
    description: a,
    variant: s = "primary",
    aspectRatio: d = "square",
    className: n,
    ...o
  }, i) => {
    const x = t || a;
    return /* @__PURE__ */ c(
      "div",
      {
        ref: i,
        className: l(
          "bg-primary rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1",
          d === "panoramic" ? "w-full rounded-none shadow-none hover:shadow-none hover:-translate-y-0" : "max-w-md w-full mx-auto",
          n
        ),
        ...o,
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: l(
                "relative flex items-center justify-center",
                pt(d),
                s === "primary" ? "bg-primary" : "bg-secondary"
              ),
              children: r ? /* @__PURE__ */ e("img", { src: r, alt: t || "Image Block", className: "w-full h-full object-cover" }) : /* @__PURE__ */ c("div", { className: "flex flex-col items-center text-white/50 p-4", children: [
                /* @__PURE__ */ e(ne, { className: "w-16 h-16 md:w-20 md:h-20 opacity-50 mb-2" }),
                /* @__PURE__ */ e("span", { className: "text-sm", children: "No Image Available" })
              ] })
            }
          ),
          x && /* @__PURE__ */ c("div", { className: "p-4 md:p-5", children: [
            t && /* @__PURE__ */ e("h3", { className: "text-lg md:text-xl font-bold text-secondary mb-1", children: t }),
            a && /* @__PURE__ */ e("p", { className: "text-sm md:text-base text-white/80", children: a })
          ] })
        ]
      }
    );
  }
);
ut.displayName = "ImageBlock";
const Nt = "0.1.0";
export {
  Ke as Accordion,
  et as AccordionContent,
  Qe as AccordionItem,
  Ye as AccordionTrigger,
  Ze as Alert,
  oe as Badge,
  q as Button,
  pe as Card,
  he as CardBody,
  be as CardFooter,
  ue as CardHeader,
  D as Checkbox,
  ge as Container,
  Ue as Divider,
  fe as Dropdown,
  Ne as DropdownItem,
  Ce as Footer,
  we as FooterLink,
  ve as FooterSection,
  Fe as Grid,
  ke as Header,
  je as Heading,
  Le as Hero,
  ft as Icon,
  ut as ImageBlock,
  f as Input,
  Pe as Label,
  ot as LoginForm,
  mt as Logo,
  it as MatchCard,
  _ as MobileMenu,
  Re as Modal,
  Be as Nav,
  Ee as NavItem,
  nt as PlayerCard,
  Oe as Radio,
  De as Select,
  xt as SignUpForm,
  We as Spinner,
  tt as Table,
  at as TableBody,
  lt as TableCell,
  dt as TableHead,
  rt as TableHeader,
  st as TableRow,
  Ge as Tabs,
  Je as TabsContent,
  Xe as TabsList,
  _e as TabsTrigger,
  ze as Text,
  qe as Textarea,
  Nt as version
};
