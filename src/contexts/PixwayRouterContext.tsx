import { createContext } from 'react';

export interface RouterUrlConfig {
  path?: string;
  query?: Record<string, string>;
  replace?: boolean;
}

export interface CustomRouter {
  push: (config: RouterUrlConfig) => void;
  replace: (config: RouterUrlConfig) => void;
  reload: () => void;
  currentPath: string;
  query: any;
}




export const PixwayRouterContext = createContext<CustomRouter>({} as CustomRouter);
