import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { AOSProvider, ThemeProvider } from '@/providers';
import { Aside, Header } from '@/components/organisms';
import { Atoms } from '@/components/atoms';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Nuzul H. - Personal Website',
  description: 'Anything',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={jakarta.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} shadow={false} />
          <Header />
          <Atoms.Container className='flex gap-4 lg:mt-8'>
            <Aside />
            <AOSProvider>{children}</AOSProvider>
          </Atoms.Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
