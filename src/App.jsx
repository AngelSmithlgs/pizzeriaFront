import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';



const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer/>
    </div>
  );
};

export default App;
