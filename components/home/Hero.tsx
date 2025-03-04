import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
   return (
      <section className="py-12 md:py-24 lg:py-32 overflow-hidden relative">
         {/* Arka plan dekoratif elementleri */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
         </div>

         <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
               <div className="flex flex-col justify-center space-y-4 animate-fade-left">
                  <div className="space-y-2">
                     <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-up">Ahmet Yılmaz</h1>
                     <p className="text-xl text-muted-foreground animate-fade-up">Ödüllü Yazar ve Hikaye Anlatıcısı</p>
                  </div>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-up">
                     Modern Türk edebiyatına yeni bir soluk getiren romanlar ve öykülerle okuyucularımı farklı dünyalara yolculuğa çıkarıyorum. Kitaplarımda insan ruhunun derinliklerini keşfederken,
                     toplumsal meselelere de ayna tutuyorum.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-up">
                     <Button asChild size="lg" className="relative overflow-hidden group">
                        <Link href="/books">
                           <span className="relative z-10">Kitaplarımı Keşfet</span>
                           <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                     </Button>
                     <Button asChild variant="outline" size="lg" className="relative overflow-hidden group">
                        <Link href="/contact">
                           <span className="relative z-10">İletişime Geç</span>
                           <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                     </Button>
                  </div>
               </div>
               <div className="relative h-[350px] md:h-[450px] lg:h-[500px] animate-fade-right">
                  <Image
                     src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                     alt="Ahmet Yılmaz"
                     fill
                     className="object-cover rounded-lg shadow-lg"
                     priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-md text-sm">
                     <p className="font-medium">Son Kitap: "Karanlık Sular" (2019)</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
