import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const BASE_URL = 'https://api.shrtco.de/v2'

// Input component
function LinkInput(props){
  const [inputLink, setLink] = React.useState('')
  const inputValid = React.useRef(null)
  const validInfo = React.useRef(null)

  // Display and validate input in textfield
  function handleChange(e){
    setLink(e.target.value)
    if(e.target.value === ''){
      inputValid.current.style.border = '3px solid red'
      validInfo.current.style.display = 'block'
    }else{
      inputValid.current.style.border = '0'
      validInfo.current.style.display = 'none'
    }
  }

  // API interaction
  function handleSubmit(e){
    if(inputLink !== ''){
      // Sending GET request
      axios.get(`${BASE_URL}/shorten?url=${inputLink}`)
      // Passing data received to action as parameter
      .then((response) => {
        props.shortenLink(
          response.data.result.code,
          response.data.result.short_link,
          response.data.result.full_short_link,
          response.data.result.short_link2,
          response.data.result.full_short_link2,
          response.data.result.share_link,
          response.data.result.full_share_link,
          response.data.result.original_link
        )
        // Resetting textfield value
        setLink('')
      })
    }
    e.preventDefault()
  }

  // Form elements
  return <div className='inputDiv'>
    <input ref={inputValid} value={inputLink} placeholder='Shorten a link here...' onChange={handleChange} />
    <span ref={validInfo}>Please add a link...</span>
    <button onClick={handleSubmit}>Shorten it!</button>
  </div>
  
}

// Action creator
export function shortenLink(a,b,c,d,e,f,g,h) {
  return {
    // Action type
    type: 'SHORTEN LINK',
    // Payload
    code: a,
    short_link: b,
    full_short_link: c,
    short_link2: d,
    full_short_link2: e,
    share_link: f,
    full_share_link: g,
    original_link: h
  }
}

const mapDispatchToProps = { shortenLink }

// Connecting component to store
export default connect(null, mapDispatchToProps)(LinkInput)