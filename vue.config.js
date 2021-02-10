module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://tp-final-rija-back.herokuapp.com'
                //target: "http://localhost:8081"
            }
        }
    }
};
