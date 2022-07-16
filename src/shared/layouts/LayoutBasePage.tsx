import {
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { NextPage } from 'next'
import { ReactNode } from 'react'
import { useDrawerContext } from '../contexts'

interface LayoutBasePageProps {
  children: ReactNode
  toolbar?: ReactNode
  title: string
}

const LayoutBasePage: NextPage<LayoutBasePageProps> = ({
  children,
  title,
  toolbar,
}) => {
  const { toggleDrawerOpen } = useDrawerContext()

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const theme = useTheme()

  return (
    <Box height="100vh" display="flex" flexDirection="column" gap={1}>
      <Box
        display="flex"
        alignItems="center"
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          overflow="hiden"
          whiteSpace="nowrap"
          textOverflow="ellipses"
        >
          {title}
        </Typography>
      </Box>
      {toolbar && <Box>{toolbar}</Box>}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  )
}

export default LayoutBasePage
