import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpessions'
import MyComponent from './components/MyComponent'
import Events from './Events'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>React Fundamentals</h1>
    <FirstComponent />
    <TemplateExpressions />
    <MyComponent />
    <Events />
    <Challenge />
    </>
  )
}

export default App
