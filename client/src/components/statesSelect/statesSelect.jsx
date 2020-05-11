import $ from "jquery";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./statesSelect.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles(() => {
//   root: {
//     border: '1px solid',
//     textAlign: 'center',
//     width: '100vw',
//     height: '100vh'
//   },
//   states: {

//   }
// });

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionalStates: ["excited", "happy", "stuck", "sick", "scared", "angry"],
    };
  }

  getVerses(event) {
    event.preventDefault();
    const state = event.target.innerHTML;
    $.get("http://localhost:5000/verses", { state }, function (results) {
      console.log(results);
    });
  }
  render() {
    return (
      <Container component="main" maxWidth="xm">
        <CssBaseline />
        <Typography
          component="h1"
          variant="h5"
          style={{ marginTop: 40, marginLeft: 550 }}>
          How do you feel today ?
        </Typography>
        <br></br>
        <Grid container spacing={1} alignItems="center" justify="center">
          {this.state.emotionalStates.map((emotionalState, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={3}
                md={3}
                lg={4}
                id="GridState">
                <Paper id="stateComponent" onClick={this.getVerses}>
                  <img
                    src={require(`../../img/emoji/${emotionalState}.png`)}
                    alt={emotionalState}
                    style={{ marginLeft: 190 }}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginLeft: 225 }}>
                    {emotionalState}
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

export default States;
