module.exports = {
  sourceType: 'module',
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        forceAllTransforms: true,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  ignore: ['node_modules'],
}
