export const HomeAboutUsSection: React.FC = () => {
    return (
        <section id='sobre-nos' className='text-white px-12 md:px-24 2xl:px-36 min-[2000px]:px-48' key="about-us">
            <div className='flex flex-col items:center sm:items-left mb-6'>
                <h2 className='pt-20 md:pt-24 2xl:pt-40 border-b-8 border-b-white-italy font-serif text-4xl md:text-5xl 2xl:text-6xl w-fit'>SOBRE NÓS</h2>
            </div>
            <div className='flex flex-col md:flex-row text-white justify-between'>
                <p className="md:text-xl 2xl:text-2xl md:pe-36 2xl:pe-96 md:leading-8 2xl:leading-10">
                    Na Flor de Lis, nossa história é uma mistura de paixão, coragem e sabor autêntico. Desde o sonho acalentado por um pai de família, que esperou décadas para dar vida ao seu restaurante italiano, até a fusão da culinária com o espírito escoteiro. Cada prato que servimos é uma celebração de perseverança, dedicação e, é claro, deliciosos sabores italianos. Bem-vindo à nossa cozinha, onde a tradição encontra a inovação e cada refeição é uma narrativa de amor pela culinária.
                </p>
                <img className="pt-4 lg:pt-0" src="https://fiore-di-lis-2.s3.us-east-2.amazonaws.com/assets/Home/Section/AboutUs/Imagem+de+restaurante+com+flor+de+lis.png" alt='Fim de tarde com iluminação incandescente. Mesas do lado de fora de um restaurante de pedra.' />
            </div>

        </section>
    )
}