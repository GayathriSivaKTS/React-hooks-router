import React, { Component, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

function Services() {
    const servicelist = ['Application Development', 'Web strategy', 'Business Intelligence']
    let { id } = useParams();
    let history = useHistory();
    function ListItem(servicelist) {
        const item = servicelist.item;
        return (
            <li> {item} </li>
        );
    }


    const listItems = servicelist.map((strLists) =>
        <ListItem key={servicelist.toString()} item={strLists} />
    );

    function handleClick() {
        history.push("/StateEffect");
    }

    return (
        <div>
            <h1>Services list:</h1>
            <ul>{listItems}</ul>
            <h3>Requested service ID: {id}</h3>
            {/* <h3>Requested service location ID: {loc}</h3> */}
            <button type="button" onClick={handleClick}>
                Go home
    </button>

        </div>
    );




}

export default Services;