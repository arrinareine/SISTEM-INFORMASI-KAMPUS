import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-mahasiswa',
  templateUrl: './data-mahasiswa.component.html',
  styleUrls: ['./data-mahasiswa.component.css']
})
export class DataMahasiswaComponent implements OnInit {
  mahasiswa_type: string = '';

  constructor() {
    this.mahasiswa_type = '';
  }

  ngOnInit(): void {
    this.setDefaultMahasiswaType();
  }

  setDefaultMahasiswaType() {
    this.mahasiswa_type = 'reguler';
  }

  setMahasiswaType(type: string) {
    this.mahasiswa_type = type;
  }

  fakultas: string = '';

  setFakultas(fakultas: string) {
    this.fakultas = fakultas;
  }
}
