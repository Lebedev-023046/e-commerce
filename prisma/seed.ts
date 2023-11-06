import { PrismaClient } from '@prisma/client';

import { products } from './data';

const db = new PrismaClient({ log: ['query'] });

async function main() {
  for (let product of products) {
    await db.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    db.$disconnect();
  });
