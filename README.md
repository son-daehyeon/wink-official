# WINK

## 개발 스택

- **Full-Stack:** Next.js (v14)
- **Database:** MongoDB

## 프로젝트 시작

### 1. 프로젝트 클론
```bash
git clone https://github.com/KMU-WINK/wink-official.git
cd wink-official
```

### 2. 의존성 설치
```bash
npm install
# or
yarn install
```

### 3. 환경 변수 설정
```bash
cp config/.env.template config/.env
```
`config/.env` 파일을 연 후, 환경 변수를 설정해주세요.
```env
MONGODB_URI=(MONGODB_URI)
GITHUB_API_KEY=(GITHUB_API_KEY)
```

### 4. 개발 서버 실행
```bash
npm run dev
# or
yarn dev
```

### 5. 빌드
```bash
npm run build
# or
yarn build
```
