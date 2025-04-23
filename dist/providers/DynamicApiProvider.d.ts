import { ReactNode } from 'react';
import { DynamicApiModuleInterface } from '../interfaces/Theme';
export interface DynamicApiContextInterface {
    config?: DynamicApiModuleInterface;
    datasource: any;
    isDynamic: boolean;
    loading?: boolean;
    strapiLocalization?: boolean;
}
interface DynamicApiProviderProps {
    children: ReactNode;
    dynamicModule?: DynamicApiModuleInterface;
}
export declare const DynamicApiProvider: ({ children, dynamicModule, }: DynamicApiProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useDynamicApi: () => {
    config?: DynamicApiModuleInterface;
    datasource: any;
    isDynamic: boolean;
    loading?: boolean;
    strapiLocalization?: boolean;
};
export {};
