import { useNavigate } from 'react-router-dom';
import menuSectionFirstImage from '../../../../../../assets/Home/Section/Menu/baking-delicious-pizza-with-wood-fired-oven.png';
import menuSectionSecondImage from '../../../../../../assets/Home/Section/Menu/ingredients-utensils-near-pizza-dough.png';

export const HomeMenuSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id='menu' className='text-white px-12 lg:px-24 text-center' key="menu">
            <div className='flex flex-col items-center mb-6'>
                <h2 className='pt-20 lg:pt-24 2xl:pt-40 border-b-8 border-b-green-italy font-serif text-4xl md:text-5xl 2xl:text-6xl w-fit'>NOSSO MENU</h2>
            </div>
            <div className='flex flex-col text-white justify-between'>
                <p className="md:text-xl 2xl:text-2xl lg:pb-16 lg:leading-10 text-center">
                    Explore a magia da culinária italiana em cada prato. Uma jornada de sabores, ingredientes selecionados e preparados com paixão. Sinta o amor pela comida em cada mordida, porque aqui, cada prato é uma história de coragem e dedicação.
                </p>
                <div className="flex flex-col lg:flex-row pt-4 sm:pt-0 gap-y-4 lg:gap-y-0 lg:gap-x-6 justify-center">
                    <img className='lg:w-1/3' src={menuSectionFirstImage} alt='Pizza sendo colocada no forno'/>
                    <img className="hidden sm:block lg:w-1/3" src={menuSectionSecondImage} alt='Massa e alguns ingredientes como: tomates frescos, molho de tomate, cogumelos' />
                </div>
            </div>
            <button onClick={() => navigate('/menu')} className="border border-gold text-gold bg-transparent lg:text-2xl hover:bg-gold hover:text-white mt-14 py-2 px-6">MENU</button>
        </section>
    )
}