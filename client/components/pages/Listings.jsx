import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
// import theme from '../theme'

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        color: '#000',
        margin: "15px",
        height: "50%"
    },
    paper: {
        color: theme.palette.text.secondary
    }
})
function Listings(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.root}>xs</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.root}>xs</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.root}>xs</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
Listings.propTypes = {
    classes: PropTypes.isRequired
}
export default withStyles(styles)(Listings)
