
import { HomeFooter } from '../../Components/UseCases/Home/Footer/HomeFooter';
import { HomeNavbar } from '../../Components/UseCases/Home/Navbar/HomeNavbar';
import { useHomeData } from './useHomeData';

export const Home: React.FC = () => {
    const { SECTION_OPTIONS } = useHomeData();

    return (
        <>
            <HomeNavbar />
            <div className="bg-black">
                {
                    SECTION_OPTIONS.map((sectionOptionObj, i) => 
                    <div key={"section@" + i}>
                        {sectionOptionObj.body.html}
                    </div>
                    )
                }
            </div>
            <HomeFooter />
            <div className='bg-black py-2 sm:py-3 md:py-4 lg:py-5 text-center'>
                <p className='text-sm md:text-lg 2xl:text-2xl text-white px-6 lg:px-0'>
                    TODOS OS DIREITOS RESERVADOS © FIORE DI LIS 2023
                </p>
            </div>
        </>
    )
}
