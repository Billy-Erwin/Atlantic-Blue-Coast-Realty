import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'abc-social-media-wrapper',
	templateUrl: './abc-social-media-wrapper.component.html',
	styleUrls: ['./abc-social-media-wrapper.component.css']
})

export class AbcSocialMediaWrapperComponent implements OnInit {
	socialMediaLinks = [];
	ericSocialMediaLinks = [];
	slogan = 'Real estate... easy as A B C';
	popoverTitle = '<div class="myPopTitle">Contact Us</div>';
	model = {
		email: '',
		phoneNumber: '',
		fullName: '',
		emailMessage: ''
	};


	constructor() { }

	ngOnInit() {
		this.socialMediaLinks = [
			{class: 'contactUs', href: '#', displayText: 'Atlantic Blue Coast'},
			{class: 'fa fa-facebook', href: 'http://facebook.com/AtlanticBlueCoast'},
			{class: 'fa fa-twitter', href: 'http://twitter.com/ABlueCoastReal'},
			{class: 'fa fa-instagram', href: 'http://instagram.com/AtlanticBlueCoast'}
		];

		this.ericSocialMediaLinks = [
			{class: 'contactUs', href: '#', displayText: 'Eric D Hill'},
			{class: 'fa fa-facebook', href: 'http://facebook.com/erichillreal'},
			{class: 'fa fa-twitter', href: 'http://twitter.com/erichillreal'},
			{class: 'fa fa-instagram', href: 'http://instagram.com/erichillreal'}
		];


		$(function () {
			var myDefaultWhiteList = ($.fn as any).tooltip.Constructor.Default.whiteList
			myDefaultWhiteList.form = ['(ngSubmit)', 'ngSubmit'];
			myDefaultWhiteList.div = ['class'];
			myDefaultWhiteList.input = ['placeholder', 'class', 'style', 'type', 'id', 'aria-describedby'];
			myDefaultWhiteList.button = ['class', 'onclick', 'id', 'type'];

			let templateStuff = `
			<script>
			</script>
				<form id="popover-emailForm" (ngSubmit)="submit()">
					<div class="form-group">
						<input type="text" class="form-control" id="popover-fullName" placeholder="Full name">
					</div>
					<div class="form-group">
						<input type="email" class="form-control" id="popover-email" aria-describedby="emailHelp" placeholder="Enter email">
						<small id="popover-emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div class="form-group">
						<input type="number" class="form-control" id="popover-phoneNumber" placeholder="Phone number">
					</div>
					<div class="form-group">
						<input type="text" class="form-control" id="popover-emailMessage" placeholder="I am interested in ABC Realty!">
					</div>
					<button id="popover-submitButton" type="submit" class="btn btn-primary">Send</button>
				</form>
			`;

			($('#slogan') as any).popover(
				{content: templateStuff}
			);
			$('#popover-submitButton').on('click', data => {
				console.log('oh my lord...');
			});
			$('#popover-emailForm').submit(event, data => {
				event.stopPropagation();
				console.log('oh my lord...');
			});
		});
	}
	submit(){
		console.log('submitting form');
	}
}
