import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Area } from '../../../models/area.model';
import { Thing } from '../../../models/thing.model';
import { ExampleService } from '../../../core/service/example.service';

@Component({
  selector: 'app-dashboard-async',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
})
export class DashboardComponent implements OnInit {
  areas: Area[] = [];
  things: Thing[] = [];
  private service = inject(ExampleService);

  ngOnInit() {
    this.service.getAreas().subscribe((areas: Area[]) => {
      this.areas = areas;
    });
    this.service.getThings().subscribe((things: Thing[]) => {
      this.things = things;
    });
  }

  getThingsForArea(areaId: number) {
    return this.things.filter(thing => thing.areaId === areaId);
  }
}
