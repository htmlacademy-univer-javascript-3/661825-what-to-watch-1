import {createAPI} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../types/store';
import {Action} from '@reduxjs/toolkit';
import {ApiRoutesEnum, RoutesEnum} from '../types/routes';
import {
  checkAuthAction,
  fetchFilmsAction,
  fetchPromoFilm,
  fetchReviewsById,
  loginAction,
  logoutAction
} from './api-actions';
import {AuthData} from '../types/auth-data';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {createMockFilms} from '../components/app/app.test';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is auth when server return 200', async () => {
    const store = mockStore();
    mockAPI.onGet(RoutesEnum.Login).reply(200, []);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '1234b56'};

    mockAPI.onPost(RoutesEnum.Login).reply(200, {token: 'secret'});
    const store = mockStore();
    await store.dispatch(loginAction(fakeUser));
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(ApiRoutesEnum.Logout)
      .reply(204);

    const store = mockStore();
    await store.dispatch(logoutAction());
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);
  });

  it('should dispatch Load films when GET /films', async () => {
    const mockFilms = createMockFilms(2);
    mockAPI.onGet(ApiRoutesEnum.Films).reply(200, mockFilms);
    const store = mockStore();
    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmsAction.pending.type,
      fetchFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load comments when GET /promo', async () => {
    mockAPI
      .onGet(ApiRoutesEnum.PromoFilm)
      .reply(200);

    const store = mockStore();

    await store.dispatch(fetchPromoFilm());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoFilm.pending.type,
      fetchPromoFilm.fulfilled.type
    ]);
  });

  it('should dispatch Load comments when GET /comments/{filmId}', async () => {
    const mockFilms = createMockFilms(1);
    const url = `${ApiRoutesEnum.Comments}/${mockFilms[0].id}`;
    mockAPI
      .onGet(url)
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchReviewsById(mockFilms[0].id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsById.pending.type,
      fetchReviewsById.fulfilled.type
    ]);
  });
});
