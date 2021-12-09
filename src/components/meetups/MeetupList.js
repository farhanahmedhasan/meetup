import MeetupItem from './MeetupItem';

const MeetupList = (props) => {
  return (
    <ul className={props.className}>
      {props.meetups.map((meetup) => (
        <MeetupItem meetup={meetup} key={meetup.id} />
      ))}
    </ul>
  );
};

export default MeetupList;
