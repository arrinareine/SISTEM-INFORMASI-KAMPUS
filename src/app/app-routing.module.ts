import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './content/home/home.component';
import { AuthGuard } from './auth/guard.guard';
// Akademik
import { DataMahasiswaComponent } from './content/akademik/data-mahasiswa/data-mahasiswa.component';
import { DataDosenComponent } from './content/akademik/data-dosen/data-dosen.component';
import { DataFakultasComponent } from './content/akademik/data-fakultas/data-fakultas.component';
import { DataProdiComponent } from './content/akademik/data-prodi/data-prodi.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'data-mahasiswa', component: DataMahasiswaComponent },
    { path: 'data-dosen', component: DataDosenComponent },
    { path: 'data-fakultas', component: DataFakultasComponent },
    { path: 'data-prodi', component: DataProdiComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
