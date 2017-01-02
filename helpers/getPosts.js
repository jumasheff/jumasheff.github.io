import urlSlug from './urlSlug';

function getPosts() {
    const req = require.context("../posts", true, /^\.\/.*\.md$/);
    const dirtyFileNames = req.keys();

    return dirtyFileNames.map(f => {
        const spl = f.split('/');
        const filename = spl.slice(-1).pop();
        const category = spl.slice(1)[0];
        const title = filename.split('.md')[0];
        const slug = urlSlug(title);
        return { filename, category, title, slug }
    })
}

export default getPosts;
