import type { NextApiRequest, NextApiResponse } from 'next';

export default function getProduct(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(400).json({ Message: `I'm sorry, this endpoint only accept GET method.` });
	} else {
		res.status(200).json({
			Message: `GET PRODUCTID Method it's working`,
			query: req.query,
		});
	}
}
