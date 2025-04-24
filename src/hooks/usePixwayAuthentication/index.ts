import { useContext } from 'react';
import { W3blockAuthenticationContext } from '../../contexts/W3blockAuthenticationContext';



export const usePixwayAuthentication = () => {
  return useContext(W3blockAuthenticationContext);
};
