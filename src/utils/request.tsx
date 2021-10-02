import LocalDB from "../LocalDB";
import api from "./api";

const localDB = new LocalDB();

export interface resFetch {
  success: boolean, 
  noAuth?: boolean, 
  response?: any
}

export default async ({link, body, method}: {link: string, body?: any, method?: string}): Promise<resFetch> => {

  let requestOptions: {body?: any, headers: any, method: string} = {
    body: null, 
    headers: {},
    method: method || (body ? "POST" : "GET")
  };
  
  if(body){
    if(method == "GET"){
      link += "?";
      var querys = [];
      for (var property in body) {
        querys.push(`${property}=${body[property]}`);
      }
      link += querys.join("&");
    }else{
      requestOptions.body = body;
    }
  }

  const auth = await localDB.findOne(localDB.tables.auth);
  if(auth){
    requestOptions.headers.Authorization = `${auth.token_type} ${auth.access_token}`;
  }

  console.log(link, requestOptions.headers.Authorization);

  let resFetch = await fetch(link, requestOptions);
  if(resFetch.status == 401){
    //let resResfres = fetch(api.refreshToken, {body: JSON.stringify({refresh_token: ""})}).then(res => res.json());
    return ({success: false, noAuth: true});
  }else if(resFetch.status == 200){
    let response = await resFetch.json();
    return ({success: true, response});
  }else{
    return ({success: false});
  }
}