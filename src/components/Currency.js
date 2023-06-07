import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
const { dispatch } = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    };
    return (
        <div className='alert alert-secondary'>
      <select class="selectpicker" title='Currency (£ Pound)' data-style="btn-info" onChange={event=>changeCurrency(event.target.value)}>
        
        <option value="$">$ Dollar</option>
        <option value="£" selected>£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
    </div>
    );
    
};

export default Currency;
