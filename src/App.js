import Navbar from "./components/Navbar"
import UserList from "./components/UserList"
//redux
import { Provider } from "react-redux"
import store from "./store"

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <UserList />
    </Provider>
  )
}

