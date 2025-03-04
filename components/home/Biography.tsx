import { Separator } from "@/components/ui/separator";

export function Biography() {
   return (
      <section className="py-12 md:py-24 bg-muted/50 relative overflow-hidden">
         {/* Arka plan dekoratif elementleri */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/2 blur-3xl"></div>
         </div>

         <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-up">
               <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hakkımda</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Edebiyat dünyasındaki yolculuğum ve yazarlık serüvenim</p>
               </div>
               <Separator className="my-4" />
               <div className="mx-auto max-w-[800px] space-y-6 text-left">
                  <p className="leading-7 animate-fade-left">
                     1985 yılında İstanbul'da doğdum. Boğaziçi Üniversitesi Türk Dili ve Edebiyatı bölümünden mezun olduktan sonra, yüksek lisansımı Karşılaştırmalı Edebiyat alanında tamamladım.
                     Yazarlık yolculuğum, üniversite yıllarında edebiyat dergilerinde yayımlanan öykülerimle başladı.
                  </p>
                  <p className="leading-7 animate-fade-right">
                     İlk romanım "Gölgeler Vadisi" 2010 yılında yayımlandı ve edebiyat çevrelerinde büyük ilgi gördü. Bu kitabımla Yunus Nadi Roman Ödülü'ne layık görüldüm. Sonraki yıllarda yayımlanan
                     "Kayıp Zamanın İzinde" (2015) ve "Karanlık Sular" (2019) adlı romanlarımla da okuyucularımın beğenisini kazandım.
                  </p>
                  <p className="leading-7 animate-fade-left">
                     Eserlerimde genellikle insan psikolojisinin derinliklerini, toplumsal değişimleri ve kimlik arayışlarını ele alıyorum. Karakterlerimin iç dünyalarını derinlemesine işlerken,
                     okuyucuyu da düşünmeye ve sorgulamaya teşvik etmeyi amaçlıyorum.
                  </p>
                  <p className="leading-7 animate-fade-right">
                     Yazarlığın yanı sıra, çeşitli üniversitelerde yaratıcı yazarlık dersleri veriyor ve edebiyat festivallerinde atölyeler düzenliyorum. Genç yazarların gelişimine katkıda bulunmak ve
                     edebiyat sevgisini yaymak, meslek hayatımın en önemli hedeflerinden biri.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
