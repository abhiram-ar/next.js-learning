"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Link", href: "/login" },
    { name: "Forgot password", href: "/forgot-password" },
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <>
            <div>
                {navLinks.map((link) => {
                    const isActive =
                        pathname === link.href ||
                        (pathname.startsWith(link.href) && link.href !== "/");
                    return (
                        <Link
                            className={
                                isActive
                                    ? "font-bold mr-4"
                                    : "text-blue-500 mr-4"
                            }
                            key={link.href}
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    );
                })}
                <p>path:{pathname}</p>
                {children}
            </div>
        </>
    );
}
