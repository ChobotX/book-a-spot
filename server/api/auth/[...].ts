import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { Adapter } from 'next-auth/adapters';
// @ts-ignore
import { NuxtAuthHandler } from '#auth';

const prisma = new PrismaClient();
export default NuxtAuthHandler({
    pages: {
        signIn: '/user/login',
        verifyRequest: '/user/verify-email',
    },
    secret: process.env.AUTH_SECRET,
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR.
        EmailProvider.default({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
});
