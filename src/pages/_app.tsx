// pages/_app.tsx

import '../styles/global.css';
import {AppProps} from 'next/app';

// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
