import FilmCard from '../../components/filmCard/filmCard';

function MyListPage() {
  return (
    <body>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5"
                points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"
              />
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
              fill="#FFF9D9" fillOpacity="0.7"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z"
              fill="#FFF9D9" fillOpacity="0.7"
            />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9"
              fillOpacity="0.7"
            />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9"
              fillOpacity="0.7"
            />
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
              fill="#EEE5B5"
            />
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"
              />
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"
              />
            </g>
          </symbol>
        </svg>
      </div>

      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

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
            <FilmCard imagePath={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
              filmName={'Fantastic Beasts: The Crimes of Grindelwald'}
            />
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

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default MyListPage;
