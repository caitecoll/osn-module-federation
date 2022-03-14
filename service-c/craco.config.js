const { whenDev } = require("@craco/craco");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const pkgJson = require("./package.json");

const appName = 'serviceC';
const deps = pkgJson.dependencies;

// run
const port = 3002;

const devServerConfig = {
  port,
  historyApiFallback: {
    index: "/index.html",
  },
};

const outputDevConfig = {
  publicPath: `http://localhost:${port}/`,
};

const outputProdConfig = {
  filename: "[name].[contenthash].js",
  publicPath: `/${appName}/latest/`,
};

module.exports = function ({ env }) {
  return {
    devServer: whenDev(() => devServerConfig, []),
    webpack: {
      configure: {
        output: env === "development" ? outputDevConfig : outputProdConfig,
        plugins: [
          new ModuleFederation({
            name: appName,
            remotes: {
              serviceB: 'serviceB@http://localhost:3001/remoteEntry.js',
            },
            shared: {
              ...deps,
              react: {
                singleton: true,
                requiredVersion: deps["react"],
              },
              "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
              },
            },
          }),
        ],
      },
    },
  };
};
