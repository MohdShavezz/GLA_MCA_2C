import React, { lazy } from 'react'
import Todos from './Todos'
import Parent from './Parent'
import { Suspense } from 'react'
const Dashboard = lazy(() => import('./Dashboard'))

const App = () => {
  return (
    <div>
      App

      {/* <Todos/> */}
      {/* <Parent/> */}

      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  )
}

export default App
