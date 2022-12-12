import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import React from 'react';
import {AuthorizationStatus} from '../../types/auth-status';
import {Link} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';

export type AuthorizatedUserProps = {
  avatarLink: string;
}

function AuthorizatedUser(props: AuthorizatedUserProps) {
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
          <img src={avatarLink} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={handleOnClick}>Sign out</a>
      </li>
    </>
  );
}

function UserBlock() {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth
        ? <AuthorizatedUser avatarLink={'img/avatar.jpg'} />
        : <Link to={RoutesEnum.Login} className='user-block__link'>Sign in</Link>}
    </ul>
  );
}
export default UserBlock;
