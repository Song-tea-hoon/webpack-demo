const path = require('path');

module.exports ={
  entry: './src/index.js', // 모듈이 시작되는 시작점 호출하는 모든 라이브러리를 불러드린다.
  output: {
    filename: "main.js", // 결과로 빌드되는 js파밀
    path: path.resolve(__dirname, 'dist') // 현재경로(__dirname)에서 dist폴더에 빌드
  }
}