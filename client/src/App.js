import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//Pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostInfo from './pages/PostInfo';

function App() {  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/signUp' exact element={<SignUp/>}/>
          <Route path='/createPost' exact element={<CreatePost/>}/>
          <Route path='/postInformation/:id' exact element={<PostInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
