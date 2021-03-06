import { NextPage } from 'next'
import { ToolsDetail } from '../../shared/components/ToolsDetail'
// import { ToolsListing } from '../../shared/components/ToolsListing'
import LayoutBasePage from '../../shared/layouts/LayoutBasePage'

const Dashboard: NextPage = () => {
  return (
    <LayoutBasePage
      title="Dashboard"
      toolbar={
        <ToolsDetail
          showSaveAndCloseButtonLoading
          showNewButton
          showComeBackButton={false}
        />
      }
    >
      Conteudo
    </LayoutBasePage>
  )
}
export default Dashboard
// <ToolsListing showInputSearch newButtonText="Nova" />
