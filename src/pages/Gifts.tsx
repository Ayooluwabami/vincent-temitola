import { Copy } from 'lucide-react';

const Gifts = () => {
  const accounts = [
    {
      country: "UK",
      bank: "Monzo",
      name: "VINCENT FASEYOSAN",
      sortCode: "04-00-03",
      accountNumber: "40036703"
    },
    {
      country: "Nigeria",
      bank: "First Bank",
      name: "Faseyosan Vincent",
      accountNumber: "3155792466"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-dancing text-5xl text-center text-rose-600 mb-6">Registry</h1>
        <p className="text-center text-gray-700 mb-12">Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have provided our account details below.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {accounts.map((account, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="text-2xl font-dancing text-rose-600 mb-4">{account.country} Account</div>

              <div>
                <div className="text-sm text-gray-500">Bank</div>
                <div className="text-lg font-medium">{account.bank}</div>
              </div>

              <div>
                <div className="text-sm text-gray-500">Account Name</div>
                <div className="text-lg font-medium">{account.name}</div>
              </div>

              {account.sortCode && (
                <div>
                  <div className="text-sm text-gray-500">Sort Code</div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-medium">{account.sortCode}</div>
                    <button
                      onClick={() => copyToClipboard(account.sortCode)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              )}

              <div>
                <div className="text-sm text-gray-500">Account Number</div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-medium">{account.accountNumber}</div>
                  <button
                    onClick={() => copyToClipboard(account.accountNumber)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Copy className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gifts;