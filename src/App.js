import React, {useEffect} from 'react';
import './App.css';
import { Switch, BrowserRouter, Route, } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {useDispatch} from "react-redux";
import {auth} from "./utils/firebase";
import {setuser} from "./redux/actions";
import SingleProduct from "./pages/SingleProduct/SingleProduct";


function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setuser(authUser));
      }
      else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path="/product/:id" >
          <Header />
          <SingleProduct />
        </Route>
      <Route path="/register" >
          <Register />
        </Route>
      <Route path="/login" >
          <Login />
        </Route>
        <Route path="/" >
          <Header />
          <Home />
        </Route>
      </Switch>
      {/* <h2>Amazon</h2> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
