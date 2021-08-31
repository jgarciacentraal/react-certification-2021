import React from 'react';
import { Link } from 'react-router-dom';


const styleHomeLink = {
  fontSize: '1rem',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'right',
  padding: '0.2rem 0.3rem',
}

function NotFoundPage() {
  return (
    <section style={styleHomeLink}>
      <Link to="/">
        home
      </Link>
      <img src="404.gif" alt="page not found" />
    </section>
  );
}

export default NotFoundPage;
