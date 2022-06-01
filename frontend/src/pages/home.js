import React from "react";
/*import {
  Route,
  Redirect,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";*/

const Home = () => {
  return (
    <section class="homepage text">
        <div class="intro-text">
          <h1>
            <span class="hear"> Welcome to the SPEED Homepage </span> <br />
          </h1>
          <p>
              SPEED is a website for browsing software engineering practise methods<br />
              <br />
              Below is a video explaining SE Practise Methods:<br />
          </p>
        </div>
        <div class="i-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed?v=dlWYclx49to&t=2084s&ab_channel=Inflectra"
            title="YouTube video player"
            frameborder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        <div class="stand-1"></div>
        <div class="stand-2"></div>
        <a class="btn red" href="#">Learn More</a>
      </div>
    </section>
    
  );
};

export default Home;
