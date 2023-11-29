import { HomeBlogSectionCard } from "./Card/HomeBlogSectionCard";
import { useHomeController } from "../../../../../../Controller/Home/useHomeController";
import { Spinner } from "react-bootstrap";

export const HomeBlogSection: React.FC = () => {
  const { renderablePosts, handleIndex, index, isLoading } = useHomeController();
  
  return (
    <section id='blog' className='text-white lg:px-12 2xl:px-24 bg-almost-black pb-24 lg:pb-32 2xl:pb-36 border-t border-t-gold' key="blog">
      <div className='flex flex-col items-center mb-6'>
        <h2 className='pt-20 lg:pt-24 2xl:pt-32 font-serif text-4xl lg:text-6xl w-fit'>BLOG</h2>
        <h6 className='pt-4 lg:pt-10 font-serif text-xl lg:text-3xl w-fit'>ÚLTIMOS ARTIGOS</h6>
      </div>
      <div id="blog-carousel-container" className="flex items-center justify-center">
        <span className="fa-stack fa-2x cursor-pointer opacity-75 hover:opacity-100" onClick={() => handleIndex(index - 1)}>
          <i className="hidden lg:inline-block fa-solid fa-circle fa-stack-2x"></i>
          <i className="fa-solid fa-chevron-left fa-stack-1x fa-inverse text-gold"></i>
        </span>
        <div className="flex items-center justify-center w-fit sm:gap-x-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-18 2xl:gap-x-20">
          {
            isLoading ? (<Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>) :
              renderablePosts?.map((post, i) => {
                return (
                  <HomeBlogSectionCard image={post.image} title={post.title} key={post.title + '@' + i} />
                )
              })
          }
        </div>
        <span className="fa-stack fa-2x cursor-pointer opacity-75 hover:opacity-100" onClick={() => handleIndex(index + 1)}>
          <i className="hidden lg:inline-block fa-solid fa-circle fa-stack-2x"></i>
          <i className="fa-solid fa-chevron-right fa-stack-1x fa-inverse text-gold"></i>
        </span>
      </div>

    </section>
  )
}