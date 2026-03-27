import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PageHeader({ title, backHref }: { title: string, backHref: string }) {
  return (
    <header className="flex items-center gap-4">
      <Button variant="outline" size="icon" className="h-9 w-9" asChild>
        <Link href={backHref}>
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Link>
      </Button>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-headline">
        {title}
      </h1>
    </header>
  );
}
