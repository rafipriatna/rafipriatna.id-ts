export interface RichTextInterface {
    annotations: {
        bold: boolean
        code: boolean
        color: string
        italic: boolean
        strikethrough: boolean
        underline: boolean
    }
    text: {
        content: string
        link: {
            url: string
        }
    }
    type: string
}

export interface TextInterface {
    rich_text: [RichTextInterface]
    color: string
}

export interface BlockInterface extends TextInterface {
    type: string
    id: string
    [text: string]: TextInterface | any
}
