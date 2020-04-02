import React from "react";
import clsx from "clsx";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'black',
        height: '100%',
        flexGrow: 1,

    },
    flex: {
        display: 'flex',
        backgroundColor: 'red',
        height: '100%',
        flexDirection: 'column',
        flexGrow: 1,

    },
    item: {
        backgroundColor: 'white',
        height: '5vh',
    },
    item2: {
        backgroundColor: 'yellow',

    },
    mainBox: {
        backgroundColor: 'green',
        flexGrow: 1,
        display: 'flex',
    },
    mainContent: {
        backgroundColor: 'blue',
        flexGrow: 3,
        maxHeight: '90vh',
        overflowY: 'auto',
    },
    sidebar: {
        backgroundColor: "#e5fedf",
        flexGrow: 1,
    },
    mainContentItem: {
        backgroundColor: '#d34',
        height: '200px',
        marginBottom: '5px',
    }
}));

const OverFlowPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <div className={classes.flex}>

                <div className={clsx({
                    [classes.item]: true,
                })}></div>

                <div className={clsx({
                    [classes.item]: true,
                    [classes.item2]: true,
                })}></div>
               
                <div className={clsx({
                    [classes.mainBox]: true,
                })}>
                    <div className={classes.mainContent}>
                        <div className={classes.mainContentItem}></div>
                        <div className={classes.mainContentItem}></div>
                        <div className={classes.mainContentItem}></div>
                        <div className={classes.mainContentItem}></div>


                    </div>

                    <div className={classes.sidebar}></div>

                </div>

            </div>
        </div>
    );
}


export default OverFlowPage;