import React, { useState } from 'react'
import { createContext } from "react";
export const activeContext = createContext()
const ActiveNavbar = (props) => {
    const [activeLink,setActiveLink] = useState("Home")
  return (
    <activeContext.Provider value={{activeLink,setActiveLink}}>
        {props.childrens}
    </activeContext.Provider>
  )
}

export default ActiveNavbar