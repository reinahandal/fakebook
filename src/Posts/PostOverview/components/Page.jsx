import { Button, Paper, Typography } from "@material-ui/core";
import { generatePath, Link, useParams } from "react-router-dom";
import { usePost } from "../usePost";
import { useUser } from '../../../Users/useUser';
import { makeStyles } from "@material-ui/styles";
import { ROUTE as POST_ROUTE } from "../../constants";
import { ROUTE } from "../constants";
import DeleteButton from "./DeleteButton";
import LoadingIndicator from "../../../common/LoadingIndicator";
import ErrorIndicator from "../../../common/ErrorIndicator";

const useStyles = makeStyles({
    root:{
        margin: 16,
        padding: 8,
    },
    post:{
        width: '50%',
        padding: 24,
        marginTop: 16,
    },
    topSection:{
        display:'flex',
        justifyContent:'space-between'
    },
    buttons:{
        display:'flex',
        alignItems:'flex-start',
        gap: 8,
    },
    userProfile:{
        marginBottom: 24,
    },
    postTitle:{
        marginBottom: 8,
    },
})

function Page() {
    const { id } = useParams();
    const classes = useStyles();
    const { data: post, isLoading: isPostLoading, isError: isPostError } = usePost(id);
    
    const { data: user, isLoading: isUserLoading, isError: isUserError} = useUser(post?.userId);

    if (isPostLoading || isUserLoading) {
        return (<LoadingIndicator/>)
    }
    
    if (isPostError || isUserError) {
        return (<ErrorIndicator/>)
    }

    return (
        <div className={classes.root}>
            <Typography 
                component={Link} 
                to={generatePath(POST_ROUTE.ROOT, {id: post?.userId})}
            >
                {`${user?.name}'s Profile`}
            </Typography>
            <Paper className={classes.post}>
                <div className={classes.topSection}>
                    <div className={classes.userProfile}>
                        <Typography>{user?.name}</Typography>
                        <Typography color="textSecondary">{` ${user?.username} - ${user?.email}`}</Typography>
                    </div>
                    <div className={classes.buttons}>
                        <Button 
                            variant="outlined" 
                            color="primary"
                            component={Link}
                            to={generatePath(ROUTE.EDIT, {id: post.id})}
                        >
                            Edit
                        </Button>
                        <DeleteButton 
                            userId={post.userId}
                            postId={post.id}
                        />
                    </div>
                </div>
                <Typography variant="h6" className={classes.postTitle}>{`#${post.id} - ${post.title}`}</Typography>
                <Typography variant="body1">{post.body}</Typography>               
            </Paper>

        </div>

    )
}

export default Page;