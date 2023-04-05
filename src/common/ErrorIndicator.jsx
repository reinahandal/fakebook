import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    text: {
        color:'crimson',
        fontSize: 24,
        textAlign:'center',
        marginTop: 200,
    }
})
function ErrorIndicator() {
    const classes = useStyles();

    return (
        <Typography className={classes.text}>An error has occurred</Typography>
    )
}

export default ErrorIndicator;