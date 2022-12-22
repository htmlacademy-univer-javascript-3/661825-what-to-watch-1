import {State} from '../../types/store';
import {AuthorizationStatus} from '../../types/auth-status';
import {NameSpace} from '../../const';
import {User} from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): User | null => state[NameSpace.User].user;
