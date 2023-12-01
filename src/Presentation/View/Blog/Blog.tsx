import React from "react";
import { BlogNavbar } from "../../Components/UseCases/Blog/Navbar/BlogNavbar";
import { useParams } from "react-router-dom";
import { useBlogController } from "../../../Controller/Blog/useBlogController";
import { BlogPost } from "../../Components/UseCases/Blog/Post/BlogPost";

export const Blog: React.FC = () => {
    const { postName } = useParams();
    const { post, posts } = useBlogController(postName || '');

    return (
        <div className="h-full">
            <BlogNavbar />
            {post && (
                <BlogPost post={post} />
            )}

        </div>
    )
}

{/* <section id="blog-post" className="md:pt-20 xl:pt-32">
<div id="blog-post-title" className="text-center md:px-40 md:pb-10 lg:pb-14 lg:px-48 xl:px-72">
    <h1 className="font-lora text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <strong>
            Muito Além da Margherita:{' '}
        </strong>
        uma viagem ao século 19
    </h1>
</div>
<div className="w-full">
    <img src={Margherita} alt="Imagem de uma pizza Margherita vista de cima" className="object-none mx-auto md:pb-24 xl:pb-28" />
</div>
<div id="blog-post-content-container" className="w-full sm:w-4/6 lg:w-3/5 xl:w-2/4 md:mx-auto pb-80">
    <div className="w-full" id="blog-post-top-border">
        <div className="border-t-2 border-black" />
    </div>
    <div id="blog-post-author-and-media-container" className="flex flex-row justify-between items-center md:mt-6">
        <div id="blog-post-author-and-reading" className="flex flex-row md:gap-x-4">
            <div id="blog-post-author-avatar" className="rounded-full overflow-hidden md:w-14 md:h-14">
                <img src={avatar} alt="Foto do autor do post: Victor Prim Büchele" className="object-fit" />
            </div>
            <div id="blog-post-author-and-reading-info" className="font-sans flex flex-col md:gap-y-1 md:mt-1">
                <p className="tracking-wide font-semibold md:text-base">VICTOR PRIM BÜCHELE</p>
                <p className="md:text-sm">23 de novembro, 2023 - 4 min de leitura</p>
            </div>
        </div>
        <div id="blog-post-social-media-share" className="flex flex-row drop-shadow-md bg-white w-fit h-fit">
            <div className="border-r px-6 py-3.5">
                <span className="fa-stack">
                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                    <i className="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div className="border-r px-6 py-3.5">
                <span className="fa-stack">
                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                    <i className="fa-brands fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div className="px-6 py-3.5">
                <span className="fa-stack">
                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                    <i className="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
                </span>
            </div>
        </div>
    </div>
    <div id="blog-post-content" className="font-serif text-sm pt-6 pb-20 md:text-base md:pt-10 md:pb-24 xl:text-xl xl:pt-14 xl:text-lg xl:pb-30">
        <p className="leading-5 md:leading-7 xl:leading-9">Ao saborear nossa pizza "Muito Além da Margherita" na Fiore di Lis, convidamos você a viajar no tempo até o fascinante ano de 1880, na ensolarada Itália. Este não é apenas um prato, mas uma homenagem à rica história da Margherita e sua influência duradoura na culinária italiana.</p>
        <h3 className="pt-8 pb-3 text-xl font-bold md:pt-10 md:pb-4 md:text-2xl xl:pt-12 xl:pb-5 xl:text-3xl">Uma Janela para o Passado</h3>
        <p className="leading-5 md:leading-7 xl:leading-9 pb-8 md:pb-10 xl:pb-14">Neste portal temporal, voltamos a 1880, ao coração de Nápoles, onde Raffaele Esposito, um renomado pizzaiolo da época, delineava os contornos de uma receita que transcenderia séculos. A criação da pizza Margherita, em homenagem à rainha Margherita di Savoia, foi mais do que um momento gastronômico; foi um marco na história da culinária italiana.</p>
        <h5 className="pb-2 font-semibold text-base md:text-lg xl:text-xl">Os três ingredientes</h5>
        <p className="leading-5 md:leading-7 xl:leading-9 pb-8 md:pb-10 xl:pb-14">A escolha meticulosa dos ingredientes reflete uma narrativa cultural intrincada. Os tomates frescos, a mozzarella de búfala e o manjericão foram selecionados não apenas por sua simplicidade, mas também por representarem as cores da bandeira italiana. Esta seção é uma abertura para os bastidores dessa escolha, revelando a inspiração e o simbolismo que deram vida à Margherita.</p>
        <figure className="pb-8 md:pb-10 xl:pb-12">
            <img src={ingredients} alt="Os três ingredientes da famosa Margherita: tomates frescos, 
                mozzarella de búfala e manjerição" className="mx-auto" />
            <figcaption className="leading-4 font-sans font-semibold leading-4 text-xs px-32 pt-4 text-center md:px-56 md:pt-5 md:text-sm md:leading-6 xl:px-12 2xl:px-24 xl:pt-6 xl:leading-8  xl:text-base">Os três ingredientes da famosa Margherita: tomates frescos,
                mozzarella de búfala e manjerição</figcaption>
        </figure>
        <p className="leading-5 md:leading-7 xl:leading-9 pb-8 md:pb-10 xl:pb-14">Ao explorar essa janela para o passado, convidamos você a entender as raízes profundas da Margherita, que vai além da mera combinação de ingredientes. A simplicidade da receita é uma expressão da dedicação de Esposito à sua arte e à tradição culinária. Mergulhe na atmosfera de uma época em que a pizza não era apenas uma refeição, mas uma declaração artística que ecoa até os dias de hoje.</p>
        <p className="leading-5 md:leading-7 xl:leading-9">Ao explorar "Muito Além da Margherita" em nosso cardápio, convidamos você a mergulhar na reinvenção constante da culinária italiana. Descubra como honramos a simplicidade da Margherita enquanto elevamos a experiência gastronômica a novas alturas de sabor e emoção. Na Fiore di Lis, preservamos o passado enquanto inovamos para o futuro.</p>
    </div>
    <div id="blog-post-share-media-container" className="flex flex-row drop-shadow-lg bg-white w-full h-fit mx-auto">
        <div className="flex flex-row justify-between items-center border-r px-3  py-3.5 w-1/3 md:px-5 lg:px-8 xl:justify-center">
            <span className="fa-stack">
                <i className="fa-solid fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
            </span>
            <span className="font-medium text-base">Compartilhar</span>
        </div>
        <div className="flex flex-row justify-between items-center border-r px-3  py-3.5 w-1/3 md:px-5 lg:px-8 xl:justify-center">
            <span className="fa-stack">
                <i className="fa-solid fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-facebook fa-stack-1x fa-inverse"></i>
            </span>
            <span className="font-medium text-base">Compartilhar</span>

        </div>
        <div className="flex flex-row justify-between items-center px-3  py-3.5 w-1/3 md:px-5 lg:px-8 xl:justify-center">
            <span className="fa-stack">
                <i className="fa-solid fa-circle fa-stack-2x"></i>
                <i className="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
            </span>
            <span className="font-medium text-base">Compartilhar</span>
        </div>
    </div>
    <p className="font-bold my-8">Tags: pizza, massa, Itália, sabores, gastronomia</p>
    <div className="w-full">
        <div id="dotted-border" className="border-t border-black border-dashed" />
    </div>
    <div id="blog-post-author-info" className="mt-8">
        <div id="blog-post-author-and-reading" className="flex flex-row items-center">
            <div id="blog-post-author-avatar" className="rounded-full overflow-hidden md:w-14 md:h-14">
                <img src={avatar} alt="Foto do autor do post: Victor Prim Büchele" className="object-fit" />
            </div>
            <div id="blog-post-author-and-reading-info" className="font-sans font-normal ps-4 md:ps-6 xl:ps-8 w-full flex flex-col md:gap-y-1 md:mt-1">
                <p className="tracking-wide md:text-base">
                    <strong>
                        VICTOR PRIM BÜCHELE{' '}
                    </strong>
                    é um web designer, desenvolvedor e arquiteto de software, especializado em facilitar a vida das pessoas desenvolvendo um novo amanhã
                </p>
            </div>
        </div>
    </div>
</div>
</section> */}
