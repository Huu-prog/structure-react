import logo from './logo.svg';
import './App.scss';
//import Mycomponent from './example/Mycomponent';
import Addtodo from './Todoapp/todos';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  return (

    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <newcomponent />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Mycomponent/> */}
        <Addtodo />


      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
/>
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
