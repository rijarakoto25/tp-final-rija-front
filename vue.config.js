module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://riri-net.herokuapp.com'
                // target: "http://localhost:8081"
            }
        }
    }
};

