import { Component, OnInit } from '@angular/core';
import { Reports } from '../models/reports.model';
import { SoieReport } from '../models/soie.model';
import { DppaService } from '../dppa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  lexium_id: string;
  keys_evals: string[];
  reports: Reports;

  constructor(private dppaService: DppaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lexium_id = this.route.snapshot.paramMap.get('lexium_id');
    this.getSkillResults(this.lexium_id);
  }

  getSkillResults(lexium_id: string) {
    this.dppaService.getSkillsReport(lexium_id)
      .subscribe(
        (data: Reports) => {
          this.reports = data;
          this.keys_evals = Object.keys(this.reports.evaluaciones).filter(item => this.reports.evaluaciones[item]['nombre']);
        }
      );
  }

}
