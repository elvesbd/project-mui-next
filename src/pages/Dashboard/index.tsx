import { NextPage } from 'next'
import { ToolsDetail } from '../../shared/components/ToolsDetail'
import { ToolsListing } from '../../shared/components/ToolsListing'
import LayoutBasePage from '../../shared/layouts/LayoutBasePage'

const DashboardPage: NextPage = () => {
  return (
    <LayoutBasePage
      title="Págian inicial"
      toolbar={
        <ToolsDetail
          showSaveComeBackButton
          showNewButton
          showSaveComeBackButtonLoading
          showComeBackButton={false}
        />
      }
    >
      Conteudo
    </LayoutBasePage>
  )
}
export default DashboardPage
// <ToolsListing showInputSearch newButtonText="Nova" />
