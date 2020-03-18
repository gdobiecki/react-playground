import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = [];
    for (let i = 1; i < 5; i++) {
      pages.push(`item_${i}`)
    }
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
