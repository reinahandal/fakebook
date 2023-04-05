import { Container, Typography } from "@material-ui/core";
import { useUsers } from "../useUsers";
import DataTable from "./DataTable";
import { makeStyles } from '@material-ui/core/styles';
import LoadingIndicator from "../../common/LoadingIndicator";
import ErrorIndicator from "../../common/ErrorIndicator";

const useStyles = makeStyles({
    title: {
        margin: '24px 0',
    },
  });

function Page() {
    
    const { data: users, isLoading, isError } = useUsers();
    const classes = useStyles();

    if (isLoading) {
        return (
            <LoadingIndicator/>
        )
    }
    if (isError) {
        return (
            <ErrorIndicator/>
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