export interface Post {
    title: string,
    content: string,
    image: string,
    author: string,
    read_time: string,
    rating: string,
    comments: {
        author: string,
        date: string,
        content: string,
        likes: number
        replies: number
    }[]
}