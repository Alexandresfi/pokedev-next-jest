module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'tailwind'],
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
};
