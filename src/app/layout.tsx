import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme';
import './globals.css';
import { Aside, Header } from '@/components/organisms';
import { Atoms } from '@/components/atoms';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Atoms.Container className='flex gap-4 lg:mt-8'>
            <Aside />
            {children}
          </Atoms.Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
