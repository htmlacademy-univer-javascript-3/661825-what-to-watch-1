import {Navigate} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';

type PrivateRouteProps = {
  isAuth: boolean;
  children: JSX.Element;
}

function PrivateRoute({isAuth, children} : PrivateRouteProps) {
  return isAuth ? children : <Navigate to={RoutesEnum.Login}/>;
}

export default PrivateRoute;
