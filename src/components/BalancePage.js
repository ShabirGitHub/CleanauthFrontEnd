import React, { useEffect, useState } from 'react';
import { getBalance } from '../api/balance';

function BalancePage() {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            const token = localStorage.getItem('token');
            try {
                const data = await getBalance(token);
                setBalance(data.balance);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div className="balance-container">
            <h2>Your Balance</h2>
            <p>{balance} GBP</p>
        </div>
    );
}

export default BalancePage;
