webpack 수업 정리용
=============
* 모듈방식은 의존성관리를 해준다.

* package.json : 로컬에 설치해야하는 서드파티 라이브러리에 관한 정보에대한 환경파일.(의존성 관리 포함, npm을 통해서 설치가 된다.)
> package.json생성 명령어
```
npm init
```
> 로컬에 모듈을 설치하는 명령어. 로컬의 node_modules폴더에 설치가 된다.
```
npm install 모듈명
```

package.json 중에서 
* dependencies 실제 서비스에 필요한 모듈
* devDependencies 개발에만 필요한 모듈