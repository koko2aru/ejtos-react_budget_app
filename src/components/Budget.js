import React, { useState } from 'react';
import { dispatch, totalExpenses, currency } from '../context/AppContext';
const Budget = () => {
    const [budget, setBudget] = useState(totalExpenses);
    if (action === 'Set'){
        if (budget > 20000){
            alert('the value cannot exceed more than {currency}20,000');
            setBudget(totalExpenses);
            return;
        }
        if (budget < totalExpenses){
            alert('the value cannot exceed more than {currency}20,000');
            setBudget(totalExpenses);
            return;
        }
    dispatch ({
        type: 'SET_BUDGET',
        payload: budget,
    });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input name='Set' type='number' step='10' value={budget} onChange={(e)=>{setBudget(e.target.value)}>
            </input>
        </div>
    );
};
export default Budget;