import React, { useContext } from 'react';

const themes = {
    big: {
        fontsize: "28px"
    },
    small: {
        fontsize: "16px"
    }
};
//creating the context object
const ThemeContext = React.createContext(themes);

function ContextCom() {
    return (
        <ThemeContext.Provider value={themes.big}>
            <ThemedButton />
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);

    return (

        <button style={{ fontSize: theme.fontsize }}>
            Example for useContext
        </button>

    );

    // return <ThemeContext.Consumer>
    //     {theme => <button style={{ fontSize: theme.fontsize }}>
    //         Example for useContext
    //     </button>}
    // </ThemeContext.Consumer>
}


export default ContextCom;








// const ThemeContext = React.createContext("dark");
// function ContextCom() {
//     return <ThemeContext.Consumer>
//         {theme => <button className={theme}> Amazing button </button>}
//     </ThemeContext.Consumer>
// }


// function ButtonHooks() {
//     const theme = useContext(ThemeContext)
//     return <button className={theme}>Amazing button</button>
// }
// export default ContextCom;