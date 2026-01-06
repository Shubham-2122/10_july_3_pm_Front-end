import React from 'react'
import Count from './features/counter/Count'
import Counter from './features/counter/Counter'
import Todolist from './features/Todo/Todolist'
import AddTodo from './features/Todo/AddTodo'

function App() {
  return (
    <div>
      <h1>Hellot this Redux</h1>
      {/* <Count /> */}
      {/* <Counter /> */}
      <AddTodo />
      <Todolist />
    </div>
  )
}

export default App
