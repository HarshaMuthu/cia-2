import { React, useState } from 'react';
import Select from 'react-select';
import './dropdown.css';
function Dropdown ()
{
    const options = [
        {
            id: 'lime',
            label: "Lime",
        },
        {
            id: 'lavender',
            label: "Lavender",
        },
        {
            id: 'crimson',
            label: "Crimson",
        },
        {
            id: 'darkblue',
            label: "Darkblue",
        },
        {
            id: 'teal',
            label: "Teal",
        },
        {
            id: 'recebeccapurple',
            label: "Rebeccapurple",
        },
        {
            id: 'ghostwhite',
            label: "Ghostwhite",
        },
        {
            id: 'aquamarine',
            label: "Aquamarine",
        },
        {
            id: 'aliceblue',
            label: "Aliceblue",
        },
    ]

    const [option, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdownWrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + option + ';'
                }
            </style>

            <center>
            <h1>Color changer</h1>
            </center>
            
            <div className="dropdownContainer">
                <Select options={options} onChange={click} className='select' placeholder="Select Color"></Select>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Dropdown;