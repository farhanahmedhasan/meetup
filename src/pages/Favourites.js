import MeetupList from '../components/meetups/MeetupList';
import { useFavouriteContext } from '../store/context/favouriteContext';

const FavouritesPage = () => {
  const { state } = useFavouriteContext();

  let content;

  if (state.favourites.length > 0) {
    content = (
      <MeetupList
        meetups={state.favourites}
        className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 items-center place-items-center'
      />
    );
  } else {
    content = (
      <div className='text-center text-5xl'>
        <p>You have no favourite meetups..!!! Please Add Some</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className='text-center text-6xl font-extrabold mb-16'>My Favourite Meetups</h2>
      {content}
    </section>
  );
};

export default FavouritesPage;
