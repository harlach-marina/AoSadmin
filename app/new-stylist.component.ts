import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
	// selector: 'new-stylist',
	templateUrl: './app/new-stylist.component.html',
	directives: [ROUTER_DIRECTIVES]
})
export class NewStylistComponent {
	users = [
      		{
      			name: 'Maria Petrushina',
		      	date: '22/10/2016',
		      	styles: ['Lace', 'Romantic', 'Casual'],
		      	email: 'maria.petrushina@gmail.com',
		      	phone: '293342985',
		      	budget: '550 -750'
      		},
      		{
      			name: 'Ariana Piaffer',
		      	date: '21/10/2016',
		      	styles: ['Urban', 'Gothic'],
		      	email: 'ariana.piaffer@gmail.com',
		      	phone: '254324345',
		      	budget: '1000-1500'
      		}
      	]
}