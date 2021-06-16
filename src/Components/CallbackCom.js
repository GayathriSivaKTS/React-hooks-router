import React, { useCallback } from 'react';
import { useState } from 'react';

function CallbackCom() {
    const [age, setAge] = useState(20)
    const [bage, setBage] = useState(23)
    const handleClick = useCallback(() => {
        setAge(age + 1)
    },
        [age])
    const handle1Click = useCallback(() => { setBage(bage + 1) }, [bage])
    const someValue = "someValue"
    const doSomething = useCallback(() => {
        return someValue
    }, [someValue])
    return (
        <div>
            <Age age={age} handleClick={handleClick} />
            <BroAge bage={bage} handle1Click={handle1Click} />
            <Address doSomething={doSomething} />
        </div>
    );
}
const Age = ({ age, handleClick }) => {
    return (
        <div>
            <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
                My age {age}
            </div>
            <button onClick={handleClick}>After a year </button>
        </div>
    )
}
const BroAge = ({ bage, handle1Click }) => {
    return (
        <div>
            <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
                My Sibiling Age {bage}
            </div>

            <button onClick={handle1Click}>After a year </button>
        </div>
    )
}
const Address = React.memo((props) => {
    return (
        <div>
            <p>gayathrisivaraj@gmail.com</p>
        </div>
    );

})
export default CallbackCom;