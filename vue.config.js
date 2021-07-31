module.exports = {
  outputDir: 'docs', // https://github.com/victorsonger/victorsonger.github.com/settings/pages  由于github只提供以跟目录或/docs目录来发布项目，所以我们这边选择把打包内容输出到docs目录下
}
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
