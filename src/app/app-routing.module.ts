import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicReactiveFormComponent } from './components/dynamic-reactive-form/dynamic-reactive-form.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'basic-form', component: ReactiveFormComponent },
  { path: 'nested-form', component: NestedFormComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
  { path: 'dynamic-reactive-form', component: DynamicReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
