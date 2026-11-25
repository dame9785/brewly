import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { tanstackStartCookies } from 'better-auth/tanstack-start';

import { prisma } from '@/lib/prisma';
import { sendPasswordResetEmail } from '@/lib/resend/email';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  emailAndPassword: {
    enabled: true,

    // Send reset password link to users emailadress
    sendResetPassword: async ({ user, url }) => {
      await sendPasswordResetEmail(user.email, url);
    },
  },

  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: false,
        defaultValue: 'USER',
        input: false,
      },
    },
  },

  plugins: [tanstackStartCookies()],
});
