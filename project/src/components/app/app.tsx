import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';
import SignInPage from '../../pages/sign-in/sign-in';
import MyListPage from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film/film';
import AddReviewPage from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import {getFilms, getIsDataLoaded} from '../../store/main-reducer/main-selectors';
import {getAuthorizationStatus} from '../../store/user-reducer/user-selectors';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getIsDataLoaded);
  const films = useAppSelector(getFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (!isDataLoaded){
    return <LoadingSpinner/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Main} element={<Main/>}/>
        <Route path={RoutesEnum.Login} element={<SignInPage/>}/>
        <Route path={RoutesEnum.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage/>
          </PrivateRoute>
        }
        />
        <Route path={RoutesEnum.Film} element={<FilmPage/>}/>
        <Route path={RoutesEnum.AddReview} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <AddReviewPage films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={RoutesEnum.Player} element={<Player/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
