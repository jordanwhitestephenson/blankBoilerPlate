import React from 'react'
import { observer } from 'mobx-react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme/theme'
import Parent from './Parent'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { withRouter } from 'react-router'
import Listings from './pages/Listings'
import Rent from './pages/Rent'

export const Main = () => {
    let appTheme = createMuiTheme(theme)
    return (
        <MuiThemeProvider theme={appTheme}>
            <HashRouter>
                <Parent />
                <Switch>
                    <Route exact path="/" component={Listings} />
                    <Route exact path="/rent" component={Rent} />
                </Switch>
            </HashRouter>
        </MuiThemeProvider>
    )
}

export default observer(Main)
