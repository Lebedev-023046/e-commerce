import { PrismaClient } from '../../prisma/generated';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const db = globalForPrisma.prisma || new PrismaClient({ log: ['query'] });

export default db;
export * from '../../prisma/generated';
