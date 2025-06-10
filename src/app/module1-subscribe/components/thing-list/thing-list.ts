import { Component, OnInit, inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { ExampleService } from '../../../core/service/example.service';
import { Thing } from '../../../models/thing.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thing-list',
  templateUrl: './thing-list.html',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThingListComponent implements OnInit {
  things: Thing[] = [];
  private service = inject(ExampleService);
  @Input() areaId?: number;

  ngOnInit(): void {
    this.service.getThings().subscribe(
      (res: Thing[]) => {
        this.things = this.areaId ? res.filter(thing => thing.areaId === this.areaId) : res;
        console.log('Things loaded:', this.things);
      },
      error => {
        console.error('Error loading things:', error);
      }
    );
  }
}
