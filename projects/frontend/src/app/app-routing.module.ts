import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  },
  {
    path: "about",
    loadChildren: () => import("./pages/about/about.module").then(m => m.AboutModule)
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
    path: "examples",
    loadChildren: () => import("./pages/examples/examples.module").then(m => m.ExamplesModule)
  },
  {
    path: "**",
    redirectTo: "about"
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
