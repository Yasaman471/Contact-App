import { useState } from "react"

import inputs from "../Constant/inputs"
import ContactsList from "./ContactsList"


function Contact() {
    const [contacts,setContacts] = useState([])
    const [contact,setContact] = useState({
        name:"",
        lastName:"",
        email:"",
        phone:"",
    })

    const changeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setContact(contact => ({...contact,[name]:value}))
    }

    const addHandler = ()=>{
        setContacts((contacts)=>([...contacts,contact]))
        setContact({
            name:"",
            lastName:"",
            email:"",
            phone:"",
        })
    }
  return (
    <div>
        <div>
            {inputs.map((input,index)=>(
                <input 
                key={index }
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                onChange={changeHandler}
                value={contact[input.name]}
                 />))}
            <button onClick={addHandler}>Add Contact</button>
        </div>
        <ContactsList />
    </div>
  )
}

export default Contact