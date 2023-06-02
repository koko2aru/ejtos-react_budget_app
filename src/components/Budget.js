import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
const { budget, currency } = useContext(AppContext);
    const changeBudget = (val) =>{
        if (budget > 20000){
            alert('the value cannot exceed more than ' {curreny}' 20,000');
            return;
        }
        if (budget < totalExpenses){
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
            <label>Budget: {currency}</label>
            <input 
            type='number' 
            step='10' 
            value={budget} 
            onChange={(e)=>{changeBudget(e.target.value)}>
            </input>
        </div>
    );
};
export default Budget;