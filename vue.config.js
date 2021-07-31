module.exports = {
  outputDir: "docs", // https://github.com/victorsonger/victorsonger.github.com/settings/pages  由于github只提供以跟目录或/docs目录来发布项目，所以我们这边选择把打包内容输出到docs目录下
  css: {
    loaderOptions: {
      // less 8.0之后的版本  配置有修改 https://segmentfault.com/a/1190000039190699
      // 但是上面链接中的改动 需要配合webpack5才行  本项目是webpack4
      // 所以采用降低less版本到7.3.0的方案
      // less: {
      // },
    },
  },
};
// module.exports = {
//   chainWebpack: (config) => {
//     config.outputDir = "docs";
//     config.module
//       .rule("compile")
//       .test(/\.ts?$/)
//       .pre()
//       .exclude.add(/node_modules/)
//       .end()
//       .use("ts-loader")
//       .loader("ts-loader")
//       .options({ appendTsSuffixTo: [/\.vue$/] });
//   },
// };
