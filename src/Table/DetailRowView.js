import React from 'react';

export default ({person}) => (
    // console.log(person)
    <div className="detailRow">
        <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
        <p>Описание:</p>
        <textarea readOnly defaultValue={person.description}>                        
        </textarea>
        <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
        <p>Город: <b>{person.address.city}</b></p>
        <p>Профинция/штат: <b>{person.address.state}</b></p>
        <p>Индекс: <b>{person.address.zip}</b></p>
    </div>
)
