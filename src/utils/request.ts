import LocalDB from '../localDB';

const localDB = new LocalDB();

export interface resFetch {
  success: boolean;
  noAuth?: boolean;
  response?: any;
}

const statusCode = {
  NO_AUTH: 401,
  OK: 200,
};

export default async ({
  link,
  body,
  method,
}: {
  link: string;
  body?: any;
  method?: string;
}): Promise<resFetch> => {
  let requestOptions: {body?: any; headers: any; method: string} = {
    body: null,
    headers: {},
    method: method || (body ? 'POST' : 'GET'),
  };

  if (body) {
    if (method === 'GET') {
      link += '?';
      var querys = [];
      for (var property in body) {
        querys.push(`${property}=${body[property]}`);
      }
      link += querys.join('&');
    } else {
      requestOptions.body = JSON.stringify(body);
    }
  }

  const auth = await localDB.findOne(localDB.tables.auth);
  if (auth) {
    requestOptions.headers.Authorization = `${auth.token_type} ${auth.access_token}`;
  }

  console.log(link);

  let resFetch = await fetch(link, requestOptions);
  if (resFetch.status === statusCode.NO_AUTH) {
    //let resResfres = fetch(api.refreshToken, {body: JSON.stringify({refresh_token: ""})}).then(res => res.json());
    return {success: false, noAuth: true};
  } else if (resFetch.status === statusCode.OK) {
    try {
      let response = await resFetch.json();
      return {success: true, response};
    } catch (error) {
      return {success: true};
    }
  } else {
    return {success: false};
  }
};
