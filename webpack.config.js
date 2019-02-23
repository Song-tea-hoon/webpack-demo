const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html-webpack-plugin -> 파스칼 케이스

module.exports ={
  entry: './src/index.js', // 모듈이 시작되는 시작점 호출하는 모든 라이브러리를 불러드린다.
  output: {
    filename: "main.js", // 결과로 빌드되는 js파밀
    path: path.resolve(__dirname, 'dist') // 현재경로(__dirname)에서 dist폴더에 빌드
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 정규식 프레디케이트( true, false ) -> css파일이면 true, 아니면 false -> true이면 모듈 적용
        use: [ "style-loader", "css-loader" ] // 뒤부터 적용
      }
    ]
  },
  plugins: [ // 외부플러그인을 등록할 때
    new HtmlWebpackPlugin() // html을 dist폴더에 넣고 main.js를 주입까지 넣어준다.
  ]
}