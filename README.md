# Frontegg App

Simple React application with Frontegg authentication integration.

## Features
- Magic Link authentication
- User profile display
- Access token display
- Logout functionality

## Setup
1. Install dependencies:
```bash
npm install
```

2. Start the application:
```bash
npm start
```

## Configuration
The app uses Frontegg's embedded login with the following configuration:
```javascript
{
  baseUrl: 'https://app-l2lnyzy2pf0z.frontegg.com/oauth',
  clientId: '9febcb3e-ff8f-4ad4-a3f4-c9f283aa54aa',
  appId: '320a0936-b042-442c-bfc5-5b574f8f3695'
}
```
