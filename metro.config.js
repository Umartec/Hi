const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true, // Set to true to enable inline requires
      },
    }),
  },
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'svg', 'gif'], // Added 'gif'
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'svg', 'json'], // Added 'json'
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
