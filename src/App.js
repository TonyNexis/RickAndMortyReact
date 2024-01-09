import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import CharacterList from './components/characterList/characterList';
import CharacterDetails from './components/characterDetails/characterDetails';

import './App.css';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/characters' element={<CharacterList/>} />
      <Route path='/characters/:id' element={<CharacterDetails />} />
      <Route path='/'  element={<Navigate to='/characters' replace />} />
      <Route path='*' element={<CharacterList />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;