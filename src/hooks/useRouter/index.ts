import { useContext } from 'react';
import { PixwayRouterContext } from '../../contexts/PixwayRouterContext';



const useRouter = () => {
  return useContext(PixwayRouterContext);
};

export default useRouter;
