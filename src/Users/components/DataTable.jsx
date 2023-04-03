import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { generatePath, Link } from "react-router-dom";
import { ROUTES as POSTS_ROUTES } from '../../Posts/constants';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    propTitle: {
        textTransform:'capitalize',
    },
  });

  const addressFormatter = (value) => {
    return (
        <>
        <Typography>{`${value.suite}, ${value.street}, ${value.city}`}</Typography>
        <Typography>{`${value.zipcode}`}</Typography>
        </>
    )
  }

  const companyFormatter = (value) => {
    return (
        <>
        <Typography>{`${value.name}`}</Typography>
        <Typography>{`${value.bs}`}</Typography>
        <Typography>{`${value.catchPhrase}`}</Typography>
        </>
    )
  }

  const telephoneFormatter = (value) => {
    return (
    <Typography><a href={`tel:${value}`}>{value}</a></Typography>
    )
  }

  const nameFormatter = (value, id) => {
    return (
        <Typography 
          component={Link}
          to={(generatePath(POSTS_ROUTES.USER, {id: id}))}
        >
          {value}
        </Typography>
    )
  }

  const FORMATTER  = {
    name: nameFormatter,
    address: addressFormatter,
    company: companyFormatter,
    phone: telephoneFormatter,
  }

const DataTable = (props) => {
    const classes = useStyles();
    const { data } = props;
    
    const properties = Object.keys(data[0]);

    const formatCell = (code, prop, id) => {

        if(FORMATTER[code] && typeof FORMATTER[code] === 'function'){
            return FORMATTER[code](prop, id);
        } else {
          return (
            <Typography>{prop}</Typography>
        )
        }
    }

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
                {
                    properties.map(prop => (
                        <TableCell key={prop} className={classes.propTitle}>{prop}</TableCell>
                    ))
                }
            </TableRow>
          </TableHead>
          <TableBody>
            {
                data.map(item => (
                    <TableRow
                        hover
                        className={classes.dataRow}
                        key={item.id}
                    >
                        {/* {
                            properties.map(prop => (<TableCell key={`${item.id}-${prop}`}>{formatCell(prop, item[prop], item.id)}</TableCell>))
                        } */}
                        {
                          Object.entries(item).map(([key,value]) => 
                            (<TableCell key={`${item.id}-${key}`}>
                              {formatCell(key, value, item.id)}
                            </TableCell>))
                        }
                    </TableRow>
                ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    )
}


export default DataTable;