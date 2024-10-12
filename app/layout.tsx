import type { Metadata } from 'next';
import "../styles/global.scss"
import Layout from '@/modules/layouts/Layout';

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
