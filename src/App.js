import "./App.css"
// import useLongPress from "./useLongPress"
import { useRef } from "react"
import useLongPress from "./useLongPress"

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

  const touchEvent = useLongPress(() => {
    console.log("hihi, this is from hook")
  }, 200)
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://google.com"
          style={{ color: "white" }}
          onContextMenu={onContextMenuEvent}
          onTouchStart={onTouchStartFunc}
          onTouchMove={onTouchEndFunc}
          onTouchEnd={onTouchEndFunc}
        >
          Long press me should show something in console
        </a>
        <a href="https://www.facebook.com" {...touchEvent}>
          this is hook one
        </a>
      </header>
    </div>
  )
}

export default App
