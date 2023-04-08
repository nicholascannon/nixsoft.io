import Image from 'next/image';
import { siteFont } from './font';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>nixsoft.io</title>
            </Head>

            <main className={`${siteFont.variable} font-sans flex flex-col justify-center items-center min-h-screen`}>
                <Image src="/globe.gif" alt="Digital globe animation" width={150} height={150} />
                <h1 className="text-4xl">nixsoft.io</h1>
                <h2 className="text-lg">coming soon...</h2>
            </main>
        </>
    );
}
