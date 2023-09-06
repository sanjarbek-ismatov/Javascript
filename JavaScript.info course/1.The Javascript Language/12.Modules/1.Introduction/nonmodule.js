const options = {
  port: 3000,
  host: "0.0.0.0",
  hot: true,
  inline: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
  proxy: {
    "/api": {
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    },
  },
};
