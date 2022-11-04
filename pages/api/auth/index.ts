import type { NextApiRequest, NextApiResponse } from 'next';

export default function auth(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.status(400).json({ Message: `I'm sorry, this endpoint only acept POST method.` });
	} else {
		res.status(200).json({ Message: `POST AUTH method it's working.` });
	}
}
