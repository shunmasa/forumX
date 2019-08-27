
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link} from "react-router-dom";

// const renderCardImage =(image)=>{
//   if(image.length > 0){
//       return image[0].url
//   } else {
//       return '/images/image_not_availble.png'
//   }
// }

const useStyles = makeStyles(theme => ({
 
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    Width: "100%",
  },
  image: {
    width: 200,
    height: 175,
    border:1,
    borderColor:100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  typography: {
    fontWeightMedium: 800,
    fontSize: 25,
    
  }
}));


export default function Topic(props) {

  const classes = useStyles();
  // const {props} = this.props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.image}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.typography}gutterBottom variant="subtitle1">
                 {props.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.description}
                </Typography>
                
              </Grid>
              <Grid item>
                <Link to="/forum_comment" variant="body2" style={{ cursor: 'pointer' }}>
                  Comments({props.comments})
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Current Rate:{props.currentRate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}