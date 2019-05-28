/* eslint-disable import/first */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Listings from './pages/Listings'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Home from '@material-ui/icons/Home'
import BuyIcon from '@material-ui/icons/Payment'
import RentIcon from '@material-ui/icons/LocalHotel'
import SericeIcon from '@material-ui/icons/RoomService'
import ProfileIcon from '@material-ui/icons/AccountBox'
import CompanyIcon from '@material-ui/icons/Polymer'
import { withStyles } from '@material-ui/styles'
import Rent from './pages/Rent'
import Services from './pages/Services'
import Buy from './pages/Buy'

const drawerWidth = '25vmax'

const styles = theme => ({
    root: {
        display: 'flex'
    },

    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    },
    drawer: {
        width: '20vw',
        flexShrink: 0
    },
    drawerPaper: {
        width: '18VW',
        paddingTop: '9vh'
    },
    content: {
        flexGrow: 1,
        padding: '20px',
        height: '100vh',
        overflowWrap: 'wrap'
    }
})

class MenuNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { location: '' }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = type => {
        switch (type) {
            case 'Home':
                this.setState({
                    location: 'Home'
                })
                break
            case 'Rent':
                this.setState({
                    location: 'Rent'
                })
                break
            case 'Buy':
                this.setState({
                    location: 'Buy'
                })
                break
            case 'Services':
                this.setState({
                    location: 'Services'
                })
                break
            case 'Profile':
                this.setState({
                    location: 'Profile'
                })
                break
        }
    }

    render() {
        const { classes } = this.props
        console.log(this.props)
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <CompanyIcon style={{ color: '#000' }} />
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    anchor="left">
                    <div className={classes.toolbar} />
                    <Divider />
                    <List className="seperator">
                        <ListItem
                            onClick={e => {
                                this.handleClick('Home')
                            }}>
                            <ListItemIcon className="icon">
                                <Home />
                            </ListItemIcon>
                            <Hidden only={['xs', 'sm']}>
                                <ListItemText primary={'My Properties'} />
                            </Hidden>
                        </ListItem>
                        <ListItem
                            onClick={e => {
                                this.handleClick('Buy')
                            }}>
                            <ListItemIcon className="icon">
                                <BuyIcon />
                            </ListItemIcon>
                            <Hidden only={['xs', 'sm']}>
                                <ListItemText primary={'Buy'} />
                            </Hidden>
                        </ListItem>
                        <ListItem
                            onClick={e => {
                                this.handleClick('Rent')
                            }}>
                            <ListItemIcon className="icon">
                                <RentIcon />
                            </ListItemIcon>
                            <Hidden only={['xs', 'sm']}>
                                <ListItemText primary={'Rent'} />
                            </Hidden>
                        </ListItem>
                        <ListItem
                            onClick={e => {
                                this.handleClick('Services')
                            }}>
                            <ListItemIcon className="icon">
                                <SericeIcon />
                            </ListItemIcon>
                            <Hidden only={['xs', 'sm']}>
                                <ListItemText primary={'Services'} />
                            </Hidden>
                        </ListItem>
                        <ListItem
                            onClick={e => {
                                this.handleClick('Profile')
                            }}>
                            <ListItemIcon className="icon">
                                <ProfileIcon />
                            </ListItemIcon>
                            <Hidden only={['xs', 'sm']}>
                                <ListItemText primary={'Profile'} />
                            </Hidden>
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
                <main className={classes.content}>
                    {this.state.location && this.state.location === 'Home' ? (
                        <Listings />
                    ) : this.state.location === 'Rent' ? (
                        <Rent />
                    ) : this.state.location === 'Buy' ? (
                        <Buy />
                    ) : this.state.location === 'Services' ? (
                        <Services />
                    ) : (
                        <Listings />
                    )}

                    <div className={classes.toolbar} />
                </main>
            </div>
        )
    }
}
export default withStyles(styles)(MenuNav)
