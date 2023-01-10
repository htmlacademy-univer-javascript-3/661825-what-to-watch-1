import Main from '../../pages/main/main';
import { Route, Routes } from 'react-router-dom';
import {RoutesEnum} from '../../types/routes';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import {getFilms, getIsDataLoaded} from '../../store/main-reducer/main-selectors';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getIsDataLoaded);
  const films = useAppSelector(getFilms);

  if (!isDataLoaded){
    return <LoadingSpinner/>;
  }

  return (
    <Routes>
      <Route path={RoutesEnum.Main} element={<Main/>}/>
      <Route path={RoutesEnum.Login} element={<SignIn/>}/>
      <Route path={RoutesEnum.MyList} element={
        <PrivateRoute>
          <MyList/>
        </PrivateRoute>
      }
      />
      <Route path={RoutesEnum.Film} element={<Film/>}/>
      <Route path={RoutesEnum.AddReview} element={
        <PrivateRoute>
          <AddReview films={films}/>
        </PrivateRoute>
      }
      />
      <Route path={RoutesEnum.Player} element={<Player/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
