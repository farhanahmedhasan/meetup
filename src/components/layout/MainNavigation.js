import { Link } from 'react-router-dom';

import { useFavouriteContext } from '../../store/context/favouriteContext';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { state } = useFavouriteContext();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.nav__logo}>
          <Link to='/'>
            <h1>MeetUps</h1>
          </Link>
        </div>
        <ul className={classes.nav__links}>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new_meetup'>New Meetup</Link>
          </li>
          <li className={classes.badgeContainer}>
            <Link to='/favourites'>Favourites</Link>
            <span className={classes.badge}>{state.totalFavourites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
