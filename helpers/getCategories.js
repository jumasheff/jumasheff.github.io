import R from 'ramda'
import getPosts from './getPosts'

function getCategories() {
  const posts = getPosts();
  const val =(o) => R.path(['category'], o);
  return R.uniq(R.map(val, posts));
}

export default getCategories