import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostInfo from './pages/PostInfo';

function App() {  

  return (
    <div className='App'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/createPost' exact element={<CreatePost/>}/>
          <Route path='/postInformation/:id' exact element={<PostInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
