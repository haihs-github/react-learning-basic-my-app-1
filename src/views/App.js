import logo from './logo.svg';
import './App.scss';
import ListTodo from './todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify'; //import toastify để làm thông báo popup
import 'react-toastify/dist/ReactToastify.css'; //import toastify để làm thông báo popup
import Nav from './Nav/Nav.js';
import Home from './example/Home.js';
import { Outlet, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <Outlet />
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
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
