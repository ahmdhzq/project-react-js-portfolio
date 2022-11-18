import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGE IN PRODUCTION

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Portfolio with Tailwind CSS',
        github: 'https://github.com/ahmdhzq/portfolio-HTML-CSS',
        demo: 'https://ahmdhzq.github.io/portfolio-HTML-CSS/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Website SILOKER',
        github: 'https://github.com/ahmdhzq/website-siloker',
        demo: 'https://website-siloker.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Todo-App',
        github: 'https://github.com/ahmdhzq/Todo-App-UTS-JS',
        demo: 'https://todo-app-uts-js.vercel.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Konversi Mata Uang',
        github: 'https://github.com/ahmdhzq/JS-Pertemuan-10',
        demo: 'https://konversi-mata-uang-dan-suhu.vercel.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Todo-App 2',
        github: 'https://github.com/ahmdhzq/Todo-App-UTS-JS',
        demo: 'https://todo-app-uts-js.vercel.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Website SILOKER 2',
        github: 'https://github.com/ahmdhzq/website-siloker',
        demo: 'https://website-siloker.vercel.app/'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;
