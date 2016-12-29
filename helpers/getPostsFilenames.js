
function getPostsFileNames() {
    const req = require.context("../posts", true, /^\.\/.*\.md$/);
    const dirtyFileNames = req.keys();
    return dirtyFileNames.map(f => f.split('/').pop())
}

export default getPostsFileNames;
