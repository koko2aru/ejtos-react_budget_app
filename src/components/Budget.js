import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
const { dispatch, budget, totalExpenses, currency } = useContext(AppContext);
    const changeBudget = (val) =>{
        if (val > 20000){
            alert('the value cannot exceed more than ' +{currency}+' 20,000');
            return;
        }
        if (val < totalExpenses){
            alert('The value cannot be lower expenses');
            return;
        }
        dispatch ({
            type: 'SET_BUDGET',
            payload: val,
        });
    };
    return (
        <div className='alert alert-secondary'>
        <div className='input-group input-group-sm'>
            <label className='input-group-text'>Budget: {currency}</label>
            <input required='required' className='form-control' type='number' step='10' value={budget} onChange={(event) => changeBudget(event.target.value)}>
        </input>
        </div>
         </div>
    );
};
export default Budget;