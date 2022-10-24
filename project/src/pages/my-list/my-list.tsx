import FilmCard from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';

function MyListPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmCard imagePath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} filmName={'Fantastic Beasts: The Crimes of Grindelwald'}/>
          <FilmCard imagePath={'img/bohemian-rhapsody.jpg'} filmName={'Bohemian Rhapsody'}/>
          <FilmCard imagePath={'img/macbeth.jpg'} filmName={'Macbeth'}/>
          <FilmCard imagePath={'img/aviator.jpg'} filmName={'Aviator'}/>
          <FilmCard imagePath={'img/we-need-to-talk-about-kevin.jpg'} filmName={'We need to talk about Kevin'}/>
          <FilmCard imagePath={'img/what-we-do-in-the-shadows.jpg'} filmName={'What We Do in the Shadows'}/>
          <FilmCard imagePath={'img/revenant.jpg'} filmName={'Revenant'}/>
          <FilmCard imagePath={'img/johnny-english.jpg'} filmName={'Johnny English'}/>
          <FilmCard imagePath={'img/shutter-island.jpg'} filmName={'Shutter Island'}/>
          <FilmCard imagePath={'img/pulp-fiction.jpg'} filmName={'Pulp Fiction'}/>
          <FilmCard imagePath={'img/no-country-for-old-men.jpg'} filmName={'No Country for Old Men'}/>
          <FilmCard imagePath={'img/snatch.jpg'} filmName={'Snatch'}/>
          <FilmCard imagePath={'img/moonrise-kingdom.jpg'} filmName={'Moonrise Kingdom'}/>
          <FilmCard imagePath={'img/seven-years-in-tibet.jpg'} filmName={'Seven Years in Tibet'}/>
          <FilmCard imagePath={'img/midnight-special.jpg'} filmName={'Midnight Special'}/>
          <FilmCard imagePath={'img/war-of-the-worlds.jpg'} filmName={'War of the Worlds'}/>
          <FilmCard imagePath={'img/dardjeeling-limited.jpg'} filmName={'Dardjeeling Limited'}/>
          <FilmCard imagePath={'img/orlando.jpg'} filmName={'Orlando'}/>
          <FilmCard imagePath={'img/mindhunter.jpg'} filmName={'Mindhunter'}/>
          <FilmCard imagePath={'img/midnight-special.jpg'} filmName={'Midnight Special'}/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MyListPage;
