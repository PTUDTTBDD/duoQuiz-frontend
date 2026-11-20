# duoQuiz-frontend

Mobile app cho **DuoQuiz** xây dựng bằng React Native + Expo + TypeScript + Expo Router.

## Quy ước cấu trúc mã nguồn

- `app/`: Chỉ chứa `_layout.tsx` và `index.tsx` wrapper mỏng cho từng URL route.
- `src/features/<feature>/pages/<PageName>/`: Chứa page component thật (`*Page.tsx`) và styles (`*Page.styles.ts`).
- `src/api/generated/schema.d.ts`: TypeScript types được sinh tự động từ OpenAPI contract của `duoQuiz-backend` thông qua `duoQuiz-infra`.

## Lệnh phát triển

```bash
cp .env.example .env
pnpm install
pnpm typecheck
pnpm lint
pnpm test
pnpm start
```
