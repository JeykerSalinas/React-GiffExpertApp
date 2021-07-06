import React, {useState}from 'react'


const AddCategory = ({setCaregories}) => {
    const [inputValue, setInputValue] = useState("")
    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e,) => {
        e.preventDefault()
        setCaregories(categories =>[inputValue, ...categories])
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={inputValue}
            onChange={handleChange}
            placeholder="Search..."
            />
        </form>
    )
}


export default AddCategory