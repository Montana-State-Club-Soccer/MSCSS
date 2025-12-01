import { jsx as t, jsxs as m, Fragment as w } from "react/jsx-runtime";
import { forwardRef as c, useState as h, useRef as O, useEffect as T, createContext as F, useContext as N } from "react";
import { ChevronDown as $, X as S, Menu as W, XCircle as q, AlertCircle as V, CheckCircle as U, Info as G, User as D, Calendar as X, MapPin as Y, Mail as z, Lock as I } from "lucide-react";
function H(r) {
  var e, a, s = "";
  if (typeof r == "string" || typeof r == "number") s += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var l = r.length;
    for (e = 0; e < l; e++) r[e] && (a = H(r[e])) && (s && (s += " "), s += a);
  } else for (a in r) r[a] && (s && (s += " "), s += a);
  return s;
}
function d() {
  for (var r, e, a = 0, s = "", l = arguments.length; a < l; a++) (r = arguments[a]) && (e = H(r)) && (s && (s += " "), s += e);
  return s;
}
const J = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-black"
}, _ = c(
  ({ variant: r = "primary", className: e, children: a, ...s }, l) => /* @__PURE__ */ t(
    "span",
    {
      ref: l,
      className: d(
        "inline-flex items-center justify-center font-semibold rounded-full",
        "px-2 py-0.5 text-xs md:px-3 md:py-1 md:text-sm",
        J[r],
        e
      ),
      ...s,
      children: a
    }
  )
);
_.displayName = "Badge";
const K = {
  primary: "bg-primary hover:bg-primary-hover active:bg-primary-active text-white",
  secondary: "bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-black"
}, A = c(
  ({
    variant: r = "primary",
    icon: e,
    iconPosition: a = "left",
    fullWidth: s = !1,
    className: l,
    children: o,
    disabled: n,
    ...i
  }, u) => /* @__PURE__ */ m(
    "button",
    {
      ref: u,
      disabled: n,
      className: d(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-colors duration-200",
        "px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base lg:px-6 lg:py-3 lg:text-lg",
        K[r],
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        s && "w-full",
        l
      ),
      ...i,
      children: [
        e && a === "left" && /* @__PURE__ */ t(e, { className: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" }),
        o,
        e && a === "right" && /* @__PURE__ */ t(e, { className: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" })
      ]
    }
  )
);
A.displayName = "Button";
const Q = {
  blue: {
    elevated: "bg-primary shadow-lg",
    outlined: "bg-primary border-2 border-secondary",
    filled: "bg-primary/90"
  },
  gold: {
    elevated: "bg-secondary shadow-lg",
    outlined: "bg-secondary border-2 border-primary",
    filled: "bg-secondary/90"
  }
}, Z = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
}, ee = c(
  ({ variant: r = "elevated", padding: e = "md", hoverable: a = !1, colorScheme: s = "blue", className: l, children: o, ...n }, i) => /* @__PURE__ */ t(
    "div",
    {
      ref: i,
      className: d(
        "rounded-lg transition-all duration-200",
        Q[s][r],
        Z[e],
        a && "hover:shadow-xl hover:scale-[1.02] cursor-pointer",
        l
      ),
      ...n,
      children: o
    }
  )
);
ee.displayName = "Card";
const te = c(
  ({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t("div", { ref: s, className: d("mb-4", r), ...a, children: e })
);
te.displayName = "CardHeader";
const re = c(({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t("div", { ref: s, className: d("", r), ...a, children: e }));
re.displayName = "CardBody";
const ae = c(
  ({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t("div", { ref: s, className: d("mt-4 pt-4 border-t border-secondary/30", r), ...a, children: e })
);
ae.displayName = "CardFooter";
const se = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-full"
}, le = c(
  ({ size: r = "lg", padding: e = !0, className: a, children: s, ...l }, o) => /* @__PURE__ */ t(
    "div",
    {
      ref: o,
      className: d(
        "mx-auto w-full",
        se[r],
        e && "px-4 sm:px-6 lg:px-8",
        a
      ),
      ...l,
      children: s
    }
  )
);
le.displayName = "Container";
const de = c(
  ({ trigger: r, align: e = "left", className: a, children: s, ...l }, o) => {
    const [n, i] = h(!1), u = O(null);
    return T(() => {
      const p = (x) => {
        u.current && !u.current.contains(x.target) && i(!1);
      };
      return n && document.addEventListener("mousedown", p), () => {
        document.removeEventListener("mousedown", p);
      };
    }, [n]), /* @__PURE__ */ m("div", { ref: u, className: d("relative inline-block", a), ...l, children: [
      /* @__PURE__ */ m(
        "button",
        {
          onClick: () => i(!n),
          className: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          children: [
            r,
            /* @__PURE__ */ t(
              $,
              {
                className: d("w-4 h-4 transition-transform duration-200", n && "rotate-180")
              }
            )
          ]
        }
      ),
      n && /* @__PURE__ */ t(
        "div",
        {
          className: d(
            "absolute z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            e === "left" ? "left-0" : "right-0"
          ),
          children: /* @__PURE__ */ t("div", { className: "py-1", role: "menu", children: s })
        }
      )
    ] });
  }
);
de.displayName = "Dropdown";
const oe = c(
  ({ disabled: r = !1, className: e, children: a, onClick: s, ...l }, o) => /* @__PURE__ */ t(
    "button",
    {
      ref: o,
      disabled: r,
      className: d(
        "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        "focus:outline-none focus:bg-gray-100 focus:text-gray-900",
        r && "opacity-50 cursor-not-allowed",
        e
      ),
      role: "menuitem",
      onClick: s,
      ...l,
      children: a
    }
  )
);
oe.displayName = "DropdownItem";
const ne = c(
  ({ logo: r, copyright: e, columns: a, className: s, children: l, ...o }, n) => {
    const i = (/* @__PURE__ */ new Date()).getFullYear(), u = e || `© ${i} Montana State Club Soccer. All rights reserved.`;
    return /* @__PURE__ */ t(
      "footer",
      {
        ref: n,
        className: d("bg-gray-900 text-gray-300", s),
        ...o,
        children: /* @__PURE__ */ m("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
          /* @__PURE__ */ m("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8", children: [
            r && /* @__PURE__ */ t("div", { className: "col-span-1", children: r }),
            a?.map((p, x) => /* @__PURE__ */ t("div", { className: "col-span-1", children: p }, x)),
            l
          ] }),
          /* @__PURE__ */ t("div", { className: "pt-8 border-t border-gray-700 text-center text-sm", children: u })
        ] })
      }
    );
  }
);
ne.displayName = "Footer";
const ie = c(
  ({ title: r, className: e, children: a, ...s }, l) => /* @__PURE__ */ m("div", { ref: l, className: d("", e), ...s, children: [
    r && /* @__PURE__ */ t("h3", { className: "text-white font-semibold text-lg mb-4", children: r }),
    /* @__PURE__ */ t("ul", { className: "space-y-2", children: a })
  ] })
);
ie.displayName = "FooterSection";
const ce = c(
  ({ href: r, className: e, children: a, ...s }, l) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t(
    "a",
    {
      ref: l,
      href: r,
      className: d(
        "hover:text-white transition-colors duration-200",
        e
      ),
      ...s,
      children: a
    }
  ) })
);
ce.displayName = "FooterLink";
const me = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 md:grid-cols-6 lg:grid-cols-12"
}, xe = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12"
}, ue = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12"
}, pe = c(
  ({ cols: r = 3, gap: e = "md", responsive: a = !0, className: s, children: l, ...o }, n) => /* @__PURE__ */ t(
    "div",
    {
      ref: n,
      className: d(
        "grid",
        a ? me[r] : xe[r],
        ue[e],
        s
      ),
      ...o,
      children: l
    }
  )
);
pe.displayName = "Grid";
const he = {
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
  h4: "text-lg sm:text-xl md:text-2xl",
  h5: "text-base sm:text-lg md:text-xl",
  h6: "text-sm sm:text-base md:text-lg"
}, be = {
  primary: "text-primary",
  secondary: "text-secondary"
}, ge = c(
  ({ as: r = "h2", variant: e = "primary", className: a, children: s, ...l }, o) => /* @__PURE__ */ t(
    r,
    {
      ref: o,
      className: d(
        "font-bold",
        he[r],
        be[e],
        a
      ),
      ...l,
      children: s
    }
  )
);
ge.displayName = "Heading";
const ye = {
  sm: "h-64",
  md: "h-96",
  lg: "h-[32rem]",
  full: "h-screen"
}, fe = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end"
}, Ne = c(
  ({
    title: r,
    subtitle: e,
    image: a,
    overlay: s = !0,
    height: l = "lg",
    alignment: o = "center",
    actions: n,
    className: i,
    ...u
  }, p) => /* @__PURE__ */ m(
    "section",
    {
      ref: p,
      className: d("relative flex items-center justify-center", ye[l], i),
      ...u,
      children: [
        a && /* @__PURE__ */ m(w, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: { backgroundImage: `url(${a})` }
            }
          ),
          s && /* @__PURE__ */ t("div", { className: "absolute inset-0 bg-black/50" })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full", children: /* @__PURE__ */ m("div", { className: d("flex flex-col gap-6", fe[o]), children: [
          /* @__PURE__ */ t(
            "h1",
            {
              className: d(
                "text-4xl sm:text-5xl md:text-6xl font-bold",
                a ? "text-white" : "text-gray-900"
              ),
              children: r
            }
          ),
          e && /* @__PURE__ */ t(
            "p",
            {
              className: d(
                "text-lg sm:text-xl md:text-2xl max-w-3xl",
                a ? "text-gray-100" : "text-gray-600"
              ),
              children: e
            }
          ),
          n && /* @__PURE__ */ t("div", { className: "flex gap-4 mt-4", children: n })
        ] }) })
      ]
    }
  )
);
Ne.displayName = "Hero";
const tt = ({ icon: r, className: e }) => /* @__PURE__ */ t(r, { className: d("w-5 h-5 md:w-6 md:h-6", e) }), f = c(
  ({
    label: r,
    error: e,
    helperText: a,
    icon: s,
    fullWidth: l = !1,
    className: o,
    disabled: n,
    id: i,
    ...u
  }, p) => {
    const x = i || r?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ m("div", { className: d("", l && "w-full"), children: [
      r && /* @__PURE__ */ t(
        "label",
        {
          htmlFor: x,
          className: "block text-sm font-medium text-secondary mb-1",
          children: r
        }
      ),
      /* @__PURE__ */ m("div", { className: "relative", children: [
        s && /* @__PURE__ */ t("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-primary/70", children: s }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: p,
            id: x,
            disabled: n,
            className: d(
              "block w-full rounded-md border transition-colors duration-200",
              "py-2 text-sm md:py-2.5 md:text-base",
              "bg-secondary text-primary placeholder:text-primary/60",
              "focus:outline-none focus:ring-2 focus:ring-white focus:border-white",
              "disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500",
              s ? "pl-10 md:pl-11 pr-3 md:pr-4" : "px-3 md:px-4",
              e ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-primary/30",
              o
            ),
            "aria-invalid": e ? "true" : "false",
            "aria-describedby": e ? `${x}-error` : a ? `${x}-helper` : void 0,
            ...u
          }
        )
      ] }),
      e && /* @__PURE__ */ t("p", { id: `${x}-error`, className: "mt-1 text-sm text-red-600", children: e }),
      !e && a && /* @__PURE__ */ t("p", { id: `${x}-helper`, className: "mt-1 text-sm text-gray-500", children: a })
    ] });
  }
);
f.displayName = "Input";
const ve = c(
  ({ required: r = !1, className: e, children: a, ...s }, l) => /* @__PURE__ */ m(
    "label",
    {
      ref: l,
      className: d("text-gray-700 text-xs md:text-sm font-medium", e),
      ...s,
      children: [
        a,
        r && /* @__PURE__ */ t("span", { className: "text-red-500 ml-1", children: "*" })
      ]
    }
  )
);
ve.displayName = "Label";
const we = c(
  ({ logo: r, sticky: e = !1, className: a, children: s, ...l }, o) => {
    const [n, i] = h(!1);
    return /* @__PURE__ */ m(w, { children: [
      /* @__PURE__ */ t(
        "nav",
        {
          ref: o,
          className: d(
            "bg-white shadow-md z-40",
            e && "sticky top-0",
            a
          ),
          ...l,
          children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ m("div", { className: "flex justify-between items-center h-16", children: [
            r && /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: r }),
            /* @__PURE__ */ t("div", { className: "hidden md:flex md:items-center md:space-x-8", children: s }),
            /* @__PURE__ */ t("div", { className: "md:hidden", children: /* @__PURE__ */ t(
              "button",
              {
                onClick: () => i(!n),
                className: "p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary",
                "aria-label": "Toggle menu",
                children: n ? /* @__PURE__ */ t(S, { className: "w-6 h-6" }) : /* @__PURE__ */ t(W, { className: "w-6 h-6" })
              }
            ) })
          ] }) })
        }
      ),
      /* @__PURE__ */ t(L, { isOpen: n, onClose: () => i(!1), children: s })
    ] });
  }
);
we.displayName = "Nav";
const Ce = c(
  ({ href: r, active: e = !1, className: a, children: s, ...l }, o) => /* @__PURE__ */ t(
    "a",
    {
      ref: o,
      href: r,
      className: d(
        "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
        "hover:bg-gray-100 hover:text-primary",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        e ? "text-primary bg-gray-50" : "text-gray-700",
        a
      ),
      ...l,
      children: s
    }
  )
);
Ce.displayName = "NavItem";
const L = c(
  ({ isOpen: r, onClose: e, className: a, children: s, ...l }, o) => r ? /* @__PURE__ */ m(w, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",
        onClick: e,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        ref: o,
        className: d(
          "fixed top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden",
          "max-h-[calc(100vh-4rem)] overflow-y-auto",
          a
        ),
        ...l,
        children: /* @__PURE__ */ t("div", { className: "px-4 py-4 space-y-2", children: s })
      }
    )
  ] }) : null
);
L.displayName = "MobileMenu";
const ke = c(
  ({
    as: r = "p",
    className: e,
    children: a,
    ...s
  }, l) => /* @__PURE__ */ t(
    r,
    {
      ref: l,
      className: d("text-sm md:text-base text-gray-900", e),
      ...s,
      children: a
    }
  )
);
ke.displayName = "Text";
const Te = c(
  ({
    label: r,
    error: e,
    helperText: a,
    fullWidth: s = !1,
    className: l,
    disabled: o,
    id: n,
    rows: i = 4,
    ...u
  }, p) => {
    const x = n || r?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ m("div", { className: d("", s && "w-full"), children: [
      r && /* @__PURE__ */ t(
        "label",
        {
          htmlFor: x,
          className: "block text-xs md:text-sm font-medium text-secondary mb-1",
          children: r
        }
      ),
      /* @__PURE__ */ t(
        "textarea",
        {
          ref: p,
          id: x,
          rows: i,
          disabled: o,
          className: d(
            "block w-full rounded-md border transition-colors duration-200",
            "px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base",
            "bg-secondary text-primary placeholder:text-primary/60",
            "focus:outline-none focus:ring-2 focus:ring-white focus:border-white",
            "disabled:bg-secondary/50 disabled:cursor-not-allowed disabled:text-primary/50",
            "resize-y",
            e ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-primary/30",
            l
          ),
          "aria-invalid": e ? "true" : "false",
          "aria-describedby": e ? `${x}-error` : a ? `${x}-helper` : void 0,
          ...u
        }
      ),
      e && /* @__PURE__ */ t("p", { id: `${x}-error`, className: "mt-1 text-sm text-red-600", children: e }),
      !e && a && /* @__PURE__ */ t("p", { id: `${x}-helper`, className: "mt-1 text-sm text-gray-500", children: a })
    ] });
  }
);
Te.displayName = "Textarea";
const Ie = c(
  ({
    label: r,
    error: e,
    helperText: a,
    fullWidth: s = !1,
    className: l,
    disabled: o,
    id: n,
    children: i,
    ...u
  }, p) => {
    const x = n || r?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ m("div", { className: d("", s && "w-full"), children: [
      r && /* @__PURE__ */ t(
        "label",
        {
          htmlFor: x,
          className: "block text-xs md:text-sm font-medium text-secondary mb-1",
          children: r
        }
      ),
      /* @__PURE__ */ m("div", { className: "relative", children: [
        /* @__PURE__ */ t(
          "select",
          {
            ref: p,
            id: x,
            disabled: o,
            className: d(
              "block w-full rounded-md border transition-colors duration-200 appearance-none",
              "px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base",
              "pr-10",
              "bg-secondary text-primary",
              "focus:outline-none focus:ring-2 focus:ring-white focus:border-white",
              "disabled:bg-secondary/50 disabled:cursor-not-allowed disabled:text-primary/50",
              e ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-primary/30",
              l
            ),
            "aria-invalid": e ? "true" : "false",
            "aria-describedby": e ? `${x}-error` : a ? `${x}-helper` : void 0,
            ...u,
            children: i
          }
        ),
        /* @__PURE__ */ t("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ t($, { className: "w-4 h-4 md:w-5 md:h-5 text-primary/70" }) })
      ] }),
      e && /* @__PURE__ */ t("p", { id: `${x}-error`, className: "mt-1 text-sm text-red-600", children: e }),
      !e && a && /* @__PURE__ */ t("p", { id: `${x}-helper`, className: "mt-1 text-sm text-gray-500", children: a })
    ] });
  }
);
Ie.displayName = "Select";
const M = c(
  ({ label: r, error: e, className: a, disabled: s, id: l, ...o }, n) => {
    const i = l || r?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ m("div", { className: "flex items-start", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center h-5 md:h-6", children: /* @__PURE__ */ t(
        "input",
        {
          ref: n,
          type: "checkbox",
          id: i,
          disabled: s,
          className: d(
            "w-4 h-4 md:w-5 md:h-5 rounded border-secondary transition-colors duration-200",
            "text-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            e && "border-red-500",
            a
          ),
          "aria-invalid": e ? "true" : "false",
          "aria-describedby": e ? `${i}-error` : void 0,
          ...o
        }
      ) }),
      r && /* @__PURE__ */ m("div", { className: "ml-3", children: [
        /* @__PURE__ */ t(
          "label",
          {
            htmlFor: i,
            className: d(
              "text-sm md:text-base text-white",
              s && "opacity-50 cursor-not-allowed"
            ),
            children: r
          }
        ),
        e && /* @__PURE__ */ t("p", { id: `${i}-error`, className: "mt-1 text-sm text-red-600", children: e })
      ] })
    ] });
  }
);
M.displayName = "Checkbox";
const Fe = c(
  ({ label: r, error: e, className: a, disabled: s, id: l, ...o }, n) => {
    const i = l || r?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ m("div", { className: "flex items-start", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center h-5 md:h-6", children: /* @__PURE__ */ t(
        "input",
        {
          ref: n,
          type: "radio",
          id: i,
          disabled: s,
          className: d(
            "w-4 h-4 md:w-5 md:h-5 border-secondary transition-colors duration-200",
            "text-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            e && "border-red-500",
            a
          ),
          "aria-invalid": e ? "true" : "false",
          "aria-describedby": e ? `${i}-error` : void 0,
          ...o
        }
      ) }),
      r && /* @__PURE__ */ m("div", { className: "ml-3", children: [
        /* @__PURE__ */ t(
          "label",
          {
            htmlFor: i,
            className: d(
              "text-sm md:text-base text-white",
              s && "opacity-50 cursor-not-allowed"
            ),
            children: r
          }
        ),
        e && /* @__PURE__ */ t("p", { id: `${i}-error`, className: "mt-1 text-sm text-red-600", children: e })
      ] })
    ] });
  }
);
Fe.displayName = "Radio";
const $e = c(
  ({ isOpen: r, onClose: e, title: a, footer: s, className: l, children: o, ...n }, i) => (T(() => (r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [r]), T(() => {
    const u = (p) => {
      p.key === "Escape" && r && e();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [r, e]), r ? /* @__PURE__ */ m(w, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity",
        onClick: e,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ t("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: /* @__PURE__ */ t("div", { className: "flex min-h-full items-center justify-center p-4", children: /* @__PURE__ */ m(
      "div",
      {
        ref: i,
        className: d(
          "relative bg-primary rounded-lg shadow-xl",
          "w-full max-w-md md:max-w-lg",
          "transform transition-all",
          l
        ),
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": a ? "modal-title" : void 0,
        ...n,
        children: [
          a && /* @__PURE__ */ m("div", { className: "flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-secondary", children: [
            /* @__PURE__ */ t(
              "h2",
              {
                id: "modal-title",
                className: "text-lg md:text-xl font-bold text-secondary",
                children: a
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: e,
                className: "p-1 rounded-md text-white hover:text-secondary hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-secondary",
                "aria-label": "Close modal",
                children: /* @__PURE__ */ t(S, { className: "w-5 h-5 md:w-6 md:h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "px-4 py-4 md:px-6 md:py-6", children: o }),
          s && /* @__PURE__ */ t("div", { className: "px-4 py-3 md:px-6 md:py-4 border-t border-secondary bg-primary/70 rounded-b-lg", children: s })
        ]
      }
    ) }) })
  ] }) : null)
);
$e.displayName = "Modal";
const Se = {
  info: {
    icon: G,
    bgClass: "bg-blue-50",
    borderClass: "border-blue-200",
    textClass: "text-blue-800",
    iconClass: "text-blue-400"
  },
  success: {
    icon: U,
    bgClass: "bg-green-50",
    borderClass: "border-green-200",
    textClass: "text-green-800",
    iconClass: "text-green-400"
  },
  warning: {
    icon: V,
    bgClass: "bg-yellow-50",
    borderClass: "border-yellow-200",
    textClass: "text-yellow-800",
    iconClass: "text-yellow-400"
  },
  error: {
    icon: q,
    bgClass: "bg-red-50",
    borderClass: "border-red-200",
    textClass: "text-red-800",
    iconClass: "text-red-400"
  }
}, Ae = c(
  ({ variant: r = "primary", type: e = "info", onClose: a, className: s, children: l, ...o }, n) => {
    const i = Se[e], u = i.icon;
    return /* @__PURE__ */ t(
      "div",
      {
        ref: n,
        role: "alert",
        className: d(
          "rounded-md border p-3 md:p-4",
          i.bgClass,
          i.borderClass,
          s
        ),
        ...o,
        children: /* @__PURE__ */ m("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ t(u, { className: d("w-5 h-5 md:w-6 md:h-6 flex-shrink-0", i.iconClass) }),
          /* @__PURE__ */ t("div", { className: d("flex-1 text-sm md:text-base", i.textClass), children: l }),
          a && /* @__PURE__ */ t(
            "button",
            {
              onClick: a,
              className: d(
                "flex-shrink-0 p-1 rounded-md transition-colors",
                "hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2",
                i.textClass
              ),
              "aria-label": "Dismiss alert",
              children: /* @__PURE__ */ t(S, { className: "w-4 h-4 md:w-5 md:h-5" })
            }
          )
        ] })
      }
    );
  }
);
Ae.displayName = "Alert";
const Me = c(
  ({ variant: r = "primary", label: e, className: a, ...s }, l) => {
    const o = r === "primary" ? "border-primary" : "border-secondary";
    return /* @__PURE__ */ m("div", { ref: l, className: d("inline-flex flex-col items-center gap-2", a), ...s, children: [
      /* @__PURE__ */ t(
        "div",
        {
          className: d(
            "w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-gray-200",
            "border-t-4",
            o,
            "animate-spin"
          ),
          role: "status",
          "aria-label": e || "Loading"
        }
      ),
      e && /* @__PURE__ */ t("span", { className: "text-sm md:text-base text-gray-600", children: e })
    ] });
  }
);
Me.displayName = "Spinner";
const Pe = c(
  ({ variant: r = "primary", className: e, ...a }, s) => /* @__PURE__ */ t(
    "hr",
    {
      ref: s,
      className: d(
        "border-0 h-px",
        r === "primary" ? "bg-gray-200" : "bg-secondary",
        e
      ),
      ...a
    }
  )
);
Pe.displayName = "Divider";
const je = c(
  ({ defaultValue: r, value: e, onValueChange: a, className: s, children: l, ...o }, n) => {
    const [i, u] = h(r || ""), p = e !== void 0 ? e : i, x = (y) => {
      e === void 0 && u(y), a?.(y);
    };
    return /* @__PURE__ */ t("div", { ref: n, className: d("w-full", s), ...o, children: /* @__PURE__ */ t(P.Provider, { value: { value: p, onValueChange: x }, children: l }) });
  }
);
je.displayName = "Tabs";
const P = F({
  value: "",
  onValueChange: () => {
  }
}), Ee = c(
  ({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t(
    "div",
    {
      ref: s,
      role: "tablist",
      className: d(
        "inline-flex items-center gap-1 p-1 bg-primary border border-secondary rounded-lg",
        r
      ),
      ...a,
      children: e
    }
  )
);
Ee.displayName = "TabsList";
const De = c(
  ({ value: r, className: e, children: a, ...s }, l) => {
    const o = N(P), n = o.value === r;
    return /* @__PURE__ */ t(
      "button",
      {
        ref: l,
        role: "tab",
        "aria-selected": n,
        onClick: () => o.onValueChange(r),
        className: d(
          "px-3 py-2 text-sm md:px-4 md:text-base font-medium rounded-md transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
          n ? "bg-secondary text-black shadow-sm" : "text-white hover:text-secondary hover:bg-white/10",
          e
        ),
        ...s,
        children: a
      }
    );
  }
);
De.displayName = "TabsTrigger";
const ze = c(
  ({ value: r, className: e, children: a, ...s }, l) => N(P).value !== r ? null : /* @__PURE__ */ t(
    "div",
    {
      ref: l,
      role: "tabpanel",
      className: d("mt-4", e),
      ...s,
      children: a
    }
  )
);
ze.displayName = "TabsContent";
const He = c(
  ({ variant: r = "primary", className: e, children: a, ...s }, l) => {
    const [o, n] = h([]), i = (u) => {
      n(
        (p) => p.includes(u) ? p.filter((x) => x !== u) : [...p, u]
      );
    };
    return /* @__PURE__ */ t("div", { ref: l, className: d("space-y-2", e), ...s, children: /* @__PURE__ */ t(j.Provider, { value: { openItems: o, toggleItem: i, variant: r }, children: a }) });
  }
);
He.displayName = "Accordion";
const j = F({
  openItems: [],
  toggleItem: () => {
  },
  variant: "primary"
}), E = F({
  value: "",
  isOpen: !1
}), Le = c(
  ({ value: r, className: e, children: a, ...s }, l) => {
    const n = N(j).openItems.includes(r);
    return /* @__PURE__ */ t(
      "div",
      {
        ref: l,
        className: d("border-2 border-secondary rounded-lg bg-primary", e),
        ...s,
        children: /* @__PURE__ */ t(E.Provider, { value: { value: r, isOpen: n }, children: a })
      }
    );
  }
);
Le.displayName = "AccordionItem";
const Re = c(
  ({ className: r, children: e, ...a }, s) => {
    const l = N(j), o = N(E);
    return /* @__PURE__ */ m(
      "button",
      {
        ref: s,
        onClick: () => l.toggleItem(o.value),
        className: d(
          "flex w-full items-center justify-between px-4 py-3 md:px-5 md:py-4",
          "text-left text-sm md:text-base font-medium",
          "text-white hover:text-secondary transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-inset",
          "rounded-t-lg",
          o.isOpen ? "" : "rounded-b-lg",
          r
        ),
        ...a,
        children: [
          e,
          /* @__PURE__ */ t(
            $,
            {
              className: d(
                "w-5 h-5 md:w-6 md:h-6 transition-transform duration-200",
                o.isOpen && "rotate-180"
              )
            }
          )
        ]
      }
    );
  }
);
Re.displayName = "AccordionTrigger";
const Be = c(
  ({ className: r, children: e, ...a }, s) => N(E).isOpen ? /* @__PURE__ */ t(
    "div",
    {
      ref: s,
      className: d(
        "px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white/90 border-t border-secondary/30",
        r
      ),
      ...a,
      children: e
    }
  ) : null
);
Be.displayName = "AccordionContent";
const Oe = c(
  ({ variant: r = "primary", className: e, children: a, ...s }, l) => /* @__PURE__ */ t("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ t(
    "table",
    {
      ref: l,
      className: d("w-full border-collapse", e),
      ...s,
      children: a
    }
  ) })
);
Oe.displayName = "Table";
const We = c(
  ({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t(
    "thead",
    {
      ref: s,
      className: d("bg-primary border-b-2 border-secondary", r),
      ...a,
      children: e
    }
  )
);
We.displayName = "TableHeader";
const qe = c(
  ({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t("tbody", { ref: s, className: d("divide-y divide-secondary/20 bg-primary/90", r), ...a, children: e })
);
qe.displayName = "TableBody";
const Ve = c(
  ({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t(
    "tr",
    {
      ref: s,
      className: d("hover:bg-secondary/10 transition-colors duration-200", r),
      ...a,
      children: e
    }
  )
);
Ve.displayName = "TableRow";
const Ue = c(
  ({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t(
    "th",
    {
      ref: s,
      className: d(
        "px-3 py-3 md:px-4 md:py-4 text-left text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider",
        r
      ),
      ...a,
      children: e
    }
  )
);
Ue.displayName = "TableHead";
const Ge = c(
  ({ className: r, children: e, ...a }, s) => /* @__PURE__ */ t(
    "td",
    {
      ref: s,
      className: d("px-3 py-3 md:px-4 md:py-4 text-sm md:text-base text-white", r),
      ...a,
      children: e
    }
  )
);
Ge.displayName = "TableCell";
const Xe = c(
  ({ name: r, position: e, number: a, image: s, stats: l, variant: o = "primary", className: n, ...i }, u) => /* @__PURE__ */ m(
    "div",
    {
      ref: u,
      className: d(
        "bg-primary rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1",
        n
      ),
      ...i,
      children: [
        /* @__PURE__ */ m("div", { className: d(
          "relative h-48 md:h-64 flex items-center justify-center",
          o === "primary" ? "bg-primary" : "bg-secondary"
        ), children: [
          s ? /* @__PURE__ */ t("img", { src: s, alt: r, className: "w-full h-full object-cover" }) : /* @__PURE__ */ t(D, { className: "w-20 h-20 md:w-24 md:h-24 text-white opacity-50" }),
          /* @__PURE__ */ m("div", { className: d(
            "absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl",
            o === "primary" ? "bg-secondary text-black" : "bg-primary text-white"
          ), children: [
            "#",
            a
          ] })
        ] }),
        /* @__PURE__ */ m("div", { className: "p-4 md:p-5", children: [
          /* @__PURE__ */ t("h3", { className: "text-lg md:text-xl font-bold text-secondary mb-1", children: r }),
          /* @__PURE__ */ t("p", { className: "text-sm md:text-base text-white/80 mb-4", children: e }),
          l && l.length > 0 && /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-2 pt-4 border-t border-secondary/30", children: l.map((p, x) => /* @__PURE__ */ m("div", { className: "text-center", children: [
            /* @__PURE__ */ t("p", { className: "text-lg md:text-xl font-bold text-secondary", children: p.value }),
            /* @__PURE__ */ t("p", { className: "text-xs md:text-sm text-white/70", children: p.label })
          ] }, x)) })
        ] })
      ]
    }
  )
);
Xe.displayName = "PlayerCard";
const Ye = c(
  ({
    homeTeam: r,
    awayTeam: e,
    homeScore: a,
    awayScore: s,
    date: l,
    time: o,
    location: n,
    status: i = "upcoming",
    variant: u = "primary",
    className: p,
    ...x
  }, y) => /* @__PURE__ */ m(
    "div",
    {
      ref: y,
      className: d(
        "bg-primary rounded-lg shadow-md p-4 md:p-6 transition-shadow duration-200 hover:shadow-lg",
        p
      ),
      ...x,
      children: [
        i === "live" && /* @__PURE__ */ m("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ t("div", { className: "w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 animate-pulse" }),
          /* @__PURE__ */ t("span", { className: "text-xs md:text-sm font-semibold text-red-500 uppercase", children: "Live" })
        ] }),
        /* @__PURE__ */ m("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ m("div", { className: "flex-1 text-center", children: [
            /* @__PURE__ */ t("h3", { className: "text-base md:text-lg font-bold text-white mb-2", children: r }),
            i !== "upcoming" && a !== void 0 && /* @__PURE__ */ t("p", { className: d(
              "text-3xl md:text-4xl font-bold",
              u === "primary" ? "text-secondary" : "text-white"
            ), children: a })
          ] }),
          /* @__PURE__ */ t("div", { className: "px-4 md:px-6", children: /* @__PURE__ */ t("span", { className: "text-xl md:text-2xl font-bold text-secondary", children: "VS" }) }),
          /* @__PURE__ */ m("div", { className: "flex-1 text-center", children: [
            /* @__PURE__ */ t("h3", { className: "text-base md:text-lg font-bold text-white mb-2", children: e }),
            i !== "upcoming" && s !== void 0 && /* @__PURE__ */ t("p", { className: d(
              "text-3xl md:text-4xl font-bold",
              u === "primary" ? "text-secondary" : "text-white"
            ), children: s })
          ] })
        ] }),
        /* @__PURE__ */ m("div", { className: "space-y-2 pt-4 border-t border-secondary/30", children: [
          /* @__PURE__ */ m("div", { className: "flex items-center gap-2 text-sm md:text-base text-white/80", children: [
            /* @__PURE__ */ t(X, { className: "w-4 h-4 md:w-5 md:h-5" }),
            /* @__PURE__ */ m("span", { children: [
              l,
              " at ",
              o
            ] })
          ] }),
          n && /* @__PURE__ */ m("div", { className: "flex items-center gap-2 text-sm md:text-base text-white/80", children: [
            /* @__PURE__ */ t(Y, { className: "w-4 h-4 md:w-5 md:h-5" }),
            /* @__PURE__ */ t("span", { children: n })
          ] })
        ] }),
        i === "finished" && /* @__PURE__ */ t("div", { className: "mt-4 text-center", children: /* @__PURE__ */ t("span", { className: "text-xs md:text-sm font-medium text-secondary uppercase", children: "Final" }) })
      ]
    }
  )
);
Ye.displayName = "MatchCard";
const Je = c(
  ({ onSubmit: r, isLoading: e = !1, error: a, className: s, ...l }, o) => {
    const [n, i] = h(""), [u, p] = h(""), [x, y] = h(!1);
    return /* @__PURE__ */ m(
      "form",
      {
        ref: o,
        onSubmit: (g) => {
          g.preventDefault(), r({ email: n, password: u, remember: x });
        },
        className: d("space-y-4 md:space-y-6 p-6 md:p-8 bg-primary border-2 border-secondary rounded-lg", s),
        ...l,
        children: [
          a && /* @__PURE__ */ t("div", { className: "p-3 md:p-4 bg-red-50 border border-red-200 rounded-md", children: /* @__PURE__ */ t("p", { className: "text-sm md:text-base text-red-800", children: a }) }),
          /* @__PURE__ */ t(
            f,
            {
              type: "email",
              label: "Email",
              placeholder: "your@email.com",
              value: n,
              onChange: (g) => i(g.target.value),
              icon: /* @__PURE__ */ t(z, { className: "w-5 h-5" }),
              required: !0,
              disabled: e,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ t(
            f,
            {
              type: "password",
              label: "Password",
              placeholder: "••••••••",
              value: u,
              onChange: (g) => p(g.target.value),
              icon: /* @__PURE__ */ t(I, { className: "w-5 h-5" }),
              required: !0,
              disabled: e,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ m("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t(
              M,
              {
                label: "Remember me",
                checked: x,
                onChange: (g) => y(g.target.checked),
                disabled: e
              }
            ),
            /* @__PURE__ */ t(
              "a",
              {
                href: "#",
                className: "text-sm md:text-base text-secondary hover:text-secondary/80 font-medium",
                children: "Forgot password?"
              }
            )
          ] }),
          /* @__PURE__ */ t(A, { type: "submit", fullWidth: !0, disabled: e, children: e ? "Signing in..." : "Sign in" })
        ]
      }
    );
  }
);
Je.displayName = "LoginForm";
const _e = c(
  ({ onSubmit: r, isLoading: e = !1, error: a, className: s, ...l }, o) => {
    const [n, i] = h(""), [u, p] = h(""), [x, y] = h(""), [v, g] = h(""), [C, R] = h(!1), [B, k] = h("");
    return /* @__PURE__ */ m(
      "form",
      {
        ref: o,
        onSubmit: (b) => {
          if (b.preventDefault(), x !== v) {
            k("Passwords do not match");
            return;
          }
          k(""), r({ name: n, email: u, password: x, confirmPassword: v, terms: C });
        },
        className: d("space-y-4 md:space-y-6 p-6 md:p-8 bg-primary border-2 border-secondary rounded-lg", s),
        ...l,
        children: [
          a && /* @__PURE__ */ t("div", { className: "p-3 md:p-4 bg-red-50 border border-red-200 rounded-md", children: /* @__PURE__ */ t("p", { className: "text-sm md:text-base text-red-800", children: a }) }),
          /* @__PURE__ */ t(
            f,
            {
              type: "text",
              label: "Full Name",
              placeholder: "John Doe",
              value: n,
              onChange: (b) => i(b.target.value),
              icon: /* @__PURE__ */ t(D, { className: "w-5 h-5" }),
              required: !0,
              disabled: e,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ t(
            f,
            {
              type: "email",
              label: "Email",
              placeholder: "your@email.com",
              value: u,
              onChange: (b) => p(b.target.value),
              icon: /* @__PURE__ */ t(z, { className: "w-5 h-5" }),
              required: !0,
              disabled: e,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ t(
            f,
            {
              type: "password",
              label: "Password",
              placeholder: "••••••••",
              value: x,
              onChange: (b) => y(b.target.value),
              icon: /* @__PURE__ */ t(I, { className: "w-5 h-5" }),
              required: !0,
              disabled: e,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ t(
            f,
            {
              type: "password",
              label: "Confirm Password",
              placeholder: "••••••••",
              value: v,
              onChange: (b) => {
                g(b.target.value), k("");
              },
              icon: /* @__PURE__ */ t(I, { className: "w-5 h-5" }),
              required: !0,
              disabled: e,
              error: B,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ t(
            M,
            {
              label: "I agree to the Terms of Service and Privacy Policy",
              checked: C,
              onChange: (b) => R(b.target.checked),
              disabled: e,
              required: !0
            }
          ),
          /* @__PURE__ */ t(A, { type: "submit", fullWidth: !0, disabled: e || !C, children: e ? "Creating account..." : "Create account" })
        ]
      }
    );
  }
);
_e.displayName = "SignUpForm";
const rt = "0.1.0";
export {
  He as Accordion,
  Be as AccordionContent,
  Le as AccordionItem,
  Re as AccordionTrigger,
  Ae as Alert,
  _ as Badge,
  A as Button,
  ee as Card,
  re as CardBody,
  ae as CardFooter,
  te as CardHeader,
  M as Checkbox,
  le as Container,
  Pe as Divider,
  de as Dropdown,
  oe as DropdownItem,
  ne as Footer,
  ce as FooterLink,
  ie as FooterSection,
  pe as Grid,
  ge as Heading,
  Ne as Hero,
  tt as Icon,
  f as Input,
  ve as Label,
  Je as LoginForm,
  Ye as MatchCard,
  L as MobileMenu,
  $e as Modal,
  we as Nav,
  Ce as NavItem,
  Xe as PlayerCard,
  Fe as Radio,
  Ie as Select,
  _e as SignUpForm,
  Me as Spinner,
  Oe as Table,
  qe as TableBody,
  Ge as TableCell,
  Ue as TableHead,
  We as TableHeader,
  Ve as TableRow,
  je as Tabs,
  ze as TabsContent,
  Ee as TabsList,
  De as TabsTrigger,
  ke as Text,
  Te as Textarea,
  rt as version
};
