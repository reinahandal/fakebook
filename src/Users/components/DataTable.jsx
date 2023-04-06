import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { formatCell } from '../userFormatter'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  propTitle: {
    textTransform: 'capitalize',
  },
});

function DataTable(props) {
  const classes = useStyles();
  const { data, columns } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow>
            {columns.map(column => (
                <TableCell key={column} className={classes.propTitle}>
                    {column}
                </TableCell>
            ))}
            </TableRow>
        </TableHead>
        <TableBody>
        {data.map(item => (
            <TableRow 
                hover 
                className={classes.dataRow} 
                key={item.id}
            >
                {
                    columns.map(col => (
                        <TableCell key={`${item.id}-${col}`}>
                            {formatCell(col, item[col], item.id)}
                        </TableCell>
                    ))
                }
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.string),
};

DataTable.defaultProps = {
  data: [{}],
};

export default DataTable;
