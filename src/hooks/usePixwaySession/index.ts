import { useContext } from 'react';
import { PixwaySessionContext } from '../../contexts/PixwaySessionContext';

export const usePixwaySession = () => {
  return useContext(PixwaySessionContext);
};
