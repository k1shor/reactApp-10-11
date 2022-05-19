import logo from './logo.svg';
import './App.css';
import Second from './Pages/Second';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './reducer/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />

        Hello
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
