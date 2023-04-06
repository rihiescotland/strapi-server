// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5434),
//       database: env('DATABASE_NAME', 'postgres'),
//       user: env('DATABASE_USERNAME', 'ricardobento'),
//       password: env('DATABASE_PASSWORD', '0000'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: env.bool('DATABASE_SSL', false)
//     },
//     debug: false,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      schema: env("DATABASE_SCHEMA"),
      ssl: env.bool("DATABASE_SSL"),
    },
    debug: false,
  },
});
