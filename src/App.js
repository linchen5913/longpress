import "./App.css"
import { useRef } from "react"

function App() {
  const longPressRef = useRef(false)
  const timerRef = useRef(null)
  console.log("rendered!")

  const fireEvent = () => {
    alert("hi, I'm normal behavior")
  }

  const onTouchStartFunc = () => {
    longPressRef.current = true
    timerRef.current = setTimeout(fireEvent, 700)
  }

  const onTouchEndFunc = () => {
    longPressRef.current = false
    clearTimeout(timerRef.current)
  }

  let onContextMenuEvent = () => {
    alert("oh shit this is bad")
  }
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0
  }
  if (isTouchDevice()) {
    onContextMenuEvent = null
  }

  const onLeftClick = (e) => {
    e.preventDefault()
    alert("left button is pressed")
  }
  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ color: "white" }}
          onClick={onLeftClick}
          onContextMenu={onContextMenuEvent}
          onTouchStart={onTouchStartFunc}
          onTouchMove={onTouchEndFunc}
          onTouchEnd={onTouchEndFunc}
        >
          Long press me
        </button>
      </header>
    </div>
  )
}

export default App
