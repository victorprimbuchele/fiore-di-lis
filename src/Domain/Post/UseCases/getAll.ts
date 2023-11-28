import post from '../../../Data/Home/Blog/Post.json';
import { Post } from '../Post';

export const getAllPosts = (): Post[] => {
    const POST = post;

    return POST;
}