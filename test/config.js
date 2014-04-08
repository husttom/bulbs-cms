angular.module('bulbsCmsApp').constant('routes', {
  IMAGE_SERVER_URL: 'http://localimages.avclub.com',
  BC_ADMIN_URL: 'http://localimages.avclub.com',
  LOADING_IMG_SRC: '/images/loading.gif',
  STATIC_URL: '/static/',
  PARTIALS_URL: '/views/',
  CONTENT_PARTIALS_URL: '/content_type_views/',
  MEDIA_ITEM_PARTIALS_URL: '/cms/api/partials/media_items/',
  CACHEBUSTER: '?' + Date.now()
});

angular.module('bulbsCmsApp').constant('IMAGE_SERVER_URL', 'http://localimages.avclub.com');
angular.module('bulbsCmsApp').constant('BC_ADMIN_URL', 'http://localimages.avclub.com');
angular.module('bulbsCmsApp').constant('LOADING_IMG_SRC', "/images/loading.gif");
angular.module('bulbsCmsApp').constant('STATIC_URL', "/static/");
angular.module('bulbsCmsApp').constant('PARTIALS_URL', "/views/");
angular.module('bulbsCmsApp').constant('CONTENT_PARTIALS_URL', '/content_type_views/');
angular.module('bulbsCmsApp').constant('MEDIA_ITEM_PARTIALS_URL', '/cms/api/partials/media_items/');
angular.module('bulbsCmsApp').constant('CACHEBUSTER', "?" + Date.now());