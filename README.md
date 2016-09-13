# Calling Tracking Demo using Node and the Nexmo Voice API

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

Create the nexmo application, using the [Nexmo CLI](https://github.com/nexmo/nexmo-cli) and take note of the application universally unique identifier (UUID):

```sh
nexmo app:create demo-app --keyfile private.key http://example.com http://example.com
```

Rename the config file:

```sh
mv example.env .env
```

Fill in the values in `.env` as appropriate.

Buy numbers for calls that you would like to track. The following example buys the first available number in a given country by country code.

```sh
nexmo number:buy --country_code [YOUR_COUNTRY_CODE]
```

Link the virtual numbers to the app id with the Nexmo CLI:

```sh
nexmo link:app [NUMBER] [app-id]
```

Update the app to set the webhook urls to be your server instead of the example.com placeholders used at creation.

```sh
nexmo app:update ['app-id'] demo-app [your url]/answer [your url]/event
```

We recommend using [ngrok](https://ngrok.com/) to tunnel through to your locally running application. In which case the command above is likely to be something similar to:

```sh
nexmo app:update ['app-id'] demo-app https://___.ngrok.io/answer https://___.ngrok.io/event
```

Where `___` should be replaced with the `ngrok.io` subdomain you are assigned.

### Running the App

```sh
npm start
```

The application should be available on <http://localhost:5000>.

### Using the App

Call one of the virtual numbers that you rented. The call will be tracked and forwarded to the desired destination number.

You can see a list of tracked calls by accessing <http://localhost:5000/tracked-calls>.
