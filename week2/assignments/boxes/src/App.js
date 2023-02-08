import Card from './card';
import './App.css';
import './card.css';

function App() {
  return (
    <div className="App">

        <Card
          info= "Title 1"
          subtitle= "Sub Title 1"
          description= "Hello world 1!"
          bgColor= "red"
          width= "250px"
        />

        <Card
          info= "Title 2"
          subtitle= "Sub Title 2"
          description= "Hello world 2!"
          bgColor= "goldenrod"
          width= "250px"
        />

        <Card
          info= "Title 3"
          subtitle= "Sub Title 3"
          description= "Hello world 3!"
          bgColor= "yellow"
          width= "250px"
        />

        <Card
          info= "Title 4"
          subtitle= "Sub Title 4"
          description= "Hello world 4!"
          bgColor= "green"
          width= "250px"
        />
    </div>
  );
}

export default App;
