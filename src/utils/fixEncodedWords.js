import React from 'react';

// código para decode do HTML text que a api retorna.
//  https://stackoverflow.com/questions/42361689/implement-html-entity-decode-in-react-js
const fixEncodedWords = (escapedHTML, element = 'div') => React.createElement(element, {
  dangerouslySetInnerHTML: { __html: escapedHTML },
});

export default fixEncodedWords;
