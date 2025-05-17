# KoinX Backend Assignment – May 2025

## Overview

This project consists of two Node.js microservices designed to fetch and serve cryptocurrency statistics:

- **api-server**: Fetches data from the CoinGecko API, stores it in MongoDB, and exposes endpoints to retrieve the latest statistics and calculate the standard deviation of prices.
- **worker-server**: Publishes an update event to a NATS message queue every 15 minutes, prompting the api-server to fetch and store new data.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- NATS
- Docker & Docker Compose

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
