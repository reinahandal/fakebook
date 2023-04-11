import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  username: {
    fontSize: 14,
  },
  name: {
    margin: '8px 0',
  },
  contact: {
    marginBottom: 8,
    fontSize: 14,
  },
});

function UserCard(props) {
  const classes = useStyles();

  const { name, username, email, address, website, phone, style } = props;

  const addressFormatter = val => {
    return (
      <>
        {`${val.street}, ${val.suite}`}
        <br />
        {`${val.city}, ${val.zipcode}`}
      </>
    )
  }

  return (
    <Card className={style}>
      <CardContent>
        <Typography className={classes.username} color="textSecondary" gutterBottom>
          {username}
        </Typography>
        <Typography variant="h5" className={classes.name}>
          {name}
        </Typography>
        <Typography className={classes.contact} color="textSecondary">
          {email}
          <br />
          {phone}
        </Typography>
        <Typography className={classes.contact} color="textSecondary">
          {website}
        </Typography>
        <Typography variant="body2">
          {address && addressFormatter(address)}
        </Typography>
      </CardContent>
    </Card>
  )
}

UserCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  // I think this should use the shape() method
  address: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number])),
  website: PropTypes.string,
  phone: PropTypes.string,
  style: PropTypes.string,
}

export default UserCard;