import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  title: string = '';
  constructor(private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit() {
    this.getTitle(this.router.url);
  }

  ngAfterViewInit() {}

  getTitle(path: string): boolean {
    return this.router.url === path;
  }
}
