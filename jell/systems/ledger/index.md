# Ledger for money-moving platforms

## Overview

The ledger is a system for tracking the movement of money between accounts. It is used by the [bank](/systems/bank) and [exchange](/systems/exchange) systems to track the movement of money between accounts.

## Ledger

The ledger is a table with the following columns:

- `id`: The unique identifier of the ledger entry.
- `account_id`: The unique identifier of the account that the money is moving from or to.
- `amount`: The amount of money that is moving.
- `currency`: The currency of the money that is moving.
- `type`: The type of the ledger entry. It can be either `deposit` or `withdrawal`.
- `created_at`: The date and time when the ledger entry was created.

### Ledger entry

A ledger entry is a record of the movement of money between accounts. It is created by the [bank](/systems/bank) and [exchange](/systems/exchange) systems when money is deposited or withdrawn from an account.

- ledger entry types
- ledger entry creation
- ledger entry deletion
- ledger entry update
- ledger entry retrieval


## 