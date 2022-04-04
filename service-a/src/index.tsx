setTimeout(() => {
  // @ts-ignore
  window.serviceBUrl = "localhost:3001";
  // window.serviceBUrl = "caitecoll.github.io/osn-module-federation";

  import("./bootstrap");
}, 1000);

export {};
