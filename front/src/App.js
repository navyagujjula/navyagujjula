import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddAlbum from './components/AddAlbum'
import Albums from './components/Albums'
import EditAlbum from './components/EditAlbum';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path='/' element={<AddAlbum />} />
          <Route exact path='/albums' element={<Albums />} />
          <Route exact path='/albums/:albumId' element={<EditAlbum />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
