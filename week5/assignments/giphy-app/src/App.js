import './App.css';
import GiphyRequest from './components/giphy';
//import Layout from './components/layout';

function App() {
  return (
    <div className="App">
        <div className="header">
          <h2>Giphy Search App</h2>
        </div>
        <div>
          <GiphyRequest />
        </div>
    </div>
  );
}

export default App;
