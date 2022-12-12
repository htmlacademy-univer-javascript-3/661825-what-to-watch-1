import {Navigate} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';
import {AuthorizationStatus} from '../../types/auth-status';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children} : PrivateRouteProps) {
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return children;
  } else {
    return <Navigate to={RoutesEnum.Login}/>;
  }
}

export default PrivateRoute;
