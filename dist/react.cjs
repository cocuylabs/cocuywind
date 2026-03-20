"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/react/index.ts
var react_exports = {};
__export(react_exports, {
  Button: () => Button,
  Input: () => Input,
  Label: () => Label,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  ThemeBackgroundImagePicker: () => ThemeBackgroundImagePicker,
  ThemeContext: () => ThemeContext,
  ThemeCustomPalettePicker: () => ThemeCustomPalettePicker,
  ThemeFontsPicker: () => ThemeFontsPicker,
  ThemePalettePicker: () => ThemePalettePicker,
  ThemePatternsPicker: () => ThemePatternsPicker,
  ThemePicker: () => ThemePicker,
  ThemeProvider: () => ThemeProvider,
  ThemeRadiusPicker: () => ThemeRadiusPicker,
  cn: () => cn,
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

// src/patterns.ts
var SIZE_MAP = {
  sm: { dots: 12, grid: 16, lines: 16, cross: 16, zigzag: 14, checker: 12, tri: 12, hex: 24 },
  md: { dots: 20, grid: 24, lines: 24, cross: 24, zigzag: 20, checker: 20, tri: 20, hex: 36 },
  lg: { dots: 32, grid: 40, lines: 40, cross: 40, zigzag: 30, checker: 32, tri: 32, hex: 56 }
};
function getSize(s, key) {
  return SIZE_MAP[s ?? "md"][key];
}
function generatePattern(config) {
  const size = config.size ?? "md";
  const opacity = config.opacity ?? 0.12;
  const color = config.color ? resolveColor(config.color) : "var(--foreground)";
  const colorWithOpacity = wrapWithOpacity(color, opacity);
  switch (config.type) {
    case "none":
      return { backgroundImage: "none", backgroundSize: "auto" };
    case "dots": {
      const s = getSize(size, "dots");
      return {
        backgroundImage: `radial-gradient(${colorWithOpacity} 1.5px, transparent 1.5px)`,
        backgroundSize: `${s}px ${s}px`
      };
    }
    case "grid": {
      const s = getSize(size, "grid");
      return {
        backgroundImage: [
          `linear-gradient(${colorWithOpacity} 1px, transparent 1px)`,
          `linear-gradient(to right, ${colorWithOpacity} 1px, transparent 1px)`
        ].join(", "),
        backgroundSize: `${s}px ${s}px`
      };
    }
    case "cross": {
      const s = getSize(size, "cross");
      const half = s / 2;
      const arm = Math.max(1, Math.round(s * 0.08));
      return {
        backgroundImage: [
          `linear-gradient(${colorWithOpacity} ${arm}px, transparent ${arm}px)`,
          `linear-gradient(to right, ${colorWithOpacity} ${arm}px, transparent ${arm}px)`
        ].join(", "),
        backgroundSize: `${s}px ${s}px`,
        backgroundPosition: `${half - arm / 2}px ${half - arm / 2}px, ${half - arm / 2}px ${half - arm / 2}px`
      };
    }
    case "diagonal-lines": {
      const s = getSize(size, "lines");
      return {
        backgroundImage: `repeating-linear-gradient(45deg, ${colorWithOpacity} 0, ${colorWithOpacity} 1px, transparent 0, transparent 50%)`,
        backgroundSize: `${s}px ${s}px`
      };
    }
    case "horizontal-lines": {
      const s = getSize(size, "lines");
      return {
        backgroundImage: `repeating-linear-gradient(0deg, ${colorWithOpacity} 0, ${colorWithOpacity} 1px, transparent 1px, transparent ${s}px)`,
        backgroundSize: `${s}px ${s}px`
      };
    }
    case "vertical-lines": {
      const s = getSize(size, "lines");
      return {
        backgroundImage: `repeating-linear-gradient(90deg, ${colorWithOpacity} 0, ${colorWithOpacity} 1px, transparent 1px, transparent ${s}px)`,
        backgroundSize: `${s}px ${s}px`
      };
    }
    case "zigzag": {
      const s = getSize(size, "zigzag");
      const half = s / 2;
      return {
        backgroundImage: [
          `linear-gradient(135deg, ${colorWithOpacity} 25%, transparent 25%) -${half}px 0`,
          `linear-gradient(225deg, ${colorWithOpacity} 25%, transparent 25%) -${half}px 0`,
          `linear-gradient(315deg, ${colorWithOpacity} 25%, transparent 25%)`,
          `linear-gradient(45deg,  ${colorWithOpacity} 25%, transparent 25%)`
        ].join(", "),
        backgroundSize: `${s}px ${half}px`
      };
    }
    case "checkerboard": {
      const s = getSize(size, "checker");
      return {
        backgroundImage: `conic-gradient(${colorWithOpacity} 90deg, transparent 90deg 180deg, ${colorWithOpacity} 180deg 270deg, transparent 270deg)`,
        backgroundSize: `${s}px ${s}px`
      };
    }
    case "triangles": {
      const s = getSize(size, "tri");
      const half = s / 2;
      return {
        backgroundImage: [
          `linear-gradient(120deg, ${colorWithOpacity} 33.33%, transparent 33.33%)`,
          `linear-gradient(240deg, ${colorWithOpacity} 33.33%, transparent 33.33%)`,
          `linear-gradient(0deg,   ${colorWithOpacity} 33.33%, transparent 33.33%)`
        ].join(", "),
        backgroundSize: `${s}px ${half}px`
      };
    }
    case "hexagons": {
      const s = getSize(size, "hex");
      const h = Math.round(s * 0.866);
      return {
        backgroundImage: [
          `linear-gradient(120deg, ${colorWithOpacity} 25%, transparent 25% 75%, ${colorWithOpacity} 75%)`,
          `linear-gradient(60deg,  ${colorWithOpacity} 25%, transparent 25% 75%, ${colorWithOpacity} 75%)`,
          `linear-gradient(${colorWithOpacity} 10%, transparent 10% 90%, ${colorWithOpacity} 90%)`
        ].join(", "),
        backgroundSize: `${s}px ${h}px`
      };
    }
    case "noise": {
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='200' height='200' filter='url(#n)' opacity='${opacity}'/></svg>`;
      const encoded = encodeURIComponent(svg);
      return {
        backgroundImage: `url("data:image/svg+xml,${encoded}")`,
        backgroundSize: "200px 200px"
      };
    }
    default:
      return { backgroundImage: "none", backgroundSize: "auto" };
  }
}
function wrapWithOpacity(color, opacity) {
  const pct = Math.round(opacity * 100);
  return `color-mix(in oklch, ${color} ${pct}%, transparent)`;
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

// src/fonts.ts
var FONTS = {
  // ─── System fonts ─────────────────────────────────────────────────────────
  SYSTEM_SANS: "system-ui, -apple-system, sans-serif",
  SYSTEM_SERIF: "Georgia, 'Times New Roman', serif",
  SYSTEM_MONO: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace",
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
  CORMORANT: "'Cormorant Garamond', Georgia, serif",
  BODONI_MODA: "'Bodoni Moda', Georgia, serif",
  CINZEL: "'Cinzel', Georgia, serif",
  FRAUNCES: "'Fraunces', Georgia, serif",
  INSTRUMENT_SERIF: "'Instrument Serif', Georgia, serif",
  // ─── Display / Edgy Google Fonts ──────────────────────────────────────────
  BEBAS_NEUE: "'Bebas Neue', system-ui, sans-serif",
  SYNE: "'Syne', system-ui, sans-serif",
  UNBOUNDED: "'Unbounded', system-ui, sans-serif",
  ARCHIVO_BLACK: "'Archivo Black', system-ui, sans-serif",
  RIGHTEOUS: "'Righteous', system-ui, sans-serif",
  // ─── More Sans-serif Google Fonts ─────────────────────────────────────────
  SPACE_GROTESK: "'Space Grotesk', system-ui, sans-serif",
  JOSEFIN_SANS: "'Josefin Sans', system-ui, sans-serif",
  RALEWAY: "'Raleway', system-ui, sans-serif",
  // ─── Monospace Google Fonts ────────────────────────────────────────────────
  JETBRAINS_MONO: "'JetBrains Mono', ui-monospace, monospace",
  FIRA_CODE: "'Fira Code', ui-monospace, monospace",
  SOURCE_CODE_PRO: "'Source Code Pro', ui-monospace, monospace",
  IBM_PLEX_MONO: "'IBM Plex Mono', ui-monospace, monospace"
};
var GOOGLE_FONT_NAMES = {
  INTER: "Inter:wght@400;500;600;700",
  GEIST: "Geist:wght@400;500;600;700",
  PLUS_JAKARTA: "Plus+Jakarta+Sans:wght@400;500;600;700",
  NUNITO: "Nunito:wght@400;500;600;700",
  POPPINS: "Poppins:wght@400;500;600;700",
  OUTFIT: "Outfit:wght@400;500;600;700",
  DM_SANS: "DM+Sans:wght@400;500;600;700",
  MANROPE: "Manrope:wght@400;500;600;700",
  PLAYFAIR: "Playfair+Display:wght@400;600;700",
  LORA: "Lora:wght@400;500;600;700",
  MERRIWEATHER: "Merriweather:wght@300;400;700",
  DM_SERIF: "DM+Serif+Display:wght@400",
  CORMORANT: "Cormorant+Garamond:wght@400;500;600;700",
  BODONI_MODA: "Bodoni+Moda:opsz,wght@6..96,400;6..96,700",
  CINZEL: "Cinzel:wght@400;600;700",
  FRAUNCES: "Fraunces:opsz,wght@9..144,300;9..144,400;9..144,700",
  INSTRUMENT_SERIF: "Instrument+Serif:ital,wght@0,400;1,400",
  BEBAS_NEUE: "Bebas+Neue:wght@400",
  SYNE: "Syne:wght@400;600;700;800",
  UNBOUNDED: "Unbounded:wght@400;500;600;700",
  ARCHIVO_BLACK: "Archivo+Black:wght@400",
  RIGHTEOUS: "Righteous:wght@400",
  SPACE_GROTESK: "Space+Grotesk:wght@400;500;600;700",
  JOSEFIN_SANS: "Josefin+Sans:wght@400;600;700",
  RALEWAY: "Raleway:wght@400;500;600;700",
  JETBRAINS_MONO: "JetBrains+Mono:wght@400;500;700",
  FIRA_CODE: "Fira+Code:wght@400;500;700",
  SOURCE_CODE_PRO: "Source+Code+Pro:wght@400;500;700",
  IBM_PLEX_MONO: "IBM+Plex+Mono:wght@400;500;700"
};
function googleFontsUrl(families) {
  const fontKeys = Object.keys(GOOGLE_FONT_NAMES);
  const params = [];
  for (const family of families) {
    const matchedKey = fontKeys.find((k) => FONTS[k] === family);
    if (matchedKey && GOOGLE_FONT_NAMES[matchedKey]) {
      params.push(`family=${GOOGLE_FONT_NAMES[matchedKey]}`);
    } else {
      const match = family.match(/['"]([^'"]+)['"]/);
      if (match) {
        const name = match[1].replace(/\s+/g, "+");
        params.push(`family=${name}:wght@400;700`);
      }
    }
  }
  if (params.length === 0) return "";
  return `https://fonts.googleapis.com/css2?${params.join("&")}&display=swap`;
}

// src/react/ThemeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeContext = (0, import_react.createContext)(null);
var DEFAULT_PERSIST_KEY = "cocuywind";
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
  persistKey = DEFAULT_PERSIST_KEY
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
    if (theme.fonts?.body) root.style.setProperty("--font-body", theme.fonts.body);
    else root.style.removeProperty("--font-body");
    if (theme.fonts?.heading) root.style.setProperty("--font-heading", theme.fonts.heading);
    else root.style.removeProperty("--font-heading");
    const styleId = "cocuywind-font-rules";
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    const bodyRule = theme.fonts?.body ? `body,  :root { font-family: var(--font-body); }` : "";
    const headingRule = theme.fonts?.heading ? `h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }` : "";
    styleEl.textContent = [bodyRule, headingRule].filter(Boolean).join("\n");
    const linkId = "cocuywind-gfonts";
    const families = [theme.fonts?.body, theme.fonts?.heading].filter((f) => !!f);
    const gfontsUrl = families.length > 0 ? googleFontsUrl(families) : "";
    let linkEl = document.getElementById(linkId);
    if (gfontsUrl) {
      if (!linkEl) {
        linkEl = document.createElement("link");
        linkEl.id = linkId;
        linkEl.rel = "stylesheet";
        document.head.appendChild(linkEl);
      }
      if (linkEl.href !== gfontsUrl) linkEl.href = gfontsUrl;
    } else if (linkEl) {
      linkEl.remove();
    }
    root.style.setProperty("--bg-image", theme.backgroundImage ?? "none");
    if (theme.pattern && theme.pattern.type !== "none") {
      const ps = generatePattern(theme.pattern);
      root.style.setProperty("--pattern-image", ps.backgroundImage);
      root.style.setProperty("--pattern-size", ps.backgroundSize);
      if (ps.backgroundPosition) root.style.setProperty("--pattern-position", ps.backgroundPosition);
      else root.style.removeProperty("--pattern-position");
    } else {
      root.style.setProperty("--pattern-image", "none");
      root.style.setProperty("--pattern-size", "auto");
      root.style.removeProperty("--pattern-position");
    }
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

// src/react/ui/button.tsx
var React2 = __toESM(require("react"), 1);

// src/react/ui/utils.ts
function cn(...inputs) {
  const classes = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string") {
      classes.push(input);
      continue;
    }
    for (const [key, value] of Object.entries(input)) {
      if (value) classes.push(key);
    }
  }
  return classes.join(" ");
}

// src/react/ui/button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var base = "inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background";
var variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
};
var sizes = {
  xs: "h-7 px-2",
  sm: "h-8 px-3",
  md: "h-9 px-4",
  icon: "h-9 w-9"
};
var Button = React2.forwardRef(
  ({ className, variant = "default", size = "sm", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      ref,
      className: cn(base, variants[variant], sizes[size], className),
      ...props
    }
  )
);
Button.displayName = "Button";

// src/react/theme-picker-constants.ts
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
  "triangles",
  "hexagons",
  "noise"
];
var PATTERN_LABELS = {
  "none": "None",
  "dots": "Dots",
  "grid": "Grid",
  "cross": "Cross",
  "diagonal-lines": "Diagonal",
  "horizontal-lines": "H-Lines",
  "vertical-lines": "V-Lines",
  "zigzag": "Zigzag",
  "checkerboard": "Checker",
  "triangles": "Triangles",
  "hexagons": "Hexagons",
  "noise": "Noise"
};
var PATTERN_OPACITY_PRESETS = [
  { label: "Subtle", value: 0.06 },
  { label: "Normal", value: 0.12 },
  { label: "Bold", value: 0.25 }
];
var RADIUS_PRESETS = [
  { label: "None", value: "0rem" },
  { label: "SM", value: "0.25rem" },
  { label: "MD", value: "0.5rem" },
  { label: "LG", value: "0.75rem" },
  { label: "XL", value: "1rem" },
  { label: "Full", value: "9999px" }
];
var FONT_GROUPS = [
  {
    label: "System",
    options: [
      { label: "System default (sans-serif)", value: FONTS.SYSTEM_SANS },
      { label: "System serif", value: FONTS.SYSTEM_SERIF }
    ]
  },
  {
    label: "Sans-serif",
    options: [
      { label: "Inter", value: FONTS.INTER },
      { label: "Geist", value: FONTS.GEIST },
      { label: "Plus Jakarta Sans", value: FONTS.PLUS_JAKARTA },
      { label: "Space Grotesk", value: FONTS.SPACE_GROTESK },
      { label: "Josefin Sans", value: FONTS.JOSEFIN_SANS },
      { label: "Raleway", value: FONTS.RALEWAY },
      { label: "Nunito", value: FONTS.NUNITO },
      { label: "Poppins", value: FONTS.POPPINS },
      { label: "Outfit", value: FONTS.OUTFIT },
      { label: "DM Sans", value: FONTS.DM_SANS },
      { label: "Manrope", value: FONTS.MANROPE }
    ]
  },
  {
    label: "Serif",
    options: [
      { label: "Cormorant Garamond", value: FONTS.CORMORANT },
      { label: "Bodoni Moda", value: FONTS.BODONI_MODA },
      { label: "Cinzel", value: FONTS.CINZEL },
      { label: "Fraunces", value: FONTS.FRAUNCES },
      { label: "Instrument Serif", value: FONTS.INSTRUMENT_SERIF },
      { label: "Playfair Display", value: FONTS.PLAYFAIR },
      { label: "Lora", value: FONTS.LORA },
      { label: "Merriweather", value: FONTS.MERRIWEATHER },
      { label: "DM Serif Display", value: FONTS.DM_SERIF }
    ]
  },
  {
    label: "Display",
    options: [
      { label: "Bebas Neue", value: FONTS.BEBAS_NEUE },
      { label: "Syne", value: FONTS.SYNE },
      { label: "Unbounded", value: FONTS.UNBOUNDED },
      { label: "Archivo Black", value: FONTS.ARCHIVO_BLACK },
      { label: "Righteous", value: FONTS.RIGHTEOUS }
    ]
  }
];

// src/react/theme-picker-labels.ts
var DEFAULT_LABELS = {
  en: {
    "ui.primary": "Primary",
    "ui.secondary": "Secondary",
    "ui.neutralBase": "Neutral base",
    "ui.auto": "Auto",
    "ui.usingPreset": "Using preset",
    "ui.autoFromPrimary": "Auto from primary",
    "ui.primaryFamily": "Primary family",
    "ui.surfacesSuffix": "surfaces",
    "ui.pattern": "Pattern",
    "ui.pattern.none": "No pattern",
    "ui.pattern.size": "Size",
    "ui.pattern.density": "Density",
    "ui.backgroundImage": "Background Image",
    "ui.backgroundPlaceholder": "https://\u2026 or url('\u2026') or gradient CSS",
    "ui.clear": "Clear",
    "ui.patternOverlayHint": "Pattern always overlays on top of background image.",
    "ui.overrideOnPreset": "overrides on preset",
    "ui.font.body": "body",
    "ui.font.heading": "heading",
    "ui.font.sameAsBody": "Same as body",
    "ui.font.systemDefault": "System default",
    "ui.font.systemDefaultSans": "System default (sans-serif)",
    "ui.font.systemSerif": "System serif",
    "ui.size.sm": "SM",
    "ui.size.md": "MD",
    "ui.size.lg": "LG",
    "ui.opacity.subtle": "Subtle",
    "ui.opacity.normal": "Normal",
    "ui.opacity.bold": "Bold",
    "ui.neutral.none": "None",
    "ui.filter.all": "All",
    "ui.filter.curated": "Featured",
    "ui.filter.basic": "Basic",
    "ui.filter.claude": "Studio",
    "ui.filter.tweakcn": "Signature",
    "ui.filter.community": "Community"
  },
  es: {
    "ui.primary": "Primario",
    "ui.secondary": "Secundario",
    "ui.neutralBase": "Base neutral",
    "ui.auto": "Auto",
    "ui.usingPreset": "Usando preset",
    "ui.autoFromPrimary": "Auto desde primario",
    "ui.primaryFamily": "Familia primaria",
    "ui.surfacesSuffix": "superficies",
    "ui.pattern": "Patr\xF3n",
    "ui.pattern.none": "Sin patr\xF3n",
    "ui.pattern.size": "Tama\xF1o",
    "ui.pattern.density": "Densidad",
    "ui.backgroundImage": "Imagen de fondo",
    "ui.backgroundPlaceholder": "https://\u2026 o url('\u2026') o CSS de gradiente",
    "ui.clear": "Borrar",
    "ui.patternOverlayHint": "El patr\xF3n siempre se superpone a la imagen de fondo.",
    "ui.overrideOnPreset": "sobrescribe el preset",
    "ui.font.body": "cuerpo",
    "ui.font.heading": "t\xEDtulos",
    "ui.font.sameAsBody": "Igual que cuerpo",
    "ui.font.systemDefault": "Por defecto del sistema",
    "ui.font.systemDefaultSans": "Por defecto del sistema (sans-serif)",
    "ui.font.systemSerif": "Serif del sistema",
    "ui.size.sm": "SM",
    "ui.size.md": "MD",
    "ui.size.lg": "LG",
    "ui.opacity.subtle": "Sutil",
    "ui.opacity.normal": "Normal",
    "ui.opacity.bold": "Fuerte",
    "ui.neutral.none": "Ninguno",
    "ui.filter.all": "Todos",
    "ui.filter.curated": "Destacados",
    "ui.filter.basic": "B\xE1sicos",
    "ui.filter.claude": "Studio",
    "ui.filter.tweakcn": "Signature",
    "ui.filter.community": "Comunidad"
  },
  pt: {
    "ui.primary": "Prim\xE1rio",
    "ui.secondary": "Secund\xE1rio",
    "ui.neutralBase": "Base neutra",
    "ui.auto": "Auto",
    "ui.usingPreset": "Usando preset",
    "ui.autoFromPrimary": "Auto do prim\xE1rio",
    "ui.primaryFamily": "Fam\xEDlia prim\xE1ria",
    "ui.surfacesSuffix": "superf\xEDcies",
    "ui.pattern": "Padr\xE3o",
    "ui.pattern.none": "Sem padr\xE3o",
    "ui.pattern.size": "Tamanho",
    "ui.pattern.density": "Densidade",
    "ui.backgroundImage": "Imagem de fundo",
    "ui.backgroundPlaceholder": "https://\u2026 ou url('\u2026') ou CSS de gradiente",
    "ui.clear": "Limpar",
    "ui.patternOverlayHint": "O padr\xE3o sempre sobrep\xF5e a imagem de fundo.",
    "ui.overrideOnPreset": "sobrescreve o preset",
    "ui.font.body": "corpo",
    "ui.font.heading": "t\xEDtulos",
    "ui.font.sameAsBody": "Igual ao corpo",
    "ui.font.systemDefault": "Sistema padr\xE3o",
    "ui.font.systemDefaultSans": "Sistema padr\xE3o (sans-serif)",
    "ui.font.systemSerif": "Sistema serif",
    "ui.size.sm": "SM",
    "ui.size.md": "MD",
    "ui.size.lg": "LG",
    "ui.opacity.subtle": "Suave",
    "ui.opacity.normal": "Normal",
    "ui.opacity.bold": "Forte",
    "ui.neutral.none": "Nenhum",
    "ui.filter.all": "Todos",
    "ui.filter.curated": "Destaques",
    "ui.filter.basic": "B\xE1sicos",
    "ui.filter.claude": "Studio",
    "ui.filter.tweakcn": "Signature",
    "ui.filter.community": "Comunidade"
  }
};
function translate(labels, locale, key, fallback) {
  const lang = locale === "es" || locale === "pt" || locale === "en" ? locale : "en";
  return labels?.[lang]?.[key] ?? DEFAULT_LABELS[lang][key] ?? fallback;
}

// src/react/ThemePalettePickers.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function getSwatchColors(theme, mode = "light") {
  const t = mode === "dark" ? theme.dark : theme.light;
  return [resolveColor(t.background), resolveColor(t.primary), resolveColor(t.secondary)];
}
function ThemeSwatch({ theme, selected, onClick, previewMode = "light", labelOverride, swatchSize = 12 }) {
  const [bg, pri, sec] = getSwatchColors(theme, previewMode);
  const label = labelOverride ?? theme.label;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "button",
    {
      onClick,
      title: label,
      className: cn(
        "flex w-full items-center rounded-md border px-3 py-2 text-left text-sm transition-colors",
        selected ? "border-ring bg-accent text-accent-foreground" : "border-border hover:bg-muted/50"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "flex shrink-0 pr-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "span",
            {
              className: "inline-block border border-border rounded-l-full",
              style: { backgroundColor: bg, width: swatchSize, height: swatchSize * 1.2 }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "span",
            {
              className: "inline-block border border-border border-r-0 border-l-0",
              style: { backgroundColor: pri, width: swatchSize * 0.9, height: swatchSize * 1.2 }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "span",
            {
              className: "inline-block border border-border rounded-r-full",
              style: { backgroundColor: sec, width: swatchSize, height: swatchSize * 1.2 }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "truncate", children: label })
      ]
    }
  );
}
function ThemePalettePicker({
  themes,
  value,
  onChange,
  labels,
  locale = "en",
  paletteMaxHeight,
  previewMode = "light",
  className,
  swatchSize
}) {
  if (themes.length === 0) return null;
  const lang = locale === "es" || locale === "pt" || locale === "en" ? locale : "en";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className, style: paletteMaxHeight ? { maxHeight: paletteMaxHeight, overflowY: "auto" } : void 0, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid grid-cols-2 gap-2", children: themes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    ThemeSwatch,
    {
      theme: t,
      selected: t.name === value,
      onClick: () => onChange(t.name),
      labelOverride: labels?.[lang]?.[t.name],
      previewMode,
      swatchSize
    },
    t.name
  )) }) });
}
function ThemeCustomPalettePicker({
  hasPreset,
  primary,
  secondary,
  neutral,
  onPrimaryChange,
  onSecondaryChange,
  onNeutralChange,
  className,
  title,
  subtitle,
  labels,
  locale = "en"
}) {
  const t = (key, fallback) => translate(labels, locale, key, fallback);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-baseline gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground", children: title }),
      subtitle && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-[11px] text-muted-foreground/70", children: subtitle })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "text-xs font-semibold text-muted-foreground", children: t("ui.primary", "Primary") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [
        hasPreset && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: primary === null ? "secondary" : "outline", size: "xs", onClick: () => onPrimaryChange(null), children: t("ui.auto", "Auto") }),
        TAILWIND_COLORS2.map((color) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            onClick: () => onPrimaryChange(color),
            title: color,
            className: cn(
              "h-6 w-6 rounded-full border transition-colors",
              primary === color ? "border-foreground ring-2 ring-ring" : "border-border hover:border-muted-foreground"
            ),
            style: { backgroundColor: resolveColor(`${color}-500`) }
          },
          color
        ))
      ] }),
      primary === null && hasPreset && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[11px] text-muted-foreground", children: t("ui.usingPreset", "Using preset") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "text-xs font-semibold text-muted-foreground", children: t("ui.secondary", "Secondary") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [
        hasPreset ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: secondary === null ? "secondary" : "outline", size: "xs", onClick: () => onSecondaryChange(null), children: t("ui.auto", "Auto") }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            onClick: () => onSecondaryChange(null),
            title: "Auto (derived from primary)",
            className: cn(
              "h-6 w-6 rounded-full border transition-colors",
              secondary === null ? "border-foreground ring-2 ring-ring" : "border-border hover:border-muted-foreground"
            ),
            style: {
              backgroundImage: `conic-gradient(${TAILWIND_COLORS2.slice(5, 10).map((c, i) => `${resolveColor(`${c}-400`)} ${i * 72}deg ${(i + 1) * 72}deg`).join(", ")})`
            }
          }
        ),
        TAILWIND_COLORS2.map((color) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            onClick: () => onSecondaryChange(color),
            title: color,
            className: cn(
              "h-6 w-6 rounded-full border transition-colors",
              secondary === color ? "border-foreground ring-2 ring-ring" : "border-border hover:border-muted-foreground"
            ),
            style: { backgroundColor: resolveColor(`${color}-500`) }
          },
          color
        ))
      ] }),
      secondary === null && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-[11px] text-muted-foreground", children: hasPreset ? t("ui.usingPreset", "Using preset") : t("ui.autoFromPrimary", "Auto from primary") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "text-xs font-semibold text-muted-foreground", children: t("ui.neutralBase", "Neutral base") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [
        hasPreset ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: neutral === null ? "secondary" : "outline", size: "xs", onClick: () => onNeutralChange(null), children: t("ui.auto", "Auto") }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Button,
          {
            variant: neutral === null || neutral === "none" ? "secondary" : "outline",
            size: "xs",
            onClick: () => onNeutralChange("none"),
            children: t("ui.neutral.none", "none")
          }
        ),
        NEUTRAL_COLORS.map((color) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Button,
          {
            variant: neutral === color ? "secondary" : "outline",
            size: "xs",
            onClick: () => onNeutralChange(color),
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "capitalize bg-muted rounded-md px-1 py-1 text-xs", children: color })
          },
          color
        ))
      ] })
    ] })
  ] });
}

// src/react/ui/input.tsx
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "input",
    {
      type,
      ref,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-background",
        className
      ),
      ...props
    }
  )
);
Input.displayName = "Input";

// src/react/ui/label.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var Label = React4.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "label",
    {
      ref,
      className: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
      ...props
    }
  )
);
Label.displayName = "Label";

// src/react/ui/select.tsx
var React5 = __toESM(require("react"), 1);
var SelectPrimitive = __toESM(require("@radix-ui/react-select"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-background",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SelectPrimitive.Icon, { className: "ml-2 text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M5.5 7.5 10 12l4.5-4.5-1.5-1.5L10 9 7 6z" }) }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React5.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  SelectPrimitive.Content,
  {
    ref,
    position,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      SelectPrimitive.Viewport,
      {
        className: cn("p-1", position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"),
        children
      }
    )
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-xs font-semibold text-muted-foreground", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SelectPrimitive.ItemText, { children })
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SelectPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-border", className), ...props }));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/react/ThemeStylePickers.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function ThemeFontsPicker({ value, onChange, className, labels, locale = "en" }) {
  const t = (key, fallback) => translate(labels, locale, key, fallback);
  const DEFAULT = "__default__";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: cn("space-y-3", className), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "space-y-2", children: ["body", "heading"].map((fontType) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-[64px_1fr] items-center gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Label, { className: "text-xs text-muted-foreground capitalize", children: fontType === "heading" ? t("ui.font.heading", "heading") : t("ui.font.body", "body") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      Select,
      {
        value: value[fontType] ?? DEFAULT,
        onValueChange: (v) => onChange({ ...value, [fontType]: v === DEFAULT ? void 0 : v }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectValue, { placeholder: fontType === "heading" ? t("ui.font.sameAsBody", "Same as body") : t("ui.font.systemDefault", "System default") }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SelectContent, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectItem, { value: DEFAULT, children: fontType === "heading" ? t("ui.font.sameAsBody", "Same as body") : t("ui.font.systemDefault", "System default") }) }),
            FONT_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SelectGroup, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectLabel, { children: group.label }),
              group.options.map((f) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SelectItem, { value: f.value, children: f.label === "System default (sans-serif)" ? t("ui.font.systemDefaultSans", f.label) : f.label === "System serif" ? t("ui.font.systemSerif", f.label) : f.label }, f.value))
            ] }, group.label))
          ] })
        ]
      }
    )
  ] }, fontType)) }) });
}
function ThemePatternsPicker({ value, onChange, className, labels, locale = "en" }) {
  const t = (key, fallback) => translate(labels, locale, key, fallback);
  const lang = locale === "es" || locale === "pt" || locale === "en" ? locale : "en";
  const activeType = value.type;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("space-y-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: "text-sm font-semibold", children: t("ui.pattern", "Pattern") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex flex-wrap gap-2", children: PATTERN_TYPES.map((pt) => {
      const active = activeType === pt;
      const ps = pt !== "none" ? generatePattern({ type: pt, opacity: 0.18, size: "sm" }) : null;
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          onClick: () => onChange({ ...value, type: pt }),
          title: PATTERN_LABELS[pt],
          className: cn(
            "flex h-12 w-12 items-center justify-center rounded-md border bg-background text-[10px] text-muted-foreground transition-colors",
            active ? "border-foreground ring-2 ring-ring" : "border-border hover:border-muted-foreground"
          ),
          style: {
            backgroundImage: ps?.backgroundImage ?? "none",
            backgroundSize: ps?.backgroundSize ?? "auto",
            backgroundPosition: ps?.backgroundPosition ?? "center"
          },
          children: pt === "none" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: t("ui.neutral.none", "none") })
        },
        pt
      );
    }) }),
    activeType !== "none" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-16 text-xs text-muted-foreground", children: t("ui.pattern.size", "Size") }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex gap-2", children: ["sm", "md", "lg"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: (value.size ?? "md") === s ? "secondary" : "outline", size: "xs", onClick: () => onChange({ ...value, size: s }), children: s === "sm" ? t("ui.size.sm", "SM") : s === "md" ? t("ui.size.md", "MD") : t("ui.size.lg", "LG") }, s)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-16 text-xs text-muted-foreground", children: t("ui.pattern.density", "Density") }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex gap-2", children: PATTERN_OPACITY_PRESETS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Button,
          {
            variant: (value.opacity ?? 0.12) === o.value ? "secondary" : "outline",
            size: "xs",
            onClick: () => onChange({ ...value, opacity: o.value }),
            children: o.label === "Subtle" ? t("ui.opacity.subtle", o.label) : o.label === "Normal" ? t("ui.opacity.normal", o.label) : t("ui.opacity.bold", o.label)
          },
          o.label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-muted-foreground", children: activeType === "none" ? t("ui.pattern.none", "No pattern") : labels?.[lang]?.[`ui.pattern.${activeType}`] ?? PATTERN_LABELS[activeType] })
  ] });
}
function ThemeRadiusPicker({ value, onChange, className, labels, locale = "en" }) {
  const t = (key, fallback) => translate(labels, locale, key, fallback);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: cn("space-y-3", className), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex flex-wrap gap-2", children: RADIUS_PRESETS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Button,
    {
      variant: value === r.value ? "secondary" : "outline",
      size: "xs",
      onClick: () => onChange(r.value),
      children: r.label === "None" ? t("ui.neutral.none", r.label) : r.label
    },
    r.value
  )) }) });
}
function ThemeBackgroundImagePicker({ value, onChange, className, labels, locale = "en" }) {
  const t = (key, fallback) => translate(labels, locale, key, fallback);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("space-y-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: "text-sm font-semibold", children: t("ui.backgroundImage", "Background Image") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Input,
        {
          value,
          onChange: (e) => {
            const raw2 = e.target.value.trim();
            if (!raw2) {
              onChange("");
              return;
            }
            const val = /^https?:\/\/|^\//.test(raw2) && !raw2.startsWith("url(") ? `url('${raw2}')` : raw2;
            onChange(val);
          },
          placeholder: t("ui.backgroundPlaceholder", "https://\u2026 or url('\u2026') or gradient CSS"),
          className: "text-xs"
        }
      ),
      value && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "outline", size: "xs", onClick: () => onChange(""), children: t("ui.clear", "Clear") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-muted-foreground", children: t("ui.patternOverlayHint", "Pattern always overlays on top of background image.") })
  ] });
}

// src/types.ts
var raw = (value) => value;

// src/vividness.ts
var VIVIDNESS_PRESETS = {
  playful: 1.3,
  vivid: 1.15,
  default: 1,
  professional: 0.75,
  elegant: 0.5
};
var MAX_CHROMA = 0.4;
function parseOklch(value) {
  const match = value.trim().match(/^oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)$/);
  if (!match) return null;
  return { l: parseFloat(match[1]), c: parseFloat(match[2]), h: parseFloat(match[3]) };
}
function scaleChroma(cssValue, factor) {
  const parsed = parseOklch(cssValue);
  if (!parsed) return cssValue;
  const newC = Math.min(MAX_CHROMA, Math.max(0, parsed.c * factor));
  return `oklch(${parsed.l} ${parseFloat(newC.toFixed(4))} ${parsed.h})`;
}
function adjustVividness(theme, factor) {
  if (factor === 1) return theme;
  function scaleTokens(tokens) {
    const result = {};
    for (const key of Object.keys(tokens)) {
      const resolved = resolveColor(tokens[key]);
      result[key] = raw(scaleChroma(resolved, factor));
    }
    return result;
  }
  return {
    ...theme,
    light: scaleTokens(theme.light),
    dark: scaleTokens(theme.dark)
  };
}

// src/factory.ts
var LIGHT_PRIMARY_SHADE = 600;
var DARK_PRIMARY_SHADE = 400;
function token(color, shade) {
  return `${color}-${shade}`;
}
function buildLightTokens(primary, neutral, secondary, overrides) {
  const surface = neutral ?? primary;
  const base2 = {
    background: token(surface, 50),
    foreground: token(surface, 950),
    card: token(surface, 100),
    cardForeground: token(surface, 950),
    popover: token(surface, 50),
    popoverForeground: token(surface, 950),
    primary: token(primary, LIGHT_PRIMARY_SHADE),
    primaryForeground: "white",
    secondary: token(secondary ?? primary, 200),
    secondaryForeground: token(surface, 800),
    muted: token(surface, 100),
    mutedForeground: token(surface, 500),
    accent: token(secondary ?? primary, 200),
    accentForeground: token(surface, 800),
    destructive: "red-600",
    destructiveForeground: "white",
    border: token(surface, 200),
    input: token(surface, 200),
    ring: token(primary, LIGHT_PRIMARY_SHADE)
  };
  return overrides ? { ...base2, ...overrides } : base2;
}
function buildDarkTokens(primary, neutral, secondary, overrides) {
  const surface = neutral ?? primary;
  const base2 = {
    background: token(surface, 950),
    foreground: token(surface, 50),
    card: token(surface, 900),
    cardForeground: token(surface, 50),
    popover: token(surface, 950),
    popoverForeground: token(surface, 50),
    primary: token(primary, DARK_PRIMARY_SHADE),
    primaryForeground: token(primary, 950),
    // secondary at -800 (visibly lighter than card/bg) — used for price badges etc.
    secondary: token(secondary ?? primary, 800),
    secondaryForeground: token(surface, 200),
    muted: token(surface, 900),
    mutedForeground: token(surface, 400),
    accent: token(secondary ?? primary, 800),
    accentForeground: token(surface, 200),
    destructive: "red-400",
    destructiveForeground: token(primary, 950),
    border: token(surface, 800),
    input: token(surface, 800),
    ring: token(primary, DARK_PRIMARY_SHADE)
  };
  return overrides ? { ...base2, ...overrides } : base2;
}
function createTheme(config) {
  const { name, label, primary, neutral, secondary, radius, fonts, pattern, category, overrides, vividness } = config;
  const vividnessFactor = typeof vividness === "string" ? VIVIDNESS_PRESETS[vividness] : typeof vividness === "number" ? vividness : void 0;
  const vividnessPresetName = typeof vividness === "string" ? vividness : void 0;
  const base2 = {
    name,
    label,
    light: buildLightTokens(primary, neutral, secondary, overrides?.light),
    dark: buildDarkTokens(primary, neutral, secondary, overrides?.dark),
    fonts,
    pattern,
    radius: radius ?? "0.5rem",
    category,
    _generatorConfig: {
      primary,
      neutral,
      secondary,
      radius,
      vividness: vividnessFactor,
      vividnessPreset: vividnessPresetName
    }
  };
  if (vividnessFactor !== void 0 && vividnessFactor !== 1) {
    return adjustVividness(base2, vividnessFactor);
  }
  return base2;
}

// src/react/theme-picker-build.ts
var PRIMARY_KEYS = ["primary", "primaryForeground", "ring"];
var SECONDARY_KEYS = ["secondary", "secondaryForeground", "accent", "accentForeground"];
var NEUTRAL_KEYS = [
  "background",
  "foreground",
  "card",
  "cardForeground",
  "popover",
  "popoverForeground",
  "muted",
  "mutedForeground",
  "border",
  "input"
];
function buildTheme(themes, selectedPresetName, customPrimary, customSecondary, customNeutral) {
  if (selectedPresetName) {
    const preset = themes.find((t) => t.name === selectedPresetName) ?? themes[0];
    if (!preset) return null;
    if (customPrimary === null && customSecondary === null && customNeutral === null) {
      return { ...preset, _source: "preset", _presetName: preset.name };
    }
    const ref = createTheme({
      name: "ref",
      label: "ref",
      primary: customPrimary ?? "blue",
      neutral: customNeutral === "none" ? void 0 : customNeutral ?? void 0,
      secondary: customSecondary ?? void 0
    });
    const lightOverride = {};
    const darkOverride = {};
    if (customPrimary !== null) {
      for (const k of PRIMARY_KEYS) {
        lightOverride[k] = ref.light[k];
        darkOverride[k] = ref.dark[k];
      }
    }
    if (customSecondary !== null) {
      for (const k of SECONDARY_KEYS) {
        lightOverride[k] = ref.light[k];
        darkOverride[k] = ref.dark[k];
      }
    }
    if (customNeutral !== null) {
      for (const k of NEUTRAL_KEYS) {
        lightOverride[k] = ref.light[k];
        darkOverride[k] = ref.dark[k];
      }
    }
    return {
      ...preset,
      name: `${preset.name}-custom`,
      light: { ...preset.light, ...lightOverride },
      dark: { ...preset.dark, ...darkOverride },
      _source: "preset",
      _presetName: preset.name,
      _overlayConfig: {
        basePreset: preset.name,
        ...customPrimary !== null && { primary: customPrimary },
        ...customSecondary !== null && { secondary: customSecondary },
        ...customNeutral !== null && { neutral: customNeutral }
      }
    };
  }
  const primary = customPrimary ?? "blue";
  const neutral = customNeutral === "none" ? void 0 : customNeutral ?? void 0;
  const secondary = customSecondary ?? void 0;
  return Object.assign(
    createTheme({
      name: `custom-${primary}${neutral ? `-${neutral}` : ""}${secondary ? `-${secondary}` : ""}`,
      label: `Custom (${primary})`,
      primary,
      neutral,
      secondary
    }),
    {
      _source: "generated",
      _generatorConfig: { primary, neutral, secondary }
    }
  );
}

// src/react/ThemePicker.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function ThemePicker({
  themes,
  value,
  onChange,
  allowCustom = false,
  sections = [],
  className,
  locale = "en",
  labels,
  paletteMaxHeight,
  paletteSwatchSize,
  showPalette = true,
  showCustomPalette = allowCustom
}) {
  const v = value;
  const [selectedPresetName, setSelectedPresetName] = (0, import_react3.useState)(() => {
    if (v._overlayConfig?.basePreset) {
      const found = themes.find((t) => t.name === v._overlayConfig.basePreset);
      if (found) return found.name;
    }
    if (v._presetName) {
      const found = themes.find((t) => t.name === v._presetName);
      if (found) return found.name;
    }
    return themes.find((t) => t.name === value.name)?.name ?? null;
  });
  const [customPrimary, setCustomPrimary] = (0, import_react3.useState)(
    () => v._overlayConfig?.primary ?? (v._generatorConfig?.primary ?? null)
  );
  const [customSecondary, setCustomSecondary] = (0, import_react3.useState)(
    () => v._overlayConfig?.secondary ?? (v._generatorConfig?.secondary ?? null)
  );
  const [customNeutral, setCustomNeutral] = (0, import_react3.useState)(
    () => v._overlayConfig?.neutral ?? (v._generatorConfig?.neutral ? v._generatorConfig.neutral : null)
  );
  const [overrideRadius, setOverrideRadius] = (0, import_react3.useState)(value.radius ?? "0.5rem");
  const [overrideFonts, setOverrideFonts] = (0, import_react3.useState)(value.fonts ?? {});
  const [overridePattern, setOverridePattern] = (0, import_react3.useState)(value.pattern ?? { type: "none" });
  const [overrideBgImage, setOverrideBgImage] = (0, import_react3.useState)(value.backgroundImage ?? "");
  (0, import_react3.useEffect)(() => {
    const base2 = buildTheme(themes, selectedPresetName, customPrimary, customSecondary, customNeutral);
    if (!base2) return;
    onChange({
      ...base2,
      radius: overrideRadius,
      fonts: Object.keys(overrideFonts).length > 0 ? overrideFonts : void 0,
      pattern: overridePattern.type !== "none" ? overridePattern : void 0,
      backgroundImage: overrideBgImage || void 0
    });
  }, [selectedPresetName, customPrimary, customSecondary, customNeutral, overrideRadius, overrideFonts, overridePattern, overrideBgImage]);
  const hasPreset = selectedPresetName !== null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: cn("space-y-4 text-sm text-foreground", className), children: [
    showPalette && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ThemePalettePicker,
      {
        themes,
        value: selectedPresetName,
        onChange: (name) => {
          setSelectedPresetName(name);
          const selected = themes.find((t) => t.name === name);
          if (selected) setOverrideRadius(selected.radius ?? "0.5rem");
          setCustomPrimary(null);
          setCustomSecondary(null);
          setCustomNeutral(null);
        },
        labels,
        locale,
        paletteMaxHeight,
        swatchSize: paletteSwatchSize
      }
    ),
    showCustomPalette && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: cn(showPalette ? "border-t border-border pt-4" : ""), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      ThemeCustomPalettePicker,
      {
        hasPreset,
        primary: customPrimary,
        secondary: customSecondary,
        neutral: customNeutral,
        onPrimaryChange: setCustomPrimary,
        onSecondaryChange: setCustomSecondary,
        onNeutralChange: setCustomNeutral,
        subtitle: hasPreset ? translate(labels, locale, "ui.overrideOnPreset", "overrides on preset") : void 0,
        labels,
        locale
      }
    ) }),
    sections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-4 border-t border-border pt-4", children: [
      sections.includes("fonts") && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ThemeFontsPicker, { value: overrideFonts, onChange: setOverrideFonts, labels, locale }),
      sections.includes("patterns") && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ThemePatternsPicker, { value: overridePattern, onChange: setOverridePattern, labels, locale }),
      sections.includes("radius") && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ThemeRadiusPicker, { value: overrideRadius, onChange: setOverrideRadius, labels, locale }),
      sections.includes("background") && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ThemeBackgroundImagePicker, { value: overrideBgImage, onChange: setOverrideBgImage, labels, locale })
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  ThemeBackgroundImagePicker,
  ThemeContext,
  ThemeCustomPalettePicker,
  ThemeFontsPicker,
  ThemePalettePicker,
  ThemePatternsPicker,
  ThemePicker,
  ThemeProvider,
  ThemeRadiusPicker,
  cn,
  useTheme
});
//# sourceMappingURL=react.cjs.map