Package.describe({
  summary: 'Crunchhunt',
  version: '0.1.0',
  name: 'crunchhunt'
});

Npm.depends({
  // NPM package dependencies
});

Package.onUse(function (api) {

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n',                   // internationalization package
    'iron:router',                // routing package
    'telescope-base',             // basic Telescope hooks and objects
    'telescope-lib',              // useful functions
    'telescope-i18n',             // internationalization wrapper
    'fourseven:scss',             // SCSS compilation package
    'percolatestudio:synced-cron',
    'telescope-singleday',         // depend on singleday package to make sure it loads first
    'dandv:rate-limit'
  ]);

  // client

  api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating'                  // required for client-side templates
  ], ['client']);

  // server

  api.use([
    //
  ], ['server']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.add_files([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.add_files([
    'lib/main.js',
  ], ['client', 'server']);

  // client

  api.add_files([
    'lib/client/templates/custom_post_info.html',
    'lib/client/templates/custom_post_avatars.html',
    'lib/client/templates/custom_post_shares.html',
    'lib/client/templates/helpers.js',
    'lib/client/stylesheets/custom.scss'
  ], ['client']);

  // server

  api.add_files([
    'lib/server/cron.js',
    'lib/server/shares.js'
  ], ['server']);    

  // i18n languages (must come last)

  api.add_files([
    'i18n/en.i18n.json',
  ], ['client', 'server']);

  // -------------------------------- 3. Variables to export --------------------------------

  api.export([
    'primaryNav',
    'secondaryNav',
    'postModules',
    'postMeta'
  ]);

});