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
  sm: { dots: 12, grid: 16, lines: 16, cross: 12, zigzag: 14, checker: 12, tri: 12, hex: 24 },
  md: { dots: 20, grid: 24, lines: 24, cross: 20, zigzag: 20, checker: 20, tri: 20, hex: 36 },
  lg: { dots: 32, grid: 40, lines: 40, cross: 32, zigzag: 30, checker: 32, tri: 32, hex: 56 }
};
function getSize(s, key) {
  return SIZE_MAP[s ?? "md"][key];
}
function generatePattern(config) {
  const size = config.size ?? "md";
  const opacity = config.opacity ?? 0.15;
  const color = config.color ? resolveColor(config.color) : "currentColor";
  const colorWithOpacity = wrapWithOpacity(color, opacity);
  switch (config.type) {
    case "none":
      return { backgroundImage: "none", backgroundSize: "auto" };
    case "dots": {
      const s = getSize(size, "dots");
      return {
        backgroundImage: `radial-gradient(${colorWithOpacity} 1px, transparent 1px)`,
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
      return {
        backgroundImage: [
          `linear-gradient(${colorWithOpacity} 1px, transparent 1px)`,
          `linear-gradient(to right, ${colorWithOpacity} 1px, transparent 1px)`
        ].join(", "),
        backgroundSize: `${s}px ${s}px`,
        backgroundColor: "transparent"
        // Cross pattern uses offset positioning — applied via CSS var usage
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
          `linear-gradient(45deg, ${colorWithOpacity} 25%, transparent 25%)`
        ].join(", "),
        backgroundSize: `${s}px ${half}px`
      };
    }
    case "checkerboard": {
      const s = getSize(size, "checker");
      return {
        backgroundImage: [
          `linear-gradient(45deg, ${colorWithOpacity} 25%, transparent 25%, transparent 75%, ${colorWithOpacity} 75%, ${colorWithOpacity})`,
          `linear-gradient(45deg, ${colorWithOpacity} 25%, transparent 25%, transparent 75%, ${colorWithOpacity} 75%, ${colorWithOpacity})`
        ].join(", "),
        backgroundSize: `${s}px ${s}px`,
        backgroundColor: "transparent"
      };
    }
    case "triangles": {
      const s = getSize(size, "tri");
      const half = s / 2;
      return {
        backgroundImage: [
          `linear-gradient(120deg, ${colorWithOpacity} 33.33%, transparent 33.33%)`,
          `linear-gradient(240deg, ${colorWithOpacity} 33.33%, transparent 33.33%)`,
          `linear-gradient(0deg, ${colorWithOpacity} 33.33%, transparent 33.33%)`
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
          `linear-gradient(60deg, ${colorWithOpacity} 25%, transparent 25% 75%, ${colorWithOpacity} 75%)`,
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
  if (color === "currentColor") {
    const pct2 = Math.round(opacity * 100);
    return `color-mix(in oklch, currentColor ${pct2}%, transparent)`;
  }
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
  if (fonts.sans) lines.push(`  --font-sans: ${fonts.sans};`);
  if (fonts.serif) lines.push(`  --font-serif: ${fonts.serif};`);
  if (fonts.mono) lines.push(`  --font-mono: ${fonts.mono};`);
  if (theme.pattern && theme.pattern.type !== "none") {
    const patternStyle = generatePattern(theme.pattern);
    lines.push(`  --pattern-image: ${patternStyle.backgroundImage};`);
    lines.push(`  --pattern-size: ${patternStyle.backgroundSize};`);
    if (patternStyle.backgroundColor) {
      lines.push(`  --pattern-color: ${patternStyle.backgroundColor};`);
    }
  }
  lines.push("}", "");
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
  if (fonts.sans) lines.push(`  --font-sans: var(--font-sans);`);
  if (fonts.serif) lines.push(`  --font-serif: var(--font-serif);`);
  if (fonts.mono) lines.push(`  --font-mono: var(--font-mono);`);
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
  if (fonts?.sans) lines.push(`  --font-sans: ${fonts.sans};`);
  if (fonts?.serif) lines.push(`  --font-serif: ${fonts.serif};`);
  if (fonts?.mono) lines.push(`  --font-mono: ${fonts.mono};`);
  if (pattern && pattern.type !== "none") {
    const patternStyle = generatePattern(pattern);
    lines.push(`  --pattern-image: ${patternStyle.backgroundImage};`);
    lines.push(`  --pattern-size: ${patternStyle.backgroundSize};`);
    if (patternStyle.backgroundColor) {
      lines.push(`  --pattern-color: ${patternStyle.backgroundColor};`);
    }
  }
  lines.push("}", "");
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
  if (fonts?.sans) lines.push(`  --font-sans: var(--font-sans);`);
  if (fonts?.serif) lines.push(`  --font-serif: var(--font-serif);`);
  if (fonts?.mono) lines.push(`  --font-mono: var(--font-mono);`);
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
  if (t._source) stored._source = t._source;
  if (t._presetName) stored._presetName = t._presetName;
  if (t._generatorConfig) stored._generatorConfig = t._generatorConfig;
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
  if (normalized["font-sans"]) fonts.sans = normalized["font-sans"];
  if (normalized["font-serif"]) fonts.serif = normalized["font-serif"];
  if (normalized["font-mono"]) fonts.mono = normalized["font-mono"];
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
  const sansCandidates = [light["font-sans"], extractSingleVar(unwrapped, "font-sans")];
  const serifCandidates = [light["font-serif"], extractSingleVar(unwrapped, "font-serif")];
  const monoCandidates = [light["font-mono"], extractSingleVar(unwrapped, "font-mono")];
  const firstDefined = (arr) => arr.find((v) => v !== void 0);
  const sanVal = firstDefined(sansCandidates);
  const serVal = firstDefined(serifCandidates);
  const monoVal = firstDefined(monoCandidates);
  if (sanVal) fonts.sans = sanVal;
  if (serVal) fonts.serif = serVal;
  if (monoVal) fonts.mono = monoVal;
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
    'radius','font-sans','font-serif','font-mono'
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
      console.log('%c tailtheme steal: copied to clipboard!', 'color: #4ade80; font-weight: bold;');
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
  const sanVal = combined["--font-sans"] ?? combined["font-sans"];
  const serVal = combined["--font-serif"] ?? combined["font-serif"];
  const monoVal = combined["--font-mono"] ?? combined["font-mono"];
  if (sanVal) fonts.sans = sanVal.trim();
  if (serVal) fonts.serif = serVal.trim();
  if (monoVal) fonts.mono = monoVal.trim();
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
  console.log('%c tailtheme: fetching ' + apiUrl, 'color: #60a5fa;');
  try {
    var res = await fetch(apiUrl);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var item = await res.json();
    var out = JSON.stringify(item, null, 2);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(out);
      console.log('%c tailtheme: copied tweakcn theme JSON to clipboard!', 'color: #4ade80; font-weight: bold;');
    }
    console.log(out);
    return item;
  } catch(e) {
    console.error('tailtheme steal-tweakcn:', e);
  }
})();`
);
var tweakcnBookmarkletUrl = `javascript:${encodeURIComponent(tweakcnSnippet)}`;

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
  JETBRAINS_MONO: "JetBrains+Mono:wght@400;500;700",
  FIRA_CODE: "Fira+Code:wght@400;500;700",
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
    background: "neutral-950",
    foreground: "rose-50",
    card: "neutral-900",
    cardForeground: "rose-50",
    popover: "neutral-950",
    popoverForeground: "rose-50",
    primary: "rose-400",
    primaryForeground: "neutral-950",
    secondary: "neutral-800",
    secondaryForeground: "rose-200",
    muted: "neutral-800",
    mutedForeground: "neutral-400",
    accent: "neutral-800",
    accentForeground: "rose-200",
    destructive: "red-400",
    destructiveForeground: "neutral-950",
    border: "neutral-800",
    input: "neutral-800",
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
  candyTheme
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

// src/themes/index.ts
var themes = [...builtinThemes, ...tweakcnThemes];
export {
  FONTS,
  TAILWIND_COLORS,
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
  claymorphismTheme,
  cleanSlateTheme,
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
  tangerineTheme,
  tealTheme,
  themeFromCSS,
  themeFromCSSVars,
  themeFromSnippetOutput,
  themeFromTweakCNItem,
  themes,
  tweakcnBookmarkletUrl,
  tweakcnSnippet,
  tweakcnThemes,
  twitterTheme,
  vintagePaperTheme,
  violetBloomTheme
};
//# sourceMappingURL=index.mjs.map