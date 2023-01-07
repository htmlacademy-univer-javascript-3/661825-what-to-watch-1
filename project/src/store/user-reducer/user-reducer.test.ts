import {userReducer} from './user-reducer';
import {AuthorizationStatus} from '../../types/auth-status';
import {User} from '../../types/user';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

describe('User Reducer Tests', () => {
  it('should auth "unknown" when unknown action', () => {
    const expectedState = {authorizationStatus: AuthorizationStatus.Unknown, user: null};
    expect(userReducer.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(expectedState);
  });

  it('should auth "no auth" when logout success', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as User;
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: user};
    const expectedState = {authorizationStatus: AuthorizationStatus.NoAuth, user: null};

    expect(userReducer.reducer(state, {type: logoutAction.fulfilled.type}))
      .toEqual(expectedState);
  });

  it('should auth "auth" when logout fail', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as User;
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: user};
    const expectedState = {authorizationStatus: AuthorizationStatus.Auth, user: user};

    expect(userReducer.reducer(state, {type: logoutAction.rejected.type}))
      .toEqual(expectedState);
  });

  it('should auth "no auth" when login fail', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, user: null};
    const expectedState = {authorizationStatus: AuthorizationStatus.NoAuth, user: null};

    expect(userReducer.reducer(state, {type: loginAction.rejected.type}))
      .toEqual(expectedState);
  });

  it('should auth "auth" when login success', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as User;
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, user: null};
    const expectedState = {authorizationStatus: AuthorizationStatus.Auth, user: user};


    expect(userReducer.reducer(state, {type: loginAction.fulfilled.type, payload: user}))
      .toEqual(expectedState);
  });

  it('should auth "auth" when check login success', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as User;
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: user};
    const expectedState = {authorizationStatus: AuthorizationStatus.Auth, user: user};

    expect(userReducer.reducer(state, {type: checkAuthAction.fulfilled.type, payload: user}))
      .toEqual(expectedState);
  });

  it('should auth "no auth" when check login fail', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as User;
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: user};
    const expectedState = {authorizationStatus: AuthorizationStatus.NoAuth, user: null};

    expect(userReducer.reducer(state, {type: checkAuthAction.rejected.type}))
      .toEqual(expectedState);
  });
});
