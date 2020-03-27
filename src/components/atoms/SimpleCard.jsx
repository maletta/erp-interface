import React from "react";
import { makeStyles, lighten } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Bb from "../../assets/bb.png";
import Bradesco from "../../assets/bradesco.png";
import Itau from "../../assets/itau.png";


const SwitchIcon = ({ option, className }) => {
    switch (option) {
        case 0:
            return <img className={className.img} src={Bb} alt={'imagem do banco do brasil'} />;
        case 1:
            return <img className={className.img} src={Bradesco} alt={'imagem do banco bradesco'} />;
        case 2:
            return <img className={className.img} src={Itau} alt={'imagem do banco itaú'} />;
        default:
            return '';
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        borderRadius: '0px 0px',
        margin: 'auto',
        width: '100%',
        marginBottom: theme.spacing(1),
        boxShadow: theme.shadows[1],
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
        fontSize: '1rem',
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
            <Grid container spacing={5}>
                <Grid container item xs={6} sm={4} className={classes.image} alignItems="center" justify="center">
                    <SwitchIcon className={classes} option={icon} />
                </Grid>
                <Grid container item xs={6} sm={8} direction="column" justify="center">
                    <Grid item  >
                        <Typography gutterBottom variant="body2" className={classes.typographyGray}>
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6" align="right" className={clsx({ [classes.typographyPositive]: isPositive, [classes.typographyNegative]: !isPositive, })}>
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
    icon: PropTypes.number.isRequired,
    isPositive: PropTypes.bool,
}

export default SimpleCard;