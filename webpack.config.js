module.exports = {
    mode: 'production',
    node: {
        global: false
    },
    entry: {
        preload: './src/js/preload.js',
        onload: './src/js/onload.js',
        postload: './src/js/postload.js',
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
};