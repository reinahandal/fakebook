import { Card, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { generatePath, Link } from "react-router-dom";
import DeleteButton from "../PostOverview/components/DeleteButton";
import { ROUTES as POST_OVERVIEW_ROUTES } from "../PostOverview/constants";
const useStyles = makeStyles({
    root: {
        width: '50%',
        marginBottom: 24,
        padding: 24,
    },
    topSection: {
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'space-between',
    },
    title: {
        marginBottom: 16,
    }
})
function Post(props) {
    const { userId, postId, title, body } = props;
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.root}>
            <div className={classes.topSection}>
                <Typography 
                    variant="h6" 
                    className={classes.title}
                    component={Link}
                    to={generatePath(POST_OVERVIEW_ROUTES.OVERVIEW, {id: postId})}
                >
                {`#${postId} ${title}`}
                </Typography>
                <DeleteButton
                    userId={userId}
                    postId={postId}
                />
            </div>

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