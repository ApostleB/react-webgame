const path = require('path');

module.exports = {
    name: 'word-replay-setting',
    mode: 'development', // 실서비스에서는 production
    devtool: 'eval', //빠르게하겠다는 의미?
    
    resolve:{
        extensions: ['.js', '.jsx'],
    },//요 확장자들이 entry다

    entry: {
        app: ['./client.js'],
        // app: ['./client.js', 'WordRelay.jsx'], //client.js에서 WordRelay를 불러와서 넣을 필요 엄슴 확장자도 넣을 필요 없음
    }, //입력 
    //위에 얘네 합쳐서

    //밑에 얘로 만들어라
    output: {
        path: path.join(__dirname, 'dist'), //현재폴더경로에서 dist를 찾아라
        filename: 'app.js'
    }, //출럭
};