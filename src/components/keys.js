import React, { Component } from 'react';

function keys(props){
  return <div className="button" onClick={()=> props.onpress(props.numbervalue)}>{props.numbervalue}</div>;
}

export default keys;