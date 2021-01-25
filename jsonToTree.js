const jerarquia = [];
function jsonTreeToHTMLList(data = [], spaces) {
    let htmlResult = ''
    const { tag } = data
    htmlResult += `<${tag}> \n`
    if (tag === 'li') {
        htmlResult += ''.padStart(spaces)
        htmlResult += `${data.text} \n`;
    }
    jerarquia.push(spaces)
    if (data.children) {
        data.children.forEach(el => {
            htmlResult += ''.padStart(spaces)
            htmlResult += jsonTreeToHTMLList(el, spaces + 1)
        })
    }
    let finalSpace = jerarquia.length == 1 ? 0 : jerarquia.pop() - 1
    htmlResult += ''.padStart(finalSpace)
    htmlResult += `</${tag}> \n`
    return htmlResult
}
