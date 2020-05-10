import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { FeatureListComponent } from "./player-list/player-list.component";
import { FeatureListRoutingModule } from "./player-list-routing.module";
import { PlayerCardComponent } from "./player-card/player-card.component";

@NgModule({
  declarations: [FeatureListComponent, PlayerCardComponent],
  imports: [CommonModule, SharedModule, FeatureListRoutingModule]
})
export class FeatureListModule {}
