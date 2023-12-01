import React from "react";
import { BlogNavbar } from "../../Components/UseCases/Blog/Navbar/BlogNavbar";
import { useParams } from "react-router-dom";
import { useBlogController } from "../../../Controller/Blog/useBlogController";
import { BlogPost } from "../../Components/UseCases/Blog/Post/BlogPost";

export const Blog: React.FC = () => {
    const { postName } = useParams();
    const { post } = useBlogController(postName || '');

    return (
        <div className="h-full">
            <BlogNavbar />
            {post && (
                <BlogPost post={post} />
            )}

        </div>
    )
}
