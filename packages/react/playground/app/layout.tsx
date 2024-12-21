import React from 'react';
import {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {NavigationTreeLink} from '@mockline/themes';
import {MSidebar} from "mockline-react";

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Playground - Next.js',
  description: 'A playground for testing and showcasing Next components.',
};

// Définition des liens pour la barre latérale
const links: NavigationTreeLink[] = [
  {
    title: 'Base',
    path: '/playground',
    children: [
      {title: 'Button', path: '/playground/button', icon: 'lucide:square-mouse-pointer'},
      {title: 'Switch', path: '/playground/switch', icon: 'lucide:toggle-right'},
      {title: 'Nav Menu', path: '/playground/nav-menu', icon: 'lucide:menu'},
      {title: 'Divider', path: '/playground/divider', icon: 'lucide:minus'},
      {title: 'Page', path: '/playground/page', icon: 'lucide:file-text'},
      {title: 'Toasts', path: '/playground/toasts', icon: 'lucide:bell'},
    ],
  },
  {
    title: 'Prose',
    path: '/components',
    children: [
      {title: 'Code', path: '/components/code', icon: 'lucide:code'},
      {title: 'Callout', path: '/components/callout', icon: 'lucide:info'},
      {title: 'Typography', path: '/components/typography', icon: 'lucide:text'},
      {title: 'List', path: '/components/list', icon: 'lucide:list'},
      {title: 'Icon', path: '/components/icon', icon: 'lucide:star'},
      {title: 'Image', path: '/components/img', icon: 'lucide:image'},
      {title: 'Hr', path: '/components/hr', icon: 'lucide:minus'},
    ],
  },
  {
    title: 'Content',
    path: '/content',
    children: [
      {title: 'Navigation Tree', path: '/playground/navigation-tree', icon: 'lucide:menu'},
    ],
  },
];

const Layout: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Playground - Next.js</title>
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <body className="bg-gray-100 text-gray-800">
    <MSidebar
      links={links}
      version="1.0.0"
    />
    <div className="flex h-screen">
      <main className="flex-1 p-4 overflow-auto">
        {children}
      </main>
    </div>
    </body>
    </html>
  );
};

export default Layout;
