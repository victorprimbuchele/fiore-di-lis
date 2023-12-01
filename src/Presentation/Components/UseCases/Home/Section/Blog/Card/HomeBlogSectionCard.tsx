import Card from 'react-bootstrap/Card';
import { HomeBlogSectionProps } from './HomeBlogSectionCard.types';
import { Link } from 'react-router-dom';

export const HomeBlogSectionCard: React.FC<HomeBlogSectionProps> = ({image, slug, title}) => {
    return (
        <Card className="bg-black text-center rounded-2xl sm:h-52 md:h-60 lg:h-72 lg:w-1/4 xl:h-80 2xl:96 min-[1800px]:h-[24rem] min-[2000px]:h-[28rem]">
            <img src={image} className='object-none rounded-t-2xl'/>
            <div className="w-full h-px bg-gradient-to-r from-gold via-yellow-pastel to-gold"></div>
            <Card.Body className="text-center flex flex-col justify-evenly items-center lg:h-3/6 2xl:h-2/5 lg:px-4 2xl:">
                <Card.Title dangerouslySetInnerHTML={{__html: title}} className="text-white text-sm 2xl:text-lg "></Card.Title>
                <Link to={slug} className="text-xs 2xl:text-sm font-serif hover:underline hover:underline-offset-2 text-yellow-pastel">Ler mais...</Link>
            </Card.Body>
        </Card>
    );
}