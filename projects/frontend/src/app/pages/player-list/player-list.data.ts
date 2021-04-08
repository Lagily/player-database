export interface TimeLineEntry {
  start: Date;
  end: Date;
  content: string;
}

export interface Tournament {
  link?: string;
  date?: Date;
  name: string;
  edition: string;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
}

export type AchievementImpact = "participant" | "organizer";

export interface Achievement {
  tournament: Tournament;
  impact: AchievementImpact;
  rank?: number;
}

export interface Player {
  firstName: string;
  lastName: string;
  nickName: string;
  image: string;
  timeline: TimeLineEntry[];
  achievements: Achievement[];
  tags: string[];
  twitter?: string;
  instagram?: string;
  gamepedia?: string;
  swiss: boolean;
  sesfMember: boolean;
  team?: Team;
}

const players: Player[] = [
  {
    firstName: "Ali",
    lastName: "Nasserzadeh",
    nickName: "Lagily",
    image: "https://pbs.twimg.com/profile_images/1332780737955848192/amTE_Dh7_400x400.jpg",
    tags: ["LoL", "Mid", "Coach", "Manager"],
    team: {
      name: "myInsanity",
      id: "1",
      logo: "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/0b/MYinsanitylogo_square.png?version=cf76314a83d0d2b78c967734f11274d7"
    },
    timeline: [
      { start: new Date("2015-06"), end: new Date("2016-01"), content: "BEV Mid Laner" },
      {
        start: new Date("2016-01"),
        end: new Date("2016-08"),
        content: "Deadpixels Mid Laner and Captain"
      },
      { start: new Date("2016-08"), end: new Date("2018-01"), content: "imProve Mid Laner and Captain" },
      { start: new Date("2018-01"), end: new Date("2018-06"), content: "SPG Mid Laner and Captain" },
      { start: new Date("2018-06"), end: new Date("2019-01"), content: "SPG CH Manager and Coach ESLM" },
      {
        start: new Date("2019-01"),
        end: new Date("2020-06"),
        content: "mYinsanity Mid Laner and Captain"
      }
    ],
    achievements: [
      {
        tournament: { name: "King of Switzerland", edition: "2017" },
        impact: "organizer"
      },
      {
        tournament: { name: "Switzerlan", edition: "2019" },
        impact: "participant",
        rank: 1
      },
      {
        tournament: { name: "Polylan", edition: "2015" },
        impact: "participant",
        rank: 2
      },
      {
        tournament: { name: "Polylan", edition: "2016" },
        impact: "participant",
        rank: 2
      },
      {
        tournament: { name: "Polylan", edition: "2017" },
        impact: "participant",
        rank: 1
      },
      {
        tournament: { name: "Polylan", edition: "2018" },
        impact: "participant",
        rank: 1
      },
      {
        tournament: { name: "Polylan", edition: "2019" },
        impact: "participant",
        rank: 2
      },
      {
        tournament: { name: "GameThat", edition: "2015" },
        impact: "participant",
        rank: 1
      }
    ],
    twitter: "https://twitter.com/Lagily_",
    instagram: "https://www.instagram.com/lagily__/",
    gamepedia: "https://lol.gamepedia.com/Lagily",
    swiss: true,
    sesfMember: true
  },
  {
    firstName: "Mahdi",
    lastName: "Nasserzadeh",
    nickName: "Pride",
    image: "https://pbs.twimg.com/profile_images/1354750843019546626/VZZ_040s_400x400.jpg",
    tags: ["LoL", "Top", "Pro Player"],
    team: {
      name: "Fnatic Rising",
      id: "2",
      logo: "assets/fnatic.svg"
    },
    timeline: [],
    achievements: [
      {
        tournament: { name: "ESL Swiss", edition: "2019/2" },
        impact: "participant",
        rank: 1
      },
      {
        tournament: { name: "ESL Swiss", edition: "2019/1" },
        impact: "participant",
        rank: 1
      },
      {
        tournament: { name: "Switzerlan", edition: "2019" },
        impact: "participant",
        rank: 3
      },
      {
        tournament: { name: "Polylan", edition: "2015" },
        impact: "participant",
        rank: 2
      },
      {
        tournament: { name: "Polylan", edition: "2016" },
        impact: "participant",
        rank: 2
      },
      {
        tournament: { name: "Polylan", edition: "2017" },
        impact: "participant",
        rank: 1
      },
      {
        tournament: { name: "Polylan", edition: "2018" },
        impact: "participant",
        rank: 1
      },
      {
        tournament: { name: "Polylan", edition: "2019" },
        impact: "participant",
        rank: 1
      },
      {
        tournament: { name: "GameThat", edition: "2015" },
        impact: "participant",
        rank: 1
      }
    ],
    twitter: "https://twitter.com/pride__lol",
    instagram: "https://www.instagram.com/pride__lol/",
    gamepedia: "https://lol.fandom.com/wiki/Pride_(Mahdi_Nasserzadeh)",
    swiss: true,
    sesfMember: false
  }
];

export { players };
