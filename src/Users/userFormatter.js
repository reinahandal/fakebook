import { generatePath, Link } from "react-router-dom";
import { ROUTE as POST_ROUTE } from '../Posts/constants';
import { Typography } from '@material-ui/core';

export const addressFormatter = value => {
    return (
        <>
        <Typography>{`${value.suite}, ${value.street}`}</Typography>
        <Typography>{`${value.city}, ${value.zipcode}`}</Typography>
        </>
    )
}

export const companyFormatter = value => {
    return (
        <>
        <Typography>{`${value.name}`}</Typography>
        <Typography>{`${value.bs}`}</Typography>
        <Typography>{`${value.catchPhrase}`}</Typography>
        </>
    )
}

export const telephoneFormatter = value => {
    return (
    <Typography><a href={`tel:${value}`}>{value}</a></Typography>
    )
}

export const nameFormatter = (value, id) => {
    return (
        <Typography 
            component={Link}
            to={(generatePath(POST_ROUTE.ROOT, {id: id}))}
        >
            {value}
        </Typography>
    )
}

export const genericFormatter = value => {
    return (
        <Typography>{value}</Typography>
    )
}

export const SPECIAL_FORMATTER  = {
    name: nameFormatter,
    address: addressFormatter,
    company: companyFormatter,
    phone: telephoneFormatter,
}

export const formatCell = (code, prop, id) => {
    if (SPECIAL_FORMATTER[code]) {
        return SPECIAL_FORMATTER[code](prop, id);
    } else {
        return genericFormatter(prop);
    }
}
