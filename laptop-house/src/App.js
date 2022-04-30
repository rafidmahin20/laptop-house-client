import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About Us/AboutUs';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Firebase/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import InventoryPage from './Components/Inventory/InventoryPage';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/inventorypage' element={<InventoryPage/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
