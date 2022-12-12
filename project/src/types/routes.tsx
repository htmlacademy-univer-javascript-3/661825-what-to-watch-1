export enum RoutesEnum {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Default = '*'
}

export enum ApiRoutesEnum {
  Films = '/films',
  Login = '/login',
  Logout = '/logout'
}
