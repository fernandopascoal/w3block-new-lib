import { useContext } from 'react';
import { W3blockUISDKGereralConfigContext } from '../../contexts/W3blockUISDKGeneralConfigContext';



export const useCompanyConfig = () => {
  return useContext(W3blockUISDKGereralConfigContext);
};
