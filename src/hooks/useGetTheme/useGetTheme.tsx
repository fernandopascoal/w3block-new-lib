import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useAxios } from '../useAxios';
import { W3blockAPI } from '../../enums/W3blockAPI';
import { useRouterConnect } from '../useRouterConnect';
import { PixwayAPIRoutes } from '../../enums/PixwayAPIRoutes';


export const useGetTheme = (disabled = false) => {
  const [href, setHref] = useState('');
  const axios = useAxios(W3blockAPI.COMMERCE);
  const { query } = useRouterConnect();
  useEffect(() => {
    if (window) {
      setHref(window.location.href);
      //setHref('https://hashdex.stg.w3block.io/' + '?' + Date.now());
      //setHref('https://foodbusters.stg.w3block.io/?' + Date.now());
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
