import logo from './logo.svg';

import Navbar from './components/NavBar/Navbar';
import {originals,action} from './urls'
import './components/App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix originals"/>
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
