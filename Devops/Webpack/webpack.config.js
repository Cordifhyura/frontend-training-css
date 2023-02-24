module.exports={
    entry:"",
    output:{
        path: __dirname + "/dist",
        filename: "main.js",
    },
    mode:"devlopment",
    module:{
        rules: [
            {
                test:/\.css$/,
                use:[]
            }
        ]
    },
    watch: false,
    //webpack-dev-server
    devServer:{
        port:8080
    }
}