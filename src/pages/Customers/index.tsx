import { NextPage } from 'next'
import { ToolsDetail } from '../../shared/components/ToolsDetail'
import LayoutBasePage from '../../shared/layouts/LayoutBasePage'

const Customers: NextPage = () => {
  return (
    <LayoutBasePage
      title="Clientes"
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

export default Customers
