import { PrismaClient } from '@prisma/client';

//单例模式————避免频繁地创建和销毁数据库连接，提高性能
const prisma = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "production") global.prismadb = prisma;

export default prisma;