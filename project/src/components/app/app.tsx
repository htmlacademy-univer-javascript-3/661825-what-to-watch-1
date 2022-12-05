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
import { ReviewType } from '../../types/review';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner';

type AppProps = {
  reviews: ReviewType[];
}

function App(props: AppProps): JSX.Element {
  const { isDataLoaded, films } = useAppSelector((state) => state);
  const promoFilm = films[0];
  const { reviews } = props;

  if (!isDataLoaded){
    return <LoadingSpinner/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Main} element={<Main promoFilm={promoFilm}/>}/>
        <Route path={RoutesEnum.Login} element={<SignInPage/>}/>
        <Route path={RoutesEnum.MyList} element={<PrivateRoute isAuth={false}><MyListPage films={films}/></PrivateRoute>}/>
        <Route path={RoutesEnum.Film} element={<FilmPage films={films} reviews={reviews}/>}/>
        <Route path={RoutesEnum.AddReview} element={<AddReviewPage films={films}/>}/>
        <Route path={RoutesEnum.Player} element={<Player films={films}/>}/>
        <Route path={RoutesEnum.Default} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
