import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import cyan from '@material-ui/core/colors/cyan';

const styles = theme => ({
    root: {
        color: cyan[600],
        '&$checked': {
            color: cyan[500],
          },
    },
    checked: {},
    selected: {
        color: 'white',
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
    }  
});

const games = ["Street Fighter", "Street Fighter II", "Street Fighter II: Champion Edition", "Street Fighter II Turbo: Hyper Fighting", "Super Street Fighter II", "Super Street Fighter II Turbo", "Street Fighter Alpha", "Street Fighter Alpha 2", "Street Fighter Alpha 3", "Street Fighter III", "Street Fighter III 2nd Impact", "Street Fighter III 3rd Strike", "Ultra Street Fighter IV", "Street Fighter V: Arcade Edition"]

class GameSelector extends Component {
    state = {
        checked: [],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;

        return (
                <List className={classes.root}>
                    {games.map(value => (
                        <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>   
                            <ListItemText classes={{ primary: classes.selected}} primary={value} />
                            <Checkbox
                                checked={this.state.checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                  }}
                            />
                        </ListItem>
                    ))}
                </List>
        );
    }
}

GameSelector.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameSelector);