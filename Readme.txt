Rewards Program - React Application
This is a React application that simulates an API call to fetch customer transactions data and calculates rewards points earned by each customer.

How It Works
The system awards points to customers based on each transaction:

A customer receives 2 points for every dollar spent over $100 in each transaction.
The customer receives 1 point for every dollar spent between $50 and $100 in each transaction.
For example, if a customer makes a $120 purchase, they receive 2*($120-$100) + 1*($100-$50) = 90 points.

Data Set
The application uses a simple dataset that represents the transactions for two customers during a three-month period.

const transactions = [
  { month: 1, customerId: 'A', amount: 120 },
  { month: 1, customerId: 'B', amount: 75 },
  { month: 2, customerId: 'A', amount: 180 },
  { month: 2, customerId: 'B', amount: 60 },
  { month: 3, customerId: 'A', amount: 210 },
  { month: 3, customerId: 'B', amount: 150 },
];


Each object in the dataset represents a transaction and includes the month of the transaction, the customerId, and the transaction amount.

Application Setup
The main component of the application is Rewards. It uses React's useState and useEffect hooks to manage state and handle side effects.

On component mount, the useEffect hook is triggered to fetch the transaction data and calculate the rewards points for each customer.

An asynchronous function fetchData simulates an API call to fetch the data. It returns a promise that resolves after 1 second with the transactions data.

The calculatePoints function calculates the points for each transaction based on the provided rules.

The useEffect hook processes each transaction, calculates the points, and updates the state with the total and monthly points for each customer.

Rendering
The component initially displays a "Loading..." message while it's fetching the data.

Once the data is loaded, it renders a list of customers. For each customer, it displays the total points and a list of points earned per month.

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


How to Run
Install Node.js and npm if you haven't already. You can download them from here: https://nodejs.org/.

Clone or download the repository.

Navigate to the repository folder in your terminal.

Install the dependencies by running the following command:
npm install
Start the development server by running:
npm start


The application should now be running on http://localhost:3000.

Open your browser and visit the above URL to view the application.

Please note: This project was bootstrapped with Create React App.