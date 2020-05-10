import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FeatureListComponent } from "./player-list/player-list.component";

const routes: Routes = [
  {
    path: "",
    component: FeatureListComponent,
    data: { title: "pldb.menu.features" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureListRoutingModule {}
