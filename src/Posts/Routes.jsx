import { Route } from "react-router-dom";
import Container from "./Container";
import { ROUTES } from './constants';
import PostOverviewRoutes from './PostOverview/Routes';
import CreatePost from "./components/CreatePost";

function Routes(){
    return (
        <>
        <Route path={ROUTES.USER}>
            <Container/>
            <Route path={ROUTES.NEW}>
                <CreatePost/>
            </Route>
        </Route>
        <PostOverviewRoutes/>
        </>
    )
}

export default Routes;