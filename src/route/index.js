// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================
var header = {
  name: {
    firstname: `Yaroslav`,
    lastname: `Tsybulko`,
  },
  address: `Ukraine,Sokyrianu`,
  position: `Junior Fullstack JS Developer`,
  salary: `600$ в місяць`,
}
var footer = {
  social: {
    email: {
      text: `Decster@mail.com`,
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      htef: 'tel:+380670000123',
    },
    linkedin: {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: `Resume | Summary`,
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: `Resume | Skills`,
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 2,
          isTop: false,
        },
        {
          name: 'Hendelbars',
          point: 3,
          isTop: true,
        },
        {
          name: 'Vs Code',
          point: 3,
          isTop: true,
        },
        {
          name: 'Git',
          point: 3,
          isTop: true,
        },
        {
          name: 'Terminal',
          point: 10,
          isTop: true,
        },
        {
          name: 'React js',
          point: 0,
          isTop: true,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Footboll',
          point: null,
          isMain: false,
        },
        {
          name: 'Car',
          isMain: true,
        },
        {
          name: 'Trees',
          isMain: true,
        },
      ],
    },

    footer,
  })
})
// ================================================================
// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: `Resume | Education`,
    },

    header,

    main: {
      educations: [
        {
          name: 'First School',
          isEnd: true,
        },
        {
          name: 'IT-Brains',
          isEnd: true,
        },
        {
          name: 'KPI',
          point: null,
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Certificates JS',
          id: 123,
        },
        {
          name: 'Certificates Terminal',
          id: 213,
        },
        {
          name: 'Certificates HTML',
          id: 321,
        },
      ],
    },

    footer,
  })
})
// ================================================================
// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: `Resume | Work`,
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack JS Developer',
          company: {
            name: 'IT-brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '12.12.2010',
            to: '14.15.2023',
          },
        },
        {
          position: 'Junior QA/QX',
          company: {
            name: 'IT-brains',
            url: 'https://resume.com.ua/',
          },
          duration: {
            from: '12.12.2010',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about: 'Track car',
              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: ' money',
                },
                {
                  name: ' bycicle',
                },
              ],
              awardsAmount: 3000,
            },
          ],
        },
      ],
    },
    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
