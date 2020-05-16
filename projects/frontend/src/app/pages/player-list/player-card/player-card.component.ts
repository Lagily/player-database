import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";
import { Player, AchievementImpact } from "../player-list.data";

interface AggregatedAchievement {
  tournamentName: string;
  editions: string[];
  impacts: AchievementImpact[];
  ranks: (number | undefined)[];
  gold: string[];
  silver: string[];
  bronze: string[];
}
interface Achievements {
  aggregatedAchievements: AggregatedAchievement[];
  numberOfWins: number;
  numberOfOrganized: number;
}

@Component({
  selector: "pldb-player-card",
  templateUrl: "./player-card.component.html",
  styleUrls: ["./player-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerCardComponent implements OnInit {
  _player: Player;
  _achievements: Achievements;

  @Input()
  set player(player: Player) {
    this._player = player;
    this.setAchievements(player);
  }

  constructor() {}

  ngOnInit(): void {}

  // Workaround for angular component issue #13870
  disableAnimation = true;
  ngAfterViewInit(): void {
    // timeout required to avoid the dreaded 'ExpressionChangedAfterItHasBeenCheckedError'
    setTimeout(() => (this.disableAnimation = false));
  }

  setAchievements(player: Player) {
    let numberOfOrganized = 0;
    let numberOfWins = 0;
    const achievements = [] as AggregatedAchievement[];
    player.achievements.forEach(a => {
      let achievement = achievements[a.tournament.name] as AggregatedAchievement | undefined;
      if (!achievement) {
        achievement = {
          tournamentName: a.tournament.name,
          editions: [],
          impacts: [],
          ranks: [],
          gold: [],
          silver: [],
          bronze: []
        };
        achievements[a.tournament.name] = achievement;
      }
      achievement.editions.push(a.tournament.edition);
      achievement.impacts.push(a.impact);
      achievement.ranks.push(a.rank);

      if (a.impact === "participant") {
        if (a.rank === 1) {
          numberOfWins++;
          achievement.gold.push(a.tournament.edition);
        }
        else if (a.rank === 2) {
          achievement.silver.push(a.tournament.edition);
        }
        else if (a.rank === 2) {
          achievement.bronze.push(a.tournament.edition);
        }
      } else if (a.impact === "organizer") {
        numberOfOrganized++;
      }
    });

    this._achievements = { aggregatedAchievements: Object.values(achievements), numberOfOrganized, numberOfWins };
  }

  openLink(link: string) {
    window.open(link, "_blank");
  }

  name(player: Player) {
    let name = "";
    if (player) {
      if (player.firstName) {
        name += player.firstName;
      }
      if (player.nickName) {
        name += (name ? " " : "") + `"${player.nickName}"`;
      }
      if (player.lastName) {
        name += (name ? " " : "") + player.lastName;
      }
    }
    return name;
  }
}
