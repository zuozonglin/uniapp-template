const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  unocss: true,
  vue: {
    overrides: {
      'vue/custom-event-name-casing': ['kebab-case' | 'camelCase'],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': [
        2,
        {
          multiline: 1,
          singleline: 3,
        },
      ],
      'jsonc/sort-keys': 'off',
      'unocss/order': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  ignores: ['src/manifest.json', 'src/pages.json'],
})
