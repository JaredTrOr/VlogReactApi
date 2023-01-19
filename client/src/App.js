import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//Pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostInfo from './pages/PostInfo';
import ProtectedRoutes from './components/ProtectedRoutes';
import { UserContext } from './hooks/UserContext';
import { useState } from 'react';

function App() {  

  const [value,setValue] = useState(null);

  return (
    <div className='App'>
      <BrowserRouter>
        <UserContext.Provider value={{value, setValue}}>
          <Routes>
            <Route path='/' index exact element={<SignUp/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/home' exact element={<Home/>}/>
              <Route path='/createPost' exact element={<CreatePost/>}/>
              <Route path='/postInformation/:id' exact element={<PostInfo/>}/>
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
