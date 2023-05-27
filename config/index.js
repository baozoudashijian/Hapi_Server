const { env } = process

console.log(env.HOST);

module.exports = {
    host: env.HOST,
    port: env.PORT
}