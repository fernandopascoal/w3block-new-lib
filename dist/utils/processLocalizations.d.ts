interface Localization {
    [key: string]: any;
}
interface LocalizationData {
    data: Array<{
        id: number;
        attributes: Localization;
    }>;
}
interface InputItem {
    id: number;
    attributes: {
        [key: string]: any;
        locale: string;
        localizations: LocalizationData;
    };
}
export declare function processLocalizations(items: any[]): InputItem[];
export {};
