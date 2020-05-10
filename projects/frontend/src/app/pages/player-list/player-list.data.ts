export interface TimeLineEntry {
  start: Date;
  content: string;
}

export interface Tournament {
  link?: string;
  date?: Date;
  name: string;
  edition: string;
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
}

export const players: Player[] = [
  {
    firstName: "Ali",
    lastName: "Nasserzadeh",
    nickName: "Lagily",
    image: "https://pbs.twimg.com/profile_images/1124377678247809024/qaVUpLps_400x400.png",
    tags: ["LoL", "Mid", "Coach", "Manager"],
    timeline: [
      { start: new Date("2015-06"), content: "BEV Mid Laner" },
      {
        start: new Date("2016-01"),
        content: "Deadpixels Mid Laner and Captain"
      },
      { start: new Date("2016-08"), content: "imProve Mid Laner and Captain" },
      { start: new Date("2018-01"), content: "SPG Mid Laner and Captain" },
      { start: new Date("2018-06"), content: "SPG CH Manager and Coach ESLM" },
      {
        start: new Date("2019-01"),
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
  }
];
