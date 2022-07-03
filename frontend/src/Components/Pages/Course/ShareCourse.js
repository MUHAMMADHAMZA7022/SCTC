import React, { Fragment } from 'react';
import { RWebShare } from "react-web-share";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function ShareCourse() {
    const urlLink = window.location.href;
    return (
        <Fragment>
            <RWebShare
                data={{
                    url: {urlLink},
                    title: "SCTC",
                }}
                onClick={() => console.log("Shared Successfully!")}
            >
                <span><ShareOutlinedIcon /></span>
            </RWebShare>
        </Fragment>
    )
}

export default ShareCourse