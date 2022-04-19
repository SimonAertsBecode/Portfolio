const datas = [
   {
      title: 'Pathways Explorer (Climact)',
      link: 'https://pathwaysexplorer.climact.com/',
      sourceCode: false,
      description:
         'The goal of the Pathways Explorer made by Climact is to allow comparison of different scenarios (official and custom) to help compagnies and governments make a choice regarding their strategies to reach 0 emissions by 2050.',
      stack: ['React', 'Redux', 'Scss', 'ApexChart.js'],
      inProgress: false,
   },
   {
      title: 'Pagination API',
      link: 'https://simonaertsbecode.github.io/Pagination/',
      sourceCode: 'https://github.com/SimonAertsBecode/Pagination',
      description:
         'The goal is to choose an open API and display the item in a table format of 3 columns with 10 rows per page. It was also asked to be able to click on items and show a brief description of it. The API that I have chosen is this one: https://api.punkapi.com/v2/beers?page=2&per_page=80. The page and per_page were the dynamic values that made pagination easier.',
      stack: ['React', 'Redux', 'Scss'],
      inProgress: false,
   },
   {
      title: 'Login - Register - Contact form',
      link: false,
      sourceCode: 'https://github.com/SimonAertsBecode/Kinaccess',
      description:
         'The project was to build a fullstack login - logout - register - contact form. The inputs validation are also fonctionnal, they were mainly set from the back end, except for the date of birth validation that has been done in the front end.',
      stack: {
         frontend: ['React', 'Redux', 'Scss'],
         backend: 'Node with express',
         dataBase: 'mongoDB',
      },
      inProgress: true,
   },
   {
      title: 'Website for a podiatrist',
      link: 'https://simonaertsbecode.github.io/Pierre-podologue/',
      sourceCode: 'https://github.com/SimonAertsBecode/Pierre-podologue',
      description: 'This project is a showcase website for a podiatrist that has recently opened his office',
      stack: ['React', 'Scss', 'framer-motion for animations'],
      inProgress: true,
   },
];

export default datas;
