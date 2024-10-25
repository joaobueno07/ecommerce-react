import './App.css';
import Carousel from './components/carousel/Carousel';
import Categories from './components/info/Categories';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Carousel />
      <Categories />
    </div>
  );
}

export default App;
