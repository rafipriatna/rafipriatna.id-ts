export interface PostInterface {
    id: string
    icon: {
        emoji: string
    }
    ogImage: string
    properties: {
        name: {
            title: [
                {
                    annotations: object
                    plain_text: string
                }
            ]
        }
        date: {
            date: {
                start: string
            }
        }
        description: {
            rich_text: [
                {
                    annotations: object
                    plain_text: string
                }
            ]
        }
        slug: {
            rich_text: [
                {
                    annotations: object
                    plain_text: string
                }
            ]
        }
        status: {
            select: {
                name: string
            }
        }
        tags: {
            multi_select: [
                {
                    name: string
                    color: string
                }
            ]
        }
    }
}

export interface PostsInterface {
    posts: [PostInterface],
    showYear?: boolean
}

export interface HomePostsInterface {
    posts?: [PostInterface],
    writeups?: [PostInterface],
    showYear?: boolean
}

export interface PostDetailInterface {
    detail: PostInterface,
    blocks: any[]
}
