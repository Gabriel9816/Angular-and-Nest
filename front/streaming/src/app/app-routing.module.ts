import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamingComponent } from './components/streaming/streaming.component';

const routes: Routes = [{ path: '', component: StreamingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
