import React, { Component } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import ContextCom from '../ContextCom';
import ReducerCom from '../ReducerCom';
import StateEffect from '../StateEffect';
import Services from '../Services';

export default class Header extends Component {
    render() {
        return (

            <div>

                <h1>Hooks</h1>
                <ul><li><NavLink to="/StateEffect" activeClassName="abc">useState & useEffect</NavLink> </li>
                    <li><NavLink to="/ContextCom" >useContext</NavLink> </li>
                    <li><NavLink to="/ReducerCom">useReducer</NavLink> </li>
                    <li><NavLink to="/CallbackCom">useCallback</NavLink> </li>
                    <li><NavLink to="/Services">Services</NavLink></li>

                </ul>

            </div>);
    }
}
