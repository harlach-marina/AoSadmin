import { Component, Input } from '@angular/core';

@Component({
  // selector: 'discon-req',
  templateUrl: './app/requests-component.html'
})
export class RequestsComponent {
	users = [
      		{
      			name: 'Maria Petrushina',
		      	date: '22/10/2016',
		      	styles: ['Lace', 'Romantic', 'Casual'],
		      	email: 'maria.petrushina@gmail.com',
		      	description: "No sense to create outfit for her. She haven't answered my calls for a long time.",
		      	stylistName: "Dyana Gurtskaya",
		      	phone: '293342985',
		      	budget: '234',
      		},
      		{
      			name: 'Ariana Piaffer',
		      	date: '02/10/2016',
		      	styles: ['Urban', 'Gothic'],
		      	email: 'ariana.piaffer@gmail.com',
		      	description: "No sense to create outfit for her. She haven't answered my calls for a long time.",
		      	stylistName: "Dyana Gurtskaya",
		      	phone: '254324345',
		      	budget: '1009',
      		}
      	]
}