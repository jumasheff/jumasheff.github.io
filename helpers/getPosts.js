import urlSlug from './urlSlug';

function getPosts() {
    const req = require.context("../posts", true, /^\.\/.*\.md$/);
    const dirtyFileNames = req.keys();

    return dirtyFileNames.map(f => {
        const spl = f.split('/');
        const filename = spl.slice(-1).pop();
        const category = spl.slice(1)[0];
        const title = filename.split('.md')[0];
        const slugifiedCategory = urlSlug(category);
        const slugifiedUrl = urlSlug(title);
        return { filename, category, title, slugifiedCategory, slugifiedUrl }
    })
}

export default getPosts;
