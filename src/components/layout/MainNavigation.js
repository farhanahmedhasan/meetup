import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
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
          <li>
            <Link to='/favourites'>Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
