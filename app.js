require('env2')('./.env') // 位置要放在config前面
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-world')
const routesShopHapi = require('./routes/shop')
const routesOrderHapi = require('./routes/order')
const pluginHapiSwagger = require('./plugins/swagger');


const server = new Hapi.Server()

server.connection({
    port: config.port,
    host: config.host
})

const init = async () => {
    await server.register([
        ...pluginHapiSwagger
    ])
    server.route([
        ...routesHelloHapi,
        ...routesShopHapi,
        ...routesOrderHapi
    ])
    await server.start()
    console.log('server is running')
}
init()