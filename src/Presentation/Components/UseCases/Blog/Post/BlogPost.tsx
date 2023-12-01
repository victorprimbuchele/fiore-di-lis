import React from "react";
import { Post } from "../../../../../Domain/Post/Post";

type BlogPostProps = {
    post: Post
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }: BlogPostProps) => {
    return (
        <section id="blog-post" className="pt-12 md:pt-20 xl:pt-32">
            <div id="blog-post-title" className="text-center pb-3 px-12 sm:px-20 md:px-40 md:pb-10 lg:pb-14 lg:px-48 xl:px-72">
                <h1 className="font-lora text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" dangerouslySetInnerHTML={{ __html: post.title }} />
            </div>
            <div id="main-post-image-container" className="w-full">
                <img src={post.main_post_image.src} alt={post.main_post_image.alt} className="object-none mx-auto pb-8 md:pb-24 xl:pb-28" />
            </div>
            <div id="blog-post-content-container" className="w-full sm:w-4/6 lg:w-3/5 xl:w-2/4 md:mx-auto pb-80">
                <div className="w-full" id="blog-post-top-border">
                    <div className="border-t sm:border-t-2 border-black mx-8 sm:mx-0"/>
                </div>
                <div id="blog-post-author-and-media-container" className="flex flex-row justify-between items-center mt-8 md:mt-6">
                    <div id="blog-post-author-and-reading" className="flex flex-row gap-x-1 mx-auto md:mx-0 md:gap-x-4">
                        <div id="blog-post-author-avatar" className="rounded-full overflow-hidden md:w-14 md:h-14">
                            <img src={post.author.avatar.src} alt={post.author.avatar.alt} className="object-fit" />
                        </div>
                        <div id="blog-post-author-and-reading-info" className="font-sans flex flex-col content-center justify-center gap-y-1 ps-1 md:ps-0 md:mt-1">
                            <p className="tracking-wide font-semibold text-sm md:text-base">{post.author.name}</p>
                            <p className="text-xs md:text-sm">{post.date} - {post.read_time} de leitura</p>
                        </div>
                    </div>
                    <div id="blog-post-social-media-share" className="hidden drop-shadow-md bg-white w-fit h-fit sm:flex sm:flex-row ">
                        <div className="border-r px-2 py-2 md:px-6 md:py-3.5">
                            <span className="fa-stack">
                                <i className="fa-solid fa-circle fa-stack-2x"></i>
                                <i className="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className="border-r px-2 py-2 md:px-6 md:py-3.5">
                            <span className="fa-stack">
                                <i className="fa-solid fa-circle fa-stack-2x"></i>
                                <i className="fa-brands fa-facebook fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className=" px-2 py-2 md:px-6 md:py-3.5">
                            <span className="fa-stack">
                                <i className="fa-solid fa-circle fa-stack-2x"></i>
                                <i className="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div id="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} className="flex flex-col gap-y-4 font-serif text-sm pt-6 pb-12 md:pb-20 md:text-base leading-5 px-8 md:px-0 text-justify md:pt-10 md:pb-24 md:leading-7 xl:leading-9 xl:text-xl xl:pt-14 xl:text-lg xl:pb-30" />
                <div id="blog-post-share-media-container" className="flex flex-row drop-shadow-lg bg-white w-fit sm:w-full h-fit mx-auto">
                    <div className="flex flex-row justify-between items-center border-r px-3 py-3.5 w-1/3 md:px-5 lg:px-8 xl:justify-center">
                        <span className="fa-stack">
                            <i className="fa-solid fa-circle fa-stack-2x"></i>
                            <i className="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
                        </span>
                        <span className="font-medium text-base hidden sm:block">Compartilhar</span>
                    </div>
                    <div className="flex flex-row justify-between items-center border-r px-3 py-3.5 w-1/3 md:px-5 lg:px-8 xl:justify-center">
                        <span className="fa-stack">
                            <i className="fa-solid fa-circle fa-stack-2x"></i>
                            <i className="fa-brands fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                        <span className="font-medium text-base hidden sm:block">Compartilhar</span>

                    </div>
                    <div className="flex flex-row justify-between items-center px-3 py-3.5 w-1/3 md:px-5 lg:px-8 xl:justify-center">
                        <span className="fa-stack">
                            <i className="fa-solid fa-circle fa-stack-2x"></i>
                            <i className="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
                        </span>
                        <span className="font-medium text-base  hidden sm:block">Compartilhar</span>
                    </div>
                </div>
                <p className="font-bold ms-8 md:ms-0 my-8 text-sm md:text-base">Tags: {post.tags}</p>
                <div className="w-full">
                    <div id="dotted-border" className="border-t border-black border-dashed" />
                </div>
                <div id="blog-post-author-info" className="mt-8 mx-8 md:mx-0">
                    <div id="blog-post-author-and-reading" className="flex flex-row items-center">
                        <div id="blog-post-author-avatar" className="rounded-full overflow-hidden md:w-14 md:h-14">
                            <img src={post.author.avatar.src} alt={post.author.avatar.alt} className="object-fit" />
                        </div>
                        <div id="blog-post-author-and-reading-info" className="font-sans font-normal ps-3 sm:ps-4 w-full flex flex-col md:gap-y-1 md:mt-1 md:ps-6 xl:ps-8">
                            <p dangerouslySetInnerHTML={{ __html: post.author.about }} className="tracking-wide text-sm md:text-base" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}