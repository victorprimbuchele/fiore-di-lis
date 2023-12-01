import React from "react";

export const BlogNavbar: React.FC = () => {
    return (
        <section id="blog-navbar" className="bg-white font-bold font-serif text-grey-dark md:flex md:flex-row md:justify-between md:items-center md:px-16 md:pt-9 md:drop-shadow-md xl:px-20">
            <h2 className="drop-shadow-md md:text-4xl xl:text-5xl pb-3">FIORE DI LIS</h2>
            <div id="blog-navbar-buttons" className="md:flex md:flex-row md:gap-x-12 md:text-lg xl:text-xl">
                <a href="/blog" className="border-b-2 border-b-grey-dark h-full pb-5">BLOG</a>
                <a href="/">HOME</a>
            </div>
        </section>
    )
}