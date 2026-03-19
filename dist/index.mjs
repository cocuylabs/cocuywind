// src/types.ts
var raw = (value) => value;

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
  const color = config.color ? resolveColor(config.color) : "currentColor";
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
function generateCSS(theme) {
  const lightVars = generateThemeVariables(theme.light);
  const darkVars = generateThemeVariables(theme.dark);
  const radius = theme.radius ?? "0.5rem";
  const fonts = theme.fonts ?? {};
  const lines = [];
  lines.push(":root {");
  for (const [cssVar, value] of Object.entries(lightVars)) {
    lines.push(`  ${cssVar}: ${value};`);
  }
  lines.push(`  --radius: ${radius};`);
  if (fonts.body) lines.push(`  --font-body: ${fonts.body};`);
  if (fonts.heading) lines.push(`  --font-heading: ${fonts.heading};`);
  if (theme.pattern && theme.pattern.type !== "none") {
    const patternStyle = generatePattern(theme.pattern);
    lines.push(`  --pattern-image: ${patternStyle.backgroundImage};`);
    lines.push(`  --pattern-size: ${patternStyle.backgroundSize};`);
    if (patternStyle.backgroundPosition) {
      lines.push(`  --pattern-position: ${patternStyle.backgroundPosition};`);
    }
  } else {
    lines.push(`  --pattern-image: none;`);
    lines.push(`  --pattern-size: auto;`);
  }
  lines.push(`  --bg-image: ${theme.backgroundImage ?? "none"};`);
  lines.push("}", "");
  if (fonts.body) lines.push(`:root { font-family: var(--font-body); }`, "");
  if (fonts.heading) lines.push(`h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }`, "");
  lines.push(".dark {");
  for (const [cssVar, value] of Object.entries(darkVars)) {
    lines.push(`  ${cssVar}: ${value};`);
  }
  lines.push("}", "");
  lines.push("@theme inline {");
  for (const key of TOKEN_KEYS) {
    const cssVar = TOKEN_TO_CSS_VAR[key];
    const tailwindVar = cssVar.replace("--", "--color-");
    lines.push(`  ${tailwindVar}: var(${cssVar});`);
  }
  lines.push(`  --radius-sm: calc(var(--radius) - 4px);`);
  lines.push(`  --radius-md: var(--radius);`);
  lines.push(`  --radius-lg: calc(var(--radius) + 4px);`);
  lines.push(`  --radius-xl: calc(var(--radius) + 8px);`);
  if (fonts.body) lines.push(`  --font-sans: var(--font-body);`);
  if (fonts.heading) lines.push(`  --font-heading: var(--font-heading);`);
  lines.push("}");
  return lines.join("\n");
}
function storedThemeToCSS(stored) {
  const { styles, fonts, pattern, radius } = stored;
  if (!styles?.light || !styles?.dark) return "";
  const lines = [];
  lines.push(":root {");
  for (const [key, value] of Object.entries(styles.light)) {
    lines.push(`  --${kebab(key)}: ${value};`);
  }
  lines.push(`  --radius: ${radius};`);
  if (fonts?.body) lines.push(`  --font-body: ${fonts.body};`);
  if (fonts?.heading) lines.push(`  --font-heading: ${fonts.heading};`);
  if (pattern && pattern.type !== "none") {
    const patternStyle = generatePattern(pattern);
    lines.push(`  --pattern-image: ${patternStyle.backgroundImage};`);
    lines.push(`  --pattern-size: ${patternStyle.backgroundSize};`);
    if (patternStyle.backgroundPosition) {
      lines.push(`  --pattern-position: ${patternStyle.backgroundPosition};`);
    }
  } else {
    lines.push(`  --pattern-image: none;`);
    lines.push(`  --pattern-size: auto;`);
  }
  lines.push(`  --bg-image: ${stored.backgroundImage ?? "none"};`);
  lines.push("}", "");
  if (fonts?.body) lines.push(`:root { font-family: var(--font-body); }`, "");
  if (fonts?.heading) lines.push(`h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }`, "");
  lines.push(".dark {");
  for (const [key, value] of Object.entries(styles.dark)) {
    lines.push(`  --${kebab(key)}: ${value};`);
  }
  lines.push("}", "");
  lines.push("@theme inline {");
  for (const key of Object.keys(styles.light)) {
    const cssVar = `--${kebab(key)}`;
    const tailwindVar = cssVar.replace("--", "--color-");
    lines.push(`  ${tailwindVar}: var(${cssVar});`);
  }
  lines.push(`  --radius-sm: calc(var(--radius) - 4px);`);
  lines.push(`  --radius-md: var(--radius);`);
  lines.push(`  --radius-lg: calc(var(--radius) + 4px);`);
  lines.push(`  --radius-xl: calc(var(--radius) + 8px);`);
  if (fonts?.body) lines.push(`  --font-sans: var(--font-body);`);
  if (fonts?.heading) lines.push(`  --font-heading: var(--font-heading);`);
  lines.push("}");
  return lines.join("\n");
}
function kebab(str) {
  return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
}
function resolveTokens(tokens) {
  const result = {};
  for (const key of TOKEN_KEYS) {
    result[key] = resolveColor(tokens[key]);
  }
  return result;
}

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
  const base = {
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
  return overrides ? { ...base, ...overrides } : base;
}
function buildDarkTokens(primary, neutral, secondary, overrides) {
  const surface = neutral ?? primary;
  const base = {
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
  return overrides ? { ...base, ...overrides } : base;
}
function createTheme(config) {
  const { name, label, primary, neutral, secondary, radius, fonts, pattern, category, overrides, vividness } = config;
  const vividnessFactor = typeof vividness === "string" ? VIVIDNESS_PRESETS[vividness] : typeof vividness === "number" ? vividness : void 0;
  const vividnessPresetName = typeof vividness === "string" ? vividness : void 0;
  const base = {
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
    return adjustVividness(base, vividnessFactor);
  }
  return base;
}
function extendTheme(base, overrides) {
  const { light: lightOverrides, dark: darkOverrides, ...rest } = overrides;
  return {
    ...base,
    ...rest,
    light: lightOverrides ? { ...base.light, ...lightOverrides } : base.light,
    dark: darkOverrides ? { ...base.dark, ...darkOverrides } : base.dark
  };
}
function defineTheme(theme) {
  return theme;
}

// src/serialize.ts
var REQUIRED_TOKENS = [
  "background",
  "foreground",
  "card",
  "cardForeground",
  "popover",
  "popoverForeground",
  "primary",
  "primaryForeground",
  "secondary",
  "secondaryForeground",
  "muted",
  "mutedForeground",
  "accent",
  "accentForeground",
  "destructive",
  "destructiveForeground",
  "border",
  "input",
  "ring"
];
function validateStoredTheme(stored) {
  const errors = [];
  if (!stored || typeof stored !== "object") {
    return { valid: false, errors: ["Value is not an object"] };
  }
  const s = stored;
  if (typeof s.name !== "string" || !s.name) errors.push('Missing or invalid "name"');
  if (typeof s.label !== "string" || !s.label) errors.push('Missing or invalid "label"');
  if (typeof s.radius !== "string" || !s.radius) errors.push('Missing or invalid "radius"');
  if (!s.styles || typeof s.styles !== "object") {
    errors.push('Missing "styles"');
  } else {
    const styles = s.styles;
    for (const mode of ["light", "dark"]) {
      if (!styles[mode] || typeof styles[mode] !== "object") {
        errors.push(`Missing "styles.${mode}"`);
      } else {
        const tokens = styles[mode];
        for (const key of REQUIRED_TOKENS) {
          if (typeof tokens[key] !== "string" || !tokens[key].trim()) {
            errors.push(`Missing or empty "styles.${mode}.${key}"`);
          }
        }
      }
    }
  }
  return { valid: errors.length === 0, errors };
}
function serializeTheme(theme) {
  const stored = {
    name: theme.name,
    label: theme.label,
    styles: {
      light: resolveTokens(theme.light),
      dark: resolveTokens(theme.dark)
    },
    fonts: theme.fonts ?? {},
    pattern: theme.pattern ?? { type: "none" },
    radius: theme.radius ?? "0.5rem"
  };
  const t = theme;
  if (theme.backgroundImage) stored.backgroundImage = theme.backgroundImage;
  if (t._source) stored._source = t._source;
  if (t._presetName) stored._presetName = t._presetName;
  if (t._generatorConfig) stored._generatorConfig = t._generatorConfig;
  if (t._overlayConfig) stored._overlayConfig = t._overlayConfig;
  if (t._sourceName) stored._sourceName = t._sourceName;
  return stored;
}
function deserializeTheme(stored) {
  const { name, label, styles, fonts, pattern, radius } = stored;
  if (!styles?.light || !styles?.dark) {
    throw new Error(`deserializeTheme: stored theme "${name}" is missing styles.light / styles.dark`);
  }
  const lightTokens = Object.fromEntries(
    Object.entries(styles.light).map(([k, v]) => [k, v])
  );
  const darkTokens = Object.fromEntries(
    Object.entries(styles.dark).map(([k, v]) => [k, v])
  );
  const theme = {
    name,
    label,
    light: lightTokens,
    dark: darkTokens,
    fonts,
    pattern,
    radius
  };
  if (stored.backgroundImage) theme.backgroundImage = stored.backgroundImage;
  if (stored._sourceName) theme._sourceName = stored._sourceName;
  if (stored._presetName) theme._presetName = stored._presetName;
  if (stored._overlayConfig) theme._overlayConfig = stored._overlayConfig;
  if (stored._generatorConfig) theme._generatorConfig = stored._generatorConfig;
  return theme;
}

// src/steal.ts
var COLOR_VARS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring"
];
function kebabToCamel(s) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
function normalizeColor(value) {
  return value.trim().replace(/\s+/g, " ");
}
function themeFromCSSVars(vars, meta) {
  const normalized = {};
  for (const [k, v] of Object.entries(vars)) {
    const key = k.startsWith("--") ? k.slice(2) : k;
    normalized[key.trim()] = normalizeColor(v);
  }
  const light = {};
  const dark = {};
  for (const varName of COLOR_VARS) {
    const value = normalized[varName];
    if (value) {
      const camelKey = kebabToCamel(varName);
      light[camelKey] = value;
      dark[camelKey] = value;
    }
  }
  const radius = normalized["radius"] ?? "0.5rem";
  const fonts = {};
  if (normalized["font-sans"]) fonts.body = normalized["font-sans"];
  if (normalized["font-serif"]) fonts.heading = normalized["font-serif"];
  return {
    name: meta?.name ?? "stolen",
    label: meta?.label ?? "Stolen Theme",
    styles: { light, dark },
    fonts,
    pattern: { type: "none" },
    radius,
    _source: "custom"
  };
}
function themeFromCSS(cssText, meta) {
  const unwrapped = cssText.replace(/@layer\s+base\s*\{([\s\S]*?)\}\s*(?=@layer|\s*$)/g, "$1").replace(/@layer\s+base\s*\{([\s\S]*)\}[\s]*$/g, "$1");
  const light = extractVarsFromBlock(unwrapped, [
    /:root\s*\{([^}]*)\}/gs,
    /html\s*\{([^}]*)\}/gs,
    /\[data-theme="light"\]\s*\{([^}]*)\}/gs
  ]);
  const dark = extractVarsFromBlock(unwrapped, [
    /\.dark\s*\{([^}]*)\}/gs,
    /\[data-theme="dark"\]\s*\{([^}]*)\}/gs,
    /@media\s*\(prefers-color-scheme:\s*dark\)\s*\{[^{]*:root\s*\{([^}]*)\}/gs,
    /@media\s*\(prefers-color-scheme:\s*dark\)\s*\{\s*html\s*\{([^}]*)\}/gs
  ]);
  const darkTokens = Object.keys(dark).length > 0 ? dark : { ...light };
  const radius = light["radius"] ?? extractSingleVar(unwrapped, "radius") ?? "0.5rem";
  const fonts = {};
  const firstDefined = (arr) => arr.find((v) => v !== void 0);
  const bodyVal = firstDefined([light["font-sans"], extractSingleVar(unwrapped, "font-sans")]);
  const headingVal = firstDefined([light["font-serif"], extractSingleVar(unwrapped, "font-serif")]);
  if (bodyVal) fonts.body = bodyVal;
  if (headingVal) fonts.heading = headingVal;
  const lightResolved = {};
  const darkResolved = {};
  for (const varName of COLOR_VARS) {
    const camelKey = kebabToCamel(varName);
    const lv = light[varName];
    const dv = darkTokens[varName];
    if (lv) lightResolved[camelKey] = lv;
    if (dv) darkResolved[camelKey] = dv;
  }
  return {
    name: meta?.name ?? "stolen",
    label: meta?.label ?? "Stolen Theme",
    styles: { light: lightResolved, dark: darkResolved },
    fonts,
    pattern: { type: "none" },
    radius,
    _source: "custom"
  };
}
var browserSnippet = (
  /* js */
  `(function() {
  var cs = getComputedStyle(document.documentElement);
  var css = document.documentElement.style;
  var keys = [
    'background','foreground',
    'card','card-foreground',
    'popover','popover-foreground',
    'primary','primary-foreground',
    'secondary','secondary-foreground',
    'muted','muted-foreground',
    'accent','accent-foreground',
    'destructive','destructive-foreground',
    'border','input','ring',
    'radius','font-sans','font-serif'
  ];
  var light = {}, dark = {};
  keys.forEach(function(k) {
    var v = (css.getPropertyValue('--' + k) || cs.getPropertyValue('--' + k)).trim();
    if (v) light['--' + k] = v;
  });
  // Switch to dark mode temporarily to capture dark vars
  var wasDark = document.documentElement.classList.contains('dark');
  document.documentElement.classList.add('dark');
  var cs2 = getComputedStyle(document.documentElement);
  keys.forEach(function(k) {
    var v = cs2.getPropertyValue('--' + k).trim();
    if (v) dark['--' + k] = v;
  });
  if (!wasDark) document.documentElement.classList.remove('dark');
  var out = JSON.stringify({ light: light, dark: dark }, null, 2);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(out).then(function() {
      console.log('%c cocuywind steal: copied to clipboard!', 'color: #4ade80; font-weight: bold;');
    });
  }
  console.log(out);
  return out;
})();`
);
var bookmarkletUrl = `javascript:${encodeURIComponent(browserSnippet)}`;
function themeFromSnippetOutput(snippetOutput, meta) {
  const lightBase = themeFromCSSVars(snippetOutput.light, meta);
  const darkResolved = {};
  for (const varName of COLOR_VARS) {
    const cssKey = `--${varName}`;
    const value = snippetOutput.dark[cssKey];
    if (value) {
      darkResolved[kebabToCamel(varName)] = normalizeColor(value);
    }
  }
  return {
    ...lightBase,
    styles: {
      light: lightBase.styles.light,
      dark: Object.keys(darkResolved).length > 0 ? darkResolved : lightBase.styles.light
    }
  };
}
function extractVarsFromBlock(css, patterns) {
  const result = {};
  for (const pattern of patterns) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(css)) !== null) {
      const block = match[1] ?? match[0];
      Object.assign(result, parseVarBlock(block));
    }
  }
  return result;
}
function parseVarBlock(block) {
  const result = {};
  const varPattern = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = varPattern.exec(block)) !== null) {
    const key = m[1].trim();
    const value = m[2].trim().replace(/\s+/g, " ");
    if (value && value !== "inherit" && value !== "initial" && value !== "unset") {
      result[key] = value;
    }
  }
  return result;
}
function extractSingleVar(css, varName) {
  const pattern = new RegExp(`--${varName}\\s*:\\s*([^;]+);`);
  const m = css.match(pattern);
  return m ? m[1].trim() : void 0;
}

// src/steal-tweakcn.ts
var COLOR_VARS2 = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring"
];
function kebabToCamel2(s) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
function normalizeColor2(value) {
  return value.trim().replace(/\s+/g, " ");
}
function extractTokens(vars) {
  const result = {};
  for (const varName of COLOR_VARS2) {
    const value = vars[`--${varName}`] ?? vars[varName];
    if (value) {
      result[kebabToCamel2(varName)] = normalizeColor2(value);
    }
  }
  return result;
}
function themeFromTweakCNItem(item, meta) {
  const lightTokens = extractTokens(item.cssVars.light);
  const darkTokens = extractTokens(item.cssVars.dark);
  const darkResolved = Object.keys(darkTokens).length > 0 ? darkTokens : { ...lightTokens };
  const themeVars = item.cssVars.theme ?? {};
  const combined = { ...item.cssVars.light, ...themeVars };
  const radius = (combined["--radius"] ?? combined["radius"] ?? "0.5rem").trim();
  const fonts = {};
  const bodyVal = combined["--font-sans"] ?? combined["font-sans"];
  const headingVal = combined["--font-serif"] ?? combined["font-serif"];
  if (bodyVal) fonts.body = bodyVal.trim();
  if (headingVal) fonts.heading = headingVal.trim();
  return {
    name: meta?.name ?? item.name,
    label: meta?.label ?? item.title,
    styles: { light: lightTokens, dark: darkResolved },
    fonts,
    pattern: { type: "none" },
    radius,
    _source: "custom"
  };
}
async function fetchTweakCNTheme(themeName, meta) {
  const url = `https://tweakcn.com/r/themes/${encodeURIComponent(themeName)}.json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`tweakcn: failed to fetch theme "${themeName}" (HTTP ${res.status})`);
  }
  const item = await res.json();
  return themeFromTweakCNItem(item, meta);
}
async function fetchTweakCNRegistry() {
  const url = "https://tweakcn.com/r/themes/registry.json";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`tweakcn: failed to fetch registry (HTTP ${res.status})`);
  }
  const data = await res.json();
  const entries = Array.isArray(data) ? data : data.themes ?? [];
  return entries;
}
async function fetchAllTweakCNThemes() {
  const registry = await fetchTweakCNRegistry();
  const themeEntries = registry.filter((e) => !e.type || e.type === "theme" || e.type === "registry:theme");
  const results = await Promise.allSettled(
    themeEntries.map((entry) => fetchTweakCNTheme(entry.name))
  );
  return results.filter((r) => r.status === "fulfilled").map((r) => r.value);
}
var tweakcnSnippet = (
  /* js */
  `(async function() {
  // Try to detect theme name from URL params or hash
  var url = new URL(location.href);
  var name = url.searchParams.get('theme') ||
             url.searchParams.get('name') ||
             url.hash.replace('#', '') ||
             prompt('Enter tweakcn theme name (e.g. catppuccin):');
  if (!name) { console.warn('No theme name provided.'); return; }
  name = name.trim();
  var apiUrl = 'https://tweakcn.com/r/themes/' + encodeURIComponent(name) + '.json';
  console.log('%c cocuywind: fetching ' + apiUrl, 'color: #60a5fa;');
  try {
    var res = await fetch(apiUrl);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var item = await res.json();
    var out = JSON.stringify(item, null, 2);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(out);
      console.log('%c cocuywind: copied tweakcn theme JSON to clipboard!', 'color: #4ade80; font-weight: bold;');
    }
    console.log(out);
    return item;
  } catch(e) {
    console.error('cocuywind steal-tweakcn:', e);
  }
})();`
);
var tweakcnBookmarkletUrl = `javascript:${encodeURIComponent(tweakcnSnippet)}`;

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

// src/i18n/theme-labels.en.json
var theme_labels_en_default = {
  amber: "Warm Amber",
  "amber-minimal": "Amber Minimal",
  "amethyst-haze": "Amethyst Haze",
  "bold-tech": "Bold Tech",
  bubblegum: "Bubblegum",
  caffeine: "Caffeine",
  candy: "Candy",
  candyland: "Candyland",
  catppuccin: "Catppuccin",
  claude: "Claude",
  claymorphism: "Claymorphism",
  "clean-slate": "Clean Slate",
  "community-1-cmlwi5": "Cobalt Vista",
  "community-2077-cmledj": "2077",
  "community-3d-vintage-paper-cmm7uq": "3D Vintage Paper",
  "community-53-cmmp8a": "Copper Canyon",
  "community-a-cmmm59": "Lumen Orbit",
  "community-agora-events-cmlpmf": "Agora Events",
  "community-aldo-rebelo-admin-cmlwgg": "Aldo Rebelo Admin",
  "community-alpine-cmlecl": "Alpine",
  "community-altar-v1-cmmadl": "Altar",
  "community-altar-v1-invert-cmmaeo": "Altar Invert",
  "community-amber-mono-2-0-cmlpw7": "Amber Mono",
  "community-apex-cmlf55": "Apex",
  "community-artefactory-cmm3xr": "Artefactory",
  "community-aryze-colors-2026-v2-cmmkfw": "Aryze Colors",
  "community-astrovista-cmlk70": "Astrovista",
  "community-autoblog-cmlpf8": "Autoblog",
  "community-bain-design-system-cmm5y6": "Bain Design System",
  "community-beso-colors-cmltho": "Beso Colors",
  "community-best-deisgne-ui-ux-shadcn-cmmsal": "Shadcn UI UX",
  "community-better-light-theme-supabase-cmmdxi": "Better Light Supabase",
  "community-black-and-pink-cmliek": "Black And Pink",
  "community-black-cmmls5": "Black",
  "community-blue-cmmgxu": "Blue",
  "community-blue-orange-cmm5x6": "Blue Orange",
  "community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1": "Blue Yellow Contrast",
  "community-bold-wikipedia-cmlmpb": "Bold Wikipedia",
  "community-brownie-cmlr31": "Brownie",
  "community-brownies-cmlkz0": "Brownies",
  "community-burgundy-cmle93": "Burgundy",
  "community-caffein-thheme-cmmhks": "Caffeine Theme",
  "community-carbon-ember-cmlf2h": "Carbon Ember",
  "community-caser-cmm6p0": "Caser",
  "community-catppuccin-mocha-cmm3nh": "Catppuccin Mocha",
  "community-celestial-cmm720": "Celestial",
  "community-chalk": "Chalk",
  "community-claude-blu-2-cmmead": "Claude Blue",
  "community-claude-cmlm0b": "Claude",
  "community-claude-cmlr30": "Claude Plus",
  "community-claude-renk-paleti-v1-0-cmm9i1": "Claude Palette",
  "community-clinids-29-01-cmll4q": "Clinids",
  "community-course-app-cmmnnr": "Course App",
  "community-cwh-learning-cmlpfa": "Cwh Learning",
  "community-damon-cmlw7u": "Damon",
  "community-dark-forge-cmlf2k": "Dark Forge",
  "community-de-sarann-villa-cmmni6": "De Sarann Villa",
  "community-de-swiss-design-cmlure": "Swiss Design",
  "community-deep-purple-cmlh1j": "Deep Purple",
  "community-designbyte-cmlpf5": "Designbyte",
  "community-diby-cmlhru": "Diby",
  "community-diby-orange-cmlhrv": "Diby Orange",
  "community-domia-cmlz4g": "Domia",
  "community-efferd-cmmi9l": "Efferd",
  "community-emerald-cmli3u": "Emerald",
  "community-enterprise-mod-2-cmlva5": "Enterprise Mod",
  "community-eslinks-cmmaoe": "Eslinks",
  "community-essw-cmmphm": "Essw",
  "community-examdedo-cmlpf1": "Examdedo",
  "community-flat-pink-2-cmlieo": "Flat Pink",
  "community-gold-cmlf3x": "Gold",
  "community-greattings-cmlfwc": "Greetings",
  "community-green-with-yellow-theme-cmlewm": "Green Yellow",
  "community-greenbarbequeue-cmm9ae": "Green Barbeque",
  "community-hyper-red-cmliel": "Hyper Red",
  "community-ibk-theme-cmmb5d": "IBK Theme",
  "community-iconic-terminal-cmmhiu": "Iconic Terminal",
  "community-imhicihu-cmmp28": "Imhicihu",
  "community-india-cmlpfe": "India",
  "community-infoseer-cmmcv8": "Infoseer",
  "community-intropic-mui-react-cursor-retool-cmmt51": "Intropic MUI",
  "community-itadori-yuji-cmmhf9": "Itadori Yuji",
  "community-jamaica-cmlh1c": "Jamaica",
  "community-japan-blues-cmmje1": "Japan Blues",
  "community-jknm-cmmrfz": "Jknm",
  "community-js-ts-advent-of-code-cmlr31": "Advent Of Code",
  "community-kedokteran-cmmc4g": "Medicine",
  "community-kupikod-cmleua": "Kupikod",
  "community-lara-cmm277": "Lara",
  "community-lastchat-cmmi2x": "Lastchat",
  "community-lavanda-cmmis1": "Lavender",
  "community-leadgen-cmle6z": "Leadgen",
  "community-light-green-cmlhfq": "Light Green",
  "community-lime-green-dhamaka-cmm7ct": "Lime Explosion",
  "community-limes-cmliem": "Limes",
  "community-logisticone-cmm0zk": "Logisticone",
  "community-lyte-cmml0p": "Lyte",
  "community-m-cmlgp0": "Echo Canyon",
  "community-magic-2-cmmsz6": "Magic",
  "community-magic-3-cmmt0a": "Magic Plus",
  "community-manga-vibe-cmlr32": "Manga Vibe",
  "community-meta-mask-geist-cmlf9r": "MetaMask Geist",
  "community-minimal-neutral-cmlr2z": "Minimal Neutral",
  "community-moss-cmmi1g": "Moss",
  "community-mt-cmmdl8": "Nimbus Circuit",
  "community-mx-brutalist-cmllfv": "MX Brutalist",
  "community-my-aweasome-theme-cmlxzf": "My Awesome Theme",
  "community-my-theme-01-cmmemx": "My Theme",
  "community-my-theme-cmm24g": "My Private Theme",
  "community-nlan-cmli81": "Nlan",
  "community-nubanck-cmlf40": "Nubank",
  "community-nxtbet-quadra-inspired-cmmaea": "NXTBET Quadra",
  "community-offworld-cmlpw4": "Offworld",
  "community-oikwee-cmmb8l": "Oikwee",
  "community-old-school-cmlx21": "Old School",
  "community-openprofile-cmlpf8": "Openprofile",
  "community-orient-cmlzhg": "Orient",
  "community-orio-design-system-cmm1ri": "Orio Design System",
  "community-palm-cmlotm": "Palm",
  "community-papaya-cmmgxh": "Papaya",
  "community-party-rock-cmlqxf": "Party Rock",
  "community-pasteelement2-cmlpfh": "Paste Element",
  "community-playable-cmli0k": "Playable",
  "community-polaris-cmmr3s": "Polaris",
  "community-poppy-1-cmlmc0": "Poppy",
  "community-porfolio-theme-cmler0": "Portfolio Theme",
  "community-professional-theme-cmluaj": "Professional Theme",
  "community-purple-popins-cmlvfb": "Purple Poppins",
  "community-purple-rain-cmlh1l": "Purple Rain",
  "community-purple-soft-popins-cmlwku": "Purple Soft Poppins",
  "community-purples-cmlien": "Purples",
  "community-qrafthive-cmlk6w": "Qrafthive",
  "community-remedy-s-control-cmmszc": "Remedy Control",
  "community-resolveai-app-cmmchq": "Resolveai App",
  "community-retro-2-cmm2e2": "Modern Retro",
  "community-retro-cmm2d5": "Retro",
  "community-rewaff-cmmm3h": "Rewaff",
  "community-roboto-modern-cmlwxa": "Roboto Modern",
  "community-rose-pine-cmlwpk": "Rose Pine",
  "community-s3karo-cmlpf0": "S3karo",
  "community-sage-green-cmlf70": "Sage Green",
  "community-sakura-cmmghp": "Sakura",
  "community-sandstone-cmmi1p": "Sandstone",
  "community-service-hub-theme-cmmmrn": "Service Hub Theme",
  "community-sesi-theme-2-cmmmkb": "Sesi Theme",
  "community-shopify-red-cmmaba": "Shopify Red",
  "community-sky-cmmjha": "Sky",
  "community-something-cmmmy7": "Something",
  "community-spacelinear-cmm4ya": "Space Linear",
  "community-stella-cmm2mf": "Stella",
  "community-student-spacelab-network-1-cmmkfn": "Spacelab Network",
  "community-styrene-cmlybu": "Styrene",
  "community-styrenedark-cmly9d": "Styrene Dark",
  "community-sukuna-cmmhf8": "Sukuna",
  "community-sulav-theme-cmmf66": "Sulav Theme",
  "community-t2-cmm85y": "Sage Drift",
  "community-teal-hue-cmm599": "Teal Hue",
  "community-terminal-cmll24": "Terminal",
  "community-terminal-cmlmsn": "Terminal",
  "community-terminal-dark-russian-cmmljk": "Terminal Dark Russian",
  "community-terminal-muted-cmlvaz": "Terminal Muted",
  "community-tersk-cmmlwi": "Tersk",
  "community-test-cmlpfc": "Test",
  "community-theme-cmlpl5-cmlpl5": "Private Theme",
  "community-tiesen-cmliib": "Tiesen",
  "community-twitter-cmlznl": "Twitter",
  "community-uv-day-cmmfg9": "UV Day",
  "community-v2-cmlofg": "Ivory Studio",
  "community-vermillion-cmmtjp": "Vermillion",
  "community-vescrow-1-2-cmlhpn": "Vescrow",
  "community-violate-eye-cmm3eb": "Violet Eye",
  "community-vivid-sky-cmmjjm": "Vivid Sky",
  "community-vrai-delice-cmm3sr": "Vrai Delice",
  "community-vtron-cmlpfk": "VTRON",
  "community-whatsapp-cmmbmn": "WhatsApp",
  "community-woodforge-9-cmmhug": "Woodforge",
  "community-zen-inspired-theme-cmlm0c": "Zen Inspired",
  "cosmic-night": "Cosmic Night",
  cyberpunk: "Cyberpunk",
  default: "Default",
  "doom-64": "Doom 64",
  "elegant-luxury": "Elegant Luxury",
  forest: "Forest Green",
  graphite: "Graphite",
  indigo: "Deep Indigo",
  "kodama-grove": "Kodama Grove",
  midnight: "Midnight",
  "midnight-bloom": "Midnight Bloom",
  "mocha-mousse": "Mocha Mousse",
  "modern-minimal": "Modern Minimal",
  nature: "Nature",
  "neo-brutalism": "Neo Brutalism",
  "northern-lights": "Northern Lights",
  notebook: "Notebook",
  ocean: "Ocean Blue",
  "ocean-breeze": "Ocean Breeze",
  "pastel-dreams": "Pastel Dreams",
  perpetuity: "Perpetuity",
  "quantum-rose": "Quantum Rose",
  "retro-arcade": "Retro Arcade",
  rose: "Rose Pink",
  "solar-dusk": "Solar Dusk",
  "starry-night": "Starry Night",
  sunset: "Sunset Orange",
  "sunset-horizon": "Sunset Horizon",
  supabase: "Supabase",
  "t3-chat": "T3 Chat",
  tangerine: "Tangerine",
  teal: "Teal",
  twitter: "Twitter / X",
  "vintage-paper": "Vintage Paper",
  "violet-bloom": "Violet Bloom",
  carnival: "Carnival",
  "community-chalk-cmmjgo": "Chalk",
  dusk: "Dusk",
  glacier: "Glacier",
  harvest: "Harvest",
  lagoon: "Lagoon",
  matcha: "Matcha",
  obsidian: "Obsidian",
  redwood: "Redwood",
  sakura: "Sakura",
  terracotta: "Terracotta",
  tomato: "Tomato"
};

// src/i18n/theme-labels.es.json
var theme_labels_es_default = {
  amber: "\xC1mbar C\xE1lido",
  "amber-minimal": "\xC1mbar Minimalista",
  "amethyst-haze": "Bruma de Amatista",
  "bold-tech": "Tecnolog\xEDa Audaz",
  bubblegum: "Chicle",
  caffeine: "Cafe\xEDna",
  candy: "Caramelo",
  candyland: "Mundo de Dulces",
  catppuccin: "Catppuccin",
  claude: "Claude",
  claymorphism: "Claymorphism",
  "clean-slate": "P\xE1gina en Blanco",
  "community-1-cmlwi5": "Vista Cobalto",
  "community-2077-cmledj": "2077",
  "community-3d-vintage-paper-cmm7uq": "Papel Vintage 3D",
  "community-53-cmmp8a": "Ca\xF1\xF3n de Cobre",
  "community-a-cmmm59": "\xD3rbita de Luz",
  "community-agora-events-cmlpmf": "Eventos \xC1gora",
  "community-aldo-rebelo-admin-cmlwgg": "Aldo Rebelo Admin",
  "community-alpine-cmlecl": "Alpino",
  "community-altar-v1-cmmadl": "ALTAR",
  "community-altar-v1-invert-cmmaeo": "ALTAR Invertido",
  "community-amber-mono-2-0-cmlpw7": "\xC1mbar Mono",
  "community-apex-cmlf55": "APEX",
  "community-artefactory-cmm3xr": "Artefactory",
  "community-aryze-colors-2026-v2-cmmkfw": "Colores Aryze",
  "community-astrovista-cmlk70": "Astrovista",
  "community-autoblog-cmlpf8": "Autoblog",
  "community-bain-design-system-cmm5y6": "Sistema de Dise\xF1o Bain",
  "community-beso-colors-cmltho": "Colores Beso",
  "community-best-deisgne-ui-ux-shadcn-cmmsal": "Shadcn UI UX",
  "community-better-light-theme-supabase-cmmdxi": "Supabase Light Mejorado",
  "community-black-and-pink-cmliek": "Negro y Rosa",
  "community-black-cmmls5": "Negro",
  "community-blue-cmmgxu": "Azul",
  "community-blue-orange-cmm5x6": "Azul y Naranja",
  "community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1": "Contraste Azul y Amarillo",
  "community-bold-wikipedia-cmlmpb": "Wikipedia Bold",
  "community-brownie-cmlr31": "Brownie",
  "community-brownies-cmlkz0": "Brownies",
  "community-burgundy-cmle93": "Borgo\xF1a",
  "community-caffein-thheme-cmmhks": "Tema Cafe\xEDna",
  "community-carbon-ember-cmlf2h": "Brasa de Carb\xF3n",
  "community-caser-cmm6p0": "Caser",
  "community-catppuccin-mocha-cmm3nh": "Catppuccin Mocha",
  "community-celestial-cmm720": "Celestial",
  "community-chalk": "Tiza",
  "community-claude-blu-2-cmmead": "Claude Blue",
  "community-claude-cmlm0b": "Claude",
  "community-claude-cmlr30": "Claude Plus",
  "community-claude-renk-paleti-v1-0-cmm9i1": "Paleta Claude",
  "community-clinids-29-01-cmll4q": "Clinids",
  "community-course-app-cmmnnr": "App de Cursos",
  "community-cwh-learning-cmlpfa": "Cwh Learning",
  "community-damon-cmlw7u": "Damon",
  "community-dark-forge-cmlf2k": "Forja Oscura",
  "community-de-sarann-villa-cmmni6": "Villa De Sarann",
  "community-de-swiss-design-cmlure": "Dise\xF1o Suizo",
  "community-deep-purple-cmlh1j": "P\xFArpura Profundo",
  "community-designbyte-cmlpf5": "Designbyte",
  "community-diby-cmlhru": "Diby",
  "community-diby-orange-cmlhrv": "Diby Naranja",
  "community-domia-cmlz4g": "DOMIA",
  "community-efferd-cmmi9l": "Efferd",
  "community-emerald-cmli3u": "Esmeralda",
  "community-enterprise-mod-2-cmlva5": "Enterprise Mod",
  "community-eslinks-cmmaoe": "Eslinks",
  "community-essw-cmmphm": "Essw",
  "community-examdedo-cmlpf1": "Examdedo",
  "community-flat-pink-2-cmlieo": "Rosa Plano",
  "community-gold-cmlf3x": "Oro",
  "community-greattings-cmlfwc": "Saludos",
  "community-green-with-yellow-theme-cmlewm": "Verde y Amarillo",
  "community-greenbarbequeue-cmm9ae": "Parrilla Verde",
  "community-hyper-red-cmliel": "Hiper Rojo",
  "community-ibk-theme-cmmb5d": "Tema IBK",
  "community-iconic-terminal-cmmhiu": "Terminal Ic\xF3nica",
  "community-imhicihu-cmmp28": "Imhicihu",
  "community-india-cmlpfe": "India",
  "community-infoseer-cmmcv8": "Infoseer",
  "community-intropic-mui-react-cursor-retool-cmmt51": "Intropic MUI",
  "community-itadori-yuji-cmmhf9": "Itadori Yuji",
  "community-jamaica-cmlh1c": "Jamaica",
  "community-japan-blues-cmmje1": "Azules de Jap\xF3n",
  "community-jknm-cmmrfz": "Jknm",
  "community-js-ts-advent-of-code-cmlr31": "Advent of Code",
  "community-kedokteran-cmmc4g": "Medicina",
  "community-kupikod-cmleua": "Kupikod",
  "community-lara-cmm277": "Lara",
  "community-lastchat-cmmi2x": "Lastchat",
  "community-lavanda-cmmis1": "Lavanda",
  "community-leadgen-cmle6z": "Generaci\xF3n de Leads",
  "community-light-green-cmlhfq": "Verde Claro",
  "community-lime-green-dhamaka-cmm7ct": "Explosi\xF3n Lima",
  "community-limes-cmliem": "Limas",
  "community-logisticone-cmm0zk": "Logisticone",
  "community-lyte-cmml0p": "Lyte",
  "community-m-cmlgp0": "Eco del Ca\xF1\xF3n",
  "community-magic-2-cmmsz6": "Magia",
  "community-magic-3-cmmt0a": "Magia Plus",
  "community-manga-vibe-cmlr32": "Estilo Manga",
  "community-meta-mask-geist-cmlf9r": "MetaMask Geist",
  "community-minimal-neutral-cmlr2z": "Neutral Minimalista",
  "community-moss-cmmi1g": "Musgo",
  "community-mt-cmmdl8": "Circuito Nimbus",
  "community-mx-brutalist-cmllfv": "MX Brutalista",
  "community-my-aweasome-theme-cmlxzf": "Mi Incre\xEDble Tema",
  "community-my-theme-01-cmmemx": "Mi Tema",
  "community-my-theme-cmm24g": "Mi Tema Personal",
  "community-nlan-cmli81": "NLAN",
  "community-nubanck-cmlf40": "Nubank",
  "community-nxtbet-quadra-inspired-cmmaea": "NXTBET Quadra",
  "community-offworld-cmlpw4": "Fuera del Mundo",
  "community-oikwee-cmmb8l": "Oikwee",
  "community-old-school-cmlx21": "Estilo Retro",
  "community-openprofile-cmlpf8": "Openprofile",
  "community-orient-cmlzhg": "Oriente",
  "community-orio-design-system-cmm1ri": "Orio Design System",
  "community-palm-cmlotm": "Palmera",
  "community-papaya-cmmgxh": "Papaya",
  "community-party-rock-cmlqxf": "Party Rock",
  "community-pasteelement2-cmlpfh": "Pasteelement",
  "community-playable-cmli0k": "Jugable",
  "community-polaris-cmmr3s": "Polaris",
  "community-poppy-1-cmlmc0": "Amapola",
  "community-porfolio-theme-cmler0": "Tema de Portafolio",
  "community-professional-theme-cmluaj": "Tema Profesional",
  "community-purple-popins-cmlvfb": "P\xFArpura Poppins",
  "community-purple-rain-cmlh1l": "Lluvia P\xFArpura",
  "community-purple-soft-popins-cmlwku": "P\xFArpura Suave",
  "community-purples-cmlien": "Tonos P\xFArpura",
  "community-qrafthive-cmlk6w": "Qrafthive",
  "community-remedy-s-control-cmmszc": "Control de Remedy",
  "community-resolveai-app-cmmchq": "App Resolveai",
  "community-retro-2-cmm2e2": "Retro Moderno",
  "community-retro-cmm2d5": "Retro",
  "community-rewaff-cmmm3h": "Rewaff",
  "community-roboto-modern-cmlwxa": "Roboto Moderno",
  "community-rose-pine-cmlwpk": "Rose Pine",
  "community-s3karo-cmlpf0": "S3karo",
  "community-sage-green-cmlf70": "Verde Salvia",
  "community-sakura-cmmghp": "Sakura",
  "community-sandstone-cmmi1p": "Arenisca",
  "community-service-hub-theme-cmmmrn": "Centro de Servicio",
  "community-sesi-theme-2-cmmmkb": "Tema SESI",
  "community-shopify-red-cmmaba": "Shopify Rojo",
  "community-sky-cmmjha": "Cielo",
  "community-something-cmmmy7": "Algo",
  "community-spacelinear-cmm4ya": "Espacio Lineal",
  "community-stella-cmm2mf": "Stella",
  "community-student-spacelab-network-1-cmmkfn": "Red Spacelab",
  "community-styrene-cmlybu": "Estireno",
  "community-styrenedark-cmly9d": "Estireno Oscuro",
  "community-sukuna-cmmhf8": "Sukuna",
  "community-sulav-theme-cmmf66": "Tema Sulav",
  "community-t2-cmm85y": "Deriva de Salvia",
  "community-teal-hue-cmm599": "Tono Verde Azulado",
  "community-terminal-cmll24": "Terminal",
  "community-terminal-cmlmsn": "Terminal",
  "community-terminal-dark-russian-cmmljk": "Terminal Ruso Oscuro",
  "community-terminal-muted-cmlvaz": "Terminal Atenuado",
  "community-tersk-cmmlwi": "Tersk",
  "community-test-cmlpfc": "Prueba",
  "community-theme-cmlpl5-cmlpl5": "Tema Personal",
  "community-tiesen-cmliib": "Tiesen",
  "community-twitter-cmlznl": "Twitter",
  "community-uv-day-cmmfg9": "D\xEDa UV",
  "community-v2-cmlofg": "Estudio Marfil",
  "community-vermillion-cmmtjp": "Bermell\xF3n",
  "community-vescrow-1-2-cmlhpn": "Vescrow",
  "community-violate-eye-cmm3eb": "Ojo Violeta",
  "community-vivid-sky-cmmjjm": "Cielo V\xEDvido",
  "community-vrai-delice-cmm3sr": "Vrai Delice",
  "community-vtron-cmlpfk": "VTRON",
  "community-whatsapp-cmmbmn": "WhatsApp",
  "community-woodforge-9-cmmhug": "Forja de Madera",
  "community-zen-inspired-theme-cmlm0c": "Inspiraci\xF3n Zen",
  "cosmic-night": "Noche C\xF3smica",
  cyberpunk: "Cyberpunk",
  default: "Predeterminado",
  "doom-64": "Doom 64",
  "elegant-luxury": "Lujo Elegante",
  forest: "Verde Bosque",
  graphite: "Grafito",
  indigo: "\xCDndigo Profundo",
  "kodama-grove": "Bosque Kodama",
  midnight: "Medianoche",
  "midnight-bloom": "Flor de Medianoche",
  "mocha-mousse": "Mousse de Moka",
  "modern-minimal": "Moderno Minimalista",
  nature: "Naturaleza",
  "neo-brutalism": "Neobrutalismo",
  "northern-lights": "Aurora Boreal",
  notebook: "Libreta",
  ocean: "Azul Oc\xE9ano",
  "ocean-breeze": "Brisa Marina",
  "pastel-dreams": "Sue\xF1os Pastel",
  perpetuity: "Perpetuidad",
  "quantum-rose": "Rosa Cu\xE1ntico",
  "retro-arcade": "Arcade Retro",
  rose: "Rosa",
  "solar-dusk": "Ocaso Solar",
  "starry-night": "Noche Estrellada",
  sunset: "Naranja Atardecer",
  "sunset-horizon": "Horizonte al Atardecer",
  supabase: "Supabase",
  "t3-chat": "T3 Chat",
  tangerine: "Mandarina",
  teal: "Verde Azulado",
  twitter: "Twitter / X",
  "vintage-paper": "Papel Vintage",
  "violet-bloom": "Flor Violeta",
  carnival: "Carnaval",
  "community-chalk-cmmjgo": "Tiza",
  dusk: "Crep\xFAsculo",
  glacier: "Glaciar",
  harvest: "Cosecha",
  lagoon: "Laguna",
  matcha: "Matcha",
  obsidian: "Obsidiana",
  redwood: "Secuoya",
  sakura: "Sakura",
  terracotta: "Terracota",
  tomato: "Tomate"
};

// src/i18n/theme-labels.pt.json
var theme_labels_pt_default = {
  amber: "\xC2mbar Quente",
  "amber-minimal": "\xC2mbar Minimalista",
  "amethyst-haze": "N\xE9voa de Ametista",
  "bold-tech": "Tecnologia Arrojada",
  bubblegum: "Chiclete",
  caffeine: "Cafe\xEDna",
  candy: "Doce",
  candyland: "Reino dos Doces",
  catppuccin: "Catppuccin",
  claude: "Claude",
  claymorphism: "Claymorphism",
  "clean-slate": "P\xE1gina Limpa",
  "community-1-cmlwi5": "Vista Cobalto",
  "community-2077-cmledj": "2077",
  "community-3d-vintage-paper-cmm7uq": "Papel Vintage 3D",
  "community-53-cmmp8a": "C\xE2nion de Cobre",
  "community-a-cmmm59": "\xD3rbita de Luz",
  "community-agora-events-cmlpmf": "Eventos \xC1gora",
  "community-aldo-rebelo-admin-cmlwgg": "Aldo Rebelo Admin",
  "community-alpine-cmlecl": "Alpino",
  "community-altar-v1-cmmadl": "ALTAR",
  "community-altar-v1-invert-cmmaeo": "ALTAR Invertido",
  "community-amber-mono-2-0-cmlpw7": "\xC2mbar Mono",
  "community-apex-cmlf55": "APEX",
  "community-artefactory-cmm3xr": "Artefactory",
  "community-aryze-colors-2026-v2-cmmkfw": "Cores Aryze",
  "community-astrovista-cmlk70": "Astrovista",
  "community-autoblog-cmlpf8": "Autoblog",
  "community-bain-design-system-cmm5y6": "Sistema de Design Bain",
  "community-beso-colors-cmltho": "Cores Beso",
  "community-best-deisgne-ui-ux-shadcn-cmmsal": "Shadcn UI UX",
  "community-better-light-theme-supabase-cmmdxi": "Supabase Light Melhorado",
  "community-black-and-pink-cmliek": "Preto e Rosa",
  "community-black-cmmls5": "Preto",
  "community-blue-cmmgxu": "Azul",
  "community-blue-orange-cmm5x6": "Azul e Laranja",
  "community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1": "Contraste Azul e Amarelo",
  "community-bold-wikipedia-cmlmpb": "Wikipedia Bold",
  "community-brownie-cmlr31": "Brownie",
  "community-brownies-cmlkz0": "Brownies",
  "community-burgundy-cmle93": "Borgonha",
  "community-caffein-thheme-cmmhks": "Tema Cafe\xEDna",
  "community-carbon-ember-cmlf2h": "Brasa de Carv\xE3o",
  "community-caser-cmm6p0": "Caser",
  "community-catppuccin-mocha-cmm3nh": "Catppuccin Mocha",
  "community-celestial-cmm720": "Celestial",
  "community-chalk": "Giz",
  "community-claude-blu-2-cmmead": "Claude Blue",
  "community-claude-cmlm0b": "Claude",
  "community-claude-cmlr30": "Claude Plus",
  "community-claude-renk-paleti-v1-0-cmm9i1": "Paleta Claude",
  "community-clinids-29-01-cmll4q": "Clinids",
  "community-course-app-cmmnnr": "App de Cursos",
  "community-cwh-learning-cmlpfa": "Cwh Learning",
  "community-damon-cmlw7u": "Damon",
  "community-dark-forge-cmlf2k": "Forja Sombria",
  "community-de-sarann-villa-cmmni6": "Villa De Sarann",
  "community-de-swiss-design-cmlure": "Design Su\xED\xE7o",
  "community-deep-purple-cmlh1j": "Roxo Profundo",
  "community-designbyte-cmlpf5": "Designbyte",
  "community-diby-cmlhru": "Diby",
  "community-diby-orange-cmlhrv": "Diby Laranja",
  "community-domia-cmlz4g": "DOMIA",
  "community-efferd-cmmi9l": "Efferd",
  "community-emerald-cmli3u": "Esmeralda",
  "community-enterprise-mod-2-cmlva5": "Enterprise Mod",
  "community-eslinks-cmmaoe": "Eslinks",
  "community-essw-cmmphm": "Essw",
  "community-examdedo-cmlpf1": "Examdedo",
  "community-flat-pink-2-cmlieo": "Rosa Flat",
  "community-gold-cmlf3x": "Ouro",
  "community-greattings-cmlfwc": "Sauda\xE7\xF5es",
  "community-green-with-yellow-theme-cmlewm": "Verde e Amarelo",
  "community-greenbarbequeue-cmm9ae": "Churrasco Verde",
  "community-hyper-red-cmliel": "Hiper Vermelho",
  "community-ibk-theme-cmmb5d": "Tema IBK",
  "community-iconic-terminal-cmmhiu": "Terminal Ic\xF4nico",
  "community-imhicihu-cmmp28": "Imhicihu",
  "community-india-cmlpfe": "\xCDndia",
  "community-infoseer-cmmcv8": "Infoseer",
  "community-intropic-mui-react-cursor-retool-cmmt51": "Intropic MUI",
  "community-itadori-yuji-cmmhf9": "Itadori Yuji",
  "community-jamaica-cmlh1c": "Jamaica",
  "community-japan-blues-cmmje1": "Azuis do Jap\xE3o",
  "community-jknm-cmmrfz": "Jknm",
  "community-js-ts-advent-of-code-cmlr31": "Advent of Code",
  "community-kedokteran-cmmc4g": "Medicina",
  "community-kupikod-cmleua": "Kupikod",
  "community-lara-cmm277": "Lara",
  "community-lastchat-cmmi2x": "Lastchat",
  "community-lavanda-cmmis1": "Lavanda",
  "community-leadgen-cmle6z": "Gera\xE7\xE3o de Leads",
  "community-light-green-cmlhfq": "Verde Claro",
  "community-lime-green-dhamaka-cmm7ct": "Explos\xE3o Lima",
  "community-limes-cmliem": "Limas",
  "community-logisticone-cmm0zk": "Logisticone",
  "community-lyte-cmml0p": "Lyte",
  "community-m-cmlgp0": "Eco do C\xE2nion",
  "community-magic-2-cmmsz6": "Magia",
  "community-magic-3-cmmt0a": "Magia Plus",
  "community-manga-vibe-cmlr32": "Vibe Manga",
  "community-meta-mask-geist-cmlf9r": "MetaMask Geist",
  "community-minimal-neutral-cmlr2z": "Neutro Minimalista",
  "community-moss-cmmi1g": "Musgo",
  "community-mt-cmmdl8": "Circuito Nimbus",
  "community-mx-brutalist-cmllfv": "MX Brutalista",
  "community-my-aweasome-theme-cmlxzf": "Meu Tema Incr\xEDvel",
  "community-my-theme-01-cmmemx": "Meu Tema",
  "community-my-theme-cmm24g": "Meu Tema Pessoal",
  "community-nlan-cmli81": "NLAN",
  "community-nubanck-cmlf40": "Nubank",
  "community-nxtbet-quadra-inspired-cmmaea": "NXTBET Quadra",
  "community-offworld-cmlpw4": "Fora do Mundo",
  "community-oikwee-cmmb8l": "Oikwee",
  "community-old-school-cmlx21": "Old School",
  "community-openprofile-cmlpf8": "Openprofile",
  "community-orient-cmlzhg": "Oriente",
  "community-orio-design-system-cmm1ri": "Orio Design System",
  "community-palm-cmlotm": "Palmeira",
  "community-papaya-cmmgxh": "Mam\xE3o",
  "community-party-rock-cmlqxf": "Party Rock",
  "community-pasteelement2-cmlpfh": "Pasteelement",
  "community-playable-cmli0k": "Jog\xE1vel",
  "community-polaris-cmmr3s": "Polaris",
  "community-poppy-1-cmlmc0": "Papoula",
  "community-porfolio-theme-cmler0": "Tema de Portf\xF3lio",
  "community-professional-theme-cmluaj": "Tema Profissional",
  "community-purple-popins-cmlvfb": "Roxo Poppins",
  "community-purple-rain-cmlh1l": "Chuva Roxa",
  "community-purple-soft-popins-cmlwku": "Roxo Suave",
  "community-purples-cmlien": "Tons de Roxo",
  "community-qrafthive-cmlk6w": "Qrafthive",
  "community-remedy-s-control-cmmszc": "Controle da Remedy",
  "community-resolveai-app-cmmchq": "App Resolveai",
  "community-retro-2-cmm2e2": "Retro Moderno",
  "community-retro-cmm2d5": "Retro",
  "community-rewaff-cmmm3h": "Rewaff",
  "community-roboto-modern-cmlwxa": "Roboto Moderno",
  "community-rose-pine-cmlwpk": "Rose Pine",
  "community-s3karo-cmlpf0": "S3karo",
  "community-sage-green-cmlf70": "Verde S\xE1lvia",
  "community-sakura-cmmghp": "Sakura",
  "community-sandstone-cmmi1p": "Arenito",
  "community-service-hub-theme-cmmmrn": "Central de Servi\xE7o",
  "community-sesi-theme-2-cmmmkb": "Tema SESI",
  "community-shopify-red-cmmaba": "Shopify Vermelho",
  "community-sky-cmmjha": "C\xE9u",
  "community-something-cmmmy7": "Algo",
  "community-spacelinear-cmm4ya": "Espa\xE7o Linear",
  "community-stella-cmm2mf": "Stella",
  "community-student-spacelab-network-1-cmmkfn": "Rede Spacelab",
  "community-styrene-cmlybu": "Estireno",
  "community-styrenedark-cmly9d": "Estireno Escuro",
  "community-sukuna-cmmhf8": "Sukuna",
  "community-sulav-theme-cmmf66": "Tema Sulav",
  "community-t2-cmm85y": "Deriva de S\xE1lvia",
  "community-teal-hue-cmm599": "Tom de Ciano",
  "community-terminal-cmll24": "Terminal",
  "community-terminal-cmlmsn": "Terminal",
  "community-terminal-dark-russian-cmmljk": "Terminal Russo Escuro",
  "community-terminal-muted-cmlvaz": "Terminal Suave",
  "community-tersk-cmmlwi": "Tersk",
  "community-test-cmlpfc": "Teste",
  "community-theme-cmlpl5-cmlpl5": "Tema Pessoal",
  "community-tiesen-cmliib": "Tiesen",
  "community-twitter-cmlznl": "Twitter",
  "community-uv-day-cmmfg9": "Dia UV",
  "community-v2-cmlofg": "Est\xFAdio Marfim",
  "community-vermillion-cmmtjp": "Vermelh\xE3o",
  "community-vescrow-1-2-cmlhpn": "Vescrow",
  "community-violate-eye-cmm3eb": "Olho Violeta",
  "community-vivid-sky-cmmjjm": "C\xE9u V\xEDvido",
  "community-vrai-delice-cmm3sr": "Vrai Delice",
  "community-vtron-cmlpfk": "VTRON",
  "community-whatsapp-cmmbmn": "WhatsApp",
  "community-woodforge-9-cmmhug": "Forja de Madeira",
  "community-zen-inspired-theme-cmlm0c": "Inspira\xE7\xE3o Zen",
  "cosmic-night": "Noite C\xF3smica",
  cyberpunk: "Cyberpunk",
  default: "Padr\xE3o",
  "doom-64": "Doom 64",
  "elegant-luxury": "Luxo Elegante",
  forest: "Verde Floresta",
  graphite: "Grafite",
  indigo: "\xCDndigo Profundo",
  "kodama-grove": "Bosque Kodama",
  midnight: "Meia-noite",
  "midnight-bloom": "Flor da Meia-noite",
  "mocha-mousse": "Mousse de Mocha",
  "modern-minimal": "Moderno Minimalista",
  nature: "Natureza",
  "neo-brutalism": "Neobrutalismo",
  "northern-lights": "Aurora Boreal",
  notebook: "Caderno",
  ocean: "Azul Oceano",
  "ocean-breeze": "Brisa do Mar",
  "pastel-dreams": "Sonhos Pastel",
  perpetuity: "Perpetuidade",
  "quantum-rose": "Rosa Qu\xE2ntica",
  "retro-arcade": "Arcade Retro",
  rose: "Rosa",
  "solar-dusk": "Crep\xFAsculo Solar",
  "starry-night": "Noite Estrelada",
  sunset: "Laranja P\xF4r do Sol",
  "sunset-horizon": "Horizonte P\xF4r do Sol",
  supabase: "Supabase",
  "t3-chat": "T3 Chat",
  tangerine: "Tangerina",
  teal: "Ciano",
  twitter: "Twitter / X",
  "vintage-paper": "Papel Vintage",
  "violet-bloom": "Flor Violeta",
  carnival: "Carnaval",
  "community-chalk-cmmjgo": "Giz",
  dusk: "Crep\xFAsculo",
  glacier: "Glaciar",
  harvest: "Colheita",
  lagoon: "Lagoa",
  matcha: "Matcha",
  obsidian: "Obsidiana",
  redwood: "Sequoia",
  sakura: "Sakura",
  terracotta: "Terracota",
  tomato: "Tomate"
};

// src/i18n/theme-category-labels.en.json
var theme_category_labels_en_default = {
  all: "All",
  curated: "Featured",
  basic: "Basic",
  claude: "Studio",
  tweakcn: "Signature",
  community: "Community"
};

// src/i18n/theme-category-labels.es.json
var theme_category_labels_es_default = {
  all: "Todos",
  curated: "Destacados",
  basic: "B\xE1sicos",
  claude: "Studio",
  tweakcn: "Signature",
  community: "Comunidad"
};

// src/i18n/theme-category-labels.pt.json
var theme_category_labels_pt_default = {
  all: "Todos",
  curated: "Destaques",
  basic: "B\xE1sicos",
  claude: "Studio",
  tweakcn: "Signature",
  community: "Comunidade"
};

// src/themes/builtin/default.ts
var defaultTheme = defineTheme({
  name: "default",
  label: "Default",
  light: {
    background: "zinc-50",
    foreground: "zinc-950",
    card: "white",
    cardForeground: "zinc-950",
    popover: "white",
    popoverForeground: "zinc-950",
    primary: "zinc-900",
    primaryForeground: "zinc-50",
    secondary: "zinc-100",
    secondaryForeground: "zinc-900",
    muted: "zinc-100",
    mutedForeground: "zinc-500",
    accent: "zinc-100",
    accentForeground: "zinc-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "zinc-200",
    input: "zinc-200",
    ring: "zinc-950"
  },
  dark: {
    background: "zinc-950",
    foreground: "zinc-50",
    card: "zinc-900",
    cardForeground: "zinc-50",
    popover: "zinc-950",
    popoverForeground: "zinc-50",
    primary: "zinc-50",
    primaryForeground: "zinc-900",
    secondary: "zinc-800",
    secondaryForeground: "zinc-50",
    muted: "zinc-800",
    mutedForeground: "zinc-400",
    accent: "zinc-800",
    accentForeground: "zinc-50",
    destructive: "red-400",
    destructiveForeground: "zinc-950",
    border: "zinc-800",
    input: "zinc-800",
    ring: "zinc-300"
  },
  radius: "0.5rem"
});

// src/themes/builtin/ocean.ts
var oceanTheme = defineTheme({
  name: "ocean",
  label: "Ocean Blue",
  light: {
    background: "slate-50",
    foreground: "slate-950",
    card: "white",
    cardForeground: "slate-950",
    popover: "white",
    popoverForeground: "slate-950",
    primary: "blue-600",
    primaryForeground: "white",
    secondary: "sky-100",
    secondaryForeground: "sky-900",
    muted: "slate-100",
    mutedForeground: "slate-500",
    accent: "sky-100",
    accentForeground: "sky-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "slate-200",
    input: "slate-200",
    ring: "blue-600"
  },
  dark: {
    background: "slate-950",
    foreground: "slate-50",
    card: "slate-900",
    cardForeground: "slate-50",
    popover: "slate-950",
    popoverForeground: "slate-50",
    primary: "blue-400",
    primaryForeground: "slate-950",
    secondary: "slate-800",
    secondaryForeground: "slate-200",
    muted: "slate-800",
    mutedForeground: "slate-400",
    accent: "slate-800",
    accentForeground: "slate-200",
    destructive: "red-400",
    destructiveForeground: "slate-950",
    border: "slate-800",
    input: "slate-800",
    ring: "blue-400"
  },
  radius: "0.5rem"
});

// src/themes/builtin/forest.ts
var forestTheme = defineTheme({
  name: "forest",
  label: "Forest Green",
  light: {
    background: "stone-50",
    foreground: "stone-950",
    card: "white",
    cardForeground: "stone-950",
    popover: "white",
    popoverForeground: "stone-950",
    primary: "green-700",
    primaryForeground: "white",
    secondary: "emerald-100",
    secondaryForeground: "emerald-900",
    muted: "stone-100",
    mutedForeground: "stone-500",
    accent: "emerald-100",
    accentForeground: "emerald-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "stone-200",
    input: "stone-200",
    ring: "green-700"
  },
  dark: {
    background: "stone-950",
    foreground: "stone-50",
    card: "stone-900",
    cardForeground: "stone-50",
    popover: "stone-950",
    popoverForeground: "stone-50",
    primary: "green-400",
    primaryForeground: "stone-950",
    secondary: "stone-800",
    secondaryForeground: "stone-200",
    muted: "stone-800",
    mutedForeground: "stone-400",
    accent: "stone-800",
    accentForeground: "stone-200",
    destructive: "red-400",
    destructiveForeground: "stone-950",
    border: "stone-800",
    input: "stone-800",
    ring: "green-400"
  },
  radius: "0.375rem"
});

// src/themes/builtin/sunset.ts
var sunsetTheme = defineTheme({
  name: "sunset",
  label: "Sunset Orange",
  light: {
    background: "orange-50",
    foreground: "orange-950",
    card: "white",
    cardForeground: "orange-950",
    popover: "white",
    popoverForeground: "orange-950",
    primary: "orange-600",
    primaryForeground: "white",
    secondary: "amber-100",
    secondaryForeground: "amber-900",
    muted: "orange-100",
    mutedForeground: "orange-500",
    accent: "amber-100",
    accentForeground: "amber-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "orange-200",
    input: "orange-200",
    ring: "orange-600"
  },
  dark: {
    background: "stone-950",
    foreground: "orange-50",
    card: "stone-900",
    cardForeground: "orange-50",
    popover: "stone-950",
    popoverForeground: "orange-50",
    primary: "orange-400",
    primaryForeground: "stone-950",
    secondary: "stone-800",
    secondaryForeground: "orange-200",
    muted: "stone-800",
    mutedForeground: "stone-400",
    accent: "stone-800",
    accentForeground: "orange-200",
    destructive: "red-400",
    destructiveForeground: "stone-950",
    border: "stone-800",
    input: "stone-800",
    ring: "orange-400"
  },
  radius: "0.5rem"
});

// src/themes/builtin/midnight.ts
var midnightTheme = defineTheme({
  name: "midnight",
  label: "Midnight",
  light: {
    background: "slate-100",
    foreground: "slate-950",
    card: "white",
    cardForeground: "slate-950",
    popover: "white",
    popoverForeground: "slate-950",
    primary: "indigo-700",
    primaryForeground: "white",
    secondary: "slate-200",
    secondaryForeground: "slate-800",
    muted: "slate-100",
    mutedForeground: "slate-500",
    accent: "indigo-100",
    accentForeground: "indigo-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "slate-200",
    input: "slate-200",
    ring: "indigo-700"
  },
  dark: {
    background: "slate-950",
    foreground: "slate-100",
    card: "slate-900",
    cardForeground: "slate-100",
    popover: "slate-950",
    popoverForeground: "slate-100",
    primary: "indigo-400",
    primaryForeground: "slate-950",
    secondary: "slate-800",
    secondaryForeground: "slate-200",
    muted: "slate-800",
    mutedForeground: "slate-400",
    accent: "indigo-900",
    accentForeground: "indigo-100",
    destructive: "red-400",
    destructiveForeground: "slate-950",
    border: "slate-800",
    input: "slate-800",
    ring: "indigo-400"
  },
  radius: "0.25rem"
});

// src/themes/builtin/rose.ts
var roseTheme = defineTheme({
  name: "rose",
  label: "Rose Pink",
  light: {
    background: "rose-50",
    foreground: "rose-950",
    card: "white",
    cardForeground: "rose-950",
    popover: "white",
    popoverForeground: "rose-950",
    primary: "rose-600",
    primaryForeground: "white",
    secondary: "pink-100",
    secondaryForeground: "pink-900",
    muted: "rose-100",
    mutedForeground: "rose-500",
    accent: "pink-100",
    accentForeground: "pink-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "rose-200",
    input: "rose-200",
    ring: "rose-600"
  },
  dark: {
    background: "rose-950",
    foreground: "rose-50",
    card: "rose-900",
    cardForeground: "rose-50",
    popover: "rose-950",
    popoverForeground: "rose-50",
    primary: "rose-400",
    primaryForeground: "rose-950",
    secondary: "rose-900",
    secondaryForeground: "rose-200",
    muted: "rose-900",
    mutedForeground: "rose-300",
    accent: "rose-900",
    accentForeground: "rose-200",
    destructive: "red-400",
    destructiveForeground: "rose-950",
    border: "rose-800",
    input: "rose-800",
    ring: "rose-400"
  },
  radius: "0.75rem"
});

// src/themes/builtin/amber.ts
var amberTheme = defineTheme({
  name: "amber",
  label: "Warm Amber",
  light: {
    background: "amber-50",
    foreground: "amber-950",
    card: "white",
    cardForeground: "amber-950",
    popover: "white",
    popoverForeground: "amber-950",
    primary: "amber-600",
    primaryForeground: "white",
    secondary: "yellow-100",
    secondaryForeground: "yellow-900",
    muted: "amber-100",
    mutedForeground: "amber-600",
    accent: "yellow-100",
    accentForeground: "yellow-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "amber-200",
    input: "amber-200",
    ring: "amber-600"
  },
  dark: {
    background: "stone-950",
    foreground: "amber-50",
    card: "stone-900",
    cardForeground: "amber-50",
    popover: "stone-950",
    popoverForeground: "amber-50",
    primary: "amber-400",
    primaryForeground: "stone-950",
    secondary: "stone-800",
    secondaryForeground: "amber-200",
    muted: "stone-800",
    mutedForeground: "stone-400",
    accent: "stone-800",
    accentForeground: "amber-200",
    destructive: "red-400",
    destructiveForeground: "stone-950",
    border: "stone-800",
    input: "stone-800",
    ring: "amber-400"
  },
  radius: "0.5rem"
});

// src/themes/builtin/indigo.ts
var indigoTheme = defineTheme({
  name: "indigo",
  label: "Deep Indigo",
  light: {
    background: "slate-50",
    foreground: "slate-950",
    card: "white",
    cardForeground: "slate-950",
    popover: "white",
    popoverForeground: "slate-950",
    primary: "indigo-600",
    primaryForeground: "white",
    secondary: "indigo-100",
    secondaryForeground: "indigo-900",
    muted: "slate-100",
    mutedForeground: "slate-500",
    accent: "violet-100",
    accentForeground: "violet-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "slate-200",
    input: "slate-200",
    ring: "indigo-600"
  },
  dark: {
    background: "slate-950",
    foreground: "slate-50",
    card: "slate-900",
    cardForeground: "slate-50",
    popover: "slate-950",
    popoverForeground: "slate-50",
    primary: "indigo-400",
    primaryForeground: "slate-950",
    secondary: "slate-800",
    secondaryForeground: "slate-200",
    muted: "slate-800",
    mutedForeground: "slate-400",
    accent: "violet-900",
    accentForeground: "violet-100",
    destructive: "red-400",
    destructiveForeground: "slate-950",
    border: "slate-800",
    input: "slate-800",
    ring: "indigo-400"
  },
  radius: "0.5rem"
});

// src/themes/builtin/teal.ts
var tealTheme = defineTheme({
  name: "teal",
  label: "Teal",
  light: {
    background: "teal-50",
    foreground: "teal-950",
    card: "white",
    cardForeground: "teal-950",
    popover: "white",
    popoverForeground: "teal-950",
    primary: "teal-600",
    primaryForeground: "white",
    secondary: "cyan-100",
    secondaryForeground: "cyan-900",
    muted: "teal-100",
    mutedForeground: "teal-600",
    accent: "cyan-100",
    accentForeground: "cyan-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "teal-200",
    input: "teal-200",
    ring: "teal-600"
  },
  dark: {
    background: "slate-950",
    foreground: "teal-50",
    card: "slate-900",
    cardForeground: "teal-50",
    popover: "slate-950",
    popoverForeground: "teal-50",
    primary: "teal-400",
    primaryForeground: "slate-950",
    secondary: "slate-800",
    secondaryForeground: "teal-200",
    muted: "slate-800",
    mutedForeground: "slate-400",
    accent: "slate-800",
    accentForeground: "teal-200",
    destructive: "red-400",
    destructiveForeground: "slate-950",
    border: "slate-800",
    input: "slate-800",
    ring: "teal-400"
  },
  radius: "0.5rem"
});

// src/themes/builtin/candy.ts
var candyTheme = defineTheme({
  name: "candy",
  label: "Candy",
  light: {
    background: "pink-50",
    foreground: "pink-950",
    card: "white",
    cardForeground: "pink-950",
    popover: "white",
    popoverForeground: "pink-950",
    primary: "fuchsia-600",
    primaryForeground: "white",
    secondary: "pink-100",
    secondaryForeground: "pink-900",
    muted: "pink-100",
    mutedForeground: "pink-500",
    accent: "purple-100",
    accentForeground: "purple-900",
    destructive: "red-600",
    destructiveForeground: "white",
    border: "pink-200",
    input: "pink-200",
    ring: "fuchsia-600"
  },
  dark: {
    background: "neutral-950",
    foreground: "pink-50",
    card: "neutral-900",
    cardForeground: "pink-50",
    popover: "neutral-950",
    popoverForeground: "pink-50",
    primary: "fuchsia-400",
    primaryForeground: "neutral-950",
    secondary: "neutral-800",
    secondaryForeground: "pink-200",
    muted: "neutral-800",
    mutedForeground: "neutral-400",
    accent: "purple-900",
    accentForeground: "purple-100",
    destructive: "red-400",
    destructiveForeground: "neutral-950",
    border: "neutral-800",
    input: "neutral-800",
    ring: "fuchsia-400"
  },
  radius: "1rem"
});

// src/themes/builtin/tailwind-basics.ts
var basic = (name, label, primary) => createTheme({ name, label, primary, category: "Basic", radius: "0.5rem" });
var twRedTheme = basic("tw-red", "Red", "red");
var twOrangeTheme = basic("tw-orange", "Orange", "orange");
var twAmberTheme = basic("tw-amber", "Amber", "amber");
var twYellowTheme = basic("tw-yellow", "Yellow", "yellow");
var twLimeTheme = basic("tw-lime", "Lime", "lime");
var twGreenTheme = basic("tw-green", "Green", "green");
var twEmeraldTheme = basic("tw-emerald", "Emerald", "emerald");
var twTealTheme = basic("tw-teal", "Teal", "teal");
var twCyanTheme = basic("tw-cyan", "Cyan", "cyan");
var twSkyTheme = basic("tw-sky", "Sky", "sky");
var twBlueTheme = basic("tw-blue", "Blue", "blue");
var twIndigoTheme = basic("tw-indigo", "Indigo", "indigo");
var twVioletTheme = basic("tw-violet", "Violet", "violet");
var twPurpleTheme = basic("tw-purple", "Purple", "purple");
var twFuchsiaTheme = basic("tw-fuchsia", "Fuchsia", "fuchsia");
var twPinkTheme = basic("tw-pink", "Pink", "pink");
var twRoseTheme = basic("tw-rose", "Rose", "rose");
var tailwindBasicThemes = [
  twRedTheme,
  twOrangeTheme,
  twAmberTheme,
  twYellowTheme,
  twLimeTheme,
  twGreenTheme,
  twEmeraldTheme,
  twTealTheme,
  twCyanTheme,
  twSkyTheme,
  twBlueTheme,
  twIndigoTheme,
  twVioletTheme,
  twPurpleTheme,
  twFuchsiaTheme,
  twPinkTheme,
  twRoseTheme
];

// src/themes/builtin/claude-themes.ts
var matchaTheme = createTheme({
  name: "matcha",
  label: "Matcha",
  primary: "green",
  neutral: "stone",
  vividness: "elegant",
  radius: "0.375rem",
  category: "Claude"
});
var terracottaTheme = createTheme({
  name: "terracotta",
  label: "Terracotta",
  primary: "orange",
  neutral: "stone",
  secondary: "rose",
  vividness: "professional",
  radius: "0.5rem",
  category: "Claude"
});
var glacierTheme = createTheme({
  name: "glacier",
  label: "Glacier",
  primary: "sky",
  neutral: "slate",
  vividness: "professional",
  radius: "0.25rem",
  category: "Claude"
});
var duskTheme = createTheme({
  name: "dusk",
  label: "Dusk",
  primary: "violet",
  neutral: "slate",
  radius: "0.5rem",
  category: "Claude"
});
var sakuraTheme = createTheme({
  name: "sakura",
  label: "Sakura",
  primary: "pink",
  secondary: "rose",
  vividness: "elegant",
  radius: "0.75rem",
  category: "Claude"
});
var obsidianTheme = createTheme({
  name: "obsidian",
  label: "Obsidian",
  primary: "zinc",
  neutral: "zinc",
  vividness: "elegant",
  radius: "0.25rem",
  category: "Claude"
});
var carnivalTheme = createTheme({
  name: "carnival",
  label: "Carnival",
  primary: "fuchsia",
  secondary: "amber",
  vividness: "playful",
  radius: "1rem",
  category: "Claude"
});
var redwoodTheme = createTheme({
  name: "redwood",
  label: "Redwood",
  primary: "red",
  neutral: "stone",
  vividness: "elegant",
  radius: "0.5rem",
  category: "Claude"
});
var lagoonTheme = createTheme({
  name: "lagoon",
  label: "Lagoon",
  primary: "teal",
  secondary: "sky",
  neutral: "slate",
  vividness: "vivid",
  radius: "0.5rem",
  category: "Claude"
});
var harvestTheme = createTheme({
  name: "harvest",
  label: "Harvest",
  primary: "amber",
  secondary: "lime",
  neutral: "stone",
  vividness: "vivid",
  radius: "0.625rem",
  category: "Claude"
});
var tomatoTheme = createTheme({
  name: "tomato",
  label: "Tomato",
  primary: "red",
  secondary: "green",
  neutral: "stone",
  vividness: "vivid",
  radius: "0.5rem",
  category: "Claude"
});
var claudeThemes = [
  matchaTheme,
  tomatoTheme,
  terracottaTheme,
  glacierTheme,
  duskTheme,
  sakuraTheme,
  obsidianTheme,
  carnivalTheme,
  redwoodTheme,
  lagoonTheme,
  harvestTheme
];

// src/themes/builtin/index.ts
var builtinThemes = [
  defaultTheme,
  oceanTheme,
  forestTheme,
  sunsetTheme,
  midnightTheme,
  roseTheme,
  amberTheme,
  indigoTheme,
  tealTheme,
  candyTheme,
  ...tailwindBasicThemes
];

// src/themes/tweakcn/modern-minimal.ts
var modernMinimalTheme = defineTheme({
  name: "modern-minimal",
  label: "Modern Minimal",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("oklch(0.145 0 0)"),
    card: raw("oklch(0.985 0 0)"),
    cardForeground: raw("oklch(0.145 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.145 0 0)"),
    primary: raw("oklch(0.205 0 0)"),
    primaryForeground: raw("oklch(0.985 0 0)"),
    secondary: raw("oklch(0.97 0 0)"),
    secondaryForeground: raw("oklch(0.205 0 0)"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("oklch(0.556 0 0)"),
    accent: raw("oklch(0.97 0 0)"),
    accentForeground: raw("oklch(0.205 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("oklch(0.922 0 0)"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.708 0 0)")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("oklch(0.985 0 0)"),
    card: raw("oklch(0.205 0 0)"),
    cardForeground: raw("oklch(0.985 0 0)"),
    popover: raw("oklch(0.145 0 0)"),
    popoverForeground: raw("oklch(0.985 0 0)"),
    primary: raw("oklch(0.922 0 0)"),
    primaryForeground: raw("oklch(0.205 0 0)"),
    secondary: raw("oklch(0.269 0 0)"),
    secondaryForeground: raw("oklch(0.985 0 0)"),
    muted: raw("oklch(0.269 0 0)"),
    mutedForeground: raw("oklch(0.708 0 0)"),
    accent: raw("oklch(0.269 0 0)"),
    accentForeground: raw("oklch(0.985 0 0)"),
    destructive: raw("oklch(0.396 0.141 25.723)"),
    destructiveForeground: raw("oklch(0.637 0.237 25.331)"),
    border: raw("oklch(0.269 0 0)"),
    input: raw("oklch(0.269 0 0)"),
    ring: raw("oklch(0.439 0 0)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/violet-bloom.ts
var violetBloomTheme = defineTheme({
  name: "violet-bloom",
  label: "Violet Bloom",
  light: {
    background: raw("oklch(0.98 0.005 300)"),
    foreground: raw("oklch(0.2 0.04 300)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.2 0.04 300)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.2 0.04 300)"),
    primary: raw("oklch(0.55 0.22 293)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.94 0.02 300)"),
    secondaryForeground: raw("oklch(0.35 0.08 295)"),
    muted: raw("oklch(0.94 0.02 300)"),
    mutedForeground: raw("oklch(0.55 0.05 295)"),
    accent: raw("oklch(0.92 0.04 300)"),
    accentForeground: raw("oklch(0.35 0.1 295)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9 0.03 300)"),
    input: raw("oklch(0.9 0.03 300)"),
    ring: raw("oklch(0.55 0.22 293)")
  },
  dark: {
    background: raw("oklch(0.16 0.03 295)"),
    foreground: raw("oklch(0.95 0.01 300)"),
    card: raw("oklch(0.2 0.04 295)"),
    cardForeground: raw("oklch(0.95 0.01 300)"),
    popover: raw("oklch(0.16 0.03 295)"),
    popoverForeground: raw("oklch(0.95 0.01 300)"),
    primary: raw("oklch(0.7 0.18 293)"),
    primaryForeground: raw("oklch(0.16 0.03 295)"),
    secondary: raw("oklch(0.26 0.05 295)"),
    secondaryForeground: raw("oklch(0.9 0.02 300)"),
    muted: raw("oklch(0.26 0.05 295)"),
    mutedForeground: raw("oklch(0.65 0.05 295)"),
    accent: raw("oklch(0.3 0.06 295)"),
    accentForeground: raw("oklch(0.9 0.02 300)"),
    destructive: raw("oklch(0.45 0.18 25)"),
    destructiveForeground: raw("oklch(0.85 0.05 25)"),
    border: raw("oklch(0.3 0.05 295)"),
    input: raw("oklch(0.3 0.05 295)"),
    ring: raw("oklch(0.7 0.18 293)")
  },
  radius: "0.75rem"
});

// src/themes/tweakcn/t3-chat.ts
var t3ChatTheme = defineTheme({
  name: "t3-chat",
  label: "T3 Chat",
  light: {
    background: raw("oklch(0.985 0.002 247.839)"),
    foreground: raw("oklch(0.208 0.042 265.755)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.208 0.042 265.755)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.208 0.042 265.755)"),
    primary: raw("oklch(0.585 0.233 277.117)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.967 0.003 264.542)"),
    secondaryForeground: raw("oklch(0.208 0.042 265.755)"),
    muted: raw("oklch(0.967 0.003 264.542)"),
    mutedForeground: raw("oklch(0.551 0.027 264.364)"),
    accent: raw("oklch(0.962 0.018 272.314)"),
    accentForeground: raw("oklch(0.457 0.24 277.023)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.928 0.006 264.531)"),
    input: raw("oklch(0.928 0.006 264.531)"),
    ring: raw("oklch(0.585 0.233 277.117)")
  },
  dark: {
    background: raw("oklch(0.208 0.042 265.755)"),
    foreground: raw("oklch(0.985 0.002 247.839)"),
    card: raw("oklch(0.279 0.041 260.031)"),
    cardForeground: raw("oklch(0.985 0.002 247.839)"),
    popover: raw("oklch(0.208 0.042 265.755)"),
    popoverForeground: raw("oklch(0.985 0.002 247.839)"),
    primary: raw("oklch(0.673 0.182 276.935)"),
    primaryForeground: raw("oklch(0.208 0.042 265.755)"),
    secondary: raw("oklch(0.279 0.041 260.031)"),
    secondaryForeground: raw("oklch(0.985 0.002 247.839)"),
    muted: raw("oklch(0.279 0.041 260.031)"),
    mutedForeground: raw("oklch(0.707 0.022 261.325)"),
    accent: raw("oklch(0.457 0.24 277.023)"),
    accentForeground: raw("oklch(0.962 0.018 272.314)"),
    destructive: raw("oklch(0.396 0.141 25.723)"),
    destructiveForeground: raw("oklch(0.637 0.237 25.331)"),
    border: raw("oklch(0.372 0.044 257.287)"),
    input: raw("oklch(0.372 0.044 257.287)"),
    ring: raw("oklch(0.673 0.182 276.935)")
  },
  radius: "0.625rem"
});

// src/themes/tweakcn/twitter.ts
var twitterTheme = defineTheme({
  name: "twitter",
  label: "Twitter / X",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("oklch(0.141 0.005 285.823)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.141 0.005 285.823)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.141 0.005 285.823)"),
    primary: raw("oklch(0.623 0.214 259.815)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.967 0.001 286.375)"),
    secondaryForeground: raw("oklch(0.141 0.005 285.823)"),
    muted: raw("oklch(0.967 0.001 286.375)"),
    mutedForeground: raw("oklch(0.552 0.016 285.938)"),
    accent: raw("oklch(0.967 0.001 286.375)"),
    accentForeground: raw("oklch(0.141 0.005 285.823)"),
    destructive: raw("oklch(0.637 0.237 25.331)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.92 0.004 286.32)"),
    input: raw("oklch(0.92 0.004 286.32)"),
    ring: raw("oklch(0.623 0.214 259.815)")
  },
  dark: {
    background: raw("oklch(0.141 0.005 285.823)"),
    foreground: raw("oklch(0.985 0 0)"),
    card: raw("oklch(0.21 0.006 285.885)"),
    cardForeground: raw("oklch(0.985 0 0)"),
    popover: raw("oklch(0.141 0.005 285.823)"),
    popoverForeground: raw("oklch(0.985 0 0)"),
    primary: raw("oklch(0.707 0.165 254.624)"),
    primaryForeground: raw("oklch(0.141 0.005 285.823)"),
    secondary: raw("oklch(0.274 0.006 286.033)"),
    secondaryForeground: raw("oklch(0.985 0 0)"),
    muted: raw("oklch(0.274 0.006 286.033)"),
    mutedForeground: raw("oklch(0.705 0.015 286.067)"),
    accent: raw("oklch(0.274 0.006 286.033)"),
    accentForeground: raw("oklch(0.985 0 0)"),
    destructive: raw("oklch(0.505 0.213 27.518)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("oklch(0.274 0.006 286.033)"),
    input: raw("oklch(0.274 0.006 286.033)"),
    ring: raw("oklch(0.707 0.165 254.624)")
  },
  radius: "1rem"
});

// src/themes/tweakcn/mocha-mousse.ts
var mochaMousseTheme = defineTheme({
  name: "mocha-mousse",
  label: "Mocha Mousse",
  light: {
    background: raw("oklch(0.962 0.01 60)"),
    foreground: raw("oklch(0.25 0.04 50)"),
    card: raw("oklch(0.98 0.006 60)"),
    cardForeground: raw("oklch(0.25 0.04 50)"),
    popover: raw("oklch(0.98 0.006 60)"),
    popoverForeground: raw("oklch(0.25 0.04 50)"),
    primary: raw("oklch(0.52 0.1 45)"),
    primaryForeground: raw("oklch(0.98 0.006 60)"),
    secondary: raw("oklch(0.9 0.02 55)"),
    secondaryForeground: raw("oklch(0.35 0.06 50)"),
    muted: raw("oklch(0.92 0.015 58)"),
    mutedForeground: raw("oklch(0.52 0.04 55)"),
    accent: raw("oklch(0.88 0.03 58)"),
    accentForeground: raw("oklch(0.3 0.06 50)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.98 0.006 60)"),
    border: raw("oklch(0.88 0.025 57)"),
    input: raw("oklch(0.88 0.025 57)"),
    ring: raw("oklch(0.52 0.1 45)")
  },
  dark: {
    background: raw("oklch(0.2 0.03 50)"),
    foreground: raw("oklch(0.94 0.015 58)"),
    card: raw("oklch(0.25 0.035 50)"),
    cardForeground: raw("oklch(0.94 0.015 58)"),
    popover: raw("oklch(0.2 0.03 50)"),
    popoverForeground: raw("oklch(0.94 0.015 58)"),
    primary: raw("oklch(0.72 0.1 55)"),
    primaryForeground: raw("oklch(0.2 0.03 50)"),
    secondary: raw("oklch(0.3 0.04 50)"),
    secondaryForeground: raw("oklch(0.88 0.02 58)"),
    muted: raw("oklch(0.3 0.04 50)"),
    mutedForeground: raw("oklch(0.65 0.04 55)"),
    accent: raw("oklch(0.35 0.05 50)"),
    accentForeground: raw("oklch(0.88 0.02 58)"),
    destructive: raw("oklch(0.45 0.18 25)"),
    destructiveForeground: raw("oklch(0.88 0.02 58)"),
    border: raw("oklch(0.32 0.04 50)"),
    input: raw("oklch(0.32 0.04 50)"),
    ring: raw("oklch(0.72 0.1 55)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/bubblegum.ts
var bubblegumTheme = defineTheme({
  name: "bubblegum",
  label: "Bubblegum",
  light: {
    background: raw("oklch(0.98 0.012 340)"),
    foreground: raw("oklch(0.25 0.05 340)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.25 0.05 340)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.25 0.05 340)"),
    primary: raw("oklch(0.68 0.22 355)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.94 0.04 300)"),
    secondaryForeground: raw("oklch(0.35 0.08 300)"),
    muted: raw("oklch(0.95 0.015 340)"),
    mutedForeground: raw("oklch(0.55 0.06 340)"),
    accent: raw("oklch(0.92 0.06 290)"),
    accentForeground: raw("oklch(0.35 0.1 290)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9 0.03 340)"),
    input: raw("oklch(0.9 0.03 340)"),
    ring: raw("oklch(0.68 0.22 355)")
  },
  dark: {
    background: raw("oklch(0.2 0.04 340)"),
    foreground: raw("oklch(0.96 0.01 340)"),
    card: raw("oklch(0.26 0.05 340)"),
    cardForeground: raw("oklch(0.96 0.01 340)"),
    popover: raw("oklch(0.2 0.04 340)"),
    popoverForeground: raw("oklch(0.96 0.01 340)"),
    primary: raw("oklch(0.78 0.18 355)"),
    primaryForeground: raw("oklch(0.2 0.04 340)"),
    secondary: raw("oklch(0.3 0.06 300)"),
    secondaryForeground: raw("oklch(0.9 0.02 300)"),
    muted: raw("oklch(0.28 0.04 340)"),
    mutedForeground: raw("oklch(0.65 0.05 340)"),
    accent: raw("oklch(0.32 0.08 290)"),
    accentForeground: raw("oklch(0.9 0.03 290)"),
    destructive: raw("oklch(0.45 0.18 25)"),
    destructiveForeground: raw("oklch(0.9 0.02 25)"),
    border: raw("oklch(0.32 0.05 340)"),
    input: raw("oklch(0.32 0.05 340)"),
    ring: raw("oklch(0.78 0.18 355)")
  },
  radius: "1rem"
});

// src/themes/tweakcn/amethyst-haze.ts
var amethystHazeTheme = defineTheme({
  name: "amethyst-haze",
  label: "Amethyst Haze",
  light: {
    background: raw("oklch(0.97 0.008 310)"),
    foreground: raw("oklch(0.22 0.045 305)"),
    card: raw("oklch(0.99 0.004 310)"),
    cardForeground: raw("oklch(0.22 0.045 305)"),
    popover: raw("oklch(0.99 0.004 310)"),
    popoverForeground: raw("oklch(0.22 0.045 305)"),
    primary: raw("oklch(0.56 0.2 305)"),
    primaryForeground: raw("oklch(0.99 0.004 310)"),
    secondary: raw("oklch(0.93 0.018 310)"),
    secondaryForeground: raw("oklch(0.38 0.08 305)"),
    muted: raw("oklch(0.93 0.012 310)"),
    mutedForeground: raw("oklch(0.52 0.05 305)"),
    accent: raw("oklch(0.91 0.03 280)"),
    accentForeground: raw("oklch(0.32 0.1 280)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.99 0.004 310)"),
    border: raw("oklch(0.9 0.02 308)"),
    input: raw("oklch(0.9 0.02 308)"),
    ring: raw("oklch(0.56 0.2 305)")
  },
  dark: {
    background: raw("oklch(0.17 0.03 305)"),
    foreground: raw("oklch(0.94 0.01 308)"),
    card: raw("oklch(0.22 0.038 305)"),
    cardForeground: raw("oklch(0.94 0.01 308)"),
    popover: raw("oklch(0.17 0.03 305)"),
    popoverForeground: raw("oklch(0.94 0.01 308)"),
    primary: raw("oklch(0.72 0.17 305)"),
    primaryForeground: raw("oklch(0.17 0.03 305)"),
    secondary: raw("oklch(0.28 0.05 305)"),
    secondaryForeground: raw("oklch(0.88 0.015 308)"),
    muted: raw("oklch(0.26 0.04 305)"),
    mutedForeground: raw("oklch(0.64 0.05 305)"),
    accent: raw("oklch(0.3 0.07 280)"),
    accentForeground: raw("oklch(0.88 0.02 280)"),
    destructive: raw("oklch(0.46 0.18 25)"),
    destructiveForeground: raw("oklch(0.88 0.02 25)"),
    border: raw("oklch(0.3 0.04 305)"),
    input: raw("oklch(0.3 0.04 305)"),
    ring: raw("oklch(0.72 0.17 305)")
  },
  radius: "0.75rem"
});

// src/themes/tweakcn/notebook.ts
var notebookTheme = defineTheme({
  name: "notebook",
  label: "Notebook",
  light: {
    background: raw("oklch(0.985 0.005 85)"),
    foreground: raw("oklch(0.2 0.025 80)"),
    card: raw("oklch(0.99 0.003 85)"),
    cardForeground: raw("oklch(0.2 0.025 80)"),
    popover: raw("oklch(0.99 0.003 85)"),
    popoverForeground: raw("oklch(0.2 0.025 80)"),
    primary: raw("oklch(0.35 0.06 80)"),
    primaryForeground: raw("oklch(0.985 0.005 85)"),
    secondary: raw("oklch(0.93 0.012 82)"),
    secondaryForeground: raw("oklch(0.3 0.04 80)"),
    muted: raw("oklch(0.94 0.008 84)"),
    mutedForeground: raw("oklch(0.5 0.03 80)"),
    accent: raw("oklch(0.88 0.035 100)"),
    accentForeground: raw("oklch(0.3 0.06 95)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.985 0.005 85)"),
    border: raw("oklch(0.87 0.02 82)"),
    input: raw("oklch(0.87 0.02 82)"),
    ring: raw("oklch(0.35 0.06 80)")
  },
  dark: {
    background: raw("oklch(0.18 0.02 80)"),
    foreground: raw("oklch(0.92 0.01 85)"),
    card: raw("oklch(0.22 0.025 80)"),
    cardForeground: raw("oklch(0.92 0.01 85)"),
    popover: raw("oklch(0.18 0.02 80)"),
    popoverForeground: raw("oklch(0.92 0.01 85)"),
    primary: raw("oklch(0.78 0.07 85)"),
    primaryForeground: raw("oklch(0.18 0.02 80)"),
    secondary: raw("oklch(0.28 0.03 80)"),
    secondaryForeground: raw("oklch(0.88 0.01 85)"),
    muted: raw("oklch(0.27 0.025 80)"),
    mutedForeground: raw("oklch(0.6 0.025 82)"),
    accent: raw("oklch(0.35 0.06 100)"),
    accentForeground: raw("oklch(0.88 0.025 95)"),
    destructive: raw("oklch(0.45 0.18 25)"),
    destructiveForeground: raw("oklch(0.9 0.01 25)"),
    border: raw("oklch(0.3 0.025 80)"),
    input: raw("oklch(0.3 0.025 80)"),
    ring: raw("oklch(0.78 0.07 85)")
  },
  radius: "0.25rem"
});

// src/themes/tweakcn/doom-64.ts
var doom64Theme = defineTheme({
  name: "doom-64",
  label: "Doom 64",
  light: {
    background: raw("oklch(0.15 0.04 30)"),
    foreground: raw("oklch(0.9 0.04 40)"),
    card: raw("oklch(0.2 0.05 30)"),
    cardForeground: raw("oklch(0.9 0.04 40)"),
    popover: raw("oklch(0.15 0.04 30)"),
    popoverForeground: raw("oklch(0.9 0.04 40)"),
    primary: raw("oklch(0.65 0.23 25)"),
    primaryForeground: raw("oklch(0.1 0.02 30)"),
    secondary: raw("oklch(0.25 0.06 30)"),
    secondaryForeground: raw("oklch(0.85 0.04 38)"),
    muted: raw("oklch(0.22 0.05 30)"),
    mutedForeground: raw("oklch(0.6 0.05 35)"),
    accent: raw("oklch(0.55 0.18 45)"),
    accentForeground: raw("oklch(0.1 0.02 30)"),
    destructive: raw("oklch(0.7 0.25 28)"),
    destructiveForeground: raw("oklch(0.1 0.02 30)"),
    border: raw("oklch(0.28 0.07 30)"),
    input: raw("oklch(0.28 0.07 30)"),
    ring: raw("oklch(0.65 0.23 25)")
  },
  dark: {
    background: raw("oklch(0.1 0.03 30)"),
    foreground: raw("oklch(0.88 0.04 40)"),
    card: raw("oklch(0.15 0.04 30)"),
    cardForeground: raw("oklch(0.88 0.04 40)"),
    popover: raw("oklch(0.1 0.03 30)"),
    popoverForeground: raw("oklch(0.88 0.04 40)"),
    primary: raw("oklch(0.7 0.25 25)"),
    primaryForeground: raw("oklch(0.1 0.03 30)"),
    secondary: raw("oklch(0.2 0.05 30)"),
    secondaryForeground: raw("oklch(0.85 0.04 38)"),
    muted: raw("oklch(0.18 0.04 30)"),
    mutedForeground: raw("oklch(0.56 0.05 35)"),
    accent: raw("oklch(0.58 0.2 45)"),
    accentForeground: raw("oklch(0.1 0.02 30)"),
    destructive: raw("oklch(0.65 0.23 28)"),
    destructiveForeground: raw("oklch(0.1 0.02 30)"),
    border: raw("oklch(0.22 0.06 30)"),
    input: raw("oklch(0.22 0.06 30)"),
    ring: raw("oklch(0.7 0.25 25)")
  },
  radius: "0.125rem"
});

// src/themes/tweakcn/catppuccin.ts
var catppuccinTheme = defineTheme({
  name: "catppuccin",
  label: "Catppuccin",
  light: {
    background: raw("oklch(0.955 0.012 272.8)"),
    foreground: raw("oklch(0.318 0.042 283.2)"),
    card: raw("oklch(0.928 0.014 267.5)"),
    cardForeground: raw("oklch(0.318 0.042 283.2)"),
    popover: raw("oklch(0.955 0.012 272.8)"),
    popoverForeground: raw("oklch(0.318 0.042 283.2)"),
    primary: raw("oklch(0.605 0.168 285.4)"),
    primaryForeground: raw("oklch(0.955 0.012 272.8)"),
    secondary: raw("oklch(0.906 0.016 268.2)"),
    secondaryForeground: raw("oklch(0.436 0.046 285.3)"),
    muted: raw("oklch(0.906 0.016 268.2)"),
    mutedForeground: raw("oklch(0.538 0.044 283.7)"),
    accent: raw("oklch(0.875 0.065 304.5)"),
    accentForeground: raw("oklch(0.436 0.066 304.5)"),
    destructive: raw("oklch(0.59 0.202 14.3)"),
    destructiveForeground: raw("oklch(0.955 0.012 272.8)"),
    border: raw("oklch(0.875 0.022 268.3)"),
    input: raw("oklch(0.875 0.022 268.3)"),
    ring: raw("oklch(0.605 0.168 285.4)")
  },
  dark: {
    background: raw("oklch(0.234 0.02 264.2)"),
    foreground: raw("oklch(0.896 0.014 274.3)"),
    card: raw("oklch(0.268 0.022 263.7)"),
    cardForeground: raw("oklch(0.896 0.014 274.3)"),
    popover: raw("oklch(0.234 0.02 264.2)"),
    popoverForeground: raw("oklch(0.896 0.014 274.3)"),
    primary: raw("oklch(0.748 0.152 285.8)"),
    primaryForeground: raw("oklch(0.234 0.02 264.2)"),
    secondary: raw("oklch(0.312 0.024 263.3)"),
    secondaryForeground: raw("oklch(0.769 0.015 274.8)"),
    muted: raw("oklch(0.312 0.024 263.3)"),
    mutedForeground: raw("oklch(0.655 0.021 272.6)"),
    accent: raw("oklch(0.518 0.165 304.5)"),
    accentForeground: raw("oklch(0.896 0.014 274.3)"),
    destructive: raw("oklch(0.506 0.173 14.3)"),
    destructiveForeground: raw("oklch(0.896 0.014 274.3)"),
    border: raw("oklch(0.356 0.026 261.2)"),
    input: raw("oklch(0.356 0.026 261.2)"),
    ring: raw("oklch(0.748 0.152 285.8)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/graphite.ts
var graphiteTheme = defineTheme({
  name: "graphite",
  label: "Graphite",
  light: {
    background: raw("oklch(0.97 0.002 240)"),
    foreground: raw("oklch(0.18 0.008 240)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.18 0.008 240)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.18 0.008 240)"),
    primary: raw("oklch(0.3 0.015 240)"),
    primaryForeground: raw("oklch(0.97 0.002 240)"),
    secondary: raw("oklch(0.93 0.004 240)"),
    secondaryForeground: raw("oklch(0.3 0.01 240)"),
    muted: raw("oklch(0.93 0.003 240)"),
    mutedForeground: raw("oklch(0.52 0.008 240)"),
    accent: raw("oklch(0.91 0.006 240)"),
    accentForeground: raw("oklch(0.25 0.012 240)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.97 0.002 240)"),
    border: raw("oklch(0.88 0.006 240)"),
    input: raw("oklch(0.88 0.006 240)"),
    ring: raw("oklch(0.5 0.012 240)")
  },
  dark: {
    background: raw("oklch(0.16 0.006 240)"),
    foreground: raw("oklch(0.93 0.004 240)"),
    card: raw("oklch(0.2 0.008 240)"),
    cardForeground: raw("oklch(0.93 0.004 240)"),
    popover: raw("oklch(0.16 0.006 240)"),
    popoverForeground: raw("oklch(0.93 0.004 240)"),
    primary: raw("oklch(0.85 0.006 240)"),
    primaryForeground: raw("oklch(0.16 0.006 240)"),
    secondary: raw("oklch(0.26 0.008 240)"),
    secondaryForeground: raw("oklch(0.88 0.004 240)"),
    muted: raw("oklch(0.25 0.007 240)"),
    mutedForeground: raw("oklch(0.62 0.006 240)"),
    accent: raw("oklch(0.28 0.009 240)"),
    accentForeground: raw("oklch(0.88 0.004 240)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.004 240)"),
    border: raw("oklch(0.28 0.008 240)"),
    input: raw("oklch(0.28 0.008 240)"),
    ring: raw("oklch(0.6 0.008 240)")
  },
  radius: "0.375rem"
});

// src/themes/tweakcn/perpetuity.ts
var perpetuityTheme = defineTheme({
  name: "perpetuity",
  label: "Perpetuity",
  light: {
    background: raw("oklch(0.97 0.004 106)"),
    foreground: raw("oklch(0.185 0.008 106)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.185 0.008 106)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.185 0.008 106)"),
    primary: raw("oklch(0.265 0.012 106)"),
    primaryForeground: raw("oklch(0.97 0.004 106)"),
    secondary: raw("oklch(0.935 0.006 106)"),
    secondaryForeground: raw("oklch(0.265 0.012 106)"),
    muted: raw("oklch(0.935 0.005 106)"),
    mutedForeground: raw("oklch(0.532 0.008 106)"),
    accent: raw("oklch(0.91 0.01 106)"),
    accentForeground: raw("oklch(0.22 0.01 106)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.97 0.004 106)"),
    border: raw("oklch(0.875 0.01 106)"),
    input: raw("oklch(0.875 0.01 106)"),
    ring: raw("oklch(0.532 0.008 106)")
  },
  dark: {
    background: raw("oklch(0.147 0.004 106)"),
    foreground: raw("oklch(0.97 0.004 106)"),
    card: raw("oklch(0.205 0.006 106)"),
    cardForeground: raw("oklch(0.97 0.004 106)"),
    popover: raw("oklch(0.147 0.004 106)"),
    popoverForeground: raw("oklch(0.97 0.004 106)"),
    primary: raw("oklch(0.87 0.008 106)"),
    primaryForeground: raw("oklch(0.147 0.004 106)"),
    secondary: raw("oklch(0.267 0.006 106)"),
    secondaryForeground: raw("oklch(0.97 0.004 106)"),
    muted: raw("oklch(0.267 0.006 106)"),
    mutedForeground: raw("oklch(0.709 0.006 106)"),
    accent: raw("oklch(0.267 0.006 106)"),
    accentForeground: raw("oklch(0.97 0.004 106)"),
    destructive: raw("oklch(0.396 0.141 25.723)"),
    destructiveForeground: raw("oklch(0.637 0.237 25.331)"),
    border: raw("oklch(0.267 0.006 106)"),
    input: raw("oklch(0.267 0.006 106)"),
    ring: raw("oklch(0.439 0.006 106)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/kodama-grove.ts
var kodamaGroveTheme = defineTheme({
  name: "kodama-grove",
  label: "Kodama Grove",
  light: {
    background: raw("oklch(0.975 0.012 130)"),
    foreground: raw("oklch(0.22 0.04 145)"),
    card: raw("oklch(0.99 0.006 130)"),
    cardForeground: raw("oklch(0.22 0.04 145)"),
    popover: raw("oklch(0.99 0.006 130)"),
    popoverForeground: raw("oklch(0.22 0.04 145)"),
    primary: raw("oklch(0.42 0.1 145)"),
    primaryForeground: raw("oklch(0.975 0.012 130)"),
    secondary: raw("oklch(0.92 0.025 135)"),
    secondaryForeground: raw("oklch(0.3 0.06 145)"),
    muted: raw("oklch(0.93 0.018 132)"),
    mutedForeground: raw("oklch(0.5 0.05 140)"),
    accent: raw("oklch(0.9 0.04 120)"),
    accentForeground: raw("oklch(0.3 0.07 130)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.975 0.012 130)"),
    border: raw("oklch(0.88 0.03 132)"),
    input: raw("oklch(0.88 0.03 132)"),
    ring: raw("oklch(0.42 0.1 145)")
  },
  dark: {
    background: raw("oklch(0.18 0.03 145)"),
    foreground: raw("oklch(0.93 0.015 130)"),
    card: raw("oklch(0.23 0.038 145)"),
    cardForeground: raw("oklch(0.93 0.015 130)"),
    popover: raw("oklch(0.18 0.03 145)"),
    popoverForeground: raw("oklch(0.93 0.015 130)"),
    primary: raw("oklch(0.65 0.12 145)"),
    primaryForeground: raw("oklch(0.18 0.03 145)"),
    secondary: raw("oklch(0.28 0.05 145)"),
    secondaryForeground: raw("oklch(0.88 0.015 130)"),
    muted: raw("oklch(0.26 0.04 145)"),
    mutedForeground: raw("oklch(0.58 0.05 138)"),
    accent: raw("oklch(0.3 0.06 120)"),
    accentForeground: raw("oklch(0.88 0.02 128)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.02 25)"),
    border: raw("oklch(0.3 0.045 145)"),
    input: raw("oklch(0.3 0.045 145)"),
    ring: raw("oklch(0.65 0.12 145)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/cosmic-night.ts
var cosmicNightTheme = defineTheme({
  name: "cosmic-night",
  label: "Cosmic Night",
  light: {
    background: raw("oklch(0.12 0.04 275)"),
    foreground: raw("oklch(0.92 0.015 275)"),
    card: raw("oklch(0.17 0.05 275)"),
    cardForeground: raw("oklch(0.92 0.015 275)"),
    popover: raw("oklch(0.12 0.04 275)"),
    popoverForeground: raw("oklch(0.92 0.015 275)"),
    primary: raw("oklch(0.72 0.2 285)"),
    primaryForeground: raw("oklch(0.12 0.04 275)"),
    secondary: raw("oklch(0.22 0.06 275)"),
    secondaryForeground: raw("oklch(0.88 0.015 275)"),
    muted: raw("oklch(0.2 0.05 275)"),
    mutedForeground: raw("oklch(0.6 0.06 275)"),
    accent: raw("oklch(0.55 0.2 310)"),
    accentForeground: raw("oklch(0.12 0.04 275)"),
    destructive: raw("oklch(0.65 0.22 25)"),
    destructiveForeground: raw("oklch(0.12 0.04 275)"),
    border: raw("oklch(0.25 0.06 275)"),
    input: raw("oklch(0.25 0.06 275)"),
    ring: raw("oklch(0.72 0.2 285)")
  },
  dark: {
    background: raw("oklch(0.09 0.03 275)"),
    foreground: raw("oklch(0.9 0.012 275)"),
    card: raw("oklch(0.13 0.04 275)"),
    cardForeground: raw("oklch(0.9 0.012 275)"),
    popover: raw("oklch(0.09 0.03 275)"),
    popoverForeground: raw("oklch(0.9 0.012 275)"),
    primary: raw("oklch(0.75 0.22 285)"),
    primaryForeground: raw("oklch(0.09 0.03 275)"),
    secondary: raw("oklch(0.18 0.05 275)"),
    secondaryForeground: raw("oklch(0.86 0.012 275)"),
    muted: raw("oklch(0.16 0.04 275)"),
    mutedForeground: raw("oklch(0.58 0.055 275)"),
    accent: raw("oklch(0.6 0.22 310)"),
    accentForeground: raw("oklch(0.09 0.03 275)"),
    destructive: raw("oklch(0.6 0.2 25)"),
    destructiveForeground: raw("oklch(0.09 0.03 275)"),
    border: raw("oklch(0.2 0.05 275)"),
    input: raw("oklch(0.2 0.05 275)"),
    ring: raw("oklch(0.75 0.22 285)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/tangerine.ts
var tangerineTheme = defineTheme({
  name: "tangerine",
  label: "Tangerine",
  light: {
    background: raw("oklch(0.985 0.012 70)"),
    foreground: raw("oklch(0.22 0.05 55)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.22 0.05 55)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.22 0.05 55)"),
    primary: raw("oklch(0.65 0.2 47)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.94 0.03 70)"),
    secondaryForeground: raw("oklch(0.35 0.08 55)"),
    muted: raw("oklch(0.95 0.018 68)"),
    mutedForeground: raw("oklch(0.55 0.06 58)"),
    accent: raw("oklch(0.92 0.045 65)"),
    accentForeground: raw("oklch(0.3 0.08 55)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9 0.03 68)"),
    input: raw("oklch(0.9 0.03 68)"),
    ring: raw("oklch(0.65 0.2 47)")
  },
  dark: {
    background: raw("oklch(0.19 0.04 55)"),
    foreground: raw("oklch(0.95 0.015 68)"),
    card: raw("oklch(0.24 0.05 55)"),
    cardForeground: raw("oklch(0.95 0.015 68)"),
    popover: raw("oklch(0.19 0.04 55)"),
    popoverForeground: raw("oklch(0.95 0.015 68)"),
    primary: raw("oklch(0.78 0.18 52)"),
    primaryForeground: raw("oklch(0.19 0.04 55)"),
    secondary: raw("oklch(0.3 0.06 55)"),
    secondaryForeground: raw("oklch(0.9 0.015 68)"),
    muted: raw("oklch(0.28 0.05 55)"),
    mutedForeground: raw("oklch(0.62 0.06 60)"),
    accent: raw("oklch(0.34 0.07 57)"),
    accentForeground: raw("oklch(0.9 0.018 65)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.9 0.01 25)"),
    border: raw("oklch(0.32 0.06 55)"),
    input: raw("oklch(0.32 0.06 55)"),
    ring: raw("oklch(0.78 0.18 52)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/quantum-rose.ts
var quantumRoseTheme = defineTheme({
  name: "quantum-rose",
  label: "Quantum Rose",
  light: {
    background: raw("oklch(0.98 0.008 355)"),
    foreground: raw("oklch(0.2 0.04 350)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.2 0.04 350)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.2 0.04 350)"),
    primary: raw("oklch(0.58 0.22 0)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.94 0.02 355)"),
    secondaryForeground: raw("oklch(0.35 0.07 350)"),
    muted: raw("oklch(0.95 0.012 355)"),
    mutedForeground: raw("oklch(0.54 0.05 352)"),
    accent: raw("oklch(0.92 0.03 320)"),
    accentForeground: raw("oklch(0.32 0.09 320)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9 0.022 354)"),
    input: raw("oklch(0.9 0.022 354)"),
    ring: raw("oklch(0.58 0.22 0)")
  },
  dark: {
    background: raw("oklch(0.17 0.03 350)"),
    foreground: raw("oklch(0.94 0.01 354)"),
    card: raw("oklch(0.22 0.04 350)"),
    cardForeground: raw("oklch(0.94 0.01 354)"),
    popover: raw("oklch(0.17 0.03 350)"),
    popoverForeground: raw("oklch(0.94 0.01 354)"),
    primary: raw("oklch(0.72 0.19 0)"),
    primaryForeground: raw("oklch(0.17 0.03 350)"),
    secondary: raw("oklch(0.28 0.05 350)"),
    secondaryForeground: raw("oklch(0.88 0.012 354)"),
    muted: raw("oklch(0.26 0.04 350)"),
    mutedForeground: raw("oklch(0.62 0.05 352)"),
    accent: raw("oklch(0.3 0.07 320)"),
    accentForeground: raw("oklch(0.88 0.02 320)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.01 25)"),
    border: raw("oklch(0.3 0.045 350)"),
    input: raw("oklch(0.3 0.045 350)"),
    ring: raw("oklch(0.72 0.19 0)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/nature.ts
var natureTheme = defineTheme({
  name: "nature",
  label: "Nature",
  light: {
    background: raw("oklch(0.975 0.015 138)"),
    foreground: raw("oklch(0.215 0.05 155)"),
    card: raw("oklch(0.99 0.008 135)"),
    cardForeground: raw("oklch(0.215 0.05 155)"),
    popover: raw("oklch(0.99 0.008 135)"),
    popoverForeground: raw("oklch(0.215 0.05 155)"),
    primary: raw("oklch(0.45 0.14 155)"),
    primaryForeground: raw("oklch(0.975 0.015 138)"),
    secondary: raw("oklch(0.92 0.03 140)"),
    secondaryForeground: raw("oklch(0.32 0.08 155)"),
    muted: raw("oklch(0.93 0.022 138)"),
    mutedForeground: raw("oklch(0.52 0.055 150)"),
    accent: raw("oklch(0.89 0.05 115)"),
    accentForeground: raw("oklch(0.3 0.08 130)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.975 0.015 138)"),
    border: raw("oklch(0.88 0.035 138)"),
    input: raw("oklch(0.88 0.035 138)"),
    ring: raw("oklch(0.45 0.14 155)")
  },
  dark: {
    background: raw("oklch(0.19 0.035 155)"),
    foreground: raw("oklch(0.93 0.018 138)"),
    card: raw("oklch(0.24 0.042 155)"),
    cardForeground: raw("oklch(0.93 0.018 138)"),
    popover: raw("oklch(0.19 0.035 155)"),
    popoverForeground: raw("oklch(0.93 0.018 138)"),
    primary: raw("oklch(0.65 0.15 155)"),
    primaryForeground: raw("oklch(0.19 0.035 155)"),
    secondary: raw("oklch(0.29 0.055 155)"),
    secondaryForeground: raw("oklch(0.88 0.018 138)"),
    muted: raw("oklch(0.27 0.045 155)"),
    mutedForeground: raw("oklch(0.6 0.055 150)"),
    accent: raw("oklch(0.32 0.065 115)"),
    accentForeground: raw("oklch(0.88 0.025 128)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.018 25)"),
    border: raw("oklch(0.31 0.05 155)"),
    input: raw("oklch(0.31 0.05 155)"),
    ring: raw("oklch(0.65 0.15 155)")
  },
  radius: "0.625rem"
});

// src/themes/tweakcn/bold-tech.ts
var boldTechTheme = defineTheme({
  name: "bold-tech",
  label: "Bold Tech",
  light: {
    background: raw("oklch(0.98 0 0)"),
    foreground: raw("oklch(0.1 0 0)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.1 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.1 0 0)"),
    primary: raw("oklch(0.5 0.25 265)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.94 0 0)"),
    secondaryForeground: raw("oklch(0.2 0 0)"),
    muted: raw("oklch(0.94 0 0)"),
    mutedForeground: raw("oklch(0.55 0 0)"),
    accent: raw("oklch(0.92 0.05 190)"),
    accentForeground: raw("oklch(0.2 0.05 190)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.88 0 0)"),
    input: raw("oklch(0.88 0 0)"),
    ring: raw("oklch(0.5 0.25 265)")
  },
  dark: {
    background: raw("oklch(0.1 0 0)"),
    foreground: raw("oklch(0.97 0 0)"),
    card: raw("oklch(0.15 0 0)"),
    cardForeground: raw("oklch(0.97 0 0)"),
    popover: raw("oklch(0.1 0 0)"),
    popoverForeground: raw("oklch(0.97 0 0)"),
    primary: raw("oklch(0.65 0.25 265)"),
    primaryForeground: raw("oklch(0.1 0 0)"),
    secondary: raw("oklch(0.22 0 0)"),
    secondaryForeground: raw("oklch(0.92 0 0)"),
    muted: raw("oklch(0.2 0 0)"),
    mutedForeground: raw("oklch(0.62 0 0)"),
    accent: raw("oklch(0.25 0.06 190)"),
    accentForeground: raw("oklch(0.88 0.025 190)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0 0)"),
    border: raw("oklch(0.25 0 0)"),
    input: raw("oklch(0.25 0 0)"),
    ring: raw("oklch(0.65 0.25 265)")
  },
  radius: "0.25rem"
});

// src/themes/tweakcn/elegant-luxury.ts
var elegantLuxuryTheme = defineTheme({
  name: "elegant-luxury",
  label: "Elegant Luxury",
  light: {
    background: raw("oklch(0.98 0.005 85)"),
    foreground: raw("oklch(0.15 0.01 75)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.15 0.01 75)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.15 0.01 75)"),
    primary: raw("oklch(0.6 0.12 78)"),
    primaryForeground: raw("oklch(0.98 0.005 85)"),
    secondary: raw("oklch(0.93 0.01 82)"),
    secondaryForeground: raw("oklch(0.25 0.015 75)"),
    muted: raw("oklch(0.94 0.007 82)"),
    mutedForeground: raw("oklch(0.52 0.025 78)"),
    accent: raw("oklch(0.9 0.025 80)"),
    accentForeground: raw("oklch(0.22 0.015 75)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.98 0.005 85)"),
    border: raw("oklch(0.87 0.018 80)"),
    input: raw("oklch(0.87 0.018 80)"),
    ring: raw("oklch(0.6 0.12 78)")
  },
  dark: {
    background: raw("oklch(0.12 0.012 75)"),
    foreground: raw("oklch(0.93 0.008 82)"),
    card: raw("oklch(0.17 0.016 75)"),
    cardForeground: raw("oklch(0.93 0.008 82)"),
    popover: raw("oklch(0.12 0.012 75)"),
    popoverForeground: raw("oklch(0.93 0.008 82)"),
    primary: raw("oklch(0.78 0.1 80)"),
    primaryForeground: raw("oklch(0.12 0.012 75)"),
    secondary: raw("oklch(0.22 0.018 75)"),
    secondaryForeground: raw("oklch(0.88 0.008 82)"),
    muted: raw("oklch(0.2 0.015 75)"),
    mutedForeground: raw("oklch(0.6 0.025 78)"),
    accent: raw("oklch(0.25 0.022 78)"),
    accentForeground: raw("oklch(0.88 0.01 80)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.008 25)"),
    border: raw("oklch(0.26 0.02 75)"),
    input: raw("oklch(0.26 0.02 75)"),
    ring: raw("oklch(0.78 0.1 80)")
  },
  radius: "0.25rem"
});

// src/themes/tweakcn/amber-minimal.ts
var amberMinimalTheme = defineTheme({
  name: "amber-minimal",
  label: "Amber Minimal",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("oklch(0.145 0 0)"),
    card: raw("oklch(0.99 0.004 88)"),
    cardForeground: raw("oklch(0.145 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.145 0 0)"),
    primary: raw("oklch(0.72 0.18 75)"),
    primaryForeground: raw("oklch(0.145 0 0)"),
    secondary: raw("oklch(0.97 0.005 90)"),
    secondaryForeground: raw("oklch(0.25 0.015 80)"),
    muted: raw("oklch(0.97 0.003 90)"),
    mutedForeground: raw("oklch(0.556 0 0)"),
    accent: raw("oklch(0.95 0.02 88)"),
    accentForeground: raw("oklch(0.25 0.015 80)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.922 0 0)"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.72 0.18 75)")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("oklch(0.985 0 0)"),
    card: raw("oklch(0.18 0.008 82)"),
    cardForeground: raw("oklch(0.985 0 0)"),
    popover: raw("oklch(0.145 0 0)"),
    popoverForeground: raw("oklch(0.985 0 0)"),
    primary: raw("oklch(0.8 0.16 80)"),
    primaryForeground: raw("oklch(0.145 0 0)"),
    secondary: raw("oklch(0.22 0.008 82)"),
    secondaryForeground: raw("oklch(0.88 0.004 90)"),
    muted: raw("oklch(0.21 0.006 85)"),
    mutedForeground: raw("oklch(0.708 0 0)"),
    accent: raw("oklch(0.25 0.015 82)"),
    accentForeground: raw("oklch(0.88 0.008 88)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0 0)"),
    border: raw("oklch(0.269 0 0)"),
    input: raw("oklch(0.269 0 0)"),
    ring: raw("oklch(0.8 0.16 80)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/supabase.ts
var supabaseTheme = defineTheme({
  name: "supabase",
  label: "Supabase",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("oklch(0.18 0.02 155)"),
    card: raw("oklch(0.985 0.005 155)"),
    cardForeground: raw("oklch(0.18 0.02 155)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.18 0.02 155)"),
    primary: raw("oklch(0.52 0.16 155)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.95 0.01 155)"),
    secondaryForeground: raw("oklch(0.28 0.04 155)"),
    muted: raw("oklch(0.95 0.008 150)"),
    mutedForeground: raw("oklch(0.5 0.03 150)"),
    accent: raw("oklch(0.93 0.02 155)"),
    accentForeground: raw("oklch(0.3 0.06 155)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9 0.012 152)"),
    input: raw("oklch(0.9 0.012 152)"),
    ring: raw("oklch(0.52 0.16 155)")
  },
  dark: {
    background: raw("oklch(0.16 0.018 165)"),
    foreground: raw("oklch(0.93 0.012 152)"),
    card: raw("oklch(0.2 0.022 162)"),
    cardForeground: raw("oklch(0.93 0.012 152)"),
    popover: raw("oklch(0.16 0.018 165)"),
    popoverForeground: raw("oklch(0.93 0.012 152)"),
    primary: raw("oklch(0.65 0.16 155)"),
    primaryForeground: raw("oklch(0.16 0.018 165)"),
    secondary: raw("oklch(0.26 0.03 162)"),
    secondaryForeground: raw("oklch(0.88 0.012 152)"),
    muted: raw("oklch(0.24 0.025 162)"),
    mutedForeground: raw("oklch(0.6 0.03 155)"),
    accent: raw("oklch(0.28 0.035 160)"),
    accentForeground: raw("oklch(0.88 0.015 152)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.008 25)"),
    border: raw("oklch(0.28 0.028 162)"),
    input: raw("oklch(0.28 0.028 162)"),
    ring: raw("oklch(0.65 0.16 155)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/neo-brutalism.ts
var neoBrutalismTheme = defineTheme({
  name: "neo-brutalism",
  label: "Neo Brutalism",
  light: {
    background: raw("oklch(0.985 0.02 95)"),
    foreground: raw("oklch(0.1 0 0)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.1 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.1 0 0)"),
    primary: raw("oklch(0.1 0 0)"),
    primaryForeground: raw("oklch(0.985 0.02 95)"),
    secondary: raw("oklch(0.9 0.06 95)"),
    secondaryForeground: raw("oklch(0.1 0 0)"),
    muted: raw("oklch(0.94 0.03 92)"),
    mutedForeground: raw("oklch(0.45 0 0)"),
    accent: raw("oklch(0.85 0.15 85)"),
    accentForeground: raw("oklch(0.1 0 0)"),
    destructive: raw("oklch(0.637 0.237 25.331)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.1 0 0)"),
    input: raw("oklch(0.1 0 0)"),
    ring: raw("oklch(0.1 0 0)")
  },
  dark: {
    background: raw("oklch(0.15 0 0)"),
    foreground: raw("oklch(0.97 0.02 95)"),
    card: raw("oklch(0.2 0 0)"),
    cardForeground: raw("oklch(0.97 0.02 95)"),
    popover: raw("oklch(0.15 0 0)"),
    popoverForeground: raw("oklch(0.97 0.02 95)"),
    primary: raw("oklch(0.9 0.06 95)"),
    primaryForeground: raw("oklch(0.15 0 0)"),
    secondary: raw("oklch(0.28 0 0)"),
    secondaryForeground: raw("oklch(0.95 0.015 90)"),
    muted: raw("oklch(0.25 0 0)"),
    mutedForeground: raw("oklch(0.65 0 0)"),
    accent: raw("oklch(0.65 0.14 85)"),
    accentForeground: raw("oklch(0.15 0 0)"),
    destructive: raw("oklch(0.5 0.2 25)"),
    destructiveForeground: raw("oklch(0.97 0.015 90)"),
    border: raw("oklch(0.75 0.05 90)"),
    input: raw("oklch(0.75 0.05 90)"),
    ring: raw("oklch(0.9 0.06 95)")
  },
  radius: "0rem"
});

// src/themes/tweakcn/solar-dusk.ts
var solarDuskTheme = defineTheme({
  name: "solar-dusk",
  label: "Solar Dusk",
  light: {
    background: raw("oklch(0.975 0.015 60)"),
    foreground: raw("oklch(0.2 0.04 40)"),
    card: raw("oklch(0.99 0.008 62)"),
    cardForeground: raw("oklch(0.2 0.04 40)"),
    popover: raw("oklch(0.99 0.008 62)"),
    popoverForeground: raw("oklch(0.2 0.04 40)"),
    primary: raw("oklch(0.62 0.2 40)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.93 0.03 62)"),
    secondaryForeground: raw("oklch(0.3 0.06 40)"),
    muted: raw("oklch(0.94 0.02 60)"),
    mutedForeground: raw("oklch(0.55 0.05 45)"),
    accent: raw("oklch(0.9 0.05 55)"),
    accentForeground: raw("oklch(0.28 0.07 42)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.88 0.03 58)"),
    input: raw("oklch(0.88 0.03 58)"),
    ring: raw("oklch(0.62 0.2 40)")
  },
  dark: {
    background: raw("oklch(0.16 0.04 35)"),
    foreground: raw("oklch(0.94 0.02 60)"),
    card: raw("oklch(0.22 0.05 35)"),
    cardForeground: raw("oklch(0.94 0.02 60)"),
    popover: raw("oklch(0.16 0.04 35)"),
    popoverForeground: raw("oklch(0.94 0.02 60)"),
    primary: raw("oklch(0.76 0.18 45)"),
    primaryForeground: raw("oklch(0.16 0.04 35)"),
    secondary: raw("oklch(0.27 0.06 35)"),
    secondaryForeground: raw("oklch(0.9 0.018 58)"),
    muted: raw("oklch(0.25 0.05 35)"),
    mutedForeground: raw("oklch(0.62 0.05 48)"),
    accent: raw("oklch(0.32 0.07 42)"),
    accentForeground: raw("oklch(0.9 0.025 55)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.9 0.01 25)"),
    border: raw("oklch(0.3 0.055 35)"),
    input: raw("oklch(0.3 0.055 35)"),
    ring: raw("oklch(0.76 0.18 45)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/claymorphism.ts
var claymorphismTheme = defineTheme({
  name: "claymorphism",
  label: "Claymorphism",
  light: {
    background: raw("oklch(0.97 0.015 250)"),
    foreground: raw("oklch(0.22 0.04 255)"),
    card: raw("oklch(0.99 0.008 250)"),
    cardForeground: raw("oklch(0.22 0.04 255)"),
    popover: raw("oklch(0.99 0.008 250)"),
    popoverForeground: raw("oklch(0.22 0.04 255)"),
    primary: raw("oklch(0.6 0.2 255)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.93 0.025 250)"),
    secondaryForeground: raw("oklch(0.35 0.06 255)"),
    muted: raw("oklch(0.94 0.018 250)"),
    mutedForeground: raw("oklch(0.54 0.04 252)"),
    accent: raw("oklch(0.92 0.04 270)"),
    accentForeground: raw("oklch(0.32 0.08 270)"),
    destructive: raw("oklch(0.68 0.2 12)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.88 0.03 250)"),
    input: raw("oklch(0.88 0.03 250)"),
    ring: raw("oklch(0.6 0.2 255)")
  },
  dark: {
    background: raw("oklch(0.2 0.03 255)"),
    foreground: raw("oklch(0.94 0.012 250)"),
    card: raw("oklch(0.26 0.038 255)"),
    cardForeground: raw("oklch(0.94 0.012 250)"),
    popover: raw("oklch(0.2 0.03 255)"),
    popoverForeground: raw("oklch(0.94 0.012 250)"),
    primary: raw("oklch(0.72 0.18 255)"),
    primaryForeground: raw("oklch(0.2 0.03 255)"),
    secondary: raw("oklch(0.3 0.05 255)"),
    secondaryForeground: raw("oklch(0.88 0.012 250)"),
    muted: raw("oklch(0.28 0.04 255)"),
    mutedForeground: raw("oklch(0.62 0.04 252)"),
    accent: raw("oklch(0.32 0.06 270)"),
    accentForeground: raw("oklch(0.88 0.025 268)"),
    destructive: raw("oklch(0.5 0.18 12)"),
    destructiveForeground: raw("oklch(0.88 0.01 12)"),
    border: raw("oklch(0.32 0.045 255)"),
    input: raw("oklch(0.32 0.045 255)"),
    ring: raw("oklch(0.72 0.18 255)")
  },
  radius: "1.5rem"
});

// src/themes/tweakcn/cyberpunk.ts
var cyberpunkTheme = defineTheme({
  name: "cyberpunk",
  label: "Cyberpunk",
  light: {
    background: raw("oklch(0.1 0.02 285)"),
    foreground: raw("oklch(0.9 0.06 190)"),
    card: raw("oklch(0.15 0.03 285)"),
    cardForeground: raw("oklch(0.9 0.06 190)"),
    popover: raw("oklch(0.1 0.02 285)"),
    popoverForeground: raw("oklch(0.9 0.06 190)"),
    primary: raw("oklch(0.78 0.2 190)"),
    primaryForeground: raw("oklch(0.1 0.02 285)"),
    secondary: raw("oklch(0.2 0.04 285)"),
    secondaryForeground: raw("oklch(0.85 0.05 190)"),
    muted: raw("oklch(0.18 0.03 285)"),
    mutedForeground: raw("oklch(0.62 0.05 190)"),
    accent: raw("oklch(0.7 0.25 55)"),
    accentForeground: raw("oklch(0.1 0.02 285)"),
    destructive: raw("oklch(0.7 0.25 12)"),
    destructiveForeground: raw("oklch(0.1 0.02 285)"),
    border: raw("oklch(0.55 0.15 190)"),
    input: raw("oklch(0.25 0.05 285)"),
    ring: raw("oklch(0.78 0.2 190)")
  },
  dark: {
    background: raw("oklch(0.08 0.015 285)"),
    foreground: raw("oklch(0.88 0.06 190)"),
    card: raw("oklch(0.12 0.025 285)"),
    cardForeground: raw("oklch(0.88 0.06 190)"),
    popover: raw("oklch(0.08 0.015 285)"),
    popoverForeground: raw("oklch(0.88 0.06 190)"),
    primary: raw("oklch(0.82 0.22 190)"),
    primaryForeground: raw("oklch(0.08 0.015 285)"),
    secondary: raw("oklch(0.16 0.035 285)"),
    secondaryForeground: raw("oklch(0.82 0.05 190)"),
    muted: raw("oklch(0.14 0.025 285)"),
    mutedForeground: raw("oklch(0.58 0.05 190)"),
    accent: raw("oklch(0.72 0.28 55)"),
    accentForeground: raw("oklch(0.08 0.015 285)"),
    destructive: raw("oklch(0.65 0.23 12)"),
    destructiveForeground: raw("oklch(0.08 0.015 285)"),
    border: raw("oklch(0.5 0.15 190)"),
    input: raw("oklch(0.2 0.04 285)"),
    ring: raw("oklch(0.82 0.22 190)")
  },
  radius: "0rem"
});

// src/themes/tweakcn/pastel-dreams.ts
var pastelDreamsTheme = defineTheme({
  name: "pastel-dreams",
  label: "Pastel Dreams",
  light: {
    background: raw("oklch(0.98 0.01 295)"),
    foreground: raw("oklch(0.28 0.04 295)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.28 0.04 295)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.28 0.04 295)"),
    primary: raw("oklch(0.72 0.15 295)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.94 0.04 220)"),
    secondaryForeground: raw("oklch(0.35 0.06 220)"),
    muted: raw("oklch(0.95 0.018 295)"),
    mutedForeground: raw("oklch(0.56 0.05 295)"),
    accent: raw("oklch(0.94 0.05 160)"),
    accentForeground: raw("oklch(0.32 0.08 160)"),
    destructive: raw("oklch(0.72 0.18 12)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9 0.03 295)"),
    input: raw("oklch(0.9 0.03 295)"),
    ring: raw("oklch(0.72 0.15 295)")
  },
  dark: {
    background: raw("oklch(0.22 0.03 295)"),
    foreground: raw("oklch(0.95 0.012 295)"),
    card: raw("oklch(0.27 0.04 295)"),
    cardForeground: raw("oklch(0.95 0.012 295)"),
    popover: raw("oklch(0.22 0.03 295)"),
    popoverForeground: raw("oklch(0.95 0.012 295)"),
    primary: raw("oklch(0.8 0.14 295)"),
    primaryForeground: raw("oklch(0.22 0.03 295)"),
    secondary: raw("oklch(0.32 0.05 220)"),
    secondaryForeground: raw("oklch(0.88 0.02 220)"),
    muted: raw("oklch(0.3 0.035 295)"),
    mutedForeground: raw("oklch(0.65 0.045 295)"),
    accent: raw("oklch(0.34 0.07 160)"),
    accentForeground: raw("oklch(0.88 0.025 160)"),
    destructive: raw("oklch(0.55 0.15 12)"),
    destructiveForeground: raw("oklch(0.88 0.01 12)"),
    border: raw("oklch(0.33 0.04 295)"),
    input: raw("oklch(0.33 0.04 295)"),
    ring: raw("oklch(0.8 0.14 295)")
  },
  radius: "1rem"
});

// src/themes/tweakcn/clean-slate.ts
var cleanSlateTheme = defineTheme({
  name: "clean-slate",
  label: "Clean Slate",
  light: {
    background: raw("oklch(0.984 0.003 247.858)"),
    foreground: raw("oklch(0.208 0.042 265.755)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.208 0.042 265.755)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.208 0.042 265.755)"),
    primary: raw("oklch(0.446 0.043 257.281)"),
    primaryForeground: raw("oklch(0.984 0.003 247.858)"),
    secondary: raw("oklch(0.968 0.007 247.896)"),
    secondaryForeground: raw("oklch(0.446 0.043 257.281)"),
    muted: raw("oklch(0.968 0.007 247.896)"),
    mutedForeground: raw("oklch(0.554 0.046 257.417)"),
    accent: raw("oklch(0.929 0.013 255.508)"),
    accentForeground: raw("oklch(0.372 0.044 257.287)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.984 0.003 247.858)"),
    border: raw("oklch(0.869 0.022 252.894)"),
    input: raw("oklch(0.869 0.022 252.894)"),
    ring: raw("oklch(0.554 0.046 257.417)")
  },
  dark: {
    background: raw("oklch(0.129 0.042 264.695)"),
    foreground: raw("oklch(0.968 0.007 247.896)"),
    card: raw("oklch(0.208 0.042 265.755)"),
    cardForeground: raw("oklch(0.968 0.007 247.896)"),
    popover: raw("oklch(0.129 0.042 264.695)"),
    popoverForeground: raw("oklch(0.968 0.007 247.896)"),
    primary: raw("oklch(0.869 0.022 252.894)"),
    primaryForeground: raw("oklch(0.129 0.042 264.695)"),
    secondary: raw("oklch(0.279 0.041 260.031)"),
    secondaryForeground: raw("oklch(0.869 0.022 252.894)"),
    muted: raw("oklch(0.279 0.041 260.031)"),
    mutedForeground: raw("oklch(0.704 0.04 256.788)"),
    accent: raw("oklch(0.372 0.044 257.287)"),
    accentForeground: raw("oklch(0.929 0.013 255.508)"),
    destructive: raw("oklch(0.396 0.141 25.723)"),
    destructiveForeground: raw("oklch(0.637 0.237 25.331)"),
    border: raw("oklch(0.372 0.044 257.287)"),
    input: raw("oklch(0.372 0.044 257.287)"),
    ring: raw("oklch(0.704 0.04 256.788)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/caffeine.ts
var caffeineTheme = defineTheme({
  name: "caffeine",
  label: "Caffeine",
  light: {
    background: raw("oklch(0.975 0.008 72)"),
    foreground: raw("oklch(0.18 0.025 65)"),
    card: raw("oklch(0.995 0.004 72)"),
    cardForeground: raw("oklch(0.18 0.025 65)"),
    popover: raw("oklch(0.995 0.004 72)"),
    popoverForeground: raw("oklch(0.18 0.025 65)"),
    primary: raw("oklch(0.35 0.07 65)"),
    primaryForeground: raw("oklch(0.97 0.008 72)"),
    secondary: raw("oklch(0.93 0.015 70)"),
    secondaryForeground: raw("oklch(0.28 0.04 65)"),
    muted: raw("oklch(0.94 0.01 70)"),
    mutedForeground: raw("oklch(0.5 0.028 68)"),
    accent: raw("oklch(0.88 0.03 68)"),
    accentForeground: raw("oklch(0.25 0.04 65)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.975 0.008 72)"),
    border: raw("oklch(0.87 0.02 68)"),
    input: raw("oklch(0.87 0.02 68)"),
    ring: raw("oklch(0.35 0.07 65)")
  },
  dark: {
    background: raw("oklch(0.15 0.022 65)"),
    foreground: raw("oklch(0.92 0.01 72)"),
    card: raw("oklch(0.2 0.028 65)"),
    cardForeground: raw("oklch(0.92 0.01 72)"),
    popover: raw("oklch(0.15 0.022 65)"),
    popoverForeground: raw("oklch(0.92 0.01 72)"),
    primary: raw("oklch(0.78 0.07 72)"),
    primaryForeground: raw("oklch(0.15 0.022 65)"),
    secondary: raw("oklch(0.25 0.032 65)"),
    secondaryForeground: raw("oklch(0.88 0.01 72)"),
    muted: raw("oklch(0.23 0.028 65)"),
    mutedForeground: raw("oklch(0.6 0.025 68)"),
    accent: raw("oklch(0.28 0.035 66)"),
    accentForeground: raw("oklch(0.88 0.012 70)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.01 25)"),
    border: raw("oklch(0.28 0.03 65)"),
    input: raw("oklch(0.28 0.03 65)"),
    ring: raw("oklch(0.78 0.07 72)")
  },
  radius: "0.375rem"
});

// src/themes/tweakcn/ocean-breeze.ts
var oceanBreezeTheme = defineTheme({
  name: "ocean-breeze",
  label: "Ocean Breeze",
  light: {
    background: raw("oklch(0.975 0.012 212)"),
    foreground: raw("oklch(0.2 0.04 225)"),
    card: raw("oklch(0.99 0.006 212)"),
    cardForeground: raw("oklch(0.2 0.04 225)"),
    popover: raw("oklch(0.99 0.006 212)"),
    popoverForeground: raw("oklch(0.2 0.04 225)"),
    primary: raw("oklch(0.5 0.15 225)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.93 0.025 212)"),
    secondaryForeground: raw("oklch(0.32 0.07 225)"),
    muted: raw("oklch(0.93 0.018 210)"),
    mutedForeground: raw("oklch(0.52 0.05 218)"),
    accent: raw("oklch(0.91 0.04 190)"),
    accentForeground: raw("oklch(0.3 0.08 195)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.88 0.03 210)"),
    input: raw("oklch(0.88 0.03 210)"),
    ring: raw("oklch(0.5 0.15 225)")
  },
  dark: {
    background: raw("oklch(0.17 0.035 225)"),
    foreground: raw("oklch(0.93 0.015 212)"),
    card: raw("oklch(0.22 0.042 225)"),
    cardForeground: raw("oklch(0.93 0.015 212)"),
    popover: raw("oklch(0.17 0.035 225)"),
    popoverForeground: raw("oklch(0.93 0.015 212)"),
    primary: raw("oklch(0.65 0.14 225)"),
    primaryForeground: raw("oklch(0.17 0.035 225)"),
    secondary: raw("oklch(0.27 0.052 225)"),
    secondaryForeground: raw("oklch(0.88 0.015 212)"),
    muted: raw("oklch(0.25 0.042 225)"),
    mutedForeground: raw("oklch(0.6 0.05 218)"),
    accent: raw("oklch(0.3 0.06 190)"),
    accentForeground: raw("oklch(0.88 0.025 192)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.01 25)"),
    border: raw("oklch(0.3 0.048 225)"),
    input: raw("oklch(0.3 0.048 225)"),
    ring: raw("oklch(0.65 0.14 225)")
  },
  radius: "0.625rem"
});

// src/themes/tweakcn/retro-arcade.ts
var retroArcadeTheme = defineTheme({
  name: "retro-arcade",
  label: "Retro Arcade",
  light: {
    background: raw("oklch(0.12 0.02 280)"),
    foreground: raw("oklch(0.95 0.05 115)"),
    card: raw("oklch(0.17 0.03 280)"),
    cardForeground: raw("oklch(0.95 0.05 115)"),
    popover: raw("oklch(0.12 0.02 280)"),
    popoverForeground: raw("oklch(0.95 0.05 115)"),
    primary: raw("oklch(0.8 0.22 115)"),
    primaryForeground: raw("oklch(0.12 0.02 280)"),
    secondary: raw("oklch(0.22 0.04 280)"),
    secondaryForeground: raw("oklch(0.9 0.04 115)"),
    muted: raw("oklch(0.2 0.035 280)"),
    mutedForeground: raw("oklch(0.65 0.06 115)"),
    accent: raw("oklch(0.7 0.25 330)"),
    accentForeground: raw("oklch(0.12 0.02 280)"),
    destructive: raw("oklch(0.7 0.25 25)"),
    destructiveForeground: raw("oklch(0.12 0.02 280)"),
    border: raw("oklch(0.55 0.18 115)"),
    input: raw("oklch(0.25 0.05 280)"),
    ring: raw("oklch(0.8 0.22 115)")
  },
  dark: {
    background: raw("oklch(0.09 0.015 280)"),
    foreground: raw("oklch(0.93 0.05 115)"),
    card: raw("oklch(0.14 0.025 280)"),
    cardForeground: raw("oklch(0.93 0.05 115)"),
    popover: raw("oklch(0.09 0.015 280)"),
    popoverForeground: raw("oklch(0.93 0.05 115)"),
    primary: raw("oklch(0.85 0.24 115)"),
    primaryForeground: raw("oklch(0.09 0.015 280)"),
    secondary: raw("oklch(0.18 0.03 280)"),
    secondaryForeground: raw("oklch(0.88 0.04 115)"),
    muted: raw("oklch(0.16 0.028 280)"),
    mutedForeground: raw("oklch(0.6 0.06 115)"),
    accent: raw("oklch(0.72 0.27 330)"),
    accentForeground: raw("oklch(0.09 0.015 280)"),
    destructive: raw("oklch(0.65 0.23 25)"),
    destructiveForeground: raw("oklch(0.09 0.015 280)"),
    border: raw("oklch(0.5 0.18 115)"),
    input: raw("oklch(0.2 0.04 280)"),
    ring: raw("oklch(0.85 0.24 115)")
  },
  radius: "0rem"
});

// src/themes/tweakcn/midnight-bloom.ts
var midnightBloomTheme = defineTheme({
  name: "midnight-bloom",
  label: "Midnight Bloom",
  light: {
    background: raw("oklch(0.13 0.04 295)"),
    foreground: raw("oklch(0.92 0.015 295)"),
    card: raw("oklch(0.18 0.05 295)"),
    cardForeground: raw("oklch(0.92 0.015 295)"),
    popover: raw("oklch(0.13 0.04 295)"),
    popoverForeground: raw("oklch(0.92 0.015 295)"),
    primary: raw("oklch(0.75 0.18 325)"),
    primaryForeground: raw("oklch(0.13 0.04 295)"),
    secondary: raw("oklch(0.22 0.06 295)"),
    secondaryForeground: raw("oklch(0.88 0.015 295)"),
    muted: raw("oklch(0.2 0.05 295)"),
    mutedForeground: raw("oklch(0.62 0.06 295)"),
    accent: raw("oklch(0.6 0.22 290)"),
    accentForeground: raw("oklch(0.13 0.04 295)"),
    destructive: raw("oklch(0.65 0.22 12)"),
    destructiveForeground: raw("oklch(0.13 0.04 295)"),
    border: raw("oklch(0.28 0.06 295)"),
    input: raw("oklch(0.28 0.06 295)"),
    ring: raw("oklch(0.75 0.18 325)")
  },
  dark: {
    background: raw("oklch(0.1 0.03 295)"),
    foreground: raw("oklch(0.9 0.012 295)"),
    card: raw("oklch(0.14 0.04 295)"),
    cardForeground: raw("oklch(0.9 0.012 295)"),
    popover: raw("oklch(0.1 0.03 295)"),
    popoverForeground: raw("oklch(0.9 0.012 295)"),
    primary: raw("oklch(0.78 0.2 325)"),
    primaryForeground: raw("oklch(0.1 0.03 295)"),
    secondary: raw("oklch(0.18 0.05 295)"),
    secondaryForeground: raw("oklch(0.86 0.012 295)"),
    muted: raw("oklch(0.17 0.04 295)"),
    mutedForeground: raw("oklch(0.58 0.055 295)"),
    accent: raw("oklch(0.62 0.24 290)"),
    accentForeground: raw("oklch(0.1 0.03 295)"),
    destructive: raw("oklch(0.6 0.2 12)"),
    destructiveForeground: raw("oklch(0.1 0.03 295)"),
    border: raw("oklch(0.23 0.055 295)"),
    input: raw("oklch(0.23 0.055 295)"),
    ring: raw("oklch(0.78 0.2 325)")
  },
  radius: "0.75rem"
});

// src/themes/tweakcn/candyland.ts
var candylandTheme = defineTheme({
  name: "candyland",
  label: "Candyland",
  light: {
    background: raw("oklch(0.98 0.015 350)"),
    foreground: raw("oklch(0.25 0.06 345)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.25 0.06 345)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.25 0.06 345)"),
    primary: raw("oklch(0.72 0.25 355)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.95 0.04 220)"),
    secondaryForeground: raw("oklch(0.3 0.08 220)"),
    muted: raw("oklch(0.96 0.02 350)"),
    mutedForeground: raw("oklch(0.56 0.06 350)"),
    accent: raw("oklch(0.9 0.07 100)"),
    accentForeground: raw("oklch(0.3 0.1 100)"),
    destructive: raw("oklch(0.65 0.22 25)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9 0.03 350)"),
    input: raw("oklch(0.9 0.03 350)"),
    ring: raw("oklch(0.72 0.25 355)")
  },
  dark: {
    background: raw("oklch(0.19 0.04 350)"),
    foreground: raw("oklch(0.96 0.012 350)"),
    card: raw("oklch(0.24 0.05 350)"),
    cardForeground: raw("oklch(0.96 0.012 350)"),
    popover: raw("oklch(0.19 0.04 350)"),
    popoverForeground: raw("oklch(0.96 0.012 350)"),
    primary: raw("oklch(0.8 0.22 355)"),
    primaryForeground: raw("oklch(0.19 0.04 350)"),
    secondary: raw("oklch(0.3 0.06 220)"),
    secondaryForeground: raw("oklch(0.88 0.025 220)"),
    muted: raw("oklch(0.28 0.04 350)"),
    mutedForeground: raw("oklch(0.64 0.055 350)"),
    accent: raw("oklch(0.42 0.1 100)"),
    accentForeground: raw("oklch(0.9 0.04 100)"),
    destructive: raw("oklch(0.5 0.18 25)"),
    destructiveForeground: raw("oklch(0.9 0.01 25)"),
    border: raw("oklch(0.32 0.05 350)"),
    input: raw("oklch(0.32 0.05 350)"),
    ring: raw("oklch(0.8 0.22 355)")
  },
  radius: "1.25rem"
});

// src/themes/tweakcn/northern-lights.ts
var northernLightsTheme = defineTheme({
  name: "northern-lights",
  label: "Northern Lights",
  light: {
    background: raw("oklch(0.97 0.015 195)"),
    foreground: raw("oklch(0.18 0.04 210)"),
    card: raw("oklch(0.99 0.008 195)"),
    cardForeground: raw("oklch(0.18 0.04 210)"),
    popover: raw("oklch(0.99 0.008 195)"),
    popoverForeground: raw("oklch(0.18 0.04 210)"),
    primary: raw("oklch(0.55 0.18 210)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.92 0.03 175)"),
    secondaryForeground: raw("oklch(0.3 0.07 185)"),
    muted: raw("oklch(0.93 0.02 192)"),
    mutedForeground: raw("oklch(0.52 0.05 200)"),
    accent: raw("oklch(0.88 0.07 290)"),
    accentForeground: raw("oklch(0.3 0.1 285)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.87 0.03 192)"),
    input: raw("oklch(0.87 0.03 192)"),
    ring: raw("oklch(0.55 0.18 210)")
  },
  dark: {
    background: raw("oklch(0.16 0.035 210)"),
    foreground: raw("oklch(0.93 0.015 192)"),
    card: raw("oklch(0.21 0.043 210)"),
    cardForeground: raw("oklch(0.93 0.015 192)"),
    popover: raw("oklch(0.16 0.035 210)"),
    popoverForeground: raw("oklch(0.93 0.015 192)"),
    primary: raw("oklch(0.68 0.17 210)"),
    primaryForeground: raw("oklch(0.16 0.035 210)"),
    secondary: raw("oklch(0.26 0.055 175)"),
    secondaryForeground: raw("oklch(0.88 0.018 185)"),
    muted: raw("oklch(0.24 0.042 210)"),
    mutedForeground: raw("oklch(0.6 0.05 200)"),
    accent: raw("oklch(0.35 0.1 285)"),
    accentForeground: raw("oklch(0.88 0.03 288)"),
    destructive: raw("oklch(0.44 0.17 25)"),
    destructiveForeground: raw("oklch(0.88 0.01 25)"),
    border: raw("oklch(0.28 0.048 210)"),
    input: raw("oklch(0.28 0.048 210)"),
    ring: raw("oklch(0.68 0.17 210)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/vintage-paper.ts
var vintagePaperTheme = defineTheme({
  name: "vintage-paper",
  label: "Vintage Paper",
  light: {
    background: raw("oklch(0.968 0.018 85)"),
    foreground: raw("oklch(0.22 0.035 75)"),
    card: raw("oklch(0.98 0.012 85)"),
    cardForeground: raw("oklch(0.22 0.035 75)"),
    popover: raw("oklch(0.98 0.012 85)"),
    popoverForeground: raw("oklch(0.22 0.035 75)"),
    primary: raw("oklch(0.42 0.12 68)"),
    primaryForeground: raw("oklch(0.968 0.018 85)"),
    secondary: raw("oklch(0.92 0.025 82)"),
    secondaryForeground: raw("oklch(0.32 0.055 70)"),
    muted: raw("oklch(0.93 0.018 83)"),
    mutedForeground: raw("oklch(0.52 0.04 75)"),
    accent: raw("oklch(0.87 0.04 92)"),
    accentForeground: raw("oklch(0.28 0.06 82)"),
    destructive: raw("oklch(0.55 0.2 25)"),
    destructiveForeground: raw("oklch(0.968 0.018 85)"),
    border: raw("oklch(0.86 0.028 80)"),
    input: raw("oklch(0.86 0.028 80)"),
    ring: raw("oklch(0.42 0.12 68)")
  },
  dark: {
    background: raw("oklch(0.17 0.025 70)"),
    foreground: raw("oklch(0.9 0.018 83)"),
    card: raw("oklch(0.22 0.03 70)"),
    cardForeground: raw("oklch(0.9 0.018 83)"),
    popover: raw("oklch(0.17 0.025 70)"),
    popoverForeground: raw("oklch(0.9 0.018 83)"),
    primary: raw("oklch(0.75 0.1 78)"),
    primaryForeground: raw("oklch(0.17 0.025 70)"),
    secondary: raw("oklch(0.27 0.035 70)"),
    secondaryForeground: raw("oklch(0.86 0.018 82)"),
    muted: raw("oklch(0.25 0.03 70)"),
    mutedForeground: raw("oklch(0.6 0.035 75)"),
    accent: raw("oklch(0.3 0.045 80)"),
    accentForeground: raw("oklch(0.86 0.022 85)"),
    destructive: raw("oklch(0.44 0.16 25)"),
    destructiveForeground: raw("oklch(0.88 0.01 25)"),
    border: raw("oklch(0.3 0.032 70)"),
    input: raw("oklch(0.3 0.032 70)"),
    ring: raw("oklch(0.75 0.1 78)")
  },
  radius: "0.25rem"
});

// src/themes/tweakcn/sunset-horizon.ts
var sunsetHorizonTheme = defineTheme({
  name: "sunset-horizon",
  label: "Sunset Horizon",
  light: {
    background: raw("oklch(0.98 0.012 40)"),
    foreground: raw("oklch(0.2 0.04 35)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.2 0.04 35)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.2 0.04 35)"),
    primary: raw("oklch(0.65 0.22 30)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.94 0.04 55)"),
    secondaryForeground: raw("oklch(0.32 0.07 45)"),
    muted: raw("oklch(0.95 0.02 40)"),
    mutedForeground: raw("oklch(0.55 0.05 38)"),
    accent: raw("oklch(0.88 0.1 65)"),
    accentForeground: raw("oklch(0.25 0.08 60)"),
    destructive: raw("oklch(0.6 0.22 25)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9 0.025 40)"),
    input: raw("oklch(0.9 0.025 40)"),
    ring: raw("oklch(0.65 0.22 30)")
  },
  dark: {
    background: raw("oklch(0.16 0.04 30)"),
    foreground: raw("oklch(0.95 0.015 40)"),
    card: raw("oklch(0.21 0.05 30)"),
    cardForeground: raw("oklch(0.95 0.015 40)"),
    popover: raw("oklch(0.16 0.04 30)"),
    popoverForeground: raw("oklch(0.95 0.015 40)"),
    primary: raw("oklch(0.78 0.2 35)"),
    primaryForeground: raw("oklch(0.16 0.04 30)"),
    secondary: raw("oklch(0.28 0.06 42)"),
    secondaryForeground: raw("oklch(0.9 0.02 50)"),
    muted: raw("oklch(0.25 0.05 32)"),
    mutedForeground: raw("oklch(0.62 0.055 38)"),
    accent: raw("oklch(0.42 0.12 62)"),
    accentForeground: raw("oklch(0.9 0.04 65)"),
    destructive: raw("oklch(0.5 0.18 25)"),
    destructiveForeground: raw("oklch(0.9 0.01 25)"),
    border: raw("oklch(0.3 0.055 30)"),
    input: raw("oklch(0.3 0.055 30)"),
    ring: raw("oklch(0.78 0.2 35)")
  },
  radius: "0.75rem"
});

// src/themes/tweakcn/starry-night.ts
var starryNightTheme = defineTheme({
  name: "starry-night",
  label: "Starry Night",
  light: {
    background: raw("oklch(0.12 0.05 255)"),
    foreground: raw("oklch(0.93 0.02 255)"),
    card: raw("oklch(0.17 0.06 255)"),
    cardForeground: raw("oklch(0.93 0.02 255)"),
    popover: raw("oklch(0.12 0.05 255)"),
    popoverForeground: raw("oklch(0.93 0.02 255)"),
    primary: raw("oklch(0.68 0.18 255)"),
    primaryForeground: raw("oklch(0.12 0.05 255)"),
    secondary: raw("oklch(0.22 0.07 255)"),
    secondaryForeground: raw("oklch(0.88 0.02 255)"),
    muted: raw("oklch(0.2 0.06 255)"),
    mutedForeground: raw("oklch(0.62 0.06 255)"),
    accent: raw("oklch(0.78 0.18 65)"),
    accentForeground: raw("oklch(0.12 0.05 255)"),
    destructive: raw("oklch(0.65 0.22 12)"),
    destructiveForeground: raw("oklch(0.12 0.05 255)"),
    border: raw("oklch(0.28 0.07 255)"),
    input: raw("oklch(0.28 0.07 255)"),
    ring: raw("oklch(0.68 0.18 255)")
  },
  dark: {
    background: raw("oklch(0.09 0.04 258)"),
    foreground: raw("oklch(0.91 0.018 255)"),
    card: raw("oklch(0.13 0.055 258)"),
    cardForeground: raw("oklch(0.91 0.018 255)"),
    popover: raw("oklch(0.09 0.04 258)"),
    popoverForeground: raw("oklch(0.91 0.018 255)"),
    primary: raw("oklch(0.72 0.2 255)"),
    primaryForeground: raw("oklch(0.09 0.04 258)"),
    secondary: raw("oklch(0.18 0.06 258)"),
    secondaryForeground: raw("oklch(0.86 0.018 255)"),
    muted: raw("oklch(0.16 0.05 258)"),
    mutedForeground: raw("oklch(0.58 0.06 255)"),
    accent: raw("oklch(0.8 0.2 65)"),
    accentForeground: raw("oklch(0.09 0.04 258)"),
    destructive: raw("oklch(0.6 0.2 12)"),
    destructiveForeground: raw("oklch(0.09 0.04 258)"),
    border: raw("oklch(0.22 0.065 258)"),
    input: raw("oklch(0.22 0.065 258)"),
    ring: raw("oklch(0.72 0.2 255)")
  },
  radius: "0.5rem"
});

// src/themes/tweakcn/claude.ts
var claudeTheme = defineTheme({
  name: "claude",
  label: "Claude",
  light: {
    background: raw("oklch(0.9765 0.0126 73.35)"),
    foreground: raw("oklch(0.2588 0.0533 46.98)"),
    card: raw("oklch(0.9765 0.0126 73.35)"),
    cardForeground: raw("oklch(0.2588 0.0533 46.98)"),
    popover: raw("oklch(0.9765 0.0126 73.35)"),
    popoverForeground: raw("oklch(0.2588 0.0533 46.98)"),
    primary: raw("oklch(0.6471 0.1408 43.64)"),
    primaryForeground: raw("oklch(0.9765 0.0126 73.35)"),
    secondary: raw("oklch(0.9285 0.0227 74.08)"),
    secondaryForeground: raw("oklch(0.4432 0.0688 45.09)"),
    muted: raw("oklch(0.9285 0.0227 74.08)"),
    mutedForeground: raw("oklch(0.5549 0.0644 46.27)"),
    accent: raw("oklch(0.8824 0.0526 74.4)"),
    accentForeground: raw("oklch(0.3314 0.0618 45.85)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.9765 0.0126 73.35)"),
    border: raw("oklch(0.8549 0.0441 73.35)"),
    input: raw("oklch(0.8549 0.0441 73.35)"),
    ring: raw("oklch(0.6471 0.1408 43.64)")
  },
  dark: {
    background: raw("oklch(0.2157 0.0372 46.9)"),
    foreground: raw("oklch(0.9412 0.0184 74.33)"),
    card: raw("oklch(0.2549 0.0451 47.22)"),
    cardForeground: raw("oklch(0.9412 0.0184 74.33)"),
    popover: raw("oklch(0.2157 0.0372 46.9)"),
    popoverForeground: raw("oklch(0.9412 0.0184 74.33)"),
    primary: raw("oklch(0.7647 0.1195 51.85)"),
    primaryForeground: raw("oklch(0.2157 0.0372 46.9)"),
    secondary: raw("oklch(0.3176 0.0547 46.98)"),
    secondaryForeground: raw("oklch(0.8706 0.0363 73.74)"),
    muted: raw("oklch(0.3176 0.0547 46.98)"),
    mutedForeground: raw("oklch(0.702 0.0693 50.25)"),
    accent: raw("oklch(0.3647 0.0608 47.06)"),
    accentForeground: raw("oklch(0.9176 0.025 74.12)"),
    destructive: raw("oklch(0.396 0.141 25.723)"),
    destructiveForeground: raw("oklch(0.637 0.237 25.331)"),
    border: raw("oklch(0.3647 0.0608 47.06)"),
    input: raw("oklch(0.3647 0.0608 47.06)"),
    ring: raw("oklch(0.7647 0.1195 51.85)")
  },
  radius: "0.75rem"
});

// src/themes/tweakcn/index.ts
var tweakcnThemes = [
  modernMinimalTheme,
  violetBloomTheme,
  t3ChatTheme,
  twitterTheme,
  mochaMousseTheme,
  bubblegumTheme,
  amethystHazeTheme,
  notebookTheme,
  doom64Theme,
  catppuccinTheme,
  graphiteTheme,
  perpetuityTheme,
  kodamaGroveTheme,
  cosmicNightTheme,
  tangerineTheme,
  quantumRoseTheme,
  natureTheme,
  boldTechTheme,
  elegantLuxuryTheme,
  amberMinimalTheme,
  supabaseTheme,
  neoBrutalismTheme,
  solarDuskTheme,
  claymorphismTheme,
  cyberpunkTheme,
  pastelDreamsTheme,
  cleanSlateTheme,
  caffeineTheme,
  oceanBreezeTheme,
  retroArcadeTheme,
  midnightBloomTheme,
  candylandTheme,
  northernLightsTheme,
  vintagePaperTheme,
  sunsetHorizonTheme,
  starryNightTheme,
  claudeTheme
];

// src/themes/community/community-light-green-cmlhfq.ts
var communityLightGreenCmlhfqTheme = defineTheme({
  name: "community-light-green-cmlhfq",
  label: "Light Green",
  _sourceName: "Light Green",
  category: "Community",
  light: {
    background: raw("#fbfcf8"),
    foreground: raw("#0f172a"),
    card: raw("#ffffff"),
    cardForeground: raw("#0f172a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0f172a"),
    primary: raw("#aff33e"),
    primaryForeground: raw("#000000"),
    secondary: raw("#334155"),
    secondaryForeground: raw("#f8fafc"),
    muted: raw("#f1f5f9"),
    mutedForeground: raw("#64748b"),
    accent: raw("#f0fdf4"),
    accentForeground: raw("#166534"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e2e8f0"),
    input: raw("#e2e8f0"),
    ring: raw("#aff33e")
  },
  dark: {
    background: raw("#020617"),
    foreground: raw("#f8fafc"),
    card: raw("#0f172a"),
    cardForeground: raw("#f8fafc"),
    popover: raw("#0f172a"),
    popoverForeground: raw("#f8fafc"),
    primary: raw("#aff33e"),
    primaryForeground: raw("#000000"),
    secondary: raw("#1e293b"),
    secondaryForeground: raw("#f8fafc"),
    muted: raw("#1e293b"),
    mutedForeground: raw("#94a3b8"),
    accent: raw("#14532d"),
    accentForeground: raw("#aff33e"),
    destructive: raw("#991b1b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#1e293b"),
    input: raw("#1e293b"),
    ring: raw("#aff33e")
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1rem"
});

// src/themes/community/community-zen-inspired-theme-cmlm0c.ts
var communityZenInspiredThemeCmlm0cTheme = defineTheme({
  name: "community-zen-inspired-theme-cmlm0c",
  label: "Zen Inspired Theme",
  _sourceName: "Zen Inspired Theme",
  category: "Community",
  light: {
    background: raw("#E9E4D8"),
    foreground: raw("#1E1E1E"),
    card: raw("#F4EFE4"),
    cardForeground: raw("#1E1E1E"),
    popover: raw("#F4EFE4"),
    popoverForeground: raw("#1E1E1E"),
    primary: raw("#2E2E2E"),
    primaryForeground: raw("#E6E4D7"),
    secondary: raw("#D8D2C4"),
    secondaryForeground: raw("#2E2E2E"),
    muted: raw("#CFC8B8"),
    mutedForeground: raw("#5E5A52"),
    accent: raw("#E6E4D7"),
    accentForeground: raw("#2E2E2E"),
    destructive: raw("#DC2626"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#D2CBBB"),
    input: raw("#D2CBBB"),
    ring: raw("#2E2E2E")
  },
  dark: {
    background: raw("#141414"),
    foreground: raw("#E8E3DA"),
    card: raw("#1C1C1C"),
    cardForeground: raw("#E8E3DA"),
    popover: raw("#1C1C1C"),
    popoverForeground: raw("#E8E3DA"),
    primary: raw("#D1CFC0"),
    primaryForeground: raw("#363636"),
    secondary: raw("#222222"),
    secondaryForeground: raw("#D1CFC0"),
    muted: raw("#2A2A2A"),
    mutedForeground: raw("#8E8A83"),
    accent: raw("#363636"),
    accentForeground: raw("#D1CFC0"),
    destructive: raw("#EF4444"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#2C2C2C"),
    input: raw("#2C2C2C"),
    ring: raw("#D1CFC0")
  },
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Playfair Display", serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-astrovista-cmlk70.ts
var communityAstrovistaCmlk70Theme = defineTheme({
  name: "community-astrovista-cmlk70",
  label: "Astrovista",
  _sourceName: "AstroVista",
  category: "Community",
  light: {
    background: raw("#e8ebed"),
    foreground: raw("#333333"),
    card: raw("#ffffff"),
    cardForeground: raw("#333333"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#333333"),
    primary: raw("#df6035"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#2f4b79"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#f9fafb"),
    mutedForeground: raw("#6b7280"),
    accent: raw("#d6e4f0"),
    accentForeground: raw("#1e3a8a"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#cccccc"),
    input: raw("#f4f5f7"),
    ring: raw("#e05d38")
  },
  dark: {
    background: raw("#1a1a1a"),
    foreground: raw("#e5e5e5"),
    card: raw("#202020"),
    cardForeground: raw("#e5e5e5"),
    popover: raw("#202020"),
    popoverForeground: raw("#e5e5e5"),
    primary: raw("#df6035"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#284167"),
    secondaryForeground: raw("#e5e5e5"),
    muted: raw("#2a2a2a"),
    mutedForeground: raw("#808080"),
    accent: raw("#2a3656"),
    accentForeground: raw("#bfdbfe"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#353535"),
    input: raw("#303030"),
    ring: raw("#e05d38")
  },
  fonts: {
    body: "Outfit, sans-serif",
    heading: "Merriweather, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-qrafthive-cmlk6w.ts
var communityQrafthiveCmlk6wTheme = defineTheme({
  name: "community-qrafthive-cmlk6w",
  label: "Qrafthive",
  _sourceName: "qrafthive",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#111827"),
    card: raw("#ffffff"),
    cardForeground: raw("#111827"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#111827"),
    primary: raw("#d87943"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#527575"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#f3f4f6"),
    mutedForeground: raw("#6b7280"),
    accent: raw("#eeeeee"),
    accentForeground: raw("#111827"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#e5e7eb"),
    input: raw("#e5e7eb"),
    ring: raw("#d87943")
  },
  dark: {
    background: raw("#121113"),
    foreground: raw("#c1c1c1"),
    card: raw("#121212"),
    cardForeground: raw("#c1c1c1"),
    popover: raw("#121113"),
    popoverForeground: raw("#c1c1c1"),
    primary: raw("#e78a53"),
    primaryForeground: raw("#121113"),
    secondary: raw("#5f8787"),
    secondaryForeground: raw("#121113"),
    muted: raw("#222222"),
    mutedForeground: raw("#888888"),
    accent: raw("#333333"),
    accentForeground: raw("#c1c1c1"),
    destructive: raw("#5f8787"),
    destructiveForeground: raw("#121113"),
    border: raw("#222222"),
    input: raw("#222222"),
    ring: raw("#e78a53")
  },
  fonts: {
    body: "Outfit, ui-sans-serif, sans-serif, system-ui",
    heading: "Merriweather, ui-serif, serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-tiesen-cmliib.ts
var communityTiesenCmliibTheme = defineTheme({
  name: "community-tiesen-cmliib",
  label: "Tiesen",
  _sourceName: "Tiesen",
  category: "Community",
  light: {
    background: raw("oklch(0.9851 0 0)"),
    foreground: raw("oklch(0 0 0)"),
    card: raw("oklch(1.00 0 0)"),
    cardForeground: raw("oklch(0.2046 0 0)"),
    popover: raw("oklch(1.00 0 0)"),
    popoverForeground: raw("oklch(0 0 0)"),
    primary: raw("oklch(0.5144 0.1605 267.44)"),
    primaryForeground: raw("oklch(0.97 0.014 254.604)"),
    secondary: raw("oklch(0.94 0 0)"),
    secondaryForeground: raw("oklch(0.25 0 0)"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("oklch(0.44 0 0)"),
    accent: raw("oklch(0.9214 0.0248 257.65)"),
    accentForeground: raw("oklch(0.2571 0.1161 272.24)"),
    destructive: raw("oklch(0.58 0.22 27)"),
    destructiveForeground: raw("oklch(0.97 0.014 254.604)"),
    border: raw("oklch(0.92 0 0)"),
    input: raw("oklch(0.94 0 0)"),
    ring: raw("oklch(0.5144 0.1605 267.44)")
  },
  dark: {
    background: raw("oklch(0 0 0)"),
    foreground: raw("oklch(1.00 0 0)"),
    card: raw("oklch(0.1448 0 0)"),
    cardForeground: raw("oklch(0.9461 0 0)"),
    popover: raw("oklch(0.1448 0 0)"),
    popoverForeground: raw("oklch(1.00 0 0)"),
    primary: raw("oklch(0.5144 0.1605 267.44)"),
    primaryForeground: raw("oklch(0.97 0.014 254.604)"),
    secondary: raw("oklch(0.25 0 0)"),
    secondaryForeground: raw("oklch(0.94 0 0)"),
    muted: raw("oklch(0.23 0 0)"),
    mutedForeground: raw("oklch(0.72 0 0)"),
    accent: raw("oklch(0.32 0 0)"),
    accentForeground: raw("oklch(0.9214 0.0248 257.65)"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.97 0.014 254.604)"),
    border: raw("oklch(0.26 0 0)"),
    input: raw("oklch(0.32 0 0)"),
    ring: raw("oklch(0.5144 0.1605 267.44)")
  },
  fonts: {
    body: "Geist, sans-serif",
    heading: "Noto Serif Georgian, ui-serif, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-sage-green-cmlf70.ts
var communitySageGreenCmlf70Theme = defineTheme({
  name: "community-sage-green-cmlf70",
  label: "Sage Green",
  _sourceName: "Sage Green",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#AFBEA5"),
    primaryForeground: raw("#000000"),
    secondary: raw("#edf0f4"),
    secondaryForeground: raw("#080808"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#878787"),
    accent: raw("#495940"),
    accentForeground: raw("#FFFF"),
    destructive: raw("#b3191f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#AFBEA5")
  },
  dark: {
    background: raw("#070503"),
    foreground: raw("#f9f8f7"),
    card: raw("#100d08"),
    cardForeground: raw("#f9f8f7"),
    popover: raw("#0b0905"),
    popoverForeground: raw("#f9f8f7"),
    primary: raw("#AFBEA5"),
    primaryForeground: raw("#040302"),
    secondary: raw("#26211a"),
    secondaryForeground: raw("#e7e4df"),
    muted: raw("#1e1a14"),
    mutedForeground: raw("#928f8a"),
    accent: raw("#495940"),
    accentForeground: raw("#FFF"),
    destructive: raw("#b3191f"),
    destructiveForeground: raw("#f9f8f7"),
    border: raw("#2f281b"),
    input: raw("#1a150e"),
    ring: raw("#AFBEA5")
  },
  fonts: {
    body: "Plus Jakarta Sans, sans-serif",
    heading: "Lora, serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-claude-cmlr30.ts
var communityClaudeCmlr30Theme = defineTheme({
  name: "community-claude-cmlr30",
  label: "Claude +",
  _sourceName: "Claude +",
  category: "Community",
  light: {
    background: raw("#faf9f5"),
    foreground: raw("#3d3929"),
    card: raw("#f5f4ef"),
    cardForeground: raw("#141413"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#28261b"),
    primary: raw("#c96442"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e9e6dc"),
    secondaryForeground: raw("#535146"),
    muted: raw("#ede9de"),
    mutedForeground: raw("#6e6d68"),
    accent: raw("#e9e6dc"),
    accentForeground: raw("#28261b"),
    destructive: raw("#141413"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#dad9d4"),
    input: raw("#b4b2a7"),
    ring: raw("#c96442")
  },
  dark: {
    background: raw("#262624"),
    foreground: raw("#f1f1ef"),
    card: raw("#2c2c2b"),
    cardForeground: raw("#faf9f5"),
    popover: raw("#30302e"),
    popoverForeground: raw("#e5e5e2"),
    primary: raw("#d97757"),
    primaryForeground: raw("#141413"),
    secondary: raw("#faf9f5"),
    secondaryForeground: raw("#30302e"),
    muted: raw("#1b1b19"),
    mutedForeground: raw("#b7b5a9"),
    accent: raw("#1a1915"),
    accentForeground: raw("#f5f4ee"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#3e3e38"),
    input: raw("#52514a"),
    ring: raw("#d97757")
  },
  fonts: {
    body: "Outfit, sans-serif",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "1rem"
});

// src/themes/community/community-minimal-neutral-cmlr2z.ts
var communityMinimalNeutralCmlr2zTheme = defineTheme({
  name: "community-minimal-neutral-cmlr2z",
  label: "Minimal Neutral",
  _sourceName: "Minimal Neutral",
  category: "Community",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("oklch(0.145 0 0)"),
    card: raw("oklch(0.995 0 0)"),
    cardForeground: raw("oklch(0.145 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.145 0 0)"),
    primary: raw("oklch(0.205 0 0)"),
    primaryForeground: raw("oklch(0.985 0 0)"),
    secondary: raw("oklch(0.87 0 0)"),
    secondaryForeground: raw("oklch(0.145 0 0)"),
    muted: raw("oklch(0.95 0 0)"),
    mutedForeground: raw("oklch(0.556 0 0)"),
    accent: raw("oklch(0.95 0 0)"),
    accentForeground: raw("oklch(0.205 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.95 0 0)"),
    input: raw("oklch(0.97 0 0)"),
    ring: raw("oklch(0.708 0 0)")
  },
  dark: {
    background: raw("oklch(0.205 0 0)"),
    foreground: raw("oklch(0.985 0 0)"),
    card: raw("oklch(0.165 0 0)"),
    cardForeground: raw("oklch(0.985 0 0)"),
    popover: raw("oklch(0.205 0 0)"),
    popoverForeground: raw("oklch(0.985 0 0)"),
    primary: raw("oklch(0.922 0 0)"),
    primaryForeground: raw("oklch(0.205 0 0)"),
    secondary: raw("oklch(0.269 0 0)"),
    secondaryForeground: raw("oklch(0.985 0 0)"),
    muted: raw("oklch(0.269 0 0)"),
    mutedForeground: raw("oklch(0.708 0 0)"),
    accent: raw("oklch(0.371 0 0)"),
    accentForeground: raw("oklch(0.985 0 0)"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("oklch(0.269 0 0)"),
    input: raw("oklch(0.269 0 0)"),
    ring: raw("oklch(0.556 0 0)")
  },
  fonts: {
    body: "DM Sans, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "1rem"
});

// src/themes/community/community-designbyte-cmlpf5.ts
var communityDesignbyteCmlpf5Theme = defineTheme({
  name: "community-designbyte-cmlpf5",
  label: "Designbyte",
  _sourceName: "designbyte",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#51f0a8"),
    primaryForeground: raw("#000000"),
    secondary: raw("#fcfdfd"),
    secondaryForeground: raw("#080808"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#f9fffc"),
    accentForeground: raw("#0d9f5d"),
    destructive: raw("#f54a88"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#f4f6f8"),
    input: raw("#ebebeb"),
    ring: raw("#51f0a8")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#f0f0f0"),
    card: raw("#0a0a0a"),
    cardForeground: raw("#f0f0f0"),
    popover: raw("#1a1b1b"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#51f0a8"),
    primaryForeground: raw("#000000"),
    secondary: raw("#216a49"),
    secondaryForeground: raw("#f0f0f0"),
    muted: raw("#252527"),
    mutedForeground: raw("#969696"),
    accent: raw("#093723"),
    accentForeground: raw("#fefefe"),
    destructive: raw("#ff78a5"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#19191a"),
    input: raw("#3b3b3b"),
    ring: raw("#51f0a8")
  },
  fonts: {
    body: "Plus Jakarta Sans, sans-serif",
    heading: "Lora, serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-mx-brutalist-cmllfv.ts
var communityMxBrutalistCmllfvTheme = defineTheme({
  name: "community-mx-brutalist-cmllfv",
  label: "MX Brutalist",
  _sourceName: "MX-Brutalist",
  category: "Community",
  light: {
    background: raw("hsl(45, 100%, 98%)"),
    foreground: raw("hsl(150, 60%, 5%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(150, 60%, 5%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(150, 60%, 5%)"),
    primary: raw("hsl(150, 100%, 28%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(0, 100%, 48%)"),
    secondaryForeground: raw("hsl(0, 0%, 100%)"),
    muted: raw("hsl(45, 60%, 90%)"),
    mutedForeground: raw("hsl(45, 30%, 20%)"),
    accent: raw("hsl(35, 100%, 52%)"),
    accentForeground: raw("hsl(150, 60%, 5%)"),
    destructive: raw("hsl(0, 100%, 45%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(0, 0%, 0%)"),
    input: raw("hsl(0, 0%, 100%)"),
    ring: raw("hsl(150, 100%, 28%)")
  },
  dark: {
    background: raw("hsl(150, 80%, 4%)"),
    foreground: raw("hsl(45, 100%, 95%)"),
    card: raw("hsl(150, 70%, 8%)"),
    cardForeground: raw("hsl(45, 100%, 95%)"),
    popover: raw("hsl(150, 70%, 8%)"),
    popoverForeground: raw("hsl(45, 100%, 95%)"),
    primary: raw("hsl(150, 100%, 48%)"),
    primaryForeground: raw("hsl(150, 100%, 2%)"),
    secondary: raw("hsl(0, 100%, 60%)"),
    secondaryForeground: raw("hsl(0, 0%, 100%)"),
    muted: raw("hsl(150, 50%, 12%)"),
    mutedForeground: raw("hsl(45, 20%, 75%)"),
    accent: raw("hsl(35, 100%, 58%)"),
    accentForeground: raw("hsl(150, 100%, 2%)"),
    destructive: raw("hsl(0, 100%, 50%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(45, 100%, 95%)"),
    input: raw("hsl(150, 40%, 12%)"),
    ring: raw("hsl(35, 100%, 58%)")
  },
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Lora', serif"
  },
  radius: "0px"
});

// src/themes/community/community-2077-cmledj.ts
var community2077CmledjTheme = defineTheme({
  name: "community-2077-cmledj",
  label: "2077",
  _sourceName: "2077",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#1a1a1a"),
    card: raw("#ffffff"),
    cardForeground: raw("#1a1a1a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1a1a1a"),
    primary: raw("#1c1c1c"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffffff"),
    secondaryForeground: raw("#1c1c1c"),
    muted: raw("#ffffff"),
    mutedForeground: raw("#8a8a8a"),
    accent: raw("#ffffff"),
    accentForeground: raw("#1c1c1c"),
    destructive: raw("#ea1330"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#ffffff"),
    input: raw("#ffffff"),
    ring: raw("#c1c1c1")
  },
  dark: {
    background: raw("#000"),
    foreground: raw("#ffffff"),
    card: raw("#000"),
    cardForeground: raw("#fff"),
    popover: raw("#000"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#d6544b"),
    primaryForeground: raw("#000000"),
    secondary: raw("#d6544b"),
    secondaryForeground: raw("#000000"),
    muted: raw("#1c1c17"),
    mutedForeground: raw("#ffffff"),
    accent: raw("#d6544b"),
    accentForeground: raw("#000"),
    destructive: raw("#d6544b"),
    destructiveForeground: raw("#000"),
    border: raw("#222"),
    input: raw("#000"),
    ring: raw("#d6544b")
  },
  fonts: {
    body: "Chakra Petch, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0rem"
});

// src/themes/community/community-porfolio-theme-cmler0.ts
var communityPorfolioThemeCmler0Theme = defineTheme({
  name: "community-porfolio-theme-cmler0",
  label: "Portfolio Theme",
  _sourceName: "Porfolio theme",
  category: "Community",
  light: {
    background: raw("#f8f7f2"),
    foreground: raw("#1a1a1a"),
    card: raw("#ffffff"),
    cardForeground: raw("#1a1a1a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1a1a1a"),
    primary: raw("#c1a875"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e5e1d5"),
    secondaryForeground: raw("#1a1a1a"),
    muted: raw("#f1ede1"),
    mutedForeground: raw("#6b6352"),
    accent: raw("#c1a875"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#d32f2f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e2decb"),
    input: raw("#e2decb"),
    ring: raw("#c1a875")
  },
  dark: {
    background: raw("#141412"),
    foreground: raw("#f8f7f2"),
    card: raw("#1e1e1c"),
    cardForeground: raw("#f8f7f2"),
    popover: raw("#1e1e1c"),
    popoverForeground: raw("#f8f7f2"),
    primary: raw("#d4bc8b"),
    primaryForeground: raw("#141412"),
    secondary: raw("#2d2b28"),
    secondaryForeground: raw("#f8f7f2"),
    muted: raw("#242422"),
    mutedForeground: raw("#a39e94"),
    accent: raw("#d4bc8b"),
    accentForeground: raw("#141412"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#f8f7f2"),
    border: raw("#2d2b28"),
    input: raw("#2d2b28"),
    ring: raw("#d4bc8b")
  },
  fonts: {
    body: "Inter, -apple-system, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-vtron-cmlpfk.ts
var communityVtronCmlpfkTheme = defineTheme({
  name: "community-vtron-cmlpfk",
  label: "VTRON",
  _sourceName: "VTRON",
  category: "Community",
  light: {
    background: raw("#fcfcfc"),
    foreground: raw("#0e142b"),
    card: raw("#fafafa"),
    cardForeground: raw("#0e142b"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0e142b"),
    primary: raw("#2e67ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#0e142b"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#ffffff"),
    mutedForeground: raw("#0e142b"),
    accent: raw("#ffffff"),
    accentForeground: raw("#2e67ff"),
    destructive: raw("#ff6c35"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e4e4"),
    input: raw("#cccccc"),
    ring: raw("#2e6aff")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#ffffff"),
    card: raw("#0f0f0f"),
    cardForeground: raw("#d9d9d9"),
    popover: raw("#000000"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#2b65ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffffff"),
    secondaryForeground: raw("#0e142b"),
    muted: raw("#181818"),
    mutedForeground: raw("#7b7e8c"),
    accent: raw("#000e39"),
    accentForeground: raw("#2b65ff"),
    destructive: raw("#ff6c35"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#26272e"),
    input: raw("#162151"),
    ring: raw("#2e6aff")
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1.3rem"
});

// src/themes/community/community-bold-wikipedia-cmlmpb.ts
var communityBoldWikipediaCmlmpbTheme = defineTheme({
  name: "community-bold-wikipedia-cmlmpb",
  label: "Bold Wikipedia",
  _sourceName: "Bold Wikipedia",
  category: "Community",
  light: {
    background: raw("hsl(0, 0%, 100%)"),
    foreground: raw("hsl(0, 0%, 15%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(0, 0%, 15%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(0, 0%, 15%)"),
    primary: raw("hsl(214, 85%, 45%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(210, 20%, 96%)"),
    secondaryForeground: raw("hsl(0, 0%, 15%)"),
    muted: raw("hsl(0, 0%, 96%)"),
    mutedForeground: raw("hsl(0, 0%, 45%)"),
    accent: raw("hsl(214, 85%, 96%)"),
    accentForeground: raw("hsl(214, 85%, 35%)"),
    destructive: raw("hsl(0, 84%, 44%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(0, 0%, 82%)"),
    input: raw("hsl(0, 0%, 90%)"),
    ring: raw("hsl(214, 85%, 45%)")
  },
  dark: {
    background: raw("hsl(0, 0%, 12%)"),
    foreground: raw("hsl(0, 0%, 92%)"),
    card: raw("hsl(0, 0%, 15%)"),
    cardForeground: raw("hsl(0, 0%, 92%)"),
    popover: raw("hsl(0, 0%, 15%)"),
    popoverForeground: raw("hsl(0, 0%, 92%)"),
    primary: raw("hsl(212, 100%, 75%)"),
    primaryForeground: raw("hsl(212, 100%, 10%)"),
    secondary: raw("hsl(0, 0%, 20%)"),
    secondaryForeground: raw("hsl(0, 0%, 92%)"),
    muted: raw("hsl(0, 0%, 18%)"),
    mutedForeground: raw("hsl(0, 0%, 65%)"),
    accent: raw("hsl(212, 100%, 20%)"),
    accentForeground: raw("hsl(212, 100%, 85%)"),
    destructive: raw("hsl(0, 75%, 50%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(0, 0%, 25%)"),
    input: raw("hsl(0, 0%, 25%)"),
    ring: raw("hsl(212, 100%, 75%)")
  },
  fonts: {
    body: '"Inter", "Segoe UI", "Helvetica Neue", sans-serif',
    heading: 'Georgia, "Times New Roman", serif'
  },
  radius: "0.125rem"
});

// src/themes/community/community-deep-purple-cmlh1j.ts
var communityDeepPurpleCmlh1jTheme = defineTheme({
  name: "community-deep-purple-cmlh1j",
  label: "Deep Purple",
  _sourceName: "Deep Purple",
  category: "Community",
  light: {
    background: raw("hsl(210, 40%, 98%)"),
    foreground: raw("hsl(224, 71%, 4%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(224, 71%, 4%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(224, 71%, 4%)"),
    primary: raw("hsl(263, 70%, 50%)"),
    primaryForeground: raw("hsl(210, 40%, 98%)"),
    secondary: raw("hsl(263, 20%, 94%)"),
    secondaryForeground: raw("hsl(263, 70%, 30%)"),
    muted: raw("hsl(220, 14%, 96%)"),
    mutedForeground: raw("hsl(220, 9%, 46%)"),
    accent: raw("hsl(263, 80%, 96%)"),
    accentForeground: raw("hsl(263, 70%, 50%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(220, 13%, 91%)"),
    input: raw("hsl(220, 13%, 91%)"),
    ring: raw("hsl(263, 70%, 50%)")
  },
  dark: {
    background: raw("hsl(260, 25%, 2%)"),
    foreground: raw("hsl(210, 40%, 98%)"),
    card: raw("hsl(260, 25%, 4%)"),
    cardForeground: raw("hsl(210, 40%, 98%)"),
    popover: raw("hsl(260, 25%, 5%)"),
    popoverForeground: raw("hsl(210, 40%, 98%)"),
    primary: raw("hsl(263, 85%, 65%)"),
    primaryForeground: raw("hsl(260, 25%, 2%)"),
    secondary: raw("hsl(263, 40%, 15%)"),
    secondaryForeground: raw("hsl(263, 85%, 85%)"),
    muted: raw("hsl(260, 20%, 12%)"),
    mutedForeground: raw("hsl(260, 10%, 70%)"),
    accent: raw("hsl(263, 60%, 15%)"),
    accentForeground: raw("hsl(263, 85%, 65%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(260, 20%, 15%)"),
    input: raw("hsl(260, 20%, 15%)"),
    ring: raw("hsl(263, 85%, 65%)")
  },
  fonts: {
    body: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1rem"
});

// src/themes/community/community-pasteelement2-cmlpfh.ts
var communityPasteelement2CmlpfhTheme = defineTheme({
  name: "community-pasteelement2-cmlpfh",
  label: "Pasteelement2",
  _sourceName: "pasteelement2",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#c92d6a"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1b1d1e"),
    secondaryForeground: raw("#edf0f4"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#fbdae7"),
    accentForeground: raw("#c92d6a"),
    destructive: raw("#e54b4f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#000000")
  },
  dark: {
    background: raw("#060606"),
    foreground: raw("#f0f0f0"),
    card: raw("#18191b"),
    cardForeground: raw("#f0f0f0"),
    popover: raw("#222327"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#c92d6a"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1b1d1e"),
    secondaryForeground: raw("#f0f0f0"),
    muted: raw("#2a2c33"),
    mutedForeground: raw("#a0a0a0"),
    accent: raw("#1e293b"),
    accentForeground: raw("#c92d6a"),
    destructive: raw("#f87171"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#33353a"),
    input: raw("#33353a"),
    ring: raw("#c92d6a")
  },
  fonts: {
    body: "var(--font-montserrat), Montserrat, sans-serif",
    heading: "Lora, serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-v2-cmlofg.ts
var communityV2CmlofgTheme = defineTheme({
  name: "community-v2-cmlofg",
  label: "Ivory Studio",
  _sourceName: "v2",
  category: "Community",
  light: {
    background: raw("#F8FAFC"),
    foreground: raw("#0F172A"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#0F172A"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#0F172A"),
    primary: raw("#6366F1"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#E2E8F0"),
    secondaryForeground: raw("#1E293B"),
    muted: raw("#F1F5F9"),
    mutedForeground: raw("#64748B"),
    accent: raw("#E0E7FF"),
    accentForeground: raw("#3730A3"),
    destructive: raw("#EF4444"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#E2E8F0"),
    input: raw("#E2E8F0"),
    ring: raw("#6366F1")
  },
  dark: {
    background: raw("#0F172A"),
    foreground: raw("#F8FAFC"),
    card: raw("#1E293B"),
    cardForeground: raw("#F8FAFC"),
    popover: raw("#1E293B"),
    popoverForeground: raw("#F8FAFC"),
    primary: raw("#8B5CF6"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#334155"),
    secondaryForeground: raw("#F8FAFC"),
    muted: raw("#1E293B"),
    mutedForeground: raw("#94A3B8"),
    accent: raw("#3730A3"),
    accentForeground: raw("#F8FAFC"),
    destructive: raw("#F87171"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#334155"),
    input: raw("#334155"),
    ring: raw("#8B5CF6")
  },
  fonts: {
    body: "Afacad, ui-sans-serif, sans-serif, system-ui",
    heading: "Adamina, ui-serif, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-nlan-cmli81.ts
var communityNlanCmli81Theme = defineTheme({
  name: "community-nlan-cmli81",
  label: "NLAN",
  _sourceName: "NLAN",
  category: "Community",
  light: {
    background: raw("#f2eded"),
    foreground: raw("#0a1931"),
    card: raw("#ffffff"),
    cardForeground: raw("#0a1931"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0a1931"),
    primary: raw("#0047ab"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#050505"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#e5eaf5"),
    mutedForeground: raw("#4a5568"),
    accent: raw("#9effa9"),
    accentForeground: raw("#0a1931"),
    destructive: raw("#e11d48"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#248f4d"),
    input: raw("#ffffff"),
    ring: raw("#0047ab")
  },
  dark: {
    background: raw("#00050d"),
    foreground: raw("#ffffff"),
    card: raw("#001026"),
    cardForeground: raw("#ffffff"),
    popover: raw("#00050d"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#4dabff"),
    primaryForeground: raw("#00050d"),
    secondary: raw("#ff4d6d"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#001a40"),
    mutedForeground: raw("#cbd5e1"),
    accent: raw("#d02f4d"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ff3333"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#021c45"),
    input: raw("#001a40"),
    ring: raw("#4dabff")
  },
  fonts: {
    body: "Alan Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "'Playfair Display', serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-dark-forge-cmlf2k.ts
var communityDarkForgeCmlf2kTheme = defineTheme({
  name: "community-dark-forge-cmlf2k",
  label: "Dark Forge",
  _sourceName: "Dark Forge",
  category: "Community",
  light: {
    background: raw("#faf8f6"),
    foreground: raw("#1c1412"),
    card: raw("#ffffff"),
    cardForeground: raw("#1c1412"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1c1412"),
    primary: raw("#92400e"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#fdf4ef"),
    secondaryForeground: raw("#6b3a1f"),
    muted: raw("#f2eee9"),
    mutedForeground: raw("#7a706a"),
    accent: raw("#f5dcc8"),
    accentForeground: raw("#6b3a1f"),
    destructive: raw("#c52525"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e3dbd4"),
    input: raw("#e3dbd4"),
    ring: raw("#92400e")
  },
  dark: {
    background: raw("#0c0908"),
    foreground: raw("#e3dad4"),
    card: raw("#141110"),
    cardForeground: raw("#e3dad4"),
    popover: raw("#100d0c"),
    popoverForeground: raw("#e3dad4"),
    primary: raw("#c2956a"),
    primaryForeground: raw("#1a0e04"),
    secondary: raw("#1c1614"),
    secondaryForeground: raw("#a39890"),
    muted: raw("#1e1816"),
    mutedForeground: raw("#7a706a"),
    accent: raw("#2a1e14"),
    accentForeground: raw("#d4a574"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#fef2f2"),
    border: raw("#28211c"),
    input: raw("#2a231d"),
    ring: raw("#c2956a")
  },
  fonts: {
    body: '"IBM Plex Sans", "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
    heading: '"IBM Plex Serif", "Georgia", ui-serif, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-leadgen-cmle6z.ts
var communityLeadgenCmle6zTheme = defineTheme({
  name: "community-leadgen-cmle6z",
  label: "Leadgen",
  _sourceName: "Leadgen",
  category: "Community",
  light: {
    background: raw("#FFFFFF"),
    foreground: raw("#0A0A0B"),
    card: raw("#F5F5F7"),
    cardForeground: raw("#0A0A0B"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#0A0A0B"),
    primary: raw("#4F46E5"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#E0E0FF"),
    secondaryForeground: raw("#1E1B4B"),
    muted: raw("#F0F0F3"),
    mutedForeground: raw("#636366"),
    accent: raw("#6366F1"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#EF4444"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#E5E5E7"),
    input: raw("#E5E5E7"),
    ring: raw("#4F46E5")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#FFFFFF"),
    card: raw("#0A0A0C"),
    cardForeground: raw("#F2F2F7"),
    popover: raw("#000000"),
    popoverForeground: raw("#F2F2F7"),
    primary: raw("#5D5FEF"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#1E1E3F"),
    secondaryForeground: raw("#E0E0FF"),
    muted: raw("#0F0F1A"),
    mutedForeground: raw("#9898A0"),
    accent: raw("#2D2D6A"),
    accentForeground: raw("#A5B4FC"),
    destructive: raw("#FF453A"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#1C1C21"),
    input: raw("#1C1C21"),
    ring: raw("#5D5FEF")
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Lora', serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-my-aweasome-theme-cmlxzf.ts
var communityMyAweasomeThemeCmlxzfTheme = defineTheme({
  name: "community-my-aweasome-theme-cmlxzf",
  label: "My Aweasome Theme",
  _sourceName: "my aweasome theme",
  category: "Community",
  light: {
    background: raw("hsl(160 30% 99%)"),
    foreground: raw("hsl(160 50% 10%)"),
    card: raw("hsl(0 0% 100%)"),
    cardForeground: raw("hsl(160 50% 10%)"),
    popover: raw("hsl(0 0% 100%)"),
    popoverForeground: raw("hsl(160 50% 10%)"),
    primary: raw("hsl(160 84% 35%)"),
    primaryForeground: raw("hsl(160 100% 98%)"),
    secondary: raw("hsl(160 25% 94%)"),
    secondaryForeground: raw("hsl(160 50% 25%)"),
    muted: raw("hsl(160 15% 94%)"),
    mutedForeground: raw("hsl(160 15% 45%)"),
    accent: raw("hsl(160 40% 92%)"),
    accentForeground: raw("hsl(160 60% 25%)"),
    destructive: raw("hsl(0 84% 60%)"),
    destructiveForeground: raw("hsl(0 0% 98%)"),
    border: raw("hsl(160 20% 88%)"),
    input: raw("hsl(160 20% 88%)"),
    ring: raw("hsl(160 84% 35%)")
  },
  dark: {
    background: raw("hsl(160 40% 3%)"),
    foreground: raw("hsl(160 20% 98%)"),
    card: raw("hsl(160 40% 5%)"),
    cardForeground: raw("hsl(160 20% 98%)"),
    popover: raw("hsl(160 40% 4%)"),
    popoverForeground: raw("hsl(160 20% 98%)"),
    primary: raw("hsl(160 84% 45%)"),
    primaryForeground: raw("hsl(160 100% 98%)"),
    secondary: raw("hsl(160 25% 12%)"),
    secondaryForeground: raw("hsl(160 20% 90%)"),
    muted: raw("hsl(160 25% 10%)"),
    mutedForeground: raw("hsl(160 15% 65%)"),
    accent: raw("hsl(160 35% 15%)"),
    accentForeground: raw("hsl(160 20% 98%)"),
    destructive: raw("hsl(0 62% 35%)"),
    destructiveForeground: raw("hsl(0 0% 98%)"),
    border: raw("hsl(160 20% 15%)"),
    input: raw("hsl(160 20% 15%)"),
    ring: raw("hsl(160 84% 45%)")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.6rem"
});

// src/themes/community/community-amber-mono-2-0-cmlpw7.ts
var communityAmberMono20Cmlpw7Theme = defineTheme({
  name: "community-amber-mono-2-0-cmlpw7",
  label: "Amber Mono 2.0",
  _sourceName: "Amber Mono 2.0",
  category: "Community",
  light: {
    background: raw("oklch(0.985 0 0)"),
    foreground: raw("oklch(0.205 0 0)"),
    card: raw("oklch(0.97 0 0)"),
    cardForeground: raw("oklch(0.205 0 0)"),
    popover: raw("oklch(0.97 0 0)"),
    popoverForeground: raw("oklch(0.205 0 0)"),
    primary: raw("oklch(0.666 0.179 58.318)"),
    primaryForeground: raw("oklch(0.985 0.001 106.423)"),
    secondary: raw("oklch(0.985 0.001 106.423)"),
    secondaryForeground: raw("oklch(0.268 0.007 34.298)"),
    muted: raw("oklch(0.923 0.003 48.717)"),
    mutedForeground: raw("oklch(0.216 0.006 56.043)"),
    accent: raw("oklch(0.985 0.001 106.423)"),
    accentForeground: raw("oklch(0.374 0.01 67.558)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.985 0.001 106.423)"),
    border: raw("oklch(0.869 0.005 56.366)"),
    input: raw("oklch(0.709 0.01 56.259)"),
    ring: raw("oklch(0.666 0.179 58.318)")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("oklch(0.97 0 0)"),
    card: raw("oklch(0.205 0 0)"),
    cardForeground: raw("oklch(0.97 0.001 106.424)"),
    popover: raw("oklch(0.205 0 0)"),
    popoverForeground: raw("oklch(0.97 0.001 106.424)"),
    primary: raw("oklch(0.666 0.179 58.318)"),
    primaryForeground: raw("oklch(0.97 0.001 106.424)"),
    secondary: raw("oklch(0.268 0.007 34.298)"),
    secondaryForeground: raw("oklch(0.97 0.001 106.424)"),
    muted: raw("oklch(0.216 0.006 56.043)"),
    mutedForeground: raw("oklch(0.709 0.01 56.259)"),
    accent: raw("oklch(0.374 0.01 67.558)"),
    accentForeground: raw("oklch(0.97 0.001 106.424)"),
    destructive: raw("oklch(0.505 0.213 27.518)"),
    destructiveForeground: raw("oklch(0.97 0.001 106.424)"),
    border: raw("oklch(0.374 0.01 67.558)"),
    input: raw("oklch(0.268 0.007 34.298)"),
    ring: raw("oklch(0.473 0.137 46.201)")
  },
  fonts: {
    body: "Geist Mono, monospace",
    heading: "Geist Mono, monospace"
  },
  radius: "0rem"
});

// src/themes/community/community-claude-cmlm0b.ts
var communityClaudeCmlm0bTheme = defineTheme({
  name: "community-claude-cmlm0b",
  label: "Claude",
  _sourceName: "claude",
  category: "Community",
  light: {
    background: raw("#faf9f5"),
    foreground: raw("#3d3929"),
    card: raw("#faf9f5"),
    cardForeground: raw("#141413"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#28261b"),
    primary: raw("#c96442"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e9e6dc"),
    secondaryForeground: raw("#535146"),
    muted: raw("#ede9de"),
    mutedForeground: raw("#83827d"),
    accent: raw("#e9e6dc"),
    accentForeground: raw("#28261b"),
    destructive: raw("#141413"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#dad9d4"),
    input: raw("#b4b2a7"),
    ring: raw("#c96442")
  },
  dark: {
    background: raw("#262624"),
    foreground: raw("#c3c0b6"),
    card: raw("#262624"),
    cardForeground: raw("#faf9f5"),
    popover: raw("#30302e"),
    popoverForeground: raw("#e5e5e2"),
    primary: raw("#d97757"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#faf9f5"),
    secondaryForeground: raw("#30302e"),
    muted: raw("#1b1b19"),
    mutedForeground: raw("#b7b5a9"),
    accent: raw("#1a1915"),
    accentForeground: raw("#f5f4ee"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#3e3e38"),
    input: raw("#52514a"),
    ring: raw("#d97757")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-vescrow-1-2-cmlhpn.ts
var communityVescrow12CmlhpnTheme = defineTheme({
  name: "community-vescrow-1-2-cmlhpn",
  label: "Vescrow 1.2",
  _sourceName: "Vescrow 1.2",
  category: "Community",
  light: {
    background: raw("#FDFCFE"),
    foreground: raw("#0A050D"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#0A050D"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#0A050D"),
    primary: raw("#03035e"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#e2ebfd"),
    secondaryForeground: raw("#0248d4"),
    muted: raw("#F0EEF2"),
    mutedForeground: raw("#635D69"),
    accent: raw("#e5e8ff"),
    accentForeground: raw("#0248d4"),
    destructive: raw("#E11D48"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#E6E1E9"),
    input: raw("#E6E1E9"),
    ring: raw("#3d7eff")
  },
  dark: {
    background: raw("#020409"),
    foreground: raw("#FDFCFE"),
    card: raw("#060a13"),
    cardForeground: raw("#FDFCFE"),
    popover: raw("#060913"),
    popoverForeground: raw("#FDFCFE"),
    primary: raw("#0f2ea9"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#11172c"),
    secondaryForeground: raw("#FDFCFE"),
    muted: raw("#0c1022"),
    mutedForeground: raw("#9999a8"),
    accent: raw("#1a1f42"),
    accentForeground: raw("#FDFCFE"),
    destructive: raw("#811D33"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#1b1a42"),
    input: raw("#1a2142"),
    ring: raw("#232686")
  },
  fonts: {
    body: "Bricolage Grotesque, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "1.25rem"
});

// src/themes/community/community-playable-cmli0k.ts
var communityPlayableCmli0kTheme = defineTheme({
  name: "community-playable-cmli0k",
  label: "Playable",
  _sourceName: "playable",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#262626"),
    card: raw("#ffffff"),
    cardForeground: raw("#262626"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#262626"),
    primary: raw("#f59e0b"),
    primaryForeground: raw("#000000"),
    secondary: raw("#f3f4f6"),
    secondaryForeground: raw("#4b5563"),
    muted: raw("#f9fafb"),
    mutedForeground: raw("#6b7280"),
    accent: raw("#fffbeb"),
    accentForeground: raw("#92400e"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e7eb"),
    input: raw("#e5e7eb"),
    ring: raw("#f59e0b")
  },
  dark: {
    background: raw("#171717"),
    foreground: raw("#e5e5e5"),
    card: raw("#262626"),
    cardForeground: raw("#e5e5e5"),
    popover: raw("#262626"),
    popoverForeground: raw("#e5e5e5"),
    primary: raw("oklch(0.837 0.128 66.29)"),
    primaryForeground: raw("#000000"),
    secondary: raw("#262626"),
    secondaryForeground: raw("#e5e5e5"),
    muted: raw("#262626"),
    mutedForeground: raw("#a3a3a3"),
    accent: raw("#6a452f"),
    accentForeground: raw("#fde68a"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#404040"),
    input: raw("#404040"),
    ring: raw("#f59e0b")
  },
  fonts: {
    body: "Space Grotesk, serif",
    heading: "Source Serif 4, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-jamaica-cmlh1c.ts
var communityJamaicaCmlh1cTheme = defineTheme({
  name: "community-jamaica-cmlh1c",
  label: "Jamaica",
  _sourceName: "Jamaica",
  category: "Community",
  light: {
    background: raw("hsl(45, 30%, 98%)"),
    foreground: raw("hsl(150, 60%, 5%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(150, 60%, 5%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(150, 60%, 5%)"),
    primary: raw("hsl(142, 76%, 36%)"),
    primaryForeground: raw("hsl(45, 30%, 98%)"),
    secondary: raw("hsl(48, 96%, 53%)"),
    secondaryForeground: raw("hsl(150, 60%, 5%)"),
    muted: raw("hsl(45, 20%, 94%)"),
    mutedForeground: raw("hsl(150, 10%, 40%)"),
    accent: raw("hsl(142, 70%, 92%)"),
    accentForeground: raw("hsl(142, 76%, 30%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(150, 20%, 90%)"),
    input: raw("hsl(150, 20%, 90%)"),
    ring: raw("hsl(142, 76%, 36%)")
  },
  dark: {
    background: raw("hsl(150, 30%, 3%)"),
    foreground: raw("hsl(45, 20%, 95%)"),
    card: raw("hsl(150, 30%, 6%)"),
    cardForeground: raw("hsl(45, 20%, 95%)"),
    popover: raw("hsl(150, 30%, 5%)"),
    popoverForeground: raw("hsl(45, 20%, 95%)"),
    primary: raw("hsl(142, 70%, 50%)"),
    primaryForeground: raw("hsl(150, 30%, 3%)"),
    secondary: raw("hsl(48, 90%, 55%)"),
    secondaryForeground: raw("hsl(150, 30%, 3%)"),
    muted: raw("hsl(150, 20%, 12%)"),
    mutedForeground: raw("hsl(150, 10%, 70%)"),
    accent: raw("hsl(142, 50%, 15%)"),
    accentForeground: raw("hsl(142, 70%, 50%)"),
    destructive: raw("hsl(0, 80%, 50%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(150, 20%, 15%)"),
    input: raw("hsl(150, 20%, 15%)"),
    ring: raw("hsl(142, 70%, 50%)")
  },
  fonts: {
    body: "Outfit, system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1.25rem"
});

// src/themes/community/community-enterprise-mod-2-cmlva5.ts
var communityEnterpriseMod2Cmlva5Theme = defineTheme({
  name: "community-enterprise-mod-2-cmlva5",
  label: "Enterprise Mod 2",
  _sourceName: "Enterprise Mod 2",
  category: "Community",
  light: {
    background: raw("#fdfdff"),
    foreground: raw("#0d0d12"),
    card: raw("#ffffff"),
    cardForeground: raw("#0d0d12"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0d0d12"),
    primary: raw("#0F62FE"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#edebff"),
    secondaryForeground: raw("#483d8b"),
    muted: raw("#f1f1f8"),
    mutedForeground: raw("#62627a"),
    accent: raw("#f0f2ff"),
    accentForeground: raw("#6b46ff"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#f8fafc"),
    border: raw("#e2e2ee"),
    input: raw("#e2e2ee"),
    ring: raw("#0F62FE")
  },
  dark: {
    background: raw("#0a0a0c"),
    foreground: raw("#f8f8fc"),
    card: raw("#121216"),
    cardForeground: raw("#f8f8fc"),
    popover: raw("#121216"),
    popoverForeground: raw("#f8f8fc"),
    primary: raw("#8c71ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1e1b3a"),
    secondaryForeground: raw("#d4ccff"),
    muted: raw("#1a1a24"),
    mutedForeground: raw("#a1a1b5"),
    accent: raw("#252445"),
    accentForeground: raw("#c7b8ff"),
    destructive: raw("#7f1d1d"),
    destructiveForeground: raw("#f8fafc"),
    border: raw("#2a2a35"),
    input: raw("#2a2a35"),
    ring: raw("#8c71ff")
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Merriweather', serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-professional-theme-cmluaj.ts
var communityProfessionalThemeCmluajTheme = defineTheme({
  name: "community-professional-theme-cmluaj",
  label: "Professional Theme",
  _sourceName: "Professional Theme",
  category: "Community",
  light: {
    background: raw("hsl(0, 0%, 100%)"),
    foreground: raw("hsl(222.2, 84%, 4.9%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(222.2, 84%, 4.9%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(222.2, 84%, 4.9%)"),
    primary: raw("hsl(221.2, 83.2%, 53.3%)"),
    primaryForeground: raw("hsl(210, 40%, 98%)"),
    secondary: raw("hsl(210, 40%, 96.1%)"),
    secondaryForeground: raw("hsl(222.2, 47.4%, 11.2%)"),
    muted: raw("hsl(210, 40%, 96.1%)"),
    mutedForeground: raw("hsl(215.4, 16.3%, 46.9%)"),
    accent: raw("hsl(210, 40%, 96.1%)"),
    accentForeground: raw("hsl(222.2, 47.4%, 11.2%)"),
    destructive: raw("hsl(0, 84.2%, 60.2%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(214.3, 31.8%, 91.4%)"),
    input: raw("hsl(214.3, 31.8%, 91.4%)"),
    ring: raw("hsl(221.2, 83.2%, 53.3%)")
  },
  dark: {
    background: raw("hsl(222.2, 84%, 4.9%)"),
    foreground: raw("hsl(210, 40%, 98%)"),
    card: raw("hsl(222.2, 84%, 4.9%)"),
    cardForeground: raw("hsl(210, 40%, 98%)"),
    popover: raw("hsl(222.2, 84%, 4.9%)"),
    popoverForeground: raw("hsl(210, 40%, 98%)"),
    primary: raw("hsl(217.2, 91.2%, 59.8%)"),
    primaryForeground: raw("hsl(222.2, 47.4%, 11.2%)"),
    secondary: raw("hsl(217.2, 32.6%, 17.5%)"),
    secondaryForeground: raw("hsl(210, 40%, 98%)"),
    muted: raw("hsl(217.2, 32.6%, 17.5%)"),
    mutedForeground: raw("hsl(215, 20.2%, 65.1%)"),
    accent: raw("hsl(217.2, 32.6%, 17.5%)"),
    accentForeground: raw("hsl(210, 40%, 98%)"),
    destructive: raw("hsl(0, 62.8%, 30.6%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(217.2, 32.6%, 17.5%)"),
    input: raw("hsl(217.2, 32.6%, 17.5%)"),
    ring: raw("hsl(224.3, 76.3%, 48%)")
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-offworld-cmlpw4.ts
var communityOffworldCmlpw4Theme = defineTheme({
  name: "community-offworld-cmlpw4",
  label: "Offworld",
  _sourceName: "offworld",
  category: "Community",
  light: {
    background: raw("#f5f5f5"),
    foreground: raw("#1a1a1a"),
    card: raw("#ffffff"),
    cardForeground: raw("#1a1a1a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1a1a1a"),
    primary: raw("#1a1a1a"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e0e0e0"),
    secondaryForeground: raw("#1a1a1a"),
    muted: raw("#e0e0e0"),
    mutedForeground: raw("#666666"),
    accent: raw("#e9e9e9"),
    accentForeground: raw("#1a1a1a"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#cccccc"),
    input: raw("#e0e0e0"),
    ring: raw("#1a1a1a")
  },
  dark: {
    background: raw("#10100E"),
    foreground: raw("#FFFFE3"),
    card: raw("#10100E"),
    cardForeground: raw("#FFFFE3"),
    popover: raw("#10100E"),
    popoverForeground: raw("#FFFFE3"),
    primary: raw("#FFFFE3"),
    primaryForeground: raw("#10100E"),
    secondary: raw("#606055"),
    secondaryForeground: raw("#FFFFE3"),
    muted: raw("#10100E"),
    mutedForeground: raw("#8C8C7D"),
    accent: raw("#8C8C7D"),
    accentForeground: raw("#FFFFE3"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#FFFFE3"),
    border: raw("#606055"),
    input: raw("#606055"),
    ring: raw("#FFFFE3")
  },
  fonts: {
    body: "Geist, ui-sans-serif, sans-serif, system-ui",
    heading: "Sorts Mill Goudy, ui-serif, serif"
  },
  radius: "0rem"
});

// src/themes/community/community-terminal-cmll24.ts
var communityTerminalCmll24Theme = defineTheme({
  name: "community-terminal-cmll24",
  label: "Terminal",
  _sourceName: "Terminal",
  category: "Community",
  light: {
    background: raw("#000000"),
    foreground: raw("#00FF41"),
    card: raw("#050505"),
    cardForeground: raw("#00FF41"),
    popover: raw("#000000"),
    popoverForeground: raw("#00FF41"),
    primary: raw("#00FF41"),
    primaryForeground: raw("#000000"),
    secondary: raw("#003B00"),
    secondaryForeground: raw("#00FF41"),
    muted: raw("#001A00"),
    mutedForeground: raw("#008F11"),
    accent: raw("#00FF41"),
    accentForeground: raw("#000000"),
    destructive: raw("#FF0000"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#003B00"),
    input: raw("#000000"),
    ring: raw("#00FF41")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#00FF41"),
    card: raw("#050505"),
    cardForeground: raw("#00FF41"),
    popover: raw("#000000"),
    popoverForeground: raw("#00FF41"),
    primary: raw("#00FF41"),
    primaryForeground: raw("#000000"),
    secondary: raw("#003B00"),
    secondaryForeground: raw("#00FF41"),
    muted: raw("#001A00"),
    mutedForeground: raw("#008F11"),
    accent: raw("#00FF41"),
    accentForeground: raw("#000000"),
    destructive: raw("#FF0000"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#003B00"),
    input: raw("#000000"),
    ring: raw("#00FF41")
  },
  fonts: {
    body: '"VT323", "Courier New", monospace',
    heading: "Georgia, serif"
  },
  radius: "0rem"
});

// src/themes/community/community-autoblog-cmlpf8.ts
var communityAutoblogCmlpf8Theme = defineTheme({
  name: "community-autoblog-cmlpf8",
  label: "Autoblog",
  _sourceName: "autoblog",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#f2470c"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#edf0f4"),
    secondaryForeground: raw("#080808"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#fff0eb"),
    accentForeground: raw("#cb3706"),
    destructive: raw("#e54b4f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#f2470c")
  },
  dark: {
    background: raw("#0a0a0a"),
    foreground: raw("#f0f0f0"),
    card: raw("#121212"),
    cardForeground: raw("#f0f0f0"),
    popover: raw("#19191a"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#f2470c"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#cd3a0a"),
    secondaryForeground: raw("#f0f0f0"),
    muted: raw("#232325"),
    mutedForeground: raw("#969696"),
    accent: raw("#741e02"),
    accentForeground: raw("#fefefe"),
    destructive: raw("#fb6a6a"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#1f1f1f"),
    input: raw("#3b3b3b"),
    ring: raw("#f2470c")
  },
  fonts: {
    body: "Plus Jakarta Sans, sans-serif",
    heading: "Lora, serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-apex-cmlf55.ts
var communityApexCmlf55Theme = defineTheme({
  name: "community-apex-cmlf55",
  label: "APEX",
  _sourceName: "APEX",
  category: "Community",
  light: {
    background: raw("hsl(225.9 100% 99%)"),
    foreground: raw("hsl(225.9 100% 10%)"),
    card: raw("hsl(225.9 40% 98%)"),
    cardForeground: raw("hsl(222.2 47.4% 11.2%)"),
    popover: raw("hsl(225.9 60% 96%)"),
    popoverForeground: raw("hsl(222.2 47.4% 11.2%)"),
    primary: raw("oklch(0.457 0.24 277.023)"),
    primaryForeground: raw("oklch(0.962 0.018 272.314)"),
    secondary: raw("oklch(0.609 0.126 221.723)"),
    secondaryForeground: raw("oklch(0.984 0.019 200.873)"),
    muted: raw("hsl(188.7 44.5% 72%)"),
    mutedForeground: raw("hsl(188.7 44.5% 22%)"),
    accent: raw("oklch(0.87 0.065 274.039)"),
    accentForeground: raw("oklch(0.257 0.09 281.288)"),
    destructive: raw("#bf616a"),
    destructiveForeground: raw("hsl(355.7 100% 98%)"),
    border: raw("oklch(0.869 0.022 252.894)"),
    input: raw("oklch(0.869 0.022 252.894)"),
    ring: raw("oklch(0.869 0.022 252.894)")
  },
  dark: {
    background: raw("oklch(0.141 0.005 285.823)"),
    foreground: raw("oklch(0.962 0.018 272.314)"),
    card: raw("hsl(243.8 47.1% 10%)"),
    cardForeground: raw("oklch(0.962 0.018 272.314)"),
    popover: raw("hsl(243.8 47.1% 10%)"),
    popoverForeground: raw("oklch(0.962 0.018 272.314)"),
    primary: raw("oklch(0.585 0.233 277.117)"),
    primaryForeground: raw("hsl(243.8 47.1% 5%)"),
    secondary: raw("oklch(0.715 0.143 215.221)"),
    secondaryForeground: raw("oklch(0.302 0.056 229.695)"),
    muted: raw("oklch(0.257 0.09 281.288)"),
    mutedForeground: raw("oklch(0.715 0.143 215.221)"),
    accent: raw("oklch(0.257 0.09 281.288)"),
    accentForeground: raw("oklch(0.962 0.018 272.314)"),
    destructive: raw("oklch(0.586 0.253 17.585)"),
    destructiveForeground: raw("oklch(0.969 0.015 12.422)"),
    border: raw("oklch(0.279 0.041 260.031)"),
    input: raw("oklch(0.279 0.041 260.031)"),
    ring: raw("oklch(0.279 0.041 260.031)")
  },
  fonts: {
    body: "Space Grotesk, ui-sans-serif, sans-serif, system-ui",
    heading: "Aleo, ui-serif, serif"
  },
  radius: "0.9rem"
});

// src/themes/community/community-whatsapp-cmmbmn.ts
var communityWhatsappCmmbmnTheme = defineTheme({
  name: "community-whatsapp-cmmbmn",
  label: "Whatsapp",
  _sourceName: "Whatsapp",
  category: "Community",
  light: {
    background: raw("#f0f2f5"),
    foreground: raw("#111b21"),
    card: raw("#ffffff"),
    cardForeground: raw("#111b21"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#111b21"),
    primary: raw("#075e54"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e7f8f0"),
    secondaryForeground: raw("#075e54"),
    muted: raw("#f0f2f5"),
    mutedForeground: raw("#667781"),
    accent: raw("#25d366"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ea4335"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e9edef"),
    input: raw("#e9edef"),
    ring: raw("#25d366")
  },
  dark: {
    background: raw("#0b141a"),
    foreground: raw("#e9edef"),
    card: raw("#1f2c34"),
    cardForeground: raw("#e9edef"),
    popover: raw("#1f2c34"),
    popoverForeground: raw("#e9edef"),
    primary: raw("#00a884"),
    primaryForeground: raw("#111b21"),
    secondary: raw("#12332a"),
    secondaryForeground: raw("#00a884"),
    muted: raw("#182229"),
    mutedForeground: raw("#8696a0"),
    accent: raw("#25d366"),
    accentForeground: raw("#111b21"),
    destructive: raw("#ea4335"),
    destructiveForeground: raw("#e9edef"),
    border: raw("#2a3942"),
    input: raw("#2a3942"),
    ring: raw("#00a884")
  },
  fonts: {
    body: "Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1rem"
});

// src/themes/community/community-logisticone-cmm0zk.ts
var communityLogisticoneCmm0zkTheme = defineTheme({
  name: "community-logisticone-cmm0zk",
  label: "Logisticone",
  _sourceName: "LogisticOne",
  category: "Community",
  light: {
    background: raw("#f3f5fb"),
    foreground: raw("#010101"),
    card: raw("#ffffff"),
    cardForeground: raw("#010101"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#010101"),
    primary: raw("#19398d"),
    primaryForeground: raw("#f3f5f9"),
    secondary: raw("#0a0a0a"),
    secondaryForeground: raw("#f5f7fb"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#454545"),
    accent: raw("#19398d"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#9b0033"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e3e3e3"),
    input: raw("#ffffff"),
    ring: raw("#324f9a")
  },
  dark: {
    background: raw("#050505"),
    foreground: raw("#fafafa"),
    card: raw("#0a0a0a"),
    cardForeground: raw("#fafafa"),
    popover: raw("#171717"),
    popoverForeground: raw("#fafafa"),
    primary: raw("#6a8dd8"),
    primaryForeground: raw("#0a0a0a"),
    secondary: raw("#171717"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#262626"),
    mutedForeground: raw("#a1a1a1"),
    accent: raw("#404040"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#cd6e7b"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#282828"),
    input: raw("#121212"),
    ring: raw("#6a8dd8")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-de-swiss-design-cmlure.ts
var communityDeSwissDesignCmlureTheme = defineTheme({
  name: "community-de-swiss-design-cmlure",
  label: "DE Swiss Design",
  _sourceName: "DE-Swiss-Design",
  category: "Community",
  light: {
    background: raw("hsl(0,0%,100%)"),
    foreground: raw("hsl(0,0%,0%)"),
    card: raw("hsl(0,0%,100%)"),
    cardForeground: raw("hsl(0,0%,0%)"),
    popover: raw("hsl(0,0%,100%)"),
    popoverForeground: raw("hsl(0,0%,0%)"),
    primary: raw("hsl(0, 100%, 43%)"),
    primaryForeground: raw("hsl(0,0%,100%)"),
    secondary: raw("hsl(0,0%,0%)"),
    secondaryForeground: raw("hsl(0,0%,100%)"),
    muted: raw("hsl(0,0%,96%)"),
    mutedForeground: raw("hsl(0,0%,40%)"),
    accent: raw("hsl(45,100%,50%)"),
    accentForeground: raw("hsl(0,0%,0%)"),
    destructive: raw("hsl(0,100%,40%)"),
    destructiveForeground: raw("hsl(0,0%,100%)"),
    border: raw("hsl(0,0%,0%)"),
    input: raw("hsl(0,0%,100%)"),
    ring: raw("hsl(0,100%,45%)")
  },
  dark: {
    background: raw("hsl(0,0%,0%)"),
    foreground: raw("hsl(0,0%,100%)"),
    card: raw("hsl(0,0%,4%)"),
    cardForeground: raw("hsl(0,0%,100%)"),
    popover: raw("hsl(0,0%,4%)"),
    popoverForeground: raw("hsl(0,0%,100%)"),
    primary: raw("hsl(0,100%,50%)"),
    primaryForeground: raw("hsl(0,0%,100%)"),
    secondary: raw("hsl(0,0%,100%)"),
    secondaryForeground: raw("hsl(0,0%,0%)"),
    muted: raw("hsl(0,0%,12%)"),
    mutedForeground: raw("hsl(0,0%,70%)"),
    accent: raw("hsl(45,100%,55%)"),
    accentForeground: raw("hsl(0,0%,0%)"),
    destructive: raw("hsl(0,100%,60%)"),
    destructiveForeground: raw("hsl(0,0%,100%)"),
    border: raw("hsl(0,0%,100%)"),
    input: raw("hsl(0,0%,0%)"),
    ring: raw("hsl(0,100%,50%)")
  },
  fonts: {
    body: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    heading: "'Georgia', serif"
  },
  radius: "0px"
});

// src/themes/community/community-clinids-29-01-cmll4q.ts
var communityClinids2901Cmll4qTheme = defineTheme({
  name: "community-clinids-29-01-cmll4q",
  label: "Clinids (29/01)",
  _sourceName: "CliniDS (29/01)",
  category: "Community",
  light: {
    background: raw("#FAFAf9"),
    foreground: raw("#0c0a09"),
    card: raw("#ffffff"),
    cardForeground: raw("#0c0a09"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0c0a09"),
    primary: raw("#ec6726"),
    primaryForeground: raw("#fafaf9"),
    secondary: raw("fdf0e9"),
    secondaryForeground: raw("#ec6726"),
    muted: raw("#f5f5f4"),
    mutedForeground: raw("#78716c"),
    accent: raw("#f5f5f4"),
    accentForeground: raw("#1c1917"),
    destructive: raw("#d32f2f"),
    destructiveForeground: raw("#fafaf9"),
    border: raw("#e7e5e4"),
    input: raw("#e7e5e4"),
    ring: raw("#ec6726")
  },
  dark: {
    background: raw("#0c0a09"),
    foreground: raw("#fafaf9"),
    card: raw("#1c1917"),
    cardForeground: raw("#fafaf9"),
    popover: raw("#1c1917"),
    popoverForeground: raw("#fafaf9"),
    primary: raw("#ec6726"),
    primaryForeground: raw("#fafaf9"),
    secondary: raw("#292524"),
    secondaryForeground: raw("#fafaf9"),
    muted: raw("#292524"),
    mutedForeground: raw("#a8a29e"),
    accent: raw("#292524"),
    accentForeground: raw("#fafaf9"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#fafaf9"),
    border: raw("#292524"),
    input: raw("#292524"),
    ring: raw("#ec6726")
  },
  fonts: {
    body: "Roboto, ui-sans-serif, sans-serif, system-ui",
    heading: "serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-bain-design-system-cmm5y6.ts
var communityBainDesignSystemCmm5y6Theme = defineTheme({
  name: "community-bain-design-system-cmm5y6",
  label: "Bain Design System",
  _sourceName: "Bain Design System",
  category: "Community",
  light: {
    background: raw("#f6f5f4"),
    foreground: raw("#161614"),
    card: raw("#fff"),
    cardForeground: raw("#161614"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#161614"),
    primary: raw("#d10001"),
    primaryForeground: raw("#f6f5f4"),
    secondary: raw("#434340"),
    secondaryForeground: raw("#f6f5f4"),
    muted: raw("#f4f1ef"),
    mutedForeground: raw("#a8a5a1"),
    accent: raw("#f4f1ef"),
    accentForeground: raw("#2b2b27"),
    destructive: raw("#ffd5c0"),
    destructiveForeground: raw("#eb001f"),
    border: raw("#e9e5e0"),
    input: raw("#c9c6c1"),
    ring: raw("#776beb")
  },
  dark: {
    background: raw("#1D1D1D"),
    foreground: raw("#FFFFFF"),
    card: raw("#1D1D1D"),
    cardForeground: raw("#FFFFFF"),
    popover: raw("#1D1D1D"),
    popoverForeground: raw("#FFFFFF"),
    primary: raw("#FF4B32"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#808080"),
    secondaryForeground: raw("#FFFFFF"),
    muted: raw("#333333"),
    mutedForeground: raw("#808080"),
    accent: raw("#404040"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#D00000"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#333333"),
    input: raw("#1D1D1D"),
    ring: raw("#FF4B32")
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0rem"
});

// src/themes/community/community-eslinks-cmmaoe.ts
var communityEslinksCmmaoeTheme = defineTheme({
  name: "community-eslinks-cmmaoe",
  label: "Eslinks",
  _sourceName: "ESLinks",
  category: "Community",
  light: {
    background: raw("oklch(0.9842 0.0034 247.86)"),
    foreground: raw("oklch(0.2795 0.0368 260.03)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.2795 0.0368 260.03)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.145 0 0)"),
    primary: raw("oklch(0.546 0.245 262.881)"),
    primaryForeground: raw("oklch(1 0 0)"),
    secondary: raw("oklch(0.696 0.17 162.48)"),
    secondaryForeground: raw("oklch(1 0 0)"),
    muted: raw("oklch(0.9288 0.0126 255.51)"),
    mutedForeground: raw("oklch(0.4455 0.0374 257.28)"),
    accent: raw("oklch(0.7148 0.1257 215.22)"),
    accentForeground: raw("oklch(1 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.869 0.0198 252.89)"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.7107 0.0351 256.79)")
  },
  dark: {
    background: raw("#11161f"),
    foreground: raw("#f4f9ff"),
    card: raw("#1a2029"),
    cardForeground: raw("#f4f9ff"),
    popover: raw("#1a2029"),
    popoverForeground: raw("#f4f9ff"),
    primary: raw("#409cff"),
    primaryForeground: raw("#11161f"),
    secondary: raw("#00c47f"),
    secondaryForeground: raw("#11161f"),
    muted: raw("#232933"),
    mutedForeground: raw("#95a0ab"),
    accent: raw("#00ced9"),
    accentForeground: raw("#11161f"),
    destructive: raw("#cc272e"),
    destructiveForeground: raw("#f4f9ff"),
    border: raw("oklch(0.275 0 0)"),
    input: raw("oklch(0.325 0 0)"),
    ring: raw("oklch(0.556 0 0)")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.625rem"
});

// src/themes/community/community-teal-hue-cmm599.ts
var communityTealHueCmm599Theme = defineTheme({
  name: "community-teal-hue-cmm599",
  label: "Teal Hue",
  _sourceName: "Teal Hue",
  category: "Community",
  light: {
    background: raw("hsl(170, 40%, 98%)"),
    foreground: raw("hsl(180, 40%, 15%)"),
    card: raw("hsl(170, 40%, 100%)"),
    cardForeground: raw("hsl(180, 40%, 15%)"),
    popover: raw("hsl(170, 40%, 100%)"),
    popoverForeground: raw("hsl(180, 40%, 15%)"),
    primary: raw("hsl(171, 100%, 35%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(185, 80%, 94%)"),
    secondaryForeground: raw("hsl(185, 90%, 25%)"),
    muted: raw("hsl(170, 20%, 94%)"),
    mutedForeground: raw("hsl(180, 15%, 45%)"),
    accent: raw("hsl(190, 100%, 94%)"),
    accentForeground: raw("hsl(190, 100%, 25%)"),
    destructive: raw("hsl(340, 90%, 60%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(171, 30%, 88%)"),
    input: raw("hsl(171, 30%, 88%)"),
    ring: raw("hsl(171, 100%, 35%)")
  },
  dark: {
    background: raw("hsl(180, 50%, 4%)"),
    foreground: raw("hsl(170, 20%, 96%)"),
    card: raw("hsl(180, 45%, 7%)"),
    cardForeground: raw("hsl(170, 20%, 96%)"),
    popover: raw("hsl(180, 45%, 7%)"),
    popoverForeground: raw("hsl(170, 20%, 96%)"),
    primary: raw("hsl(171, 90%, 50%)"),
    primaryForeground: raw("hsl(180, 50%, 5%)"),
    secondary: raw("hsl(185, 40%, 15%)"),
    secondaryForeground: raw("hsl(185, 90%, 90%)"),
    muted: raw("hsl(180, 30%, 12%)"),
    mutedForeground: raw("hsl(170, 10%, 70%)"),
    accent: raw("hsl(190, 50%, 15%)"),
    accentForeground: raw("hsl(190, 90%, 90%)"),
    destructive: raw("hsl(340, 80%, 45%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(180, 30%, 18%)"),
    input: raw("hsl(180, 30%, 18%)"),
    ring: raw("hsl(171, 90%, 50%)")
  },
  fonts: {
    body: "Plus Jakarta Sans, Quicksand, system-ui, sans-serif",
    heading: "Chillax, Playfair Display, serif"
  },
  radius: "1rem"
});

// src/themes/community/community-lara-cmm277.ts
var communityLaraCmm277Theme = defineTheme({
  name: "community-lara-cmm277",
  label: "Lara",
  _sourceName: "Lara",
  category: "Community",
  light: {
    background: raw("oklch(0.985 0 0)"),
    foreground: raw("oklch(0.145 0 0)"),
    card: raw("oklch(99.5% 0 0)"),
    cardForeground: raw("oklch(0.145 0 0)"),
    popover: raw("oklch(99.5% 0 0)"),
    popoverForeground: raw("oklch(0.145 0 0)"),
    primary: raw("oklch(0.637 0.237 25.331)"),
    primaryForeground: raw("oklch(0.985 0 0)"),
    secondary: raw("oklch(0.97 0 0)"),
    secondaryForeground: raw("oklch(0.269 0 0)"),
    muted: raw("oklch(0.968 0.007 247.896)"),
    mutedForeground: raw("oklch(0.554 0.046 257.417)"),
    accent: raw("oklch(0.637 0.237 25.331)"),
    accentForeground: raw("oklch(0.985 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("oklch(0.929 0.013 255.508)"),
    input: raw("oklch(0.929 0.013 255.508)"),
    ring: raw("oklch(0.637 0.237 25.331)")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("oklch(0.985 0 0)"),
    card: raw("oklch(0.21 0.006 285.885)"),
    cardForeground: raw("oklch(0.985 0 0)"),
    popover: raw("oklch(0.269 0 0)"),
    popoverForeground: raw("oklch(0.985 0 0)"),
    primary: raw("oklch(0.637 0.237 25.331)"),
    primaryForeground: raw("oklch(0.985 0 0)"),
    secondary: raw("oklch(0.269 0 0)"),
    secondaryForeground: raw("oklch(0.985 0 0)"),
    muted: raw("oklch(0.274 0.006 286.033)"),
    mutedForeground: raw("oklch(0.923 0.003 48.717)"),
    accent: raw("oklch(0.637 0.237 25.331)"),
    accentForeground: raw("oklch(0.985 0 0)"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("oklch(0.371 0 0)"),
    input: raw("oklch(0.371 0 0)"),
    ring: raw("oklch(0.637 0.237 25.331)")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "Noto Serif Georgian, ui-serif, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-rose-pine-cmlwpk.ts
var communityRosePineCmlwpkTheme = defineTheme({
  name: "community-rose-pine-cmlwpk",
  label: "Rose Pine",
  _sourceName: "Rose Pine",
  category: "Community",
  light: {
    background: raw("#faf4ed"),
    foreground: raw("#575279"),
    card: raw("#fffaf3"),
    cardForeground: raw("#575279"),
    popover: raw("#f2e9e1"),
    popoverForeground: raw("#575279"),
    primary: raw("#575279"),
    primaryForeground: raw("#faf4ed"),
    secondary: raw("#dfdad9"),
    secondaryForeground: raw("#575279"),
    muted: raw("#f4ede8"),
    mutedForeground: raw("#797593"),
    accent: raw("#f2e9e1"),
    accentForeground: raw("#575279"),
    destructive: raw("#b4637a"),
    destructiveForeground: raw("#faf4ed"),
    border: raw("#cecacd"),
    input: raw("#dfdad9"),
    ring: raw("#907aa9")
  },
  dark: {
    background: raw("#191724"),
    foreground: raw("#e0def4"),
    card: raw("#1f1d2e"),
    cardForeground: raw("#e0def4"),
    popover: raw("#26233a"),
    popoverForeground: raw("#e0def4"),
    primary: raw("#e0def4"),
    primaryForeground: raw("#191724"),
    secondary: raw("#403d52"),
    secondaryForeground: raw("#e0def4"),
    muted: raw("#21202e"),
    mutedForeground: raw("#908caa"),
    accent: raw("#26233a"),
    accentForeground: raw("#e0def4"),
    destructive: raw("#eb6f92"),
    destructiveForeground: raw("#191724"),
    border: raw("#403d52"),
    input: raw("#524f67"),
    ring: raw("#c4a7e7")
  },
  fonts: {
    body: "Geist, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-terminal-muted-cmlvaz.ts
var communityTerminalMutedCmlvazTheme = defineTheme({
  name: "community-terminal-muted-cmlvaz",
  label: "Terminal Muted",
  _sourceName: "terminal-muted",
  category: "Community",
  light: {
    background: raw("hsl(142, 15%, 95%)"),
    foreground: raw("hsl(142, 20%, 15%)"),
    card: raw("hsl(142, 15%, 92%)"),
    cardForeground: raw("hsl(142, 20%, 10%)"),
    popover: raw("hsl(142, 15%, 92%)"),
    popoverForeground: raw("hsl(142, 20%, 10%)"),
    primary: raw("hsl(142, 40%, 35%)"),
    primaryForeground: raw("hsl(142, 10%, 98%)"),
    secondary: raw("hsl(28, 40%, 45%)"),
    secondaryForeground: raw("hsl(28, 10%, 98%)"),
    muted: raw("hsl(142, 10%, 88%)"),
    mutedForeground: raw("hsl(142, 15%, 35%)"),
    accent: raw("hsl(142, 10%, 85%)"),
    accentForeground: raw("hsl(142, 20%, 15%)"),
    destructive: raw("hsl(0, 40%, 45%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(142, 10%, 80%)"),
    input: raw("hsl(142, 10%, 90%)"),
    ring: raw("hsl(142, 40%, 35%)")
  },
  dark: {
    background: raw("hsl(142, 15%, 4%)"),
    foreground: raw("hsl(142, 35%, 75%)"),
    card: raw("hsl(142, 15%, 6%)"),
    cardForeground: raw("hsl(142, 35%, 85%)"),
    popover: raw("hsl(142, 15%, 6%)"),
    popoverForeground: raw("hsl(142, 35%, 85%)"),
    primary: raw("hsl(142, 40%, 45%)"),
    primaryForeground: raw("hsl(142, 15%, 5%)"),
    secondary: raw("hsl(28, 50%, 45%)"),
    secondaryForeground: raw("hsl(28, 15%, 5%)"),
    muted: raw("hsl(142, 10%, 12%)"),
    mutedForeground: raw("hsl(142, 20%, 55%)"),
    accent: raw("hsl(142, 10%, 15%)"),
    accentForeground: raw("hsl(142, 35%, 85%)"),
    destructive: raw("hsl(0, 50%, 45%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(142, 15%, 15%)"),
    input: raw("hsl(142, 15%, 10%)"),
    ring: raw("hsl(142, 40%, 45%)")
  },
  fonts: {
    body: "ui-monospace, 'JetBrains Mono', 'Fira Code', 'Menlo', monospace",
    heading: "Georgia, serif"
  },
  radius: "0rem"
});

// src/themes/community/community-js-ts-advent-of-code-cmlr31.ts
var communityJsTsAdventOfCodeCmlr31Theme = defineTheme({
  name: "community-js-ts-advent-of-code-cmlr31",
  label: "Js/ts Advent Of Code",
  _sourceName: "JS/TS Advent of Code",
  category: "Community",
  light: {
    background: raw("#F7F7F7"),
    foreground: raw("#333333"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#333333"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#333333"),
    primary: raw("#F7DC6F"),
    primaryForeground: raw("#333333"),
    secondary: raw("#3178C6"),
    secondaryForeground: raw("#FFFFFF"),
    muted: raw("#AAAAAA"),
    mutedForeground: raw("#333333"),
    accent: raw("#F7DC6F"),
    accentForeground: raw("#333333"),
    destructive: raw("#FF3737"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#CCCCCC"),
    input: raw("#FFFFFF"),
    ring: raw("#F7DC6F")
  },
  dark: {
    background: raw("#333333"),
    foreground: raw("#FFFFFF"),
    card: raw("#444444"),
    cardForeground: raw("#FFFFFF"),
    popover: raw("#444444"),
    popoverForeground: raw("#FFFFFF"),
    primary: raw("#F2C464"),
    primaryForeground: raw("#333333"),
    secondary: raw("#6688CC"),
    secondaryForeground: raw("#FFFFFF"),
    muted: raw("#666666"),
    mutedForeground: raw("#FFFFFF"),
    accent: raw("#F2C464"),
    accentForeground: raw("#333333"),
    destructive: raw("#CC3737"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#555555"),
    input: raw("#444444"),
    ring: raw("#F2C464")
  },
  fonts: {
    body: "Geist Mono, monospace",
    heading: "Geist Mono, monospace"
  },
  radius: "0px"
});

// src/themes/community/community-resolveai-app-cmmchq.ts
var communityResolveaiAppCmmchqTheme = defineTheme({
  name: "community-resolveai-app-cmmchq",
  label: "Resolveai App",
  _sourceName: "ResolveAI App",
  category: "Community",
  light: {
    background: raw("#e8ebed"),
    foreground: raw("#333333"),
    card: raw("#ffffff"),
    cardForeground: raw("#333333"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#333333"),
    primary: raw("#1c2f40"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f3f4f6"),
    secondaryForeground: raw("#a68446"),
    muted: raw("#f9fafb"),
    mutedForeground: raw("#6b7280"),
    accent: raw("#d6e4f0"),
    accentForeground: raw("#1e3a8a"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d9d9d9"),
    input: raw("#f4f5f7"),
    ring: raw("#a68446")
  },
  dark: {
    background: raw("#1c2433"),
    foreground: raw("#e5e5e5"),
    card: raw("#2a3040"),
    cardForeground: raw("#e5e5e5"),
    popover: raw("#262b38"),
    popoverForeground: raw("#e5e5e5"),
    primary: raw("#a68446"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#d9d9d9"),
    secondaryForeground: raw("#4b5563"),
    muted: raw("#2a303e"),
    mutedForeground: raw("#a3a3a3"),
    accent: raw("#2a3656"),
    accentForeground: raw("#a68446"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#3d4354"),
    input: raw("#3d4354"),
    ring: raw("#d9b36c")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Source Serif 4, serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-shopify-red-cmmaba.ts
var communityShopifyRedCmmabaTheme = defineTheme({
  name: "community-shopify-red-cmmaba",
  label: "Shopify Red",
  _sourceName: "Shopify Red",
  category: "Community",
  light: {
    background: raw("hsl(0, 0%, 100%)"),
    foreground: raw("hsl(210, 10%, 15%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(210, 10%, 15%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(210, 10%, 15%)"),
    primary: raw("hsl(356, 84%, 48%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(210, 10%, 96%)"),
    secondaryForeground: raw("hsl(210, 10%, 20%)"),
    muted: raw("hsl(210, 10%, 97%)"),
    mutedForeground: raw("hsl(210, 10%, 40%)"),
    accent: raw("hsl(356, 84%, 96%)"),
    accentForeground: raw("hsl(356, 84%, 30%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(210, 10%, 90%)"),
    input: raw("hsl(210, 10%, 90%)"),
    ring: raw("hsl(356, 84%, 48%)")
  },
  dark: {
    background: raw("hsl(210, 10%, 4%)"),
    foreground: raw("hsl(0, 0%, 98%)"),
    card: raw("hsl(210, 10%, 7%)"),
    cardForeground: raw("hsl(0, 0%, 98%)"),
    popover: raw("hsl(210, 10%, 7%)"),
    popoverForeground: raw("hsl(0, 0%, 98%)"),
    primary: raw("hsl(356, 84%, 48%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(210, 10%, 15%)"),
    secondaryForeground: raw("hsl(0, 0%, 98%)"),
    muted: raw("hsl(210, 10%, 12%)"),
    mutedForeground: raw("hsl(210, 10%, 65%)"),
    accent: raw("hsl(356, 84%, 15%)"),
    accentForeground: raw("hsl(356, 84%, 80%)"),
    destructive: raw("hsl(0, 62%, 30%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(210, 10%, 16%)"),
    input: raw("hsl(210, 10%, 16%)"),
    ring: raw("hsl(356, 84%, 48%)")
  },
  fonts: {
    body: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-celestial-cmm720.ts
var communityCelestialCmm720Theme = defineTheme({
  name: "community-celestial-cmm720",
  label: "Celestial",
  _sourceName: "Celestial",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#000000"),
    card: raw("#f7f8f8"),
    cardForeground: raw("#202020"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#323232"),
    primary: raw("#58D3DB"),
    primaryForeground: raw("#000000"),
    secondary: raw("#202020"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#f1f5f9"),
    mutedForeground: raw("#323232"),
    accent: raw("#E3ECF6"),
    accentForeground: raw("#323232"),
    destructive: raw("#f4212e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e1eaef"),
    input: raw("#f7f9fa"),
    ring: raw("#58D3DB")
  },
  dark: {
    background: raw("#121212"),
    foreground: raw("#e7e9ea"),
    card: raw("#17181c"),
    cardForeground: raw("#e7e9ea"),
    popover: raw("#121212"),
    popoverForeground: raw("#e7e9ea"),
    primary: raw("#58D3DB"),
    primaryForeground: raw("#000000"),
    secondary: raw("#e7e9ea"),
    secondaryForeground: raw("#202020"),
    muted: raw("#1a1d1e"),
    mutedForeground: raw("#8b98a5"),
    accent: raw("#12383b"),
    accentForeground: raw("#e7e9ea"),
    destructive: raw("#f4212e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#2f3336"),
    input: raw("#16181c"),
    ring: raw("#58D3DB")
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-twitter-cmlznl.ts
var communityTwitterCmlznlTheme = defineTheme({
  name: "community-twitter-cmlznl",
  label: "Twitter",
  _sourceName: "Twitter",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0f1419"),
    card: raw("#f7f8f8"),
    cardForeground: raw("#0f1419"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0f1419"),
    primary: raw("#1e9df1"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#0f1419"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#E5E5E6"),
    mutedForeground: raw("#0f1419"),
    accent: raw("#E3ECF6"),
    accentForeground: raw("#1e9df1"),
    destructive: raw("#f4212e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e1eaef"),
    input: raw("#f7f9fa"),
    ring: raw("#1da1f2")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#e7e9ea"),
    card: raw("#17181c"),
    cardForeground: raw("#d9d9d9"),
    popover: raw("#000000"),
    popoverForeground: raw("#e7e9ea"),
    primary: raw("#1c9cf0"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f0f3f4"),
    secondaryForeground: raw("#0f1419"),
    muted: raw("#181818"),
    mutedForeground: raw("#72767a"),
    accent: raw("#061622"),
    accentForeground: raw("#1c9cf0"),
    destructive: raw("#f4212e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#242628"),
    input: raw("#22303c"),
    ring: raw("#1da1f2")
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1.3rem"
});

// src/themes/community/community-brownie-cmlr31.ts
var communityBrownieCmlr31Theme = defineTheme({
  name: "community-brownie-cmlr31",
  label: "Brownie",
  _sourceName: "Brownie",
  category: "Community",
  light: {
    background: raw("#F7F5E9"),
    foreground: raw("#503E33"),
    card: raw("#F7F5E9"),
    cardForeground: raw("#503E33"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#503E33"),
    primary: raw("#A95C64"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#C3A697"),
    secondaryForeground: raw("#FFFFFF"),
    muted: raw("#E9C9BE"),
    mutedForeground: raw("#946F5C"),
    accent: raw("#E9C9BE"),
    accentForeground: raw("#503E33"),
    destructive: raw("#1F1C18"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#946F5C"),
    input: raw("#946F5C"),
    ring: raw("#A95C64")
  },
  dark: {
    background: raw("#2B2421"),
    foreground: raw("#F7F5E9"),
    card: raw("#3C332E"),
    cardForeground: raw("#F7F5E9"),
    popover: raw("#3C332E"),
    popoverForeground: raw("#F7F5E9"),
    primary: raw("#C9A188"),
    primaryForeground: raw("#2B2421"),
    secondary: raw("#946F5C"),
    secondaryForeground: raw("#F7F5E9"),
    muted: raw("#503E33"),
    mutedForeground: raw("#C5AA9B"),
    accent: raw("#C3A697"),
    accentForeground: raw("#2B2421"),
    destructive: raw("#E57373"),
    destructiveForeground: raw("#2B2421"),
    border: raw("#503E33"),
    input: raw("#503E33"),
    ring: raw("#C9A188")
  },
  fonts: {
    body: "DM Sans, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0px"
});

// src/themes/community/community-party-rock-cmlqxf.ts
var communityPartyRockCmlqxfTheme = defineTheme({
  name: "community-party-rock-cmlqxf",
  label: "Party Rock",
  _sourceName: "Party Rock ",
  category: "Community",
  light: {
    background: raw("#F2F1E6"),
    foreground: raw("#000000"),
    card: raw("#F2F1E6"),
    cardForeground: raw("#000000"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#000000"),
    primary: raw("#A855F7"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#C084FC"),
    secondaryForeground: raw("#000000"),
    muted: raw("#E8E7DB"),
    mutedForeground: raw("#666666"),
    accent: raw("#A855F7"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#FF4D4D"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#000000"),
    input: raw("#FFFFFF"),
    ring: raw("#A855F7")
  },
  dark: {
    background: raw("#121212"),
    foreground: raw("#F2F1E6"),
    card: raw("#1F1F1F"),
    cardForeground: raw("#F2F1E6"),
    popover: raw("#1F1F1F"),
    popoverForeground: raw("#F2F1E6"),
    primary: raw("#A855F7"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#2A2A2A"),
    secondaryForeground: raw("#F2F1E6"),
    muted: raw("#2A2A2A"),
    mutedForeground: raw("#A0A0A0"),
    accent: raw("#A855F7"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#800000"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#333333"),
    input: raw("#1F1F1F"),
    ring: raw("#A855F7")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "2rem"
});

// src/themes/community/community-india-cmlpfe.ts
var communityIndiaCmlpfeTheme = defineTheme({
  name: "community-india-cmlpfe",
  label: "India",
  _sourceName: "india",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#1a1a1a"),
    card: raw("#fafafa"),
    cardForeground: raw("#1f1f1f"),
    popover: raw("#fdfdfc"),
    popoverForeground: raw("#1f1f1f"),
    primary: raw("#fa7d00"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f5f5f5"),
    secondaryForeground: raw("#262626"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#595959"),
    accent: raw("#fef3e7"),
    accentForeground: raw("#b35900"),
    destructive: raw("#e7000b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e5e5"),
    input: raw("#dcd9d0"),
    ring: raw("#fa7d00")
  },
  dark: {
    background: raw("#0a0a0a"),
    foreground: raw("#ebebeb"),
    card: raw("#050505"),
    cardForeground: raw("#ebebeb"),
    popover: raw("#1a1a1a"),
    popoverForeground: raw("#ebebeb"),
    primary: raw("#ff9933"),
    primaryForeground: raw("#2e1700"),
    secondary: raw("#262626"),
    secondaryForeground: raw("#ebebeb"),
    muted: raw("#262626"),
    mutedForeground: raw("#999999"),
    accent: raw("#331f0a"),
    accentForeground: raw("#fa7d00"),
    destructive: raw("#ff2e2e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#212121"),
    input: raw("#383838"),
    ring: raw("#fa7d00")
  },
  fonts: {
    body: "Plus Jakarta Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "Bricolage Grotesque, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0rem"
});

// src/themes/community/community-cwh-learning-cmlpfa.ts
var communityCwhLearningCmlpfaTheme = defineTheme({
  name: "community-cwh-learning-cmlpfa",
  label: "Cwh Learning",
  _sourceName: "cwh-learning",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#ad46ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1b1d1e"),
    secondaryForeground: raw("#edf0f4"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#fbdae7"),
    accentForeground: raw("#ad46ff"),
    destructive: raw("#e54b4f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#000000")
  },
  dark: {
    background: raw("#060606"),
    foreground: raw("#f0f0f0"),
    card: raw("#121212"),
    cardForeground: raw("#f0f0f0"),
    popover: raw("#222327"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#ad46ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1b1d1e"),
    secondaryForeground: raw("#f0f0f0"),
    muted: raw("#2a2c33"),
    mutedForeground: raw("#a0a0a0"),
    accent: raw("#1e293b"),
    accentForeground: raw("#ad46ff"),
    destructive: raw("#f87171"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#2a2b2c"),
    input: raw("#33353a"),
    ring: raw("#ad46ff")
  },
  fonts: {
    body: "var(--font-montserrat), Montserrat, sans-serif",
    heading: "Lora, serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-terminal-cmlmsn.ts
var communityTerminalCmlmsnTheme = defineTheme({
  name: "community-terminal-cmlmsn",
  label: "Terminal",
  _sourceName: "Terminal",
  category: "Community",
  light: {
    background: raw("#fafafa"),
    foreground: raw("#0a0a0a"),
    card: raw("#f5f5f5"),
    cardForeground: raw("#0a0a0a"),
    popover: raw("#fafafa"),
    popoverForeground: raw("#0a0a0a"),
    primary: raw("#ff6900"),
    primaryForeground: raw("#000000"),
    secondary: raw("#e5e5e5"),
    secondaryForeground: raw("#0a0a0a"),
    muted: raw("#ebebeb"),
    mutedForeground: raw("#555555"),
    accent: raw("#ff8b38"),
    accentForeground: raw("#000000"),
    destructive: raw("#ff0000"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#cecece"),
    input: raw("#cecece"),
    ring: raw("#ff6900")
  },
  dark: {
    background: raw("#121212"),
    foreground: raw("#f2f2f2"),
    card: raw("#1a1a1a"),
    cardForeground: raw("#f2f2f2"),
    popover: raw("#121212"),
    popoverForeground: raw("#f2f2f2"),
    primary: raw("#ff6900"),
    primaryForeground: raw("#000000"),
    secondary: raw("#333333"),
    secondaryForeground: raw("#f2f2f2"),
    muted: raw("#262626"),
    mutedForeground: raw("#a6a6a6"),
    accent: raw("#ff8b38"),
    accentForeground: raw("#000000"),
    destructive: raw("#ff0000"),
    destructiveForeground: raw("#f2f2f2"),
    border: raw("#404040"),
    input: raw("#404040"),
    ring: raw("#ff6900")
  },
  fonts: {
    body: "IBM Plex Mono, ui-monospace, monospace",
    heading: "IBM Plex Mono, ui-monospace, monospace"
  },
  radius: "0rem"
});

// src/themes/community/community-purple-rain-cmlh1l.ts
var communityPurpleRainCmlh1lTheme = defineTheme({
  name: "community-purple-rain-cmlh1l",
  label: "Purple Rain",
  _sourceName: "Purple Rain",
  category: "Community",
  light: {
    background: raw("hsl(0, 0%, 98%)"),
    foreground: raw("hsl(220, 40%, 15%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(220, 40%, 15%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(220, 40%, 15%)"),
    primary: raw("hsl(262, 83%, 58%)"),
    primaryForeground: raw("hsl(210, 20%, 98%)"),
    secondary: raw("hsl(210, 40%, 96.1%)"),
    secondaryForeground: raw("hsl(222.2, 47.4%, 11.2%)"),
    muted: raw("hsl(210, 40%, 96.1%)"),
    mutedForeground: raw("hsl(215.4, 16.3%, 46.9%)"),
    accent: raw("hsl(262, 80%, 96%)"),
    accentForeground: raw("hsl(262, 83%, 58%)"),
    destructive: raw("hsl(0, 84.2%, 60.2%)"),
    destructiveForeground: raw("hsl(210, 20%, 98%)"),
    border: raw("hsl(214.3, 31.8%, 91.4%)"),
    input: raw("hsl(214.3, 31.8%, 91.4%)"),
    ring: raw("hsl(262, 83%, 58%)")
  },
  dark: {
    background: raw("hsl(222, 47%, 4%)"),
    foreground: raw("hsl(210, 40%, 98%)"),
    card: raw("hsl(222, 47%, 6%)"),
    cardForeground: raw("hsl(210, 40%, 98%)"),
    popover: raw("hsl(222, 47%, 6%)"),
    popoverForeground: raw("hsl(210, 40%, 98%)"),
    primary: raw("hsl(263, 70%, 50%)"),
    primaryForeground: raw("hsl(210, 40%, 98%)"),
    secondary: raw("hsl(217.2, 32.6%, 17.5%)"),
    secondaryForeground: raw("hsl(210, 40%, 98%)"),
    muted: raw("hsl(217.2, 32.6%, 17.5%)"),
    mutedForeground: raw("hsl(215, 20.2%, 65.1%)"),
    accent: raw("hsl(263, 50%, 15%)"),
    accentForeground: raw("hsl(263, 70%, 50%)"),
    destructive: raw("hsl(0, 62.8%, 30.6%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(217.2, 32.6%, 17.5%)"),
    input: raw("hsl(217.2, 32.6%, 17.5%)"),
    ring: raw("hsl(263, 70%, 50%)")
  },
  fonts: {
    body: "Inter, -apple-system, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-meta-mask-geist-cmlf9r.ts
var communityMetaMaskGeistCmlf9rTheme = defineTheme({
  name: "community-meta-mask-geist-cmlf9r",
  label: "Meta Mask Geist",
  _sourceName: "Meta Mask Geist",
  category: "Community",
  light: {
    background: raw("#FFFBF8"),
    foreground: raw("#1C1917"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#1C1917"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#1C1917"),
    primary: raw("#3C1765"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#F66A35"),
    secondaryForeground: raw("#000000"),
    muted: raw("#F5F5F4"),
    mutedForeground: raw("#78716C"),
    accent: raw("#F5F3FF"),
    accentForeground: raw("#3C1765"),
    destructive: raw("#EF4444"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#E7E5E4"),
    input: raw("#F5EDE8"),
    ring: raw("#3C1765")
  },
  dark: {
    background: raw("#1A1026"),
    foreground: raw("#F8F8F7"),
    card: raw("#251836"),
    cardForeground: raw("#F8F8F7"),
    popover: raw("#251836"),
    popoverForeground: raw("#F8F8F7"),
    primary: raw("#8B5CF6"),
    primaryForeground: raw("#1A1026"),
    secondary: raw("#FB713C"),
    secondaryForeground: raw("#1A1026"),
    muted: raw("#20142E"),
    mutedForeground: raw("#A8A29E"),
    accent: raw("#4A3763"),
    accentForeground: raw("#F8F8F7"),
    destructive: raw("#DC2626"),
    destructiveForeground: raw("#F8F8F7"),
    border: raw("#3A2A4F"),
    input: raw("#3A2A4F"),
    ring: raw("#8B5CF6")
  },
  fonts: {
    body: "Geist, ui-sans-serif, sans-serif, system-ui",
    heading: "serif"
  },
  radius: "1.0rem"
});

// src/themes/community/community-burgundy-cmle93.ts
var communityBurgundyCmle93Theme = defineTheme({
  name: "community-burgundy-cmle93",
  label: "Burgundy",
  _sourceName: "Burgundy",
  category: "Community",
  light: {
    background: raw("#fdf8f9"),
    foreground: raw("#3d0a0d"),
    card: raw("#ffffff"),
    cardForeground: raw("#3d0a0d"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#3d0a0d"),
    primary: raw("#800020"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f4e7ea"),
    secondaryForeground: raw("#800020"),
    muted: raw("#f4e7ea"),
    mutedForeground: raw("#7c5c5f"),
    accent: raw("#9a1b32"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#be123c"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5d1d4"),
    input: raw("#e5d1d4"),
    ring: raw("#800020")
  },
  dark: {
    background: raw("#0f0203"),
    foreground: raw("#fceef0"),
    card: raw("#1a0507"),
    cardForeground: raw("#fceef0"),
    popover: raw("#1a0507"),
    popoverForeground: raw("#fceef0"),
    primary: raw("#e63946"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#3d0a0d"),
    secondaryForeground: raw("#ffdce0"),
    muted: raw("#2a0a0d"),
    mutedForeground: raw("#d4a1a6"),
    accent: raw("#cd182a"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ff4d6d"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#2b0d10"),
    input: raw("#4a151b"),
    ring: raw("#ff2e44")
  },
  fonts: {
    body: "'Inter', 'Lora', sans-serif",
    heading: "'Lora', serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-claude-blu-2-cmmead.ts
var communityClaudeBlu2CmmeadTheme = defineTheme({
  name: "community-claude-blu-2-cmmead",
  label: "Claude Blu 2",
  _sourceName: "claude blu 2",
  category: "Community",
  light: {
    background: raw("#f1f1f1"),
    foreground: raw("#29323d"),
    card: raw("#f5f8fa"),
    cardForeground: raw("#131814"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1b2328"),
    primary: raw("#4288c9"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#dce3e9"),
    secondaryForeground: raw("#464e53"),
    muted: raw("#dee6ed"),
    mutedForeground: raw("#7d8283"),
    accent: raw("#dce3e9"),
    accentForeground: raw("#1b2328"),
    destructive: raw("#131514"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d4dadb"),
    input: raw("#a7adb4"),
    ring: raw("#4288c9")
  },
  dark: {
    background: raw("#111111"),
    foreground: raw("#b6bbc3"),
    card: raw("#242526"),
    cardForeground: raw("#f5f7fa"),
    popover: raw("#2e2f30"),
    popoverForeground: raw("#e2e4e5"),
    primary: raw("#5795d9"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f5f8fa"),
    secondaryForeground: raw("#2e2f30"),
    muted: raw("#191a1b"),
    mutedForeground: raw("#a9b1b7"),
    accent: raw("#15171a"),
    accentForeground: raw("#eef2f5"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#383b3e"),
    input: raw("#4a4e52"),
    ring: raw("#5795d9")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-violate-eye-cmm3eb.ts
var communityViolateEyeCmm3ebTheme = defineTheme({
  name: "community-violate-eye-cmm3eb",
  label: "Violate Eye",
  _sourceName: "Violate eye",
  category: "Community",
  light: {
    background: raw("#fbfbff"),
    foreground: raw("#1a1b25"),
    card: raw("#fbfbff"),
    cardForeground: raw("#1a1b25"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1a1b25"),
    primary: raw("#846feb"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f0effd"),
    secondaryForeground: raw("#3b3464"),
    muted: raw("#f1f1f8"),
    mutedForeground: raw("#63637e"),
    accent: raw("#f0effd"),
    accentForeground: raw("#4b36cc"),
    destructive: raw("#eb4f4f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e2e2f2"),
    input: raw("#d0d0eb"),
    ring: raw("#846feb")
  },
  dark: {
    background: raw("#0b0a12"),
    foreground: raw("#e6e6f2"),
    card: raw("#0b0a12"),
    cardForeground: raw("#e6e6f2"),
    popover: raw("#14131f"),
    popoverForeground: raw("#e6e6f2"),
    primary: raw("#846feb"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1d1b30"),
    secondaryForeground: raw("#e6e6f2"),
    muted: raw("#161524"),
    mutedForeground: raw("#9898b8"),
    accent: raw("#252244"),
    accentForeground: raw("#b5a9f2"),
    destructive: raw("#811d1d"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#222135"),
    input: raw("#2c2a47"),
    ring: raw("#846feb")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Merriweather, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-openprofile-cmlpf8.ts
var communityOpenprofileCmlpf8Theme = defineTheme({
  name: "community-openprofile-cmlpf8",
  label: "Openprofile",
  _sourceName: "openprofile",
  category: "Community",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("#1a1a1a"),
    card: raw("#fdfdfc"),
    cardForeground: raw("#1f1f1f"),
    popover: raw("#fdfdfc"),
    popoverForeground: raw("#1f1f1f"),
    primary: raw("#f3bc16"),
    primaryForeground: raw("#383838"),
    secondary: raw("oklch(0.97 0 0)"),
    secondaryForeground: raw("#262626"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("#595959"),
    accent: raw("oklch(0.97 0 0)"),
    accentForeground: raw("#886807"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("#ffffff"),
    border: raw("oklch(0.922 0 0)"),
    input: raw("#dcd9d0"),
    ring: raw("#f3bc16")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("#ebebeb"),
    card: raw("#141414"),
    cardForeground: raw("#ebebeb"),
    popover: raw("#1a1a1a"),
    popoverForeground: raw("#ebebeb"),
    primary: raw("#f3bc16"),
    primaryForeground: raw("#000000"),
    secondary: raw("oklch(0.269 0 0)"),
    secondaryForeground: raw("#ebebeb"),
    muted: raw("oklch(0.269 0 0)"),
    mutedForeground: raw("#999999"),
    accent: raw("#ffeebd"),
    accentForeground: raw("#141414"),
    destructive: raw("#ff2e2e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#212121"),
    input: raw("#383838"),
    ring: raw("#f3bc16")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "1.4rem"
});

// src/themes/community/community-examdedo-cmlpf1.ts
var communityExamdedoCmlpf1Theme = defineTheme({
  name: "community-examdedo-cmlpf1",
  label: "Examdedo",
  _sourceName: "examdedo",
  category: "Community",
  light: {
    background: raw("#f9f7f1"),
    foreground: raw("#4e3f31"),
    card: raw("#fffcf5"),
    cardForeground: raw("#4e3f31"),
    popover: raw("#fffcf5"),
    popoverForeground: raw("#4e3f31"),
    primary: raw("#b77c41"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e8dabd"),
    secondaryForeground: raw("#624d39"),
    muted: raw("#f0e6d4"),
    mutedForeground: raw("#856c4e"),
    accent: raw("#dccca2"),
    accentForeground: raw("#4e3f31"),
    destructive: raw("#cf391b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e2d2b3"),
    input: raw("#e2d2b3"),
    ring: raw("#b77c41")
  },
  dark: {
    background: raw("#1c1c17"),
    foreground: raw("#f0e6d4"),
    card: raw("#0f0f0f"),
    cardForeground: raw("#f0e6d4"),
    popover: raw("#3d3229"),
    popoverForeground: raw("#f0e6d4"),
    primary: raw("#cda073"),
    primaryForeground: raw("#2f261f"),
    secondary: raw("#4d3f36"),
    secondaryForeground: raw("#f0e6d4"),
    muted: raw("#332b24"),
    mutedForeground: raw("#cabda7"),
    accent: raw("#5e4839"),
    accentForeground: raw("#f0e6d4"),
    destructive: raw("#cf391b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#4d3f36"),
    input: raw("#4d3f36"),
    ring: raw("#cda073")
  },
  fonts: {
    body: "Manrope, ui-sans-serif, sans-serif, system-ui",
    heading: "Bricolage Grotesque, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0.25rem"
});

// src/themes/community/community-s3karo-cmlpf0.ts
var communityS3karoCmlpf0Theme = defineTheme({
  name: "community-s3karo-cmlpf0",
  label: "S3karo",
  _sourceName: "s3karo",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0a0a0a"),
    card: raw("#ffffff"),
    cardForeground: raw("#0a0a0a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0a0a0a"),
    primary: raw("#ff6b6e"),
    primaryForeground: raw("#fafafa"),
    secondary: raw("#f5f5f5"),
    secondaryForeground: raw("#171717"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#737373"),
    accent: raw("#f5f5f5"),
    accentForeground: raw("#171717"),
    destructive: raw("#ff3434"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#e5e5e5"),
    input: raw("#e5e5e5"),
    ring: raw("#0a0a0a")
  },
  dark: {
    background: raw("#0a0a0a"),
    foreground: raw("#fafafa"),
    card: raw("#0a0a0a"),
    cardForeground: raw("#fafafa"),
    popover: raw("#0a0a0a"),
    popoverForeground: raw("#fafafa"),
    primary: raw("#ff6b6e"),
    primaryForeground: raw("#171717"),
    secondary: raw("#262626"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#262626"),
    mutedForeground: raw("#a3a3a3"),
    accent: raw("#262626"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#930909"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#262626"),
    input: raw("#262626"),
    ring: raw("#d4d4d4")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-nubanck-cmlf40.ts
var communityNubanckCmlf40Theme = defineTheme({
  name: "community-nubanck-cmlf40",
  label: "Nubanck",
  _sourceName: "nubanck",
  category: "Community",
  light: {
    background: raw("hsl(270, 20%, 98%)"),
    foreground: raw("hsl(270, 40%, 10%)"),
    card: raw("hsl(270, 20%, 96%)"),
    cardForeground: raw("hsl(270, 40%, 10%)"),
    popover: raw("hsl(270, 20%, 98%)"),
    popoverForeground: raw("hsl(270, 40%, 10%)"),
    primary: raw("hsl(270, 60%, 50%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(270, 20%, 90%)"),
    secondaryForeground: raw("hsl(270, 40%, 20%)"),
    muted: raw("hsl(270, 15%, 92%)"),
    mutedForeground: raw("hsl(270, 10%, 40%)"),
    accent: raw("hsl(270, 30%, 92%)"),
    accentForeground: raw("hsl(270, 60%, 40%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(270, 15%, 85%)"),
    input: raw("hsl(270, 15%, 85%)"),
    ring: raw("hsl(270, 60%, 50%)")
  },
  dark: {
    background: raw("hsl(270, 50%, 4%)"),
    foreground: raw("hsl(270, 20%, 98%)"),
    card: raw("hsl(270, 45%, 7%)"),
    cardForeground: raw("hsl(270, 20%, 98%)"),
    popover: raw("hsl(270, 50%, 5%)"),
    popoverForeground: raw("hsl(270, 20%, 98%)"),
    primary: raw("hsl(270, 70%, 60%)"),
    primaryForeground: raw("hsl(270, 20%, 5%)"),
    secondary: raw("hsl(270, 30%, 15%)"),
    secondaryForeground: raw("hsl(270, 20%, 90%)"),
    muted: raw("hsl(270, 30%, 12%)"),
    mutedForeground: raw("hsl(270, 10%, 65%)"),
    accent: raw("hsl(270, 40%, 18%)"),
    accentForeground: raw("hsl(270, 20%, 98%)"),
    destructive: raw("hsl(0, 70%, 40%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(270, 30%, 18%)"),
    input: raw("hsl(270, 30%, 18%)"),
    ring: raw("hsl(270, 70%, 60%)")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-kupikod-cmleua.ts
var communityKupikodCmleuaTheme = defineTheme({
  name: "community-kupikod-cmleua",
  label: "Kupikod",
  _sourceName: "Kupikod",
  category: "Community",
  light: {
    background: raw("#FFFFFF"),
    foreground: raw("#1a1d1f"),
    card: raw("#ffffff"),
    cardForeground: raw("#1a1d1f"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#1a1d1f"),
    primary: raw("#00FF93"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#f6fcff"),
    secondaryForeground: raw("#1a3a4f"),
    muted: raw("#fcfcfc"),
    mutedForeground: raw("#67696a"),
    accent: raw("#6ecbf5"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#f44cbc"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#eff1f1"),
    input: raw("#eff1f1"),
    ring: raw("#4eadeb")
  },
  dark: {
    background: raw("#14151B"),
    foreground: raw("#ffffff"),
    card: raw("#26272D"),
    cardForeground: raw("#ffffff"),
    popover: raw("#1B1C22"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#00FF93"),
    primaryForeground: raw("#000000"),
    secondary: raw("#26272D"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#1B1C22"),
    mutedForeground: raw("#9fa4a7"),
    accent: raw("#26272D"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#FF3E60"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#3A3F46"),
    input: raw("#3A3F46"),
    ring: raw("#5b6067")
  },
  fonts: {
    body: "Geologica, ui-sans-serif, sans-serif, system-ui",
    heading: "Geologica, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0.75rem"
});

// src/themes/community/community-alpine-cmlecl.ts
var communityAlpineCmleclTheme = defineTheme({
  name: "community-alpine-cmlecl",
  label: "Alpine",
  _sourceName: "Alpine",
  category: "Community",
  light: {
    background: raw("#fcf5f7"),
    foreground: raw("#0a1931"),
    card: raw("#ffffff"),
    cardForeground: raw("#0a1931"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0a1931"),
    primary: raw("#0047ab"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ff4d6d"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#e5eaf5"),
    mutedForeground: raw("#4a5568"),
    accent: raw("#ffb3c1"),
    accentForeground: raw("#0a1931"),
    destructive: raw("#e11d48"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#cbd5e1"),
    input: raw("#ffffff"),
    ring: raw("#0047ab")
  },
  dark: {
    background: raw("#00050d"),
    foreground: raw("#ffffff"),
    card: raw("#001026"),
    cardForeground: raw("#ffffff"),
    popover: raw("#00050d"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#4dabff"),
    primaryForeground: raw("#00050d"),
    secondary: raw("#ff4d6d"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#001a40"),
    mutedForeground: raw("#cbd5e1"),
    accent: raw("#d02f4d"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ff3333"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#021c45"),
    input: raw("#001a40"),
    ring: raw("#4dabff")
  },
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Playfair Display', serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-lime-green-dhamaka-cmm7ct.ts
var communityLimeGreenDhamakaCmm7ctTheme = defineTheme({
  name: "community-lime-green-dhamaka-cmm7ct",
  label: "Lime Green Dhamaka",
  _sourceName: "Lime green dhamaka",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#17171c"),
    card: raw("oklch(0.967 0.003 264.542)"),
    cardForeground: raw("#17171c"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#17171c"),
    primary: raw("#d9e96e"),
    primaryForeground: raw("#17171c"),
    secondary: raw("#e4e4e7"),
    secondaryForeground: raw("#18181b"),
    muted: raw("#f4f4f5"),
    mutedForeground: raw("#71717a"),
    accent: raw("#fafafa"),
    accentForeground: raw("#18181b"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#e4e4e7"),
    input: raw("#fafafa"),
    ring: raw("#18181b")
  },
  dark: {
    background: raw("#0d0d0d"),
    foreground: raw("#f4f4f5"),
    card: raw("#161616"),
    cardForeground: raw("#fafafa"),
    popover: raw("#0d0d0d"),
    popoverForeground: raw("#fafafa"),
    primary: raw("#d9e96e"),
    primaryForeground: raw("#17171c"),
    secondary: raw("#303030"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#1a1a1a"),
    mutedForeground: raw("#a1a1aa"),
    accent: raw("#222121"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#7f1d1d"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#27272a"),
    input: raw("#222121"),
    ring: raw("#d9e96e")
  },
  fonts: {
    body: "Chakra Petch, ui-sans-serif, sans-serif, system-ui",
    heading: "'Georgia', serif"
  },
  radius: "0.2rem"
});

// src/themes/community/community-stella-cmm2mf.ts
var communityStellaCmm2mfTheme = defineTheme({
  name: "community-stella-cmm2mf",
  label: "Stella",
  _sourceName: "Stella",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#000000"),
    card: raw("#ffffff"),
    cardForeground: raw("#000000"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#000000"),
    primary: raw("hsl(35, 100%, 71%)"),
    primaryForeground: raw("#000000"),
    secondary: raw("hsl(35, 100%, 90%)"),
    secondaryForeground: raw("#000000"),
    muted: raw("hsl(35, 40%, 94%)"),
    mutedForeground: raw("hsl(35, 20%, 40%)"),
    accent: raw("hsl(35, 100%, 85%)"),
    accentForeground: raw("#000000"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(35, 40%, 85%)"),
    input: raw("hsl(35, 40%, 85%)"),
    ring: raw("hsl(35, 100%, 71%)")
  },
  dark: {
    background: raw("hsl(35, 40%, 5%)"),
    foreground: raw("hsl(35, 100%, 95%)"),
    card: raw("hsl(35, 40%, 8%)"),
    cardForeground: raw("hsl(35, 100%, 95%)"),
    popover: raw("hsl(35, 40%, 6%)"),
    popoverForeground: raw("hsl(35, 100%, 95%)"),
    primary: raw("hsl(35, 100%, 71%)"),
    primaryForeground: raw("hsl(35, 100%, 5%)"),
    secondary: raw("hsl(35, 40%, 15%)"),
    secondaryForeground: raw("hsl(35, 100%, 85%)"),
    muted: raw("hsl(35, 30%, 15%)"),
    mutedForeground: raw("hsl(35, 20%, 65%)"),
    accent: raw("hsl(35, 60%, 20%)"),
    accentForeground: raw("hsl(35, 100%, 85%)"),
    destructive: raw("hsl(0, 62%, 30%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(35, 30%, 20%)"),
    input: raw("hsl(35, 30%, 20%)"),
    ring: raw("hsl(35, 100%, 71%)")
  },
  fonts: {
    body: "Montserrat, ui-sans-serif, sans-serif, system-ui",
    heading: "Cormorant Garamond, ui-serif, serif"
  },
  radius: "0.85rem"
});

// src/themes/community/community-styrenedark-cmly9d.ts
var communityStyrenedarkCmly9dTheme = defineTheme({
  name: "community-styrenedark-cmly9d",
  label: "Styrenedark",
  _sourceName: "StyreneDark",
  category: "Community",
  light: {
    background: raw("#f8fafc"),
    foreground: raw("#233039"),
    card: raw("#ffffff"),
    cardForeground: raw("#253639"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#253839"),
    primary: raw("#567159"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e5e7eb"),
    secondaryForeground: raw("#394f48"),
    muted: raw("#f3f4f6"),
    mutedForeground: raw("#28312b"),
    accent: raw("#d1edd1"),
    accentForeground: raw("#3c4e4f"),
    destructive: raw("#d3300e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d1d5db"),
    input: raw("#dae8d9"),
    ring: raw("#78b27f")
  },
  dark: {
    background: raw("#16171d"),
    foreground: raw("#cbf4ed"),
    card: raw("#202b30"),
    cardForeground: raw("#cbf4ed"),
    popover: raw("#161a1d"),
    popoverForeground: raw("#00f0d3"),
    primary: raw("#00f0d3"),
    primaryForeground: raw("#0b2821"),
    secondary: raw("#304345"),
    secondaryForeground: raw("#d1d5db"),
    muted: raw("#1f2b30"),
    mutedForeground: raw("#9ca3af"),
    accent: raw("#374151"),
    accentForeground: raw("#d1d5db"),
    destructive: raw("#e98100"),
    destructiveForeground: raw("#1d2725"),
    border: raw("#4a6767"),
    input: raw("#375656"),
    ring: raw("#00f0d3")
  },
  fonts: {
    body: "Tomorrow, ui-sans-serif, sans-serif, system-ui",
    heading: "BioRhyme, ui-serif, serif"
  },
  radius: "0.15rem"
});

// src/themes/community/community-emerald-cmli3u.ts
var communityEmeraldCmli3uTheme = defineTheme({
  name: "community-emerald-cmli3u",
  label: "Emerald",
  _sourceName: "Emerald",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#103c1f"),
    card: raw("#ffffff"),
    cardForeground: raw("#103c1f"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#103c1f"),
    primary: raw("#30bd2e"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#66f06f"),
    secondaryForeground: raw("#0f8000"),
    muted: raw("#f2f2f2"),
    mutedForeground: raw("#778d7e"),
    accent: raw("#dbffde"),
    accentForeground: raw("#103c1f"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("#f0f0f0"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.708 0 0)")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#cdffb8"),
    card: raw("#050b05"),
    cardForeground: raw("#1c9b25"),
    popover: raw("#092202"),
    popoverForeground: raw("#f7f7f7"),
    primary: raw("#77c940"),
    primaryForeground: raw("#14410b"),
    secondary: raw("#1e5809"),
    secondaryForeground: raw("#77c940"),
    muted: raw("#091f00"),
    mutedForeground: raw("#c0e8ab"),
    accent: raw("#1f3c0b"),
    accentForeground: raw("#ffffff"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("#081802"),
    input: raw("#193d05"),
    ring: raw("#2d6e11")
  },
  fonts: {
    body: "Geist, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "1.875rem"
});

// src/themes/community/community-diby-cmlhru.ts
var communityDibyCmlhruTheme = defineTheme({
  name: "community-diby-cmlhru",
  label: "Diby",
  _sourceName: "Diby",
  category: "Community",
  light: {
    background: raw("#FFFFFF"),
    foreground: raw("#1A1A1A"),
    card: raw("#ffffff"),
    cardForeground: raw("#1A1A1A"),
    popover: raw("#F5F5F7"),
    popoverForeground: raw("#1A1A1A"),
    primary: raw("#0073FF"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#ffffff"),
    secondaryForeground: raw("#1A1A1A"),
    muted: raw("#E5E5EA"),
    mutedForeground: raw("#6B6B6B"),
    accent: raw("#0073FF"),
    accentForeground: raw("#1A1A1A"),
    destructive: raw("#E74C3C"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#ededed"),
    input: raw("#ededed"),
    ring: raw("#3f73ff")
  },
  dark: {
    background: raw("#0D0D0F"),
    foreground: raw("#FFFFFF"),
    card: raw("#1A1A1A"),
    cardForeground: raw("#FFFFFF"),
    popover: raw("#1A1A1A"),
    popoverForeground: raw("#FFFFFF"),
    primary: raw("#0073FF"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#1A1A1A"),
    secondaryForeground: raw("#FFFFFF"),
    muted: raw("#2C2C2E"),
    mutedForeground: raw("#98989D"),
    accent: raw("#0073FF"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#FF453A"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#38383A"),
    input: raw("#38383A"),
    ring: raw("#0073FF")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "0.85rem"
});

// src/themes/community/community-altar-v1-cmmadl.ts
var communityAltarV1CmmadlTheme = defineTheme({
  name: "community-altar-v1-cmmadl",
  label: "ALTAR V1",
  _sourceName: "ALTAR V1",
  category: "Community",
  light: {
    background: raw("#FAFAFA"),
    foreground: raw("#0D0D0D"),
    card: raw("#EDEDED"),
    cardForeground: raw("#0D0D0D"),
    popover: raw("#EDEDED"),
    popoverForeground: raw("#0D0D0D"),
    primary: raw("#e78a53"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#5f8787"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#EDEDED"),
    mutedForeground: raw("#555555"),
    accent: raw("#DADADA"),
    accentForeground: raw("#000000"),
    destructive: raw("#e21313"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#EDEDED"),
    input: raw("#BABABA"),
    ring: raw("#5f8787")
  },
  dark: {
    background: raw("#0D0D0D"),
    foreground: raw("#D0D0D0"),
    card: raw("#121212"),
    cardForeground: raw("#D0D0D0"),
    popover: raw("#333333"),
    popoverForeground: raw("#D0D0D0"),
    primary: raw("#e78a53"),
    primaryForeground: raw("#0D0D0D"),
    secondary: raw("#5f8787"),
    secondaryForeground: raw("#0D0D0D"),
    muted: raw("#222222"),
    mutedForeground: raw("#888888"),
    accent: raw("#333333"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#e21313"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#121212"),
    input: raw("#555555"),
    ring: raw("#5f8787")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "IBM Plex Serif, ui-serif, serif"
  },
  radius: "0.325rem"
});

// src/themes/community/community-caser-cmm6p0.ts
var communityCaserCmm6p0Theme = defineTheme({
  name: "community-caser-cmm6p0",
  label: "Caser",
  _sourceName: "Caser",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0f172a"),
    card: raw("#ffffff"),
    cardForeground: raw("#0f172a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0f172a"),
    primary: raw("#1e293b"),
    primaryForeground: raw("#f8fafc"),
    secondary: raw("#f1f5f9"),
    secondaryForeground: raw("#0f172a"),
    muted: raw("#f1f5f9"),
    mutedForeground: raw("#64748b"),
    accent: raw("#f1f5f9"),
    accentForeground: raw("#0f172a"),
    destructive: raw("#e11d48"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e2e8f0"),
    input: raw("#e2e8f0"),
    ring: raw("#94a3b8")
  },
  dark: {
    background: raw("#020617"),
    foreground: raw("#f8fafc"),
    card: raw("#0f172a"),
    cardForeground: raw("#f8fafc"),
    popover: raw("#0f172a"),
    popoverForeground: raw("#f8fafc"),
    primary: raw("#f8fafc"),
    primaryForeground: raw("#0f172a"),
    secondary: raw("#1e293b"),
    secondaryForeground: raw("#f8fafc"),
    muted: raw("#1e293b"),
    mutedForeground: raw("#94a3b8"),
    accent: raw("#1e293b"),
    accentForeground: raw("#f8fafc"),
    destructive: raw("#7f1d1d"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#1e293b"),
    input: raw("#1e293b"),
    ring: raw("#334155")
  },
  fonts: {
    body: "Geist, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-manga-vibe-cmlr32.ts
var communityMangaVibeCmlr32Theme = defineTheme({
  name: "community-manga-vibe-cmlr32",
  label: "Manga Vibe",
  _sourceName: "Manga Vibe",
  category: "Community",
  light: {
    background: raw("#F7F7F7"),
    foreground: raw("#000000"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#000000"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#000000"),
    primary: raw("#000000"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#808080"),
    secondaryForeground: raw("#FFFFFF"),
    muted: raw("#C0C0C0"),
    mutedForeground: raw("#000000"),
    accent: raw("#000000"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#000000"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#000000"),
    input: raw("#FFFFFF"),
    ring: raw("#808080")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#F7F7F7"),
    card: raw("#1A1A1A"),
    cardForeground: raw("#F7F7F7"),
    popover: raw("#1A1A1A"),
    popoverForeground: raw("#F7F7F7"),
    primary: raw("#F7F7F7"),
    primaryForeground: raw("#000000"),
    secondary: raw("#404040"),
    secondaryForeground: raw("#F7F7F7"),
    muted: raw("#404040"),
    mutedForeground: raw("#F7F7F7"),
    accent: raw("#F7F7F7"),
    accentForeground: raw("#000000"),
    destructive: raw("#F7F7F7"),
    destructiveForeground: raw("#000000"),
    border: raw("#F7F7F7"),
    input: raw("#1A1A1A"),
    ring: raw("#404040")
  },
  fonts: {
    body: "Architects Daughter",
    heading: "Architects Daughter"
  },
  radius: "0px"
});

// src/themes/community/community-theme-cmlpl5-cmlpl5.ts
var communityThemeCmlpl5Cmlpl5Theme = defineTheme({
  name: "community-theme-cmlpl5-cmlpl5",
  label: "Theme Cmlpl5",
  _sourceName: "\u4E16\u754C\u4E4B\u5916",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0a0a0b"),
    card: raw("#f8fafc"),
    cardForeground: raw("#0a0a0b"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0a0a0b"),
    primary: raw("#ff4d4d"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#2dd4bf"),
    secondaryForeground: raw("#0f172a"),
    muted: raw("#f1f5f9"),
    mutedForeground: raw("#64748b"),
    accent: raw("#f1f5f9"),
    accentForeground: raw("#0f172a"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#f8fafc"),
    border: raw("#e2e8f0"),
    input: raw("#e2e8f0"),
    ring: raw("#ff4d4d")
  },
  dark: {
    background: raw("#030303"),
    foreground: raw("#f8fafc"),
    card: raw("#09090b"),
    cardForeground: raw("#f8fafc"),
    popover: raw("#030303"),
    popoverForeground: raw("#f8fafc"),
    primary: raw("#ff4d4d"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#2dd4bf"),
    secondaryForeground: raw("#030303"),
    muted: raw("#18181b"),
    mutedForeground: raw("#a1a1aa"),
    accent: raw("#18181b"),
    accentForeground: raw("#f8fafc"),
    destructive: raw("#991b1b"),
    destructiveForeground: raw("#f8fafc"),
    border: raw("#27272a"),
    input: raw("#27272a"),
    ring: raw("#ff4d4d")
  },
  fonts: {
    body: "Alegreya Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-poppy-1-cmlmc0.ts
var communityPoppy1Cmlmc0Theme = defineTheme({
  name: "community-poppy-1-cmlmc0",
  label: "Poppy 1",
  _sourceName: "poppy-1",
  category: "Community",
  light: {
    background: raw("#f7f9f3"),
    foreground: raw("#000000"),
    card: raw("#ffffff"),
    cardForeground: raw("#000000"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#000000"),
    primary: raw("#4f46e5"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#14b8a6"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#f0f0f0"),
    mutedForeground: raw("#333333"),
    accent: raw("#f59e0b"),
    accentForeground: raw("#000000"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#000000"),
    input: raw("#737373"),
    ring: raw("#a5b4fc")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#ffffff"),
    card: raw("#1a212b"),
    cardForeground: raw("#ffffff"),
    popover: raw("#1a212b"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#818cf8"),
    primaryForeground: raw("#000000"),
    secondary: raw("#2dd4bf"),
    secondaryForeground: raw("#000000"),
    muted: raw("#333333"),
    mutedForeground: raw("#cccccc"),
    accent: raw("#fcd34d"),
    accentForeground: raw("#000000"),
    destructive: raw("#f87171"),
    destructiveForeground: raw("#000000"),
    border: raw("#545454"),
    input: raw("#ffffff"),
    ring: raw("#818cf8")
  },
  fonts: {
    body: "Plus Jakarta Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "DM Sans, sans-serif"
  },
  radius: "1rem"
});

// src/themes/community/community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1.ts
var communityBlueYellowWarnUglyAfInLightModeCmljx1Theme = defineTheme({
  name: "community-blue-yellow-warn-ugly-af-in-light-mode-cmljx1",
  label: "Blue Yellow. Warn: Ugly Af In Light Mode",
  _sourceName: "Blue Yellow. warn: ugly af in light mode",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0a0a0a"),
    card: raw("#ffffff"),
    cardForeground: raw("#0a0a0a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0a0a0a"),
    primary: raw("#fdc700"),
    primaryForeground: raw("#fefce8"),
    secondary: raw("#00bcff"),
    secondaryForeground: raw("#f0f9ff"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#737373"),
    accent: raw("#f5f5f5"),
    accentForeground: raw("#171717"),
    destructive: raw("#e7000b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e5e5"),
    input: raw("#e5e5e5"),
    ring: raw("#a1a1a1")
  },
  dark: {
    background: raw("#0a0a0a"),
    foreground: raw("#fafafa"),
    card: raw("#171717"),
    cardForeground: raw("#fafafa"),
    popover: raw("#262626"),
    popoverForeground: raw("#fafafa"),
    primary: raw("#ffdf20"),
    primaryForeground: raw("#432004"),
    secondary: raw("#74d4ff"),
    secondaryForeground: raw("#052f4a"),
    muted: raw("#262626"),
    mutedForeground: raw("#a1a1a1"),
    accent: raw("#404040"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#ff6467"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#282828"),
    input: raw("#343434"),
    ring: raw("#737373")
  },
  fonts: {
    body: "Poppins, ui-sans-serif, sans-serif, system-ui",
    heading: "Playfair Display, ui-serif, serif"
  },
  radius: "0.625rem"
});

// src/themes/community/community-diby-orange-cmlhrv.ts
var communityDibyOrangeCmlhrvTheme = defineTheme({
  name: "community-diby-orange-cmlhrv",
  label: "Diby Orange",
  _sourceName: "Diby Orange",
  category: "Community",
  light: {
    background: raw("#FFFFFF"),
    foreground: raw("#1A1A1A"),
    card: raw("#ffffff"),
    cardForeground: raw("#1A1A1A"),
    popover: raw("#F5F5F7"),
    popoverForeground: raw("#1A1A1A"),
    primary: raw("#FF6B35"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#ffffff"),
    secondaryForeground: raw("#1A1A1A"),
    muted: raw("#E5E5EA"),
    mutedForeground: raw("#6B6B6B"),
    accent: raw("#FF6B35"),
    accentForeground: raw("#1A1A1A"),
    destructive: raw("#E74C3C"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#ededed"),
    input: raw("#ededed"),
    ring: raw("#3f73ff")
  },
  dark: {
    background: raw("#0D0D0F"),
    foreground: raw("#FFFFFF"),
    card: raw("#1A1A1A"),
    cardForeground: raw("#FFFFFF"),
    popover: raw("#1A1A1A"),
    popoverForeground: raw("#FFFFFF"),
    primary: raw("#FF6B35"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#1A1A1A"),
    secondaryForeground: raw("#FFFFFF"),
    muted: raw("#2C2C2E"),
    mutedForeground: raw("#98989D"),
    accent: raw("#FF6B35"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#FF453A"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#38383A"),
    input: raw("#38383A"),
    ring: raw("#0073FF")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "0.85rem"
});

// src/themes/community/community-gold-cmlf3x.ts
var communityGoldCmlf3xTheme = defineTheme({
  name: "community-gold-cmlf3x",
  label: "Gold",
  _sourceName: "Gold?",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#7033ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#edf0f4"),
    secondaryForeground: raw("#080808"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#e2ebff"),
    accentForeground: raw("#1e69dc"),
    destructive: raw("#e54b4f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#000000")
  },
  dark: {
    background: raw("#070503"),
    foreground: raw("#f9f8f7"),
    card: raw("#100d08"),
    cardForeground: raw("#f9f8f7"),
    popover: raw("#0b0905"),
    popoverForeground: raw("#f9f8f7"),
    primary: raw("#d9a514"),
    primaryForeground: raw("#040302"),
    secondary: raw("#26211a"),
    secondaryForeground: raw("#e7e4df"),
    muted: raw("#1e1a14"),
    mutedForeground: raw("#928f8a"),
    accent: raw("#7f4413"),
    accentForeground: raw("#f9f8f7"),
    destructive: raw("#ee343b"),
    destructiveForeground: raw("#f9f8f7"),
    border: raw("#2f281b"),
    input: raw("#1a150e"),
    ring: raw("#d9a514")
  },
  fonts: {
    body: "Plus Jakarta Sans, sans-serif",
    heading: "Lora, serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-vivid-sky-cmmjjm.ts
var communityVividSkyCmmjjmTheme = defineTheme({
  name: "community-vivid-sky-cmmjjm",
  label: "Vivid Sky",
  _sourceName: "Vivid Sky",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0a0a0a"),
    card: raw("#ffffff"),
    cardForeground: raw("#0a0a0a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0a0a0a"),
    primary: raw("#1447e6"),
    primaryForeground: raw("#fafafa"),
    secondary: raw("#e5e7eb"),
    secondaryForeground: raw("#171717"),
    muted: raw("#e5e7eb"),
    mutedForeground: raw("#737373"),
    accent: raw("#e5e7eb"),
    accentForeground: raw("#171717"),
    destructive: raw("#e7000b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#dadee4"),
    input: raw("#dadee4"),
    ring: raw("#1447e6")
  },
  dark: {
    background: raw("#141c30"),
    foreground: raw("#e2e8f0"),
    card: raw("#212b3e"),
    cardForeground: raw("#e2e8f0"),
    popover: raw("#212b3e"),
    popoverForeground: raw("#e2e8f0"),
    primary: raw("#5085fb"),
    primaryForeground: raw("#141c30"),
    secondary: raw("#2e384b"),
    secondaryForeground: raw("#d1d5db"),
    muted: raw("#1c2639"),
    mutedForeground: raw("#8f96a3"),
    accent: raw("#374153"),
    accentForeground: raw("#d1d5db"),
    destructive: raw("#ff6467"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#3e4858"),
    input: raw("#3e4858"),
    ring: raw("#5085fb")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.625rem"
});

// src/themes/community/community-moss-cmmi1g.ts
var communityMossCmmi1gTheme = defineTheme({
  name: "community-moss-cmmi1g",
  label: "Moss",
  _sourceName: "moss",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#7F956A"),
    primaryForeground: raw("oklch(0.985 0.001 106.423)"),
    secondary: raw("#D4D9D0"),
    secondaryForeground: raw("#080808"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#878787"),
    accent: raw("#495940"),
    accentForeground: raw("#FFFF"),
    destructive: raw("#b3191f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#AFBEA5")
  },
  dark: {
    background: raw("#070503"),
    foreground: raw("#f9f8f7"),
    card: raw("#100d08"),
    cardForeground: raw("#f9f8f7"),
    popover: raw("#0b0905"),
    popoverForeground: raw("#f9f8f7"),
    primary: raw("#AFBEA5"),
    primaryForeground: raw("#040302"),
    secondary: raw("#26211a"),
    secondaryForeground: raw("#e7e4df"),
    muted: raw("#1e1a14"),
    mutedForeground: raw("#928f8a"),
    accent: raw("#495940"),
    accentForeground: raw("#FFF"),
    destructive: raw("#b3191f"),
    destructiveForeground: raw("#f9f8f7"),
    border: raw("#2f281b"),
    input: raw("#1a150e"),
    ring: raw("#AFBEA5")
  },
  fonts: {
    body: "Plus Jakarta Sans, sans-serif",
    heading: "Lora, serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-better-light-theme-supabase-cmmdxi.ts
var communityBetterLightThemeSupabaseCmmdxiTheme = defineTheme({
  name: "community-better-light-theme-supabase-cmmdxi",
  label: "Better Light Theme Supabase",
  _sourceName: "Better Light Theme Supabase",
  category: "Community",
  light: {
    background: raw("#fcfcfc"),
    foreground: raw("#171717"),
    card: raw("#fcfcfc"),
    cardForeground: raw("#171717"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#525252"),
    primary: raw("#008a50"),
    primaryForeground: raw("#fff"),
    secondary: raw("#fdfdfd"),
    secondaryForeground: raw("#171717"),
    muted: raw("#ededed"),
    mutedForeground: raw("#202020"),
    accent: raw("#ededed"),
    accentForeground: raw("#202020"),
    destructive: raw("#ca3214"),
    destructiveForeground: raw("#fffcfc"),
    border: raw("#dfdfdf"),
    input: raw("#f6f6f6"),
    ring: raw("#008a50")
  },
  dark: {
    background: raw("#121212"),
    foreground: raw("#e2e8f0"),
    card: raw("#171717"),
    cardForeground: raw("#e2e8f0"),
    popover: raw("#242424"),
    popoverForeground: raw("#a9a9a9"),
    primary: raw("#008a50"),
    primaryForeground: raw("#dde8e3"),
    secondary: raw("#242424"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#1f1f1f"),
    mutedForeground: raw("#a2a2a2"),
    accent: raw("#313131"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#541c15"),
    destructiveForeground: raw("#ede9e8"),
    border: raw("#292929"),
    input: raw("#242424"),
    ring: raw("#008a50")
  },
  fonts: {
    body: "Outfit, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-claude-renk-paleti-v1-0-cmm9i1.ts
var communityClaudeRenkPaletiV10Cmm9i1Theme = defineTheme({
  name: "community-claude-renk-paleti-v1-0-cmm9i1",
  label: "Claude Renk Paleti V1.0",
  _sourceName: "Claude Renk Paleti v1.0",
  category: "Community",
  light: {
    background: raw("#faf9f5"),
    foreground: raw("#3d3929"),
    card: raw("#faf9f5"),
    cardForeground: raw("#141413"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#28261b"),
    primary: raw("#c96442"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e9e6dc"),
    secondaryForeground: raw("#535146"),
    muted: raw("#ede9de"),
    mutedForeground: raw("#83827d"),
    accent: raw("#e9e6dc"),
    accentForeground: raw("#28261b"),
    destructive: raw("#141413"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#dad9d4"),
    input: raw("#b4b2a7"),
    ring: raw("#c96442")
  },
  dark: {
    background: raw("#262624"),
    foreground: raw("#c3c0b6"),
    card: raw("#262624"),
    cardForeground: raw("#faf9f5"),
    popover: raw("#30302e"),
    popoverForeground: raw("#e5e5e2"),
    primary: raw("#d97757"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#faf9f5"),
    secondaryForeground: raw("#30302e"),
    muted: raw("#1b1b19"),
    mutedForeground: raw("#b7b5a9"),
    accent: raw("#1a1915"),
    accentForeground: raw("#f5f4ee"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#3e3e38"),
    input: raw("#52514a"),
    ring: raw("#d97757")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "Inter, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0.5rem"
});

// src/themes/community/community-damon-cmlw7u.ts
var communityDamonCmlw7uTheme = defineTheme({
  name: "community-damon-cmlw7u",
  label: "Damon",
  _sourceName: "damon",
  category: "Community",
  light: {
    background: raw("oklch(0.98 0.03 260)"),
    foreground: raw("oklch(0.06 0.01 270)"),
    card: raw("oklch(0.99 0.02 260)"),
    cardForeground: raw("oklch(0.06 0.01 270)"),
    popover: raw("oklch(0.98 0.03 260)"),
    popoverForeground: raw("oklch(0.06 0.01 270)"),
    primary: raw("oklch(0.06 0.01 270)"),
    primaryForeground: raw("oklch(0.98 0.03 260)"),
    secondary: raw("oklch(0.94 0 0)"),
    secondaryForeground: raw("oklch(0.06 0.01 270)"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("oklch(0.44 0 0)"),
    accent: raw("oklch(0.94 0 0)"),
    accentForeground: raw("oklch(0.06 0.01 270)"),
    destructive: raw("oklch(0.63 0.19 23.03)"),
    destructiveForeground: raw("oklch(0.98 0.03 260)"),
    border: raw("oklch(0.92 0 0)"),
    input: raw("oklch(0.94 0 0)"),
    ring: raw("oklch(0.06 0.01 270)")
  },
  dark: {
    background: raw("oklch(0.04 0.005 270)"),
    foreground: raw("oklch(0.88 0.04 260)"),
    card: raw("oklch(0.14 0.005 270)"),
    cardForeground: raw("oklch(0.88 0.04 260)"),
    popover: raw("oklch(0.18 0.005 270)"),
    popoverForeground: raw("oklch(0.88 0.04 260)"),
    primary: raw("oklch(0.88 0.04 260)"),
    primaryForeground: raw("oklch(0.04 0.005 270)"),
    secondary: raw("oklch(0.25 0 0)"),
    secondaryForeground: raw("oklch(0.88 0.04 260)"),
    muted: raw("oklch(0.23 0 0)"),
    mutedForeground: raw("oklch(0.72 0 0)"),
    accent: raw("oklch(0.32 0 0)"),
    accentForeground: raw("oklch(0.88 0.04 260)"),
    destructive: raw("oklch(0.69 0.20 23.91)"),
    destructiveForeground: raw("oklch(0.04 0.005 270)"),
    border: raw("oklch(0.26 0 0)"),
    input: raw("oklch(0.32 0 0)"),
    ring: raw("oklch(0.72 0 0)")
  },
  fonts: {
    body: "Geist, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-greattings-cmlfwc.ts
var communityGreattingsCmlfwcTheme = defineTheme({
  name: "community-greattings-cmlfwc",
  label: "Greattings",
  _sourceName: "Greattings",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#1c3a41"),
    card: raw("#ffffff"),
    cardForeground: raw("#1c3a41"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#66abff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffffff"),
    secondaryForeground: raw("#000000"),
    muted: raw("#f2f0f0"),
    mutedForeground: raw("#404f54"),
    accent: raw("#f8f6fc"),
    accentForeground: raw("#375258"),
    destructive: raw("#ff4395"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#f0f9ff"),
    input: raw("#f0ad60"),
    ring: raw("#002757")
  },
  dark: {
    background: raw("#201919"),
    foreground: raw("#f1f8f9"),
    card: raw("#2f2626"),
    cardForeground: raw("#f1f8f9"),
    popover: raw("#2f2626"),
    popoverForeground: raw("#f1f8f9"),
    primary: raw("#8dc8ff"),
    primaryForeground: raw("#201919"),
    secondary: raw("#3e3535"),
    secondaryForeground: raw("#dce4e5"),
    muted: raw("#211a1a"),
    mutedForeground: raw("#a3b4b8"),
    accent: raw("#4c4445"),
    accentForeground: raw("#dce4e5"),
    destructive: raw("#ff4395"),
    destructiveForeground: raw("#201919"),
    border: raw("#3e3535"),
    input: raw("#3e3535"),
    ring: raw("#8dc8ff")
  },
  fonts: {
    body: "DM Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "Libre Caslon Text, ui-serif, serif"
  },
  radius: "1.25rem"
});

// src/themes/community/community-green-with-yellow-theme-cmlewm.ts
var communityGreenWithYellowThemeCmlewmTheme = defineTheme({
  name: "community-green-with-yellow-theme-cmlewm",
  label: "Green With Yellow Theme",
  _sourceName: "green with yellow theme",
  category: "Community",
  light: {
    background: raw("hsl(140, 20%, 98%)"),
    foreground: raw("hsl(140, 60%, 5%)"),
    card: raw("hsl(140, 20%, 98%)"),
    cardForeground: raw("hsl(140, 60%, 5%)"),
    popover: raw("hsl(140, 20%, 98%)"),
    popoverForeground: raw("hsl(140, 60%, 5%)"),
    primary: raw("hsl(142, 76%, 36%)"),
    primaryForeground: raw("hsl(140, 20%, 98%)"),
    secondary: raw("hsl(48, 96%, 53%)"),
    secondaryForeground: raw("hsl(48, 20%, 5%)"),
    muted: raw("hsl(140, 15%, 92%)"),
    mutedForeground: raw("hsl(140, 10%, 40%)"),
    accent: raw("hsl(48, 90%, 90%)"),
    accentForeground: raw("hsl(48, 60%, 15%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(140, 15%, 88%)"),
    input: raw("hsl(140, 15%, 88%)"),
    ring: raw("hsl(142, 76%, 36%)")
  },
  dark: {
    background: raw("hsl(145, 45%, 3%)"),
    foreground: raw("hsl(140, 10%, 95%)"),
    card: raw("hsl(145, 45%, 5%)"),
    cardForeground: raw("hsl(140, 10%, 95%)"),
    popover: raw("hsl(145, 45%, 3%)"),
    popoverForeground: raw("hsl(140, 10%, 95%)"),
    primary: raw("hsl(142, 70%, 45%)"),
    primaryForeground: raw("hsl(145, 45%, 3%)"),
    secondary: raw("hsl(48, 90%, 50%)"),
    secondaryForeground: raw("hsl(145, 45%, 3%)"),
    muted: raw("hsl(145, 30%, 15%)"),
    mutedForeground: raw("hsl(140, 10%, 65%)"),
    accent: raw("hsl(48, 80%, 15%)"),
    accentForeground: raw("hsl(48, 90%, 90%)"),
    destructive: raw("hsl(0, 62%, 30%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(145, 30%, 18%)"),
    input: raw("hsl(145, 30%, 18%)"),
    ring: raw("hsl(142, 70%, 45%)")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-rewaff-cmmm3h.ts
var communityRewaffCmmm3hTheme = defineTheme({
  name: "community-rewaff-cmmm3h",
  label: "Rewaff",
  _sourceName: "Rewaff",
  category: "Community",
  light: {
    background: raw("#f3faff"),
    foreground: raw("#09131a"),
    card: raw("#ffffff"),
    cardForeground: raw("#09131a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#09131a"),
    primary: raw("#00a33d"),
    primaryForeground: raw("#f3faff"),
    secondary: raw("#e0edf8"),
    secondaryForeground: raw("#202a32"),
    muted: raw("#e0edf8"),
    mutedForeground: raw("#4c575f"),
    accent: raw("#28bc5e"),
    accentForeground: raw("#f3faff"),
    destructive: raw("#f22a36"),
    destructiveForeground: raw("#f3faff"),
    border: raw("#d3e0ea"),
    input: raw("#d3e0ea"),
    ring: raw("#00a33d")
  },
  dark: {
    background: raw("#02080e"),
    foreground: raw("#e9f0f5"),
    card: raw("#09131a"),
    cardForeground: raw("#e9f0f5"),
    popover: raw("#09131a"),
    popoverForeground: raw("#e9f0f5"),
    primary: raw("#2fbc5b"),
    primaryForeground: raw("#000408"),
    secondary: raw("#172128"),
    secondaryForeground: raw("#e9f0f5"),
    muted: raw("#172128"),
    mutedForeground: raw("#85919a"),
    accent: raw("#32c364"),
    accentForeground: raw("#000408"),
    destructive: raw("#f22a36"),
    destructiveForeground: raw("#f3faff"),
    border: raw("#202a32"),
    input: raw("#202a32"),
    ring: raw("#2fbc5b")
  },
  fonts: {
    body: "Space Grotesk, ui-sans-serif, sans-serif, system-ui",
    heading: "PT Serif, ui-serif, serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-japan-blues-cmmje1.ts
var communityJapanBluesCmmje1Theme = defineTheme({
  name: "community-japan-blues-cmmje1",
  label: "Japan Blues",
  _sourceName: "Japan Blues",
  category: "Community",
  light: {
    background: raw("#faf9f5"),
    foreground: raw("oklch(0.145 0 0)"),
    card: raw("#faf9f5"),
    cardForeground: raw("#oklch(0.145 0 0)"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#28261b"),
    primary: raw("oklch(0.704 0.04 256.788)"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("oklch(0.869 0.022 252.894)"),
    secondaryForeground: raw("oklch(0.372 0.044 257.287)"),
    muted: raw("oklch(0.923 0.003 48.717)"),
    mutedForeground: raw("oklch(0.553 0.013 58.071)"),
    accent: raw("#e9e6dc"),
    accentForeground: raw("#1b1d27"),
    destructive: raw("#141413"),
    destructiveForeground: raw("#ffffff"),
    border: raw("oklch(0.869 0.005 56.366)"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.554 0.046 257.417)")
  },
  dark: {
    background: raw("#262624"),
    foreground: raw("#c3c0b6"),
    card: raw("#262624"),
    cardForeground: raw("#faf9f5"),
    popover: raw("#30302e"),
    popoverForeground: raw("#e5e5e2"),
    primary: raw("oklch(0.901 0.058 230.902)"),
    primaryForeground: raw("oklch(0.145 0 0)"),
    secondary: raw("#faf9f5"),
    secondaryForeground: raw("#30302e"),
    muted: raw("#1b1b19"),
    mutedForeground: raw("#b7b5a9"),
    accent: raw("#1a1915"),
    accentForeground: raw("#f5f4ee"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#3e3e38"),
    input: raw("#52514a"),
    ring: raw("oklch(0.869 0.022 252.894)")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-altar-v1-invert-cmmaeo.ts
var communityAltarV1InvertCmmaeoTheme = defineTheme({
  name: "community-altar-v1-invert-cmmaeo",
  label: "ALTAR V1 INVERT",
  _sourceName: "ALTAR V1 INVERT",
  category: "Community",
  light: {
    background: raw("#EDEDED"),
    foreground: raw("#0D0D0D"),
    card: raw("#FAFAFA"),
    cardForeground: raw("#0D0D0D"),
    popover: raw("#CDCDCD"),
    popoverForeground: raw("#0D0D0D"),
    primary: raw("#e78a53"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#5f8787"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#DEDEDE"),
    mutedForeground: raw("#555555"),
    accent: raw("#CDCDCD"),
    accentForeground: raw("#000000"),
    destructive: raw("#e21313"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#DEDEDE"),
    input: raw("#BABABA"),
    ring: raw("#5f8787")
  },
  dark: {
    background: raw("#121212"),
    foreground: raw("#D0D0D0"),
    card: raw("#0D0D0D"),
    cardForeground: raw("#D0D0D0"),
    popover: raw("#333333"),
    popoverForeground: raw("#D0D0D0"),
    primary: raw("#e78a53"),
    primaryForeground: raw("#0D0D0D"),
    secondary: raw("#5f8787"),
    secondaryForeground: raw("#0D0D0D"),
    muted: raw("#222222"),
    mutedForeground: raw("#888888"),
    accent: raw("#333333"),
    accentForeground: raw("#FFFFFF"),
    destructive: raw("#e21313"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#0D0D0D"),
    input: raw("#555555"),
    ring: raw("#5f8787")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "IBM Plex Serif, ui-serif, serif"
  },
  radius: "0.325rem"
});

// src/themes/community/community-3d-vintage-paper-cmm7uq.ts
var community3dVintagePaperCmm7uqTheme = defineTheme({
  name: "community-3d-vintage-paper-cmm7uq",
  label: "3D Vintage Paper",
  _sourceName: "3D Vintage paper",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#c92d6a"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1b1d1e"),
    secondaryForeground: raw("#edf0f4"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#fbdae7"),
    accentForeground: raw("#c92d6a"),
    destructive: raw("#e54b4f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#000000")
  },
  dark: {
    background: raw("#060606"),
    foreground: raw("#f0f0f0"),
    card: raw("#18191b"),
    cardForeground: raw("#f0f0f0"),
    popover: raw("#222327"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#c92d6a"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1b1d1e"),
    secondaryForeground: raw("#f0f0f0"),
    muted: raw("#2a2c33"),
    mutedForeground: raw("#a0a0a0"),
    accent: raw("#1e293b"),
    accentForeground: raw("#c92d6a"),
    destructive: raw("#f87171"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#33353a"),
    input: raw("#33353a"),
    ring: raw("#c92d6a")
  },
  fonts: {
    body: "var(--font-montserrat), Montserrat, sans-serif",
    heading: "Lora, serif"
  },
  radius: "0rem"
});

// src/themes/community/community-spacelinear-cmm4ya.ts
var communitySpacelinearCmm4yaTheme = defineTheme({
  name: "community-spacelinear-cmm4ya",
  label: "Spacelinear",
  _sourceName: "SpaceLinear",
  category: "Community",
  light: {
    background: raw("#faf9f5"),
    foreground: raw("#3d3929"),
    card: raw("#faf9f5"),
    cardForeground: raw("#141413"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#28261b"),
    primary: raw("#ce7e4f"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e9e6dc"),
    secondaryForeground: raw("#535146"),
    muted: raw("#ede9de"),
    mutedForeground: raw("#83827d"),
    accent: raw("#e9e6dc"),
    accentForeground: raw("#28261b"),
    destructive: raw("#141413"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#dad9d4"),
    input: raw("#b4b2a7"),
    ring: raw("#c96442")
  },
  dark: {
    background: raw("#262624"),
    foreground: raw("#c3c0b6"),
    card: raw("#262624"),
    cardForeground: raw("#faf9f5"),
    popover: raw("#30302e"),
    popoverForeground: raw("#e5e5e2"),
    primary: raw("#d97757"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#faf9f5"),
    secondaryForeground: raw("#30302e"),
    muted: raw("#1b1b19"),
    mutedForeground: raw("#b7b5a9"),
    accent: raw("#1a1915"),
    accentForeground: raw("#f5f4ee"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#3e3e38"),
    input: raw("#52514a"),
    ring: raw("#d97757")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "Space Grotesk, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0.5rem"
});

// src/themes/community/community-artefactory-cmm3xr.ts
var communityArtefactoryCmm3xrTheme = defineTheme({
  name: "community-artefactory-cmm3xr",
  label: "Artefactory",
  _sourceName: "Artefactory",
  category: "Community",
  light: {
    background: raw("hsl(215, 30%, 96%)"),
    foreground: raw("hsl(222, 47%, 11%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(222, 47%, 11%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(222, 47%, 11%)"),
    primary: raw("hsl(338, 100%, 50%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(215, 40%, 90%)"),
    secondaryForeground: raw("hsl(222, 47%, 11%)"),
    muted: raw("hsl(215, 40%, 92%)"),
    mutedForeground: raw("hsl(215, 16%, 47%)"),
    accent: raw("hsl(338, 100%, 94%)"),
    accentForeground: raw("hsl(338, 100%, 50%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(214, 32%, 85%)"),
    input: raw("hsl(214, 32%, 85%)"),
    ring: raw("hsl(338, 100%, 50%)")
  },
  dark: {
    background: raw("#00011b"),
    foreground: raw("hsl(210, 40%, 98%)"),
    card: raw("#020d2b"),
    cardForeground: raw("hsl(210, 40%, 98%)"),
    popover: raw("hsl(220, 100%, 8%)"),
    popoverForeground: raw("hsl(210, 40%, 98%)"),
    primary: raw("oklch(0.922 0 0)"),
    primaryForeground: raw("oklch(0.205 0 0)"),
    secondary: raw("#cd0e6b"),
    secondaryForeground: raw("#ffedf3"),
    muted: raw("hsl(222, 47%, 15%)"),
    mutedForeground: raw("hsl(215, 20%, 65%)"),
    accent: raw("#13223e"),
    accentForeground: raw("oklch(0.922 0 0)"),
    destructive: raw("hsl(0, 62%, 30%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(222, 47%, 18%)"),
    input: raw("hsl(222, 47%, 18%)"),
    ring: raw("hsl(338, 100%, 50%)")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-my-theme-cmm24g.ts
var communityMyThemeCmm24gTheme = defineTheme({
  name: "community-my-theme-cmm24g",
  label: "MY THEME",
  _sourceName: "MY THEME",
  category: "Community",
  light: {
    background: raw("#f9f9f9"),
    foreground: raw("#202020"),
    card: raw("#fcfcfc"),
    cardForeground: raw("#202020"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#202020"),
    primary: raw("#644a40"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffdfb5"),
    secondaryForeground: raw("#582d1d"),
    muted: raw("#efefef"),
    mutedForeground: raw("#646464"),
    accent: raw("#e8e8e8"),
    accentForeground: raw("#202020"),
    destructive: raw("#e54d2e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d8d8d8"),
    input: raw("#d8d8d8"),
    ring: raw("#644a40")
  },
  dark: {
    background: raw("#111111"),
    foreground: raw("#eeeeee"),
    card: raw("#191919"),
    cardForeground: raw("#eeeeee"),
    popover: raw("#191919"),
    popoverForeground: raw("#eeeeee"),
    primary: raw("#ffe0c2"),
    primaryForeground: raw("#081a1b"),
    secondary: raw("#393028"),
    secondaryForeground: raw("#ffe0c2"),
    muted: raw("#222222"),
    mutedForeground: raw("#b4b4b4"),
    accent: raw("#2a2a2a"),
    accentForeground: raw("#eeeeee"),
    destructive: raw("#e54d2e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#201e18"),
    input: raw("#484848"),
    ring: raw("#ffe0c2")
  },
  fonts: {
    body: "AR One Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "Adamina, ui-serif, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-styrene-cmlybu.ts
var communityStyreneCmlybuTheme = defineTheme({
  name: "community-styrene-cmlybu",
  label: "Styrene",
  _sourceName: "Styrene",
  category: "Community",
  light: {
    background: raw("#f8fafc"),
    foreground: raw("#233039"),
    card: raw("#ffffff"),
    cardForeground: raw("#253639"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#253839"),
    primary: raw("#567159"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e5e7eb"),
    secondaryForeground: raw("#394f49"),
    muted: raw("#f3f4f6"),
    mutedForeground: raw("#28312b"),
    accent: raw("#d1edd1"),
    accentForeground: raw("#3c4e4f"),
    destructive: raw("#d3300e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d1d5db"),
    input: raw("#dae8d9"),
    ring: raw("#78b27f")
  },
  dark: {
    background: raw("#16171d"),
    foreground: raw("#cbf4ed"),
    card: raw("#202b30"),
    cardForeground: raw("#cbf4ed"),
    popover: raw("#161a1d"),
    popoverForeground: raw("#00f0d3"),
    primary: raw("#00f0d3"),
    primaryForeground: raw("#0b2821"),
    secondary: raw("#304345"),
    secondaryForeground: raw("#d1d5db"),
    muted: raw("#1f2b30"),
    mutedForeground: raw("#9ca3af"),
    accent: raw("#374151"),
    accentForeground: raw("#d1d5db"),
    destructive: raw("#e98100"),
    destructiveForeground: raw("#1d2725"),
    border: raw("#4a6767"),
    input: raw("#375656"),
    ring: raw("#00f0d3")
  },
  fonts: {
    body: "Tomorrow, ui-sans-serif, sans-serif, system-ui",
    heading: "BioRhyme, ui-serif, serif"
  },
  radius: "0.15rem"
});

// src/themes/community/community-old-school-cmlx21.ts
var communityOldSchoolCmlx21Theme = defineTheme({
  name: "community-old-school-cmlx21",
  label: "Old School",
  _sourceName: "Old school",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#000000"),
    card: raw("#f0f0f0"),
    cardForeground: raw("#000000"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#000000"),
    primary: raw("#0000ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffff00"),
    secondaryForeground: raw("#000000"),
    muted: raw("#cccccc"),
    mutedForeground: raw("#555555"),
    accent: raw("#ff00ff"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ff0000"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#000000"),
    input: raw("#ffffff"),
    ring: raw("#0000ff")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#00ff00"),
    card: raw("#1a1a1a"),
    cardForeground: raw("#00ff00"),
    popover: raw("#000000"),
    popoverForeground: raw("#00ff00"),
    primary: raw("#ffff00"),
    primaryForeground: raw("#000000"),
    secondary: raw("#0000ff"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#333333"),
    mutedForeground: raw("#008000"),
    accent: raw("#ff00ff"),
    accentForeground: raw("#000000"),
    destructive: raw("#ff0000"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#00ff00"),
    input: raw("#000000"),
    ring: raw("#ffff00")
  },
  fonts: {
    body: "Times New Roman, serif",
    heading: "Times New Roman, serif"
  },
  radius: "0rem"
});

// src/themes/community/community-brownies-cmlkz0.ts
var communityBrowniesCmlkz0Theme = defineTheme({
  name: "community-brownies-cmlkz0",
  label: "Brownies",
  _sourceName: "Brownies",
  category: "Community",
  light: {
    background: raw("#fff9f6"),
    foreground: raw("#28150c"),
    card: raw("#ffffff"),
    cardForeground: raw("#28150c"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#28150c"),
    primary: raw("#c83600"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffe6d1"),
    secondaryForeground: raw("#28150c"),
    muted: raw("#ffeee8"),
    mutedForeground: raw("#735e56"),
    accent: raw("#ffd1c5"),
    accentForeground: raw("#321a14"),
    destructive: raw("#ce3f3f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#edd5cc"),
    input: raw("#edd5cc"),
    ring: raw("#c83600")
  },
  dark: {
    background: raw("#0a0403"),
    foreground: raw("#f4ede9"),
    card: raw("#150a06"),
    cardForeground: raw("#f4ede9"),
    popover: raw("#0f0704"),
    popoverForeground: raw("#f4ede9"),
    primary: raw("#ff8435"),
    primaryForeground: raw("#120805"),
    secondary: raw("#241711"),
    secondaryForeground: raw("#f4ede9"),
    muted: raw("#1e130e"),
    mutedForeground: raw("#9d8b83"),
    accent: raw("#3c2117"),
    accentForeground: raw("#f4ede9"),
    destructive: raw("#cc272e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#2e201a"),
    input: raw("#2e201a"),
    ring: raw("#ff8435")
  },
  fonts: {
    body: "'Outfit', system-ui, sans-serif",
    heading: "'Playfair Display', Georgia, serif"
  },
  radius: "1.0rem"
});

// src/themes/community/community-m-cmlgp0.ts
var communityMCmlgp0Theme = defineTheme({
  name: "community-m-cmlgp0",
  label: "Echo Canyon",
  _sourceName: "m",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#262626"),
    card: raw("#ffffff"),
    cardForeground: raw("#262626"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#262626"),
    primary: raw("#f59e0b"),
    primaryForeground: raw("#000000"),
    secondary: raw("#f3f4f6"),
    secondaryForeground: raw("#4b5563"),
    muted: raw("#f9fafb"),
    mutedForeground: raw("#6b7280"),
    accent: raw("#fffbeb"),
    accentForeground: raw("#92400e"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e7eb"),
    input: raw("#e5e7eb"),
    ring: raw("#f59e0b")
  },
  dark: {
    background: raw("#171717"),
    foreground: raw("#e5e5e5"),
    card: raw("#262626"),
    cardForeground: raw("#e5e5e5"),
    popover: raw("#262626"),
    popoverForeground: raw("#e5e5e5"),
    primary: raw("#f59e0b"),
    primaryForeground: raw("#000000"),
    secondary: raw("#262626"),
    secondaryForeground: raw("#e5e5e5"),
    muted: raw("#1f1f1f"),
    mutedForeground: raw("#a3a3a3"),
    accent: raw("#92400e"),
    accentForeground: raw("#fde68a"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#404040"),
    input: raw("#404040"),
    ring: raw("#f59e0b")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Source Serif 4, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-course-app-cmmnnr.ts
var communityCourseAppCmmnnrTheme = defineTheme({
  name: "community-course-app-cmmnnr",
  label: "Course App",
  _sourceName: "course-app",
  category: "Community",
  light: {
    background: raw("#FDFDFD"),
    foreground: raw("#1B1B1B"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#1B1B1B"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#1B1B1B"),
    primary: raw("#C3ABFA"),
    primaryForeground: raw("#1B1B1B"),
    secondary: raw("#1B1B1B"),
    secondaryForeground: raw("#FDFDFD"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("oklch(0.556 0 0)"),
    accent: raw("oklch(0.97 0 0)"),
    accentForeground: raw("oklch(0.205 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.922 0 0)"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.708 0 0)")
  },
  dark: {
    background: raw("#1B1B1B"),
    foreground: raw("#FDFDFD"),
    card: raw("oklch(0.205 0 0)"),
    cardForeground: raw("#FDFDFD"),
    popover: raw("oklch(0.205 0 0)"),
    popoverForeground: raw("#FDFDFD"),
    primary: raw("#C3ABFA"),
    primaryForeground: raw("oklch(0.205 0 0)"),
    secondary: raw("#FDFDFD"),
    secondaryForeground: raw("#1B1B1B"),
    muted: raw("oklch(0.269 0 0)"),
    mutedForeground: raw("oklch(0.708 0 0)"),
    accent: raw("oklch(0.371 0 0)"),
    accentForeground: raw("oklch(0.985 0 0)"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("oklch(0.275 0 0)"),
    input: raw("oklch(0.325 0 0)"),
    ring: raw("oklch(0.556 0 0)")
  },
  fonts: {
    body: "Open Sans, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.85rem"
});

// src/themes/community/community-tersk-cmmlwi.ts
var communityTerskCmmlwiTheme = defineTheme({
  name: "community-tersk-cmmlwi",
  label: "Tersk",
  _sourceName: "tersk",
  category: "Community",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("oklch(0.145 0 0)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.145 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.145 0 0)"),
    primary: raw("#5ea85d"),
    primaryForeground: raw("#f8f9f2"),
    secondary: raw("#5ea85d"),
    secondaryForeground: raw("#f8f9f2"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("oklch(0.556 0 0)"),
    accent: raw("oklch(0.97 0 0)"),
    accentForeground: raw("oklch(0.205 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.922 0 0)"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.708 0 0)")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("oklch(0.985 0 0)"),
    card: raw("oklch(0.205 0 0)"),
    cardForeground: raw("oklch(0.985 0 0)"),
    popover: raw("oklch(0.269 0 0)"),
    popoverForeground: raw("oklch(0.985 0 0)"),
    primary: raw("#5ea85d"),
    primaryForeground: raw("#f8f9f2"),
    secondary: raw("#5ea85d"),
    secondaryForeground: raw("#f8f9f2"),
    muted: raw("oklch(0.269 0 0)"),
    mutedForeground: raw("oklch(0.708 0 0)"),
    accent: raw("#5ea85d"),
    accentForeground: raw("#f8f9f2"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("oklch(0.275 0 0)"),
    input: raw("oklch(0.325 0 0)"),
    ring: raw("oklch(0.556 0 0)")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "1rem"
});

// src/themes/community/community-terminal-dark-russian-cmmljk.ts
var communityTerminalDarkRussianCmmljkTheme = defineTheme({
  name: "community-terminal-dark-russian-cmmljk",
  label: "Terminal Dark Russian",
  _sourceName: "Terminal Dark Russian",
  category: "Community",
  light: {
    background: raw("hsl(0, 0%, 88%)"),
    foreground: raw("hsl(0, 0%, 5%)"),
    card: raw("hsl(0, 0%, 85%)"),
    cardForeground: raw("hsl(0, 0%, 5%)"),
    popover: raw("hsl(0, 0%, 85%)"),
    popoverForeground: raw("hsl(0, 0%, 5%)"),
    primary: raw("hsl(0, 75%, 35%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(0, 0%, 25%)"),
    secondaryForeground: raw("hsl(0, 0%, 95%)"),
    muted: raw("hsl(0, 0%, 80%)"),
    mutedForeground: raw("hsl(0, 0%, 30%)"),
    accent: raw("hsl(0, 60%, 40%)"),
    accentForeground: raw("hsl(0, 0%, 100%)"),
    destructive: raw("hsl(0, 80%, 30%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(0, 0%, 10%)"),
    input: raw("hsl(0, 0%, 82%)"),
    ring: raw("hsl(0, 75%, 35%)")
  },
  dark: {
    background: raw("hsl(0, 0%, 2%)"),
    foreground: raw("hsl(0, 0%, 92%)"),
    card: raw("hsl(0, 0%, 5%)"),
    cardForeground: raw("hsl(0, 0%, 92%)"),
    popover: raw("hsl(0, 0%, 5%)"),
    popoverForeground: raw("hsl(0, 0%, 92%)"),
    primary: raw("hsl(0, 80%, 42%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(0, 0%, 12%)"),
    secondaryForeground: raw("hsl(0, 0%, 90%)"),
    muted: raw("hsl(0, 0%, 10%)"),
    mutedForeground: raw("hsl(0, 0%, 50%)"),
    accent: raw("hsl(0, 70%, 30%)"),
    accentForeground: raw("hsl(0, 0%, 100%)"),
    destructive: raw("hsl(0, 90%, 25%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(0, 0%, 25%)"),
    input: raw("hsl(0, 0%, 8%)"),
    ring: raw("hsl(0, 80%, 42%)")
  },
  fonts: {
    body: "JetBrains Mono, monospace",
    heading: "Courier New, Courier, monospace"
  },
  radius: "0rem"
});

// src/themes/community/community-sky-cmmjha.ts
var communitySkyCmmjhaTheme = defineTheme({
  name: "community-sky-cmmjha",
  label: "Sky",
  _sourceName: "Sky",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0a0a0a"),
    card: raw("#ffffff"),
    cardForeground: raw("#0a0a0a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0a0a0a"),
    primary: raw("#1447e6"),
    primaryForeground: raw("#fafafa"),
    secondary: raw("#f5f5f5"),
    secondaryForeground: raw("#171717"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#737373"),
    accent: raw("#f5f5f5"),
    accentForeground: raw("#171717"),
    destructive: raw("#e7000b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e5e5"),
    input: raw("#e5e5e5"),
    ring: raw("#1447e6")
  },
  dark: {
    background: raw("#151d2a"),
    foreground: raw("#fafafa"),
    card: raw("#1b2533"),
    cardForeground: raw("#fafafa"),
    popover: raw("#202b3a"),
    popoverForeground: raw("#fafafa"),
    primary: raw("#2b7fff"),
    primaryForeground: raw("#fafafa"),
    secondary: raw("#232f3e"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#242d3b"),
    mutedForeground: raw("#9099a6"),
    accent: raw("#2b394b"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#ff6467"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#293442"),
    input: raw("#2b3646"),
    ring: raw("#2b7fff")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.625rem"
});

// src/themes/community/community-efferd-cmmi9l.ts
var communityEfferdCmmi9lTheme = defineTheme({
  name: "community-efferd-cmmi9l",
  label: "Efferd",
  _sourceName: "Efferd",
  category: "Community",
  light: {
    background: raw("oklch(0.985 0 0)"),
    foreground: raw("oklch(0.12 0 0)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.12 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.12 0 0)"),
    primary: raw("oklch(0.205 0 0)"),
    primaryForeground: raw("oklch(88.005% 0.00547 16.256)"),
    secondary: raw("oklch(0.95 0 0)"),
    secondaryForeground: raw("oklch(0.205 0 0)"),
    muted: raw("oklch(0.95 0 0)"),
    mutedForeground: raw("oklch(0.556 0 0)"),
    accent: raw("oklch(0.95 0 0)"),
    accentForeground: raw("oklch(0.205 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(0.12 0 0);"),
    border: raw("oklch(0.9 0 0)"),
    input: raw("oklch(0.92 0 0)"),
    ring: raw("oklch(0.8 0 0)")
  },
  dark: {
    background: raw("oklch(0.1 0 0)"),
    foreground: raw("oklch(0.99 0 0)"),
    card: raw("oklch(0.16 0 0)"),
    cardForeground: raw("oklch(0.99 0 0)"),
    popover: raw("oklch(0.16 0 0)"),
    popoverForeground: raw("oklch(0.99 0 0)"),
    primary: raw("oklch(0.99 0 0)"),
    primaryForeground: raw("oklch(0.16 0 0)"),
    secondary: raw("oklch(0.25 0 0)"),
    secondaryForeground: raw("oklch(0.99 0 0)"),
    muted: raw("oklch(0.25 0 0)"),
    mutedForeground: raw("oklch(0.708 0 0)"),
    accent: raw("oklch(0.25 0 0)"),
    accentForeground: raw("oklch(0.99 0 0)"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.99 0 0)"),
    border: raw("#303030"),
    input: raw("oklch(1 0 0 / 15%)"),
    ring: raw("oklch(0.556 0 0)")
  },
  fonts: {
    body: "Geist, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "0.65rem"
});

// src/themes/community/community-itadori-yuji-cmmhf9.ts
var communityItadoriYujiCmmhf9Theme = defineTheme({
  name: "community-itadori-yuji-cmmhf9",
  label: "Itadori Yuji",
  _sourceName: "Itadori Yuji",
  category: "Community",
  light: {
    background: raw("#fcfcfc"),
    foreground: raw("#0d1117"),
    card: raw("#ffffff"),
    cardForeground: raw("#0d1117"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0d1117"),
    primary: raw("#e61919"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#24335c"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#f4f4f5"),
    mutedForeground: raw("#71717a"),
    accent: raw("#ffafbd"),
    accentForeground: raw("#5c111c"),
    destructive: raw("#8b0000"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e4e4e7"),
    input: raw("#e4e4e7"),
    ring: raw("#e61919")
  },
  dark: {
    background: raw("#0d0e12"),
    foreground: raw("#fcfcfc"),
    card: raw("#161922"),
    cardForeground: raw("#fcfcfc"),
    popover: raw("#161922"),
    popoverForeground: raw("#fcfcfc"),
    primary: raw("#ff2e2e"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1a233b"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#27272a"),
    mutedForeground: raw("#a1a1aa"),
    accent: raw("#ff5e78"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#7f1d1d"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#27272a"),
    input: raw("#27272a"),
    ring: raw("#ff2e2e")
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Georgia', serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-infoseer-cmmcv8.ts
var communityInfoseerCmmcv8Theme = defineTheme({
  name: "community-infoseer-cmmcv8",
  label: "Infoseer",
  _sourceName: "infoseer",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#19191a"),
    card: raw("#ffffff"),
    cardForeground: raw("#19191a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#19191a"),
    primary: raw("#19191a"),
    primaryForeground: raw("#fafafa"),
    secondary: raw("#f5f5f5"),
    secondaryForeground: raw("#19191a"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#737373"),
    accent: raw("#f5f5f5"),
    accentForeground: raw("#19191a"),
    destructive: raw("#cf003f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e5e5"),
    input: raw("#e5e5e5"),
    ring: raw("#a1a1a1")
  },
  dark: {
    background: raw("#19191a"),
    foreground: raw("#fafafa"),
    card: raw("#19191a"),
    cardForeground: raw("#fafafa"),
    popover: raw("#262626"),
    popoverForeground: raw("#fafafa"),
    primary: raw("#e5e5e5"),
    primaryForeground: raw("#19191a"),
    secondary: raw("#262626"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#262626"),
    mutedForeground: raw("#a1a1a1"),
    accent: raw("#404040"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#ff6582"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#282828"),
    input: raw("#343434"),
    ring: raw("#737373")
  },
  fonts: {
    body: "Fira Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "Noto Serif SC, ui-serif, serif"
  },
  radius: "0.625rem"
});

// src/themes/community/community-nxtbet-quadra-inspired-cmmaea.ts
var communityNxtbetQuadraInspiredCmmaeaTheme = defineTheme({
  name: "community-nxtbet-quadra-inspired-cmmaea",
  label: "NXTBET Quadra Inspired",
  _sourceName: "NXTBET - Quadra Inspired",
  category: "Community",
  light: {
    background: raw("hsl(0,0%,100%)"),
    foreground: raw("hsl(0,0%,8%)"),
    card: raw("hsl(0,0%,98%)"),
    cardForeground: raw("hsl(0,0%,8%)"),
    popover: raw("hsl(0,0%,100%)"),
    popoverForeground: raw("hsl(0,0%,8%)"),
    primary: raw("hsl(33,96%,51%)"),
    primaryForeground: raw("hsl(0,0%,100%)"),
    secondary: raw("hsl(0,0%,12%)"),
    secondaryForeground: raw("hsl(33,96%,51%)"),
    muted: raw("hsl(0,0%,95%)"),
    mutedForeground: raw("hsl(0,0%,40%)"),
    accent: raw("hsl(33,96%,93%)"),
    accentForeground: raw("hsl(33,96%,20%)"),
    destructive: raw("hsl(0,84%,60%)"),
    destructiveForeground: raw("hsl(0,0%,100%)"),
    border: raw("hsl(0,0%,88%)"),
    input: raw("hsl(0,0%,88%)"),
    ring: raw("hsl(33,96%,51%)")
  },
  dark: {
    background: raw("hsl(0,0%,3%)"),
    foreground: raw("hsl(0,0%,98%)"),
    card: raw("hsl(0,0%,6%)"),
    cardForeground: raw("hsl(0,0%,98%)"),
    popover: raw("hsl(0,0%,5%)"),
    popoverForeground: raw("hsl(0,0%,98%)"),
    primary: raw("hsl(33,96%,51%)"),
    primaryForeground: raw("hsl(0,0%,0%)"),
    secondary: raw("hsl(0,0%,15%)"),
    secondaryForeground: raw("hsl(33,96%,51%)"),
    muted: raw("hsl(0,0%,10%)"),
    mutedForeground: raw("hsl(0,0%,65%)"),
    accent: raw("hsl(33,96%,15%)"),
    accentForeground: raw("hsl(33,96%,60%)"),
    destructive: raw("hsl(0,84%,60%)"),
    destructiveForeground: raw("hsl(0,0%,100%)"),
    border: raw("hsl(0,0%,18%)"),
    input: raw("hsl(0,0%,18%)"),
    ring: raw("hsl(33,96%,51%)")
  },
  fonts: {
    body: "Arial, Helvetica, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-greenbarbequeue-cmm9ae.ts
var communityGreenbarbequeueCmm9aeTheme = defineTheme({
  name: "community-greenbarbequeue-cmm9ae",
  label: "Greenbarbequeue",
  _sourceName: "GreenBarbequeue",
  category: "Community",
  light: {
    background: raw("hsl(100, 30%, 98%)"),
    foreground: raw("hsl(220, 45%, 10%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(220, 45%, 10%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(220, 45%, 10%)"),
    primary: raw("hsl(145, 85%, 45%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(100, 20%, 94%)"),
    secondaryForeground: raw("hsl(220, 45%, 15%)"),
    muted: raw("hsl(145, 30%, 94%)"),
    mutedForeground: raw("hsl(220, 15%, 45%)"),
    accent: raw("hsl(145, 80%, 48%)"),
    accentForeground: raw("hsl(0, 0%, 100%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(145, 20%, 90%)"),
    input: raw("hsl(145, 20%, 92%)"),
    ring: raw("hsl(145, 85%, 45%)")
  },
  dark: {
    background: raw("hsl(220, 45%, 6%)"),
    foreground: raw("hsl(100, 20%, 98%)"),
    card: raw("hsl(220, 45%, 10%)"),
    cardForeground: raw("hsl(100, 20%, 98%)"),
    popover: raw("hsl(220, 45%, 10%)"),
    popoverForeground: raw("hsl(100, 20%, 98%)"),
    primary: raw("hsl(145, 85%, 45%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(220, 30%, 15%)"),
    secondaryForeground: raw("hsl(100, 20%, 90%)"),
    muted: raw("hsl(220, 30%, 15%)"),
    mutedForeground: raw("hsl(220, 15%, 65%)"),
    accent: raw("hsl(145, 80%, 48%)"),
    accentForeground: raw("hsl(0, 0%, 100%)"),
    destructive: raw("hsl(0, 62%, 30%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(220, 30%, 18%)"),
    input: raw("hsl(220, 30%, 18%)"),
    ring: raw("hsl(145, 85%, 45%)")
  },
  fonts: {
    body: "Inter, -apple-system, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1rem"
});

// src/themes/community/community-catppuccin-mocha-cmm3nh.ts
var communityCatppuccinMochaCmm3nhTheme = defineTheme({
  name: "community-catppuccin-mocha-cmm3nh",
  label: "Catppuccin Mocha",
  _sourceName: "Catppuccin Mocha",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#4e5069"),
    card: raw("#ffffff"),
    cardForeground: raw("#4e5069"),
    popover: raw("#ced1d8"),
    popoverForeground: raw("#4e5069"),
    primary: raw("#8839ef"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ced1d8"),
    secondaryForeground: raw("#4e5069"),
    muted: raw("#dee1e8"),
    mutedForeground: raw("#6d7083"),
    accent: raw("#9353d3"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#d20f39"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#bcc1ce"),
    input: raw("#ced1d8"),
    ring: raw("#8839ef")
  },
  dark: {
    background: raw("#11111b"),
    foreground: raw("#cdd6f4"),
    card: raw("#11111b"),
    cardForeground: raw("#cdd6f4"),
    popover: raw("#181825"),
    popoverForeground: raw("#cdd6f4"),
    primary: raw("#cba6f7"),
    primaryForeground: raw("#11111b"),
    secondary: raw("#313244"),
    secondaryForeground: raw("#cdd6f4"),
    muted: raw("#313244"),
    mutedForeground: raw("#a6adc8"),
    accent: raw("#b4befe"),
    accentForeground: raw("#11111b"),
    destructive: raw("#f38ba8"),
    destructiveForeground: raw("#11111b"),
    border: raw("#45475a"),
    input: raw("#313244"),
    ring: raw("#cba6f7")
  },
  fonts: {
    body: "Geist, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.35rem"
});

// src/themes/community/community-retro-2-cmm2e2.ts
var communityRetro2Cmm2e2Theme = defineTheme({
  name: "community-retro-2-cmm2e2",
  label: "Retro 2",
  _sourceName: "retro-2",
  category: "Community",
  light: {
    background: raw("#fff"),
    foreground: raw("#000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#fffd33"),
    primaryForeground: raw("#000"),
    secondary: raw("#000"),
    secondaryForeground: raw("#fff"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#faf983"),
    accentForeground: raw("#000"),
    destructive: raw("#e5614b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#000"),
    input: raw("#ebebeb"),
    ring: raw("#000000")
  },
  dark: {
    background: raw("#1a1a1e"),
    foreground: raw("#f5f5f5"),
    card: raw("#242424"),
    cardForeground: raw("#f5f5f5"),
    popover: raw("#222227"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#fffd33"),
    primaryForeground: raw("#000"),
    secondary: raw("#3a3a3a"),
    secondaryForeground: raw("#f5f5f5"),
    muted: raw("#3f3f46"),
    mutedForeground: raw("#a0a0a0"),
    accent: raw("#faf983"),
    accentForeground: raw("#000"),
    destructive: raw("#e63946"),
    destructiveForeground: raw("#fff"),
    border: raw("#5c5c5c"),
    input: raw("#33343a"),
    ring: raw("#ffff")
  },
  fonts: {
    body: "Space Grotesk, ui-sans-serif, sans-serif, system-ui",
    heading: "Space Grotesk, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0rem"
});

// src/themes/community/community-orio-design-system-cmm1ri.ts
var communityOrioDesignSystemCmm1riTheme = defineTheme({
  name: "community-orio-design-system-cmm1ri",
  label: "Orio Design System",
  _sourceName: "Orio Design System",
  category: "Community",
  light: {
    background: raw("#f4f2f0"),
    foreground: raw("#000000"),
    card: raw("#ffffff"),
    cardForeground: raw("#000000"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#000000"),
    primary: raw("#c4b1f9"),
    primaryForeground: raw("#000000"),
    secondary: raw("#000000"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#ffffff"),
    mutedForeground: raw("#000000"),
    accent: raw("#000000"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ff1624"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e3e3e3"),
    input: raw("#ffffff"),
    ring: raw("#ffffff")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#e6e9eb"),
    card: raw("#16171d"),
    cardForeground: raw("#d9d9d9"),
    popover: raw("#000000"),
    popoverForeground: raw("#e6e9eb"),
    primary: raw("#0d9fff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#eff3f5"),
    secondaryForeground: raw("#101a23"),
    muted: raw("#181818"),
    mutedForeground: raw("#70767c"),
    accent: raw("#011d32"),
    accentForeground: raw("#0d9fff"),
    destructive: raw("#ff1624"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#232629"),
    input: raw("#1d3041"),
    ring: raw("#10a4ff")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "0.775rem"
});

// src/themes/community/community-roboto-modern-cmlwxa.ts
var communityRobotoModernCmlwxaTheme = defineTheme({
  name: "community-roboto-modern-cmlwxa",
  label: "Roboto Modern",
  _sourceName: "roboto_modern",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0f1624"),
    card: raw("#ffffff"),
    cardForeground: raw("#0f1624"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0f1624"),
    primary: raw("#bc5d27"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#425e5e"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#bbc1cc"),
    mutedForeground: raw("#565b66"),
    accent: raw("#eeeeee"),
    accentForeground: raw("#0f1624"),
    destructive: raw("#e21313"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#b1b7c3"),
    input: raw("#b1b7c3"),
    ring: raw("#bc5d27")
  },
  dark: {
    background: raw("#1a181b"),
    foreground: raw("#c1c1c1"),
    card: raw("#121212"),
    cardForeground: raw("#c1c1c1"),
    popover: raw("#1a181b"),
    popoverForeground: raw("#c1c1c1"),
    primary: raw("#dc651f"),
    primaryForeground: raw("#1a181b"),
    secondary: raw("#4c6c6c"),
    secondaryForeground: raw("#1a181b"),
    muted: raw("#222222"),
    mutedForeground: raw("#888888"),
    accent: raw("#333333"),
    accentForeground: raw("#c1c1c1"),
    destructive: raw("#4c6c6c"),
    destructiveForeground: raw("#1a181b"),
    border: raw("#222222"),
    input: raw("#222222"),
    ring: raw("#dc651f")
  },
  fonts: {
    body: "Roboto, ui-sans-serif, sans-serif, system-ui",
    heading: "serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-1-cmlwi5.ts
var community1Cmlwi5Theme = defineTheme({
  name: "community-1-cmlwi5",
  label: "Cobalt Vista",
  _sourceName: "1 ",
  category: "Community",
  light: {
    background: raw("hsl(35, 30%, 98%)"),
    foreground: raw("hsl(25, 25%, 15%)"),
    card: raw("hsl(35, 40%, 99%)"),
    cardForeground: raw("hsl(25, 25%, 15%)"),
    popover: raw("hsl(35, 40%, 99%)"),
    popoverForeground: raw("hsl(25, 25%, 15%)"),
    primary: raw("hsl(38, 95%, 48%)"),
    primaryForeground: raw("hsl(35, 30%, 98%)"),
    secondary: raw("hsl(145, 25%, 35%)"),
    secondaryForeground: raw("hsl(35, 30%, 98%)"),
    muted: raw("hsl(35, 20%, 92%)"),
    mutedForeground: raw("hsl(25, 10%, 45%)"),
    accent: raw("hsl(155, 30%, 90%)"),
    accentForeground: raw("hsl(155, 40%, 25%)"),
    destructive: raw("hsl(0, 60%, 45%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(30, 15%, 85%)"),
    input: raw("hsl(30, 15%, 85%)"),
    ring: raw("hsl(38, 95%, 48%)")
  },
  dark: {
    background: raw("hsl(25, 20%, 8%)"),
    foreground: raw("hsl(35, 25%, 90%)"),
    card: raw("hsl(25, 20%, 10%)"),
    cardForeground: raw("hsl(35, 25%, 90%)"),
    popover: raw("hsl(25, 20%, 10%)"),
    popoverForeground: raw("hsl(35, 25%, 90%)"),
    primary: raw("hsl(42, 90%, 55%)"),
    primaryForeground: raw("hsl(25, 20%, 5%)"),
    secondary: raw("hsl(145, 20%, 45%)"),
    secondaryForeground: raw("hsl(35, 25%, 95%)"),
    muted: raw("hsl(25, 15%, 15%)"),
    mutedForeground: raw("hsl(35, 10%, 65%)"),
    accent: raw("hsl(165, 30%, 18%)"),
    accentForeground: raw("hsl(165, 40%, 85%)"),
    destructive: raw("hsl(0, 65%, 55%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(25, 15%, 20%)"),
    input: raw("hsl(25, 15%, 20%)"),
    ring: raw("hsl(42, 90%, 55%)")
  },
  fonts: {
    body: '"Plus Jakarta Sans", sans-serif',
    heading: '"Cormorant Garamond", serif'
  },
  radius: "0.6rem"
});

// src/themes/community/community-aldo-rebelo-admin-cmlwgg.ts
var communityAldoRebeloAdminCmlwggTheme = defineTheme({
  name: "community-aldo-rebelo-admin-cmlwgg",
  label: "Aldo Rebelo Admin",
  _sourceName: "Aldo Rebelo Admin",
  category: "Community",
  light: {
    background: raw("oklch(0.9994 0.0026 106.45)"),
    foreground: raw("oklch(0.3097 0.0251 241.69)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.3097 0.0251 241.69)"),
    popover: raw("oklch(0.9994 0.0026 106.45)"),
    popoverForeground: raw("oklch(0.3097 0.0251 241.69)"),
    primary: raw("oklch(0.5105 0.1218 31.38)"),
    primaryForeground: raw("oklch(0.9994 0.0026 106.45)"),
    secondary: raw("oklch(0.9488 0.0266 74.76)"),
    secondaryForeground: raw("oklch(0.5105 0.1218 31.38)"),
    muted: raw("oklch(0.98 0.02 74.75)"),
    mutedForeground: raw("oklch(0.3097 0.0251 241.69)"),
    accent: raw("oklch(0.9255 0.0315 27.42)"),
    accentForeground: raw("oklch(0.5105 0.1218 31.38)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.9488 0.0266 74.76)"),
    input: raw("oklch(0.9488 0.0266 74.76)"),
    ring: raw("oklch(0.5105 0.1218 31.38)")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("oklch(0.985 0 0)"),
    card: raw("oklch(0.205 0 0)"),
    cardForeground: raw("oklch(0.985 0 0)"),
    popover: raw("oklch(0.269 0 0)"),
    popoverForeground: raw("oklch(0.985 0 0)"),
    primary: raw("oklch(0.922 0 0)"),
    primaryForeground: raw("oklch(0.205 0 0)"),
    secondary: raw("oklch(0.269 0 0)"),
    secondaryForeground: raw("oklch(0.985 0 0)"),
    muted: raw("oklch(0.269 0 0)"),
    mutedForeground: raw("oklch(0.708 0 0)"),
    accent: raw("oklch(0.371 0 0)"),
    accentForeground: raw("oklch(0.985 0 0)"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("oklch(0.275 0 0)"),
    input: raw("oklch(0.325 0 0)"),
    ring: raw("oklch(0.556 0 0)")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.725rem"
});

// src/themes/community/community-purple-popins-cmlvfb.ts
var communityPurplePopinsCmlvfbTheme = defineTheme({
  name: "community-purple-popins-cmlvfb",
  label: "Purple Poppins",
  _sourceName: "Purple Popins",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#7033ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#edf0f4"),
    secondaryForeground: raw("#080808"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#e2ebff"),
    accentForeground: raw("#1e69dc"),
    destructive: raw("#e54b4f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#000000")
  },
  dark: {
    background: raw("#1a1b1e"),
    foreground: raw("#f0f0f0"),
    card: raw("#222327"),
    cardForeground: raw("#f0f0f0"),
    popover: raw("#222327"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#8c5cff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#2a2c33"),
    secondaryForeground: raw("#f0f0f0"),
    muted: raw("#2a2c33"),
    mutedForeground: raw("#a0a0a0"),
    accent: raw("#1e293b"),
    accentForeground: raw("#79c0ff"),
    destructive: raw("#f87171"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#33353a"),
    input: raw("#33353a"),
    ring: raw("#8c5cff")
  },
  fonts: {
    body: "Poppins, ui-sans-serif, sans-serif, system-ui",
    heading: "Lora, serif"
  },
  radius: "1.4rem"
});

// src/themes/community/community-test-cmlpfc.ts
var communityTestCmlpfcTheme = defineTheme({
  name: "community-test-cmlpfc",
  label: "Test",
  _sourceName: "test",
  category: "Community",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("#1a1a1a"),
    card: raw("#fdfdfc"),
    cardForeground: raw("#1f1f1f"),
    popover: raw("#fdfdfc"),
    popoverForeground: raw("#1f1f1f"),
    primary: raw("#f3bc16"),
    primaryForeground: raw("#383838"),
    secondary: raw("oklch(0.97 0 0)"),
    secondaryForeground: raw("#262626"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("#595959"),
    accent: raw("oklch(0.97 0 0)"),
    accentForeground: raw("#886807"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("#ffffff"),
    border: raw("oklch(0.922 0 0)"),
    input: raw("#dcd9d0"),
    ring: raw("#f3bc16")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("#ebebeb"),
    card: raw("#141414"),
    cardForeground: raw("#ebebeb"),
    popover: raw("#1a1a1a"),
    popoverForeground: raw("#ebebeb"),
    primary: raw("#f3bc16"),
    primaryForeground: raw("#000000"),
    secondary: raw("oklch(0.269 0 0)"),
    secondaryForeground: raw("#ebebeb"),
    muted: raw("oklch(0.269 0 0)"),
    mutedForeground: raw("#999999"),
    accent: raw("#ffeebd"),
    accentForeground: raw("#141414"),
    destructive: raw("#ff2e2e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#212121"),
    input: raw("#383838"),
    ring: raw("#f3bc16")
  },
  fonts: {
    body: "Plus Jakarta Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "Bricolage Grotesque, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0rem"
});

// src/themes/community/community-palm-cmlotm.ts
var communityPalmCmlotmTheme = defineTheme({
  name: "community-palm-cmlotm",
  label: "Palm",
  _sourceName: "Palm",
  category: "Community",
  light: {
    background: raw("#fff9f6"),
    foreground: raw("#28150c"),
    card: raw("#ffffff"),
    cardForeground: raw("#28150c"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#28150c"),
    primary: raw("#c83600"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffe6d1"),
    secondaryForeground: raw("#28150c"),
    muted: raw("#ffeee8"),
    mutedForeground: raw("#735e56"),
    accent: raw("#ffd1c5"),
    accentForeground: raw("#321a14"),
    destructive: raw("#d40924"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#edd5cc"),
    input: raw("#edd5cc"),
    ring: raw("#c83600")
  },
  dark: {
    background: raw("#0a0403"),
    foreground: raw("#f4ede9"),
    card: raw("#150a06"),
    cardForeground: raw("#f4ede9"),
    popover: raw("#0f0704"),
    popoverForeground: raw("#f4ede9"),
    primary: raw("#ff8435"),
    primaryForeground: raw("#120805"),
    secondary: raw("#241711"),
    secondaryForeground: raw("#f4ede9"),
    muted: raw("#1e130e"),
    mutedForeground: raw("#9d8b83"),
    accent: raw("#3c2117"),
    accentForeground: raw("#f4ede9"),
    destructive: raw("#e62b34"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#2e201a"),
    input: raw("#2e201a"),
    ring: raw("#ff8435")
  },
  fonts: {
    body: "'Outfit', system-ui, sans-serif",
    heading: "'Playfair Display', Georgia, serif"
  },
  radius: "1.0rem"
});

// src/themes/community/community-black-and-pink-cmliek.ts
var communityBlackAndPinkCmliekTheme = defineTheme({
  name: "community-black-and-pink-cmliek",
  label: "Black And Pink",
  _sourceName: "Black and pink ",
  category: "Community",
  light: {
    background: raw("#000000"),
    foreground: raw("#ffffff"),
    card: raw("#000000"),
    cardForeground: raw("#ffffff"),
    popover: raw("#000000"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#ff00c8"),
    primaryForeground: raw("#000000"),
    secondary: raw("#222222"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#111111"),
    mutedForeground: raw("#aaaaaa"),
    accent: raw("#ff00c8"),
    accentForeground: raw("#000000"),
    destructive: raw("#ff3d00"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#333333"),
    input: raw("#1a1a1a"),
    ring: raw("#ff00c8")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#ffffff"),
    card: raw("#000000"),
    cardForeground: raw("#ffffff"),
    popover: raw("#000000"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#ff00c8"),
    primaryForeground: raw("#000000"),
    secondary: raw("#222222"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#111111"),
    mutedForeground: raw("#aaaaaa"),
    accent: raw("#ff00c8"),
    accentForeground: raw("#000000"),
    destructive: raw("#ff3d00"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#333333"),
    input: raw("#1a1a1a"),
    ring: raw("#ff00c8")
  },
  fonts: {
    body: "Outfit, sans-serif",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-sesi-theme-2-cmmmkb.ts
var communitySesiTheme2CmmmkbTheme = defineTheme({
  name: "community-sesi-theme-2-cmmmkb",
  label: "SESI THEME 2",
  _sourceName: "SESI THEME 2",
  category: "Community",
  light: {
    background: raw("#FFFFFF"),
    foreground: raw("#0F172A"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#0F172A"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#0F172A"),
    primary: raw("#194391"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#DCE6F9"),
    secondaryForeground: raw("#194391"),
    muted: raw("#F1F5F9"),
    mutedForeground: raw("#64748B"),
    accent: raw("#F1F5F9"),
    accentForeground: raw("#194391"),
    destructive: raw("#EF4444"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#E2E8F0"),
    input: raw("#ffffff"),
    ring: raw("#194391")
  },
  dark: {
    background: raw("#0F172A"),
    foreground: raw("#F8FAFC"),
    card: raw("#1E293B"),
    cardForeground: raw("#F8FAFC"),
    popover: raw("#0F172A"),
    popoverForeground: raw("#F8FAFC"),
    primary: raw("#194391"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#1E293B"),
    secondaryForeground: raw("#DCE6F9"),
    muted: raw("#1E293B"),
    mutedForeground: raw("#94A3B8"),
    accent: raw("#1E293B"),
    accentForeground: raw("#DCE6F9"),
    destructive: raw("#7F1D1D"),
    destructiveForeground: raw("#F8FAFC"),
    border: raw("#334155"),
    input: raw("#334155"),
    ring: raw("#194391")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-black-cmmls5.ts
var communityBlackCmmls5Theme = defineTheme({
  name: "community-black-cmmls5",
  label: "Black",
  _sourceName: "Black",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#19191a"),
    card: raw("#ffffff"),
    cardForeground: raw("#19191a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#19191a"),
    primary: raw("#19191a"),
    primaryForeground: raw("#fafafa"),
    secondary: raw("#f5f5f5"),
    secondaryForeground: raw("#19191a"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#737373"),
    accent: raw("#f5f5f5"),
    accentForeground: raw("#19191a"),
    destructive: raw("#cf1000"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e5e5"),
    input: raw("#e5e5e5"),
    ring: raw("#a1a1a1")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#ffffff"),
    card: raw("#000000"),
    cardForeground: raw("#ffffff"),
    popover: raw("#000000"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#ffffff"),
    primaryForeground: raw("#000000"),
    secondary: raw("#111111"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#111111"),
    mutedForeground: raw("#a1a1a1"),
    accent: raw("#111111"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ff3700"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#111111"),
    input: raw("#111111"),
    ring: raw("#111111")
  },
  fonts: {
    body: "Nunito, ui-sans-serif, sans-serif, system-ui",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-lastchat-cmmi2x.ts
var communityLastchatCmmi2xTheme = defineTheme({
  name: "community-lastchat-cmmi2x",
  label: "Lastchat",
  _sourceName: "LastChat",
  category: "Community",
  light: {
    background: raw("#e9e4d8"),
    foreground: raw("#1e1e1e"),
    card: raw("#f4efe4"),
    cardForeground: raw("#1e1e1e"),
    popover: raw("#f4efe4"),
    popoverForeground: raw("#1e1e1e"),
    primary: raw("#2e2e2e"),
    primaryForeground: raw("#e6e4d7"),
    secondary: raw("#d8d2c4"),
    secondaryForeground: raw("#2e2e2e"),
    muted: raw("#cfc8b8"),
    mutedForeground: raw("#5e5a52"),
    accent: raw("#e6e4d7"),
    accentForeground: raw("#2e2e2e"),
    destructive: raw("#dc2626"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d2cbbb"),
    input: raw("#d2cbbb"),
    ring: raw("#2e2e2e")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#c2c2c2"),
    card: raw("#1c1c1c"),
    cardForeground: raw("#e8e3da"),
    popover: raw("#1c1c1c"),
    popoverForeground: raw("#e8e3da"),
    primary: raw("#375758"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#363636"),
    secondaryForeground: raw("#c2c0b2"),
    muted: raw("#080808"),
    mutedForeground: raw("#8e8a83"),
    accent: raw("#363636"),
    accentForeground: raw("#d1cfc0"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#121212"),
    input: raw("#454545"),
    ring: raw("#666666")
  },
  fonts: {
    body: "Google Sans Flex, ui-sans-serif, sans-serif, system-ui",
    heading: "Google Sans Flex, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "1rem"
});

// src/themes/community/community-sandstone-cmmi1p.ts
var communitySandstoneCmmi1pTheme = defineTheme({
  name: "community-sandstone-cmmi1p",
  label: "Sandstone",
  _sourceName: "Sandstone",
  category: "Community",
  light: {
    background: raw("#f8f8f7"),
    foreground: raw("#1d1d1b"),
    card: raw("#ffffff"),
    cardForeground: raw("#1d1d1b"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1d1d1b"),
    primary: raw("#2c2c2c"),
    primaryForeground: raw("#f8f8f7"),
    secondary: raw("#f5f5f0"),
    secondaryForeground: raw("#3d3d38"),
    muted: raw("#f6f3ee"),
    mutedForeground: raw("#6e6e68"),
    accent: raw("#ffd061"),
    accentForeground: raw("#2c2c2c"),
    destructive: raw("#db3837"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e4dd"),
    input: raw("#e7e4dd"),
    ring: raw("#ffd061")
  },
  dark: {
    background: raw("#1a1a19"),
    foreground: raw("#eeeeec"),
    card: raw("#1b1b19"),
    cardForeground: raw("#eeeeec"),
    popover: raw("#1b1b19"),
    popoverForeground: raw("#eeeeec"),
    primary: raw("#eeeeec"),
    primaryForeground: raw("#1a1a19"),
    secondary: raw("#272725"),
    secondaryForeground: raw("#bbbbb5"),
    muted: raw("#272725"),
    mutedForeground: raw("#8d8d85"),
    accent: raw("#c4972a"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#df4343"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#2e2e2b"),
    input: raw("#2e2e2b"),
    ring: raw("#c4972a")
  },
  fonts: {
    body: "DM Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "DM Serif Text, ui-serif, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-iconic-terminal-cmmhiu.ts
var communityIconicTerminalCmmhiuTheme = defineTheme({
  name: "community-iconic-terminal-cmmhiu",
  label: "Iconic Terminal",
  _sourceName: "iconic terminal",
  category: "Community",
  light: {
    background: raw("hsl(160 30% 98%)"),
    foreground: raw("hsl(160 84% 10%)"),
    card: raw("hsl(160 30% 96%)"),
    cardForeground: raw("hsl(160 84% 10%)"),
    popover: raw("hsl(160 30% 96%)"),
    popoverForeground: raw("hsl(160 84% 10%)"),
    primary: raw("hsl(160 84% 35%)"),
    primaryForeground: raw("hsl(160 100% 98%)"),
    secondary: raw("hsl(160 20% 90%)"),
    secondaryForeground: raw("hsl(160 84% 20%)"),
    muted: raw("hsl(160 10% 90%)"),
    mutedForeground: raw("hsl(160 10% 40%)"),
    accent: raw("hsl(160 40% 88%)"),
    accentForeground: raw("hsl(160 84% 25%)"),
    destructive: raw("hsl(0 84% 60%)"),
    destructiveForeground: raw("hsl(0 0% 98%)"),
    border: raw("hsl(160 40% 80%)"),
    input: raw("hsl(160 40% 85%)"),
    ring: raw("hsl(160 84% 35%)")
  },
  dark: {
    background: raw("hsl(160 50% 2%)"),
    foreground: raw("hsl(160 84% 45%)"),
    card: raw("hsl(160 50% 4%)"),
    cardForeground: raw("hsl(160 84% 45%)"),
    popover: raw("hsl(160 50% 3%)"),
    popoverForeground: raw("hsl(160 84% 45%)"),
    primary: raw("hsl(160 84% 45%)"),
    primaryForeground: raw("hsl(160 50% 2%)"),
    secondary: raw("hsl(160 40% 10%)"),
    secondaryForeground: raw("hsl(160 84% 45%)"),
    muted: raw("hsl(160 40% 8%)"),
    mutedForeground: raw("hsl(160 40% 30%)"),
    accent: raw("hsl(160 40% 15%)"),
    accentForeground: raw("hsl(160 84% 50%)"),
    destructive: raw("hsl(0 62% 35%)"),
    destructiveForeground: raw("hsl(0 0% 98%)"),
    border: raw("hsl(160 84% 20%)"),
    input: raw("hsl(160 84% 15%)"),
    ring: raw("hsl(160 84% 45%)")
  },
  fonts: {
    body: "JetBrains Mono, monospace",
    heading: "Georgia, serif"
  },
  radius: "0rem"
});

// src/themes/community/community-sulav-theme-cmmf66.ts
var communitySulavThemeCmmf66Theme = defineTheme({
  name: "community-sulav-theme-cmmf66",
  label: "Sulav Theme",
  _sourceName: "sulav-theme",
  category: "Community",
  light: {
    background: raw("hsl(40, 44%, 96%)"),
    foreground: raw("hsl(25, 20%, 20%)"),
    card: raw("hsl(40, 44%, 98%)"),
    cardForeground: raw("hsl(25, 20%, 20%)"),
    popover: raw("hsl(40, 44%, 96%)"),
    popoverForeground: raw("hsl(25, 20%, 20%)"),
    primary: raw("hsl(145, 30%, 45%)"),
    primaryForeground: raw("hsl(40, 44%, 98%)"),
    secondary: raw("oklch(0.609 0.126 221.723)"),
    secondaryForeground: raw("hsl(25, 30%, 25%)"),
    muted: raw("hsl(40, 20%, 90%)"),
    mutedForeground: raw("hsl(25, 10%, 45%)"),
    accent: raw("hsl(15, 65%, 90%)"),
    accentForeground: raw("hsl(15, 60%, 30%)"),
    destructive: raw("hsl(0, 55%, 55%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(35, 30%, 85%)"),
    input: raw("hsl(35, 30%, 90%)"),
    ring: raw("hsl(145, 30%, 45%)")
  },
  dark: {
    background: raw("hsl(220, 25%, 12%)"),
    foreground: raw("hsl(40, 30%, 92%)"),
    card: raw("hsl(220, 25%, 15%)"),
    cardForeground: raw("hsl(40, 30%, 92%)"),
    popover: raw("hsl(220, 25%, 12%)"),
    popoverForeground: raw("hsl(40, 30%, 92%)"),
    primary: raw("hsl(155, 35%, 45%)"),
    primaryForeground: raw("hsl(220, 25%, 10%)"),
    secondary: raw("hsl(210, 20%, 25%)"),
    secondaryForeground: raw("hsl(40, 30%, 90%)"),
    muted: raw("hsl(220, 20%, 20%)"),
    mutedForeground: raw("hsl(215, 15%, 70%)"),
    accent: raw("hsl(170, 30%, 25%)"),
    accentForeground: raw("hsl(170, 30%, 90%)"),
    destructive: raw("hsl(0, 60%, 45%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(220, 20%, 25%)"),
    input: raw("hsl(220, 20%, 20%)"),
    ring: raw("hsl(155, 35%, 45%)")
  },
  fonts: {
    body: "Quicksand, Inter, sans-serif",
    heading: "Libre Baskerville, Georgia, serif"
  },
  radius: "0.8rem"
});

// src/themes/community/community-oikwee-cmmb8l.ts
var communityOikweeCmmb8lTheme = defineTheme({
  name: "community-oikwee-cmmb8l",
  label: "Oikwee",
  _sourceName: "oikwee",
  category: "Community",
  light: {
    background: raw("#f0f4f2"),
    foreground: raw("#1f2e24"),
    card: raw("#f2f2f2"),
    cardForeground: raw("#141f18"),
    popover: raw("#ededed"),
    popoverForeground: raw("#141f18"),
    primary: raw("#367d50"),
    primaryForeground: raw("#f9fafa"),
    secondary: raw("#a17045"),
    secondaryForeground: raw("#fafaf9"),
    muted: raw("#e7eee7"),
    mutedForeground: raw("#4c6756"),
    accent: raw("#d5ddd8"),
    accentForeground: raw("#1f2e24"),
    destructive: raw("#a14545"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#d1d1d1"),
    input: raw("#e3e8e5"),
    ring: raw("#367d50")
  },
  dark: {
    background: raw("#070503"),
    foreground: raw("#d6d6d6"),
    card: raw("#100d08"),
    cardForeground: raw("#dee3e0"),
    popover: raw("#0b0905"),
    popoverForeground: raw("#cbe6d5"),
    primary: raw("#45a167"),
    primaryForeground: raw("#040302"),
    secondary: raw("#81542c"),
    secondaryForeground: raw("#d9d9d9"),
    muted: raw("#1e1a14"),
    mutedForeground: raw("#928f8a"),
    accent: raw("#222a25"),
    accentForeground: raw("#cbe6d5"),
    destructive: raw("#ac3939"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#2f281b"),
    input: raw("#1a150e"),
    ring: raw("#45a167")
  },
  fonts: {
    body: "Inter, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "0.625rem"
});

// src/themes/community/community-ibk-theme-cmmb5d.ts
var communityIbkThemeCmmb5dTheme = defineTheme({
  name: "community-ibk-theme-cmmb5d",
  label: "IBK Theme",
  _sourceName: "IBK theme ",
  category: "Community",
  light: {
    background: raw("#f5f5ff"),
    foreground: raw("#2a2a4a"),
    card: raw("#ffffff"),
    cardForeground: raw("#2a2a4a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#2a2a4a"),
    primary: raw("#6e56cf"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e4dfff"),
    secondaryForeground: raw("#4a4080"),
    muted: raw("#f0f0fa"),
    mutedForeground: raw("#6c6c8a"),
    accent: raw("#d8e6ff"),
    accentForeground: raw("#2a2a4a"),
    destructive: raw("#ff5470"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e0e0f0"),
    input: raw("#e0e0f0"),
    ring: raw("#6e56cf")
  },
  dark: {
    background: raw("oklch(0.938 0.127 124.321)"),
    foreground: raw("oklch(0.532 0.157 131.589)"),
    card: raw("oklch(0.938 0.127 124.321)"),
    cardForeground: raw("oklch(0.274 0.072 132.109)"),
    popover: raw("oklch(0.967 0.067 122.328)"),
    popoverForeground: raw("#e2e2f5"),
    primary: raw("oklch(0.938 0.127 124.321)"),
    primaryForeground: raw("oklch(0.532 0.157 131.589)"),
    secondary: raw("oklch(0.967 0.067 122.328)"),
    secondaryForeground: raw("oklch(0.723 0.219 149.579)"),
    muted: raw("oklch(0.266 0.065 152.934)"),
    mutedForeground: raw("#a0a0c0"),
    accent: raw("oklch(0.648 0.2 131.684)"),
    accentForeground: raw("oklch(0.897 0.196 126.665)"),
    destructive: raw("oklch(0.453 0 .124 130.933)"),
    destructiveForeground: raw("#ffffff"),
    border: raw("oklch(0.627 0.194 149.214)"),
    input: raw("#303052"),
    ring: raw("#a48fff")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-blue-orange-cmm5x6.ts
var communityBlueOrangeCmm5x6Theme = defineTheme({
  name: "community-blue-orange-cmm5x6",
  label: "Blue Orange",
  _sourceName: "blue-orange",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#1e293b"),
    card: raw("#ffffff"),
    cardForeground: raw("#1e293b"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1e293b"),
    primary: raw("#0f172a"),
    primaryForeground: raw("#f8fafc"),
    secondary: raw("#f97316"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#f1f5f9"),
    mutedForeground: raw("#64748b"),
    accent: raw("#fff7ed"),
    accentForeground: raw("#f97316"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#f8fafc"),
    border: raw("#e2e8f0"),
    input: raw("#e2e8f0"),
    ring: raw("#1e293b")
  },
  dark: {
    background: raw("#0f172a"),
    foreground: raw("#f8fafc"),
    card: raw("#1e293b"),
    cardForeground: raw("#f8fafc"),
    popover: raw("#1e293b"),
    popoverForeground: raw("#f8fafc"),
    primary: raw("#f8fafc"),
    primaryForeground: raw("#0f172a"),
    secondary: raw("#f97316"),
    secondaryForeground: raw("#0f172a"),
    muted: raw("#334155"),
    mutedForeground: raw("#94a3b8"),
    accent: raw("#f97316"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#f8fafc"),
    border: raw("#334155"),
    input: raw("#334155"),
    ring: raw("#f97316")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-retro-cmm2d5.ts
var communityRetroCmm2d5Theme = defineTheme({
  name: "community-retro-cmm2d5",
  label: "Retro",
  _sourceName: "retro",
  category: "Community",
  light: {
    background: raw("#fff"),
    foreground: raw("#000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#fffd33"),
    primaryForeground: raw("#000"),
    secondary: raw("#000"),
    secondaryForeground: raw("#fff"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#faf983"),
    accentForeground: raw("#000"),
    destructive: raw("#e5614b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#000"),
    input: raw("#ebebeb"),
    ring: raw("#000000")
  },
  dark: {
    background: raw("#1a1a1e"),
    foreground: raw("#f0f0f0"),
    card: raw("#222227"),
    cardForeground: raw("#f0f0f0"),
    popover: raw("#222227"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#a75cff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#2a2b33"),
    secondaryForeground: raw("#f0f0f0"),
    muted: raw("#2a2b33"),
    mutedForeground: raw("#a0a0a0"),
    accent: raw("#1e243b"),
    accentForeground: raw("#79aaff"),
    destructive: raw("#f88771"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#33343a"),
    input: raw("#33343a"),
    ring: raw("#a75cff")
  },
  fonts: {
    body: "Space Grotesk, ui-sans-serif, sans-serif, system-ui",
    heading: "Space Grotesk, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0rem"
});

// src/themes/community/community-domia-cmlz4g.ts
var communityDomiaCmlz4gTheme = defineTheme({
  name: "community-domia-cmlz4g",
  label: "DOMIA",
  _sourceName: "DOMIA",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0f1419"),
    card: raw("#f7f8f8"),
    cardForeground: raw("#0f1419"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0f1419"),
    primary: raw("#ba00bd"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#0f1419"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#E5E5E6"),
    mutedForeground: raw("#0f1419"),
    accent: raw("#E3ECF6"),
    accentForeground: raw("#ba00bd"),
    destructive: raw("#f4212e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e1eaef"),
    input: raw("#f7f9fa"),
    ring: raw("#ba00bd")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#e7e9ea"),
    card: raw("#17181c"),
    cardForeground: raw("#d9d9d9"),
    popover: raw("#000000"),
    popoverForeground: raw("#e7e9ea"),
    primary: raw("#ba00bd"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f0f3f4"),
    secondaryForeground: raw("#0f1419"),
    muted: raw("#181818"),
    mutedForeground: raw("#72767a"),
    accent: raw("#061622"),
    accentForeground: raw("#ba00bd"),
    destructive: raw("#f4212e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#242628"),
    input: raw("#2b153c"),
    ring: raw("#ba00bd")
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1.3rem"
});

// src/themes/community/community-purple-soft-popins-cmlwku.ts
var communityPurpleSoftPopinsCmlwkuTheme = defineTheme({
  name: "community-purple-soft-popins-cmlwku",
  label: "Purple Soft Poppins",
  _sourceName: "Purple Soft Popins",
  category: "Community",
  light: {
    background: raw("hsl(210, 40%, 98%)"),
    foreground: raw("hsl(224, 71%, 4%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(224, 71%, 4%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(224, 71%, 4%)"),
    primary: raw("hsl(263, 70%, 50%)"),
    primaryForeground: raw("hsl(210, 40%, 98%)"),
    secondary: raw("hsl(263, 20%, 94%)"),
    secondaryForeground: raw("hsl(263, 70%, 30%)"),
    muted: raw("hsl(220, 14%, 96%)"),
    mutedForeground: raw("hsl(220, 9%, 46%)"),
    accent: raw("hsl(263, 80%, 96%)"),
    accentForeground: raw("hsl(263, 70%, 50%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(220, 13%, 91%)"),
    input: raw("hsl(220, 13%, 91%)"),
    ring: raw("hsl(263, 70%, 50%)")
  },
  dark: {
    background: raw("hsl(260, 25%, 2%)"),
    foreground: raw("hsl(210, 40%, 98%)"),
    card: raw("hsl(260, 25%, 4%)"),
    cardForeground: raw("hsl(210, 40%, 98%)"),
    popover: raw("hsl(260, 25%, 5%)"),
    popoverForeground: raw("hsl(210, 40%, 98%)"),
    primary: raw("hsl(263, 85%, 65%)"),
    primaryForeground: raw("hsl(260, 25%, 2%)"),
    secondary: raw("hsl(263, 40%, 15%)"),
    secondaryForeground: raw("hsl(263, 85%, 85%)"),
    muted: raw("hsl(260, 20%, 12%)"),
    mutedForeground: raw("hsl(260, 10%, 70%)"),
    accent: raw("hsl(263, 60%, 15%)"),
    accentForeground: raw("hsl(263, 85%, 65%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(260, 20%, 15%)"),
    input: raw("hsl(260, 20%, 15%)"),
    ring: raw("hsl(263, 85%, 65%)")
  },
  fonts: {
    body: "Poppins, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "1rem"
});

// src/themes/community/community-flat-pink-2-cmlieo.ts
var communityFlatPink2CmlieoTheme = defineTheme({
  name: "community-flat-pink-2-cmlieo",
  label: "Flat Pink 2",
  _sourceName: "Flat pink 2",
  category: "Community",
  light: {
    background: raw("#fcfcfc"),
    foreground: raw("oklch(0 0 0)"),
    card: raw("#fcfcfc"),
    cardForeground: raw("oklch(0 0 0)"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("oklch(0 0 0)"),
    primary: raw("oklch(0 0 0)"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ebebeb"),
    secondaryForeground: raw("oklch(0 0 0)"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#525252"),
    accent: raw("#ebebeb"),
    accentForeground: raw("oklch(0 0 0)"),
    destructive: raw("#4b4fe5"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e4e4e4"),
    input: raw("#ebebeb"),
    ring: raw("oklch(0 0 0)")
  },
  dark: {
    background: raw("oklch(0 0 0)"),
    foreground: raw("#ffffff"),
    card: raw("oklch(0 0 0)"),
    cardForeground: raw("#ffffff"),
    popover: raw("oklch(0 0 0)"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#7c0051"),
    primaryForeground: raw("oklch(0 0 0)"),
    secondary: raw("#222222"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#1d1d1d"),
    mutedForeground: raw("#a4a4a4"),
    accent: raw("#333333"),
    accentForeground: raw("#5200ce"),
    destructive: raw("#5b5bff"),
    destructiveForeground: raw("oklch(0 0 0)"),
    border: raw("#242424"),
    input: raw("#333333"),
    ring: raw("#a4a4a4")
  },
  fonts: {
    body: "Geist, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-limes-cmliem.ts
var communityLimesCmliemTheme = defineTheme({
  name: "community-limes-cmliem",
  label: "Limes",
  _sourceName: "Limes",
  category: "Community",
  light: {
    background: raw("oklch(0.99 0 0)"),
    foreground: raw("oklch(0 0 0)"),
    card: raw("oklch(0.99 0 0)"),
    cardForeground: raw("oklch(0 0 0)"),
    popover: raw("oklch(0.99 0 0)"),
    popoverForeground: raw("oklch(0 0 0)"),
    primary: raw("oklch(0 0 0)"),
    primaryForeground: raw("oklch(1.00 0 0)"),
    secondary: raw("oklch(0.94 0 0)"),
    secondaryForeground: raw("oklch(0 0 0)"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("oklch(0.44 0 0)"),
    accent: raw("oklch(0.94 0 0)"),
    accentForeground: raw("oklch(0 0 0)"),
    destructive: raw("oklch(0.63 0.19 23.03)"),
    destructiveForeground: raw("oklch(1.00 0 0)"),
    border: raw("oklch(0.92 0 0)"),
    input: raw("oklch(0.94 0 0)"),
    ring: raw("oklch(0 0 0)")
  },
  dark: {
    background: raw("oklch(0 0 0)"),
    foreground: raw("oklch(1.00 0 0)"),
    card: raw("oklch(0 0 0)"),
    cardForeground: raw("oklch(1.00 0 0)"),
    popover: raw("oklch(0 0 0)"),
    popoverForeground: raw("oklch(1.00 0 0)"),
    primary: raw("oklch(0.648 0.2 131.684)"),
    primaryForeground: raw("oklch(0 0 0)"),
    secondary: raw("oklch(0.25 0 0)"),
    secondaryForeground: raw("oklch(1.00 0 0)"),
    muted: raw("oklch(0.23 0 0)"),
    mutedForeground: raw("oklch(0.72 0 0)"),
    accent: raw("oklch(0.32 0 0)"),
    accentForeground: raw("oklch(0.646 0.222 41.116)"),
    destructive: raw("oklch(0.69 0.20 23.91)"),
    destructiveForeground: raw("oklch(0 0 0)"),
    border: raw("oklch(0.26 0 0)"),
    input: raw("oklch(0.32 0 0)"),
    ring: raw("oklch(0.72 0 0)")
  },
  fonts: {
    body: "Geist, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-carbon-ember-cmlf2h.ts
var communityCarbonEmberCmlf2hTheme = defineTheme({
  name: "community-carbon-ember-cmlf2h",
  label: "Carbon Ember",
  _sourceName: "Carbon Ember",
  category: "Community",
  light: {
    background: raw("#faf8f6"),
    foreground: raw("#1a1410"),
    card: raw("#ffffff"),
    cardForeground: raw("#1a1410"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1a1410"),
    primary: raw("#a16207"),
    primaryForeground: raw("#fefce8"),
    secondary: raw("#f0ebe4"),
    secondaryForeground: raw("#5c4620"),
    muted: raw("#f0ebe4"),
    mutedForeground: raw("#78716c"),
    accent: raw("#fef3c7"),
    accentForeground: raw("#92400e"),
    destructive: raw("#b91c1c"),
    destructiveForeground: raw("#fef2f2"),
    border: raw("#d6cfc6"),
    input: raw("#d6cfc6"),
    ring: raw("#a16207")
  },
  dark: {
    background: raw("#080604"),
    foreground: raw("#e8e0d6"),
    card: raw("#12100c"),
    cardForeground: raw("#e8e0d6"),
    popover: raw("#12100c"),
    popoverForeground: raw("#e8e0d6"),
    primary: raw("#d97706"),
    primaryForeground: raw("#1c1004"),
    secondary: raw("#211c14"),
    secondaryForeground: raw("#b8a88e"),
    muted: raw("#1a1610"),
    mutedForeground: raw("#8e806e"),
    accent: raw("#2c2010"),
    accentForeground: raw("#fbbf24"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#1a0606"),
    border: raw("#2a231a"),
    input: raw("#2a231a"),
    ring: raw("#d97706")
  },
  fonts: {
    body: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: '"Lora", "Georgia", "Times New Roman", serif'
  },
  radius: "0.375rem"
});

// src/themes/community/community-vermillion-cmmtjp.ts
var communityVermillionCmmtjpTheme = defineTheme({
  name: "community-vermillion-cmmtjp",
  label: "Vermillion",
  _sourceName: "Vermillion",
  category: "Community",
  light: {
    background: raw("#f7f8f9"),
    foreground: raw("#191b1e"),
    card: raw("#ffffff"),
    cardForeground: raw("#191b1e"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#191b1e"),
    primary: raw("#d24730"),
    primaryForeground: raw("#f7f8f9"),
    secondary: raw("#f0f2f3"),
    secondaryForeground: raw("#35383f"),
    muted: raw("#edeff1"),
    mutedForeground: raw("#838a93"),
    accent: raw("#f0f2f3"),
    accentForeground: raw("#35383f"),
    destructive: raw("#d24730"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#dfe2e5"),
    input: raw("#dfe2e5"),
    ring: raw("#d24730")
  },
  dark: {
    background: raw("#131416"),
    foreground: raw("#edeef0"),
    card: raw("#1b1d20"),
    cardForeground: raw("#edeef0"),
    popover: raw("#1b1d20"),
    popoverForeground: raw("#edeef0"),
    primary: raw("#d24730"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#24262a"),
    secondaryForeground: raw("#a8abb2"),
    muted: raw("#24262a"),
    mutedForeground: raw("#6a6f77"),
    accent: raw("#24262a"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#d24730"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#2b2e32"),
    input: raw("#2b2e32"),
    ring: raw("#d24730")
  },
  fonts: {
    body: "DM Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "DM Serif Text, ui-serif, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-intropic-mui-react-cursor-retool-cmmt51.ts
var communityIntropicMuiReactCursorRetoolCmmt51Theme = defineTheme({
  name: "community-intropic-mui-react-cursor-retool-cmmt51",
  label: "Intropic MUI React/cursor/retool",
  _sourceName: "Intropic MUI - React/Cursor/Retool",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#262626"),
    card: raw("#ffffff"),
    cardForeground: raw("#262626"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#262626"),
    primary: raw("#1400CA"),
    primaryForeground: raw("#F7F7F7"),
    secondary: raw("#1400CA"),
    secondaryForeground: raw("#F7F7F7"),
    muted: raw("#fbfcf8"),
    mutedForeground: raw("#7c8b61"),
    accent: raw("#f5ebff"),
    accentForeground: raw("#1400CA"),
    destructive: raw("#3474ff"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#bdbdbd"),
    input: raw("#78007A"),
    ring: raw("#5001ff")
  },
  dark: {
    background: raw("#121212"),
    foreground: raw("#e5e5e5"),
    card: raw("#1c1c1c"),
    cardForeground: raw("#e5e5e5"),
    popover: raw("#262626"),
    popoverForeground: raw("#e5e5e5"),
    primary: raw("#5AF5FA"),
    primaryForeground: raw("121212"),
    secondary: raw("#9e9e9e"),
    secondaryForeground: raw("#121212"),
    muted: raw("#262626"),
    mutedForeground: raw("#a3a3a3"),
    accent: raw("#5AF5FA"),
    accentForeground: raw("#121212"),
    destructive: raw("#5AF5FA"),
    destructiveForeground: raw("#f7f7f7"),
    border: raw("#595959"),
    input: raw("#404040"),
    ring: raw("#5AF5FA")
  },
  fonts: {
    body: "Space Grotesk, ui-sans-serif, sans-serif, system-ui",
    heading: "Mulish, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0.25rem"
});

// src/themes/community/community-remedy-s-control-cmmszc.ts
var communityRemedySControlCmmszcTheme = defineTheme({
  name: "community-remedy-s-control-cmmszc",
  label: "Remedys Control",
  _sourceName: "Remedy's Control",
  category: "Community",
  light: {
    background: raw("hsl(0, 0%, 82%)"),
    foreground: raw("hsl(0, 0%, 27%)"),
    card: raw("hsl(0, 0%, 78%)"),
    cardForeground: raw("hsl(0, 0%, 10%)"),
    popover: raw("hsl(0, 0%, 10%)"),
    popoverForeground: raw("hsl(0, 0%, 69%)"),
    primary: raw("hsl(0, 0%, 0%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(25, 100%, 43%)"),
    secondaryForeground: raw("hsl(0, 0%, 96%)"),
    muted: raw("hsl(0, 0%, 69%)"),
    mutedForeground: raw("hsl(0, 0%, 31%)"),
    accent: raw("hsl(173, 40%, 69%)"),
    accentForeground: raw("hsl(0, 0%, 10%)"),
    destructive: raw("hsl(357, 100%, 46%)"),
    destructiveForeground: raw("hsl(0, 0%, 96%)"),
    border: raw("hsl(0, 0%, 53%)"),
    input: raw("hsl(25, 100%, 43%)"),
    ring: raw("hsl(0, 0%, 10%)")
  },
  dark: {
    background: raw("hsl(0, 0%, 0%)"),
    foreground: raw("hsl(0, 0%, 100%)"),
    card: raw("hsl(0, 0%, 0%)"),
    cardForeground: raw("hsl(0, 0%, 100%)"),
    popover: raw("hsl(0, 0%, 10%)"),
    popoverForeground: raw("hsl(0, 0%, 100%)"),
    primary: raw("hsl(0, 0%, 100%)"),
    primaryForeground: raw("hsl(0, 0%, 0%)"),
    secondary: raw("hsl(357, 100%, 46%)"),
    secondaryForeground: raw("hsl(0, 0%, 10%)"),
    muted: raw("hsl(0, 0%, 10%)"),
    mutedForeground: raw("hsl(0, 0%, 36%)"),
    accent: raw("hsl(173, 40%, 10%)"),
    accentForeground: raw("hsl(0, 0%, 96%)"),
    destructive: raw("hsl(357, 100%, 46%)"),
    destructiveForeground: raw("hsl(0, 0%, 0%)"),
    border: raw("hsl(0, 0%, 10%)"),
    input: raw("hsl(0, 0%, 10%)"),
    ring: raw("hsl(0, 0%, 100%)")
  },
  fonts: {
    body: "Montserrat, ui-sans-serif, sans-serif, system-ui",
    heading: "Merriweather, ui-serif, serif"
  },
  radius: "0.4rem"
});

// src/themes/community/community-polaris-cmmr3s.ts
var communityPolarisCmmr3sTheme = defineTheme({
  name: "community-polaris-cmmr3s",
  label: "Polaris",
  _sourceName: "Polaris",
  category: "Community",
  light: {
    background: raw("#f5fafb"),
    foreground: raw("#081e24"),
    card: raw("#fcffff"),
    cardForeground: raw("#030d11"),
    popover: raw("#fcffff"),
    popoverForeground: raw("#030d11"),
    primary: raw("#02677f"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffb500"),
    secondaryForeground: raw("#321c04"),
    muted: raw("#e4eef0"),
    mutedForeground: raw("#5a6569"),
    accent: raw("#03a2bc"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#d3451e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d4e1e4"),
    input: raw("#b3c0c4"),
    ring: raw("#02677f")
  },
  dark: {
    background: raw("#020608"),
    foreground: raw("#d2d9da"),
    card: raw("#060e11"),
    cardForeground: raw("#d2d9da"),
    popover: raw("#060e11"),
    popoverForeground: raw("#d2d9da"),
    primary: raw("#03a2bc"),
    primaryForeground: raw("#010406"),
    secondary: raw("#eaaa2c"),
    secondaryForeground: raw("#221202"),
    muted: raw("#111d20"),
    mutedForeground: raw("#80888a"),
    accent: raw("#084150"),
    accentForeground: raw("#d6e9ec"),
    destructive: raw("#e45937"),
    destructiveForeground: raw("#eeeeee"),
    border: raw("#1e2b30"),
    input: raw("#28353a"),
    ring: raw("#008095")
  },
  fonts: {
    body: "Google Sans Flex, ui-sans-serif, sans-serif, system-ui",
    heading: "Google Sans Flex, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0px"
});

// src/themes/community/community-essw-cmmphm.ts
var communityEsswCmmphmTheme = defineTheme({
  name: "community-essw-cmmphm",
  label: "Essw",
  _sourceName: "essw",
  category: "Community",
  light: {
    background: raw("#fcfcfd"),
    foreground: raw("#09090b"),
    card: raw("#fcfcfd"),
    cardForeground: raw("#09090b"),
    popover: raw("#fcfcfd"),
    popoverForeground: raw("#09090b"),
    primary: raw("#6366f1"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f0f9ff"),
    secondaryForeground: raw("#0c4a6e"),
    muted: raw("#f4f4f5"),
    mutedForeground: raw("#71717a"),
    accent: raw("#f5f3ff"),
    accentForeground: raw("#4338ca"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e4e4e7"),
    input: raw("#e4e4e7"),
    ring: raw("#818cf8")
  },
  dark: {
    background: raw("#020617"),
    foreground: raw("#f8fafc"),
    card: raw("#020617"),
    cardForeground: raw("#f8fafc"),
    popover: raw("#020617"),
    popoverForeground: raw("#f8fafc"),
    primary: raw("#818cf8"),
    primaryForeground: raw("#000000"),
    secondary: raw("#1e293b"),
    secondaryForeground: raw("#bae6fd"),
    muted: raw("#1e293b"),
    mutedForeground: raw("#94a3b8"),
    accent: raw("#2e1065"),
    accentForeground: raw("#c4b5fd"),
    destructive: raw("#991b1b"),
    destructiveForeground: raw("#f8fafc"),
    border: raw("#1e293b"),
    input: raw("#1e293b"),
    ring: raw("#6366f1")
  },
  fonts: {
    body: "Poppins, ui-sans-serif, sans-serif, system-ui",
    heading: "PT Serif, ui-serif, serif"
  },
  radius: "0.6rem"
});

// src/themes/community/community-de-sarann-villa-cmmni6.ts
var communityDeSarannVillaCmmni6Theme = defineTheme({
  name: "community-de-sarann-villa-cmmni6",
  label: "De Sarann Villa",
  _sourceName: "De Sarann Villa",
  category: "Community",
  light: {
    background: raw("hsl(0, 0%, 98%)"),
    foreground: raw("hsl(240, 5%, 3%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(240, 5%, 3%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(240, 5%, 3%)"),
    primary: raw("hsl(346, 94%, 37%)"),
    primaryForeground: raw("hsl(0, 0%, 98%)"),
    secondary: raw("hsl(220, 10%, 90%)"),
    secondaryForeground: raw("hsl(240, 5%, 3%)"),
    muted: raw("hsl(220, 10%, 90%)"),
    mutedForeground: raw("hsl(240, 3%, 47%)"),
    accent: raw("hsl(220, 10%, 90%)"),
    accentForeground: raw("hsl(240, 5%, 3%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(220, 10%, 80%)"),
    input: raw("hsl(220, 10%, 80%)"),
    ring: raw("hsl(346, 94%, 37%)")
  },
  dark: {
    background: raw("hsl(240, 10%, 4%)"),
    foreground: raw("hsl(0, 0%, 98%)"),
    card: raw("hsl(240, 10%, 8%)"),
    cardForeground: raw("hsl(0, 0%, 98%)"),
    popover: raw("hsl(240, 10%, 8%)"),
    popoverForeground: raw("hsl(0, 0%, 98%)"),
    primary: raw("hsl(346, 94%, 37%)"),
    primaryForeground: raw("hsl(0, 0%, 98%)"),
    secondary: raw("hsl(240, 8%, 20%)"),
    secondaryForeground: raw("hsl(0, 0%, 98%)"),
    muted: raw("hsl(240, 8%, 20%)"),
    mutedForeground: raw("hsl(240, 5%, 64%)"),
    accent: raw("hsl(240, 8%, 20%)"),
    accentForeground: raw("hsl(0, 0%, 98%)"),
    destructive: raw("hsl(0, 60%, 48%)"),
    destructiveForeground: raw("hsl(0, 0%, 98%)"),
    border: raw("hsl(240, 8%, 28%)"),
    input: raw("hsl(240, 8%, 28%)"),
    ring: raw("hsl(346, 94%, 37%)")
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Lora', serif"
  },
  radius: "0.75rem"
});

// src/themes/community/community-service-hub-theme-cmmmrn.ts
var communityServiceHubThemeCmmmrnTheme = defineTheme({
  name: "community-service-hub-theme-cmmmrn",
  label: "Service Hub Theme",
  _sourceName: "Service Hub Theme",
  category: "Community",
  light: {
    background: raw("hsl(45, 30%, 98%)"),
    foreground: raw("hsl(150, 60%, 5%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(150, 60%, 5%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(150, 60%, 5%)"),
    primary: raw("hsl(142, 76%, 36%)"),
    primaryForeground: raw("hsl(45, 30%, 98%)"),
    secondary: raw("hsl(48, 96%, 53%)"),
    secondaryForeground: raw("hsl(150, 60%, 5%)"),
    muted: raw("hsl(45, 20%, 94%)"),
    mutedForeground: raw("hsl(150, 10%, 40%)"),
    accent: raw("hsl(142, 70%, 92%)"),
    accentForeground: raw("hsl(142, 76%, 30%)"),
    destructive: raw("hsl(0, 84%, 60%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(150, 20%, 90%)"),
    input: raw("hsl(150, 20%, 90%)"),
    ring: raw("hsl(142, 76%, 36%)")
  },
  dark: {
    background: raw("hsl(150, 30%, 3%)"),
    foreground: raw("hsl(45, 20%, 95%)"),
    card: raw("hsl(150, 30%, 6%)"),
    cardForeground: raw("hsl(45, 20%, 95%)"),
    popover: raw("hsl(150, 30%, 5%)"),
    popoverForeground: raw("hsl(45, 20%, 95%)"),
    primary: raw("hsl(142, 70%, 50%)"),
    primaryForeground: raw("hsl(150, 30%, 3%)"),
    secondary: raw("hsl(48, 90%, 55%)"),
    secondaryForeground: raw("hsl(150, 30%, 3%)"),
    muted: raw("hsl(150, 20%, 12%)"),
    mutedForeground: raw("hsl(150, 10%, 70%)"),
    accent: raw("hsl(142, 50%, 15%)"),
    accentForeground: raw("hsl(142, 70%, 50%)"),
    destructive: raw("hsl(0, 80%, 50%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(150, 20%, 15%)"),
    input: raw("hsl(150, 20%, 15%)"),
    ring: raw("hsl(142, 70%, 50%)")
  },
  fonts: {
    body: "Outfit, system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-student-spacelab-network-1-cmmkfn.ts
var communityStudentSpacelabNetwork1CmmkfnTheme = defineTheme({
  name: "community-student-spacelab-network-1-cmmkfn",
  label: "Spacelab Network",
  _sourceName: "Student Spacelab Network 1.",
  category: "Community",
  light: {
    background: raw("#f7f9fa"),
    foreground: raw("#333333"),
    card: raw("#ffffff"),
    cardForeground: raw("#0B1F3A"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#333333"),
    primary: raw("#0B1F3A"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#B11226"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#ddd9c4"),
    mutedForeground: raw("#6e6e6e"),
    accent: raw("#c0d5f2"),
    accentForeground: raw("#1b4d8d"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d4d4d4"),
    input: raw("#d4d4d4"),
    ring: raw("#99f3ff")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#ffffff"),
    card: raw("#061322"),
    cardForeground: raw("#ffffff"),
    popover: raw("#2f3436"),
    popoverForeground: raw("#e5e5e5"),
    primary: raw("#0B1F3A"),
    primaryForeground: raw("#fffffff"),
    secondary: raw("#B11226"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#444444"),
    mutedForeground: raw("#a4a2a2"),
    accent: raw("#1b4d8d"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#f41a1a"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#242424"),
    input: raw("#4d4d4d"),
    ring: raw("#99f3ff")
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-chalk-cmmjgo.ts
var communityChalkCmmjgoTheme = defineTheme({
  name: "community-chalk-cmmjgo",
  label: "Chalk",
  _sourceName: "Chalk",
  category: "Community",
  light: {
    background: raw("#f3f7fc"),
    foreground: raw("#060a12"),
    card: raw("#f9fcff"),
    cardForeground: raw("#060a12"),
    popover: raw("#f9fcff"),
    popoverForeground: raw("#060a12"),
    primary: raw("#101723"),
    primaryForeground: raw("#fafafa"),
    secondary: raw("#e7edf6"),
    secondaryForeground: raw("#101723"),
    muted: raw("#e7edf6"),
    mutedForeground: raw("#636974"),
    accent: raw("#e7edf6"),
    accentForeground: raw("#101723"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("#d8dfe9"),
    input: raw("#d8dfe9"),
    ring: raw("#87909d")
  },
  dark: {
    background: raw("#141d2b"),
    foreground: raw("#e5ecf1"),
    card: raw("#1a2533"),
    cardForeground: raw("#e5ecf1"),
    popover: raw("#202c3c"),
    popoverForeground: raw("#e5ecf1"),
    primary: raw("#d7dfe5"),
    primaryForeground: raw("#182230"),
    secondary: raw("#243040"),
    secondaryForeground: raw("#e5ecf1"),
    muted: raw("#232d3c"),
    mutedForeground: raw("#8794a1"),
    accent: raw("#2b3a4d"),
    accentForeground: raw("#e5ecf1"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("#2b3646"),
    input: raw("#273444"),
    ring: raw("#6e7c8c")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.625rem"
});

// src/themes/community/community-lavanda-cmmis1.ts
var communityLavandaCmmis1Theme = defineTheme({
  name: "community-lavanda-cmmis1",
  label: "Lavanda",
  _sourceName: "lavanda",
  category: "Community",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("oklch(0.145 0 0)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.145 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.145 0 0)"),
    primary: raw("oklch(0.205 0 0)"),
    primaryForeground: raw("oklch(0.985 0 0)"),
    secondary: raw("oklch(0.97 0 0)"),
    secondaryForeground: raw("oklch(0.205 0 0)"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("oklch(0.556 0 0)"),
    accent: raw("oklch(0.97 0 0)"),
    accentForeground: raw("oklch(0.205 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.922 0 0)"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.708 0 0)")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#f8f8ff"),
    card: raw("#27232a"),
    cardForeground: raw("#f8f8ff"),
    popover: raw("black"),
    popoverForeground: raw("#f8f8ff"),
    primary: raw("#B0A4E3"),
    primaryForeground: raw("oklch(0.205 0 0)"),
    secondary: raw("#45455b"),
    secondaryForeground: raw("#f8f8ff"),
    muted: raw("black"),
    mutedForeground: raw("#cbc9cc"),
    accent: raw("#31323c"),
    accentForeground: raw("#f8f8ff"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("#f8f8ff"),
    border: raw("oklch(0.275 0 0)"),
    input: raw("#000000"),
    ring: raw("#9c90aa")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "1.4rem"
});

// src/themes/community/community-woodforge-9-cmmhug.ts
var communityWoodforge9CmmhugTheme = defineTheme({
  name: "community-woodforge-9-cmmhug",
  label: "Woodforge 9",
  _sourceName: "WoodForge 9",
  category: "Community",
  light: {
    background: raw("hsl(40, 15%, 98%)"),
    foreground: raw("hsl(210, 25%, 15%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(210, 25%, 12%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(210, 25%, 12%)"),
    primary: raw("hsl(24, 45%, 35%)"),
    primaryForeground: raw("hsl(40, 15%, 98%)"),
    secondary: raw("hsl(210, 15%, 25%)"),
    secondaryForeground: raw("hsl(40, 15%, 98%)"),
    muted: raw("hsl(210, 10%, 94%)"),
    mutedForeground: raw("hsl(210, 10%, 45%)"),
    accent: raw("hsl(145, 25%, 32%)"),
    accentForeground: raw("hsl(40, 15%, 98%)"),
    destructive: raw("hsl(0, 60%, 45%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(210, 10%, 85%)"),
    input: raw("hsl(210, 10%, 90%)"),
    ring: raw("hsl(24, 45%, 35%)")
  },
  dark: {
    background: raw("hsl(210, 20%, 10%)"),
    foreground: raw("hsl(40, 10%, 94%)"),
    card: raw("hsl(210, 20%, 12%)"),
    cardForeground: raw("hsl(40, 10%, 94%)"),
    popover: raw("hsl(210, 20%, 12%)"),
    popoverForeground: raw("hsl(40, 10%, 94%)"),
    primary: raw("hsl(24, 50%, 45%)"),
    primaryForeground: raw("hsl(40, 10%, 98%)"),
    secondary: raw("hsl(210, 10%, 25%)"),
    secondaryForeground: raw("hsl(40, 10%, 94%)"),
    muted: raw("hsl(210, 20%, 18%)"),
    mutedForeground: raw("hsl(210, 10%, 70%)"),
    accent: raw("hsl(145, 30%, 38%)"),
    accentForeground: raw("hsl(40, 10%, 98%)"),
    destructive: raw("hsl(0, 65%, 55%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(210, 15%, 20%)"),
    input: raw("hsl(210, 15%, 20%)"),
    ring: raw("hsl(24, 50%, 45%)")
  },
  fonts: {
    body: "Inter, -apple-system, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.125rem"
});

// src/themes/community/community-caffein-thheme-cmmhks.ts
var communityCaffeinThhemeCmmhksTheme = defineTheme({
  name: "community-caffein-thheme-cmmhks",
  label: "Caffein Theme",
  _sourceName: "caffein-thheme",
  category: "Community",
  light: {
    background: raw("#f9f9f9"),
    foreground: raw("#202020"),
    card: raw("#fcfcfc"),
    cardForeground: raw("#202020"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#202020"),
    primary: raw("#644a40"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffdfb5"),
    secondaryForeground: raw("#582d1d"),
    muted: raw("#efefef"),
    mutedForeground: raw("#646464"),
    accent: raw("#e8e8e8"),
    accentForeground: raw("#202020"),
    destructive: raw("#e54d2e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d8d8d8"),
    input: raw("#d8d8d8"),
    ring: raw("#644a40")
  },
  dark: {
    background: raw("#111111"),
    foreground: raw("#eeeeee"),
    card: raw("#191919"),
    cardForeground: raw("#eeeeee"),
    popover: raw("#191919"),
    popoverForeground: raw("#eeeeee"),
    primary: raw("#ffe0c2"),
    primaryForeground: raw("#081a1b"),
    secondary: raw("#393028"),
    secondaryForeground: raw("#ffe0c2"),
    muted: raw("#222222"),
    mutedForeground: raw("#b4b4b4"),
    accent: raw("#2a2a2a"),
    accentForeground: raw("#eeeeee"),
    destructive: raw("#e54d2e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#201e18"),
    input: raw("#484848"),
    ring: raw("#ffe0c2")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-papaya-cmmgxh.ts
var communityPapayaCmmgxhTheme = defineTheme({
  name: "community-papaya-cmmgxh",
  label: "Papaya",
  _sourceName: "Papaya",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#1a4731"),
    card: raw("#ffffff"),
    cardForeground: raw("#1a4731"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1a4731"),
    primary: raw("#1f473e"),
    primaryForeground: raw("#F9F9F9"),
    secondary: raw("#f4b034"),
    secondaryForeground: raw("#1a4731"),
    muted: raw("#f2f5f3"),
    mutedForeground: raw("#4b6b5a"),
    accent: raw("#1a4731"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#8b0000"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e1e8e4"),
    input: raw("#e1e8e4"),
    ring: raw("#1a4731")
  },
  dark: {
    background: raw("#313a36"),
    foreground: raw("#ffffff"),
    card: raw("#153a28"),
    cardForeground: raw("#ffffff"),
    popover: raw("#153a28"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#ffffff"),
    primaryForeground: raw("#143926"),
    secondary: raw("#294c3b"),
    secondaryForeground: raw("#f4b034"),
    muted: raw("#245d41"),
    mutedForeground: raw("#a4cbb7"),
    accent: raw("#69b54a"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ff4d4d"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#2d6349"),
    input: raw("#2d6349"),
    ring: raw("#ffffff")
  },
  fonts: {
    body: "Roboto, ui-sans-serif, sans-serif, system-ui",
    heading: "Georgia, serif"
  },
  radius: "0.65rem"
});

// src/themes/community/community-sakura-cmmghp.ts
var communitySakuraCmmghpTheme = defineTheme({
  name: "community-sakura-cmmghp",
  label: "Sakura",
  _sourceName: "sakura",
  category: "Community",
  light: {
    background: raw("#FFF9F6"),
    foreground: raw("#5C4B43"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#5C4B43"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#5C4B43"),
    primary: raw("#FF7EA5"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#F3EBE6"),
    secondaryForeground: raw("#5C4B43"),
    muted: raw("#FAF3F0"),
    mutedForeground: raw("#A18E84"),
    accent: raw("#FFDBE4"),
    accentForeground: raw("#B33E5D"),
    destructive: raw("#E5484D"),
    destructiveForeground: raw("#FDFCFD"),
    border: raw("#EBE0DA"),
    input: raw("#EBE0DA"),
    ring: raw("#FF7EA5")
  },
  dark: {
    background: raw("#1A1412"),
    foreground: raw("#EAE0DC"),
    card: raw("#241D1A"),
    cardForeground: raw("#EAE0DC"),
    popover: raw("#241D1A"),
    popoverForeground: raw("#EAE0DC"),
    primary: raw("#FF7EA5"),
    primaryForeground: raw("#1A1412"),
    secondary: raw("#2D2421"),
    secondaryForeground: raw("#EAE0DC"),
    muted: raw("#2D2421"),
    mutedForeground: raw("#A18E84"),
    accent: raw("#3D252A"),
    accentForeground: raw("#FFB3C6"),
    destructive: raw("#E5484D"),
    destructiveForeground: raw("#FDFCFD"),
    border: raw("#332A26"),
    input: raw("#332A26"),
    ring: raw("#FF7EA5")
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-vrai-delice-cmm3sr.ts
var communityVraiDeliceCmm3srTheme = defineTheme({
  name: "community-vrai-delice-cmm3sr",
  label: "Vrai Delice",
  _sourceName: "vrai delice",
  category: "Community",
  light: {
    background: raw("#f1fff0"),
    foreground: raw("#171717"),
    card: raw("#fcfcfc"),
    cardForeground: raw("#171717"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#525252"),
    primary: raw("#53d596"),
    primaryForeground: raw("#1e2723"),
    secondary: raw("#fdfdfd"),
    secondaryForeground: raw("#171717"),
    muted: raw("#ffffff"),
    mutedForeground: raw("#202020"),
    accent: raw("#fafcff"),
    accentForeground: raw("#202020"),
    destructive: raw("#ca3214"),
    destructiveForeground: raw("#fffcfc"),
    border: raw("#dfdfdf"),
    input: raw("#f6f6f6"),
    ring: raw("#72e3ad")
  },
  dark: {
    background: raw("#091f00"),
    foreground: raw("#e2e8f0"),
    card: raw("#171717"),
    cardForeground: raw("#e2e8f0"),
    popover: raw("#242424"),
    popoverForeground: raw("#a9a9a9"),
    primary: raw("#006239"),
    primaryForeground: raw("#dde8e3"),
    secondary: raw("#242424"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#1f1f1f"),
    mutedForeground: raw("#a2a2a2"),
    accent: raw("#313131"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#541c15"),
    destructiveForeground: raw("#ede9e8"),
    border: raw("#292929"),
    input: raw("#242424"),
    ring: raw("#4ade80")
  },
  fonts: {
    body: "Outfit, sans-serif",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-orient-cmlzhg.ts
var communityOrientCmlzhgTheme = defineTheme({
  name: "community-orient-cmlzhg",
  label: "Orient",
  _sourceName: "orient",
  category: "Community",
  light: {
    background: raw("#fcfbf7"),
    foreground: raw("#1a1a1a"),
    card: raw("#f8f5ed"),
    cardForeground: raw("#1a1a1a"),
    popover: raw("#fcfbf7"),
    popoverForeground: raw("#1a1a1a"),
    primary: raw("#ff0000"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffd700"),
    secondaryForeground: raw("#1a1a1a"),
    muted: raw("#e8e4d8"),
    mutedForeground: raw("#5e5e5e"),
    accent: raw("#fff492"),
    accentForeground: raw("#1a1a1a"),
    destructive: raw("#d32f2f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#d6d0c0"),
    input: raw("#d6d0c0"),
    ring: raw("#ff0000")
  },
  dark: {
    background: raw("#0c0c0c"),
    foreground: raw("#f5f5f5"),
    card: raw("#161616"),
    cardForeground: raw("#f5f5f5"),
    popover: raw("#0c0c0c"),
    popoverForeground: raw("#f5f5f5"),
    primary: raw("#ff1a1a"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#ffee00"),
    secondaryForeground: raw("#000000"),
    muted: raw("#2a2a2a"),
    mutedForeground: raw("#b0b0b0"),
    accent: raw("#3d3a00"),
    accentForeground: raw("#f5f5f5"),
    destructive: raw("#ff4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#333333"),
    input: raw("#333333"),
    ring: raw("#ff1a1a")
  },
  fonts: {
    body: "Noto Serif SC, serif",
    heading: "Noto Serif SC, serif"
  },
  radius: "0.25rem"
});

// src/themes/community/community-agora-events-cmlpmf.ts
var communityAgoraEventsCmlpmfTheme = defineTheme({
  name: "community-agora-events-cmlpmf",
  label: "Agora Events",
  _sourceName: "Agora Events",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#09090b"),
    card: raw("#ffffff"),
    cardForeground: raw("#09090b"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#09090b"),
    primary: raw("#e274ff"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f4f4f5"),
    secondaryForeground: raw("#18181b"),
    muted: raw("#f4f4f5"),
    mutedForeground: raw("#71717a"),
    accent: raw("#f4f4f5"),
    accentForeground: raw("#18181b"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#e274ff"),
    input: raw("#e274ff"),
    ring: raw("#e274ff")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#fafafa"),
    card: raw("#09090b"),
    cardForeground: raw("#fafafa"),
    popover: raw("#09090b"),
    popoverForeground: raw("#fafafa"),
    primary: raw("#e274ff"),
    primaryForeground: raw("#000000"),
    secondary: raw("#18181b"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#18181b"),
    mutedForeground: raw("#a1a1aa"),
    accent: raw("#27272a"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#7f1d1d"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#e274ff"),
    input: raw("#18181b"),
    ring: raw("#e274ff")
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Georgia', serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-purples-cmlien.ts
var communityPurplesCmlienTheme = defineTheme({
  name: "community-purples-cmlien",
  label: "Purples",
  _sourceName: "Purples",
  category: "Community",
  light: {
    background: raw("#f5f5ff"),
    foreground: raw("#2a2a4a"),
    card: raw("#f5f5ff"),
    cardForeground: raw("#2a2a4a"),
    popover: raw("#f5f5ff"),
    popoverForeground: raw("#2a2a4a"),
    primary: raw("#6e56cf"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#e4dfff"),
    secondaryForeground: raw("#4a4080"),
    muted: raw("#f0f0fa"),
    mutedForeground: raw("#6c6c8a"),
    accent: raw("#d8e6ff"),
    accentForeground: raw("#2a2a4a"),
    destructive: raw("#ff5470"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e0e0f0"),
    input: raw("#e0e0f0"),
    ring: raw("#6e56cf")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#ffffff"),
    card: raw("#000000"),
    cardForeground: raw("#ffffff"),
    popover: raw("#000000"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#a48fff"),
    primaryForeground: raw("#000000"),
    secondary: raw("#2d2b55"),
    secondaryForeground: raw("#c4c2ff"),
    muted: raw("#1a1a1a"),
    mutedForeground: raw("#a0a0c0"),
    accent: raw("#303060"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ff5470"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#303052"),
    input: raw("#303052"),
    ring: raw("#a48fff")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-hyper-red-cmliel.ts
var communityHyperRedCmlielTheme = defineTheme({
  name: "community-hyper-red-cmliel",
  label: "Hyper Red",
  _sourceName: "Hyper red",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#000000"),
    card: raw("#f8f8f8"),
    cardForeground: raw("#1c1c1c"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#000000"),
    primary: raw("#3b82f6"),
    primaryForeground: raw("#f9fafb"),
    secondary: raw("#e5e7eb"),
    secondaryForeground: raw("#1c1c1c"),
    muted: raw("#f3f4f6"),
    mutedForeground: raw("#6b7280"),
    accent: raw("#e5e7eb"),
    accentForeground: raw("#1c1c1c"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#f9fafb"),
    border: raw("#e5e7eb"),
    input: raw("#e5e7eb"),
    ring: raw("#3b82f6")
  },
  dark: {
    background: raw("#0d0d0d"),
    foreground: raw("#f0f0f0"),
    card: raw("#0d0d0d"),
    cardForeground: raw("#f0f0f0"),
    popover: raw("#0d0d0d"),
    popoverForeground: raw("#f0f0f0"),
    primary: raw("#e83363"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#1a1a1a"),
    secondaryForeground: raw("#e0e0e0"),
    muted: raw("#151515"),
    mutedForeground: raw("#888888"),
    accent: raw("#50fa7b"),
    accentForeground: raw("#000000"),
    destructive: raw("#ff5555"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#282828"),
    input: raw("#111111"),
    ring: raw("#e83363")
  },
  fonts: {
    body: "ui-sans-serif,system-ui,sans-serif",
    heading: "ui-serif,Georgia,serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-magic-3-cmmt0a.ts
var communityMagic3Cmmt0aTheme = defineTheme({
  name: "community-magic-3-cmmt0a",
  label: "Magic 3",
  _sourceName: "Magic 3",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#1d1b16"),
    card: raw("#ffffff"),
    cardForeground: raw("#1d1b16"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#1d1b16"),
    primary: raw("#4d0b61"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#ff9405"),
    secondaryForeground: raw("#000000"),
    muted: raw("#d5d7d2"),
    mutedForeground: raw("#6a665d"),
    accent: raw("#d6b2ff"),
    accentForeground: raw("#4d0b61"),
    destructive: raw("#ff550c"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#ccc8c4"),
    input: raw("#e7d8b8"),
    ring: raw("#4d0b61")
  },
  dark: {
    background: raw("#1b061e"),
    foreground: raw("#d8dbd4"),
    card: raw("#230c2c"),
    cardForeground: raw("#d8dbd4"),
    popover: raw("#2a1133"),
    popoverForeground: raw("#d8dbd4"),
    primary: raw("#ff9a10"),
    primaryForeground: raw("#1f0c2c"),
    secondary: raw("#ff5c86"),
    secondaryForeground: raw("#120217"),
    muted: raw("#240e2b"),
    mutedForeground: raw("#969186"),
    accent: raw("#4f2b5b"),
    accentForeground: raw("#d8dbd4"),
    destructive: raw("#d74709"),
    destructiveForeground: raw("#d8dbd4"),
    border: raw("#3e2049"),
    input: raw("#3e2049"),
    ring: raw("#aa27ff")
  },
  fonts: {
    body: "Roboto, ui-sans-serif, sans-serif, system-ui",
    heading: "Merriweather, ui-serif, serif"
  },
  radius: "0.4rem"
});

// src/themes/community/community-magic-2-cmmsz6.ts
var communityMagic2Cmmsz6Theme = defineTheme({
  name: "community-magic-2-cmmsz6",
  label: "Magic 2",
  _sourceName: "Magic 2",
  category: "Community",
  light: {
    background: raw("#ffebb7"),
    foreground: raw("#1d1b16"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#1d1b16"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#1d1b16"),
    primary: raw("#4d0b61"),
    primaryForeground: raw("#FFFFFF"),
    secondary: raw("#ff9405"),
    secondaryForeground: raw("#000000"),
    muted: raw("#d5d7d2"),
    mutedForeground: raw("#6a665d"),
    accent: raw("#d6b2ff"),
    accentForeground: raw("#4d0b61"),
    destructive: raw("#ff550c"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#ccc8c4"),
    input: raw("#e7d8b8"),
    ring: raw("#4d0b61")
  },
  dark: {
    background: raw("#1b061e"),
    foreground: raw("#d8dbd4"),
    card: raw("#230c2c"),
    cardForeground: raw("#d8dbd4"),
    popover: raw("#2a1133"),
    popoverForeground: raw("#d8dbd4"),
    primary: raw("#ff9a10"),
    primaryForeground: raw("#1f0c2c"),
    secondary: raw("#ff5c85"),
    secondaryForeground: raw("#120217"),
    muted: raw("#240e2b"),
    mutedForeground: raw("#969186"),
    accent: raw("#4f2b5b"),
    accentForeground: raw("#d8dbd4"),
    destructive: raw("#d74709"),
    destructiveForeground: raw("#d8dbd4"),
    border: raw("#3e2049"),
    input: raw("#3e2049"),
    ring: raw("#aa27ff")
  },
  fonts: {
    body: "Roboto, ui-sans-serif, sans-serif, system-ui",
    heading: "Merriweather, ui-serif, serif"
  },
  radius: "0.4rem"
});

// src/themes/community/community-best-deisgne-ui-ux-shadcn-cmmsal.ts
var communityBestDeisgneUiUxShadcnCmmsalTheme = defineTheme({
  name: "community-best-deisgne-ui-ux-shadcn-cmmsal",
  label: "Best Design UI UX Shadcn",
  _sourceName: "Best deisgne ui ux shadcn ",
  category: "Community",
  light: {
    background: raw("#f4f4f5"),
    foreground: raw("#18181b"),
    card: raw("#ffffff"),
    cardForeground: raw("#18181b"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#18181b"),
    primary: raw("#3b82f6"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f4f4f5"),
    secondaryForeground: raw("#18181b"),
    muted: raw("#f4f4f5"),
    mutedForeground: raw("#71717a"),
    accent: raw("#e4e4e7"),
    accentForeground: raw("#18181b"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#e4e4e7"),
    input: raw("#e4e4e7"),
    ring: raw("#3b82f6")
  },
  dark: {
    background: raw("#09090b"),
    foreground: raw("#fafafa"),
    card: raw("#18181b"),
    cardForeground: raw("#fafafa"),
    popover: raw("#09090b"),
    popoverForeground: raw("#fafafa"),
    primary: raw("#3b82f6"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#27272a"),
    secondaryForeground: raw("#fafafa"),
    muted: raw("#27272a"),
    mutedForeground: raw("#a1a1aa"),
    accent: raw("#27272a"),
    accentForeground: raw("#fafafa"),
    destructive: raw("#7f1d1d"),
    destructiveForeground: raw("#fafafa"),
    border: raw("#27272a"),
    input: raw("#27272a"),
    ring: raw("#3b82f6")
  },
  fonts: {
    body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.6rem"
});

// src/themes/community/community-jknm-cmmrfz.ts
var communityJknmCmmrfzTheme = defineTheme({
  name: "community-jknm-cmmrfz",
  label: "Jknm",
  _sourceName: "jknm,",
  category: "Community",
  light: {
    background: raw("oklch(1 0 0)"),
    foreground: raw("oklch(0.145 0 0)"),
    card: raw("oklch(1 0 0)"),
    cardForeground: raw("oklch(0.145 0 0)"),
    popover: raw("oklch(1 0 0)"),
    popoverForeground: raw("oklch(0.145 0 0)"),
    primary: raw("oklch(0.205 0 0)"),
    primaryForeground: raw("oklch(0.985 0 0)"),
    secondary: raw("oklch(0.97 0 0)"),
    secondaryForeground: raw("oklch(0.205 0 0)"),
    muted: raw("oklch(0.97 0 0)"),
    mutedForeground: raw("oklch(0.556 0 0)"),
    accent: raw("oklch(0.97 0 0)"),
    accentForeground: raw("oklch(0.205 0 0)"),
    destructive: raw("oklch(0.577 0.245 27.325)"),
    destructiveForeground: raw("oklch(1 0 0)"),
    border: raw("oklch(0.922 0 0)"),
    input: raw("oklch(0.922 0 0)"),
    ring: raw("oklch(0.708 0 0)")
  },
  dark: {
    background: raw("oklch(0.145 0 0)"),
    foreground: raw("oklch(0.985 0 0)"),
    card: raw("oklch(0.205 0 0)"),
    cardForeground: raw("oklch(0.985 0 0)"),
    popover: raw("oklch(0.269 0 0)"),
    popoverForeground: raw("oklch(0.985 0 0)"),
    primary: raw("oklch(0.922 0 0)"),
    primaryForeground: raw("oklch(0.205 0 0)"),
    secondary: raw("oklch(0.269 0 0)"),
    secondaryForeground: raw("oklch(0.985 0 0)"),
    muted: raw("oklch(0.269 0 0)"),
    mutedForeground: raw("oklch(0.708 0 0)"),
    accent: raw("oklch(0.371 0 0)"),
    accentForeground: raw("oklch(0.985 0 0)"),
    destructive: raw("oklch(0.704 0.191 22.216)"),
    destructiveForeground: raw("oklch(0.985 0 0)"),
    border: raw("oklch(0.275 0 0)"),
    input: raw("oklch(0.325 0 0)"),
    ring: raw("oklch(0.556 0 0)")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.625rem"
});

// src/themes/community/community-53-cmmp8a.ts
var community53Cmmp8aTheme = defineTheme({
  name: "community-53-cmmp8a",
  label: "Copper Canyon",
  _sourceName: "53",
  category: "Community",
  light: {
    background: raw("hsl(210, 40%, 98%)"),
    foreground: raw("hsl(222, 47%, 11%)"),
    card: raw("hsl(0, 0%, 100%)"),
    cardForeground: raw("hsl(222, 47%, 11%)"),
    popover: raw("hsl(0, 0%, 100%)"),
    popoverForeground: raw("hsl(222, 47%, 11%)"),
    primary: raw("hsl(221, 83%, 53%)"),
    primaryForeground: raw("hsl(210, 40%, 98%)"),
    secondary: raw("hsl(162, 72%, 40%)"),
    secondaryForeground: raw("hsl(210, 40%, 98%)"),
    muted: raw("hsl(210, 40%, 96.1%)"),
    mutedForeground: raw("hsl(215.4, 16.3%, 46.9%)"),
    accent: raw("hsl(162, 72%, 95%)"),
    accentForeground: raw("hsl(221, 83%, 33%)"),
    destructive: raw("hsl(0, 84.2%, 60.2%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(214.3, 31.8%, 91.4%)"),
    input: raw("hsl(214.3, 31.8%, 91.4%)"),
    ring: raw("hsl(221, 83%, 53%)")
  },
  dark: {
    background: raw("hsl(222, 47%, 11%)"),
    foreground: raw("hsl(210, 40%, 98%)"),
    card: raw("hsl(222, 47%, 13%)"),
    cardForeground: raw("hsl(210, 40%, 98%)"),
    popover: raw("hsl(222, 47%, 11%)"),
    popoverForeground: raw("hsl(210, 40%, 98%)"),
    primary: raw("hsl(217, 91%, 60%)"),
    primaryForeground: raw("hsl(222, 47%, 11%)"),
    secondary: raw("hsl(162, 72%, 48%)"),
    secondaryForeground: raw("hsl(222, 47%, 11%)"),
    muted: raw("hsl(217, 32%, 17%)"),
    mutedForeground: raw("hsl(215, 20.2%, 65.1%)"),
    accent: raw("hsl(217, 32%, 17%)"),
    accentForeground: raw("hsl(210, 40%, 98%)"),
    destructive: raw("hsl(0, 62.8%, 30.6%)"),
    destructiveForeground: raw("hsl(210, 40%, 98%)"),
    border: raw("hsl(217, 32%, 17%)"),
    input: raw("hsl(217, 32%, 17%)"),
    ring: raw("hsl(224, 76.3%, 48%)")
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-imhicihu-cmmp28.ts
var communityImhicihuCmmp28Theme = defineTheme({
  name: "community-imhicihu-cmmp28",
  label: "Imhicihu",
  _sourceName: "imhicihu",
  category: "Community",
  light: {
    background: raw("#faf9f5"),
    foreground: raw("#3d3929"),
    card: raw("oklch(0.97 0.014 254.604)"),
    cardForeground: raw("#141413"),
    popover: raw("#faf9f5"),
    popoverForeground: raw("#28261b"),
    primary: raw("#bce4f8"),
    primaryForeground: raw("#000000"),
    secondary: raw("#bce4f8"),
    secondaryForeground: raw("#000000"),
    muted: raw("#ede9de"),
    mutedForeground: raw("#83827d"),
    accent: raw("#bce4f8"),
    accentForeground: raw("#28261b"),
    destructive: raw("#141413"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#dad9d4"),
    input: raw("#bce4f8"),
    ring: raw("#4194d7")
  },
  dark: {
    background: raw("#262624"),
    foreground: raw("#c3c0b6"),
    card: raw("#262624"),
    cardForeground: raw("#faf9f5"),
    popover: raw("#30302e"),
    popoverForeground: raw("#e5e5e2"),
    primary: raw("#4194d7"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#faf9f5"),
    secondaryForeground: raw("#30302e"),
    muted: raw("#1b1b19"),
    mutedForeground: raw("#b7b5a9"),
    accent: raw("#1a1915"),
    accentForeground: raw("#f5f4ee"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#3e3e38"),
    input: raw("#52514a"),
    ring: raw("#4194d7")
  },
  fonts: {
    body: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    heading: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
  },
  radius: "0.5rem"
});

// src/themes/community/community-something-cmmmy7.ts
var communitySomethingCmmmy7Theme = defineTheme({
  name: "community-something-cmmmy7",
  label: "Something",
  _sourceName: "something",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#262626"),
    card: raw("#ffffff"),
    cardForeground: raw("#262626"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#262626"),
    primary: raw("#0abaf5"),
    primaryForeground: raw("#c72929"),
    secondary: raw("#f3f4f6"),
    secondaryForeground: raw("#4b5563"),
    muted: raw("#f9fafb"),
    mutedForeground: raw("#6b7280"),
    accent: raw("#fffbeb"),
    accentForeground: raw("#92400e"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e7eb"),
    input: raw("#e5e7eb"),
    ring: raw("#f59e0b")
  },
  dark: {
    background: raw("#171717"),
    foreground: raw("#e5e5e5"),
    card: raw("#262626"),
    cardForeground: raw("#e5e5e5"),
    popover: raw("#262626"),
    popoverForeground: raw("#e5e5e5"),
    primary: raw("#f59e0b"),
    primaryForeground: raw("#000000"),
    secondary: raw("#262626"),
    secondaryForeground: raw("#e5e5e5"),
    muted: raw("#1f1f1f"),
    mutedForeground: raw("#a3a3a3"),
    accent: raw("#92400e"),
    accentForeground: raw("#fde68a"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#404040"),
    input: raw("#404040"),
    ring: raw("#f59e0b")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Source Serif 4, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-a-cmmm59.ts
var communityACmmm59Theme = defineTheme({
  name: "community-a-cmmm59",
  label: "Lumen Orbit",
  _sourceName: "A",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#1a1c1e"),
    card: raw("#f8f9fa"),
    cardForeground: raw("#1a1c1e"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#1a1c1e"),
    primary: raw("#0056b3"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#343a40"),
    secondaryForeground: raw("#f8f9fa"),
    muted: raw("#e9ecef"),
    mutedForeground: raw("#6c757d"),
    accent: raw("#ffc107"),
    accentForeground: raw("#212529"),
    destructive: raw("#dc3545"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#dee2e6"),
    input: raw("#ced4da"),
    ring: raw("#0056b3")
  },
  dark: {
    background: raw("#0b0e11"),
    foreground: raw("#e9ecef"),
    card: raw("#161b22"),
    cardForeground: raw("#e9ecef"),
    popover: raw("#0b0e11"),
    popoverForeground: raw("#e9ecef"),
    primary: raw("#339af0"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#495057"),
    secondaryForeground: raw("#f8f9fa"),
    muted: raw("#212529"),
    mutedForeground: raw("#adb5bd"),
    accent: raw("#fcc419"),
    accentForeground: raw("#1a1c1e"),
    destructive: raw("#e03131"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#343a40"),
    input: raw("#495057"),
    ring: raw("#339af0")
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-lyte-cmml0p.ts
var communityLyteCmml0pTheme = defineTheme({
  name: "community-lyte-cmml0p",
  label: "Lyte",
  _sourceName: "Lyte ",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#112539"),
    card: raw("#ffffff"),
    cardForeground: raw("#112539"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#112539"),
    primary: raw("004365"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#2da89c"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#f4f4f5"),
    mutedForeground: raw("#112539"),
    accent: raw("#9ce8d0"),
    accentForeground: raw("#112539"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e4e4e7"),
    input: raw("#e4e4e7"),
    ring: raw("#004365")
  },
  dark: {
    background: raw("#1e1e1e"),
    foreground: raw("#ffffff"),
    card: raw("#112539"),
    cardForeground: raw("#ffffff"),
    popover: raw("#112539"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#2debae"),
    primaryForeground: raw("#112539"),
    secondary: raw("#8849ff"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#112539"),
    mutedForeground: raw("#2debae"),
    accent: raw("#004365"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#7f1d1d"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#004365"),
    input: raw("#004365"),
    ring: raw("#2debae")
  },
  fonts: {
    body: "Google Sans",
    heading: "Inter"
  },
  radius: "0.5rem"
});

// src/themes/community/community-aryze-colors-2026-v2-cmmkfw.ts
var communityAryzeColors2026V2CmmkfwTheme = defineTheme({
  name: "community-aryze-colors-2026-v2-cmmkfw",
  label: "Aryze Colors 2026 V2",
  _sourceName: "Aryze Colors 2026 V2 ",
  category: "Community",
  light: {
    background: raw("#F7F9FA"),
    foreground: raw("#001E2B"),
    card: raw("#FFFFFF"),
    cardForeground: raw("#001E2B"),
    popover: raw("#FFFFFF"),
    popoverForeground: raw("#001E2B"),
    primary: raw("#001E2B"),
    primaryForeground: raw("#F7F9FA"),
    secondary: raw("#BFD9EF"),
    secondaryForeground: raw("#001E2B"),
    muted: raw("#E3E8EB"),
    mutedForeground: raw("#122D47"),
    accent: raw("#D9F5EA"),
    accentForeground: raw("#001E2B"),
    destructive: raw("#DC2626"),
    destructiveForeground: raw("#F7F9FA"),
    border: raw("#BFD9EF"),
    input: raw("#FFFFFF"),
    ring: raw("#007599")
  },
  dark: {
    background: raw("#1D1A15"),
    foreground: raw("#F7F9FA"),
    card: raw("#463F37"),
    cardForeground: raw("#F7F9FA"),
    popover: raw("#463F37"),
    popoverForeground: raw("#F7F9FA"),
    primary: raw("#F7F9FA"),
    primaryForeground: raw("#1D1A15"),
    secondary: raw("#463F37"),
    secondaryForeground: raw("#F7F9FA"),
    muted: raw("#463F37"),
    mutedForeground: raw("#B8C1C7"),
    accent: raw("#006282"),
    accentForeground: raw("#F7F9FA"),
    destructive: raw("#DC2626"),
    destructiveForeground: raw("#FFFFFF"),
    border: raw("#463F37"),
    input: raw("#463F37"),
    ring: raw("#007599")
  },
  fonts: {
    body: "Geist, ui-sans-serif, sans-serif, system-ui",
    heading: "Geist, ui-sans-serif, sans-serif, system-ui"
  },
  radius: "0.625rem"
});

// src/themes/community/community-sukuna-cmmhf8.ts
var communitySukunaCmmhf8Theme = defineTheme({
  name: "community-sukuna-cmmhf8",
  label: "Sukuna",
  _sourceName: "Sukuna",
  category: "Community",
  light: {
    background: raw("hsl(0, 20%, 98%)"),
    foreground: raw("hsl(340, 60%, 10%)"),
    card: raw("hsl(0, 15%, 95%)"),
    cardForeground: raw("hsl(340, 60%, 15%)"),
    popover: raw("hsl(0, 15%, 95%)"),
    popoverForeground: raw("hsl(340, 60%, 10%)"),
    primary: raw("hsl(345, 80%, 35%)"),
    primaryForeground: raw("hsl(0, 0%, 100%)"),
    secondary: raw("hsl(270, 50%, 40%)"),
    secondaryForeground: raw("hsl(0, 0%, 100%)"),
    muted: raw("hsl(340, 10%, 90%)"),
    mutedForeground: raw("hsl(340, 20%, 40%)"),
    accent: raw("hsl(340, 100%, 92%)"),
    accentForeground: raw("hsl(345, 80%, 30%)"),
    destructive: raw("hsl(0, 85%, 45%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(340, 20%, 85%)"),
    input: raw("hsl(340, 20%, 92%)"),
    ring: raw("hsl(345, 80%, 35%)")
  },
  dark: {
    background: raw("hsl(340, 40%, 3%)"),
    foreground: raw("hsl(20, 30%, 85%)"),
    card: raw("hsl(340, 35%, 6%)"),
    cardForeground: raw("hsl(20, 30%, 90%)"),
    popover: raw("hsl(340, 35%, 6%)"),
    popoverForeground: raw("hsl(20, 30%, 90%)"),
    primary: raw("hsl(345, 90%, 45%)"),
    primaryForeground: raw("hsl(340, 40%, 3%)"),
    secondary: raw("hsl(275, 70%, 35%)"),
    secondaryForeground: raw("hsl(20, 30%, 95%)"),
    muted: raw("hsl(340, 30%, 12%)"),
    mutedForeground: raw("hsl(340, 15%, 65%)"),
    accent: raw("hsl(320, 80%, 20%)"),
    accentForeground: raw("hsl(320, 100%, 85%)"),
    destructive: raw("hsl(0, 100%, 40%)"),
    destructiveForeground: raw("hsl(0, 0%, 100%)"),
    border: raw("hsl(340, 30%, 15%)"),
    input: raw("hsl(340, 30%, 10%)"),
    ring: raw("hsl(345, 90%, 45%)")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Playfair Display, serif"
  },
  radius: "0.25rem"
});

// src/themes/community/community-blue-cmmgxu.ts
var communityBlueCmmgxuTheme = defineTheme({
  name: "community-blue-cmmgxu",
  label: "Blue",
  _sourceName: "blue",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0f1419"),
    card: raw("#f7f8f8"),
    cardForeground: raw("#0f1419"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0f1419"),
    primary: raw("#1e9df1"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#0f1419"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#E5E5E6"),
    mutedForeground: raw("#0f1419"),
    accent: raw("#E3ECF6"),
    accentForeground: raw("#1e9df1"),
    destructive: raw("#f4212e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e1eaef"),
    input: raw("#f7f9fa"),
    ring: raw("#1da1f2")
  },
  dark: {
    background: raw("#000000"),
    foreground: raw("#e7e9ea"),
    card: raw("#17181c"),
    cardForeground: raw("#d9d9d9"),
    popover: raw("#000000"),
    popoverForeground: raw("#e7e9ea"),
    primary: raw("#1c9cf0"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f0f3f4"),
    secondaryForeground: raw("#0f1419"),
    muted: raw("#181818"),
    mutedForeground: raw("#72767a"),
    accent: raw("#061622"),
    accentForeground: raw("#1c9cf0"),
    destructive: raw("#f4212e"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#242628"),
    input: raw("#22303c"),
    ring: raw("#1da1f2")
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "1.3rem"
});

// src/themes/community/community-uv-day-cmmfg9.ts
var communityUvDayCmmfg9Theme = defineTheme({
  name: "community-uv-day-cmmfg9",
  label: "Uv Day",
  _sourceName: "uv day",
  category: "Community",
  light: {
    background: raw("#f9f6f6"),
    foreground: raw("#262626"),
    card: raw("#ffffff"),
    cardForeground: raw("#262626"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#262626"),
    primary: raw("#ff0000"),
    primaryForeground: raw("#000000"),
    secondary: raw("#ffc72e"),
    secondaryForeground: raw("#4b5563"),
    muted: raw("#f9fafb"),
    mutedForeground: raw("#6b7280"),
    accent: raw("#f3eb12"),
    accentForeground: raw("#92400e"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e5e7eb"),
    input: raw("#e5e7eb"),
    ring: raw("#f59e0b")
  },
  dark: {
    background: raw("#171717"),
    foreground: raw("#e5e5e5"),
    card: raw("#262626"),
    cardForeground: raw("#e5e5e5"),
    popover: raw("#262626"),
    popoverForeground: raw("#e5e5e5"),
    primary: raw("#ffdd00"),
    primaryForeground: raw("#000000"),
    secondary: raw("#e20808"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#1f1f1f"),
    mutedForeground: raw("#a3a3a3"),
    accent: raw("#bc1515"),
    accentForeground: raw("#f2f2f2"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#404040"),
    input: raw("#404040"),
    ring: raw("#f59e0b")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Source Serif 4, serif"
  },
  radius: "0.375rem"
});

// src/themes/community/community-my-theme-01-cmmemx.ts
var communityMyTheme01CmmemxTheme = defineTheme({
  name: "community-my-theme-01-cmmemx",
  label: "My Theme 01",
  _sourceName: "My Theme 01",
  category: "Community",
  light: {
    background: raw("oklch(0.938 0.127 124.321)"),
    foreground: raw("oklch(0.391 0.09 240.876)"),
    card: raw("oklch(0.938 0.127 124.321)"),
    cardForeground: raw("oklch(0.274 0.072 132.109)"),
    popover: raw("oklch(0.95 0.052 163.051)"),
    popoverForeground: raw("oklch(0.527 0.154 150.069)"),
    primary: raw("oklch(0.938 0.127 124.321)"),
    primaryForeground: raw("oklch(0.508 0.118 165.612)"),
    secondary: raw("oklch(0.414 0.112 45.904)"),
    secondaryForeground: raw("oklch(0.837 0.128 66.29)"),
    muted: raw("oklch(0.855 0.138 181.071)"),
    mutedForeground: raw("oklch(0.414 0.112 45.904)"),
    accent: raw("oklch(0.648 0.2 131.684)"),
    accentForeground: raw("oklch(0.378 0.077 168.94)"),
    destructive: raw("oklch(0.453 0 .124 130.933)"),
    destructiveForeground: raw("#ffffff"),
    border: raw("oklch(0.627 0.194 149.214)"),
    input: raw("#303052"),
    ring: raw("#a48fff")
  },
  dark: {
    background: raw("oklch(0.938 0.127 124.321)"),
    foreground: raw("oklch(0.391 0.09 240.876)"),
    card: raw("oklch(0.938 0.127 124.321)"),
    cardForeground: raw("oklch(0.274 0.072 132.109)"),
    popover: raw("oklch(0.95 0.052 163.051)"),
    popoverForeground: raw("oklch(0.527 0.154 150.069)"),
    primary: raw("oklch(0.938 0.127 124.321)"),
    primaryForeground: raw("oklch(0.508 0.118 165.612)"),
    secondary: raw("oklch(0.414 0.112 45.904)"),
    secondaryForeground: raw("oklch(0.837 0.128 66.29)"),
    muted: raw("oklch(0.855 0.138 181.071)"),
    mutedForeground: raw("oklch(0.414 0.112 45.904)"),
    accent: raw("oklch(0.648 0.2 131.684)"),
    accentForeground: raw("oklch(0.378 0.077 168.94)"),
    destructive: raw("oklch(0.453 0 .124 130.933)"),
    destructiveForeground: raw("#ffffff"),
    border: raw("oklch(0.627 0.194 149.214)"),
    input: raw("#303052"),
    ring: raw("#a48fff")
  },
  fonts: {
    body: "Abyssinica SIL, ui-serif, serif",
    heading: "Adamina, ui-serif, serif"
  },
  radius: "1.725rem"
});

// src/themes/community/community-mt-cmmdl8.ts
var communityMtCmmdl8Theme = defineTheme({
  name: "community-mt-cmmdl8",
  label: "Nimbus Circuit",
  _sourceName: "Mt",
  category: "Community",
  light: {
    background: raw("#fdfdfd"),
    foreground: raw("#000000"),
    card: raw("#fdfdfd"),
    cardForeground: raw("#000000"),
    popover: raw("#fcfcfc"),
    popoverForeground: raw("#000000"),
    primary: raw("#AFBEA5"),
    primaryForeground: raw("#000000"),
    secondary: raw("#edf0f4"),
    secondaryForeground: raw("#080808"),
    muted: raw("#f5f5f5"),
    mutedForeground: raw("#878787"),
    accent: raw("#495940"),
    accentForeground: raw("#FFFF"),
    destructive: raw("#b3191f"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e7e7ee"),
    input: raw("#ebebeb"),
    ring: raw("#AFBEA5")
  },
  dark: {
    background: raw("#070503"),
    foreground: raw("#f9f8f7"),
    card: raw("#100d08"),
    cardForeground: raw("#f9f8f7"),
    popover: raw("#0b0905"),
    popoverForeground: raw("#f9f8f7"),
    primary: raw("#AFBEA5"),
    primaryForeground: raw("#040302"),
    secondary: raw("#26211a"),
    secondaryForeground: raw("#e7e4df"),
    muted: raw("#1e1a14"),
    mutedForeground: raw("#928f8a"),
    accent: raw("#495940"),
    accentForeground: raw("#FFF"),
    destructive: raw("#b3191f"),
    destructiveForeground: raw("#f9f8f7"),
    border: raw("#2f281b"),
    input: raw("#1a150e"),
    ring: raw("#AFBEA5")
  },
  fonts: {
    body: "Plus Jakarta Sans, sans-serif",
    heading: "Lora, serif"
  },
  radius: "0rem"
});

// src/themes/community/community-kedokteran-cmmc4g.ts
var communityKedokteranCmmc4gTheme = defineTheme({
  name: "community-kedokteran-cmmc4g",
  label: "Kedokteran",
  _sourceName: "kedokteran",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0f172a"),
    card: raw("#ffffff"),
    cardForeground: raw("#0f172a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0f172a"),
    primary: raw("#0284c7"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#f1f5f9"),
    secondaryForeground: raw("#0f172a"),
    muted: raw("#f8fafc"),
    mutedForeground: raw("#64748b"),
    accent: raw("#f0f9ff"),
    accentForeground: raw("#0284c7"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#e2e8f0"),
    input: raw("#f1f5f9"),
    ring: raw("#0284c7")
  },
  dark: {
    background: raw("#020617"),
    foreground: raw("#f8fafc"),
    card: raw("#0f172a"),
    cardForeground: raw("#f8fafc"),
    popover: raw("#0f172a"),
    popoverForeground: raw("#f8fafc"),
    primary: raw("#38bdf8"),
    primaryForeground: raw("#082f49"),
    secondary: raw("#1e293b"),
    secondaryForeground: raw("#f8fafc"),
    muted: raw("#1e293b"),
    mutedForeground: raw("#94a3b8"),
    accent: raw("#1e293b"),
    accentForeground: raw("#38bdf8"),
    destructive: raw("#7f1d1d"),
    destructiveForeground: raw("#fecaca"),
    border: raw("#1e293b"),
    input: raw("#1e293b"),
    ring: raw("#38bdf8")
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Merriweather', serif"
  },
  radius: "0.5rem"
});

// src/themes/community/community-t2-cmm85y.ts
var communityT2Cmm85yTheme = defineTheme({
  name: "community-t2-cmm85y",
  label: "Sage Drift",
  _sourceName: "t2",
  category: "Community",
  light: {
    background: raw("#faf7f5"),
    foreground: raw("#1a1a1a"),
    card: raw("#faf7f5"),
    cardForeground: raw("#1a1a1a"),
    popover: raw("#faf7f5"),
    popoverForeground: raw("#1a1a1a"),
    primary: raw("#9b2c2c"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#fdf2d6"),
    secondaryForeground: raw("#805500"),
    muted: raw("#f0ebe8"),
    mutedForeground: raw("#57534e"),
    accent: raw("#fef3c7"),
    accentForeground: raw("#7f1d1d"),
    destructive: raw("#991b1b"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#f5e8d2"),
    input: raw("#f5e8d2"),
    ring: raw("#9b2c2c")
  },
  dark: {
    background: raw("#1c1917"),
    foreground: raw("#f5f5f4"),
    card: raw("#292524"),
    cardForeground: raw("#f5f5f4"),
    popover: raw("#292524"),
    popoverForeground: raw("#f5f5f4"),
    primary: raw("#b91c1c"),
    primaryForeground: raw("#faf7f5"),
    secondary: raw("#92400e"),
    secondaryForeground: raw("#fef3c7"),
    muted: raw("#1f1c1a"),
    mutedForeground: raw("#d6d3d1"),
    accent: raw("#b45309"),
    accentForeground: raw("#fef3c7"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#44403c"),
    input: raw("#44403c"),
    ring: raw("#b91c1c")
  },
  fonts: {
    body: "AR One Sans, ui-sans-serif, sans-serif, system-ui",
    heading: "Intel One Mono, ui-monospace, monospace"
  },
  radius: "0.375rem"
});

// src/themes/community/community-beso-colors-cmltho.ts
var communityBesoColorsCmlthoTheme = defineTheme({
  name: "community-beso-colors-cmltho",
  label: "Beso Colors",
  _sourceName: "beso-colors",
  category: "Community",
  light: {
    background: raw("#ffffff"),
    foreground: raw("#0a0e1a"),
    card: raw("#f9fafb"),
    cardForeground: raw("#0a0e1a"),
    popover: raw("#ffffff"),
    popoverForeground: raw("#0a0e1a"),
    primary: raw("#00bcd4"),
    primaryForeground: raw("#ffffff"),
    secondary: raw("#7c3aed"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#f3f4f6"),
    mutedForeground: raw("#374151"),
    accent: raw("#00bcd4"),
    accentForeground: raw("#ffffff"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#374151"),
    input: raw("#f3f4f6"),
    ring: raw("#00bcd4")
  },
  dark: {
    background: raw("#0a0e1a"),
    foreground: raw("#ffffff"),
    card: raw("#111827"),
    cardForeground: raw("#ffffff"),
    popover: raw("#111827"),
    popoverForeground: raw("#ffffff"),
    primary: raw("#00bcd4"),
    primaryForeground: raw("#0a0e1a"),
    secondary: raw("#7c3aed"),
    secondaryForeground: raw("#ffffff"),
    muted: raw("#1f2937"),
    mutedForeground: raw("#9ca3af"),
    accent: raw("#00bcd4"),
    accentForeground: raw("#0a0e1a"),
    destructive: raw("#ef4444"),
    destructiveForeground: raw("#ffffff"),
    border: raw("#374151"),
    input: raw("#1f2937"),
    ring: raw("#00bcd4")
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Georgia, serif"
  },
  radius: "0.5rem"
});

// src/themes/community/index.ts
var communityThemes = [
  communityLightGreenCmlhfqTheme,
  communityZenInspiredThemeCmlm0cTheme,
  communityAstrovistaCmlk70Theme,
  communityQrafthiveCmlk6wTheme,
  communityTiesenCmliibTheme,
  communitySageGreenCmlf70Theme,
  communityClaudeCmlr30Theme,
  communityMinimalNeutralCmlr2zTheme,
  communityDesignbyteCmlpf5Theme,
  communityMxBrutalistCmllfvTheme,
  community2077CmledjTheme,
  communityPorfolioThemeCmler0Theme,
  communityVtronCmlpfkTheme,
  communityBoldWikipediaCmlmpbTheme,
  communityDeepPurpleCmlh1jTheme,
  communityPasteelement2CmlpfhTheme,
  communityV2CmlofgTheme,
  communityNlanCmli81Theme,
  communityDarkForgeCmlf2kTheme,
  communityLeadgenCmle6zTheme,
  communityMyAweasomeThemeCmlxzfTheme,
  communityAmberMono20Cmlpw7Theme,
  communityClaudeCmlm0bTheme,
  communityVescrow12CmlhpnTheme,
  communityPlayableCmli0kTheme,
  communityJamaicaCmlh1cTheme,
  communityEnterpriseMod2Cmlva5Theme,
  communityProfessionalThemeCmluajTheme,
  communityOffworldCmlpw4Theme,
  communityTerminalCmll24Theme,
  communityAutoblogCmlpf8Theme,
  communityApexCmlf55Theme,
  communityWhatsappCmmbmnTheme,
  communityLogisticoneCmm0zkTheme,
  communityDeSwissDesignCmlureTheme,
  communityClinids2901Cmll4qTheme,
  communityBainDesignSystemCmm5y6Theme,
  communityEslinksCmmaoeTheme,
  communityTealHueCmm599Theme,
  communityLaraCmm277Theme,
  communityRosePineCmlwpkTheme,
  communityTerminalMutedCmlvazTheme,
  communityJsTsAdventOfCodeCmlr31Theme,
  communityResolveaiAppCmmchqTheme,
  communityShopifyRedCmmabaTheme,
  communityCelestialCmm720Theme,
  communityTwitterCmlznlTheme,
  communityBrownieCmlr31Theme,
  communityPartyRockCmlqxfTheme,
  communityIndiaCmlpfeTheme,
  communityCwhLearningCmlpfaTheme,
  communityTerminalCmlmsnTheme,
  communityPurpleRainCmlh1lTheme,
  communityMetaMaskGeistCmlf9rTheme,
  communityBurgundyCmle93Theme,
  communityClaudeBlu2CmmeadTheme,
  communityViolateEyeCmm3ebTheme,
  communityOpenprofileCmlpf8Theme,
  communityExamdedoCmlpf1Theme,
  communityS3karoCmlpf0Theme,
  communityNubanckCmlf40Theme,
  communityKupikodCmleuaTheme,
  communityAlpineCmleclTheme,
  communityLimeGreenDhamakaCmm7ctTheme,
  communityStellaCmm2mfTheme,
  communityStyrenedarkCmly9dTheme,
  communityEmeraldCmli3uTheme,
  communityDibyCmlhruTheme,
  communityAltarV1CmmadlTheme,
  communityCaserCmm6p0Theme,
  communityMangaVibeCmlr32Theme,
  communityThemeCmlpl5Cmlpl5Theme,
  communityPoppy1Cmlmc0Theme,
  communityBlueYellowWarnUglyAfInLightModeCmljx1Theme,
  communityDibyOrangeCmlhrvTheme,
  communityGoldCmlf3xTheme,
  communityVividSkyCmmjjmTheme,
  communityMossCmmi1gTheme,
  communityBetterLightThemeSupabaseCmmdxiTheme,
  communityClaudeRenkPaletiV10Cmm9i1Theme,
  communityDamonCmlw7uTheme,
  communityGreattingsCmlfwcTheme,
  communityGreenWithYellowThemeCmlewmTheme,
  communityRewaffCmmm3hTheme,
  communityJapanBluesCmmje1Theme,
  communityAltarV1InvertCmmaeoTheme,
  community3dVintagePaperCmm7uqTheme,
  communitySpacelinearCmm4yaTheme,
  communityArtefactoryCmm3xrTheme,
  communityMyThemeCmm24gTheme,
  communityStyreneCmlybuTheme,
  communityOldSchoolCmlx21Theme,
  communityBrowniesCmlkz0Theme,
  communityMCmlgp0Theme,
  communityCourseAppCmmnnrTheme,
  communityTerskCmmlwiTheme,
  communityTerminalDarkRussianCmmljkTheme,
  communitySkyCmmjhaTheme,
  communityEfferdCmmi9lTheme,
  communityItadoriYujiCmmhf9Theme,
  communityInfoseerCmmcv8Theme,
  communityNxtbetQuadraInspiredCmmaeaTheme,
  communityGreenbarbequeueCmm9aeTheme,
  communityCatppuccinMochaCmm3nhTheme,
  communityRetro2Cmm2e2Theme,
  communityOrioDesignSystemCmm1riTheme,
  communityRobotoModernCmlwxaTheme,
  community1Cmlwi5Theme,
  communityAldoRebeloAdminCmlwggTheme,
  communityPurplePopinsCmlvfbTheme,
  communityTestCmlpfcTheme,
  communityPalmCmlotmTheme,
  communityBlackAndPinkCmliekTheme,
  communitySesiTheme2CmmmkbTheme,
  communityBlackCmmls5Theme,
  communityLastchatCmmi2xTheme,
  communitySandstoneCmmi1pTheme,
  communityIconicTerminalCmmhiuTheme,
  communitySulavThemeCmmf66Theme,
  communityOikweeCmmb8lTheme,
  communityIbkThemeCmmb5dTheme,
  communityBlueOrangeCmm5x6Theme,
  communityRetroCmm2d5Theme,
  communityDomiaCmlz4gTheme,
  communityPurpleSoftPopinsCmlwkuTheme,
  communityFlatPink2CmlieoTheme,
  communityLimesCmliemTheme,
  communityCarbonEmberCmlf2hTheme,
  communityVermillionCmmtjpTheme,
  communityIntropicMuiReactCursorRetoolCmmt51Theme,
  communityRemedySControlCmmszcTheme,
  communityPolarisCmmr3sTheme,
  communityEsswCmmphmTheme,
  communityDeSarannVillaCmmni6Theme,
  communityServiceHubThemeCmmmrnTheme,
  communityStudentSpacelabNetwork1CmmkfnTheme,
  communityChalkCmmjgoTheme,
  communityLavandaCmmis1Theme,
  communityWoodforge9CmmhugTheme,
  communityCaffeinThhemeCmmhksTheme,
  communityPapayaCmmgxhTheme,
  communitySakuraCmmghpTheme,
  communityVraiDeliceCmm3srTheme,
  communityOrientCmlzhgTheme,
  communityAgoraEventsCmlpmfTheme,
  communityPurplesCmlienTheme,
  communityHyperRedCmlielTheme,
  communityMagic3Cmmt0aTheme,
  communityMagic2Cmmsz6Theme,
  communityBestDeisgneUiUxShadcnCmmsalTheme,
  communityJknmCmmrfzTheme,
  community53Cmmp8aTheme,
  communityImhicihuCmmp28Theme,
  communitySomethingCmmmy7Theme,
  communityACmmm59Theme,
  communityLyteCmml0pTheme,
  communityAryzeColors2026V2CmmkfwTheme,
  communitySukunaCmmhf8Theme,
  communityBlueCmmgxuTheme,
  communityUvDayCmmfg9Theme,
  communityMyTheme01CmmemxTheme,
  communityMtCmmdl8Theme,
  communityKedokteranCmmc4gTheme,
  communityT2Cmm85yTheme,
  communityBesoColorsCmlthoTheme
];

// src/themes/index.ts
var themes = [...builtinThemes, ...claudeThemes, ...tweakcnThemes];
export {
  FONTS,
  TAILWIND_COLORS,
  VIVIDNESS_PRESETS,
  adjustVividness,
  amberMinimalTheme,
  amberTheme,
  amethystHazeTheme,
  boldTechTheme,
  bookmarkletUrl,
  browserSnippet,
  bubblegumTheme,
  builtinThemes,
  caffeineTheme,
  candyTheme,
  candylandTheme,
  catppuccinTheme,
  claudeTheme,
  claudeThemes,
  claymorphismTheme,
  cleanSlateTheme,
  communityThemes,
  cosmicNightTheme,
  createTheme,
  cyberpunkTheme,
  defaultTheme,
  defineTheme,
  deserializeTheme,
  doom64Theme,
  elegantLuxuryTheme,
  extendTheme,
  fetchAllTweakCNThemes,
  fetchTweakCNRegistry,
  fetchTweakCNTheme,
  forestTheme,
  generateCSS,
  generatePattern,
  generateThemeVariables,
  googleFontsUrl,
  graphiteTheme,
  indigoTheme,
  kodamaGroveTheme,
  midnightBloomTheme,
  midnightTheme,
  mochaMousseTheme,
  modernMinimalTheme,
  natureTheme,
  neoBrutalismTheme,
  northernLightsTheme,
  notebookTheme,
  oceanBreezeTheme,
  oceanTheme,
  pastelDreamsTheme,
  perpetuityTheme,
  quantumRoseTheme,
  raw,
  resolveColor,
  resolveTokens,
  retroArcadeTheme,
  roseTheme,
  serializeTheme,
  solarDuskTheme,
  starryNightTheme,
  storedThemeToCSS,
  sunsetHorizonTheme,
  sunsetTheme,
  supabaseTheme,
  t3ChatTheme,
  tailwindBasicThemes,
  tangerineTheme,
  tealTheme,
  theme_category_labels_en_default as themeCategoryLabelsEn,
  theme_category_labels_es_default as themeCategoryLabelsEs,
  theme_category_labels_pt_default as themeCategoryLabelsPt,
  themeFromCSS,
  themeFromCSSVars,
  themeFromSnippetOutput,
  themeFromTweakCNItem,
  theme_labels_en_default as themeLabelsEn,
  theme_labels_es_default as themeLabelsEs,
  theme_labels_pt_default as themeLabelsPt,
  themes,
  tweakcnBookmarkletUrl,
  tweakcnSnippet,
  tweakcnThemes,
  twitterTheme,
  validateStoredTheme,
  vintagePaperTheme,
  violetBloomTheme
};
//# sourceMappingURL=index.mjs.map