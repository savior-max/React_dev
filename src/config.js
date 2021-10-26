const config = (jwt_token) => {
  return {
    baseUrl: "http://localhost:8000/api",
    headers: { authorization: `Bearer ${jwt_token}` },
  };
};

module.exports= config;
