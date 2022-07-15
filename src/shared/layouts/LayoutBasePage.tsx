import { Box } from '@mui/system'
import { NextPage } from 'next'
import { ReactNode } from 'react'

interface LayoutBasePageProps {
  children: ReactNode
}

const LayoutBasePage: NextPage<LayoutBasePageProps> = ({ children }) => {
  return <Box>TESTE {children}</Box>
}

export default LayoutBasePage
