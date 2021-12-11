// Loading state from local storage
export function loadState(){
  try{
    const serialState = localStorage.getItem('appState')

    if (serialState === null) {
      return undefined
    }
    return JSON.parse(serialState)
  }
  catch(err){
    return undefined
  }
}

// Saving state to local storage
export function saveState(state){
	try{
    localStorage.setItem('appState', JSON.stringify(state))
	}
  catch(err){
		console.log(err)
	}
}