import { useContext } from 'react';
import { W3blockSessionContext } from '../../contexts/W3blockSessionContext';

export const usePixwaySession = () => {
  return useContext(W3blockSessionContext);
};
