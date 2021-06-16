import React, { useReducer } from 'react';

const initialState = { products: 0 };
const reducer = (state, action) => {
    switch (action) {
        case 'add':
            return { products: state.products + 1 };
        case 'remove':
            return { products: state.products - 1 };
        default:
            throw new Error("Add to cart");
    }
}



function ReducerCom() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>

            <h1>Total products:{state.products}</h1>
            <button onClick={() => dispatch('add')}>Add products</button>
            <button onClick={() => dispatch('remove')}>Remove products</button>
        </>
    );
}
export default ReducerCom;