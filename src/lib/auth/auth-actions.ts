import { authClient } from '#/lib/auth/auth-client';

export async function signOut() {
  return await authClient.signOut();
}
