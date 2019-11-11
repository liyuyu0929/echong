module.exports = {
    devServer:{
        "/api":{
            target:"http://localhost:8080",
            changeOrigin:true
        }
    },
    configureWebpack:{
        //别名的配置
        alias:{ 
            "@":path.join(__dirname,"./src")
        }   
    }
}