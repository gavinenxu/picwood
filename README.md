#Picture gallary app

This website use the web crawler to get image url, and store these into the mongodb, so every time scan the picture, we need the ajax request to fetch data from server. Then it needs time to render the picture, so just be patient.


###how to use

- Start mongodb

- Add modules 

```
npm install
```

- Start server

```
npm run server
```
The crawler has been scheduled each hour

- Start client 

```
npm run client
```

###liabary I use
- font-end

```
react
react-redux 
semantic-ui 
axios
```

- back-end

```
expressjs
mongodb
async
```