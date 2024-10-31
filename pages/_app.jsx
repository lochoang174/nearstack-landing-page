import '../styles/globals.scss';

import Home from './Home';
export default function App({ Component, pageProps }) {
  // return <Home />;
  return <Component {...pageProps} />;
}
