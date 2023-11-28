import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HomeBlogSectionProps } from './HomeBlogSectionCard.types';

export const HomeBlogSectionCard: React.FC<HomeBlogSectionProps> = ({image, title}) => {
    return (
        <Card className="bg-black text-center rounded-2xl lg:h-80 lg:w-1/4">
            <img src={image} className='object-none rounded-t-2xl'/>
            <div className="w-full h-px bg-gradient-to-r from-gold via-yellow-pastel to-gold"></div>
            <Card.Body className="text-center flex flex-col justify-evenly items-center lg:h-3/6 2xl:h-2/5 lg:px-4">
                <Card.Title dangerouslySetInnerHTML={{__html: title}} className="text-white text-sm 2xl:text-lg "></Card.Title>
                <Button variant="primary" className="text-xs 2xl:text-sm font-serif hover:underline hover:underline-offset-2 text-yellow-pastel">Ler mais...</Button>
            </Card.Body>
        </Card>
    );
}