import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
export class Alpha implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Alpha',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-name-miscased
		name: 'Alpha',
		icon: 'file:alpha_icon.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Alpha ERP API',
		defaults: {
			name: 'Alpha',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'AlphaERPApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.alphaerp.com/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Astronomy Picture of the Day',
						value: 'astronomyPictureOfTheDay',
					},
					{
						name: 'Mars Rover Photo',
						value: 'marsRoverPhotos',
					},
				],
				default: 'astronomyPictureOfTheDay',
			}
		]
	};
}
