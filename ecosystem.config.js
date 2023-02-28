module.exports = {
    apps: [
        {
            name: 'ITC',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}