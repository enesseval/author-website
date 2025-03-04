import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
   return (
      <footer className="border-t bg-muted/40">
         <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="md:col-span-2 space-y-4">
                  <div className="text-2xl font-bold">Yazar Adı</div>
                  <p className="text-muted-foreground max-w-md">
                     Modern Türk edebiyatının yenilikçi seslerinden biri. Romanlar, öyküler ve denemelerle okuyucularına farklı dünyaların kapılarını aralıyor.
                  </p>
                  <div className="flex space-x-4">
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                           >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                           </svg>
                        </Link>
                     </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                           >
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                           </svg>
                        </Link>
                     </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                           >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                           </svg>
                        </Link>
                     </Button>
                  </div>
               </div>
               <div className="space-y-4">
                  <h3 className="text-lg font-medium">Bağlantılar</h3>
                  <nav className="flex flex-col space-y-2">
                     <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                        Ana Sayfa
                     </Link>
                     <Link href="/books" className="text-muted-foreground hover:text-foreground transition-colors">
                        Kitaplar
                     </Link>
                     <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                        Hakkımda
                     </Link>
                     <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                        İletişim
                     </Link>
                  </nav>
               </div>
               <div className="space-y-4">
                  <h3 className="text-lg font-medium">Bülten</h3>
                  <p className="text-muted-foreground">Yeni kitaplar ve etkinliklerden haberdar olmak için abone olun.</p>
                  <div className="flex space-x-2">
                     <Input type="email" placeholder="E-posta adresiniz" className="max-w-[220px]" />
                     <Button>Abone Ol</Button>
                  </div>
               </div>
            </div>
            <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
               <p>© {new Date().getFullYear()} Yazar Adı. Tüm hakları saklıdır.</p>
            </div>
         </div>
      </footer>
   );
}
