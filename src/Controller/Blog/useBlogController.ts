import { useEffect, useState } from "react"
import { Post } from "../../Domain/Post/Post"
import { BlogPostController } from "./BlogPost/BlogPostController"

export const useBlogController = (postName: string) => {
    const blogPostController =  new BlogPostController();
    const [posts, setPosts] = useState<Post[]>([]);
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        if (postName == null) {
            setPosts(blogPostController.getAll());
        } else {
            setPost(blogPostController.getOne(postName));
        }
    }, []);

    return {
        posts,
        post
    }

}