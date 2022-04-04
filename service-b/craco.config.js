const { whenDev } = require("@craco/craco");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const pkgJson = require("./package.json");

const appName = "serviceB";
const deps = pkgJson.dependencies;

// run
const port = 3001;

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
  publicPath: `https://caitecoll.github.io/osn-module-federation/`,
};

module.exports = function ({ env }) {
  return {
    devServer: whenDev(() => devServerConfig, []),
    webpack: {
      configure: {
        // output: env === "development" ? outputDevConfig : outputProdConfig,
        output: whenDev(() => outputDevConfig, outputProdConfig),
        plugins: [
          new ModuleFederation({
            name: appName,
            filename: "remoteEntry.js",
            exposes: {
              "./Button": "./src/Button",
              "./AnimalList": "./src/AnimalList",
              "./Form": "./src/FormWrapper",
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
