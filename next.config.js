/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.STEAM_API_KEY
  },
  publicRuntimeConfig: {
    name: 'Reflex',
    description: 'A simple website made for Game Servers',
    logo: '/static/reflex.png',
    url: process.env.APP_URL,
    featuresTitle: 'Features',
    featuresDesc: 'What Reflex has to offer',
    serversTitle: 'Servers',
    serversDesc: 'bottom text',
    features: [
      {
        icon: 'fa-solid fa-user-group-crown',
        title: 'LOREM ONE',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis metus habitasse ridiculus cras penatibus nascetur nisl. Scelerisque suspendisse litora rutrum blandit litora neque per luctus habitasse. Aliquam dui eget litora ipsum arcu quis ridiculus nostra ligula. Elementum libero curae cras, morbi eros justo. Tellus vehicula orci lorem ridiculus commodo interdum potenti. Vulputate nascetur cubilia enim erat fusce vehicula.'
      },
      {
        icon: 'fa-solid fa-shield-halved',
        title: 'LOREM TWO',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper eu nostra augue aenean interdum amet vitae imperdiet! Vulputate magnis gravida nascetur pretium iaculis. Purus magna consequat accumsan facilisi sapien; per ultrices nulla. Adipiscing enim parturient amet praesent praesent suscipit erat pellentesque. Urna urna donec sed lacinia sociosqu dignissim semper erat.'
      },
      {
        icon: 'fa-solid fa-gem',
        title: 'LOREM THREE',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper eu nostra augue aenean interdum amet vitae imperdiet! Vulputate magnis gravida nascetur pretium iaculis. Purus magna consequat accumsan facilisi sapien; per ultrices nulla. Adipiscing enim parturient amet praesent praesent suscipit erat pellentesque. Urna urna donec sed lacinia sociosqu dignissim semper erat.'
      }
    ],
    navLinks: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Forums",
          path: "/forums"
      } ,
      {
        name: "Store",
        path: "/store"
      }
      ],
    servers: [ //Only supports Garry's mod at the moment
      {
        name: 'Fudgy\'s DarkRP',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: './assets/img/darkrp.jpg',
        ip: '51.68.200.55',
        port: '27015',
        color: 'red-500'
      },
      {
        name: 'Waurum Pedobear',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: './assets/img/pedobear.png',
        ip: '213.32.89.5',
        port: '27008',
        color: 'cyan-300'
      }
    ],
    managementTitle: 'Management',
    managementDesc: 'The people who run this community',
    management: [
      {
        name: 'Lythium',
        role: 'Management',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: 'https://avatars.githubusercontent.com/u/62567544?s=400&u=2f0a7977f321b07f303db409f0d8dc90b2ad14a8',
        color: 'indigo-600',
        button: {
          text: 'Website',
          link:'https://lythium.vip'
        }
      },
      {
        name: 'Lythium 2',
        role: 'Management',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: './assets/img/profile.jpg',
        color: 'green-500'
      }
    ],
    footerLinks: [
      {
        name: "Home",
        path: "/"
      },
      {
        name: "Forums",
        path: "/forums"
      } ,
      {
        name: "Store",
        path: "/store"
      }
    ]
  }
}

module.exports = nextConfig
