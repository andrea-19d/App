import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ExampleService } from '../../../core/service/example.service';
import { CommonModule } from '@angular/common';
import { Area } from '../../../models/area.model';
// import { ThingListComponent } from '../thing-list/thing-list'; // <-- Correct import

@Component({
  selector: 'app-area-list',
  imports: [CommonModule],
  templateUrl: './area-list.html',
  styleUrls: ['./area-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AreaListComponent implements OnInit {
  areas: Area[] = [];
  private service = ExampleService ? inject(ExampleService) : null;

  ngOnInit(): void {
    this.service?.getAreas().subscribe(
      (res: Area[]) => {
        this.areas = res;
        console.log('Areas loaded:', this.areas);
      },
      error => {
        console.error('Error loading areas:', error);
      }
    );
  }
}
