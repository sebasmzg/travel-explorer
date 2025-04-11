import {Component, OnInit} from '@angular/core';
import {Country} from '../../../../models/country.model';
import {DestinationService} from '../../services/destination.service';

@Component({
  selector: 'app-destination-list',
  standalone: false,
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.scss'
})
export class DestinationListComponent implements OnInit {
  destinations: Country[] = [];

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.destinationService.getDestinations().subscribe({
      next: (data:Country[]) => {
        console.log('destinations: ', data);
        this.destinations = data;
      },
      error: (err: Error) => console.error('Error fetching destinations: ', err)
    });
  }
}
