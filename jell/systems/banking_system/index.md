# Accounting System Documentation For Mobile Application Platform

## Introduction

The Accounting system for the mobile application platform is a sub system for Mobile Application for manage payments, transactions, wallets, buy credits in the app, etc.

## Overview

### Ledgers

Record real time money movement on a programmable financial ledger built for scale and speed.

**Features**:

- **Real-time** - Transactions are recorded in real-time and are immediately available for reporting and analysis.
- **Virtual accounts** - Create virtual accounts for each of your customers to track their balances and transactions.
- **Hold and move any asset** - Hold and move any asset, including fiat currencies, cryptocurrencies, and stablecoins.
- **Fine grained money states** - Track the state of money in your system with fine grained money states.
- **Multi-currency** - Support multiple currencies in your system.
- **Sub Ledgers** - Create sub ledgers to track the movement of money between accounts.

**Ledger data model**:

- **Ledger** - A ledger is a collection of accounts. Each ledger has a unique name and currency.
- **Account** - An account is a virtual account that holds money. Each account has a unique name and is associated with a ledger.
- **Transaction** - A transaction is a movement of money between accounts. Each transaction has a unique id and is associated with a ledger.
- **Transaction Line** - A transaction line is a record of a movement of money between accounts. Each transaction line is associated with a transaction.

**Ledgers include**:

- **Sales Ledger** - Records accounts receivable and accounts payable transactions, This ledger records the financial transactions related to the sale of goods and services.
- **Purchase Ledger** - Records transactions related to the purchase of goods and services.
- **General Ledger** - Records all the financial transactions of a business.

### Wallets

Wallets are used to store money for a user. A wallet is associated with a user and a ledger. A user can have multiple wallets associated with different ledgers.

### Transactions

Transactions are used to move money between accounts. A transaction is associated with a ledger and has one or more transaction lines. Each transaction line is associated with an account and has a debit or credit amount.

### Transaction Lines

Transaction lines are used to record the movement of money between accounts. A transaction line is associated with an account and has a debit or credit amount.

## Business Models

### App Credits

App credits are used to purchase digital goods and services in the app. App credits are purchased by the user and are stored in the user's wallet.

### App Credit Purchase

1. The user wallet created when the user signs up for the app.
2. The user purchases app credits using a payment method.
3. The transaction is recorded in the sales ledger.
4. The app credits are added to the user's wallet.

### Partner Earnings

1. The partner wallet created when the partner signs up for the app.
2. The partner earns money from the app.
3. When the user add a paid post the partner earns money for each buy.
4. The transaction is recorded in the partner ledger.
5. The partner earnings are added to the partner's wallet.

### Partner Payouts

1. When the partner wants to withdraw money from the app.
2. The partner make a payout request.
3. The transaction is recorded in the partner ledger.
4. The partner earnings are removed from the partner's wallet.

### Commission Earnings

1. Commission earnings are earned when a user makes a purchase in the app for paid posts.
2. The commission earnings are added to the commission wallet.

### Taxes

1. Taxes are deducted from the partner earnings when payout is made.
2. The taxes are added to the tax wallet.

### Refunds

1. Refunds are issued when a user requests a refund for a purchase.
2. The refund is recorded in the sales ledger.
3. The refund amount is deducted from the user's wallet.
4. The refund amount is deducted from the commission wallet.
5. The refund amount is deducted from the partner wallet.
6. The refund amount is deducted from the tax wallet.

### Withdrawals

1. Withdrawals are issued when a user requests a withdrawal for a purchase.
2. The withdrawal is recorded in the sales ledger.
3. The withdrawal amount is deducted from the user's wallet.
4. The withdrawal amount is deducted from the commission wallet.
5. The withdrawal amount is deducted from the partner wallet.
6. The withdrawal amount is deducted from the tax wallet.

### Transfers

1. Transfers are issued when a partner requests a transfer from earnings to wallet.
2. The transfer is recorded in the partner ledger.
3. The transfer amount is deducted from the partner's earnings.
4. The transfer amount is added to the partner's wallet.

The Accounting System for the Mobile Application Platform is a comprehensive financial management system designed to handle payments, transactions, wallets, and various financial operations within a mobile application. Below is a technical overview of the system, including its database structure and key features:

## Database Structure

### Tables

1. **Ledger**

   - Fields:
     - `ledger_id` (Primary Key): Unique identifier for the ledger.
     - `name`: Name of the ledger.
     - `currency`: Currency associated with the ledger.

2. **Account**

   - Fields:
     - `account_id` (Primary Key): Unique identifier for the account.
     - `name`: Name of the account.
     - `ledger_id` (Foreign Key): Reference to the ledger this account belongs to.

3. **Transaction**

   - Fields:
     - `transaction_id` (Primary Key): Unique identifier for the transaction.
     - `ledger_id` (Foreign Key): Reference to the ledger associated with this transaction.
     - `timestamp`: Timestamp of the transaction.
     - `description`: Description of the transaction.

4. **TransactionLine**

   - Fields:
     - `transaction_line_id` (Primary Key): Unique identifier for the transaction line.
     - `transaction_id` (Foreign Key): Reference to the transaction this line is associated with.
     - `account_id` (Foreign Key): Reference to the account involved in this line.
     - `debit_amount`: Amount debited in this transaction line.
     - `credit_amount`: Amount credited in this transaction line.

5. **Wallet**
   - Fields:
     - `wallet_id` (Primary Key): Unique identifier for the wallet.
     - `user_id` (Foreign Key): Reference to the user associated with this wallet.
     - `ledger_id` (Foreign Key): Reference to the ledger associated with this wallet.

### Ledger Types

- **Sales Ledger**: Records accounts receivable and accounts payable transactions.
- **Purchase Ledger**: Records transactions related to the purchase of goods and services.
- **General Ledger**: Records all the financial transactions of the business.

### Business Models and Transactions

#### App Credits

- **App Credit Purchase**
  - Create a user wallet when a user signs up for the app.
  - Record the purchase of app credits using a payment method in the sales ledger.
  - Add the purchased app credits to the user's wallet.

#### Partner Earnings

- **Partner Earnings**

  - Create a partner wallet when a partner signs up for the app.
  - Earn money when a user adds a paid post, and record it in the partner ledger.
  - Add the partner earnings to the partner's wallet.

- **Partner Payouts**
  - Allow partners to make payout requests.
  - Record the payout transaction in the partner ledger.
  - Deduct partner earnings from the partner's wallet.

#### Commission Earnings

- **Commission Earnings**
  - Earn commissions when a user makes a purchase in the app for paid posts.
  - Add commission earnings to the commission wallet.

#### Taxes

- **Taxes**
  - Deduct taxes from partner earnings when payouts are made.
  - Add the collected taxes to the tax wallet.

#### Refunds

- **Refunds**
  - Issue refunds when a user requests a refund for a purchase.
  - Record the refund transaction in the sales ledger.
  - Deduct the refund amount from the user's wallet, commission wallet, partner wallet, and tax wallet.

#### Withdrawals

- **Withdrawals**
  - Issue withdrawals when a user requests a withdrawal for a purchase.
  - Record the withdrawal transaction in the sales ledger.
  - Deduct the withdrawal amount from the user's wallet, commission wallet, partner wallet, and tax wallet.

#### Transfers

- **Transfers**
  - Allow partners to request transfers from earnings to their wallet.
  - Record the transfer transaction in the partner ledger.
  - Deduct the transfer amount from the partner's earnings and add it to their wallet.

This database structure and business logic provide a robust foundation for managing financial operations within the mobile application platform, including transactions, wallets, earnings, taxes, refunds, and withdrawals. It ensures real-time tracking of financial data and supports multiple ledgers and currencies for flexibility and scalability.

## Demo Data

### Ledger Table

| ledger_id | name              | currency |
| --------- | ----------------- | -------- |
| 1         | Sales Ledger      | USD      |
| 2         | Purchase Ledger   | USD      |
| 3         | General Ledger    | USD      |
| 4         | Partner Ledger    | USD      |
| 5         | Commission Ledger | USD      |
| 6         | Tax Ledger        | USD      |

### Account Table

| account_id | name              | ledger_id |
| ---------- | ----------------- | --------- |
| 101        | User Wallet       | 1         |
| 102        | User Wallet       | 2         |
| 103        | User Wallet       | 3         |
| 201        | Partner Wallet    | 4         |
| 301        | Commission Wallet | 5         |
| 401        | Tax Wallet        | 6         |

### Transaction Table

| transaction_id | ledger_id | timestamp           | description         |
| -------------- | --------- | ------------------- | ------------------- |
| 1001           | 1         | 2023-09-15 10:00:00 | App Credit Purchase |
| 1002           | 4         | 2023-09-16 14:30:00 | Partner Earnings    |
| 1003           | 5         | 2023-09-17 12:45:00 | Commission Earnings |
| 1004           | 6         | 2023-09-18 09:15:00 | Tax Deduction       |
| 1005           | 1         | 2023-09-19 16:20:00 | Refund              |
| 1006           | 1         | 2023-09-20 11:10:00 | Withdrawal          |
| 1007           | 4         | 2023-09-21 08:00:00 | Partner Payout      |
| 1008           | 4         | 2023-09-22 15:30:00 | Partner Transfer    |
| 1009           | 1         | 2023-09-23 17:45:00 | App Credit Purchase |

### TransactionLine Table

| transaction_line_id | transaction_id | account_id | debit_amount | credit_amount |
| ------------------- | -------------- | ---------- | ------------ | ------------- |
| 2001                | 1001           | 101        | 100.00       | 0.00          |
| 2002                | 1001           | 301        | 0.00         | 100.00        |
| 2003                | 1002           | 201        | 200.00       | 0.00          |
| 2004                | 1003           | 301        | 50.00        | 0.00          |
| 2005                | 1004           | 401        | 25.00        | 0.00          |
| 2006                | 1005           | 101        | 0.00         | 50.00         |
| 2007                | 1005           | 301        | 0.00         | 50.00         |
| 2008                | 1006           | 101        | 0.00         | 75.00         |
| 2009                | 1007           | 201        | 0.00         | 50.00         |
| 2010                | 1007           | 301        | 0.00         | 50.00         |
| 2011                | 1008           | 201        | 100.00       | 0.00          |
| 2012                | 1008           | 201        | 0.00         | 100.00        |
| 2013                | 1009           | 101        | 50.00        | 0.00          |
| 2014                | 1009           | 301        | 0.00         | 50.00         |

### Wallet Table

| wallet_id | user_id | ledger_id |
| --------- | ------- | --------- |
| 100       | 1       | 1         |
| 101       | 2       | 1         |
| 102       | 3       | 1         |
| 201       | 4       | 4         |
| 301       | 5       | 5         |
| 401       | 6       | 6         |

This demo data provides a snapshot of the ledger, account, transaction, transaction line, and wallet tables in your accounting system, showcasing how data is organized and associated within the system. The specific values can be adjusted to match your application's requirements and real-world scenarios.
