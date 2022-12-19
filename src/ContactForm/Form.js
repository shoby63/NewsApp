import React, { useState } from 'react';

export default function Form(props) {

    const [formData, setFormData] = useState({
        Name: '',
        Num: ''
    });
    const NameStateHandler = (e) => {
        setFormData({
            ...formData,
            Name: e.target.value
        });
    };
    const NumberStateHandler = (e) => {
        setFormData({
            ...formData,
            Num: e.target.value
        }
        );
    };
    const FormHandler = ((event) => {
        event.preventDefault();
        console.log(formData);
    });
    // console.log(formData);

    return (
        <><div className='Form-container'>
            <form onSubmit={FormHandler}>
                <label>Name: </label>
                <input type='text' className='Name' onChange={NameStateHandler} /><br></br>
                <label>Contact No.  </label>
                <input type='number' className='No.' onChange={NumberStateHandler} /><br></br>
                <button type='submit' > Submit</button>
            </form>
        </div>
        </>
    );
}