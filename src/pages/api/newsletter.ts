import { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.MAILCHIMP_API_KEY
const LIST_ID = process.env.MAILCHIMP_LIST_ID
const DATACENTER = API_KEY?.split('-')[1]

function getRequestParams(email: string) {
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed'
  }

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`
  }

  return { url, data, headers }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: 'error' | 'success' }>
) {
  const email = req.body

  try {
    const { url, data, headers } = getRequestParams(email)

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        email_address: data.email_address,
        status: data.status
      })
    })

    if (!response.ok) res.status(400).json({ status: 'error' })

    res.status(200).json({ status: 'success' })
  } catch (err) {
    res.status(400).json({ status: 'error' })
  }
}
