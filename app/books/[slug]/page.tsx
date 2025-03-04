import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Tüm kitaplar için dummy veri
const allBooks = [
   {
      id: 1,
      title: "Karanlık Sular",
      description: "Küçük bir sahil kasabasında yaşanan gizemli olayları konu alan, gerilim dolu bir roman.",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2019",
      slug: "karanlik-sular",
      genre: "Gerilim",
      pages: 312,
      publisher: "Everest Yayınları",
      isbn: "978-605-185-345-7",
      longDescription: `"Karanlık Sular", Ege kıyısındaki küçük bir balıkçı kasabasında geçen, gerilim dolu bir hikaye anlatıyor. Ana karakter Kemal, İstanbul'daki stresli hayatından kaçıp çocukluğunun geçtiği bu sakin kasabaya yerleşir. Ancak kasabaya döndükten kısa bir süre sonra, denizden çıkan gizemli cesetler ve açıklanamayan olaylar zinciri başlar.

Kemal, yerel polis şefi Selim ile birlikte bu esrarengiz olayları araştırmaya başlar. Soruşturma derinleştikçe, kasabanın sakin görüntüsünün altında yatan karanlık sırlar ve yıllar önce yaşanmış trajik olaylar gün yüzüne çıkar.

Roman, gerilim unsurlarının yanı sıra, küçük toplulukların dinamikleri, geçmişle yüzleşme ve aidiyet temaları üzerine derin bir inceleme sunuyor. Okuyucuyu son sayfaya kadar sürükleyen beklenmedik plot twistleri ve atmosferik anlatımıyla "Karanlık Sular", modern Türk edebiyatının önemli gerilim romanlarından biri olarak kabul ediliyor.`,
      quotes: [
         "Bazen en derin sırlar, en sakin sularda gizlidir.",
         "Geçmişten kaçabilirsin, ama onunla yüzleşmeden asla kurtulamazsın.",
         "Her kasabanın bir hikayesi vardır, ama bazılarının hikayesi diğerlerinden daha karanlıktır.",
      ],
      awards: ["2019 Yunus Nadi Roman Ödülü"],
      buyLinks: [
         { name: "D&R", url: "https://www.dr.com.tr" },
         { name: "Kitapyurdu", url: "https://www.kitapyurdu.com" },
         { name: "Amazon", url: "https://www.amazon.com.tr" },
      ],
   },
   {
      id: 2,
      title: "Kayıp Zamanın İzinde",
      description: "Bir adamın geçmişiyle yüzleşme hikayesi. Hafıza, kimlik ve aidiyet üzerine düşündüren bir eser.",
      coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2015",
      slug: "kayip-zamanin-izinde",
      genre: "Dram",
      pages: 280,
      publisher: "Yapı Kredi Yayınları",
      isbn: "978-975-08-3256-4",
      longDescription: `"Kayıp Zamanın İzinde", hafızasını kaybeden bir adamın kimliğini ve geçmişini arama yolculuğunu konu alan etkileyici bir roman. Ana karakter Ahmet, bir gün İstanbul'da bir parkta kendine gelir ve kim olduğunu, nereden geldiğini hatırlayamaz. Cebinde sadece eski bir fotoğraf ve üzerinde bir adres yazılı küçük bir kağıt parçası vardır.

Bu ipuçlarını takip ederek kendi hikayesini keşfetmeye başlayan Ahmet, yolculuğu boyunca farklı insanlarla tanışır ve her biri onun geçmişine dair parçaları bir araya getirmesine yardımcı olur. Ancak hatırladıkça, belki de unutmanın daha iyi olabileceği acı gerçeklerle yüzleşmek zorunda kalır.

Roman, hafıza, kimlik, aidiyet ve insan ilişkilerinin karmaşıklığı üzerine derin bir inceleme sunuyor. Geçmiş ve şimdi arasında gidip gelen anlatım yapısı, okuyucuyu Ahmet'in zihninin labirentlerinde dolaştırırken, hayatın anlamı ve kendimizi tanıma yolculuğu üzerine düşündürüyor.`,
      quotes: [
         "Hafıza, kimliğimizin temel taşıdır; onu kaybettiğimizde, kendimizi de kaybederiz.",
         "Bazen unutmak, hatırlamaktan daha zordur.",
         "Geçmişimiz bizi şekillendirir, ama geleceğimizi belirlemez.",
      ],
      awards: ["2015 Orhan Kemal Roman Ödülü"],
      buyLinks: [
         { name: "D&R", url: "https://www.dr.com.tr" },
         { name: "Kitapyurdu", url: "https://www.kitapyurdu.com" },
         { name: "Amazon", url: "https://www.amazon.com.tr" },
      ],
   },
   {
      id: 3,
      title: "Gölgeler Vadisi",
      description: "İlk romanım. İki farklı dünya arasında sıkışan bir karakterin varoluşsal mücadelesi.",
      coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2010",
      slug: "golgeler-vadisi",
      genre: "Fantastik Kurgu",
      pages: 256,
      publisher: "Can Yayınları",
      isbn: "978-975-07-1234-5",
      longDescription: `"Gölgeler Vadisi", gerçeklik ve hayal dünyası arasındaki sınırları bulanıklaştıran, fantastik öğelerle bezenmiş bir ilk roman. Ana karakter Deniz, sıradan bir üniversite öğrencisiyken, bir gün kendini paralel bir evrende, Gölgeler Vadisi olarak bilinen gizemli bir bölgede bulur.

Bu vadide, insanların gölgeleri canlı varlıklar olarak yaşamakta ve kendi toplumlarını oluşturmaktadır. Deniz, bu dünyada hem kendi gölgesiyle hem de diğer gölgelerle etkileşime girer ve zamanla iki dünya arasında sıkışıp kaldığını hisseder.

Roman, gerçeklik algısı, varoluşsal sorgulamalar ve kimlik arayışı temalarını fantastik bir çerçevede ele alırken, okuyucuyu düş ile gerçek arasındaki ince çizgide bir yolculuğa çıkarıyor. Deniz'in iki dünya arasındaki yolculuğu, kendi içsel çatışmalarını ve toplumsal normların baskısını sembolize ediyor.`,
      quotes: [
         "Herkesin bir gölgesi vardır, ama çok azı onunla yüzleşmeyi göze alır.",
         "Bazen kendimizi bulmak için, önce kendimizi kaybetmemiz gerekir.",
         "Gerçek ve hayal arasındaki sınır, sandığımızdan çok daha incedir.",
      ],
      awards: ["2011 İlk Roman Başarı Ödülü"],
      buyLinks: [
         { name: "D&R", url: "https://www.dr.com.tr" },
         { name: "Kitapyurdu", url: "https://www.kitapyurdu.com" },
         { name: "Amazon", url: "https://www.amazon.com.tr" },
      ],
   },
];

export default function BookPage({ params }: { params: { slug: string } }) {
   const book = allBooks.find((book) => book.slug === params.slug);

   if (!book) {
      notFound();
   }

   return (
      <div className="py-12 md:py-24 relative overflow-hidden">
         {/* Arka plan dekoratif elementleri */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
         </div>

         <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="mb-8">
               <Button variant="outline" asChild className="mb-8">
                  <Link href="/books" className="flex items-center gap-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-left"
                     >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                     </svg>
                     Tüm Kitaplara Dön
                  </Link>
               </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
               <div className="flex justify-center lg:justify-end animate-fade-up">
                  <div className="relative w-[300px] h-[450px] md:w-[350px] md:h-[525px] shadow-xl rounded-lg overflow-hidden">
                     <Image src={book.coverImage} alt={book.title} fill className="object-cover" priority />
                  </div>
               </div>

               <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">{book.title}</h1>
                  <div className="flex items-center gap-2 mb-4">
                     <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{book.genre}</span>
                     <span className="text-muted-foreground">{book.publishDate}</span>
                  </div>

                  <div className="space-y-6">
                     <p className="text-lg text-muted-foreground">{book.description}</p>

                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <h3 className="text-sm font-medium text-muted-foreground">Yayınevi</h3>
                           <p>{book.publisher}</p>
                        </div>
                        <div>
                           <h3 className="text-sm font-medium text-muted-foreground">Sayfa Sayısı</h3>
                           <p>{book.pages}</p>
                        </div>
                        <div>
                           <h3 className="text-sm font-medium text-muted-foreground">Yayın Tarihi</h3>
                           <p>{book.publishDate}</p>
                        </div>
                        <div>
                           <h3 className="text-sm font-medium text-muted-foreground">ISBN</h3>
                           <p>{book.isbn}</p>
                        </div>
                     </div>

                     <div className="flex flex-wrap gap-2">
                        {book.buyLinks.map((link, index) => (
                           <Button key={index} asChild>
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                 {link.name}'dan Satın Al
                              </a>
                           </Button>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <Separator className="my-12" />

            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
               <h2 className="text-2xl md:text-3xl font-bold">Kitap Hakkında</h2>
               <div className="prose prose-lg max-w-none">
                  <p className="whitespace-pre-line">{book.longDescription}</p>
               </div>

               {book.quotes && book.quotes.length > 0 && (
                  <div className="my-12 space-y-6">
                     <h2 className="text-2xl md:text-3xl font-bold">Kitaptan Alıntılar</h2>
                     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {book.quotes.map((quote, index) => (
                           <div key={index} className="bg-muted/50 p-6 rounded-lg relative animate-fade-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
                              <div className="absolute top-3 left-3 text-4xl text-primary/20">"</div>
                              <p className="relative z-10 italic">{quote}</p>
                              <div className="absolute bottom-3 right-3 text-4xl text-primary/20">"</div>
                           </div>
                        ))}
                     </div>
                  </div>
               )}

               {book.awards && book.awards.length > 0 && (
                  <div className="my-12">
                     <h2 className="text-2xl md:text-3xl font-bold mb-6">Ödüller</h2>
                     <ul className="list-disc list-inside space-y-2">
                        {book.awards.map((award, index) => (
                           <li key={index} className="text-lg animate-fade-left" style={{ animationDelay: `${600 + index * 100}ms` }}>
                              {award}
                           </li>
                        ))}
                     </ul>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
