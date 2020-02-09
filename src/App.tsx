import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

import Canvas from "./Canvas";
import AppTitleBar from "./AppTitleBar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        toolbar: theme.mixins.toolbar,
    }),
);

const canvas = (<Canvas />); // to avoid re-rendering due to state change

const App: React.FC = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className="App">
            <div className={classes.root}>
                <CssBaseline />

                <AppTitleBar handleDrawerToggle={handleDrawerToggle} />

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {canvas}
                </main>
            </div>
        </div>
    );
};

export default App;