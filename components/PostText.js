import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Markdown from 'react-mark'

const PostText = ({ postDate, formattedDate, slugifiedCategory, category, text }) => {
  return (
    <div className="post-container">
      <div className="post-date-and-category">
        <time dateTime={postDate}>{formattedDate}</time> /
        <Link to={`/categories/${slugifiedCategory}/`}> {category}</Link>
      </div>
      <Markdown text={text} />
    </div>
  )
}

PostText.propTypes = {
  postDate: PropTypes.string,
  formattedDate: PropTypes.string,
  slugifiedCategory: PropTypes.string,
  category: PropTypes.string,
  text: PropTypes.string
}

export default PostText
