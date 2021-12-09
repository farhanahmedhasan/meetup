import MeetupList from '../components/meetups/MeetupList';
const data = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },

  {
    id: 'm3',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];
const AllMeetupPage = () => {
  return (
    <div>
      <h1 className='text-6xl text-center mb-12 font-bold'>All Meetup</h1>
      <MeetupList
        meetups={data}
        className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 items-center place-items-center'
      />
    </div>
  );
};

export default AllMeetupPage;
