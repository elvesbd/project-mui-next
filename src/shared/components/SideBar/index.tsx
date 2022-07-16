import {
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useAppThemeContext, useDrawerContext } from '../../contexts'

interface ISideBarProps {
  children: ReactNode
}

interface ListItemLinkProps {
  to: string
  icon: string
  label: string
  onClick: (() => void) | undefined
}

const ListItemLink: React.FC<ListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const { push, asPath } = useRouter()
  console.log(asPath)
  let isActive = false

  if (asPath === to) {
    isActive = true
  }

  const handleClick = () => {
    push(to)
    onClick?.()
  }

  return (
    <ListItemButton selected={isActive} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {
  const theme = useTheme()

  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions } =
    useDrawerContext()
  const { toggleTheme } = useAppThemeContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/',
        label: 'Página inicial',
      },
      {
        icon: 'start',
        path: '/cities',
        label: 'Cidades',
      },
    ])
  }, [])

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src="/images/logo1.svg"
              alt="Logomarca Eduardo Mota Advocacia"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  to={drawerOption.path}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
