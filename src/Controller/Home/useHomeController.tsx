import { useEffect, useState } from "react";
import { Post } from "../../Domain/Post/Post";
import { getAllPosts } from "../../Domain/Post/UseCases/getAll";
import { isMobile } from "react-device-detect";

export const useHomeController = () => {
    const [maximumCards, setMaximumCards] = useState(3);
    const [chunkedPosts, setChunckedPosts] = useState<Post[][][]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [index, setIndex] = useState(0);
    const [renderablePosts, setRenderablePosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleIndex = (selectedIndex: number) => {
        if (selectedIndex > chunkedPosts.length) {
            console.log('índice maior que 0')
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
        setPosts(getAllPosts());
    }, []);

    useEffect(() => {
        if (isMobile) {
            setMaximumCards(1);
        } else {
            setMaximumCards(3);
        }
    }, [isMobile]);

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