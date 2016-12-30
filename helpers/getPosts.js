
function getPosts() {
    const req = require.context("../posts", true, /^\.\/.*\.md$/);
    const dirtyFileNames = req.keys();

    return dirtyFileNames.map(f => {
        const spl = f.split('/');
        const filename = spl.slice(-1).pop();
        const category = spl.slice(1)[0];
        const title = filename.split('.md')[0];
        return { filename, category, title }
    })
}

export default getPosts;
