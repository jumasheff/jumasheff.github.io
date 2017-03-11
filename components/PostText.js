import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Markdown from 'react-mark'

const PostText = ({ short, postDate, formattedDate, slugifiedCategory, category, text, url }) => {
  const link = <Link to={`/posts/${slugifiedCategory}/${url}`}>уландысын бул жерден окусаңыз болот</Link>
  const textToRender = short ? text.substring(0, 300) + ' ...' : text
  const containerClassName = short ? "post-container-short" : "post-container"
  return (
    <div className={containerClassName}>
      <div className="post-date-and-category">
        <time dateTime={postDate}>{formattedDate}</time> /
        <Link to={`/categories/${slugifiedCategory}/`}> {category}</Link>
      </div>
      <Markdown text={textToRender} />{short && link}
    </div>
  )
}

PostText.propTypes = {
  postDate: PropTypes.string,
  formattedDate: PropTypes.string,
  slugifiedCategory: PropTypes.string,
  category: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string
}

export default PostText
