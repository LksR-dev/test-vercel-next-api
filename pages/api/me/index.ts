import type { NextApiRequest, NextApiResponse } from 'next';

export default function me(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.status(400).json({ Message: `I'm sorry, this endpoint only acept GET method.` });
	}
	if (req.method === 'GET' && req.headers.authorization === 'bearer 123') {
		res.status(200).json({ Message: `GET ME method it's working.` });
	}
}
