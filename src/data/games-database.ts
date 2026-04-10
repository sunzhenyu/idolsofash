export type GameAccessMode = 'trusted-embed' | 'mirror-embed' | 'official-download' | 'official-external' | 'info-only'
export type SourceStatus = 'verified-embed' | 'verified-official' | 'unverified-mirror' | 'unknown'

export interface GameRecord {
  id: string
  name: string
  image: string
  description: string
  developer: string
  genre: string[]
  rating: number
  votes: number
  accessMode: GameAccessMode
  sourceStatus: SourceStatus
  gameUrl?: string
  sourceUrl?: string
  officialUrl?: string
  steamUrl?: string
  platforms: string[]
  accessLabel: string
  accessSummary: string
  sourceDescription?: string
  sourceDescriptionSource?: string
  sourceDescriptionType?: 'official' | 'mirror'
  sourceNotes: string[]
}

export const gamesDatabase: Record<string, GameRecord> = {
  'idols-of-ash': {
    id: 'idols-of-ash',
    name: 'Idols of Ash',
    image: '/images/idols-of-ash.png',
    description:
      'A first-person horror climbing game where rope movement and route planning are core mechanics. You climb under constant pressure while avoiding giant centipedes.',
    developer: 'Leafy Games',
    genre: ['Horror', 'Adventure', 'Climbing'],
    rating: 4.9,
    votes: 307,
    accessMode: 'trusted-embed',
    sourceStatus: 'verified-embed',
    gameUrl: 'https://nealfun.app/game/idols-of-ash/v1/',
    sourceUrl: 'https://nealfun.app/game/idols-of-ash/v1/',
    officialUrl: 'https://leafygames.itch.io/idols-of-ash',
    steamUrl: 'https://store.steampowered.com/search/?term=Idols%20of%20Ash',
    platforms: ['Web Browser', 'Windows', 'Linux'],
    accessLabel: 'Play online (verified embed source)',
    accessSummary:
      'Online play is enabled because this specific embed source has been verified as a real playable page.',
    sourceDescription:
      'Idols of Ash is presented as a first-person horror climbing game centered on grappling movement, high-pressure traversal, and survival-focused vertical progression.',
    sourceDescriptionSource: 'https://leafygames.itch.io/idols-of-ash',
    sourceDescriptionType: 'official',
    sourceNotes: [
      'Playable embed source: https://nealfun.app/game/idols-of-ash/v1/.',
      'Official listing: https://leafygames.itch.io/idols-of-ash.',
    ],
  },
  granny: {
    id: 'granny',
    name: 'Granny',
    image: '/images/granny.png',
    description:
      'A survival horror escape game focused on stealth and route planning inside a hostile house.',
    developer: 'DVloper',
    genre: ['Horror', 'Survival'],
    rating: 8.2,
    votes: 5420,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://game.azgame.io/granny-horror/',
    sourceUrl: 'https://game.azgame.io/granny-horror/',
    officialUrl: 'https://play.google.com/store/apps/details?id=com.dvloper.granny',
    platforms: ['Web Browser (Mirror)', 'Android', 'iOS', 'PC'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Browser play is available through a third-party mirror source. Official publisher listing is linked separately.',
    sourceDescription:
      'Granny is commonly described as a stealth escape horror game where noise management and route planning are the key to survival.',
    sourceDescriptionSource: 'https://play.google.com/store/apps/details?id=com.dvloper.granny',
    sourceDescriptionType: 'official',
    sourceNotes: [
      'Checked on 2026-04-10: idolsash wrapper points to https://game.azgame.io/granny-horror/.',
      'Official publisher channel: https://play.google.com/store/apps/details?id=com.dvloper.granny.',
    ],
  },
  'ice-baby-quest': {
    id: 'ice-baby-quest',
    name: 'Ice Baby Quest',
    image: '/images/ice-baby-quest.png',
    description:
      'A puzzle adventure with frozen-world navigation, collectible routes, and timing-based obstacle clears.',
    developer: 'Indie Studio',
    genre: ['Puzzle', 'Adventure'],
    rating: 7.8,
    votes: 3200,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/ice-baby-quest/',
    sourceUrl: 'https://gamea.azgame.io/ice-baby-quest/',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Browser play is currently available through a third-party mirror source.',
    sourceDescription:
      'Mirror listings describe this title as a surreal puzzle-adventure with chaotic encounters, objective hunting, and exploration-heavy progression.',
    sourceDescriptionSource: 'https://azgames.io/ice-baby-quest',
    sourceDescriptionType: 'mirror',
    sourceNotes: [
      'Checked on 2026-04-10: idolsash wrapper points to https://gamea.azgame.io/ice-baby-quest/.',
      'No official publisher source has been confirmed yet.',
    ],
  },
  'horror-nun': {
    id: 'horror-nun',
    name: 'Horror Nun',
    image: '/images/horror-nun.png',
    description:
      'A first-person horror escape experience where puzzle solving and noise control decide whether you survive.',
    developer: 'Scary Games',
    genre: ['Horror', 'Survival'],
    rating: 8.0,
    votes: 4100,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/horror-nun/',
    sourceUrl: 'https://gamea.azgame.io/horror-nun/',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Browser play is currently available through a third-party mirror source.',
    sourceNotes: [
      'Checked on 2026-04-10: idolsash wrapper points to https://gamea.azgame.io/horror-nun/.',
      'No official publisher source has been confirmed yet.',
    ],
  },
  'undead-invasion': {
    id: 'undead-invasion',
    name: 'Undead Invasion',
    image: '/images/undead-invasion.png',
    description:
      'A wave-based zombie shooter where weapon upgrades, ammo pacing, and positioning are key to survival.',
    developer: 'Action Games Studio',
    genre: ['Action', 'Shooter', 'Horror'],
    rating: 8.4,
    votes: 6800,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/undead-invasion/',
    sourceUrl: 'https://gamea.azgame.io/undead-invasion/',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Browser play is currently available through a third-party mirror source.',
    sourceNotes: [
      'Checked on 2026-04-10: idolsash wrapper points to https://gamea.azgame.io/undead-invasion/.',
      'No official publisher source has been confirmed yet.',
    ],
  },
  'poppy-playtime': {
    id: 'poppy-playtime',
    name: 'Poppy Playtime',
    image: '/images/poppy-playtime.png',
    description:
      'A horror puzzle adventure set in an abandoned toy factory, mixing environmental puzzles and chase pressure.',
    developer: 'MOB Games',
    genre: ['Horror', 'Puzzle'],
    rating: 8.7,
    votes: 8900,
    accessMode: 'official-external',
    sourceStatus: 'verified-official',
    officialUrl: 'https://poppyplaytime.com/',
    steamUrl: 'https://store.steampowered.com/app/1721470/Poppy_Playtime/',
    platforms: ['PC', 'Console', 'Mobile'],
    accessLabel: 'Official links only',
    accessSummary:
      'No playable browser embed source is currently verified. Use official publisher channels instead.',
    sourceDescription:
      'Official channels describe Poppy Playtime as a horror puzzle adventure set in an abandoned toy factory, focused on exploration and mystery.',
    sourceDescriptionSource: 'https://poppyplaytime.com/',
    sourceDescriptionType: 'official',
    sourceNotes: [
      'Checked on 2026-04-10: https://nealfun.app/game/poppy-playtime/v1/ returns placeholder text "Hello There".',
      'Checked on 2026-04-10: https://idolsash.io/poppy-playtime.embed is an empty shell and does not expose a playable source URL.',
    ],
  },
  'iron-lung': {
    id: 'iron-lung',
    name: 'Iron Lung',
    image: '/images/iron-lung.png',
    description:
      'A claustrophobic submarine horror game where limited visibility and sonar-driven decisions create constant tension.',
    developer: 'David Szymanski',
    genre: ['Horror', 'Simulation'],
    rating: 8.9,
    votes: 4500,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://html-classic.itch.zone/html/16659648/index.html?v=1772395601',
    sourceUrl: 'https://html-classic.itch.zone/html/16659648/index.html?v=1772395601',
    officialUrl: 'https://store.steampowered.com/app/1846170/Iron_Lung/',
    platforms: ['Web Browser (Mirror)', 'PC'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Browser play is currently available through a third-party mirror source. Official publisher listing is linked separately.',
    sourceDescription:
      'Official listings frame Iron Lung as a claustrophobic first-person horror experience built around navigation, limited visibility, and escalating tension.',
    sourceDescriptionSource: 'https://store.steampowered.com/app/1846170/Iron_Lung/',
    sourceDescriptionType: 'official',
    sourceNotes: [
      'Checked on 2026-04-10: idolsash wrapper points to an itch-hosted HTML build URL.',
      'Official publisher listing: https://store.steampowered.com/app/1846170/Iron_Lung/.',
    ],
  },
  'burgers-nights': {
    id: 'burgers-nights',
    name: "Burger's Nights",
    image: '/images/burgers-nights.png',
    description:
      'A night-shift survival horror format where camera checks and limited resources drive every decision.',
    developer: 'Horror Indie',
    genre: ['Horror', 'Survival'],
    rating: 7.9,
    votes: 3800,
    accessMode: 'info-only',
    sourceStatus: 'unknown',
    platforms: ['Unknown'],
    accessLabel: 'Source pending verification',
    accessSummary:
      'No playable source URL has been confirmed from official or mirror channels yet.',
    sourceNotes: [
      'Checked on 2026-04-10: https://nealfun.app/game/burgers-nights/v1/ returns placeholder text "Hello There".',
      'Checked on 2026-04-10: https://idolsash.io/burgers-nights.embed is an empty shell page without game source URL.',
    ],
  },
  'escape-road': {
    id: 'escape-road',
    name: 'Escape Road',
    image: '/images/escape-road.png',
    description:
      'An arcade chase game built around evasive driving, dense traffic routing, and escalating police pressure.',
    developer: 'Racing Studio',
    genre: ['Racing', 'Action'],
    rating: 8.1,
    votes: 5200,
    accessMode: 'info-only',
    sourceStatus: 'unknown',
    platforms: ['Unknown'],
    accessLabel: 'Source pending verification',
    accessSummary:
      'No playable source URL has been confirmed from official or mirror channels yet.',
    sourceNotes: [
      'Checked on 2026-04-10: https://nealfun.app/game/escape-road/v1/ returns placeholder text "Hello There".',
      'Checked on 2026-04-10: https://idolsash.io/escape-road.embed is an empty shell page without game source URL.',
    ],
  },
  'infected-corridor': {
    id: 'infected-corridor',
    name: 'Infected Corridor',
    image: '/images/infected-corridor.png',
    description:
      'A close-quarters FPS with infected enemies where corridor control and ammo timing define survivability.',
    developer: 'Zombie Games',
    genre: ['Horror', 'Action', 'Shooter'],
    rating: 8.3,
    votes: 4700,
    accessMode: 'info-only',
    sourceStatus: 'unknown',
    platforms: ['Unknown'],
    accessLabel: 'Source pending verification',
    accessSummary:
      'No playable source URL has been confirmed from official or mirror channels yet.',
    sourceNotes: [
      'Checked on 2026-04-10: https://nealfun.app/game/infected-corridor/v1/ returns placeholder text "Hello There".',
      'Checked on 2026-04-10: https://idolsash.io/infected-corridor.embed is an empty shell page without game source URL.',
    ],
  },
  'dead-strike': {
    id: 'dead-strike',
    name: 'Dead Strike',
    image: '/images/dead-strike.png',
    description:
      'A tactical zombie shooter emphasizing precision aim, choke-point control, and wave defense pacing.',
    developer: 'Strike Team',
    genre: ['Action', 'Shooter', 'Horror'],
    rating: 8.5,
    votes: 6200,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/dead-strike/',
    sourceUrl: 'https://gamea.azgame.io/dead-strike/',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Browser play is currently available through a third-party mirror source.',
    sourceNotes: [
      'Checked on 2026-04-10: idolsash wrapper points to https://gamea.azgame.io/dead-strike/.',
      'No official publisher source has been confirmed yet.',
    ],
  },
  'red-face-horror': {
    id: 'red-face-horror',
    name: 'Red Face Horror',
    image: '/images/red-face-horror.png',
    description:
      'A psychological horror title that uses disorienting visuals, puzzle pressure, and sustained threat buildup.',
    developer: 'Horror Masters',
    genre: ['Horror', 'Psychological'],
    rating: 7.7,
    votes: 3400,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/red-face-horror/',
    sourceUrl: 'https://gamea.azgame.io/red-face-horror/',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Browser play is currently available through a third-party mirror source.',
    sourceNotes: [
      'Checked on 2026-04-10: idolsash wrapper points to https://gamea.azgame.io/red-face-horror/.',
      'No official publisher source has been confirmed yet.',
    ],
  },
  'ice-baby-quest-2': {
    id: 'ice-baby-quest-2',
    name: 'Ice Baby Quest 2',
    image: '/images/ice-baby-quest-2.png',
    description:
      'A sequel puzzle adventure featuring larger routes, trickier ice mechanics, and higher puzzle density.',
    developer: 'Indie Studio',
    genre: ['Puzzle', 'Adventure'],
    rating: 8.0,
    votes: 4100,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://azgames.io/ice-baby-quest-2.embed',
    sourceUrl: 'https://azgames.io/ice-baby-quest-2.embed',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Browser play is currently available through a third-party mirror source.',
    sourceNotes: [
      'Checked on 2026-04-10: idolsash wrapper points to https://azgames.io/ice-baby-quest-2.embed.',
      'No official publisher source has been confirmed yet.',
    ],
  },
  'skip-it': {
    id: 'skip-it',
    name: 'Skip It!',
    image: 'https://azgames.io/upload/imgs/skipit3.png',
    description:
      'A physics-based casual game where you throw and skip stones across water while timing angle, speed, and bounce distance.',
    developer: 'A-Z Games',
    genre: ['Casual', 'Arcade', 'Skill'],
    rating: 4.3,
    votes: 834,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/skip-it/',
    sourceUrl: 'https://gamea.azgame.io/skip-it/',
    officialUrl: 'https://azgames.io/skip-it',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Playable in-browser through an azgames-distributed mirror source.',
    sourceDescription:
      'Love skipping stones across water? Throw stones and make them skip as far as possible, then upgrade to boost performance.',
    sourceDescriptionSource: 'https://azgames.io/skip-it',
    sourceDescriptionType: 'mirror',
    sourceNotes: [
      'Checked on 2026-04-10: https://azgames.io/skip-it.embed maps to https://gamea.azgame.io/skip-it/.',
      'Official publisher information was not independently confirmed beyond distribution source.',
    ],
  },
  'lift-off': {
    id: 'lift-off',
    name: 'Lift Off',
    image: 'https://azgames.io/upload/imgs/liftoff3.png',
    description:
      'An arcade rocket launch game focused on stage timing and altitude optimization.',
    developer: 'A-Z Games',
    genre: ['Arcade', 'Skill', 'Casual'],
    rating: 4.2,
    votes: 680,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/lift-off/',
    sourceUrl: 'https://gamea.azgame.io/lift-off/',
    officialUrl: 'https://azgames.io/lift-off',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Playable in-browser through an azgames-distributed mirror source.',
    sourceDescription:
      'Lift Off is an arcade rocket-launching game where players send multi-stage rockets into orbit by timing stage separations.',
    sourceDescriptionSource: 'https://azgames.io/lift-off',
    sourceDescriptionType: 'mirror',
    sourceNotes: [
      'Checked on 2026-04-10: https://azgames.io/lift-off.embed maps to https://gamea.azgame.io/lift-off/.',
      'Official publisher information was not independently confirmed beyond distribution source.',
    ],
  },
  'goo-goo-gaga-clicker': {
    id: 'goo-goo-gaga-clicker',
    name: 'Goo Goo Gaga Clicker',
    image: 'https://azgames.io/upload/imgs/googoogagaclicker3.png',
    description:
      'A meme-inspired idle clicker game with rapid tapping, upgrade loops, and cosmetic unlocks.',
    developer: 'A-Z Games',
    genre: ['Clicker', 'Idle', 'Casual'],
    rating: 4.1,
    votes: 590,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/goo-goo-gaga-clicker/',
    sourceUrl: 'https://gamea.azgame.io/goo-goo-gaga-clicker/',
    officialUrl: 'https://azgames.io/goo-goo-gaga-clicker',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Playable in-browser through an azgames-distributed mirror source.',
    sourceDescription:
      'Play Goo Goo Gaga Clicker, click fast, purchase upgrades, and unlock a wide array of bizarre skins.',
    sourceDescriptionSource: 'https://azgames.io/goo-goo-gaga-clicker',
    sourceDescriptionType: 'mirror',
    sourceNotes: [
      'Checked on 2026-04-10: https://azgames.io/goo-goo-gaga-clicker.embed maps to https://gamea.azgame.io/goo-goo-gaga-clicker/.',
      'Official publisher information was not independently confirmed beyond distribution source.',
    ],
  },
  'office-fury': {
    id: 'office-fury',
    name: 'Office Fury',
    image: 'https://azgames.io/upload/imgs/officefurygame.png',
    description:
      'A 3D destruction game where players smash office environments in short chaotic sessions.',
    developer: 'A-Z Games',
    genre: ['Action', 'Casual', 'Arcade'],
    rating: 4.0,
    votes: 510,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/office-fury/',
    sourceUrl: 'https://gamea.azgame.io/office-fury/',
    officialUrl: 'https://azgames.io/office-fury',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Playable in-browser through an azgames-distributed mirror source.',
    sourceDescription:
      'Office Fury is a 3D casual destruction game where an office worker snaps and destroys everything in sight.',
    sourceDescriptionSource: 'https://azgames.io/office-fury',
    sourceDescriptionType: 'mirror',
    sourceNotes: [
      'Checked on 2026-04-10: https://azgames.io/office-fury.embed maps to https://gamea.azgame.io/office-fury/.',
      'Official publisher information was not independently confirmed beyond distribution source.',
    ],
  },
  'wave-rider': {
    id: 'wave-rider',
    name: 'Wave Rider',
    image: 'https://azgames.io/upload/imgs/waverider4.png',
    description:
      'An endless surfing game with fast obstacle dodging and high-score focused runs.',
    developer: 'A-Z Games',
    genre: ['Arcade', 'Sports', 'Casual'],
    rating: 4.2,
    votes: 720,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/wave-rider/',
    sourceUrl: 'https://gamea.azgame.io/wave-rider/',
    officialUrl: 'https://azgames.io/wave-rider',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Playable in-browser through an azgames-distributed mirror source.',
    sourceDescription:
      'Wave Rider is an endless surfing game where players control surfboards or jet skis to ride waves and dodge obstacles.',
    sourceDescriptionSource: 'https://azgames.io/wave-rider',
    sourceDescriptionType: 'mirror',
    sourceNotes: [
      'Checked on 2026-04-10: https://azgames.io/wave-rider.embed maps to https://gamea.azgame.io/wave-rider/.',
      'Official publisher information was not independently confirmed beyond distribution source.',
    ],
  },
  'escape-road-3': {
    id: 'escape-road-3',
    name: 'Escape Road 3',
    image: 'https://azgames.io/upload/imgs/escaperoad3.png',
    description:
      'A high-speed chase sequel with expanded routes, denser traffic, and more pursuit pressure.',
    developer: 'A-Z Games',
    genre: ['Racing', 'Action', 'Arcade'],
    rating: 4.4,
    votes: 950,
    accessMode: 'mirror-embed',
    sourceStatus: 'unverified-mirror',
    gameUrl: 'https://gamea.azgame.io/escape-road-3/',
    sourceUrl: 'https://gamea.azgame.io/escape-road-3/',
    officialUrl: 'https://azgames.io/escape-road-3',
    platforms: ['Web Browser (Mirror)'],
    accessLabel: 'Play online (third-party mirror)',
    accessSummary:
      'Playable in-browser through an azgames-distributed mirror source.',
    sourceDescription:
      'Escape Road 3 expands the series with fresh features and a faster chase loop focused on reaction and route control.',
    sourceDescriptionSource: 'https://azgames.io/escape-road-3',
    sourceDescriptionType: 'mirror',
    sourceNotes: [
      'Checked on 2026-04-10: https://azgames.io/escape-road-3.embed maps to https://gamea.azgame.io/escape-road-3/.',
      'Official publisher information was not independently confirmed beyond distribution source.',
    ],
  },
}

export function getGameById(id: string) {
  return gamesDatabase[id] || null
}

export function getAllGames() {
  return Object.values(gamesDatabase)
}
