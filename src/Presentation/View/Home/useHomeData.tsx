import { HomeAboutUsSection } from '../../Components/UseCases/Home/Section/AboutUs/HomeAboutUsSection';
import { HomeBlogSection } from '../../Components/UseCases/Home/Section/Blog/HomeBlogSection';
import { HomeContactSection } from '../../Components/UseCases/Home/Section/Contact/HomeContactSection';
import { HomeMenuSection } from '../../Components/UseCases/Home/Section/Menu/HomeMenuSection';

export const useHomeData = () => {
    const NAVBAR_BUTTONS = [
        {
            label: 'MENU',
            link: 'menu'
        },
        {
            label: 'SOBRE NÓS',
            link: 'sobre-nos'
        },
        {
            label: 'CONTATO',
            link: 'contato'
        },
        {
            label: 'BLOG',
            link: 'blog'
        }
    ]

    const SECTION_OPTIONS = [
        {
            body: {
                position: 'left',
                html: <HomeMenuSection />
            },
        },
        {
            body: {
                position: 'right',
                html: <HomeAboutUsSection />
            }
        },
        {
            body: {
                position: 'left',
                html: <HomeContactSection />
            }
        },
        {
            body: {
                position: 'left',
                html: <HomeBlogSection />
            }
        }
    ]

    return {
        NAVBAR_BUTTONS,
        SECTION_OPTIONS
    }
}