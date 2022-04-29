import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Firebase/Header/Header';
import Home from './Components/Home/Home';
import InventoryPage from './Components/Inventory/InventoryPage';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/inventorypage' element={<InventoryPage/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
