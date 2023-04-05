import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
    fontSize: 14,
  },
});

function UserCard(props) {
    const classes = useStyles();

    const { name, username, email, address, website, phone, style } = props;


    const addressFormatter = val => {
      return (
        <Typography variant="body2" component="p">
        {`${val.street}, ${val.suite}`}
        <br/>
        {`${val.city}, ${val.zipcode}`}
        </Typography>
      )
    }

    return (
        <Card className={style}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {username}
            </Typography>
            <Typography variant="h5" component="h2">
                {name} 
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {email}
                <br/>
                {phone}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {website}
            </Typography>
            <Typography variant="body2" component="p">
                {addressFormatter(address)}
            </Typography>
            </CardContent>
        </Card>
    )
}

export default UserCard;