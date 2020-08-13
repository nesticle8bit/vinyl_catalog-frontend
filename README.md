# Vinyl Catalog App

![Vinyl Catalog](https://user-images.githubusercontent.com/1715022/89718994-6b2bc900-d989-11ea-9092-089c6f7868ea.gif)

## Last.fm Integration
- Create an account in [last.fm](https://www.last.fm/api/) and create an app to generate an api key
- Add the api key in environment.ts:

```javascript
export const environment = {
  production: false,
  api: 'http://localhost:56031/api',
  lastFmApiKey: 'LAST_FM_API_KEY'
};
```

## Build
- In CMD just run this command:

```bash
ng serve
```

## Execute API
- Download and clone this repository [vinyl_catalog-backend](https://github.com/NESTicle/vinyl_catalog-backend) and run it with visual studio:

## Demo
[http://195.201.17.217:4081/](http://195.201.17.217:4081/)

---

```cmd
- creating new app
ng new vinylCatalogApp --legacyBrowsers=true --routing=true --skipGit=true --skipTests=true --style=scss --verbose=true
```
