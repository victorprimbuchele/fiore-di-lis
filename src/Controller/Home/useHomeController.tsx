import { useEffect, useState } from "react";
import { Post } from "../../Domain/Post/Post";
import { isMobile, isTablet } from "react-device-detect";
import { BlogPostController } from "../Blog/BlogPost/BlogPostController";

export const useHomeController = () => {
    const blogPostController = new BlogPostController();
    const [maximumCards, setMaximumCards] = useState(3);
    const [chunkedPosts, setChunckedPosts] = useState<Post[][][]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [index, setIndex] = useState(0);
    const [renderablePosts, setRenderablePosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleIndex = (selectedIndex: number) => {
        if (selectedIndex > chunkedPosts.length) {
            setIndex(0);
            return;
        }

        else if (selectedIndex < 0) {
            setIndex(chunkedPosts.length);
            return;
        }

        setIndex(selectedIndex);
    };

    useEffect(() => {
        setPosts(blogPostController.getAll());
    }, []);

    useEffect(() => {
        if (isMobile || isTablet) {
            setMaximumCards(1);
        } else {
            setMaximumCards(3);
        }
    }, [isMobile, isTablet]);

    useEffect(() => {
        handleRenderablePosts()
    }, [posts]);

    useEffect(() => {
        setIsLoading(true);

        if (chunkedPosts[0]) {
            setRenderablePosts(chunkedPosts[0][index]);
        }

        setIsLoading(false);
    }, [chunkedPosts, index]);

    const handleRenderablePosts = () => {
        let chunkPost: Post[] = [];
        let chunkedPosts: any = []

        posts.forEach((post) => {
            chunkPost.push(post);

            if (chunkPost.length === maximumCards) {
                chunkedPosts.push(chunkPost);
                chunkPost = [];
            }
        });

        setChunckedPosts([chunkedPosts]);
    }

    return {
        handleIndex,
        index,
        renderablePosts,
        isLoading
    }
}