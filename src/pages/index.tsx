import { NextPage } from 'next'
import { ToolsDetail } from '../shared/components/ToolsDetail'
import LayoutBasePage from '../shared/layouts/LayoutBasePage'
import Customers from './Customers'
import Dashboard from './Dashboard'

const IndexPage: NextPage = () => {
  return (
    <>
      <Dashboard />
      <Customers />
    </>
  )
}
export default IndexPage
