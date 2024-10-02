import { useState } from "react"

export default function Player({initialName,symbol,isActive,onChangeName}){
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing,setIsEditing] = useState(false)
    function handleEditClick(){
        setIsEditing((editing)=>!editing);
        console.log("editing");
        if(isEditing){
            onChangeName(symbol,playerName);
        }
    }
    function handleNameChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }
    let playerInfo=(<span className="player-name">{playerName}</span>);
    let buttonInfo = "Edit";
    
    
    if(isEditing){
        playerInfo=(<input type="text" required value={playerName} onChange={handleNameChange}/>);
    }
    
    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
              {playerInfo}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing?'Edit':'Save'}</button>
          </li>
    )
}