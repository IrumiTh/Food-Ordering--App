import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}

      <CustomerRouter/>


    </ThemeProvider>
  );
}

export default App;
