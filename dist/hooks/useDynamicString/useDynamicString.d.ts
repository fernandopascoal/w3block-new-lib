import { IThemeContext } from '../../interfaces/IThemeContext';
export declare const useDynamicString: (input: string | undefined) => {
    text: any;
    loaded: boolean;
    loading: boolean;
} | {
    text: string;
    loaded: boolean;
    loading: boolean | undefined;
};
export declare const getDynamicString: (input: string | undefined, data: any) => {
    text: string;
    loaded: boolean;
};
export declare const getI18nString: (input: string | undefined, locale: string, theme: IThemeContext) => {
    text: any;
    loaded: boolean;
    loading: boolean;
};
