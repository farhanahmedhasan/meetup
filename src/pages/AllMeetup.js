import MeetupList from '../components/meetups/MeetupList';
import useFetch from '../hooks/useFetch';

const AllMeetupPage = () => {
  const {
    data: meetups,
    loading,
    error,
  } = useFetch('https://meetup-346c7-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json');

  const allMeetups = [];
  if (meetups) {
    for (const key in meetups) {
      const meetUps = {
        id: key,
        ...meetups[key],
      };
      allMeetups.push(meetUps);
    }
  }

  // const allMeetups = meetups ? Object.values(meetups) : [];
  // console.log(allMeetups);

  return (
    <>
      {loading && <h1 className='text-6xl flex h-screen justify-center items-center'>Loading...</h1>}

      {error && <h1 className='text-3xl flex h-screen justify-center items-center'>Error: {error}</h1>}

      {allMeetups.length < 1 && (
        <h1 className='text-6xl flex h-screen justify-center items-center'>No Meetups Found</h1>
      )}

      {meetups && (
        <div>
          <h1 className='text-6xl text-center mb-12 font-bold'>All Meetup</h1>
          <MeetupList
            meetups={allMeetups}
            className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 items-center place-items-center'
          />
        </div>
      )}
    </>
  );
};

export default AllMeetupPage;
