export const process = {
  dev: true
};

export const site = {
  home: process.dev ? 'http://localhost:8080/' : 'https://gorshenev.ru'
};

export const links = [
    {
      title: 'Home',
      alias: 'home',
      url: '/'
    },
    {
      title: 'About',
      alias: 'about',
      url: '/about'
    },
    {
      title: 'Vacancy',
      alias: 'vacancy',
      url: '/vacancy'
    }
];

export const app = {
  title: 'My Title',
}