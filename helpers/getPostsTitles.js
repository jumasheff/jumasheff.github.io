
function getPostsTitles(fileNamesArray) {
    return fileNamesArray.map(f => f.split('.md')[0])
}

export default getPostsTitles;
