import getCategories from './getCategories'
import urlSlug from './urlSlug'

function getCategoryBySlug(slug) {
  const categories = getCategories()
  let mapping = {}
  for (let i = 0; i < categories.length; i++) {
    const currentCategory = categories[i]
    mapping[urlSlug(currentCategory)] = currentCategory
  }
  return mapping[slug]
}

export default getCategoryBySlug