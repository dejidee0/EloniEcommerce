// src/components/Sidebar/Sidebar.styles.ts
import { ThemeUIStyleObject } from 'theme-ui';

export const styles: Record<string, ThemeUIStyleObject> = {
  sidebarContainer: {
    width: ['100%', '250px'],
    backgroundColor: 'primaryDark',
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    height: '100vh',
    overflowY: 'auto',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
  logoText: {
    fontSize: [3, 4],
    color: 'orange',
    marginRight: '10px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '10px 0',
  },
  sectionHeading: {
    fontSize: 2,
    color: 'gray',
    margin: 0,
  },
  iconButton: {
    color: 'white',
  },
  navLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    fontSize: 1,
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'primary',
    },
  },
};