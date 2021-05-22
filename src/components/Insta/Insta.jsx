import React, { useEffect } from "react";
import bemCssModules from "bem-css-modules";

import { default as InstaStyles } from "./Insta.module.scss";

const style = bemCssModules(InstaStyles);

function Insta() {

    useEffect(() => {
        const userFeed = new Instafeed({
             get: 'user',
             target: "instafeed-container",
         resolution: 'low_resolution',
             accessToken: 'IGQVJVRC1KZAXJNSm1fY1JlRnVIX1lGR3EwWU5ab1F4TThYWS1jMjhXcEZAMM3FqM0JZAZAXlEV3ExSTR1cktlMWJEbloyZAml1RUx3OWZAEb3FlM2ZASUzRZAdXVSRklnWXZAmVHpSRGNRVE9LQ1ktaUp1UjkwcQZDZD',
         limit: 9
         });
         userFeed.run();  
       }, [])

  return (
    
    <section className={style()}>
      <div className={style('wrapper')}>
        <a href="https://www.instagram.com/kc_weddingplanner/">
        <button>Dołącz do mnie na instagramie</button>
      </a>
      </div>
      
      
     <div  className={style('container')}>
       <div id="instafeed-container"></div>
     </div>
     
    </section>
  );
}

export default Insta;