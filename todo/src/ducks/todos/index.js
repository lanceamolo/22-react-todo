import { useSelector, useDispatch } from "react-redux"
import React, { useState, useEffect } from "react"

// action definitions
const ADD_TODO = "todo/ADD_TODO"
const DELETE_TODO = "todo/DELETE_TODO"
const COMPLETE_TODO = "todo/COMPLETE_TODO"

// initialState
const initialState = {
  todos: [],
}

function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: generateId(), input: action.payload, complete: false },
        ],
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.complete = !todo.complete
          }
          return todo
        }),
      }
    default:
      return state
  }
}

// action creator
function makeListItem(input) {
  return {
    type: ADD_TODO,
    payload: input,
  }
}

function deleteListItem(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

function completeListItem(id) {
  let complete = ADD_TODO.complete
  if (complete === false) {
    return {
      complete: true,
      type: COMPLETE_TODO,
      payload: id,
    }
  } else {
    return {
      complete: false,
      type: COMPLETE_TODO,
      payload: id,
    }
  }
}

export function useTodos() {
  const dispatch = useDispatch()
  const todos = useSelector((app) => app.todoState.todos)
  console.log(todos)
  const makeItem = (input) => dispatch(makeListItem(input))
  const deleteItem = (id) => dispatch(deleteListItem(id))
  const completeItem = (id) => dispatch(completeListItem(id))
  return {
    todos,
    makeItem,
    deleteItem,
    completeItem,
  }
}
