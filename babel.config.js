module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '^effector$': 'effector/compat',
          '^effector-react$': 'effector-react/compat',
        },
      },
    ],
  ],
};
