import { Card, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { generatePath, Link } from "react-router-dom";
import DeleteButton from "../PostOverview/components/DeleteButton";
import { ROUTES as POST_OVERVIEW_ROUTES } from "../PostOverview/constants";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
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
    },
    deleteBtn:{
        width:'fit-content',
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
                <div className={classes.deleteBtn}>
                <DeleteButton
                    userId={userId}
                    postId={postId}
                    size={"small"}
                />
                </div>

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

Post.propTypes = {
    userId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    body: PropTypes.string.isRequired,
};

export default Post;