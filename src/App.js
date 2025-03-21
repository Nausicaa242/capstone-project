import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;