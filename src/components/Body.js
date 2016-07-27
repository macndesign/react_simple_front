import React from 'react';

const Body = (props) => {
  let createMarkup = () => { return {__html: props.siteBody}};
  return (
    <p className="App-intro" dangerouslySetInnerHTML={createMarkup()} />
  )
};

export default Body;
