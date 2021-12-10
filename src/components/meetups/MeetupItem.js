import classes from './meetupitem.module.css';
import { useFavouriteContext } from '../../store/context/favouriteContext';

const MeetupItem = ({ meetup }) => {
  const { state, dispatch, addFavourite, removeFavourite } = useFavouriteContext();

  const itemIsFavourite = state.favourites.some((favourite) => favourite.id === meetup.id);

  const toggleFavourite = () => {
    if (!itemIsFavourite) {
      addFavourite(dispatch, meetup);
    }

    if (itemIsFavourite) {
      removeFavourite(dispatch, meetup.id);
    }
  };

  return (
    <li className={classes.card}>
      <div className={classes.card__img}>
        <img src={meetup.image} alt={meetup.title} />
      </div>
      <div className={classes.card__textBox}>
        <h3 className={classes.card__title}>{meetup.title}</h3>
        <address className={classes.card__address}>{meetup.address}</address>
        <p className={classes.card__description}>{meetup.description}</p>
      </div>

      <div className={classes.card__action}>
        <button onClick={toggleFavourite}>{itemIsFavourite ? 'Remove From Favourites' : 'To favourites'}</button>
      </div>
    </li>
  );
};

export default MeetupItem;
