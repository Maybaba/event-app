# 베이스 이미지로 Node.js의 LTS 버전 사용
FROM node:20

# 앱 디렉토리 생성
WORKDIR /usr/src/app 

# 의존성 파일 복사
COPY package*.json ./

# 패키지 설치
RUN npm install

# 앱 소스 추가
COPY . .

# 애플리케이션 빌드
RUN npm run build
# local에서는 굳이 띄우지 않아도 된다. . . .

# 3000 포트 오픈
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "start"] 