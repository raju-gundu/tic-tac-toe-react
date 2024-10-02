import { useState } from "react"

export default function Player({initialName,symbol}){
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing,setIsEditing] = useState(false)
    function handleEditClick(){
        setIsEditing((editing)=>!editing);
        console.log("editing");
    }
    function handleNameChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }
    let playerInfo=(<span className="player-name">{playerName}</span>);
    let buttonInfo = "Edit";
    
    if(isEditing){
        playerInfo=(<input type="text" required value={playerName} onChange={handleNameChange}/>);
        buttonInfo="Save";
    }
    
    return (
        <li>
            <span className="player">
              {playerInfo}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonInfo}</button>
          </li>
    )
}