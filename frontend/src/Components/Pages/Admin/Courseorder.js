import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';

import { DataGrid } from '@mui/x-data-grid';

function Courseorder() {
    const columns = [
        { field: 'col1', headerName: 'Title', width: 150 },
        { field: 'col2', headerName: 'Price', width: 150 },
        { field: 'col3', headerName: 'Status', width: 150 },
        { field: 'col4', headerName: 'Category', width: 150 }
    ];

    const rows = [
        { id: 1, col1: 'Bio', col2: '380$', col3: 'Approved', col4: 'BioStat' },
        { id: 2, col1: 'Physics', col2: '340$', col3: 'Pending', col4: 'BioChemistry' },
        { id: 3, col1: 'Maths', col2: '320$', col3: 'Cancelled', col4: 'Organic' }
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
                </div>
            </div>
        </Fragment>
    )
}

export default Courseorder