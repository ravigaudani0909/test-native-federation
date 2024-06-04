const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),

    ...share(
      [
        '@angular/common/locales/de',
        '@angular/common/locales/extra/de'
      ].reduce(
        (acc, name) => ({
          ...acc,
          [name]: { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: false },
        }),
        {},
      ),
    ),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ] ,

  sharedMappings: ['test-lib'],
});
