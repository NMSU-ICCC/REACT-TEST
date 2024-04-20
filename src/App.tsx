
import './App.css'
import { useState } from 'react'
import Title from './Components/Title'              //Importing my component
import Dropdown from './Components/Dropdown'        //Importing my component
import Content from './Components/Content/Content'  //Importing my component
import { LIST_NAMES } from './Components/ENUMS'     //The names of the lists


//Datatype of EACH list of tasks
interface IDict{
  //[listName:string] indicates that the key in this dict is a VARIABLE string (we don't know how many keys there will be in total)
  //                :string[]   means that the content of each list is an ARRAY of strings
  [listName:string]: string[],
}

/*
This is the entry point for the app
This component has three children: the title, the dropdown and the content
*/
export default function App() {
  //This variable is a dictionary
  //It is a useState variable so, when it gets updated, the interface shows the changes
  //A regular variable would NOT update the interface when the variable changes
  //list is the accessor/getter
  //setList is the modifier/setter
  const [lists, setLists] = useState<IDict>({
    [LIST_NAMES[LIST_NAMES.FINISHED]]     :["test1", "test1"], 
    [LIST_NAMES[LIST_NAMES.INTERESTING]]  :["test2", "test2"], 
    [LIST_NAMES[LIST_NAMES.READING]]      :["test3", "test3"]
  })

  //It is used just to indicate what list to display on screen
  //It is a useState variable so, when it gets updated, the interface shows the changes
  //A regular variable would NOT update the interface when the variable changes
  //ListName is the accessor/getter
  //setListName is the modifier/setter
  const [listName, setListName] = useState<string>(LIST_NAMES[LIST_NAMES.FINISHED])

  console.log(lists, setLists)
  return (
    <div className="background">
      {/* This component only displays the title */}
      <Title/>

      {/* 
        This component has two arguments: listName and the callback (function) setListName
        The first argument is used to show the current selection
        The second argument is so the component can update the value of listName
        THE TWO ARGUMENTS CAN BE PASSED BECAUSE DROPDOWN ASKS FOR THEM IN ITS PARAMETERS' INTERFACE
      */}
      <Dropdown listName={listName} setListName={setListName}/>

      {/* 
        This component shows the content of the selected list by doing lists[listName] internally.
        You could also just pass 1 single parameter selectedList = {lists[listName]}

        It also allows to update the displayed list (lists[listName]) by using its modifier/getter/callback: setListName
        BE CAREFUL WITH HOW WE UPDATE THE LIST. IT IS AN OBJECT AND FOR USESTATE TO UPDATE THE SCREEN,
        YOU NEED TO UPDATE THE REFERENCE, NOT ONLY THE VALUE
      */}
      <Content lists={lists} listKey={listName} setLists={setLists}/>
    </div>
  )
}

