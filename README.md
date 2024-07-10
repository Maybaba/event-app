# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 리액트 프로젝트 시작하기

1. nodejs 설치
2. create-react-app 설치 (최초1번)

```
$ npm install -g create-react-app
```

3. react프로젝트 생성

```
$ npx create-react-app 프로젝트이름
```

4. react 프로젝트 실행

```
$ cd 프로젝트폴더
$ npm start
```

- http://localhost:3000 에서 프론트엔드 서버 자동 실행

5. 클론 받은 경우 
```angular2html
npm install 
```
- 노드 모듈 라이브러리 루트 설치 후 개발

- 노드 모듈 라이브러리 루트 설치 후 개발

6. npm calendar install
```angular2html
npm install react-big-calendar moment
```
- EEXIST 에러 발생 시 캐시 삭제 후 재설치
```angular2html
npm cache clean --force

rm -rf node_modules package-lock.json

npm install

npm install react-big-calendar

npm install moment
```

7. react modal install
```angular2html
 npm install react-modal
```

8. react boot strap install
```angular2html
npm install react-bootstrap bootstrap gti
```

9. styled components install
```angular2html
npm install --save styled-components 
//작업하는 폴더 경로에 설치한다. 

import styled from 'styled-components';
```

10. bootstrap, reactstrap, sass(css ext ver library), reactIcons install
```angular2html
npm install bootstrap reactstrap sass react-icon
```

11. ROUTER install
```angular2html
npm install react-router-dom
```
