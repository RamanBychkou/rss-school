exports.method = function getRequest(e) {
  const elementValue = document.querySelector('input').value;
  let params = new URLSearchParams();
  const defaultParams = {
    part: 'snippet',
    maxResults: 5,
    q: elementValue,
    type: 'video',
    key: 'AIzaSyCni5hHJmCRuygcOBUiHGOdldAbRIOPQB8',
  };
  for (const key in defaultParams) {
    params.append(key, defaultParams[key]);
  }
  params = params.toString();
  const init = {
    method: 'GET',
    credentials: 'include',

  };

  const url = `https://www.googleapis.com/youtube/v3/search?${params}`;
  const info = fetch(url, init).then((response) => {
    const data = response
    return data;
  }).catch((error) => {
    console.log(error);
  });
  return info;
};
