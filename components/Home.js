import React from 'react';
import { Link } from 'react-router';

function Home() {
  const repoReadmeLink = 'https://github.com/rafrex/spa-github-pages#readme';
  return (
    <div>
      <p>
        Сайтта курулуш иштери жүргүзүлүүдө.
      </p>
      <p>
        Бул долбоор GitHub Pages'те орнотулган жана <a href={repoReadmeLink}>бул </a>
        калыптын негизинде кураштырылган.
      </p>
      <p>Төмөнкүлөр бул жерде жөн эле турат :)</p>
      <div><Link to="/posts/zhalpy/test">Sample post</Link></div>
      <div><Link to="/categories/kategoriyasyz">Sample category</Link></div>
      <div><Link to="/example">Example page</Link></div>
      <div><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
        Example two deep with query and hash
      </Link></div>
    </div>
  );
}

export default Home;
