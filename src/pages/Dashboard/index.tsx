import { NextPage } from 'next'
import LayoutBasePage from '../../shared/layouts/LayoutBasePage'

const DashboardPage: NextPage = () => {
  return (
    <LayoutBasePage title="Págian inicial" toolbar={<>toolbar</>}>
      Conteudo
    </LayoutBasePage>
  )
}
export default DashboardPage
