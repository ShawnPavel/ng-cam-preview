import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
    { path: "", redirectTo: "/main-page", pathMatch: "full" },
    { path: "main-page", component: MainPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }