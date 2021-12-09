import { Routes, Route } from 'react-router-dom';
import { AllMeetupPage, FavouritesPage, NewMeetupPage } from './pages';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllMeetupPage />} />
        <Route exact path='/new_meetup' element={<NewMeetupPage />} />
        <Route exact path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
