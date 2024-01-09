import React from "react";
import { Window } from "./components/pages/window"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
   return  (
      <>
        <Window/>
      </>
    )
 }

export default App