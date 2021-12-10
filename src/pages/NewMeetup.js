import NewMeetupForm from '../components/meetups/NewMeetupForm.module';
const NewMeetupPage = () => {
  const addMeetup = async (meetUpData) => {
    await fetch('https://meetup-346c7-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetUpData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <>
      <h1 className='text-6xl text-center mb-12 font-bold'>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </>
  );
};

export default NewMeetupPage;
