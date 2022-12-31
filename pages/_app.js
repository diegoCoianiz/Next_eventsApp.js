import {MainLayout} from '../components/MainLayout'
import '../styles/general.sass'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
          <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
