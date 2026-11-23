import Container from '../ui/container';

function Navbar() {
  return (
    <nav className="bg-foreground text-background">
      <Container>
        <div className="flex items-center justify-between py-4">
          <p className="text-2xl font-bold">Brewly</p>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
