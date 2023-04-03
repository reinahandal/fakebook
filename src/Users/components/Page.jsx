import { Container, Typography } from "@material-ui/core";
import { useUsers } from "../useUsers";
import DataTable from "./DataTable";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    loadingIndicator: {
        textAlign:'center',
        margin:'200px'
    },
    title: {
        margin: '24px 0',
    },
  });

function Page() {
    
    const { data: users, isLoading, isError } = useUsers();
    const classes = useStyles();

    if (isLoading) {
        return (
            <Typography variant="h5" className={classes.loadingIndicator}>Loading Users...</Typography>
        )
    }
    if (isError) {
        return (
            <Typography variant="h5" className={classes.loadingIndicator}>Something's wrong</Typography>
        )

    } else {
        return (
            <>
            <Container maxWidth="xl">
                <Typography variant="h4" className={classes.title}>Users</Typography>
                <DataTable data={users}/>
            </Container>
            </>
            )
    }

}

export default Page;