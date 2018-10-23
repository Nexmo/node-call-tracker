# Calling Tracking Demo using Node and the Nexmo Voice API

[Prerequisites](#prerequisites) | [Installation](#installation) | [Setup](#setup) | [Running the App](#running-the-app) | [Using the App](#using-the-app)

This app used the Nexmo Voice API to demonstrate how a call tracking application could be built.

* The call is tracked
* Incoming calls are proxied to a destination number

## Prerequisites

You will need:

* At least one Nexmo Virtual Number (Phone Number)
* The [Nexmo CLI](https://github.com/Nexmo/nexmo-cli/) installed
* Somewhere to host this web app, Heroku or Your Local Machine with ngrok both work well

## Installation

```sh
git clone https://github.com/nexmo/node-call-tracking.git
cd node-call-tracking
npm install
```

## Setup

Rename the config file:

```sh
cp example.env .env
```

Fill in the values in `.env` as appropriate.

Edit the following command to use the URL of where your application is hosted. Then run the [Nexmo CLI](https://github.com/nexmo/nexmo-cli) command below and take note of the application universally unique identifier (UUID) it returns:

```sh
nexmo app:create demo-app --keyfile private.key http://your-url-here/track-call http://your-url-here/event
```

Buy numbers for calls that you would like to track. The following example buys the first available number in a given country by country code.

```sh
nexmo number:buy --country_code [YOUR_COUNTRY_CODE]
```

Link each number to the application by running a command like this with the application UUID and the number to link.

```sh
nexmo link:app [NUMBER] [app-id]
```

### Running the App

```sh
npm start
```

The application should be available on <http://localhost:5000>.

### Using the App

Call one of the virtual numbers that you rented. The call will be tracked and forwarded to the desired destination number.

You can see a list of tracked calls by accessing <http://localhost:5000/tracked-calls>.
