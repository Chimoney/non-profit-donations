export default async function handler(req, res) {
  const dev = process.env.NODE_ENV == 'development';

  const server = dev
    ? 'http://localhost:4600/v0.2'
    : process.env.STRIPE_DOMAIN?.includes('sandbox.chimoney.io')
    ? 'https://api-v2-sandbox.chimoney.io/v0.2'
    : 'https://api.chimoney.io/v0.2';
  console.log({ dev, server });

  if (req.method === 'POST') {
    console.log({ body: req.body });
    const {
      amount,
      currency = 'USD',
      payerEmail,
      walletID,
      redirect_url,
    } = req.body;
    const apiKEY = process.env.CHIMONEY_API_SECRET;

    try {
      const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        'X-api-key': apiKEY,
      };
      const config = {
        method: 'POST',
        headers,
        body: JSON.stringify({
          amount,
          currency,
          debitCurrency: currency,
          payerEmail,
          paymentMethod: 'chimoney',
          type: 'donation',
          redirect_url,
          redeemData: {
            walletID,
          },
        }),
      };

      const response = await fetch(`${server}/payment/initiate`, config);

      const data = await response.json();

      if (response.ok) {
        res.status(200).json(data);
      } else {
        throw new Error(data.message || 'Failed to initiate Chimoney donation');
      }
    } catch (error) {
      console.error('Chimoney donation failed:', error);
      res.status(500).json({ error: 'Failed to initiate donation' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
