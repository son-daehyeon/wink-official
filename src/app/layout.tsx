'use client';

import React from "react";

import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode  }) {
  return (
    <html lang="ko">
      <head>
        <title>WINK: Web IN Kookmin</title>

        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="국민대학교 소프트웨어융합대학 웹 학술 동아리 윙크 😉"/>
        <meta property="og:image" content="/ogImage.png"></meta>
        <meta name="og:description" content="국민대학교 소프트웨어융합대학 웹 학술 동아리 윙크 😉"/>

        <link rel="icon" href="/favicon.ico"/>

        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" type="text/css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" type="text/css" rel="stylesheet"/>
      </head>

      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
