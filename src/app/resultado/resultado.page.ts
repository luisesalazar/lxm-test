import { Component, OnInit } from '@angular/core';
import { DppaService } from '../dppa.service';
import { Reports } from '../models/reports.model';
import { SoieReport } from '../models/soie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  reports: Reports;
  soieReport: SoieReport;
  eval_id: string;
  lexium_id: string;

  constructor(private dppaService: DppaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eval_id = this.route.snapshot.paramMap.get('eval_id');
    this.lexium_id = this.route.snapshot.paramMap.get('lexium_id');
    this.getSkillResults(this.lexium_id, this.eval_id);
  }

  getSkillResults(lexium_id: string, eval_id: string) {
    this.dppaService.getSkillsReport(lexium_id)
      .subscribe(
        (data: Reports) => {
          this.reports = data;
          this.soieReport = this.reports.evaluaciones[eval_id];
        }
      );
  }
}
