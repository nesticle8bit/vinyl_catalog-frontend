# Vinyl Catalog App

![Vinyl Catalog](https://user-images.githubusercontent.com/1715022/90344205-14ec0500-dfdd-11ea-82a3-b3d12a1881ce.gif)

## Login
![Login](https://user-images.githubusercontent.com/1715022/90343721-c5a3d580-dfd8-11ea-8068-8ef224ba55c5.png)

## Community
![Community](https://user-images.githubusercontent.com/1715022/90961752-a8f01d80-e470-11ea-9123-aeae10fee698.png)

## Demo
[https://vinylcatalog.club/](https://vinylcatalog.club/)

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

---

```cmd
ng new vinylCatalogApp --legacyBrowsers=true --routing=true --skipGit=true --skipTests=true --style=scss --verbose=true
```
