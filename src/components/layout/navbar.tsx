import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { authClient } from '@/lib/auth-client';

import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';

import { signOut } from '@/lib/auth-actions';

function Navbar() {
  const navigate = useNavigate();

  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    const { error } = await signOut();

    if (error) {
      toast.error('Logout failed', {
        description: 'Something went wrong. Please try again.',
      });

      return;
    }

    toast.success('Successfully logged out', {
      description: 'See you again soon!',
    });

    await navigate({ to: '/login' });
  };

  return (
    <nav className="bg-foreground text-background">
      <Container>
        <div className="flex items-center justify-between py-4">
          <p className="text-2xl font-bold">Brewly</p>

          {!isPending &&
            (session ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Welcome, {session.user.name}</span>

                <Button text="Logout" type="button" variant="secondary" size="s" onClick={handleLogout} />
              </div>
            ) : (
              <Button
                text="Login"
                type="button"
                variant="secondary"
                size="s"
                onClick={() => navigate({ to: '/login' })}
              />
            ))}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
