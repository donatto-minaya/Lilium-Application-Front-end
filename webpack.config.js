const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    plugins: [
		new NodePolyfillPlugin()
	],
    future: {
      webpack5: true,
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
  };