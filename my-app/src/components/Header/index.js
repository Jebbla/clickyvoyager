import React from "react";
import "./style.css";

function Header(props) {
    return (
      <header>
       <ul>
         <li>
          <strong>Voyager Memory Game</strong>
         </li>
         <li>
          <p>{props.children}</p> 
         </li>
         <li>
          Score: {props.score} | Top Score: {props.topScore}
         </li>
            
       </ul>
        
      </header>
    );
  }
  
  export default Header;