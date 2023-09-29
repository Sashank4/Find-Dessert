import './App.css';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Careers from './Pages/Careers';
import AboutUS from './Pages/AboutUS';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/recipes' element = {<Recipes/>}/>
        <Route path='/careers' element = {<Careers/>}/>
        <Route path='/aboutUs' element = {<AboutUS/>}/>
      </Routes>

    </div>
  );
}

export default App;
