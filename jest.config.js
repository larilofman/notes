module.exports = {
  verbose: true,
  roots: ['client/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/client/__mocks__/styleMock.js',
  }
};
