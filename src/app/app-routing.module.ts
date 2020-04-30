import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
