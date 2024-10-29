# Node Bookmarks

This is a project for learning Node.js and API development with it.

## How to run and develop

Install express

```
npm i express --save
```

Install dev tools

```
npm i typescript ts-node @types/node prisma --save-dev
```

Install Prisma client

```
npm i @prisma/client --save
```

Run

```
PORT=3001 node src/index.js
```

Update Prisma references


```
npx prisma format
```

Run initial Prisma migration

```
npx prisma migrate dev --name init
```



## Related courses

https://frontendmasters.com/courses/api-design-nodejs-v4

https://frontendmasters.com/courses/headless-cms-nextjs/

https://frontendmasters.com/courses/node-js-v3/

https://frontendmasters.com/courses/intermediate-next-js/

https://frontendmasters.com/courses/next-js-v3/

