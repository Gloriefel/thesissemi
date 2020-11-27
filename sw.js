const staticCacheName = 'site-static-v5';
const dynamicCacheName = 'site-dynamic-v5';

const assets = [
    '/',
    '/index.html', 
    '/js/app.js', 
    '/js/main.js', 
    '/js/materialize.js', 
    '/js/materialize.min.js',
    '/js/plugins.js',
    '/js/jsdatabase/app.js',
    '/js/jsdatabase/auth.js',
    '/js/jsdatabase/chedwsitch.js',
    '/js/jsdatabase/functions_tesdastep.js',
    '/js/jsdatabase/functions_tesdatwsp.js',
    '/js/jsdatabase/functions.js',
    '/js/jsdatabase/script_tesdastep.js',
    '/js/jsdatabase/script_tesdatwsp.js',
    '/js/jsdatabase/script.js',
    '/js/jsdatabase/signature_pad.umd.js',
    '/js/jsdatabase/tabscholar.js',
    '/js/jsdatabase/tesdaapp.js',
    '/js/jsdatabase/tesdasignature_pad.umd.js',
    '/js/jsdatabase/tesdaswitch.js',
    

    '/assets/css/material-dashboard-rtl.css',
    '/assets/css/material-dashboard.css',
    '/assets/css/material-dashboard.css.map',
    '/assets/css/material-dashboard.min.css',
    '/assets/css/navtab.scss',

    '/assets/demo/demo.css',
    '/assets/demo/demo.js',

    '/assets/js/core/bootstrap-material-design.min.js',
    '/assets/js/core/jquery.min.js',
    '/assets/js/core/popper.min.js',
    '/assets/js/plugins/arrive.min.js',
    '/assets/js/plugins/bootstrap-datetimepicker.min.js', 
    '/assets/js/plugins/bootstrap-notify.js', 
    '/assets/js/plugins/bootstrap-selectpicker.js', 
    '/assets/js/plugins/bootstrap-tagsinput.js', 
    '/assets/js/plugins/chartist.min.js', 
    '/assets/js/plugins/fullcalendar.min.js', 
    '/assets/js/plugins/jasny-bootstrap.min.js', 
    '/assets/js/plugins/jquery-jvectormap.js', 
    '/assets/js/plugins/jquery.bootstrap-wizard.js', 
    '/assets/js/plugins/jquery.dataTables.min.js', 
    '/assets/js/plugins/jquery.tagsinput.js', 
    '/assets/js/plugins/jquery.validate.min.js', 
    '/assets/js/plugins/moment.min.js', 
    '/assets/js/plugins/nouislider.min.js', 
    '/assets/js/plugins/perfect-scrollbar.jquery.min.js', 
    '/assets/js/plugins/sweetalert2.js',  
    '/assets/js/material-dashboard.js',
    '/assets/js/material-dashboard.js.map',
    '/assets/js/material-dashboard.min.js', 

    '/assets/scss/material-dashboard/plugins/_animate.scss',
    '/assets/scss/material-dashboard/plugins/_perfect-scrollbar.scss',
    '/assets/scss/material-dashboard/plugins/_chartist.scss',

    '/assets/scss/material-dashboard/variables/_body.scss',
    '/assets/scss/material-dashboard/variables/_bootstrap-material-design-base.scss',
    '/assets/scss/material-dashboard/variables/_bootstrap-material-design.scss',
    '/assets/scss/material-dashboard/variables/_brand.scss',
    '/assets/scss/material-dashboard/variables/_buttons.scss',
    '/assets/scss/material-dashboard/variables/_card.scss',
    '/assets/scss/material-dashboard/variables/_code.scss',
    '/assets/scss/material-dashboard/variables/_colors-map.scss',
    '/assets/scss/material-dashboard/variables/_colors.scss',
    '/assets/scss/material-dashboard/variables/_custom-forms.scss',
    '/assets/scss/material-dashboard/variables/_drawer.scss',
    '/assets/scss/material-dashboard/variables/_dropdown.scss',
    '/assets/scss/material-dashboard/variables/_forms.scss',
    '/assets/scss/material-dashboard/variables/_layout.scss',
    '/assets/scss/material-dashboard/variables/_list-group.scss',
    '/assets/scss/material-dashboard/variables/_menu.scss',
    '/assets/scss/material-dashboard/variables/_modals.scss',
    '/assets/scss/material-dashboard/variables/_nav.scss',
    '/assets/scss/material-dashboard/variables/_pagination.scss',
    '/assets/scss/material-dashboard/variables/_shadow.scss',
    '/assets/scss/material-dashboard/variables/_snackbar.scss',
    '/assets/scss/material-dashboard/variables/_spacing.scss',
    '/assets/scss/material-dashboard/variables/_state.scss',
    '/assets/scss/material-dashboard/variables/_tables.scss',
    '/assets/scss/material-dashboard/variables/_tooltip.scss',
    '/assets/scss/material-dashboard/variables/_type.scss',

    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_alert.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_background-variant.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_badge.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_border-radius.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_box-shadow.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_breakpoints.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_buttons.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_caret.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_float.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_clearfix.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_forms.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_gradients.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_grid-framework.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_grid.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_hover.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_image.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_list-group.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_lists.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_navbar-align.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_nav-divider.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_pagination.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_reset-text.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_resize.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_screen-reader.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_size.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_table-row.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_text-emphasis.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_text-hide.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_text-truncate.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_transition.scss', 
    '/assets/scss/material-dashboard/bootstrap/scss/mixins/_visibility.scss',  
  
    '/assets/scss/material-dashboard/cards/_card-plain.scss',
    '/assets/scss/material-dashboard/cards/_card-profile.scss',
    '/assets/scss/material-dashboard/cards/_card-stats.scss',
    
    '/assets/scss/material-dashboard/_alerts.scss',
    '/assets/scss/material-dashboard/_buttons.scss',
    '/assets/scss/material-dashboard/_checkboxes.scss',
    '/assets/scss/material-dashboard/_cards.scss',
    '/assets/scss/material-dashboard/_core-bootstrap.scss',
    '/assets/scss/material-dashboard/_dropdown.scss',
    '/assets/scss/material-dashboard/_example-pages.scss',
    '/assets/scss/material-dashboard/_fixed-plugin.scss',
    '/assets/scss/material-dashboard/_footers.scss',
    '/assets/scss/material-dashboard/_forms.scss',
    '/assets/scss/material-dashboard/_headers.scss',
    '/assets/scss/material-dashboard/_images.scss',
    '/assets/scss/material-dashboard/_info-areas.scss',
    '/assets/scss/material-dashboard/_input-group.scss',
    '/assets/scss/material-dashboard/_misc.scss',
    '/assets/scss/material-dashboard/_mixins.scss',
    '/assets/scss/material-dashboard/_navbar.scss',
    '/assets/scss/material-dashboard/_popover.scss',
    '/assets/scss/material-dashboard/_popups.scss',
    '/assets/scss/material-dashboard/_radios.scss',
    '/assets/scss/material-dashboard/_responsive.scss',
    '/assets/scss/material-dashboard/_ripples.scss',
    '/assets/scss/material-dashboard/_sidebar-and-main-panel.scss',
    '/assets/scss/material-dashboard/_social-buttons.scss',
    '/assets/scss/material-dashboard/_tables.scss',
    '/assets/scss/material-dashboard/_tabs.scss',
    '/assets/scss/material-dashboard/_togglebutton.scss',
    '/assets/scss/material-dashboard/_tooltip.scss',
    '/assets/scss/material-dashboard/_type.scss',
    '/assets/scss/material-dashboard/_variables.scss',
    '/assets/scss/material-dashboard.scss', 

    '/css/styles.css',
    '/css/animate.css',
    '/css/bootstrap.min.css', 
    '/css/fillup.css', 
    '/css/font-awesome.min.css', 
    '/css/ie9.css', 
    '/css/materialize.css', 
    '/css/materialize.min.css',  
    '/css/normalize.min.css', 
    '/css/req.css', 
    '/css/signature-pad.css', 
    '/css/templatemo_misc.css', 
    '/css/templatemo_style.css',
    '/css/upload.css', 
     
    '/bootstrap-4.4.1-dist/css/bootstrap.min.css',
    '/bootstrap-4.4.1-dist/js/bootstrap.min.js',
    '/img/ched.png',
    '/img/school.jpg',
    '/img/tesda.png',
    '/img/background.jpg', 
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v51/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://code.jquery.com/jquery-3.2.1.min.js',
    '/pages/fallback.html'
];
    
// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
      cache.keys().then(keys => {
        if(keys.length > size){
          cache.delete(keys[0]).then(limitCacheSize(name, size));
        }
      });
    });
  };
   
 // install event
  self.addEventListener('install', evt => {
    // console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    );
  });
  
 // activate event
   self.addEventListener('activate', evt => {
    // console.log('service worker activated');
    evt.waitUntil(
      caches.keys().then(keys => {
        //console.log(keys);
        return Promise.all(keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key))
        );
      })
    );
  });
  
// fetch events
  self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt); 

    if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
      evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
          return cacheRes || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              // check cached items size
              limitCacheSize(dynamicCacheName, 15);
              return fetchRes;
            })
          });
        }).catch(() => {
          if(evt.request.url.indexOf('.html') > -1){
            return caches.match('/pages/fallback.html');
          }
        })
      );
    }
  }); 

   


