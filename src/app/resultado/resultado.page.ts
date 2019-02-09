import { Component, OnInit } from '@angular/core';
import { DppaService } from '../dppa.service';
import { Reports } from '../models/reports.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  skillReport: object;

  constructor(private dppaService: DppaService) { }

  ngOnInit() {
    this.getSkillResults('94062');
  }

  getSkillResults(lexium_id: string) {
    this.skillReport = this.dppaService.getSkillsReport(lexium_id).subscribe((data: Reports) => this.skillReport = data);
  }
}
