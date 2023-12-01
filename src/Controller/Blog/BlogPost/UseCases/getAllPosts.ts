import post from "../../../../Data/Blog/Post.json";
import { Post } from "../../../../Domain/Post/Post";

export const getAllPosts = (): Post[] => {
    const POST = post;

    return POST;
}

