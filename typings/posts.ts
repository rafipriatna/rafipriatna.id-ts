export interface PostsInterface {
    posts: [
        {
            id: string
            created_time: any
            icon: Object
            properties: {
                name: any
                daate: any
                description: any
                slug: any
                status: any
                tags: any
            }
        }
    ]
}
