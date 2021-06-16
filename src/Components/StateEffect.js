
import React, { Component, useEffect, useState } from 'react';
function StateEffect() {
    const [value, setValue] = useState(0);


    useEffect(() => {
        document.title = 'You added ' + value + ' values';
    }, [value]);
    return (
        <div>
            <h1>Initial value:{value}</h1>
            <div><button onClick={() => setValue(value + 1)}>Increase value</button></div>
        </div>
    );
}

export default StateEffect;





// import React, { Component, useEffect } from 'react';
// export default class About extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>About</h1>
//                 <p>This is a Class Component</p>
//             </div>);
//     }
// }
