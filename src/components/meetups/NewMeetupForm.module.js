import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './newmeetupform.module.css';

const NewMeetupForm = (props) => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;

    const meetup = {
      title,
      description,
      image,
      address,
      id: Date.now(),
    };

    document.getElementById('form_meetUp').reset();

    props.onAddMeetup(meetup);
    navigate('/');
  };

  return (
    <form id='form_meetUp' className={classes.form} onSubmit={handleSubmit}>
      <div className={`${classes.form__group} col-span-6`}>
        <label className={classes.form__label} htmlFor='title'>
          MeetUp Title :
        </label>
        <input
          ref={titleRef}
          required
          className={classes.formControl}
          type='text'
          name='title'
          id='title'
          placeholder='Your MeetUp Title'
        />
      </div>

      <div className={`${classes.form__group} col-span-6  place-self-start`}>
        <label className={classes.form__label} htmlFor='address'>
          MeetUp Address :
        </label>
        <input
          ref={addressRef}
          required
          className={classes.formControl}
          type='address'
          name='address'
          id='address'
          placeholder='Your MeetUp Address'
        />
      </div>

      <div className={`${classes.form__group} col-span-12  place-self-center`}>
        <label className={classes.form__label} htmlFor='image'>
          MeetUp Image :
        </label>
        <input
          ref={imageRef}
          required
          className={classes.formControl}
          type='url'
          name='image'
          id='image'
          placeholder='Copy MeetUp Image Address'
        />
      </div>

      <div className={`${classes.form__group} col-span-12  place-self-center`}>
        <label className={classes.form__label} htmlFor='description'>
          MeetUp Description :
        </label>
        <textarea
          ref={descriptionRef}
          required
          className={classes.formControl}
          name='description'
          id='description'
          placeholder='Your MeetUp Description'
          rows='5'
        ></textarea>
      </div>

      <div className={`${classes.form__group} col-span-12 place-self-center text-center`}>
        <button className={classes.form__button} type='submit'>
          Add MeetUp
        </button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
