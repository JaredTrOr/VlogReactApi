import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';

function App() {  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/createPost' exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
