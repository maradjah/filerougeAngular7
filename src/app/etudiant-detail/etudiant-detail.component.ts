import {Component, Input, OnInit} from '@angular/core';
import {Etudiant} from '../Model/etudiant';

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.component.html',
  styleUrls: ['./etudiant-detail.component.css']
})
export class EtudiantDetailComponent implements OnInit {

  @Input() etudiant: Etudiant;

  constructor() { }

  ngOnInit() {
  }

}
