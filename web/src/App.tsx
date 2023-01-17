import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <Habit completed={10} />
      <Habit completed={5} />
      <Habit completed={20} />
      <Habit completed={1} />
    </>
  )
}

export default App
