import React from "react";

export const BlogNavbar: React.FC = () => {
    return (
        <section id="blog-navbar" className="drop-shadow-md bg-white font-bold font-serif text-grey-dark flex flex-row justify-between items-center px-6 pt-4 md:px-16 md:pt-9 xl:px-20">
            <h2 className="drop-shadow-md text-xl md:text-4xl xl:text-5xl pb-3">FIORE DI LIS</h2>
            <div id="blog-navbar-buttons" className="flex flex-row gap-x-3 text-sm md:gap-x-12 md:text-lg xl:text-xl">
                <a href="/blog" className="border-b-2 border-b-grey-dark h-full pb-3 md:pb-5">BLOG</a>
                <a href="/">HOME</a>
            </div>
        </section>
    )
}