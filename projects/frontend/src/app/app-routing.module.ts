import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  },
  {
    path: "player-list",
    loadChildren: () => import("./pages/player-list/player-list.module").then(m => m.FeatureListModule)
  },
  {
    path: "settings",
    loadChildren: () => import("./pages/settings/settings.module").then(m => m.SettingsModule)
  },
  {
    path: "**",
    redirectTo: "player-list"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
