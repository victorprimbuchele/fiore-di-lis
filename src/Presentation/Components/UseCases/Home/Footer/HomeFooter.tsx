export const HomeFooter: React.FC = () => {
    return (
        <div className="border-t border-t-gold bg-home-bg-bottom bg-no-repeat bg-cover bg-center h-full pb-24" key="footer" id="footer-container">
            <div className="flex flex-col items-center justify-center h-full gap-y-6 lg:gap-y-10">
                <h2 className="mt-36 sm:mt-40 md:mt-44 lg:mt-52 border-b-4 border-b-gold text-white font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl w-fit">
                    FIORE DI LIS
                </h2>
                <div id="social-media-container">
                    <span className="fa-stack fa-2x">
                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                        <i className="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-2x">
                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                        <i className="fa-brands fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-2x">
                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                        <i className="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}