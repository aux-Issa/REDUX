import proxy from 'http-proxy-middleware';

module.exports = function(app) {
    const headers  = {
        "Content-Type": "application/json",
    }
    app.use(proxy("/login", { target: "http://localhost:3000/",changeOrigin: true,secure: false,headers: headers}));  
};