
module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            console.log(1)
            reply('hapi')
        },
        config: {
            tags: ['api', 'test'],
            description: '测试hello-hapi'
        }
    }
]