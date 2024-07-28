import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { AOSProvider, ThemeProvider } from '@/providers';
import { Aside, Header } from '@/components/organisms';
import { Atoms } from '@/components/atoms';
import { Toaster } from '@/components/molecules';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Nuzul H. - Personal Website',
  description: 'No description. Just my personal website.',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1, // prevent zoom-in for input field in mobile device
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={jakarta.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <NextTopLoader showSpinner={false} />
          <Header showGradient />
          <Atoms.Container className='flex gap-10 lg:mt-6'>
            <Aside />
            <AOSProvider>{children}</AOSProvider>
          </Atoms.Container>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
