
import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import ProductPage from '../pages/product.f7.html';
import SettingsPage from '../pages/settings.f7.html';

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import LeftPage1 from '../pages/left-page-1.f7.html';
import LeftPage2 from '../pages/left-page-2.f7.html';

import CruiseAjaxLoad from '../pages/cruise-ajax-load.f7.html';
import CruiseAjaxLinkSumry from '../pages/cruise-ajax-link-summry.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/left-page-1/',
    component: LeftPage1,
  },
  {
    path: '/left-page-2/',
    component: LeftPage2,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '/request-and-load/catg/:catgId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var cateId = to.params.catgId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var vCatg = {
          firstName: 'Dear',
          lastName: 'My Passengers',
          about: ' 我们为您提供以下服务，希望您喜欢!',
          links: [
            {
              title: 'Fall in lover with YangY Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Loving Eva Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Tony Adding Main Logic of AJAX :  1. Larabel 2. CCS Studio
//      app.request.get('http://localhost:8083/products', function(data) {
        app.request.get('http://localhost:8086/services/link_categories.php?node='+cateId, function(data) {
              // Hide Preloader
              app.preloader.hide();

              // Resolve route to load page
              resolve(
                  {
                      component: CruiseAjaxLoad,
                  },
                  {
                      props: {
                          catg: vCatg,
                          prdt: data,
                      }
                  }
              );

          });
/*
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: CruiseAjaxLoad,
          },
          {
            props: {
              catg: catg,
            }
          }
        );
*/
      }, 1000);
    },
  },
  {
    path: '/request-and-load/links/:catgId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var cateId = to.params.catgId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var vCatg = {
          firstName: 'Dear',
          lastName: 'My Passengers',
          about: ' 我们为您提供以下服务，希望您喜欢!',
          links: [
            {
              title: 'Fall in lover with YangY Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Loving Eva Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Tony Adding Main Logic of AJAX :  1. Larabel 2. CCS Studio
//      app.request.get('http://localhost:8083/products', function(data) {
        app.request.get('http://localhost:8086/services/links.php?node='+cateId, function(data) {
              // Hide Preloader
              app.preloader.hide();

              // Resolve route to load page
              resolve(
                  {
                      component: CruiseAjaxLinkSumry,
                  },
                  {
                      props: {
                          catg: vCatg,
                          prdt: data,
                      }
                  }
              );

          });
/*
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: CruiseAjaxLinkSumry,
          },
          {
            props: {
              catg: catg,
            }
          }
        );
*/
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;