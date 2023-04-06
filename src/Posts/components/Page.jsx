import { Typography } from "@material-ui/core";
import { useParams, Link as RouterLink, generatePath } from "react-router-dom";
import { usePosts } from "../usePosts";
import Post from "./Post";
import { ROUTES } from '../../Users/constants';
import { ROUTES as POSTS_ROUTES } from '../constants';
import { makeStyles } from "@material-ui/core";
import { useUser } from "../../Users/useUser";
import UserCard from "../../Users/components/UserCard";
import ErrorIndicator from "../../common/ErrorIndicator";
import LoadingIndicator from "../../common/LoadingIndicator";

const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginLeft: 16,
        width:'100%',
    },
    userCard: {
        margin: '24px 0',
        width: '50%',
    },
    posts:{
        width:'50%',
    },
    title:{
        margin: '24px 0',
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
    const { data: posts, isLoading: isPostsLoading, isError: isPostsError } = usePosts(id);

    // fetches user info
    const { data: user, isLoading: isUserLoading, isError: isUserError } = useUser(id);

    if (isPostsLoading || isUserLoading) {
        return (
            <LoadingIndicator/>
        )
    }
    if (isPostsError || isUserError) {
        return (
            <ErrorIndicator/>
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
                        All Users
                    </Typography>
                    <Typography
                        component={RouterLink}
                        to={generatePath(POSTS_ROUTES.NEW, { id })}
                    >
                        Create Post
                    </Typography>
                </div>

                <UserCard
                    name={user.name}
                    phone={user.phone}
                    username={user.username}
                    email={user.email}
                    address={user.address}
                    website={user.website}
                    style={classes.userCard}
                />
                <div className={classes.posts}>
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
            </div>
        )
    }

}

export default Page;