import Scene from "./components/Canvas";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black pointer-events-none overflow-auto">
      <Scene />
    </div> 
  )
}
export default App;