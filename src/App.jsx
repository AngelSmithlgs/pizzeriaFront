import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div>
     <Header/>
     <Home/>
     <Menu />
     <Footer />
    </div>
  );
};

export default App;
