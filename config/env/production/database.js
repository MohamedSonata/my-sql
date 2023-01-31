module.exports = ({ env }) => ({   connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl:{
        ca:env('DATABASE_CA')
      }
    },
    useNullAsDefault: true,
    debug:false   
    }, 
   });