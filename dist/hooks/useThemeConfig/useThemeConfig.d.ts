export declare const useThemeConfig: () => {
    defaultTheme?: import("../../interfaces/Theme").Theme | null;
    setDefaultTheme?: (Theme: import("../../interfaces/Theme").Theme) => void;
    pageTheme?: import("../../interfaces/Theme").TemplateData | null;
    setPageName?: import("react").Dispatch<import("react").SetStateAction<string>>;
    isError?: boolean;
    isThemeError?: boolean;
    isThemeSuccess?: boolean;
    setPageTheme?: (TemplateData: import("../../interfaces/Theme").TemplateData) => void;
    pageInfo?: import("../../interfaces/Theme").GetPageInfoInterface;
};
