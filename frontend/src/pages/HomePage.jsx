import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 ArrowLeft, 
 Zap,
 Users,
 Star,
 Play,
 Shield,
 Award,
 Globe,
 Coins
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SamsungPhone from '../components/SamsungPhone';
import TrustMetrics from '../components/TrustMetrics';
import TypewriterText from '../components/TypewriterText';
import ServicesSectionTitle from '../components/ServicesSectionTitle';
import VideoModal from '../components/VideoModal';
import '../styles/videoButton.css';

// Keep only ServiceCardA
import ServiceCardA from '../components/serviceCards/ServiceCardA.jsx';

const HomePage = () => {
 const heroRef = useRef(null);
 const phoneRef = useRef(null);
 const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

 useEffect(() => {
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add('fade-in');
 entry.target.classList.add('is-visible');
 }
 });
 },
 { threshold: 0.15 }
 );

 document.querySelectorAll('.animate-on-scroll').forEach((el) => {
 el.classList.remove('fade-in');
 el.classList.add('enter-fade-up');
 observer.observe(el);
 });

 return () => {
 observer.disconnect();
 };
 }, []);

 const features = [
 {
 icon: Zap,
 title: 'سرعة في المعاملات',
 description: 'معالجة فورية للدفعات والشحن خلال ثوانٍ معدودة'
 },
 {
 icon: Shield,
 title: 'أمان متقدم',
 description: 'حماية متعددة الطبقات لجميع معاملاتك المالية'
 },
 {
 icon: Award,
 title: 'خدمة موثوقة',
 description: 'سنوات من الخبرة والثقة في خدمات الدفع الإلكتروني'
 },
 {
 icon: Users,
 title: 'دعم مستمر',
 description: 'فريق دعم متخصص متاح 24/7 لخدمتك'
 },
 {
 icon: Globe,
 title: 'تغطية واسعة',
 description: 'دعم جميع المنصات والخدمات الرقمية العالمية'
 },
 {
 icon: Coins,
 title: 'أسعار تنافسية',
 description: 'أفضل أسعار السوق مع عروض وخصومات حصرية'
 }
 ];

 const testimonials = [
 {
 name: 'أحمد محمد',
 company: 'لاعب محترف',
 text: 'خدمة ممتازة وسريعة جداً! أشحن حساباتي في الألعاب بكل سهولة وأمان. الأسعار منافسة جداً والدعم الفني رائع.',
 rating: 5,
 avatar: 'أ'
 },
 {
 name: 'فاطمة العلي',
 company: 'مستخدمة منصات رقمية',
 text: 'أفضل موقع للدفع الإلكتروني جربته على الإطلاق. سهولة في الاستخدام وأمان في المعاملات. أنصح به الجميع.',
 rating: 5,
 avatar: 'ف'
 },
 {
 name: 'خالد السعود',
 company: 'تاجر عملات رقمية',
 text: 'التعامل معهم أكثر من رائع، خاصة في بيع وشراء العملات الرقمية. سرعة في التنفيذ وشفافية في الأسعار.',
 rating: 5,
 avatar: 'خ'
 }
 ];

 const faqData = [
 {
 question: 'كم تستغرق عملية الشحن؟',
 answer: 'معظم عمليات الشحن تتم خلال دقائق معدودة، وفي حالات نادرة قد تستغرق حتى ساعة واحدة كحد أقصى.'
 },
 {
 question: 'هل معاملاتي آمنة ومحمية؟',
 answer: 'نعم، نستخدم أحدث تقنيات الحماية والتشفير لضمان أمان جميع معاملاتك المالية والشخصية.'
 },
 {
 question: 'ما هي وسائل الدفع المتاحة؟',
 answer: 'نقبل جميع وسائل الدفع الرئيسية بما في ذلك البطاقات الائتمانية، المحافظ الرقمية، والتحويلات البنكية.'
 },
 {
 question: 'هل يمكنني استرداد أموالي؟',
 answer: 'نعم، نوفر سياسة استرداد واضحة للحالات المؤهلة وفقاً لشروط الاستخدام.'
 }
 ];

 return (
 <div className="min-h-screen">
 <Header />
 {/* Hero Section */}
 <section ref={heroRef} className="relative mt-5 sm:mt-0 overflow-hidden flex items-start sm:items-center sm:min-h-screen" style={{backgroundColor: '#FAF8F5'}}>
 <div className="container mx-auto px-4 pt-14 pb-8 sm:py-16">
 {/* Always two columns, no reordering */}
 <div className="grid grid-cols-2 items-center gap-6">
 {/* Text Content - Right Side */}
 <div className="col-span-1 origin-right sm:scale-[0.42]">
 <div className="text-center">
   <div className="inline-block w-full sm:w-auto glass-title-badge hero-title-floating-edges px-7 py-16 sm:py-3.5 text-[3rem] sm:text-[2rem] font-black tracking-tight sm:leading-tight mb-0 sm:mb-3 inline-badge hero-title-badge font-ghayaty min-h-[130px] sm:min-h-0 mt-3 sm:mt-0"
        style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'visible'
        }}>
     <div style={{ 
       width: '100%',
       maxWidth: '100%'
     }}>
       <TypewriterText 
         lines={[
           "المنصة الرائدة في حلول",
           "الدفع الإلكتروني في اليمن"
         ]}
         speed={80}
         delay={800}
         lineDelay={300}
         showCursor={true}
       />
     </div>
   </div>
{/* مساحة بيضاء فارغة للجوال فقط - تم تقليلها بسبب العنوان الأكبر */}

<div className="block sm:hidden h-2"></div>
<div className="hero-subtitle text-3xl sm:text-xl lg:text-2xl mb-0 sm:mb-8 leading-tight font-medium tracking-wide relative" role="paragraph">
  <span className="hero-enhanced-text bg-gradient-to-r from-slate-700 via-gray-700 to-slate-800 bg-clip-text text-transparent font-semibold leading-tight tracking-wide relative z-10 block">
    نضع بين يديك تجربة مالية مبتكرة ومصممة لتلبية معاملاتك اليومية بأعلى درجات الكفاءة وترتقي بأسلوبك المالي الرقمي إلى مستوى جديد من الراحة والثقة.
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/30 to-transparent opacity-50 blur-lg scale-103 animate-subtle-glow"></div>
  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 via-transparent to-gray-100/20 opacity-40 blur-xl scale-102"></div>
</div>
{/* زر ابدأ مشروعك الآن فقط في الجوال - تم نقله للأسفل */}
 
{/* الأزرار معاً في سطح المكتب */}
<div className="hidden sm:flex flex-row gap-2 justify-center mb-4 mt-8">
<Link
  to="/contact"
  className="hero-button cta-button bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
>
  ابدأ مشروعك الآن
  <ArrowLeft className="w-5 h-5" />
</Link>
<button 
  onClick={() => setIsVideoModalOpen(true)}
  className="hero-button video-demo-button text-blue-600 bg-white px-8 py-4 rounded-xl font-semibold text-lg hover:text-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative group overflow-visible gradient-border-button"
>
<span className="play-icon-wrapper relative">
  <Play className="w-5 h-5 play-icon" />
  <span className="play-pulse"></span>
</span>
شاهد العرض التوضيحي
</button>
</div>

{/* Trust metrics moved to full-width row below the hero grid */}

</div>
</div>

{/* Phone Mockup - Left Side (fixed position left visually) */}
<div className="col-span-1 origin-left place-self-start sm:place-self-auto scale-30 sm:scale-[0.42]">
<div ref={phoneRef} className="relative mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-3xl opacity-20 scale-110" aria-hidden></div>
<div className="relative z-10 animate-on-scroll" style={{ animationDelay: '0.05s' }}>
<SamsungPhone
screenImageSrc="/images/desert-balloon.jpeg"
screenImageAlt="منطاد فوق صحراء"
imageFit="cover"
imagePosition="center center"
tight={true}
/>
</div>
</div>
</div>
</div>
 
{/* الأزرار في نفس الخط الأفقي في عرض الجوال فقط */}
<div className="block sm:hidden mt-6 px-4">
<div className="grid grid-cols-2 gap-8 hero-btns-grid">
<Link
to="/contact"
className="hero-button cta-button bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-base hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
>
ابدأ مشروعك الآن
<ArrowLeft className="w-4 h-4" />
</Link>
<button 
  onClick={() => setIsVideoModalOpen(true)}
  className="hero-button video-demo-button text-blue-600 bg-white px-6 py-3 rounded-xl font-semibold text-base hover:text-purple-600 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative group overflow-visible gradient-border-button"
>
<span className="play-icon-wrapper relative">
  <Play className="w-4 h-4 play-icon" />
  <span className="play-pulse"></span>
</span>
شاهد العرض التوضيحي
</button>
</div>
</div>
 
{/* Full-width trust metrics bar below the buttons */}
<div className="mt-6">
<TrustMetrics />
</div>
</div>
</section>

{/* Services Section */}
<section className="pt-8 pb-20 bg-white" data-testid="our-services-section">
<div className="container mx-auto px-4">
<ServicesSectionTitle />

<div className="grid grid-cols-1 gap-8">
{/* Keep only ServiceCardA */}
<div className="animate-on-scroll flex justify-center" style={{ animationDelay: '0.1s' }}><ServiceCardA /></div>
</div>
</div>
</section>

{/* Features Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-4xl font-bold text-gray-900 mb-6">لماذا نحن الأفضل؟</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
نتميز بمجموعة من المزايا التي تجعلنا الخيار الأول لخدمات الدفع الإلكتروني
</p>
</div>

<div className="grid grid-cols-1 gap-8">
{features.map((feature, index) => (
<div
key={index}
className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 animate-on-scroll"
style={{ animationDelay: `${index * 0.1}s` }}
>
<div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<feature.icon className="w-8 h-8 text-white" />
</div>
<h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
<p className="text-gray-600 leading-relaxed">{feature.description}</p>
</div>
))}
</div>
</div>
</section>

{/* Testimonials Section */}
<section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
<div className="container mx-auto px-4">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-4xl font-bold mb-6">ماذا يقول عملاؤنا</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">
آراء وتجارب عملائنا الكرام هي أكبر دليل على جودة خدماتنا وموثوقيتنا
</p>
</div>

<div className="grid grid-cols-1 gap-8">
{testimonials.map((testimonial, index) => (
<div
key={index}
className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-on-scroll"
style={{ animationDelay: `${index * 0.1}s` }}
>
<div className="flex items-center gap-1 mb-4">
{[...Array(testimonial.rating)].map((_, i) => (
<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
))}
</div>
<p className="text-gray-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
<span className="text-white font-bold">{testimonial.avatar}</span>
</div>
<div>
<h4 className="font-semibold">{testimonial.name}</h4>
<p className="text-gray-400 text-sm">{testimonial.company}</p>
</div>
</div>
</div>
))}
</div>
</div>
</section>

{/* FAQ Section */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-4">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-4xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وطريقة استخدام منصتنا
</p>
</div>
<div className="max-w-4xl mx-auto">
{faqData.map((faq, index) => (
<div
key={index}
className="bg-white rounded-2xl p-6 mb-4 shadow-lg animate-on-scroll"
style={{ animationDelay: `${index * 0.1}s` }}
>
<h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
<p className="text-gray-600 leading-relaxed">{faq.answer}</p>
</div>
))}
</div>
</div>
</section>

{/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
<div className="container mx-auto px-4 text-center animate-on-scroll">
<h2 className="text-4xl font-bold mb-6">جاهز لبدء الشحن؟</h2>
<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
ابدأ الآن واستمتع بخدماتنا السريعة والآمنة لشحن ألعابك واشتراكاتك المفضلة
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link
 to="/contact"
 className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
 >
ابدأ الآن
<ArrowLeft className="w-5 h-5" />
</Link>
</div>
</div>
</section>

<Footer />

{/* Video Modal */}
<VideoModal 
  isOpen={isVideoModalOpen}
  onClose={() => setIsVideoModalOpen(false)}
  videoSrc="/videos/demo-video.mp4"
/>
</div>
 );
};

export default HomePage;