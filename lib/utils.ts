export function reformatDate(date: Date) {
    const newDate = new Date(date)
    const formattedDate = newDate.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })

    return formattedDate
}
