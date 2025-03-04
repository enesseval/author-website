import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy testimonial data
const testimonials = [
   {
      id: 1,
      name: "Ayşe Yılmaz",
      role: "Edebiyat Eleştirmeni",
      content: "Modern Türk edebiyatına yeni bir soluk getiren, derinlikli karakterleri ve akıcı anlatımıyla dikkat çeken bir yazar.",
      avatar: "https://i.pravatar.cc/150?img=1",
   },
   {
      id: 2,
      name: "Mehmet Kaya",
      role: "Okur",
      content: "Karanlık Sular kitabını bir günde bitirdim. Gerilimi hiç düşürmeden okuyucuyu sürükleyen harika bir eser.",
      avatar: "https://i.pravatar.cc/150?img=2",
   },
   {
      id: 3,
      name: "Zeynep Demir",
      role: "Yayıncı",
      content: "Çalışma disiplini ve yaratıcı yaklaşımıyla her zaman beklentilerin ötesine geçen, okuyucuyla güçlü bir bağ kurmayı başaran değerli bir yazar.",
      avatar: "https://i.pravatar.cc/150?img=3",
   },
   {
      id: 4,
      name: "Can Öztürk",
      role: "Edebiyat Öğretmeni",
      content: "Öğrencilerime tavsiye ettiğim, dili kullanma becerisiyle genç yazarlara örnek olabilecek eserlere imza atıyor.",
      avatar: "https://i.pravatar.cc/150?img=4",
   },
   {
      id: 5,
      name: "Elif Yıldız",
      role: "Kitap Bloggerı",
      content: "Kayıp Zamanın İzinde romanı, hafıza ve kimlik üzerine yazılmış en etkileyici eserlerden biri. Karakterlerin iç dünyasını ustalıkla yansıtıyor.",
      avatar: "https://i.pravatar.cc/150?img=5",
   },
   {
      id: 6,
      name: "Ahmet Şahin",
      role: "Edebiyat Dergisi Editörü",
      content: "Çağdaş Türk edebiyatının en özgün seslerinden. Her kitabında kendini aşmayı başarıyor ve okuyucuyu şaşırtmaya devam ediyor.",
      avatar: "https://i.pravatar.cc/150?img=6",
   },
   {
      id: 7,
      name: "Selin Aydın",
      role: "Kitap Kulübü Yöneticisi",
      content: "Kulübümüzde en çok tartışılan yazarlardan biri. Eserleri her okumada farklı katmanlarını açığa çıkarıyor ve yeni yorumlara imkan tanıyor.",
      avatar: "https://i.pravatar.cc/150?img=7",
   },
   {
      id: 8,
      name: "Burak Yılmaz",
      role: "Okur",
      content: "Gölgeler Vadisi'ni okuduğumda hayatımda ilk kez bir kitabı bitirdiğimde hemen başa dönüp tekrar okumak istedim. Büyüleyici bir dünya yaratmış.",
      avatar: "https://i.pravatar.cc/150?img=8",
   },
];

export function Testimonials() {
   return (
      <section className="py-12 md:py-24 bg-muted/50 relative overflow-hidden">
         {/* Arka plan dekoratif elementleri */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
         </div>

         <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-up">
               <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Okuyucu Yorumları</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Kitaplarım hakkında ne düşünüyorlar?</p>
               </div>
            </div>

            <div className="relative w-full">
               {/* Slider kontrolleri */}
               <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                  <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm shadow-md h-10 w-10" id="prev-testimonial">
                     <ChevronLeft className="h-6 w-6" />
                     <span className="sr-only">Önceki</span>
                  </Button>
               </div>

               <div className="overflow-hidden">
                  <div className="flex gap-6 transition-transform duration-300 testimonials-slider">
                     {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className="min-w-[280px] md:min-w-[300px] flex-shrink-0 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                           <Card className="h-full bg-background hover:shadow-lg transition-shadow duration-300">
                              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                 <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                                 </div>
                                 <div className="grid gap-1">
                                    <h3 className="text-lg font-medium">{testimonial.name}</h3>
                                    <CardDescription>{testimonial.role}</CardDescription>
                                 </div>
                              </CardHeader>
                              <CardContent>
                                 <p className="text-muted-foreground">{testimonial.content}</p>
                              </CardContent>
                           </Card>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm shadow-md h-10 w-10" id="next-testimonial">
                     <ChevronRight className="h-6 w-6" />
                     <span className="sr-only">Sonraki</span>
                  </Button>
               </div>
            </div>

            {/* Slider dots */}
            <div className="flex justify-center gap-2 mt-6">
               {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, index) => (
                  <button
                     key={index}
                     className={`w-2 h-2 rounded-full bg-primary/20 transition-all duration-300 testimonial-dot ${index === 0 ? "w-4 bg-primary" : ""}`}
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
                  const slider = document.querySelector('.testimonials-slider');
                  const prevBtn = document.getElementById('prev-testimonial');
                  const nextBtn = document.getElementById('next-testimonial');
                  const dots = document.querySelectorAll('.testimonial-dot');
                  const itemWidth = 300; // Bir öğenin genişliği
                  const itemsPerPage = window.innerWidth < 768 ? 1 : 4; // Mobilde 1, masaüstünde 4
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
                     const maxIndex = ${testimonials.length} - itemsPerPage;
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
                     const newItemsPerPage = window.innerWidth < 768 ? 1 : 4;
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
      </section>
   );
}
