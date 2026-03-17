import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type TailwindColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
type TailwindShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
/** A Tailwind color reference — resolved at runtime via TAILWIND_COLORS lookup */
type TailwindToken = `${TailwindColor}-${TailwindShade}` | 'white' | 'black';
/** Any valid CSS color string (oklch, hsl, hex, etc.) — passes through as-is */
type RawColor = string & {
    readonly __brand: 'RawColor';
};
/** ColorToken accepts both Tailwind token refs and raw CSS color values */
type ColorToken = TailwindToken | RawColor;
/** shadcn/ui-compatible color token set */
interface ThemeTokens {
    background: ColorToken;
    foreground: ColorToken;
    card: ColorToken;
    cardForeground: ColorToken;
    popover: ColorToken;
    popoverForeground: ColorToken;
    primary: ColorToken;
    primaryForeground: ColorToken;
    secondary: ColorToken;
    secondaryForeground: ColorToken;
    muted: ColorToken;
    mutedForeground: ColorToken;
    accent: ColorToken;
    accentForeground: ColorToken;
    destructive: ColorToken;
    destructiveForeground: ColorToken;
    border: ColorToken;
    input: ColorToken;
    ring: ColorToken;
}
interface ThemeFonts {
    /** Body / UI font — applied to :root. Defaults to system-ui sans-serif. */
    body?: string;
    /** Heading / display font — applied to h1–h6. Omit to use body font for headings too. */
    heading?: string;
}
type PatternType = 'none' | 'dots' | 'grid' | 'cross' | 'diagonal-lines' | 'horizontal-lines' | 'vertical-lines' | 'zigzag' | 'checkerboard' | 'triangles' | 'hexagons' | 'noise';
interface ThemePattern {
    type: PatternType;
    /** Defaults to current foreground at low opacity */
    color?: ColorToken;
    /** 0–1, default 0.15 */
    opacity?: number;
    /** default 'md' */
    size?: 'sm' | 'md' | 'lg';
}
interface Theme {
    /** Machine key: "ocean" */
    name: string;
    /** Display name: "Ocean Blue" */
    label: string;
    light: ThemeTokens;
    dark: ThemeTokens;
    fonts?: ThemeFonts;
    pattern?: ThemePattern;
    /**
     * CSS background-image value for a custom background, e.g. `"url('https://...')"`.
     * tailtheme does not manage upload — the consumer supplies a URL or data URL after upload.
     * Renders below any pattern overlay.
     */
    backgroundImage?: string;
    /** e.g. "0.5rem" */
    radius?: string;
    /** Groups themes in the picker: 'Basic' | 'Curated' | 'TweakCN' */
    category?: string;
    /** Optional original/source label for display or attribution */
    _sourceName?: string;
}

type ColorMode = 'light' | 'dark' | 'system';
interface ThemeContextValue {
    /** Current active theme object */
    theme: Theme;
    /** Set the active theme by name or Theme object */
    setTheme: (theme: Theme | string) => void;
    /** Current color mode */
    mode: ColorMode;
    /** Set the color mode */
    setMode: (mode: ColorMode) => void;
    /** The resolved mode ('light' | 'dark') based on system preference */
    resolvedMode: 'light' | 'dark';
    /** All available themes */
    availableThemes: Theme[];
}
declare const ThemeContext: React.Context<ThemeContextValue | null>;
interface ThemeProviderProps {
    children: React.ReactNode;
    /** All themes available to the picker */
    themes: Theme[];
    /** Default theme name or Theme object */
    defaultTheme?: string | Theme;
    /** Default color mode */
    defaultMode?: ColorMode;
    /** localStorage key for persistence. Set to null to disable. */
    persistKey?: string | null;
}
declare function ThemeProvider({ children, themes, defaultTheme, defaultMode, persistKey, }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

/**
 * Access the current theme context.
 * Must be used within a ThemeProvider.
 *
 * @example
 * const { theme, setTheme, mode, setMode, resolvedMode, availableThemes } = useTheme()
 */
declare function useTheme(): ThemeContextValue;

type ThemePickerSection = 'fonts' | 'patterns' | 'radius' | 'background';
interface ThemePickerProps {
    themes: Theme[];
    value: Theme;
    onChange: (theme: Theme) => void;
    allowCustom?: boolean;
    sections?: ThemePickerSection[];
    className?: string;
    locale?: 'en' | 'es' | 'pt';
    labels?: Record<string, Record<string, string>>;
    /** Max height for the palette swatches area only — sections remain visible below */
    paletteMaxHeight?: string | number;
}
declare function ThemePicker({ themes, value, onChange, allowCustom, sections, className, locale, labels, paletteMaxHeight, }: ThemePickerProps): react_jsx_runtime.JSX.Element;

export { type ColorMode, ThemeContext, type ThemeContextValue, ThemePicker, type ThemePickerProps, type ThemePickerSection, ThemeProvider, type ThemeProviderProps, useTheme };
