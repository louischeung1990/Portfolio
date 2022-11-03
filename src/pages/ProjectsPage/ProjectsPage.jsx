import React from "react";
import minesweeper from '../../images/minesweeper.png';
import pokemon from '../../images/pokemon.png';
import hermes from '../../images/hermes.png';
import eventhandlers from '../../images/eventhandlers.webp';
import "./ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <div className="background-projects">
      <br></br>
      <h1>Projects</h1>
      <br></br>
      <div className="projects-cnt">
        <div className='project'>
          <h3>Minesweeper</h3>
          <img src={minesweeper} alt='Minesweeper'/>
          <p>Classic game of Minesweeper with visuals and audio from Blizzard's Overwatch.</p>
          <p>Technologies: JavaScript, HTML, CSS</p>
          <span>
            <a href='https://github.com/louischeung1990/Minesweeper' target='_blank'><button >Github</button></a>
            <a href='https://louischeung1990.github.io/Minesweeper/' target='_blank'><button >Open App</button></a>
          </span>
        </div>
        <div className='project'>
          <h3>Pokémon Collection</h3>
          <img src={pokemon} alt='Pokemon Collection'/>
          <p>Search for Pokemon from the Pokemon API (PokéAPI) and add them to your collection!</p>
          <p>Technologies: MongoDB, Express, Node, PokéAPI, OAuth </p>
          <span>
            <a href='https://github.com/louischeung1990/Pokemon-Collector' target='_blank'><button >Github</button></a>
            <a href='https://my-pokemon-collection.herokuapp.com/' target='_blank'><button >Open App</button></a>
          </span>
        </div>
        <div className='project'>
          <h3>Hermes Messenger App</h3>
          <img src={hermes} alt='Hermes Messenger'/>
          <p>An instant messaging app. Go ahead and create or join a chatroom and post messages! A group project.</p>
          <p>Technologies: Python/Django, PostgreSQL, Django Channels/Redis, AWS S3</p>
          <span>
            <a href='https://github.com/louischeung1990/Hermes-Messenger-App' target='_blank'><button >Github</button></a>
            <a href='https://hermes-messenger01.herokuapp.com/' target='_blank'><button >Open App</button></a>
          </span>
        </div>
        <div className='project'>
          <h3>Event Handlers - Event Planning App</h3>
          <img src={eventhandlers} alt='EventHandlers'/>
          <p>An e-commerce web application for your event planning needs. A group project.</p>
          <p>Technologies: MERN (MongoDB, Express, React, Node.js), Redux, socket.io, Leaflet map API</p>
          <span>
            <a href='https://github.com/louischeung1990/eventhandlers' target='_blank'><button >Github</button></a>
            <a href='https://eventhandlers8.herokuapp.com/' target='_blank'><button >Open App</button></a>
          </span>
        </div>
      </div>
    </div>
  );
}
