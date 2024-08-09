export const getBalance = async (token) => {
    const response = await fetch('https://localhost:7106/users/auth/balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ token }),
    });

    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Failed to fetch balance');
    }
};
