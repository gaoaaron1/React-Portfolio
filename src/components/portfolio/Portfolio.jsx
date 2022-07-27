import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

// ARRAY OF OBJECTS

const data = [
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
]



const Portfolio = () => {
  return  (
    <section id='portfolio'>
    <h5>My Recent Work</h5>  
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key = {id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>    
            </div>
        </article>
          )
        })
       }
    </div>
    </section>
  )
}


export default Portfolio