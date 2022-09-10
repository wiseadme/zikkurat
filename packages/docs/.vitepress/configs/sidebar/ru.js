export default {
  '/api/': [
    {
      text: 'Документация API',
      items: [
        // { text: 'Index', link: '/api/' },
      ]
    }
  ],
  '/': [
    {
      text: 'Введение',
      items: [
        { text: 'Что такое Nervue?', link: '/introduction.html', children: true },
      ]
    },
    {
      text: 'Основные концепции',
      items: [
        { text: 'Store', link: '/core-concepts/index.html' },
        { text: 'State', link: '/core-concepts/state.html' },
        { text: 'Guards', link: '/core-concepts/guards.html' },
        { text: 'Actions', link: '/core-concepts/actions.html' },
      ],
    },
    {
      text: 'Config',
      items: [
        { text: 'Index', link: '/config/' },
        { text: 'Three', link: '/config/three' },
        { text: 'Four', link: '/config/four' }
      ]
    }
  ],
}
