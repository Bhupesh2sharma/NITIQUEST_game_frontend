module.exports = {
    // ... other configurations ...
    chainWebpack: (config) => {
      config.module
        .rule('glb')
        .test(/\.glb$/)
        .use('gltf-loader')
        .loader('three/examples/js/loaders/GLTFLoader')
        .end();
    },
  };