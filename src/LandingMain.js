import React from 'react'
import illustration from './images/illustration-working.svg'
import recognition from './images/icon-brand-recognition.svg'
import records from './images/icon-detailed-records.svg'
import custom from './images/icon-fully-customizable.svg'
import './styleMain.css'
import LinkInput from './LinkInput'
import LinkHistory from './LinkHistory'

// Content divided into two components
export default function LandingMain() {
  return <div>
    <Welcome />
    <MainContent />
  </div>
}

// Page title and illustration
function Welcome(){
  return <section id='welcome'>
    <div className='details'>
      <h1>More than just shorter links</h1>
      <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
      <button>Get Started</button>
    </div>
    <img src={illustration} alt='' />
  </section>
}

// Input link, recent links and others
function MainContent(){
  return <div className='mainDiv'>
    <LinkInput />
    <LinkHistory />
    <MoreInfo />
    <Features />
    <Bottom />
  </div>
}

function MoreInfo(){
  return <section className='moreInfo'>
    <h2>Advanced Statistics</h2>
    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
  </section>
}

function Features(){
  return <div className='features'>
    <hr id='horizontalLine'/><hr id='verticalLine'/>
    <div className='featureContainer'>
      <section className='item item-recognition'>
        <div className='imgBorder'>
          <img src={recognition} alt='' />
        </div>
        <h3>Brand Recognition</h3>
        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
      </section>
      <section className='item item-records'>
        <div className='imgBorder'>
          <img src={records} alt='' />
        </div>
        <h3>Detailed Records</h3>
        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
      </section>
      <section className='item item-custom'>
        <div className='imgBorder'>
          <img src={custom} alt='' />
        </div>
        <h3>Fully Customizable</h3>
        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
      </section>
    </div>
  </div>
}

function Bottom(){
  return <div className='bottom'>
    <span>Boost your links today</span>
    <button>Get Started</button>
  </div>
}