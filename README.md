# NestJS + Hasura Workshop

Demonstrating building complex applications with integration between [Hasura](https://hasura.io/) and [NestJS](https://nestjs.com/) using

- Hasura Actions
- Remote Schemas
- Event Triggers
- Scheduled Events

## The App

A fictional digital marketplace where users can exchange knowledge for coins. Users are given 50 coins upon registration. They can put up items with secret content in the marketplace to be purchased by other users.

The following rules apply:

- Upon registration a user can create items to be sold on the marketplace
- Registered users can view public information about all the items in the marketplace but they won't be able to see the item's secret content unless they purchase it using their inventory of coins
- Upon purchase the cost of the item will be subtracted from the buyer's coins and added to the seller's account. 1 coin will be kept by the application as a processing fee on top of every purchase
  - Purchases need to properly leverage transactions to ensure that a user actually has enough coins, otherwise no account balances are modified

## Notes

The master branch currently contains the finished project. If you'd like to follow along checkout the `starting` branch after cloning this repository.

## Getting Started

Everything you need is included in this repository

- A working Docker Compose setup with Hasura and Postgres
- The Hasura CLI installed as a package dependency
- SQL migrations to setup the intial database objects
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) for typesafe backend interactions
- Convenience scripts for interacting with the various services

Clone the repo

```shell
git clone git@github.com:WonderPanda/hasura-nestjs-workshop.git
```

Install dependencies

```shell
yarn
```

Start services

```
docker-compose up -d
```

Run migrations

```
yarn hasura migrate apply
```

Apply metadata

```
yarn hasura metadata apply
```

Start the application

```
yarn start:dev
```

## Join the Discussion

Please feel free to use [Github Discussions](https://github.com/WonderPanda/hasura-nestjs-workshop/discussions) to ask questions, propose changes, etc or connect with me on Twitter [@WonderPandaDev](https://twitter.com/WonderPandaDev)
