import { Michroma as CustomFont } from 'next/font/google';

export const siteFont = CustomFont({
    subsets: ['latin'],
    variable: '--site-font',
    weight: '400',
});
