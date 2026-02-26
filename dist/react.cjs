"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react/index.ts
var react_exports = {};
__export(react_exports, {
  ThemeContext: () => ThemeContext,
  ThemePicker: () => ThemePicker,
  ThemeProvider: () => ThemeProvider,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(react_exports);

// src/react/ThemeProvider.tsx
var import_react = require("react");

// src/colors.ts
var TAILWIND_COLORS = {
  // ─── white / black ────────────────────────────────────────────────────────
  white: "oklch(1 0 0)",
  black: "oklch(0 0 0)",
  // ─── slate ────────────────────────────────────────────────────────────────
  "slate-50": "oklch(0.984 0.003 247.858)",
  "slate-100": "oklch(0.968 0.007 247.896)",
  "slate-200": "oklch(0.929 0.013 255.508)",
  "slate-300": "oklch(0.869 0.022 252.894)",
  "slate-400": "oklch(0.704 0.04 256.788)",
  "slate-500": "oklch(0.554 0.046 257.417)",
  "slate-600": "oklch(0.446 0.043 257.281)",
  "slate-700": "oklch(0.372 0.044 257.287)",
  "slate-800": "oklch(0.279 0.041 260.031)",
  "slate-900": "oklch(0.208 0.042 265.755)",
  "slate-950": "oklch(0.129 0.042 264.695)",
  // ─── gray ─────────────────────────────────────────────────────────────────
  "gray-50": "oklch(0.985 0.002 247.839)",
  "gray-100": "oklch(0.967 0.003 264.542)",
  "gray-200": "oklch(0.928 0.006 264.531)",
  "gray-300": "oklch(0.872 0.01 258.338)",
  "gray-400": "oklch(0.707 0.022 261.325)",
  "gray-500": "oklch(0.551 0.027 264.364)",
  "gray-600": "oklch(0.446 0.03 256.802)",
  "gray-700": "oklch(0.373 0.034 259.733)",
  "gray-800": "oklch(0.278 0.033 256.848)",
  "gray-900": "oklch(0.21 0.034 264.665)",
  "gray-950": "oklch(0.13 0.028 261.692)",
  // ─── zinc ─────────────────────────────────────────────────────────────────
  "zinc-50": "oklch(0.985 0 0)",
  "zinc-100": "oklch(0.967 0.001 286.375)",
  "zinc-200": "oklch(0.92 0.004 286.32)",
  "zinc-300": "oklch(0.871 0.006 286.286)",
  "zinc-400": "oklch(0.705 0.015 286.067)",
  "zinc-500": "oklch(0.552 0.016 285.938)",
  "zinc-600": "oklch(0.442 0.017 285.786)",
  "zinc-700": "oklch(0.37 0.013 285.805)",
  "zinc-800": "oklch(0.274 0.006 286.033)",
  "zinc-900": "oklch(0.21 0.006 285.885)",
  "zinc-950": "oklch(0.141 0.005 285.823)",
  // ─── neutral ──────────────────────────────────────────────────────────────
  "neutral-50": "oklch(0.985 0 0)",
  "neutral-100": "oklch(0.97 0 0)",
  "neutral-200": "oklch(0.922 0 0)",
  "neutral-300": "oklch(0.87 0 0)",
  "neutral-400": "oklch(0.708 0 0)",
  "neutral-500": "oklch(0.556 0 0)",
  "neutral-600": "oklch(0.439 0 0)",
  "neutral-700": "oklch(0.371 0 0)",
  "neutral-800": "oklch(0.269 0 0)",
  "neutral-900": "oklch(0.205 0 0)",
  "neutral-950": "oklch(0.145 0 0)",
  // ─── stone ────────────────────────────────────────────────────────────────
  "stone-50": "oklch(0.985 0.001 106.423)",
  "stone-100": "oklch(0.97 0.001 106.424)",
  "stone-200": "oklch(0.923 0.003 48.717)",
  "stone-300": "oklch(0.869 0.005 56.366)",
  "stone-400": "oklch(0.706 0.01 56.259)",
  "stone-500": "oklch(0.553 0.013 58.071)",
  "stone-600": "oklch(0.444 0.011 73.639)",
  "stone-700": "oklch(0.374 0.01 67.558)",
  "stone-800": "oklch(0.268 0.007 34.298)",
  "stone-900": "oklch(0.216 0.006 56.043)",
  "stone-950": "oklch(0.147 0.004 49.25)",
  // ─── red ──────────────────────────────────────────────────────────────────
  "red-50": "oklch(0.971 0.013 17.38)",
  "red-100": "oklch(0.936 0.032 17.717)",
  "red-200": "oklch(0.885 0.062 18.334)",
  "red-300": "oklch(0.808 0.114 19.571)",
  "red-400": "oklch(0.704 0.191 22.216)",
  "red-500": "oklch(0.637 0.237 25.331)",
  "red-600": "oklch(0.577 0.245 27.325)",
  "red-700": "oklch(0.505 0.213 27.518)",
  "red-800": "oklch(0.444 0.177 26.899)",
  "red-900": "oklch(0.396 0.141 25.723)",
  "red-950": "oklch(0.258 0.092 26.042)",
  // ─── orange ───────────────────────────────────────────────────────────────
  "orange-50": "oklch(0.98 0.016 73.684)",
  "orange-100": "oklch(0.954 0.038 75.164)",
  "orange-200": "oklch(0.901 0.076 70.697)",
  "orange-300": "oklch(0.837 0.128 66.29)",
  "orange-400": "oklch(0.75 0.183 55.934)",
  "orange-500": "oklch(0.705 0.213 47.604)",
  "orange-600": "oklch(0.646 0.222 41.116)",
  "orange-700": "oklch(0.553 0.195 38.402)",
  "orange-800": "oklch(0.47 0.157 37.304)",
  "orange-900": "oklch(0.408 0.123 38.172)",
  "orange-950": "oklch(0.266 0.079 36.259)",
  // ─── amber ────────────────────────────────────────────────────────────────
  "amber-50": "oklch(0.987 0.022 95.277)",
  "amber-100": "oklch(0.962 0.059 95.617)",
  "amber-200": "oklch(0.924 0.12 95.746)",
  "amber-300": "oklch(0.879 0.169 91.605)",
  "amber-400": "oklch(0.828 0.189 84.429)",
  "amber-500": "oklch(0.769 0.188 70.08)",
  "amber-600": "oklch(0.666 0.179 58.318)",
  "amber-700": "oklch(0.555 0.163 48.998)",
  "amber-800": "oklch(0.473 0.137 46.201)",
  "amber-900": "oklch(0.414 0.112 45.904)",
  "amber-950": "oklch(0.279 0.077 45.635)",
  // ─── yellow ───────────────────────────────────────────────────────────────
  "yellow-50": "oklch(0.987 0.026 102.212)",
  "yellow-100": "oklch(0.973 0.071 103.193)",
  "yellow-200": "oklch(0.945 0.129 101.54)",
  "yellow-300": "oklch(0.905 0.182 98.111)",
  "yellow-400": "oklch(0.852 0.199 91.936)",
  "yellow-500": "oklch(0.795 0.184 86.047)",
  "yellow-600": "oklch(0.681 0.162 75.834)",
  "yellow-700": "oklch(0.554 0.135 66.442)",
  "yellow-800": "oklch(0.476 0.114 61.907)",
  "yellow-900": "oklch(0.421 0.095 57.708)",
  "yellow-950": "oklch(0.286 0.066 53.813)",
  // ─── lime ─────────────────────────────────────────────────────────────────
  "lime-50": "oklch(0.986 0.031 120.757)",
  "lime-100": "oklch(0.967 0.067 122.328)",
  "lime-200": "oklch(0.938 0.127 124.321)",
  "lime-300": "oklch(0.897 0.196 126.665)",
  "lime-400": "oklch(0.841 0.238 128.85)",
  "lime-500": "oklch(0.768 0.233 130.85)",
  "lime-600": "oklch(0.648 0.2 131.684)",
  "lime-700": "oklch(0.532 0.157 131.589)",
  "lime-800": "oklch(0.453 0.124 130.933)",
  "lime-900": "oklch(0.405 0.101 131.063)",
  "lime-950": "oklch(0.274 0.072 132.109)",
  // ─── green ────────────────────────────────────────────────────────────────
  "green-50": "oklch(0.982 0.018 155.826)",
  "green-100": "oklch(0.962 0.044 156.743)",
  "green-200": "oklch(0.925 0.084 155.995)",
  "green-300": "oklch(0.871 0.15 154.449)",
  "green-400": "oklch(0.792 0.209 151.711)",
  "green-500": "oklch(0.723 0.219 149.579)",
  "green-600": "oklch(0.627 0.194 149.214)",
  "green-700": "oklch(0.527 0.154 150.069)",
  "green-800": "oklch(0.448 0.119 151.328)",
  "green-900": "oklch(0.393 0.095 152.535)",
  "green-950": "oklch(0.266 0.065 152.934)",
  // ─── emerald ──────────────────────────────────────────────────────────────
  "emerald-50": "oklch(0.979 0.021 166.113)",
  "emerald-100": "oklch(0.95 0.052 163.051)",
  "emerald-200": "oklch(0.905 0.093 164.15)",
  "emerald-300": "oklch(0.845 0.143 164.978)",
  "emerald-400": "oklch(0.765 0.177 163.223)",
  "emerald-500": "oklch(0.696 0.17 162.48)",
  "emerald-600": "oklch(0.596 0.145 163.225)",
  "emerald-700": "oklch(0.508 0.118 165.612)",
  "emerald-800": "oklch(0.432 0.095 166.913)",
  "emerald-900": "oklch(0.378 0.077 168.94)",
  "emerald-950": "oklch(0.262 0.051 172.552)",
  // ─── teal ─────────────────────────────────────────────────────────────────
  "teal-50": "oklch(0.984 0.014 180.72)",
  "teal-100": "oklch(0.953 0.051 180.801)",
  "teal-200": "oklch(0.91 0.096 180.426)",
  "teal-300": "oklch(0.855 0.138 181.071)",
  "teal-400": "oklch(0.777 0.152 181.912)",
  "teal-500": "oklch(0.704 0.14 182.503)",
  "teal-600": "oklch(0.6 0.118 184.704)",
  "teal-700": "oklch(0.511 0.096 186.391)",
  "teal-800": "oklch(0.437 0.078 188.216)",
  "teal-900": "oklch(0.386 0.063 188.416)",
  "teal-950": "oklch(0.277 0.046 192.524)",
  // ─── cyan ─────────────────────────────────────────────────────────────────
  "cyan-50": "oklch(0.984 0.019 200.873)",
  "cyan-100": "oklch(0.956 0.045 203.388)",
  "cyan-200": "oklch(0.917 0.08 205.041)",
  "cyan-300": "oklch(0.865 0.127 207.078)",
  "cyan-400": "oklch(0.789 0.154 211.53)",
  "cyan-500": "oklch(0.715 0.143 215.221)",
  "cyan-600": "oklch(0.609 0.126 221.723)",
  "cyan-700": "oklch(0.52 0.105 223.128)",
  "cyan-800": "oklch(0.45 0.085 224.283)",
  "cyan-900": "oklch(0.398 0.07 227.392)",
  "cyan-950": "oklch(0.302 0.056 229.695)",
  // ─── sky ──────────────────────────────────────────────────────────────────
  "sky-50": "oklch(0.977 0.013 236.62)",
  "sky-100": "oklch(0.951 0.026 236.824)",
  "sky-200": "oklch(0.901 0.058 230.902)",
  "sky-300": "oklch(0.828 0.111 230.318)",
  "sky-400": "oklch(0.746 0.16 232.661)",
  "sky-500": "oklch(0.685 0.169 237.323)",
  "sky-600": "oklch(0.588 0.158 241.966)",
  "sky-700": "oklch(0.5 0.134 242.749)",
  "sky-800": "oklch(0.443 0.11 240.79)",
  "sky-900": "oklch(0.391 0.09 240.876)",
  "sky-950": "oklch(0.293 0.066 243.157)",
  // ─── blue ─────────────────────────────────────────────────────────────────
  "blue-50": "oklch(0.97 0.014 254.604)",
  "blue-100": "oklch(0.932 0.032 255.585)",
  "blue-200": "oklch(0.882 0.059 254.128)",
  "blue-300": "oklch(0.809 0.105 251.813)",
  "blue-400": "oklch(0.707 0.165 254.624)",
  "blue-500": "oklch(0.623 0.214 259.815)",
  "blue-600": "oklch(0.546 0.245 262.881)",
  "blue-700": "oklch(0.488 0.243 264.376)",
  "blue-800": "oklch(0.424 0.199 265.638)",
  "blue-900": "oklch(0.379 0.146 265.522)",
  "blue-950": "oklch(0.282 0.091 267.935)",
  // ─── indigo ───────────────────────────────────────────────────────────────
  "indigo-50": "oklch(0.962 0.018 272.314)",
  "indigo-100": "oklch(0.93 0.034 272.788)",
  "indigo-200": "oklch(0.87 0.065 274.039)",
  "indigo-300": "oklch(0.785 0.115 274.713)",
  "indigo-400": "oklch(0.673 0.182 276.935)",
  "indigo-500": "oklch(0.585 0.233 277.117)",
  "indigo-600": "oklch(0.511 0.262 276.966)",
  "indigo-700": "oklch(0.457 0.24 277.023)",
  "indigo-800": "oklch(0.398 0.195 277.366)",
  "indigo-900": "oklch(0.359 0.144 278.697)",
  "indigo-950": "oklch(0.257 0.09 281.288)",
  // ─── violet ───────────────────────────────────────────────────────────────
  "violet-50": "oklch(0.969 0.016 293.756)",
  "violet-100": "oklch(0.943 0.029 294.588)",
  "violet-200": "oklch(0.894 0.057 293.283)",
  "violet-300": "oklch(0.811 0.111 293.571)",
  "violet-400": "oklch(0.702 0.183 293.541)",
  "violet-500": "oklch(0.606 0.25 292.717)",
  "violet-600": "oklch(0.541 0.281 293.009)",
  "violet-700": "oklch(0.491 0.27 292.581)",
  "violet-800": "oklch(0.432 0.232 292.759)",
  "violet-900": "oklch(0.38 0.189 293.745)",
  "violet-950": "oklch(0.283 0.141 291.089)",
  // ─── purple ───────────────────────────────────────────────────────────────
  "purple-50": "oklch(0.977 0.014 308.299)",
  "purple-100": "oklch(0.946 0.033 307.174)",
  "purple-200": "oklch(0.902 0.063 306.703)",
  "purple-300": "oklch(0.827 0.119 306.383)",
  "purple-400": "oklch(0.714 0.203 305.504)",
  "purple-500": "oklch(0.627 0.265 303.9)",
  "purple-600": "oklch(0.558 0.288 302.321)",
  "purple-700": "oklch(0.496 0.265 301.924)",
  "purple-800": "oklch(0.438 0.218 303.724)",
  "purple-900": "oklch(0.381 0.176 304.987)",
  "purple-950": "oklch(0.291 0.149 302.717)",
  // ─── fuchsia ──────────────────────────────────────────────────────────────
  "fuchsia-50": "oklch(0.977 0.017 320.058)",
  "fuchsia-100": "oklch(0.952 0.037 318.852)",
  "fuchsia-200": "oklch(0.903 0.076 319.62)",
  "fuchsia-300": "oklch(0.833 0.145 321.434)",
  "fuchsia-400": "oklch(0.74 0.238 322.16)",
  "fuchsia-500": "oklch(0.667 0.295 322.15)",
  "fuchsia-600": "oklch(0.591 0.293 322.896)",
  "fuchsia-700": "oklch(0.518 0.253 323.949)",
  "fuchsia-800": "oklch(0.452 0.211 324.591)",
  "fuchsia-900": "oklch(0.401 0.17 325.612)",
  "fuchsia-950": "oklch(0.293 0.136 325.661)",
  // ─── pink ─────────────────────────────────────────────────────────────────
  "pink-50": "oklch(0.971 0.014 343.198)",
  "pink-100": "oklch(0.948 0.028 342.258)",
  "pink-200": "oklch(0.899 0.061 343.231)",
  "pink-300": "oklch(0.823 0.12 346.018)",
  "pink-400": "oklch(0.718 0.202 349.761)",
  "pink-500": "oklch(0.656 0.241 354.308)",
  "pink-600": "oklch(0.592 0.249 0.584)",
  "pink-700": "oklch(0.525 0.223 3.958)",
  "pink-800": "oklch(0.459 0.187 3.815)",
  "pink-900": "oklch(0.408 0.153 2.432)",
  "pink-950": "oklch(0.284 0.109 3.907)",
  // ─── rose ─────────────────────────────────────────────────────────────────
  "rose-50": "oklch(0.969 0.015 12.422)",
  "rose-100": "oklch(0.941 0.03 12.58)",
  "rose-200": "oklch(0.892 0.058 10.001)",
  "rose-300": "oklch(0.81 0.117 11.638)",
  "rose-400": "oklch(0.712 0.194 13.428)",
  "rose-500": "oklch(0.645 0.246 16.439)",
  "rose-600": "oklch(0.586 0.253 17.585)",
  "rose-700": "oklch(0.514 0.222 16.935)",
  "rose-800": "oklch(0.455 0.188 13.697)",
  "rose-900": "oklch(0.41 0.159 10.272)",
  "rose-950": "oklch(0.271 0.105 12.094)"
};
function resolveColor(token2) {
  if (token2 in TAILWIND_COLORS) {
    return TAILWIND_COLORS[token2];
  }
  return token2;
}

// src/generate.ts
var TOKEN_TO_CSS_VAR = {
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  popover: "--popover",
  popoverForeground: "--popover-foreground",
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  secondary: "--secondary",
  secondaryForeground: "--secondary-foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  destructive: "--destructive",
  destructiveForeground: "--destructive-foreground",
  border: "--border",
  input: "--input",
  ring: "--ring"
};
var TOKEN_KEYS = Object.keys(TOKEN_TO_CSS_VAR);
function generateThemeVariables(tokens) {
  const result = {};
  for (const key of TOKEN_KEYS) {
    result[TOKEN_TO_CSS_VAR[key]] = resolveColor(tokens[key]);
  }
  return result;
}

// src/react/ThemeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeContext = (0, import_react.createContext)(null);
var DEFAULT_PERSIST_KEY = "tailtheme";
function resolveTheme(themeOrName, themes) {
  if (typeof themeOrName === "string") {
    return themes.find((t) => t.name === themeOrName);
  }
  return themeOrName;
}
function ThemeProvider({
  children,
  themes,
  defaultTheme,
  defaultMode = "system",
  persistKey = DEFAULT_PERSIST_KEY,
  target
}) {
  const [theme, setThemeState] = (0, import_react.useState)(() => {
    if (persistKey && typeof window !== "undefined") {
      const stored = window.localStorage.getItem(`${persistKey}-theme`);
      if (stored) {
        const found = resolveTheme(stored, themes);
        if (found) return found;
      }
    }
    if (defaultTheme) {
      const found = resolveTheme(defaultTheme, themes);
      if (found) return found;
    }
    return themes[0];
  });
  const [mode, setModeState] = (0, import_react.useState)(() => {
    if (persistKey && typeof window !== "undefined") {
      const stored = window.localStorage.getItem(`${persistKey}-mode`);
      if (stored && ["light", "dark", "system"].includes(stored)) return stored;
    }
    return defaultMode;
  });
  const [systemMode, setSystemMode] = (0, import_react.useState)("light");
  const appliedThemeRef = (0, import_react.useRef)("");
  (0, import_react.useEffect)(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemMode(mq.matches ? "dark" : "light");
    const handler = (e) => setSystemMode(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  const resolvedMode = mode === "system" ? systemMode : mode;
  (0, import_react.useEffect)(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    const tokens = resolvedMode === "dark" ? theme.dark : theme.light;
    const vars = generateThemeVariables(tokens);
    for (const [prop, value2] of Object.entries(vars)) {
      root.style.setProperty(prop, value2);
    }
    root.style.setProperty("--radius", theme.radius ?? "0.5rem");
    if (theme.fonts?.sans) root.style.setProperty("--font-sans", theme.fonts.sans);
    if (theme.fonts?.serif) root.style.setProperty("--font-serif", theme.fonts.serif);
    if (theme.fonts?.mono) root.style.setProperty("--font-mono", theme.fonts.mono);
    if (resolvedMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    appliedThemeRef.current = `${theme.name}-${resolvedMode}`;
  }, [theme, resolvedMode]);
  const setTheme = (0, import_react.useCallback)((themeOrName) => {
    const found = typeof themeOrName === "string" ? resolveTheme(themeOrName, themes) ?? theme : themeOrName;
    setThemeState(found);
    if (persistKey && typeof window !== "undefined") {
      window.localStorage.setItem(`${persistKey}-theme`, found.name);
    }
  }, [themes, theme, persistKey]);
  const setMode = (0, import_react.useCallback)((newMode) => {
    setModeState(newMode);
    if (persistKey && typeof window !== "undefined") {
      window.localStorage.setItem(`${persistKey}-mode`, newMode);
    }
  }, [persistKey]);
  const value = (0, import_react.useMemo)(() => ({
    theme,
    setTheme,
    mode,
    setMode,
    resolvedMode,
    availableThemes: themes
  }), [theme, setTheme, mode, setMode, resolvedMode, themes]);
  const ssrStyle = (0, import_react.useMemo)(() => {
    const tokens = resolvedMode === "dark" ? theme.dark : theme.light;
    const vars = generateThemeVariables(tokens);
    const lines = Object.entries(vars).map(([p, v]) => `${p}:${v}`);
    lines.push(`--radius:${theme.radius ?? "0.5rem"}`);
    return lines.join(";");
  }, [theme, resolvedMode]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeContext.Provider, { value, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `:root{${ssrStyle}}${resolvedMode === "dark" ? "\n.dark{" + Object.entries(generateThemeVariables(theme.dark)).map(([p, v]) => `${p}:${v}`).join(";") + "}" : ""}`
        }
      }
    ),
    children
  ] });
}

// src/react/useTheme.ts
var import_react2 = require("react");
function useTheme() {
  const ctx = (0, import_react2.useContext)(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

// src/react/ThemePicker.tsx
var import_react3 = require("react");

// src/factory.ts
var LIGHT_PRIMARY_SHADE = 600;
var DARK_PRIMARY_SHADE = 400;
function token(color, shade) {
  return `${color}-${shade}`;
}
function buildLightTokens(primary, neutral, overrides) {
  const base = {
    background: token(neutral, 50),
    foreground: token(neutral, 950),
    card: token(neutral, 100),
    cardForeground: token(neutral, 950),
    popover: token(neutral, 50),
    popoverForeground: token(neutral, 950),
    primary: token(primary, LIGHT_PRIMARY_SHADE),
    primaryForeground: "white",
    secondary: token(neutral, 200),
    secondaryForeground: token(neutral, 800),
    muted: token(neutral, 100),
    mutedForeground: token(neutral, 500),
    accent: token(neutral, 200),
    accentForeground: token(neutral, 800),
    destructive: "red-600",
    destructiveForeground: "white",
    border: token(neutral, 200),
    input: token(neutral, 200),
    ring: token(primary, LIGHT_PRIMARY_SHADE)
  };
  return overrides ? { ...base, ...overrides } : base;
}
function buildDarkTokens(primary, neutral, overrides) {
  const base = {
    background: token(neutral, 950),
    foreground: token(neutral, 50),
    card: token(neutral, 900),
    cardForeground: token(neutral, 50),
    popover: token(neutral, 950),
    popoverForeground: token(neutral, 50),
    primary: token(primary, DARK_PRIMARY_SHADE),
    primaryForeground: token(neutral, 950),
    secondary: token(neutral, 800),
    secondaryForeground: token(neutral, 200),
    muted: token(neutral, 800),
    mutedForeground: token(neutral, 400),
    accent: token(neutral, 800),
    accentForeground: token(neutral, 200),
    destructive: "red-400",
    destructiveForeground: token(neutral, 950),
    border: token(neutral, 800),
    input: token(neutral, 800),
    ring: token(primary, DARK_PRIMARY_SHADE)
  };
  return overrides ? { ...base, ...overrides } : base;
}
function createTheme(config) {
  const { name, label, primary, neutral, radius, fonts, pattern, overrides } = config;
  return {
    name,
    label,
    light: buildLightTokens(primary, neutral, overrides?.light),
    dark: buildDarkTokens(primary, neutral, overrides?.dark),
    fonts,
    pattern,
    radius: radius ?? "0.5rem",
    _generatorConfig: { primary, neutral, radius }
  };
}

// src/fonts.ts
var FONTS = {
  // ─── System fonts ─────────────────────────────────────────────────────────
  SYSTEM_SANS: "system-ui, -apple-system, sans-serif",
  SYSTEM_SERIF: "Georgia, 'Times New Roman', serif",
  SYSTEM_MONO: "ui-monospace, 'Courier New', monospace",
  // ─── Sans-serif Google Fonts ───────────────────────────────────────────────
  INTER: "'Inter', system-ui, sans-serif",
  GEIST: "'Geist', system-ui, sans-serif",
  PLUS_JAKARTA: "'Plus Jakarta Sans', system-ui, sans-serif",
  NUNITO: "'Nunito', system-ui, sans-serif",
  POPPINS: "'Poppins', system-ui, sans-serif",
  OUTFIT: "'Outfit', system-ui, sans-serif",
  DM_SANS: "'DM Sans', system-ui, sans-serif",
  MANROPE: "'Manrope', system-ui, sans-serif",
  // ─── Serif Google Fonts ────────────────────────────────────────────────────
  PLAYFAIR: "'Playfair Display', Georgia, serif",
  LORA: "'Lora', Georgia, serif",
  MERRIWEATHER: "'Merriweather', Georgia, serif",
  DM_SERIF: "'DM Serif Display', Georgia, serif",
  // ─── Monospace Google Fonts ────────────────────────────────────────────────
  JETBRAINS_MONO: "'JetBrains Mono', monospace",
  FIRA_CODE: "'Fira Code', monospace",
  IBM_PLEX_MONO: "'IBM Plex Mono', monospace"
};

// src/react/ThemePicker.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var TAILWIND_COLORS2 = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
];
var NEUTRAL_COLORS = ["slate", "gray", "zinc", "neutral", "stone"];
var PATTERN_TYPES = [
  "none",
  "dots",
  "grid",
  "cross",
  "diagonal-lines",
  "horizontal-lines",
  "vertical-lines",
  "zigzag",
  "checkerboard",
  "triangles"
];
var RADIUS_PRESETS = [
  { label: "None", value: "0rem" },
  { label: "SM", value: "0.25rem" },
  { label: "MD", value: "0.5rem" },
  { label: "LG", value: "0.75rem" },
  { label: "XL", value: "1rem" },
  { label: "Full", value: "9999px" }
];
var FONT_OPTIONS = Object.entries(FONTS).map(([key, value]) => ({
  label: key.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()),
  value
}));
function getSwatchColors(theme) {
  const bg = resolveColor(theme.light.background);
  const pri = resolveColor(theme.light.primary);
  const sec = resolveColor(theme.light.secondary);
  return [bg, pri, sec];
}
function ThemeSwatch({ theme, selected, onClick }) {
  const [bg, pri, sec] = getSwatchColors(theme);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      onClick,
      title: theme.label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "3px",
        padding: "6px 10px",
        borderRadius: "8px",
        border: selected ? "2px solid currentColor" : "2px solid transparent",
        background: "transparent",
        cursor: "pointer",
        outline: "none"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { width: 12, height: 12, borderRadius: "50%", background: bg, border: "1px solid rgba(0,0,0,0.1)", display: "inline-block" } }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { width: 12, height: 12, borderRadius: "50%", background: pri, display: "inline-block" } }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { width: 12, height: 12, borderRadius: "50%", background: sec, display: "inline-block" } }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { marginLeft: 4, fontSize: 12 }, children: theme.label })
      ]
    }
  );
}
function ThemePicker({
  themes,
  value,
  onChange,
  allowCustom = false,
  sections = ["colors", "fonts", "patterns", "radius"],
  className
}) {
  const [tab, setTab] = (0, import_react3.useState)("presets");
  const [customPrimary, setCustomPrimary] = (0, import_react3.useState)("blue");
  const [customNeutral, setCustomNeutral] = (0, import_react3.useState)("slate");
  const [customRadius, setCustomRadius] = (0, import_react3.useState)("0.5rem");
  const [customFonts, setCustomFonts] = (0, import_react3.useState)({});
  const [customPattern, setCustomPattern] = (0, import_react3.useState)({ type: "none" });
  const builtinThemes = themes.filter(
    (t) => !t.name.includes("-") || ["ocean", "forest", "sunset", "midnight", "candy"].some((n) => t.name === n)
  );
  const handleCustomApply = () => {
    const theme = createTheme({
      name: `custom-${customPrimary}-${customNeutral}`,
      label: `Custom (${customPrimary})`,
      primary: customPrimary,
      neutral: customNeutral,
      radius: customRadius,
      fonts: Object.keys(customFonts).length > 0 ? customFonts : void 0,
      pattern: customPattern.type !== "none" ? customPattern : void 0
    });
    onChange(theme);
  };
  const containerStyle = {
    fontFamily: "system-ui, sans-serif",
    fontSize: 14,
    maxWidth: 480
  };
  const tabBarStyle = {
    display: "flex",
    gap: 4,
    marginBottom: 12,
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    paddingBottom: 8
  };
  const tabBtnStyle = (active) => ({
    padding: "4px 12px",
    border: "none",
    background: active ? "rgba(0,0,0,0.08)" : "transparent",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: active ? 600 : 400
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className, style: containerStyle, children: [
    allowCustom && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: tabBarStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { style: tabBtnStyle(tab === "presets"), onClick: () => setTab("presets"), children: "Presets" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { style: tabBtnStyle(tab === "custom"), onClick: () => setTab("custom"), children: "Custom" })
    ] }),
    tab === "presets" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: 2 }, children: themes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ThemeSwatch,
      {
        theme: t,
        selected: t.name === value.name,
        onClick: () => onChange(t)
      },
      t.name
    )) }) }),
    tab === "custom" && allowCustom && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
      sections.includes("colors") && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { style: { margin: "0 0 8px", fontSize: 13, fontWeight: 600, opacity: 0.7 }, children: "Primary Color" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: TAILWIND_COLORS2.map((color) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            onClick: () => setCustomPrimary(color),
            title: color,
            style: {
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: customPrimary === color ? "3px solid black" : "2px solid transparent",
              background: resolveColor(`${color}-500`),
              cursor: "pointer",
              outline: "none"
            }
          },
          color
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { style: { margin: "12px 0 8px", fontSize: 13, fontWeight: 600, opacity: 0.7 }, children: "Neutral Base" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: NEUTRAL_COLORS.map((color) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            onClick: () => setCustomNeutral(color),
            style: {
              padding: "4px 10px",
              borderRadius: 6,
              border: customNeutral === color ? "2px solid black" : "1px solid rgba(0,0,0,0.15)",
              background: resolveColor(`${color}-100`),
              cursor: "pointer",
              fontSize: 12
            },
            children: color
          },
          color
        )) })
      ] }),
      sections.includes("fonts") && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { style: { margin: "0 0 8px", fontSize: 13, fontWeight: 600, opacity: 0.7 }, children: "Fonts" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: ["sans", "serif", "mono"].map((fontType) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { width: 40, fontSize: 12, opacity: 0.7 }, children: fontType }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "select",
            {
              value: customFonts[fontType] ?? "",
              onChange: (e) => setCustomFonts((f) => ({ ...f, [fontType]: e.target.value || void 0 })),
              style: { flex: 1, padding: "4px 8px", borderRadius: 4, border: "1px solid rgba(0,0,0,0.15)", fontSize: 12 },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "System default" }),
                FONT_OPTIONS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: f.value, children: f.label }, f.value))
              ]
            }
          )
        ] }, fontType)) })
      ] }),
      sections.includes("patterns") && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { style: { margin: "0 0 8px", fontSize: 13, fontWeight: 600, opacity: 0.7 }, children: "Pattern" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 }, children: PATTERN_TYPES.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            onClick: () => setCustomPattern({ type: pt }),
            style: {
              padding: "4px 10px",
              borderRadius: 6,
              border: customPattern.type === pt ? "2px solid black" : "1px solid rgba(0,0,0,0.15)",
              background: "transparent",
              cursor: "pointer",
              fontSize: 11
            },
            children: pt
          },
          pt
        )) })
      ] }),
      sections.includes("radius") && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { style: { margin: "0 0 8px", fontSize: 13, fontWeight: 600, opacity: 0.7 }, children: "Border Radius" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", gap: 6 }, children: RADIUS_PRESETS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            onClick: () => setCustomRadius(r.value),
            style: {
              padding: "4px 10px",
              borderRadius: r.value === "9999px" ? 9999 : parseInt(r.value) * 8,
              border: customRadius === r.value ? "2px solid black" : "1px solid rgba(0,0,0,0.15)",
              background: "transparent",
              cursor: "pointer",
              fontSize: 12
            },
            children: r.label
          },
          r.value
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          onClick: handleCustomApply,
          style: {
            padding: "8px 16px",
            borderRadius: 8,
            border: "none",
            background: "black",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14
          },
          children: "Apply Custom Theme"
        }
      )
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeContext,
  ThemePicker,
  ThemeProvider,
  useTheme
});
//# sourceMappingURL=react.cjs.map