require('env2')('./.env') // 位置要放在config前面
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-world')


const server = new Hapi.Server()

server.connection({
    port: config.port,
    host: config.host
})

const init = async () => {
    server.route([
        ...routesHelloHapi
    ])
    await server.start()
    console.log('server is running')
}
init()