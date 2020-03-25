import React from "react";
import { makeStyles, lighten } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: '100%',
        marginBottom: theme.spacing(1),
    },
    image: {
        display: 'flex',
    },
    img: {
        margin: 'auto 0 auto 0',
        display: 'block',
        //maxWidth: '100%',
        //maxHeight: '100%',
        width: '88px',
    },
    typographyGray: {
        color: lighten(theme.palette.common.black, 0.50),
    },
    typographyPositive: {
        color: theme.palette.success.main,
    },
    typographyNegative: {
        color: theme.palette.error.main,
    },
}));

const SimpleCard = ({ content, description, icon, isPositive }) => {
    const classes = useStyles();
    return (
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item className={classes.image} alignItems="center" justify="center">
                        <img className={classes.img} src={icon()} alt={'imagem do banco'} />
                    </Grid>
                    <Grid item xs={8} sm={10} direction="column" spacing={2} justify="center">
                        <Grid item justify="center" alignItems="center">
                            <Typography gutterBottom variant="body2" className={classes.typographyGray}>
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" align="right" className={clsx({ [classes.typographyPositive]: isPositive,[classes.typographyNegative]: !isPositive,  })}>
                                {content}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
    );
}


SimpleCard.propTypes = {
    content: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    isPositive: PropTypes.bool,
}

export default SimpleCard;