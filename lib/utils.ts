export function reformatDate(date: string) {
    const newDate = new Date(date)
    const formattedDate = newDate.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })

    return formattedDate
}
