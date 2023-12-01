import { Post } from '../../../Domain/Post/Post';
import { getAllPosts } from './UseCases/getAllPosts';
import { getOnePost } from './UseCases/getOnePost';

export class BlogPostController {
    private getAllPostsGenericProp = getAllPosts;
    private getOnePostGenericProp = getOnePost;

    constructor(getAllPostsGenericProp?: () => Post[], getOnePostGenericProp?: (postName: string) => Post) {
        if (getAllPostsGenericProp) {
            this.getAllPostsGenericProp = getAllPostsGenericProp;
        }

        if (getOnePostGenericProp) {
            this.getOnePostGenericProp = getOnePostGenericProp;
        }
    }

    public getOne(postName: string): Post {
        return this.getOnePostGenericProp(postName);
    }

    public getAll(): Post[] {
        return this.getAllPostsGenericProp();
    }
}