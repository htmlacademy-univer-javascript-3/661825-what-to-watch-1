import {Navigate} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';
import {AuthorizationStatus} from '../../types/auth-status';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-reducer/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children} : PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return children;
  } else {
    return <Navigate to={RoutesEnum.Login}/>;
  }
}

export default PrivateRoute;
