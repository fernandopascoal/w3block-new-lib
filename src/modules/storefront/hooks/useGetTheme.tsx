import { useEffect, useState } from 'react';


import { W3blockAPI } from '../../shared/enums/W3blockAPI';

import { PixwayAPIRoutes } from '../../shared/enums/PixwayAPIRoutes';
import { useQuery } from '@tanstack/react-query';
import { useAxios } from '../../shared/hooks/useAxios';
import { useRouterConnect } from '../../shared/hooks/useRouterConnect';


export const useGetTheme = (disabled = false) => {
  const [href, setHref] = useState('');
  const axios = useAxios(W3blockAPI.COMMERCE);
  const { query } = useRouterConnect();
  useEffect(() => {
    if (window) {
      //setHref(window.location.href);
      //setHref('https://hashdex.stg.w3block.io/' + '?' + Date.now());
      setHref('https://foodbusters.w3block.io/?' + Date.now());
    }
  }, []);

  return useQuery(
    [PixwayAPIRoutes.GET_THEME, href],
    () =>
      axios
        .get(PixwayAPIRoutes.GET_THEME + `?url=${href}`)
        .then((data) => data.data),
    {
      enabled: href != undefined && href != '' && !query?.preview && !disabled,
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );
};
