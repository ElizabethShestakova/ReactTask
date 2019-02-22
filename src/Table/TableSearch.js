import React, {useState} from 'react'

export default props => {
    const [value, setValue] = useState('');
    const valueChangeHandler = event => {
        setValue(event.target.value)
    }
    return (
        <div className='search'>
            <input type='text'
                   className = 'form-control'
                   onChange = {valueChangeHandler}
                   value = {value}>
            </input>

                <button className='btn'
                        onClick={() => props.onSearch(value)}>
                        Поиск
                </button>


        </div>
    )
}