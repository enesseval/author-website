import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy upcoming projects data
const upcomingProjects = [
   {
      id: 1,
      title: "Sessiz Tanık",
      description: "Bir gazetecinin, küçük bir kasabada yaşanan gizemli olayları araştırırken kendini tehlikeli bir komployla karşı karşıya bulmasını konu alan gerilim romanı.",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Haziran 2024",
      type: "Roman",
   },
   {
      id: 2,
      title: "Yazarlık Atölyesi",
      description:
         "Yazarlık yolculuğuna başlamak isteyenler için kapsamlı bir online eğitim programı. Karakter yaratımından hikaye yapısına, diyalog yazımından yayıncılık sürecine kadar tüm detaylar.",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Eylül 2024",
      type: "Online Kurs",
   },
   {
      id: 3,
      title: "Edebiyat Sohbetleri Podcast",
      description: "Edebiyat dünyasından konuklarla kitaplar, yazarlık süreci ve güncel edebi konular üzerine derinlemesine sohbetler.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2732&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Ağustos 2024",
      type: "Podcast",
   },
   {
      id: 4,
      title: "Kayıp Şehir",
      description: "Arkeoloji profesörü Kemal'in, efsanevi bir antik şehrin izini sürerken karşılaştığı gizemli olayları konu alan macera romanı.",
      image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Aralık 2024",
      type: "Roman",
   },
   {
      id: 5,
      title: "Yazarlar İçin Dijital Pazarlama",
      description: "Modern yazarların sosyal medya ve dijital platformları kullanarak kitaplarını tanıtma ve okuyucu kitlesi oluşturma stratejileri üzerine e-kitap.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Temmuz 2024",
      type: "E-Kitap",
   },
   {
      id: 6,
      title: "Edebiyat ve Sinema Seminerleri",
      description: "Edebiyat eserlerinin sinemaya uyarlanması sürecini ele alan, uyarlama teknikleri ve başarılı örnekleri inceleyen seminer serisi.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Ekim 2024",
      type: "Seminer",
   },
   {
      id: 7,
      title: "İstanbul Edebiyat Festivali",
      description: "Türkiye'nin önde gelen yazarlarını ve uluslararası konukları bir araya getiren, söyleşiler, imza günleri ve atölyelerle dolu festival.",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Mayıs 2024",
      type: "Festival",
   },
   {
      id: 8,
      title: "Genç Yazarlar Yarışması",
      description: "18-25 yaş arası genç yazarların katılabileceği, kazananlara mentorluk ve yayın desteği sağlayan ulusal öykü yarışması.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Kasım 2024",
      type: "Yarışma",
   },
   {
      id: 9,
      title: "Yaratıcı Yazarlık Kampı",
      description: "Doğayla iç içe bir ortamda, yoğunlaştırılmış yaratıcı yazarlık eğitimi sunan, ilham verici bir hafta sonu kampı.",
      image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Haziran 2024",
      type: "Kamp",
   },
   {
      id: 10,
      title: "Edebiyat Dünyası Mobil Uygulaması",
      description: "Kitap önerileri, yazarlık ipuçları, edebiyat haberleri ve okuma takibi özellikleri sunan kapsamlı bir mobil uygulama.",
      image: "https://images.unsplash.com/photo-1522159698025-071104a1ddbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      releaseDate: "Ağustos 2024",
      type: "Uygulama",
   },
];

export function ComingSoon() {
   return (
      <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
         {/* Arka plan dekoratif elementleri */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
         </div>

         <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-up">
               <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Yakında Geliyor</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Üzerinde çalıştığım yeni projeler</p>
               </div>
            </div>

            <div className="relative w-full px-10">
               {/* Slider kontrolleri - dışarıda */}
               <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
                  <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm shadow-md h-10 w-10" id="prev-project">
                     <ChevronLeft className="h-6 w-6" />
                     <span className="sr-only">Önceki</span>
                  </Button>
               </div>

               <div className="overflow-hidden">
                  <div className="flex gap-3 transition-transform duration-300 projects-slider">
                     {upcomingProjects.map((project, index) => (
                        <div key={project.id} className="min-w-[180px] md:min-w-[200px] flex-shrink-0 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                           <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                              <div className="relative w-full h-28">
                                 <Image src={project.image} alt={project.title} fill className="object-cover" />
                                 <div className="absolute top-2 right-2">
                                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-[10px] px-1.5 py-0.5">
                                       {project.type}
                                    </Badge>
                                 </div>
                              </div>
                              <CardHeader className="px-2 py-1.5 space-y-0.5">
                                 <CardTitle className="text-sm">{project.title}</CardTitle>
                                 <CardDescription className="text-[10px]">Çıkış: {project.releaseDate}</CardDescription>
                              </CardHeader>
                              <CardContent className="px-2 pb-2 pt-0">
                                 <p className="text-muted-foreground text-[10px] line-clamp-2">{project.description}</p>
                              </CardContent>
                           </Card>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm shadow-md h-10 w-10" id="next-project">
                     <ChevronRight className="h-6 w-6" />
                     <span className="sr-only">Sonraki</span>
                  </Button>
               </div>
            </div>

            {/* Slider dots */}
            <div className="flex justify-center gap-2 mt-6">
               {Array.from({ length: Math.ceil(upcomingProjects.length / 6) }).map((_, index) => (
                  <button
                     key={index}
                     className={`w-2 h-2 rounded-full bg-primary/20 transition-all duration-300 project-dot ${index === 0 ? "w-4 bg-primary" : ""}`}
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
                  const slider = document.querySelector('.projects-slider');
                  const prevBtn = document.getElementById('prev-project');
                  const nextBtn = document.getElementById('next-project');
                  const dots = document.querySelectorAll('.project-dot');
                  const itemWidth = 200; // Bir öğenin genişliği
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
                     const maxIndex = ${upcomingProjects.length} - itemsPerPage;
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
      </section>
   );
}
