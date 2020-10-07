import React, { useState, useEffect } from "react"
import { useTodos } from "../hooks"

// export default () => {
//   const { example, setExample, exampleAsync, list } = useExample()
//   return (
//     <div>
//       <h2>{example}</h2>
//       <button onClick={() => setExample('foo')}>Example sync</button>
//       <button onClick={exampleAsync}>Example async</button>
//       <ul>
//         {list.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default () => {
  const { todos, makeItem, deleteItem, completeItem } = useTodos()
  const [inputText, setInputText] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    makeItem(inputText)
    console.log(todos)
    setInputText("")
  }

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      <ul>
        {todos.map((item) => (
          <div>
            <input type="radio" onClick={(e) => completeItem(item.id)} />
            <li id={item.id}>{item.input}</li>
            <button onClick={(e) => deleteItem(item.id)}></button>
          </div>
        ))}
      </ul>
    </div>
  )
}
