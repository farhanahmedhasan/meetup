import { Routes, Route } from 'react-router-dom';
import { AllMeetupPage, FavouritesPage, NewMeetupPage } from './pages';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div className='App'>
      <MainNavigation />
      <Routes>
        <Route exact path='/' element={<AllMeetupPage />} />
        <Route exact path='/new_meetup' element={<NewMeetupPage />} />
        <Route exact path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
