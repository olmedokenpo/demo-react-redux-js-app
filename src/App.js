import React from 'react';
import Navbar from "./components/Navbar"
import UserList from "./components/UserList"
import KeyListener from "./components/KeyListener"
//redux
import { Provider } from "react-redux"
import store from "./store"


export default function App() {
  return (
    <Provider store={store}>
      <KeyListener/>
      <Navbar />
      <UserList />
    </Provider>
  )
}

