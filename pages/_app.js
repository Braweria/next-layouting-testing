import "../styles/globals.css";
import MainLayout from "../components/MainLayout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>;
}
