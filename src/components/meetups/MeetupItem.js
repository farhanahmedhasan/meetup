import classes from './meetupitem.module.css';

const MeetupItem = ({ meetup }) => {
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
        <button>To favourites</button>
      </div>
    </li>
  );
};

export default MeetupItem;
