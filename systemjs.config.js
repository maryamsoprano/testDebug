/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        '/app', // 'dist',
    '@angular':                   '/node_modules/@angular',
    'angular2-in-memory-web-api': '/node_modules/angular2-in-memory-web-api',
    'rxjs':                       '/node_modules/rxjs',
    'reflect-metadata':           '/node_modules/reflect-metadata',
    '@angular2-material':         '/node_modules/@angular2-material',
    'ng2-select':                 '/node_modules/ng2-select',
    'ng2-material':               '/node_modules/ng2-material',
    'angular2-modal':             '/node_modules/angular2-modal',
    'ng2-bs3-modal':             '/node_modules/ng2-bs3-modal',
    'moment':                     '/node_modules/moment',
    'ng2-charts':                 '/node_modules/ng2-charts',
    'chart.js':                   '/node_modules/chart.js/dist',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'reflect-metadata':           { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'moment':                     { main: 'moment.js', defaultExtension: 'js' },
    'ng2-charts':                 { defaultExtension: 'js' },
    'ng2-select':                 { main: 'ng2-select.js', defaultExtension: 'js'},
    'ng2-material':               { main: 'index.js', defaultExtension: 'js', format: 'cjs'},
    'angular2-modal':             { main: 'index.js', defaultExtension: 'js'},
    'ng2-bs3-modal':              { main: 'index.js', defaultExtension: 'js'},
    'chart.js':                   { main: 'Chart.min.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade',
  ];
  // put the names of any of your Material components here
  var materialPkgs = [
    'core',
    'button',
    'button-toggle',
    'card',
    'checkbox',
    'grid-list',
    'icon',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slide-toggle',
    'tabs',
    'toolbar',
    'tooltip'
  ];

  materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
  });
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);



/*
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
    '@angular2-material/button': 'node_modules/@angular2-material/button',
    '@angular2-material/card': 'node_modules/@angular2-material/card',
    '@angular2-material/checkbox': 'node_modules/@angular2-material/checkbox',
    '@angular2-material/core': 'node_modules/@angular2-material/core',
    '@angular2-material/icon': 'node_modules/@angular2-material/icon',
    '@angular2-material/input': 'node_modules/@angular2-material/input',
    '@angular2-material/list': 'node_modules/@angular2-material/list',
    '@angular2-material/progress-bar': 'node_modules/@angular2-material/progress-bar',
    '@angular2-material/progress-circle': 'node_modules/@angular2-material/progress-circle',
    '@angular2-material/radio': 'node_modules/@angular2-material/radio',
    '@angular2-material/sidenav': 'node_modules/@angular2-material/sidenav',
    '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar',
    '@angular2-material/tabs': 'node_modules/@angular2-material/tabs',
    '@angular2-material/menu': 'node_modules/@angular2-material/menu',
    'app': 'app', // 'dist',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    '@angular': 'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    '@angular2-material/button': { main: 'button.js', defaultExtension: 'js'},
    '@angular2-material/card': { main: 'card.js', defaultExtension: 'js'},
    '@angular2-material/checkbox': { main: 'checkbox.js', defaultExtension: 'js'},
    '@angular2-material/core': { main: 'core.js', defaultExtension: 'js'},
    '@angular2-material/icon': { main: 'icon.js', defaultExtension: 'js'},
    '@angular2-material/input': { main: 'input.js', defaultExtension: 'js'},
    '@angular2-material/list': { main: 'list.js', defaultExtension: 'js'},
    '@angular2-material/progress-bar': { main: 'progress-bar.js', defaultExtension: 'js'},
    '@angular2-material/progress-circle': { main: 'progress-circle.js', defaultExtension: 'js'},
    '@angular2-material/radio': { main: 'radio.js', defaultExtension: 'js'},
    '@angular2-material/sidenav': { main: 'sidenav.js', defaultExtension: 'js'},
    '@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js'},
    '@angular2-material/tabs': { main: 'tabs.js', defaultExtension: 'js'},
    '@angular2-material/menu': { main: 'menu.js', defaultExtension: 'js'},
    'app': { main: 'boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'symbol-observable': { main: 'index.js', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/forms'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
*/