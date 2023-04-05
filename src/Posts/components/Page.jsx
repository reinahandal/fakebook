import { Typography } from "@material-ui/core";
import { useParams, Link as RouterLink, generatePath } from "react-router-dom";
import { usePosts } from "../usePosts";
import Post from "./Post";
import { ROUTES } from '../../Users/constants';
import { ROUTES as POSTS_ROUTES } from '../constants';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginLeft: 16,
    },
    title:{
        margin: '16px 0',
    },
    links: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 24,
    }
})

function Page() {
    const classes = useStyles();
    const { id } = useParams();

    // fetches posts of a particular user
    const { data: posts, isLoading, isError } = usePosts(id);

    if (isLoading) {
        return (
            <Typography variant="h5">Loading Posts...</Typography>
        )
    }
    if (isError) {
        return (
            <Typography variant="h5">Something went wrong</Typography>
        )
    }
    else {
        return (
            <div className={classes.root}>
                <div className={classes.links}>
                    <Typography
                        component={RouterLink}
                        to={ROUTES.ROOT}
                    >
                    Go back
                    </Typography>
                    <Typography
                        component={RouterLink}
                        to={generatePath(POSTS_ROUTES.NEW, { id })}
                    >
                    Create Post
                    </Typography>
                </div>
                <Typography 
                    variant="h4"   
                    className={classes.title}
                >
                Posts
                </Typography>
                {
                    posts.map(item => (
                        <Post 
                            postId={item.id} 
                            userId={item.userId}
                            title={item.title} 
                            body={item.body}
                            key={item.id}
                        />
                    ))
                }
            </div>
        )
    }

}

export default Page;