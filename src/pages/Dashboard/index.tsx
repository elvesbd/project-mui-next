import { NextPage } from 'next'
import { ToolsBar } from '../../shared/components/ToolsBar'
import LayoutBasePage from '../../shared/layouts/LayoutBasePage'

const DashboardPage: NextPage = () => {
  return (
    <LayoutBasePage
      title="Págian inicial"
      toolbar={<ToolsBar showInputSearch newButtonText="Nova" />}
    >
      Conteudo
    </LayoutBasePage>
  )
}
export default DashboardPage
