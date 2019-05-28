import React from 'react'
import { observer } from 'mobx-react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme/theme'
import Parent from './Parent'

export const Main = () => {
    let appTheme = createMuiTheme(theme)
    return (
        <MuiThemeProvider theme={appTheme}>
            <Parent />
        </MuiThemeProvider>
    )
}

export default observer(Main)
