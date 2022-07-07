var handleGoogleLoginCredentialResponse = response => {
  if (!response) return;

  localStorage.setItem('googleAccessToken', response.credential);

  let queryParams = location.search;
  location.replace(`/login-with-google${queryParams}`);
};
