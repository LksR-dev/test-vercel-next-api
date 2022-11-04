import type { NextApiRequest, NextApiResponse } from 'next';

export default function authToken(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		res.status(400).json({ Message: `I'm sorry, this endpoint only accept POST method.` });
	} else {
		res.status(200).json({ Message: `POST AUTH TOKEN method it's working.` });
	}
}
