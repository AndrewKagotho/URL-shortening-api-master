import React from 'react'
import { connect } from 'react-redux'
import { shortenLink } from './LinkInput'
import './styleMain.css'

// Recent links
function LinkHistory(props){
  // Creating reference for copy function
  const copyBtn = React.useRef([])
  // List rendering
  const listItems = props.full_short_link.map((links, index) => 
    <li className='listItem' key={index}>
      {/* Original link */}
      <div className='originalLink'>{props.original_link[index]}</div>
      <hr/>
      {/* Shortened link */}
      <div className='newLink'>{links}</div>
      {/* Copy link button */}
      <button className='copyLink' ref={(num) => copyBtn.current[index]=num} onClick={() => {
        navigator.clipboard.writeText(props.full_short_link[index])
        copyBtn.current[index].style.backgroundColor = 'hsl(255, 11%, 22%)'
        copyBtn.current[index].textContent = 'Copied!'
      }}>Copy</button>
    </li>
  )
  
  // Render clear history button if one or more links displayed
  if(props.code.length<=0)
    return <div className='linkContainer'><ul>{listItems}</ul></div>
  else
    return <div className='linkContainer'>
    <ul>{listItems}</ul>
    <button className='clearHistory' onClick={() => {
      window.localStorage.clear()
      window.location.reload()
    }}>Clear history</button>
  </div>

}

function mapStateToProps(state){
  return {
    code: state.code,
    short_link: state.short_link,
    full_short_link: state.full_short_link,
    short_link2: state.short_link2,
    full_short_link2: state.full_short_link2,
    share_link: state.share_link,
    full_share_link: state.full_share_link,
    original_link: state.original_link
  }
}

const mapDispatchToProps = {shortenLink}

// Connecting component to store
export default connect(mapStateToProps,mapDispatchToProps)(LinkHistory)