export default ({link, body, method}) => {

  return new Promise((resolve) => {
    let requestOptions = {
      body: null, 
      headers: {
        
      },
      method: method || (body ? "POST" : "GET")
    }
    
    if(body){
      requestOptions.body = body;
    }


    fetch(link, {
      body,
      headers
    })
    .then(res => res.json())
    .then(res => resolve({...res, success: true}))
    .catch(res => resolve({success: false}))
  })
}