import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  enrollment_akademik: boolean = false;
  enrollment_mahasiswa: boolean = false;
  defaultTheme: string = localStorage.getItem('tablerTheme') || 'dark';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getEnrollmentRole();
  }

  getEnrollmentRole() {
    const enrollment_role = localStorage.getItem('enrollment_role');
    if (enrollment_role === 'enrollment_akademik') {
      this.enrollment_akademik = true;
    } else if (enrollment_role === 'enrollment_mahasiswa') {
      this.enrollment_mahasiswa = true;
    }
  }

  toggleTheme() {
    const theme = document.body.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      document.body.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('tablerTheme', 'light');
      window.location.reload();
    } else {
      document.body.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('tablerTheme', 'dark');
      window.location.reload();
    }
  }
}
