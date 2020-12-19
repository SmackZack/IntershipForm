import React, { useState, useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function DataTable() {
    const [col, setCol] = useState([
        {
            label: 'First Name',
            field: 'firstName',
            width: 150,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
            },
        },
        {
            label: 'Email Id',
            field: 'email',
            width: 200,
        },
        {
            label: 'Linked In',
            field: 'linkedin',
            width: 270,
        },
        {
            label: 'Number',
            field: 'number',
            width: 100,
        },
        {
            label: 'Country',
            field: 'country',

            width: 150,
        },
        {
            label: 'Skills',
            field: 'skill',

            width: 100,
        },
        {
            label: 'Experience',
            field: 'experience',

            width: 100,
        },
        {
            label: 'About',
            field: 'about',

            width: 100,
        },
    ]);

    return (
        <MDBDataTableV5
            className="p-3"
            hover
            entriesOptions={[5, 10, 15]}
            entries={5}
            pagesAmount={4}
            data={{ columns: col, rows: JSON.parse(localStorage.getItem('data')) }} />
    )
}