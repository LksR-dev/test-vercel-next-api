import type { NextApiRequest, NextApiResponse } from 'next';

export default function ipn(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST' || req.headers.authorization !== 'bearer 123') {
		res.status(400).json({
			Message: `I'm sorry, this endpoint only accept POST method or missing/error authorization token.`,
		});
	} else {
		res.status(200).json({
			Message: `POST IPN Method it's working`,
		});
	}
}
