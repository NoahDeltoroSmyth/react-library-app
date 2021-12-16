import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Welcome to Dangalfs Library of Computer Science!</h2>
      <h2>
        Check out the amazing selection of books in our{' '}
        <Link className="detailcatalog" to="/books">
          catalog
        </Link>
        .
      </h2>
    </div>
  );
}
