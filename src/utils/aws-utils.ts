import AWS from 'aws-sdk';
import { InvocationRequest, NamespacedFunctionName } from 'aws-sdk/clients/lambda';

AWS.config.update({region:process.env.REGION});
AWS.config.update({accessKeyId: process.env.AWSACCESSKEYID, secretAccessKey: process.env.SECRETACCESSKEY});

export const callAwsLamda = async (lamdaFunction: NamespacedFunctionName, payload: Object | String) => {
	const lambda = new AWS.Lambda();
	const params: InvocationRequest = {
		FunctionName: lamdaFunction,
		Payload: JSON.stringify(payload)
	};
	lambda.invoke(params, function(err: any, data: any) {
		if (err) {
			console.log('error', err, err.stack);
		}
		else {
			console.log(JSON.parse(data.Payload));
		}
	});    
};
