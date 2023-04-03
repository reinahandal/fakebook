import { Card, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { generatePath, Link } from "react-router-dom";
import { ROUTES as POST_OVERVIEW_ROUTES } from "../PostOverview/constants";
const useStyles = makeStyles({
    root:{
        width: '50%',
        marginBottom: 24,
        padding: 24,
    },
    title: {
        marginBottom: 16,
    }
})
function Post(props) {
    const { id, title, body } = props;
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.root}>
            <Typography 
                variant="h6" 
                className={classes.title}
                component={Link}
                to={generatePath(POST_OVERVIEW_ROUTES.OVERVIEW, {id})}
            >
            {`#${id} ${title}`}
            </Typography>
            <Typography 
                variant="body1" 
                color="textSecondary"
            >
            {body}
            </Typography>
        </Card>
    )
}

export default Post;