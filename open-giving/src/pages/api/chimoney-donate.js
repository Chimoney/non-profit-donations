export default async function handler(req, res) {
  const dev = process.env.NODE_ENV == 'development';

  if (req.method === 'POST') {
    const {
      amount,
      currency = 'USD',
      payerEmail,
      walletID: walletIDFromBody,
      redirect_url,
      useTestPaymentID,
    } = req.body;
    const apiKEY = process.env.CHIMONEY_API_SECRET;
    const apiKEYTest = process.env.CHIMONEY_API_SECRET_TEST;

    try {
      const walletID =
        useTestPaymentID && typeof walletIDFromBody?.test !== 'undefined'
          ? walletIDFromBody?.test
          : typeof walletIDFromBody?.production !== 'undefined'
          ? walletIDFromBody?.production
          : walletIDFromBody;

      if (!walletID) {
        res.status(400).json({
          error: `Wallet ID is not set for this Organization in ${
            useTestPaymentID ? 'Test' : 'Production'
          } mode`,
        });
        return;
      }
      const server = dev
        ? 'http://localhost:4600/v0.2'
        : process.env.STRIPE_DOMAIN?.includes('sandbox.chimoney.io') ||
          useTestPaymentID
        ? 'https://api-v2-sandbox.chimoney.io/v0.2'
        : 'https://api.chimoney.io/v0.2';

      const headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        'X-api-key':
          useTestPaymentID && typeof apiKEYTest !== 'undefined'
            ? apiKEYTest
            : apiKEY,
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
        res.status(500).json({
          error: data.message || 'Failed to initiate Chimoney donation',
        });
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
