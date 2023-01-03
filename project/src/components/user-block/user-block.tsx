import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import React from 'react';
import {AuthorizationStatus} from '../../types/auth-status';
import {Link} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';
import {getAuthorizationStatus, getUser} from '../../store/user-reducer/user-selectors';

export type AuthorizedUserProps = {
  avatarLink: string;
}

function AuthorizedUser(props: AuthorizedUserProps) {
  const { avatarLink } = props;
  const dispatch = useAppDispatch();

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return(
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={RoutesEnum.MyList}>
            <img src={avatarLink} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link to={'/'} className="user-block__link" onClick={handleOnClick}>Sign out</Link>
      </li>
    </>
  );
}

function UserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth
        ? <AuthorizedUser avatarLink={`${user?.avatarUrl}`} />
        : <Link to={RoutesEnum.Login} className='user-block__link'>Sign in</Link>}
    </ul>
  );
}
export default React.memo(UserBlock);
