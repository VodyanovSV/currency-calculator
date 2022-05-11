export const roundNumber = (value) => {
    if (!isNaN(parseFloat(value))) {
        let arr = value.split('.', 2)
        if (arr[1] && arr[1].length > 2) {
            arr[1] = arr[1].slice(0, 2)
        }
        return arr.join('.')
    }
    return ''
}