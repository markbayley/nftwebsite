import { Footer, NavBar } from "../components/componentsindex";
import "../styles/globals.css";

//INTERNAL IMPORT

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);
export default MyApp;
