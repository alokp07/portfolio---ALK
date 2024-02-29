import React from 'react';
import youtube from '../Res/you.png'
import restaurent from '../Res/rest.png'
import travel from '../Res/trav.png'

function Contact() {
  return (
    <div className='workRoot' id='work'>
        <div className='workHead'>
            <h1>My Works</h1>
        </div>

        <div className='works'>
            <div className='workItem'>
                <div className='workImage'>
                    <img src={restaurent} alt=""/>
                </div>
                
                <div className='workDes'>
                    <h1>Restaurant App</h1>
                    <p>
                    Explore my restaurant's simple and clean front-end! Crafted with HTML and CSS, the interface is easy to navigate. Browse our menu seamlessly for a straightforward experience
                    </p>

                    <div className='wBtn'>
                        <a href='https://github.com/alokp07/Restaurant-App---REACT'><button>Source Code</button></a>
                        <a href='https://splendorous-yeot-5516ac.netlify.app/'><button>Live Demo</button></a>
                    </div>
                </div>
            </div>
        </div>

        <div className='works'>
            <div className='workItem'>
                <div className='workDes' id='middleItem'>
                    <h1>Travel Website</h1>
                    <p>
                    Discover the world with my travel website! My HTML and CSS-powered front-end provides a visually engaging and easy-to-navigate platform. Explore destinations, find travel information, and plan your next adventure with simplicity and style
                    </p>

                    <div className='wBtn'>
                        <a href='https://github.com/alokp07/Travel-Website'><button>Source Code</button></a>
                        <a href='https://dazzling-cupcake-2d4df0.netlify.app/'><button>Live Demo</button></a>
                    </div>
                </div>
                
                <div className='workImage'>
                    <img src={travel} alt=""/>
                </div>
            </div>
        </div>

        <div className='works'>
            <div className='workItem'>
                <div className='workImage'>
                    <img src={youtube} alt=""/>
                </div>
                <div className='workDes'>
                    <h1>Youtube Clone</h1>
                    <p>
                        YouTube-inspired front-end clone.meticulously
                        replicating the user interface using React
                    </p>

                    <div className='wBtn'>
                        <a href='https://github.com/alokp07/Youtube-Clone'><button>Source Code</button></a>
                        <a href='https://youtube-clone-five-ashen.vercel.app/'><button>Live Demo</button></a>
                    </div>
                </div>
            </div>
        </div>


        <div className='seeall'>
            <a href='https://github.com/alokp07'><button className='seeallBtn'>See All</button></a>
        </div>
       


    </div>
  )
}

export default Contact