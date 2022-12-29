import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ActiveTasks from './ActiveTasks'
import CompleteTasks from './CompleteTasks'
import NameForm from './NameForm'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<NameForm/>}/>
      <Route path='/active-tasks' element={<ActiveTasks/>}/>
      <Route path='/complete-tasks' element={<CompleteTasks/>}></Route>
    </Routes>
  )
}