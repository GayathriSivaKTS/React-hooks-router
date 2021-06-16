import React from 'react';
import { useParams } from 'react-router-dom';
export default function Params() {

    let { id } = useParams();

    return (
        <div>
            <h3>Requested page: {id}</h3>
        </div>
    );
}