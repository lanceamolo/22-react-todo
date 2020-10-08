import React, { useState, useEffect } from "react"
import { useTodos } from "../hooks"

export default () => {
  const { todos, makeItem, deleteItem, completeItem } = useTodos()
  const [inputText, setInputText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    makeItem(inputText)
    console.log(todos)
    setInputText("")
  }

  function handleComplete(id) {
    completeItem(id)
  }

  return (
    <div>
      <div className="container">
        <h1 className="todosTitle">To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="textArea"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <p className="downArrow">&#8964;</p>
          <ul>
            {todos.map((item) => (
              <div className="listBox" key={item.id}>
                <li className="listItems" id={item.id}>
                  <input
                    className="completeCheck"
                    type="checkbox"
                    onClick={() => handleComplete(item.id)}
                  />
                  <span className={item.complete === true ? "completed" : ""}>
                    {item.input}
                  </span>
                  <button
                    className="deleteItem"
                    type="button"
                    onClick={() => deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </form>
      </div>
    </div>
  )
}
