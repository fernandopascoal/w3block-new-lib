import { ReactNode } from 'react';

import { NextRouter } from 'next/router';
import { PixwayRouterContext } from '../../contexts/PixwayRouterContext';


interface Props {
  children: ReactNode;
  router: NextRouter;
}

export const PixwaySDKNextRouterAdapter = ({ children, router }: Props) => {
  return (
    <PixwayRouterContext.Provider value={router}>
      {children}
    </PixwayRouterContext.Provider>
  );
};
