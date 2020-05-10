import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";
import { Player, AchievementImpact } from "../player-list.data";

interface AggregatedAchievement {
  tournamentName: string;
  editions: string[];
  impacts: AchievementImpact[];
  ranks: (number | undefined)[];
}

@Component({
  selector: "pldb-player-card",
  templateUrl: "./player-card.component.html",
  styleUrls: ["./player-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerCardComponent implements OnInit {
  _player: Player;
  achievements: AggregatedAchievement[];

  @Input()
  set player(player: Player) {
    this._player = player;
    this.setAchievements(player);
  }

  constructor() {}

  ngOnInit(): void {}

  setAchievements(player: Player) {
    this.achievements = [];
    player.achievements.forEach(a => {
      let achievement = this.achievements[a.tournament.name] as AggregatedAchievement | undefined;
      if (!achievement) {
        achievement = {
          tournamentName: a.tournament.name,
          editions: [],
          impacts: [],
          ranks: []
        };
        this.achievements[a.tournament.name] = achievement;
      }
      achievement.editions.push(a.tournament.edition);
      achievement.impacts.push(a.impact);
      achievement.ranks.push(a.rank);
    });
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
