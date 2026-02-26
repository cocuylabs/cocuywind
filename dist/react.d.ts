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
    sans?: string;
    serif?: string;
    mono?: string;
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
    /** e.g. "0.5rem" */
    radius?: string;
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
    /** CSS selector to apply theme to. Defaults to ':root' / 'html' */
    target?: string;
}
declare function ThemeProvider({ children, themes, defaultTheme, defaultMode, persistKey, target, }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

/**
 * Access the current theme context.
 * Must be used within a ThemeProvider.
 *
 * @example
 * const { theme, setTheme, mode, setMode, resolvedMode, availableThemes } = useTheme()
 */
declare function useTheme(): ThemeContextValue;

type ThemePickerSection = 'colors' | 'fonts' | 'patterns' | 'radius';
interface ThemePickerProps {
    /** Available preset themes to show as swatches */
    themes: Theme[];
    /** Currently selected theme */
    value: Theme;
    /** Called when theme selection changes */
    onChange: (theme: Theme) => void;
    /** Show custom theme builder */
    allowCustom?: boolean;
    /** Which sections to show in the custom builder */
    sections?: ThemePickerSection[];
    className?: string;
}
/**
 * ThemePicker — preset swatches + optional custom builder.
 *
 * Renders:
 * 1. Preset swatches grouped by Built-in / TweakCN
 * 2. Custom builder (if allowCustom) with color, font, pattern, radius sections
 */
declare function ThemePicker({ themes, value, onChange, allowCustom, sections, className, }: ThemePickerProps): react_jsx_runtime.JSX.Element;

export { type ColorMode, ThemeContext, type ThemeContextValue, ThemePicker, type ThemePickerProps, type ThemePickerSection, ThemeProvider, type ThemeProviderProps, useTheme };
