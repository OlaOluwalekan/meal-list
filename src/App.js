import './App.css'
import Tabs from './Tabs'
import MealList from './MealList'
import data from './data'
import { useState } from 'react'

function App() {
  const [meals, setMeals] = useState(data)

  const filterMeals = (category) => {
    let newMeals = data.filter((item) => {
      return item.category === category
    })
    if (newMeals.length === 0) {
      setMeals(data)
    } else {
      setMeals(newMeals)
    }
  }

  return (
    <div className='app'>
      <h1 className='heading'>Our Menu</h1>
      <Tabs filterMeals={filterMeals} />
      <MealList meals={meals} />
    </div>
  )
}

export default App
