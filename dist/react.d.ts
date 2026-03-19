import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

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
     * cocuywind does not manage upload — the consumer supplies a URL or data URL after upload.
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
declare const ThemeContext: React__default.Context<ThemeContextValue | null>;
interface ThemeProviderProps {
    children: React__default.ReactNode;
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
    /** Size (px) of the three palette dots in each swatch row */
    paletteSwatchSize?: number;
    /** Show the preset palette grid */
    showPalette?: boolean;
    /** Show the custom palette controls */
    showCustomPalette?: boolean;
}
interface ThemePalettePickerProps {
    themes: Theme[];
    value: string | null;
    onChange: (name: string) => void;
    labels?: Record<string, Record<string, string>>;
    locale?: 'en' | 'es' | 'pt';
    paletteMaxHeight?: string | number;
    previewMode?: 'light' | 'dark';
    className?: string;
    swatchSize?: number;
}
declare function ThemePalettePicker({ themes, value, onChange, labels, locale, paletteMaxHeight, previewMode, className, swatchSize, }: ThemePalettePickerProps): react_jsx_runtime.JSX.Element | null;
interface ThemeCustomPalettePickerProps {
    hasPreset: boolean;
    primary: TailwindColor | null;
    secondary: TailwindColor | null;
    neutral: TailwindColor | 'none' | null;
    onPrimaryChange: (value: TailwindColor | null) => void;
    onSecondaryChange: (value: TailwindColor | null) => void;
    onNeutralChange: (value: TailwindColor | 'none' | null) => void;
    className?: string;
    title?: string;
    subtitle?: string;
    labels?: Record<string, Record<string, string>>;
    locale?: 'en' | 'es' | 'pt';
}
declare function ThemeCustomPalettePicker({ hasPreset, primary, secondary, neutral, onPrimaryChange, onSecondaryChange, onNeutralChange, className, title, subtitle, labels, locale, }: ThemeCustomPalettePickerProps): react_jsx_runtime.JSX.Element;
interface ThemeFontsPickerProps {
    value: ThemeFonts;
    onChange: (value: ThemeFonts) => void;
    className?: string;
    labels?: Record<string, Record<string, string>>;
    locale?: 'en' | 'es' | 'pt';
}
declare function ThemeFontsPicker({ value, onChange, className, labels, locale }: ThemeFontsPickerProps): react_jsx_runtime.JSX.Element;
interface ThemePatternsPickerProps {
    value: ThemePattern;
    onChange: (value: ThemePattern) => void;
    className?: string;
    labels?: Record<string, Record<string, string>>;
    locale?: 'en' | 'es' | 'pt';
}
declare function ThemePatternsPicker({ value, onChange, className, labels, locale }: ThemePatternsPickerProps): react_jsx_runtime.JSX.Element;
interface ThemeRadiusPickerProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    labels?: Record<string, Record<string, string>>;
    locale?: 'en' | 'es' | 'pt';
}
declare function ThemeRadiusPicker({ value, onChange, className, labels, locale }: ThemeRadiusPickerProps): react_jsx_runtime.JSX.Element;
interface ThemeBackgroundImagePickerProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    labels?: Record<string, Record<string, string>>;
    locale?: 'en' | 'es' | 'pt';
}
declare function ThemeBackgroundImagePicker({ value, onChange, className, labels, locale }: ThemeBackgroundImagePickerProps): react_jsx_runtime.JSX.Element;
declare function ThemePicker({ themes, value, onChange, allowCustom, sections, className, locale, labels, paletteMaxHeight, paletteSwatchSize, showPalette, showCustomPalette, }: ThemePickerProps): react_jsx_runtime.JSX.Element;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    size?: 'xs' | 'sm' | 'md' | 'icon';
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;

type ClassValue = string | null | undefined | false | Record<string, boolean>;
declare function cn(...inputs: ClassValue[]): string;

export { Button, type ButtonProps, type ClassValue, type ColorMode, Input, type InputProps, Label, type LabelProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, type SelectProps, SelectSeparator, SelectTrigger, SelectValue, ThemeBackgroundImagePicker, type ThemeBackgroundImagePickerProps, ThemeContext, type ThemeContextValue, ThemeCustomPalettePicker, type ThemeCustomPalettePickerProps, ThemeFontsPicker, type ThemeFontsPickerProps, ThemePalettePicker, type ThemePalettePickerProps, ThemePatternsPicker, type ThemePatternsPickerProps, ThemePicker, type ThemePickerProps, type ThemePickerSection, ThemeProvider, type ThemeProviderProps, ThemeRadiusPicker, type ThemeRadiusPickerProps, cn, useTheme };
