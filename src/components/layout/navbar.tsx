import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { authClient } from '#/lib/auth/auth-client';
import { Link, useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';

import { signOut } from '#/lib/auth/auth-actions';

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
    <header className="text-background sticky top-0 z-50 border-b border-white/10 bg-[#211a16]/95 shadow-lg backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5efe5] p-2">
              <img src="/brewly-icon.png" alt="Brewly" className="h-full w-full object-contain" />
            </div>

            <span className="text-2xl font-bold tracking-tight">
              Brewly<span className="text-[#b87545]">.</span>
            </span>
          </Link>

          {/* Authentication */}
          {!isPending && (
            <div className="flex items-center gap-4">
              {session ? (
                <>
                  <span className="text-background/80 hidden text-sm font-medium sm:block">
                    Welcome, {session.user.name}
                  </span>

                  <Button text="Logout" type="button" variant="secondary" size="s" onClick={handleLogout} />
                </>
              ) : (
                <Button
                  text="Login"
                  type="button"
                  variant="secondary"
                  size="s"
                  onClick={() => navigate({ to: '/login' })}
                />
              )}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
