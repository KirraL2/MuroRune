// src/data/characters.js
const characters = [
  // categoryId - 1
  {
    id: 101,
    name: 'Rune',
    categoryId: 1,
    image: '/images/RuneOC.jpg',
    content: 'WILL scream at you.',

    wikiSections: [
      {
        title: "Overview",
        content: "Rune is a powerful Distortion living in the City. They wield golden chains and possess the ability to rewind time in small areas."
      },
      {
        title: "Appearance",
        content: "Rune has bright golden hair, wears a black coat with golden accents and chains."
      },
      {
        title: "Personality",
        content: "Calm and composed on the surface, but burns with a strong sense of justice. Loyal to their friends and extremely protective. (Will scream at you either way-)"
      },
      {
        title: "E.G.O. & Abilities",
        content: "E.G.O Name: Golden Chains of Procuration\n\nAbilities:\n• Time Rewind (small area)\n• Chain Manipulation\n• Enhanced strength in distorted form"
      },
      {
        title: "Backstory",
        content: "Born in the Backstreets of District 23, Rune distorted after witnessing the destruction of their family by a Wing experiment. They now wander the City searching for answers."
      },
      {
        title: "Quotes",
        content: "\"Time is the only thing we can never truly own... so I steal it back.\""
      }
    ],

    relationships: [
        {
        id: 201,
        type: "Test",
        note: "Placeholder-"
        }
    ],

    music: {
        title: "Stay Gold - Ado",
        youtubeId: "MExT89HUNUY"
    },

    link: '#' // optional
  },
  // categoryId 2
  {
    id: 201,
    name: 'Test',
    categoryId: 2,
    image: '/images/test.jpg',
    content: 'Test.',

    wikiSections: [
      {
        title: "Overview",
        content: "Placeholder-"
      },
      {
        title: "Appearance",
        content: "Placeholder-"
      },
      {
        title: "Personality",
        content: "Placeholder-"
      },
      {
        title: "E.G.O. & Abilities",
        content: "Placeholder-"
      },
      {
        title: "Backstory",
        content: "Placeholder-"
      },
      {
        title: "Quotes",
        content: "\"Placeholder-\""
      }
    ],

    relationships: [
        {
        id: 101,
        type: "Placeholder-",
        note: "Placeholder-"
        }
    ],

    music: {
        title: "Placeholder-",
        youtubeId: "Placeholder-"
    },

    link: '#' // optional
  }
];

export default characters;