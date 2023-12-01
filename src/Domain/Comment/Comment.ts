import { Author } from "../Author/Author"

export interface Comment {
    author: Author,
    date: string,
    content: string,
    likes: number
    replies: number
}