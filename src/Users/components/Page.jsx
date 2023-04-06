import { Container, Typography } from "@material-ui/core";
import { useUsers } from "../useUsers";
import { makeStyles } from '@material-ui/core/styles';
import LoadingIndicator from "../../common/LoadingIndicator";
import ErrorIndicator from "../../common/ErrorIndicator";
import DataTable from "./DataTable";

const useStyles = makeStyles({
    title: {
        margin: '24px 0',
    },
  });

function Page() {
    const classes = useStyles();
    
    const { data: users, isLoading, isError } = useUsers();

    const columns = [
        'id',
        'name',
        'username',
        'email',
        'phone',
        'website',
        'address',
        'company'
    ];

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
                <DataTable
                    data={users}
                    columns={columns}
                />
            </Container>
            </>
            )
    }

}

export default Page;