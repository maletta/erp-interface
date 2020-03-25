import React from "react";
import { makeStyles, lighten } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Calendar from "../../assets/calendar.png";
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    image: {
        width: '100%',
        height: '100%',
    },
    img: {
        margin: 'auto',
        display: 'block',
        //maxWidth: '100%',
        //maxHeight: '100%',
        width: '88px',
    },
    typography: {
        color: lighten(theme.palette.common.black, 0.50)
    },
    typographySmall: {
        fontSize: '0.6rem',
        marginRight: '8px',
    },
    typographySmall2: {
        fontSize: '0.7rem',
        marginRight: '8px',
        lineHeight: '2rem',
    },
    typographyPositive: {
        color: theme.palette.success.main,
    },
    typographyNegative: {
        color: theme.palette.error.main,
    },
    typographyNeutral: {
        color: '#2980b9',
    },
}));

const BalanceCard = ({ header, main, footer, isPositive }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={Calendar} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={8} sm={10} container className={classes.typography}>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item >
                            <Typography gutterBottom variant="subtitle1">
                                {header}
                            </Typography>
                            <Grid item container justify="flex-end" alignItems="flex-end"
                                className={clsx({ [classes.typographyPositive]: main.isPositive, [classes.typographyNegative]: !main.isPositive, })}>
                                <Typography variant="h6" gutterBottom align="right" className={clsx({ [classes.typographySmall2]: true })}>
                                    {`${main.description}`}
                                </Typography>
                                <Typography variant="h6" gutterBottom align="right" >
                                    {main.content}
                                </Typography>
                            </Grid>
                            <Grid item container justify="flex-end" alignItems="flex-end">
                                <Typography variant="body2" color="textSecondary" align="right" className={classes.typographySmall}>
                                    {`${footer.realized.description} `}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" align="right" className={classes.typographyNeutral}>
                                    {footer.realized.content}
                                </Typography>
                            </Grid>
                            <Grid item container justify="flex-end" alignItems="flex-end">
                                <Typography variant="body2" color="textSecondary" align="right" className={classes.typographySmall}>
                                    {`${footer.total.description} `}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" align="right">
                                    {footer.total.content}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}


BalanceCard.propTypes = {
    header: PropTypes.string.isRequired,
    main: PropTypes.shape({
        content: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isPositive: PropTypes.bool.isRequired,
    }),
    footer: PropTypes.shape({
        realized: PropTypes.shape({
            content: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }),
        total: PropTypes.shape({
            content: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }),
    }),
}

export default BalanceCard;