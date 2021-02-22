import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href ={props.link1}>{props.link1}</a>
      <a href ={props.link2}>{props.link2}</a>
    </div>
  );
}

export default About;
