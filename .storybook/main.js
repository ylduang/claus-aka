// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)",
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app"
//   ]
// }

// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
//   webpackFinal: async config => {
//     // do mutation to the config

//     return config;
//   },
// };

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    // "../src/styles/index.scss",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    // "../stories/**/**/*.scss",
  ], // 配置编译文件的入口
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ], // 配置使用的官方提供的插件
  // webpackFinal: async (config) => {
  //   // do mutation to the config
  //   // 支持ts，tsx语法
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       {
  //         loader: require.resolve("ts-loader"),
  //       },
  //       // Optional
  //       {
  //         loader: require.resolve("react-docgen-typescript-loader"),
  //         options: {
  //           shouldExtractLiteralValuesFromEnum: true, // 枚举联合类型不显示
  //           propFilter: (prop, component) => {
  //             if (prop.parent) {
  //               return !prop.parent.fileName.includes("node_modules");
  //             }

  //             return true;
  //           },
  //         },
  //       },
  //     ],
  //   });
  //   // 支持scss文件，其他样式文件，在加入
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ["style-loader", "css-loader", "sass-loader"],
  //   });
  //   config.resolve.extensions.push(".ts", ".tsx");
  //   return config;
  // },
};
