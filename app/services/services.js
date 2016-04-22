var benefits = [
	{
		name: 'Knowledge',
		description: 'Keeping up to date with the changing world of technology.',
		items: [
		{title: 'myIEEE', body: 'A unique web portal that can provide you information about your membership.'},
		{title: 'IEEE.tv', body: 'Television programs about technology and engineering (accessible from myIEEE).'},
		{title: 'IEEE Collabratec', body: 'A tool that lets you connect with engineers and technical experts.'},
		{title: 'IEEE Spectrum', body: 'A monthly magazine about technology.'},
		{title: 'The Institute', body: 'A monthly news magazine.'}
		]
	},
	{
		name: 'Community',
		description: 'Belong to the community with members in 160 countries.',
		items: [
			{title: 'IEEE Technical Sections and Chapters', body: 'Connect with other members and participate in professional, technical and educational activities.'},
			{title: 'Student Branch', body: 'Opportunity to interact with students who are members.'},
			{title: 'IEEE mail aliases', body: 'With anti-virus and anti-spam (minombre@ieee.org).'},
			{title: 'IEEE discounts on products', body: 'Such as technical societies.'},
			{title: 'Volunteering', body: 'An opportunity to develop leadership and communication skills.'}
		]
	},
	{
		name: 'Professional',
		description: 'Train members to develop their careers.',
		items: [
			{title: 'IEEE Job Site', body: 'Job in America.'},
			{title: 'Carrer Alert', body: 'Weekly mails with tips to improve your work skills.' },
			{title: 'Competitions', body: 'Participate in world competitions.'}
		]
	}	
];

angular.module('app')
	.factory('IEEEService', [function(){
		return {
			getBenefits: function(){
				return benefits;
			}
		}
	}]);