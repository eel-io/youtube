import { createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';

// 自定义 material-ui 主题样式
const ThemeConfig = createMuiTheme({
  // 改变 material-ui 主色
  palette: {
    primary: {
      main: pink['A400'],
    },
    secondary: {
      main: blue['A400'],
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
        display: 'inline-flex',
        fontSize: '1.5rem !important',
      },
    },
    MuiDivider: {
      root: {
        width: '100%',
        background: '#eee',
      },
    },
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
        color: '#fff',
      },
    },
    MuiSvgIcon: {
      root: {
        width: '2rem',
        height: '2rem',
      },
    },
  },
});

export default ThemeConfig;
