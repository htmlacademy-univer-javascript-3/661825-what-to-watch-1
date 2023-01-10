import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Navigate, useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../types/auth-status';
import {RoutesEnum} from '../../types/routes';
import {FormEvent, useRef, useState} from 'react';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import {getAuthorizationStatus} from '../../store/user-reducer/user-selectors';


function SignIn() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const isSignInMessage = false;
  const isValidPassword = (password: string): boolean => /\d+[a-zA-Z]+|[a-zA-Z]+\d+/.test(password);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData))
      .then(() => navigate(RoutesEnum.Main))
      .catch(() => setIsError(true));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && isValidPassword(String(passwordRef.current?.value))) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      setIsError(true);
    }
  };

  if (authorizationStatus === AuthorizationStatus.Auth){
    return <Navigate to={RoutesEnum.Main}/>;
  }
  return (
    <body>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo className={'logo__link'}/>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
            <div className="sign-in__message">
              {(
                () => {
                  if (isError) {
                    return (<p>Please enter a valid email address and password</p>);
                  } else if (isSignInMessage) {
                    return (<p>We can’t recognize this email and password combination. Please try again.</p>);
                  }
                })()}
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={loginRef}
                  required
                />
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    </body>
  );
}

export default SignIn;


