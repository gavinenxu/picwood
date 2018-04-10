module.exports = {
    host:process.env.HOST || '127.0.0.1',
    port:process.env.PORT ||(process.env.NODE_ENV === 'production'?8080:3000),
    apiHost:process.env.APIHOST || '127.0.0.1',
    apiPort:process.env.APIPORT || '3030',
    dbHost:"localhost",
    dbPort:"27017",
    database: "picwood",
    app:{
        title:"picwood",
        description:'Underscore final project',
        head:{
            titleTemplate:'picture manager',
            meta:[
                {
                    name:"description",
                    content:"react express"
                },
                {charset:"utf-8"}
            ]
        }
    },
    instagram: {
        instagram_redirect_uri: 'http://localhost:3000/auth',
        instagram_client_id: '4e0a58725aa742dca5ded48b09781ff2',
        instagram_client_secret: 'ceebc4ca405448e19e03b1fc4739ece4'
    }
};