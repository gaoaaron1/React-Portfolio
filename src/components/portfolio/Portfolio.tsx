import React from 'react';
import './portfolio.css';
const IMG1 = require('../../assets/portfolio1.png');
const IMG2 = require('../../assets/portfolio2.png');
const IMG3 = require('../../assets/portfolio3.png');
const IMG4 = require('../../assets/portfolio4.png');
const IMG5 = require('../../assets/portfolio5.png');
const IMG6 = require('../../assets/portfolio6.png');

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  github: string;
  demo: string;
}

// ARRAY OF OBJECTS

const data: PortfolioItem[] = [
  {
    id: 1,
    image: IMG1,
    title: 'Captain Kenyu',
    github: 'https://github.com/gaoaaron1/Captain-Kenyu-Old',
    demo: 'https://play.google.com/store/apps/details?id=com.aaron.game&gl=US'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Media Hub',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Hungry Caterpillars',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Colour Ball',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Pokemon50',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Pokemon Card Match Memory Game',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
