# Lets go Using next.js and prisma

npx create-next-app@latest .
npm i --save-dev ts-node
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite

## Run a migration to create your database tables with Prisma Migrate

npx prisma migrate dev --name init

npx shadcn-ui@latest init

### adding a card component

<https://ui.shadcn.com/docs/components>
`npx shadcn-ui@latest add card`
`npx shadcn-ui@latest add button`
`npx shadcn-ui@latest add table`
`npx shadcn-ui@latest add label`
`npx shadcn-ui@latest add input`
`npx shadcn-ui@latest add textarea`
`npx shadcn-ui@latest add dropdown-menu`

### Validation

Use ZOD for validation `https://www.youtube.com/watch?v=L6BE-U3oy80`

Simply run `npm i zod`
https://youtu.be/iqrgggs0Qk0?si=o2oICHaxGC46J6lk&t=3874
