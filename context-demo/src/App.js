import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import MessageForm from './components/MessageForm'


function App() {

  return (
    <div className="App">
      <Comp1 />
      <Comp2 />
      <MessageForm />
    </div>
  );
}

export default App;
