import React, { useState } from 'react';
import { Film } from '../../types/film';
import { ReviewType } from '../../types/review';
import FilmTabItem from './film-tab-item';
import FilmOverview from '../../components/film-tabs/film-overview';
import FilmDetails from '../../components/film-tabs/film-details';
import FilmReviews from '../../components/film-tabs/film-reviews';

export enum Tabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export type FilmTabsProps = {
  film: Film,
  reviews: ReviewType[]
}


function FilmTabs(props: FilmTabsProps) {
  const { film, reviews } = props;
  const [activeTab, setActiveTab] = useState(Tabs.Overview);

  const handleTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const tabNames = Object.values(Tabs);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabNames.map(
            (name) => (
              <FilmTabItem
                key={name}
                name={name}
                isActive={activeTab === name}
                onClick={handleTabClick}
              />))}
        </ul>
      </nav>

      {activeTab === 'Reviews' && <FilmReviews reviews={reviews} />}
      {activeTab === 'Overview' && <FilmOverview film={film} />}
      {activeTab === 'Details' && <FilmDetails film={film} />}
    </div>
  );
}

export default FilmTabs;
