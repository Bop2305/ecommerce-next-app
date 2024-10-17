import type { Metadata } from 'next';
import '../styles/global.scss';
import Layout from '@/modules/layouts/Layout';
import { RecoilRoot } from 'recoil';
import RecoilContextProvider from '@/libs/RecoilContextProvider';

export const metadata: Metadata = {
  title: 'Ecommerce Application',
  description: 'Ecommerce Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          <Layout>{children}</Layout>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
