module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // ... some other plugins
    // 用来设置别名
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          // '^~(.+)': './src/\\1',
          src: './src',
          components: './src/components',
        },
        extensions: ['.js', '.vue', '.json', '.tsx', '.ts',]
      }
    ]
  ]
}
