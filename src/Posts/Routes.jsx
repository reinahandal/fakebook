import { Route } from "react-router-dom";
import Container from "./Container";
import { ROUTES } from './constants';
import PostForm from "./components/PostForm";
import PostOverviewRoutes from './PostOverview/Routes';

function Routes(){
    return (
        <>
        <Route path={ROUTES.USER}>
            <Container/>
            <Route path={ROUTES.NEW}>
                <PostForm/>
            </Route>
        </Route>
        <PostOverviewRoutes/>
        </>
    )
}

export default Routes;