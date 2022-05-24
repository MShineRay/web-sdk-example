let onBoarding;
let token;

const container = document.getElementById('container');
const success = document.getElementById('success');

function log(r) {
  alert(JSON.stringify(r));
}

function createOnBoarding() {
  const apiKey = 'incode';
  const apiURL = 'https://stage-api.incodesmile.com';

  // API_URL=https://stage-api.incodesmile.com
  // CLIENT_ID=incode
  // SDK_URL=https://sdk.incode.com/sdk/onBoarding-1.42.0.js
  onBoarding = OnBoarding.create({
    apiKey: apiKey,
    apiURL: apiURL,
  });
}

function renderLogin() {
  onBoarding.renderLogin(container, {
    onSuccess: r => {
      console.log('onSuccess', r);
      success.innerHTML = `Welcome Back, your token is ${r.token}`;
    },
    onError: r => {
      showError();
    },
  });
}

function showError() {
  alert('Some error'); // this is for demo purposes you should handle errors in your own way
}

// document is ready
document.addEventListener('DOMContentLoaded', function () {
  createOnBoarding(); // initialize the instance
  renderLogin(); // render Login component
});