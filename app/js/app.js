var App = blocks.Application({
  history: 'pushState'
});

App.View('Home', {
  options: {
    route: '/',
    url: 'views/home.html'
  }
});

App.View('Contact', {
  options: {
    route: '/contact',
    url: 'views/contact.html'
  }
});