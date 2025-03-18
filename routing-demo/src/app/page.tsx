import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>home</h1>
            <Link href="/about">About</Link>
            <Link href="/product">Products</Link>

            {/* breaking news is the dynamic parater and lang is the qyery parmeter */}
            <Link href="/articles/breaking-news?lang=en">Read in English</Link>
            <Link href="/articles/breaking-news?lang=fr">Read in french</Link>
        </>
    );
}
