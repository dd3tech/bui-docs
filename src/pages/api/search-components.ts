// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllPaths } from '@/utils/readFile'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
    data: string[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { search = '' } = req.query
    const data = getAllPaths(['es'], true) as string[]
    const newData = data.filter((path) => path.includes(search as string))
    res.status(200).json({ name: req.body, data: newData })
}