import type { NextApiRequest, NextApiResponse } from 'next';

export default function searchProduct(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(400).json({ Message: `I'm sorry, this endpoint only accept GET method.` });
	} else {
		res.status(400).json({ Message: `GET SEARCH method it's working`, query: req.query });
	}
}
