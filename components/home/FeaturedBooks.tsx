import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
   },
   {
      id: 4,
      title: "Yüzleşme",
      description: "Bir aile sırrının ortaya çıkışıyla değişen hayatlar ve yüzleşmeler üzerine etkileyici bir roman.",
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2017",
      slug: "yuzlesme",
      genre: "Aile Dramı",
      pages: 298,
   },
   {
      id: 5,
      title: "Son Durak",
      description: "Bir tren yolculuğunda tanışan yabancıların hayatlarının kesişmesini anlatan, sürpriz sonlu bir roman.",
      coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2013",
      slug: "son-durak",
      genre: "Gizem",
      pages: 224,
   },
   {
      id: 6,
      title: "Kırık Hayaller",
      description: "1980'lerin İstanbul'unda geçen, sanat dünyasını ve dönemin siyasi atmosferini anlatan bir roman.",
      coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2021",
      slug: "kirik-hayaller",
      genre: "Tarihi Roman",
      pages: 342,
   },
   {
      id: 7,
      title: "Sessiz Çığlık",
      description: "Toplumsal baskılar altında ezilen bir kadının özgürlük arayışını anlatan etkileyici bir roman.",
      coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2018",
      slug: "sessiz-ciglik",
      genre: "Toplumsal Roman",
      pages: 276,
   },
   {
      id: 8,
      title: "Zamanın Ötesinde",
      description: "Farklı zaman dilimlerinde yaşayan iki insanın kesişen hayatlarını konu alan sıra dışı bir roman.",
      coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2020",
      slug: "zamanin-otesinde",
      genre: "Bilim Kurgu",
      pages: 320,
   },
   {
      id: 9,
      title: "İstanbul'un Gölgeleri",
      description: "İstanbul'un az bilinen tarihi mekanlarında geçen, gerilim dolu bir polisiye roman.",
      coverImage: "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2016",
      slug: "istanbulun-golgeleri",
      genre: "Polisiye",
      pages: 288,
   },
   {
      id: 10,
      title: "Unutulan Zamanlar",
      description: "Bir kasabanın üç kuşak boyunca değişimini anlatan, aile bağları ve toplumsal dönüşüm üzerine bir roman.",
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      publishDate: "2022",
      slug: "unutulan-zamanlar",
      genre: "Aile Romanı",
      pages: 356,
   },
];

export function FeaturedBooks() {
   return (
      <section className="py-12 md:py-24 relative overflow-hidden">
         {/* Arka plan dekoratif elementleri */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
         </div>

         <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-up">
               <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kitaplarım</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Tüm eserlerim ve yayın tarihlerine göre sıralanmış kitaplarım</p>
               </div>

               <div className="relative w-full mt-8 px-10">
                  {/* Slider kontrolleri - dışarıda */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
                     <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm shadow-md h-10 w-10" id="prev-book">
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Önceki</span>
                     </Button>
                  </div>

                  <div className="overflow-hidden">
                     <div className="flex gap-3 transition-transform duration-300 books-slider">
                        {allBooks.map((book, index) => (
                           <div key={book.id} className="min-w-[160px] md:min-w-[180px] flex-shrink-0 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                              <Card className="flex flex-col h-full book-card">
                                 <CardHeader className="pb-0 space-y-1 px-2 pt-2">
                                    <div className="relative w-full h-[140px] mb-1 overflow-hidden rounded-t-lg">
                                       <Image src={book.coverImage} alt={book.title} fill className="object-cover transition-transform hover:scale-105 duration-500" />
                                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                                          <p className="text-white font-medium text-[10px]">{book.description}</p>
                                       </div>
                                    </div>
                                    <CardTitle className="text-sm">{book.title}</CardTitle>
                                    <CardDescription className="flex justify-between items-center text-[10px]">
                                       <span>{book.publishDate}</span>
                                       <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded-full text-[10px]">{book.genre}</span>
                                    </CardDescription>
                                 </CardHeader>
                                 <CardContent className="flex-grow pt-1 pb-1 px-2">
                                    <p className="text-muted-foreground text-[10px] line-clamp-2">{book.description}</p>
                                    <div className="mt-1 text-[10px] text-muted-foreground">
                                       <p>Sayfa: {book.pages}</p>
                                    </div>
                                 </CardContent>
                                 <CardFooter className="pt-0 px-2 pb-2">
                                    <Button asChild size="sm" variant="outline" className="w-full h-7 relative overflow-hidden group">
                                       <Link href={`/books/${book.slug}`}>
                                          <span className="relative z-10 text-[10px]">Detayları Gör</span>
                                          <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                       </Link>
                                    </Button>
                                 </CardFooter>
                              </Card>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                     <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm shadow-md h-10 w-10" id="next-book">
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Sonraki</span>
                     </Button>
                  </div>
               </div>

               {/* Slider dots */}
               <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: Math.ceil(allBooks.length / 6) }).map((_, index) => (
                     <button
                        key={index}
                        className={`w-2 h-2 rounded-full bg-primary/20 transition-all duration-300 book-dot ${index === 0 ? "w-4 bg-primary" : ""}`}
                        data-index={index}
                        aria-label={`Sayfa ${index + 1}`}
                     ></button>
                  ))}
               </div>

               {/* Slider JavaScript */}
               <script
                  dangerouslySetInnerHTML={{
                     __html: `
                  document.addEventListener('DOMContentLoaded', function() {
                     const slider = document.querySelector('.books-slider');
                     const prevBtn = document.getElementById('prev-book');
                     const nextBtn = document.getElementById('next-book');
                     const dots = document.querySelectorAll('.book-dot');
                     const itemWidth = 180; // Bir öğenin genişliği
                     const itemsPerPage = window.innerWidth < 768 ? 2 : 6; // Mobilde 2, masaüstünde 6
                     let currentIndex = 0;
                     
                     function updateSlider() {
                        slider.style.transform = \`translateX(-\${currentIndex * itemWidth}px)\`;
                        
                        // Dots güncelleme
                        dots.forEach((dot, index) => {
                           if (index === Math.floor(currentIndex / itemsPerPage)) {
                              dot.classList.add('w-4', 'bg-primary');
                              dot.classList.remove('bg-primary/20');
                           } else {
                              dot.classList.remove('w-4', 'bg-primary');
                              dot.classList.add('bg-primary/20');
                           }
                        });
                     }
                     
                     prevBtn.addEventListener('click', () => {
                        if (currentIndex > 0) {
                           currentIndex -= itemsPerPage;
                           if (currentIndex < 0) currentIndex = 0;
                           updateSlider();
                        }
                     });
                     
                     nextBtn.addEventListener('click', () => {
                        const maxIndex = ${allBooks.length} - itemsPerPage;
                        if (currentIndex < maxIndex) {
                           currentIndex += itemsPerPage;
                           if (currentIndex > maxIndex) currentIndex = maxIndex;
                           updateSlider();
                        }
                     });
                     
                     dots.forEach((dot, index) => {
                        dot.addEventListener('click', () => {
                           currentIndex = index * itemsPerPage;
                           updateSlider();
                        });
                     });
                     
                     // Responsive davranış için
                     window.addEventListener('resize', () => {
                        const newItemsPerPage = window.innerWidth < 768 ? 2 : 6;
                        if (newItemsPerPage !== itemsPerPage) {
                           itemsPerPage = newItemsPerPage;
                           currentIndex = 0;
                           updateSlider();
                        }
                     });
                  });
               `,
                  }}
               />
            </div>
         </div>
      </section>
   );
}
