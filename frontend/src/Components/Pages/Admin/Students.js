import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';

import { DataGrid } from '@mui/x-data-grid';
import SuccessAlert from '../../Layout/Notifications/SuccessAlert';
import ErrorAlert from '../../Layout/Notifications/ErrorAlert';

function Students() {

    const columns = [
        { field: 'col1', headerName: 'Name', width: 150 },
        { field: 'col2', headerName: 'Email', width: 150 },
        { field: 'col3', headerName: 'Phone', width: 150 },
        { field: 'col4', headerName: 'Department', width: 150 }
    ];

    const rows = [
        { id: 1, col1: 'Saim', col2: 'syedsaim40@gmail.com', col3: '03209455811', col4: 'BSCS' },
        { id: 2, col1: 'Hamza', col2: 'syedsaim40@gmail.com', col3: '03209455811', col4: 'medical' },
        { id: 3, col1: 'Gulzaib', col2: 'syedsaim40@gmail.com', col3: '03209455811', col4: 'it' }
    ];

    return (
        <Fragment>
            <div className='dashboard_holder students'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content'>
                    <div style={{ height: 300, width: '100%' }}>
                        <DataGrid
                        rows={rows}
                        columns={columns}
                        disableSelectionOnClick
                        autoHeight
                        />
                    </div>
                    <SuccessAlert />
                    <ErrorAlert />
                </div>
            </div>
        </Fragment>
    )
}

export default Students