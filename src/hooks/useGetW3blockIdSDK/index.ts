import { useCallback } from 'react';

import { W3blockIdSDK } from '@w3block/sdk-id';

import { useCompanyConfig } from '../useCompanyConfig';

import { useSessionUser } from '../useSessionUser';
import { usePixwayAPIURL } from '../usePixwayAPIURL';
import { useToken } from '../useToken';


export const useGetW3blockIdSDK = () => {
  const token = useToken();
  const { companyId: tenantId } = useCompanyConfig();
  const user = useSessionUser();
  const { w3blockIdAPIUrl } = usePixwayAPIURL();

  return useCallback(async () => {
    const sdk = new W3blockIdSDK({
      autoRefresh: false,
      baseURL: w3blockIdAPIUrl,
    });
    if (user && token) {
      await sdk.authenticate({
        refreshToken: user.refreshToken ?? '',
        authToken: token,
        tenantId,
      });
    }
    return sdk;
  }, [tenantId, token, user, w3blockIdAPIUrl]);
};
