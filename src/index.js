import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./views/example/Home.js"
import ListTodo from "./views/todos/ListTodo.js"
import MyComponent from "./views/example/MyComponent.js"
import ListUser from "./views/User/ListUser.js"
import DetailUser from './views/User/DetailUesr.js';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './store/reducers/rootReducer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = configureStore(rootReducer)

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="Home" element={<Home />} />
            <Route path="Todo" element={<ListTodo />} />
            <Route path="About" element={<MyComponent />} />
            <Route path="User" excat element={<ListUser />} />
            <Route path="User/:id" element={<DetailUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
