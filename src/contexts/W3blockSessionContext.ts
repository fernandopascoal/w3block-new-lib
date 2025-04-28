import { createContext } from 'react';

import { SessionContextValue } from 'next-auth/react';


export interface W3blockSessionContextInterface {
  token?: string;
  companyId?: string;
  user?: {
    name?: string;
  };
}

export const W3blockSessionContext = createContext<SessionContextValue>({
  data: null,
  status: 'unauthenticated',
});
