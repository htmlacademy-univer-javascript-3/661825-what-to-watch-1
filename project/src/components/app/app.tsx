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
import {Film} from '../../types/film';
import { ReviewType } from '../../types/review';

type AppProps = {
  films: Film[];
  reviews: ReviewType[];
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Main} element={<Main promoFilm={props.films[0]}/>}/>
        <Route path={RoutesEnum.Login} element={<SignInPage/>}/>
        <Route path={RoutesEnum.MyList} element={<PrivateRoute isAuth={false}><MyListPage films={props.films}/></PrivateRoute>}/>
        <Route path={RoutesEnum.Film} element={<FilmPage films={props.films} reviews={props.reviews}/>}/>
        <Route path={RoutesEnum.AddReview} element={<AddReviewPage films={props.films}/>}/>
        <Route path={RoutesEnum.Player} element={<Player films={props.films}/>}/>
        <Route path={RoutesEnum.Default} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
