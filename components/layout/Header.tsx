import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
   return (
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
         <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between py-4 px-4 md:px-6">
            <div className="flex items-center gap-2">
               <Link href="/" className="font-bold text-xl">
                  Yazar Adı
               </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
               <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Ana Sayfa
               </Link>
               <Link href="/books" className="text-sm font-medium transition-colors hover:text-primary">
                  Kitaplar
               </Link>
               <Link href="/coming-soon" className="text-sm font-medium transition-colors hover:text-primary">
                  Yakında
               </Link>
               <Link href="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
                  Yorumlar
               </Link>
               <Button variant="outline" asChild>
                  <Link href="/contact">İletişim</Link>
               </Button>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
               <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="icon">
                     <Menu className="h-5 w-5" />
                     <span className="sr-only">Toggle Menu</span>
                  </Button>
               </SheetTrigger>
               <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-8">
                     <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                        Ana Sayfa
                     </Link>
                     <Link href="/books" className="text-sm font-medium transition-colors hover:text-primary">
                        Kitaplar
                     </Link>
                     <Link href="/coming-soon" className="text-sm font-medium transition-colors hover:text-primary">
                        Yakında
                     </Link>
                     <Link href="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
                        Yorumlar
                     </Link>
                     <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">İletişim</Link>
                     </Button>
                  </nav>
               </SheetContent>
            </Sheet>
         </div>
      </header>
   );
}
