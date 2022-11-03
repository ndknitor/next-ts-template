import type { NextApiRequest, NextApiResponse } from 'next';
type Data = {
    message : string;
    revalidated: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' , revalidated : false });
    }
    try {
        const url = req.query[process.env.REVALIDATE_QUERY_NAME as string];
        if (url && url.length == 1) {
            await res.revalidate(url[0]);
            return res.json({ message : "Revalidate successfully" , revalidated: true });
        }
        else
        {
            return res.status(400).json({ message: 'Invalid url' , revalidated : false });
        }
    } catch (err) {
        return res.status(202).send({message : "Error on revalidating", revalidated : false});
    }
}
