import { Author } from "../Author/Author"
import { Comment } from "../Comment/Comment"
import { ImageInterface } from "../Image/Image"

export interface Post {
    id: number,
    author: Author,
    comments: Comment[]
    content: string,
    date: string,
    image: ImageInterface,
    main_post_image: ImageInterface,
    read_time: string,
    rating: string,
    slug: string,
    tags: string,
    title: string,
}