import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          SkillSwap
        </Link>
        <nav className="space-x-4">
          <Link href="/search" className="text-muted-foreground hover:text-primary">
            Search Skills
          </Link>
          <Link href="/explore" className="text-muted-foreground hover:text-primary">
            Explore
          </Link>
          <Link href="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

