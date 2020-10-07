import React from "react"
import { Provider } from "react-redux"
import "./App.css"
import store from "./store.js"
import TodoApp from "./components/TodoApp"
import TodoList from "./components/ToDoList"

function App() {
  return (
    <Provider store={store}>
      {/* <TodoApp /> */}
      <TodoList />
    </Provider>
  )
}

export default App
