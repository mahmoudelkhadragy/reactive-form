import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'basic-form', component: ReactiveFormComponent },
  { path: 'nested-form', component: NestedFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
