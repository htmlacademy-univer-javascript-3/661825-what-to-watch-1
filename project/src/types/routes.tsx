export enum RoutesEnum {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Default = '/*'
}

export enum ApiRoutesEnum {
  Films = '/films',
  Comments = '/comments',
  Favorite = '/favorite',
  SimilarFilms = '/similar',
  PromoFilm = '/promo',
  Login = '/login',
  Logout = '/logout'
}
