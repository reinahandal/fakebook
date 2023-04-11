import { Route } from "react-router-dom";
import Container from "./Container";
import { ROUTE } from "./constants";
import EditPost from "./components/EditPost";

function Routes() {

    return [
        <Route path={ROUTE.ROOT} key={ROUTE.ROOT}>
            <Container/>
            <Route path={ROUTE.EDIT} exact>
                <EditPost/>
            </Route>
        </Route>
    ]
}

export default Routes;