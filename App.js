import React, { useState, useEffect } from 'react';

const transactions = [
    { month: 1, customerId: 'A', amount: 120 },
    { month: 1, customerId: 'B', amount: 75 },
    { month: 2, customerId: 'A', amount: 180 },
    { month: 2, customerId: 'B', amount: 60 },
    { month: 3, customerId: 'A', amount: 210 },
    { month: 3, customerId: 'B', amount: 150 },
];


function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulating API call
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(transactions);
            }, 1000);
        });
    };

    // Calculate reward points
    const calculatePoints = (amount) => {
        let points = 0;
        if (amount > 100) {
            points += (amount - 100) * 2 + 50;
        } else if (amount > 50) {
            points += amount - 50;
        }
        return points;
    };

    // Fetch data and process it
    useEffect(() => {
        fetchData().then((transactions) => {
            const pointsPerCustomer = {};
            transactions.forEach((transaction) => {
                const { customerId, month, amount } = transaction;
                if (!pointsPerCustomer[customerId]) {
                    pointsPerCustomer[customerId] = { total: 0, monthly: [0, 0, 0] };
                }
                const points = calculatePoints(amount);
                pointsPerCustomer[customerId].total += points;
                pointsPerCustomer[customerId].monthly[month - 1] += points;
            });
            setData(pointsPerCustomer);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                Object.keys(data).map((customerId) => (
                    <div key={customerId}>
                        <h3>Customer {customerId}</h3>
                        <p>Total points: {data[customerId].total}</p>
                        <ul>
                            {data[customerId].monthly.map((points, index) => (
                                <li key={index}>Month {index + 1}: {points} points</li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
