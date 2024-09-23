import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Pages/Shop';
import { Men } from './Pages/Men';
import { Women } from './Pages/Women';
import { Kids } from './Pages/Kids';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Women />} />
        <Route path='/Kids' element={<Kids />} />
      </Routes>
    </div>
  );
}
