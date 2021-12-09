import NewMeetupForm from '../components/meetups/NewMeetupForm.module';
const NewMeetupPage = () => {
  return (
    <>
      <h1 className='text-6xl text-center mb-12 font-bold'>Add New Meetup</h1>
      <NewMeetupForm />
    </>
  );
};

export default NewMeetupPage;
