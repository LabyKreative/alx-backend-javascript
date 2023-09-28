/* global XMLHttpRequest */
// getResponseFromAPI() promise function
async function getResponseFromAPI(url) {
  const response = await new Promise((resolve, reject) => {
    // Make the API request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function onResponse() {
      if (xhr.status === 200) {
        // Success!
        resolve(xhr.responseText);
      } else {
        // Failure!
        reject(new Error(`API request failed with status code ${xhr.status}`));
      }
    };
    xhr.send();
  });
  return response;
}

export default getResponseFromAPI;
