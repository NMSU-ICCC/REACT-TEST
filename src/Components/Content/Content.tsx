import { Dispatch, SetStateAction, useState } from "react";


//Datatype for the lists parameter
//This datatype is the same one from App.tsx
//IDict can actually be put in a new file that all the components share so 
//it does not need be copied everywhere
interface IDict{
    [listType:string]: string[],
}

//Datatype of all the parameters
//the datatypes of all the parameters are contained in IProps
//just SO TO MAKE IT EASIER TO READ!! 
//But you can put it in content(param1:datatype1, param2:datatype2, etc....)
interface IProps{
    lists: IDict,                               //the whole dict
    listKey: string                             //so we can select the list from the dict
    setLists: Dispatch<SetStateAction<IDict>>;  //callback datatype. It is enough to put : Function in cra
}
export default function Content(props: IProps){
    //This variable stores the input string.
    //It is used to add the task to the corresponding list in lists[listKey]
    const [inputValue, setInputValue] = useState<string>("");
    //This variable just shows an error message
    //It is an useState so, when modified, the changes are shown in screen
    //A regular variable would NOT update the screen
    const [errorMessage, setErrorMessage] = useState<string>("");

    //Updates the indicated list in lists[listKey]
    //@precondition
    //  inputValue has a value
    //@postcondition
    //  props.lists[listKey] is updated
    //  inputValue is cleared
    function updateList(){
    //1) check that the input is valid
        //if invalid input, indicate it, and leave
        if(inputValue.length == 0)
        {   
            setErrorMessage("INVALID INPUT");
            return;
        }
        //if valid, clear message (in case there was a previous error), and continue
        else
        {
            setErrorMessage("");
        }


    //2) add input to list
        //The parameter 'lists' is an useState var, which means that, when updated, the interface should show those changes
        //However, 'lists' stores a reference to an object that happens to be a dictionary.
        //To actually update 'lists', you need to either reassign a new reference value with the updated value (dummy variable)
        //Or use the shorthand of the deconstructuring operator in js. We will see both:
        /*
            CASE 1: DUMMY VARIABLE
            let dummy = props.lists;                    //dummy is a new reference value
            dummy[props.listKey] += inputValue;         //update variable
            props.setLists(dummy)                       //Lists now has a new reference value (dummy)                        
        */

        /*
            CASE 2: deconstructuring operator
            '...'    means, deconstruct/separate/open/exploit/unwrap the object/dictionary. i.e ...dict opens a dictionary
            ' {} '   means, put it back together.           i.e [] new list, {} new dict
            ','      means, plus.    i.e [...list, "new"]   the list + "new" 
        */
        props.setLists( 
            {                                                                   //make it a new dict
                ...props.lists,                                                     //the list itself, plus ... list props.key (as indicated in next line)
                [props.listKey]: [...props.lists[props.listKey], inputValue]        //oldList = [...oldList, inputValue]          list is going to be equal to the old list + inputValue 
            }                                                                   //close the new dict
        );  

    //3) clear the old input
        setInputValue("");
    }

    return(
        <>
            <label>{errorMessage}</label>

            <div>
                <input placeholder="Feed me a task" value={inputValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setInputValue(e.target.value)}}></input>
                <button onClick={() => {updateList()}}>submit</button>
            </div>

            
            {
                props.lists[props.listKey].map( (item:string) => {
                    return(item)
                })
            }
        </>
    )

}