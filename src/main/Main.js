import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


class Main extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired,
  }

  state = {
    raw: '',
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container
          justify={'center'}
          spacing={24}
        >
          <Grid item xs={12}>
            <TextField className={classes.textField}
              onChange={(e) => this.onTextFieldChange(e)}
              label="Insert raw text"
              multiline />
          </Grid>
        </Grid>
        <Button variant="fab"
          color="primary"
          aria-label="Search"
          className={classes.fab}
          onClick={() => this.onSearch(this.state.raw)}
        >
          <SearchIcon />
        </Button>
      </div>
    )
  }

  onTextFieldChange(e) {
    this.setState({ raw: e.target.value })
  }

  onSearch(raw) {
    this.props.onSearch({ rawText: raw })
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 48,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  textField: {
    width: '100%',
    height: '100%',
  },
});

export default withStyles(styles)(Main);
