import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AlphaApi implements ICredentialType {
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-name-uppercase-first-char
	name = 'AlphaApi';
	displayName = 'Alpha API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
}
