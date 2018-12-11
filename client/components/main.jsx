import React from 'react'
import { Page } from 'react-layout-components'
import { observer } from 'mobx-react'
import { OnResize } from 'react-window-mixins'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import { theme } from './theme/theme'

export const Main = () => {
    let appTheme = createMuiTheme(theme)
    let component
    let content = <Button>Whats up? </Button>
    component = <Page>{content}</Page>

    return <MuiThemeProvider theme={appTheme}>{component}</MuiThemeProvider>
}

export default observer(Main)
