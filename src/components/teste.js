import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 295,
    marginTop: 80,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 50,
  },
  input: {
    // margin: theme.spacing(1),
    maxWidth: 200,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Titulo:"
      />
      {/* <CardMedia
      /> */}
      <CardContent>
        
        <CardContent>
          <TextField
            className={classes.input}
            id="outlined-basic"
            size="small"
            label="Adicione seu item..."
            variant="outlined"
          />
          <Button size="small">+</Button>
        </CardContent>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
