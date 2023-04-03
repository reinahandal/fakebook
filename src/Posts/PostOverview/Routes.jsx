import { Route } from "react-router-dom";
import Container from "./Container";
import { ROUTES } from "./constants";
import EditPost from "./components/EditPost";

function Routes() {
    return (
        <>
        <Route path={ROUTES.OVERVIEW}>
            <Container/>
            <Route path={ROUTES.EDIT}>
                <EditPost/>
            </Route>
        </Route>
    
        </>

    )
}

export default Routes;