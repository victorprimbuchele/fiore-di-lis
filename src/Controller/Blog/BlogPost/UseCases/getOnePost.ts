import post from "../../../../Data/Blog/Post.json";
import { Post } from "../../../../Domain/Post/Post";

export const getOnePost = (postName: string): Post => {
    const POST = post;

    return filterPostsBy(postName, POST);
}

export const filterPostsBy = (postName: string, posts: Post[]): Post => {
    return posts.filter((post) => post.slug === postName)[0];
}