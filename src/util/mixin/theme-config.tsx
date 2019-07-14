import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

// 自定义 material-ui 主题样式
const ThemeConfig = createMuiTheme({
  // 改变 material-ui 主色
  palette: {
    primary: {
      main: blue['A400'],
    },
    secondary: {
      main: pink['A400'],
    },
  },
  // 改变全局 material-ui 字体
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },

  overrides: {
    MuiButton: {
      root: {
        fontSize: '1.3rem',
      },
      label: {
        textTransform: 'none', // capitalize
      },
    },
    // 改变 Tab 的样式
    MuiTab: {
      root: {
        fontSize: '1.3rem',
        textTransform: 'none',
      },
    },
    MuiAvatar: {
      root: {
        width: '3rem',
        height: '3rem',
      },
    },
    MuiTypography: {
      root: {
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '1.5rem !important',
      },
    },
    MuiDivider: {
      root: {
        width: '100%',
        background: '#eee',
      },
    },
    MuiPaper: {
      root: {
        display: 'flex',
        color: '#fff',
        backgroundColor: '#000',
      },
    },

    // change bottomNavigation styles
    MuiBottomNavigation: {
      root: {
        position: 'fixed',
        width: '100%',
        left: 0,
        bottom: 0,
        height: '4.6rem',
        borderTop: '1px solid #333',
        backgroundColor: '#000',
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: blue['100'],
      },
    },
    MuiSvgIcon: {
      root: {
        width: '2rem',
        height: '2rem',
      },
    },

    // change app-bar styles
    MuiToolbar: {
      regular: {
        height: '4.6rem',
        minHeight: 'auto',
        borderBottom: '1px solid #333',
        backgroundColor: '#000',
      },
    },
    MuiIcon: {
      root: {
        width: 'auto',
        height: 'auto',
        fontSize: '2rem',
      },
    },
    MuiCardContent: {
      root: {
        color: '#fff',
        backgroundColor: '#111',
      },
    },
  },
});

export default ThemeConfig;
