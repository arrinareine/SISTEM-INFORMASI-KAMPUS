import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { DataMahasiswaComponent } from './content/akademik/data-mahasiswa/data-mahasiswa.component';
import { DataDosenComponent } from './content/akademik/data-dosen/data-dosen.component';
import { DataStaffComponent } from './content/akademik/data-staff/data-staff.component';
import { JadwalAkademikComponent } from './content/akademik/jadwal-akademik/jadwal-akademik.component';
import { DataMakulComponent } from './content/akademik/data-makul/data-makul.component';
import { PengelolaJadwalComponent } from './content/akademik/pengelola-jadwal/pengelola-jadwal.component';
import { PengelolaSuratComponent } from './content/akademik/pengelola-surat/pengelola-surat.component';
import { PengelolaMakulKRSComponent } from './content/akademik/pengelola-makul-krs/pengelola-makul-krs.component';
import { RekapKehadiranComponent } from './content/akademik/rekap-kehadiran/rekap-kehadiran.component';
import { StatistikComponent } from './content/akademik/statistik/statistik.component';
import { AkunMahasiswaComponent } from './content/akademik/akun-mahasiswa/akun-mahasiswa.component';
import { AkunDosenComponent } from './content/akademik/akun-dosen/akun-dosen.component';
import { AkunStaffComponent } from './content/akademik/akun-staff/akun-staff.component';
import { KrsOnlineComponent } from './content/mahasiswa/krs-online/krs-online.component';
import { JadwalComponent } from './content/mahasiswa/jadwal/jadwal.component';
import { NilaiTranskripComponent } from './content/mahasiswa/nilai-transkrip/nilai-transkrip.component';
import { DosenPengampuComponent } from './content/mahasiswa/dosen-pengampu/dosen-pengampu.component';
import { PengajuanComponent } from './content/mahasiswa/pengajuan/pengajuan.component';
import { PresensiOnlineComponent } from './content/mahasiswa/presensi-online/presensi-online.component';
import { AbsensiComponent } from './content/mahasiswa/absensi/absensi.component';
import { TugasKuisComponent } from './content/mahasiswa/tugas-kuis/tugas-kuis.component';
import { ForumDiskusiComponent } from './content/mahasiswa/forum-diskusi/forum-diskusi.component';
import { BemComponent } from './content/mahasiswa/bem/bem.component';
import { ModulEbookComponent } from './content/mahasiswa/modul-ebook/modul-ebook.component';
import { UktComponent } from './content/mahasiswa/ukt/ukt.component';
import { RiwayatPembayaranComponent } from './content/mahasiswa/riwayat-pembayaran/riwayat-pembayaran.component';
import { PengumumanFakultasComponent } from './content/mahasiswa/pengumuman-fakultas/pengumuman-fakultas.component';
import { PengumumanUniversitasComponent } from './content/mahasiswa/pengumuman-universitas/pengumuman-universitas.component';
import { DataFakultasComponent } from './content/akademik/data-fakultas/data-fakultas.component';
import { DataProdiComponent } from './content/akademik/data-prodi/data-prodi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DataMahasiswaComponent,
    DataDosenComponent,
    DataStaffComponent,
    JadwalAkademikComponent,
    DataMakulComponent,
    PengelolaJadwalComponent,
    PengelolaSuratComponent,
    PengelolaMakulKRSComponent,
    RekapKehadiranComponent,
    StatistikComponent,
    AkunMahasiswaComponent,
    AkunDosenComponent,
    AkunStaffComponent,
    KrsOnlineComponent,
    JadwalComponent,
    NilaiTranskripComponent,
    DosenPengampuComponent,
    PengajuanComponent,
    PresensiOnlineComponent,
    AbsensiComponent,
    TugasKuisComponent,
    ForumDiskusiComponent,
    BemComponent,
    ModulEbookComponent,
    UktComponent,
    RiwayatPembayaranComponent,
    PengumumanFakultasComponent,
    PengumumanUniversitasComponent,
    DataFakultasComponent,
    DataProdiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
