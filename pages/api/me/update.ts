import type { NextApiRequest, NextApiResponse } from 'next';

export default function updateMe(req: NextApiRequest, res: NextApiResponse) {
	const { address } = req.body;
	if (req.method !== 'PATCH') {
		res.status(400).json({ Message: `I'm sorry, this endpoint only accept PATCH method.` });
	}
	if (req.method === 'PATCH' && req.headers.authorization === 'bearer 123' && !address) {
		res.status(200).json({ Message: `PATCH ME method it's working.` });
	}
	if (req.method === 'PATCH' && req.headers.authorization === 'bearer 123' && address) {
		res.status(200).json({ Message: `PATCH ME ADDRESS method it's working.` });
	}
}
