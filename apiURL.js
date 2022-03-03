let apiUrl

// check if development 
if (window.location.hostname === 'localhost') {
  apiUrl = 'http://localhost:4000/api/' 
} else {
  apiUrl = 'https://cookbook-api-neyrinck.herokuapp.com/api/'
}

// export api url
export default apiUrl