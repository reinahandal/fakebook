import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        display:'flex',
        justifyContent: 'center',
        marginTop: 200,
    }
})

function LoadingIndicator() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress/>
        </div>

    )
}
export default LoadingIndicator;