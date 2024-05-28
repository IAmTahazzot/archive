const bank = {
    account: {
        customer_name: 'Tahazzat',
        balance: 320,
        is_active: true,
    },

    name: 'City Bank LTD',
};

console.log(
    bank.account.balance,
    bank.account?.created_at ?? 'Not Found!'
)