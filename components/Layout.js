import Head from 'next/head';
import NavBar from './organisms/NavBar';
import Profile from './organisms/Profile';
import Footer from './organisms/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Profile/>
            {children}
            <Footer/>
        </>
    )
}