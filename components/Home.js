import React from 'react'
import Posts from './Posts'

function Home() {
  const repoReadmeLink = 'https://github.com/rafrex/spa-github-pages#readme';
  return (
    <div>
      <Posts />
      <p>
        Бул долбоор GitHub Pages'те орнотулган жана <a href={repoReadmeLink}>бул </a>
        калыптын негизинде кураштырылган.
      </p>
    </div>
  );
}

export default Home;
