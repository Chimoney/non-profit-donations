export default async function handler(req, res) {
  const dev = process.env.NODE_ENV == 'development';

  const getPaymentID = (paymentID, useTestPaymentID) => {
    return useTestPaymentID && typeof paymentID?.test !== 'undefined'
      ? paymentID?.test
      : typeof paymentID?.production !== 'undefined'
      ? paymentID?.production
      : paymentID;
  };

  if (req.method === 'POST') {
    const {
      amount,
      currency = 'USD',
      payerEmail,
      walletID,
      redirect_url,
      useTestPaymentID,
      interledgerWalletAddress,
      NPOName,
    } = req.body;
    const apiKEY = process.env.CHIMONEY_API_SECRET;
    const apiKEYTest = process.env.CHIMONEY_API_SECRET_TEST;

    try {
      const redeemData = {};
      if (walletID) {
        redeemData.walletID = getPaymentID(walletID, useTestPaymentID);
      } else if (interledgerWalletAddress) {
        redeemData.interledgerWalletAddress = getPaymentID(
          interledgerWalletAddress,
          useTestPaymentID
        );
      }

      if (!walletID && !interledgerWalletAddress) {
        res.status(400).json({
          error: `Wallet ID is not set for this Organization in ${
            useTestPaymentID ? 'Test' : 'Production'
          } mode`,
        });
        return;
      }
      if (isNaN(amount) || amount <= 0) {
        res.status(400).json({
          error: 'Invalid amount',
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
          redeemData,
          meta: {
            NPOName: NPOName || 'Open Giving',
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
