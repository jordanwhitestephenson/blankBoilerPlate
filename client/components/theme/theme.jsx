import cyan from '@material-ui/core/colors/cyan'
import pink from '@material-ui/core/colors/pink'

const drawerWidth = 240
export const theme = {
    palette: {
        type: 'light',
        primary: { main: cyan[500] },
        secondary: { main: pink['A200'] },
        contrastThreshold: 3,
        tonalOffset: 0.2
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: '#000',
                color: '#fff'
            }
        },
        MuiSvgIcon: {
            root: {
                color: '#fff'
            }
        },

        MuiTypography: {
            body1: {
                color: '#fff',
            },
            subheading: {
                color: '#fff'
            }
        }
    },
    paper: {
        margin: '20px'
    },

    root: {
        display: 'flex'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },

    content: {
        flexGrow: 1,
        padding: '20px'
    }
}
