import { AppProps } from 'next/app'
import { SideBar } from '../shared/components/SideBar'
import { AppThemeProvider, DrawerProvider } from '../shared/contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <SideBar>
          <Component {...pageProps} />
        </SideBar>
      </DrawerProvider>
    </AppThemeProvider>
  )
}

export default MyApp
