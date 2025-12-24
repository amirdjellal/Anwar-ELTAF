
// كائن يحتوي على النصوص بكلتا اللغتين
const translations = {
    ar: {
        // النصوص العامة
        "company-name": "الشركة المتطورة",
        "company-subtitle": "للمواد الكهربائية",
        "lang-text": "EN",
        
        // روابط التنقل
        "nav-home": "الرئيسية",
        "nav-gallery": "معرض الصور",
        "nav-services": "خدماتنا",
        "nav-location": "الموقع الجغرافي",
        "nav-contact": "تواصل معنا",
        
        // الصفحة الرئيسية
        "hero-title": "الشركة المتطورة للمواد الكهربائية",
        "hero-description": "نوفر جميع المواد الكهربائية بجودة عالية وأسعار تنافسية. خبرة أكثر من 20 عاماً في توريد وتركيب المواد الكهربائية للقطاعات الصناعية والتجارية والسكنية.",
        "hero-contact-btn": "اتصل بنا الآن",
        "hero-services-btn": "خدماتنا",
        "featured-products": "أهم المنتجات",
        "product1-title": "أنظمة الإضاءة الحديثة",
        "product1-desc": "LED، إضاءة ذكية، إنارة طوارئ",
        "product2-title": "معدات التوصيل والتوزيع",
        "product2-desc": "مفاتيح، مقابس، لوحات توزيع",
        "product3-title": "أنظمة التحكم الآلي",
        "product3-desc": "أتمتة المنازل والمصانع",
        "product4-title": "كابلات وأسلاك كهربائية",
        "product4-desc": "جميع المقاسات والأنواع",
        "about-title": "لمحة عن شركتنا",
        "about-description": "نحن رواد في مجال توريد المواد الكهربائية منذ عام 2000، نقدم حلولاً متكاملة تلبي احتياجات السوق المحلي والعالمي.",
        "feature1-title": "الجودة والتميز",
        "feature1-desc": "نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا.",
        "feature2-title": "فريق متخصص",
        "feature2-desc": "فريق من المهندسين والفنيين ذوي الخبرة الطويلة في المجال.",
        "feature3-title": "توصيل سريع",
        "feature3-desc": "خدمة توصيل سريعة وموثوقة لجميع أنحاء المملكة.",
        "explore-title": "استكشف موقعنا",
        "explore-description": "تصفح أقسام موقعنا للتعرف على منتجاتنا وخدماتنا",
        "card1-title": "معرض الصور",
        "card1-desc": "تصفح صور منتجاتنا ومشاريعنا الناجحة",
        "card2-title": "خدماتنا",
        "card2-desc": "تعرف على خدماتنا المتكاملة في مجال الكهرباء",
        "card3-title": "الموقع الجغرافي",
        "card3-desc": "اعرف موقع فروعنا وطريقة الوصول إلينا",
        "card4-title": "تواصل معنا",
        "card4-desc": "اتصل بنا للاستفسار عن منتجاتنا وخدماتنا",
        
        // معرض الصور
        "gallery-title": "معرض الصور",
        "gallery-description": "تعرف على منتجاتنا ومشاريعنا من خلال معرض الصور الذي يضم أحدث المواد الكهربائية والتطبيقات العملية",
        "all-category-btn": "الكل",
        "lighting-category-btn": "الإضاءة",
        "distribution-category-btn": "التوزيع",
        "cables-category-btn": "الكابلات",
        "projects-category-btn": "المشاريع",
        "gallery-item1-title": "لوحات التوزيع الكهربائية",
        "gallery-item1-desc": "ألواح توزيع كهربائية عالية الجودة بمواصفات أوروبية",
        "gallery-item2-title": "أنظمة إضاءة LED",
        "gallery-item2-desc": "إضاءة موفرة للطاقة وعمر تشغيلي طويل",
        "gallery-item3-title": "كابلات وأسلاك",
        "gallery-item3-desc": "كابلات كهربائية بمعايير الجودة العالمية",
        "gallery-item4-title": "مفاتيح ومقابس",
        "gallery-item4-desc": "تصاميم حديثة وعملية مع ضمان الجودة",
        "gallery-item5-title": "أنظمة أتمتة المنازل",
        "gallery-item5-desc": "تحكم ذكي في الإضاءة والأجهزة الكهربائية",
        "gallery-item6-title": "مشاريع تجارية",
        "gallery-item6-desc": "توريد وتركيب المواد الكهربائية للمشاريع التجارية",
        "gallery-item7-title": "إضاءة خارجية",
        "gallery-item7-desc": "أنظمة إضاءة للمساحات الخارجية والحدائق",
        "gallery-item8-title": "كابلات أرضية",
        "gallery-item8-desc": "كابلات مدفونة عالية الجودة للاستخدام الخارجي",
        "gallery-item9-title": "معدات صناعية",
        "gallery-item9-desc": "معدات كهربائية للاستخدام في البيئات الصناعية",
        
        // خدماتنا
        "services-title": "خدماتنا",
        "services-description": "نقدم مجموعة واسعة من الخدمات في مجال المواد الكهربائية لتلبية احتياجات جميع القطاعات",
        "service1-title": "توريد المواد الكهربائية",
        "service1-description": "نوفر جميع أنواع المواد الكهربائية من كابلات، مفاتيح، مقابس، لوحات توزيع، وأنظمة إضاءة بجودة عالية.",
        "service1-feature1": "جميع المقاسات والأنواع",
        "service1-feature2": "شهادات ضمان الجودة",
        "service1-feature3": "أسعار تنافسية",
        "service2-title": "تركيب وصيانة الأنظمة الكهربائية",
        "service2-description": "فريق فني متخصص في تركيب وصيانة الأنظمة الكهربائية للمنازل والمصانع والمرافق التجارية.",
        "service2-feature1": "فنيون مؤهلون ومرخصون",
        "service2-feature2": "خدمة صيانة دورية",
        "service2-feature3": "تدقيق أنظمة السلامة",
        "service3-title": "حلول الإضاءة المتطورة",
        "service3-description": "تصميم وتركيب أنظمة إضاءة مبتكرة وموفرة للطاقة باستخدام أحدث تقنيات LED والإضاءة الذكية.",
        "service3-feature1": "تصميم إضاءة مخصص",
        "service3-feature2": "أنظمة إضاءة ذكية",
        "service3-feature3": "توفير طاقة يصل إلى 80%",
        "service4-title": "أنظمة الطاقة الشمسية",
        "service4-description": "تصميم وتركيب أنظمة الطاقة الشمسية للمنازل والمصانع لتوليد الكهرباء النظيفة والمتجددة.",
        "service4-feature1": "أنظمة متكاملة",
        "service4-feature2": "دراسات جدوى اقتصادية",
        "service4-feature3": "صيانة وتشغيل",
        "service5-title": "أتمتة المنازل الذكية",
        "service5-description": "تحويل منزلك إلى منزل ذكي يمكن التحكم في إضاءته وأجهزته عن بعد عبر الهاتف الذكي.",
        "service5-feature1": "أنظمة تحكم مركزية",
        "service5-feature2": "تكامل مع الأجهزة الذكية",
        "service5-feature3": "توفير في استهلاك الطاقة",
        "service6-title": "استشارات هندسية",
        "service6-description": "تقديم استشارات هندسية متخصصة في مجال الكهرباء والطاقة للمشاريع الجديدة والتجديدات.",
        "service6-feature1": "دراسات الجدوى الفنية",
        "service6-feature2": "تصميم الأنظمة الكهربائية",
        "service6-feature3": "إشراف على التنفيذ",
        "consultation-title": "استشارات هندسية كهربائية",
        "consultation-description": "نقدم استشارات هندسية متخصصة في مجال الكهرباء والطاقة، بما في ذلك تصميم الأنظمة الكهربائية للمشاريع الجديدة وتطوير الأنظمة القائمة لتحسين كفاءتها وتقليل استهلاك الطاقة.",
        "consultation-btn": "اطلب استشارة مجانية",
        "support-title": "دعم فني متواصل",
        "support-description": "نوفر دعم فني على مدار الساعة لحل أي مشكلة كهربائية طارئة.",
        
        // الموقع الجغرافي
        "location-title": "الموقع الجغرافي",
        "location-description": "زورنا في موقعنا الرئيسي أو اتصل بنا للتعرف على فروعنا الأخرى",
        "main-address-title": "العنوان الرئيسي",
        "main-address": "الرياض، حي العليا، شارع الملك فهد، بجوار مركز العليا التجاري",
        "branches-title": "معلومات الفروع",
        "branch1-title": "الفرع الرئيسي - الرياض",
        "branch1-address": "الرياض، حي العليا، شارع الملك فهد",
        "branch1-hours": "من السبت إلى الخميس، 8 صباحاً - 10 مساءً",
        "branch2-title": "فرع جدة",
        "branch2-address": "جدة، حي السلامة، شارع الأمير سلطان",
        "branch2-hours": "من السبت إلى الخميس، 8 صباحاً - 10 مساءً",
        "branch3-title": "فرع الدمام",
        "branch3-address": "الدمام، حي النزهة، شارع الملك عبدالله",
        "branch3-hours": "من السبت إلى الخميس، 8 صباحاً - 10 مساءً",
        "working-hours-title": "أوقات العمل",
        "weekdays": "السبت - الخميس",
        "friday": "الجمعة",
        
        // تواصل معنا
        "contact-title": "تواصل معنا",
        "contact-description": "نحن هنا لمساعدتك في جميع استفساراتك المتعلقة بالمواد الكهربائية. لا تتردد في التواصل معنا",
        "contact-info-title": "معلومات التواصل",
        "phone-title": "الهاتف",
        "email-title": "البريد الإلكتروني",
        "address-title": "العنوان",
        "address-text": "الرياض، حي العليا، شارع الملك فهد، بجوار مركز العليا التجاري",
        "working-hours-title": "أوقات العمل",
        "weekdays-hours": "السبت - الخميس: 8 صباحاً - 10 مساءً",
        "friday-hours": "الجمعة: 4 مساءً - 10 مساءً",
        "social-media-title": "تابعنا على وسائل التواصل",
        "send-message-title": "أرسل رسالة",
        "send-message-description": "يرجى تعبئة النموذج التالي وسنقوم بالرد عليك في أقرب وقت ممكن",
        "name-label": "الاسم الكامل *",
        "phone-label": "رقم الهاتف *",
        "email-label": "البريد الإلكتروني *",
        "subject-label": "الموضوع *",
        "select-subject": "اختر الموضوع",
        "option-inquiry": "استفسار عن منتج",
        "option-quotation": "طلب تسعير",
        "option-service": "طلب خدمة",
        "option-support": "دعم فني",
        "option-other": "موضوع آخر",
        "message-label": "الرسالة *",
        "send-button": "إرسال الرسالة",
        
        // تذييل الصفحة
        "footer-company-name": "الشركة المتطورة",
        "footer-company-subtitle": "للمواد الكهربائية",
        "footer-description": "شركة رائدة في توريد وتركيب المواد الكهربائية بجميع أنواعها. نحن نلتزم بتقديم منتجات عالية الجودة وخدمات متميزة لعملائنا.",
        "footer-links1-title": "روابط سريعة",
        "footer-links2-title": "روابط إضافية",
        "copyright": "جميع الحقوق محفوظة © 2023 الشركة المتطورة للمواد الكهربائية",
        "privacy-policy": "سياسة الخصوصية",
        "terms": "الشروط والأحكام"
    },
    
    en: {
        // General texts
        "company-name": "Advanced Company",
        "company-subtitle": "For Electrical Materials",
        "lang-text": "AR",
        
        // Navigation links
        "nav-home": "Home",
        "nav-gallery": "Gallery",
        "nav-services": "Our Services",
        "nav-location": "Location",
        "nav-contact": "Contact Us",
        
        // Home page
        "hero-title": "Advanced Electrical Materials Company",
        "hero-description": "We provide all electrical materials with high quality and competitive prices. Over 20 years of experience in supplying and installing electrical materials for industrial, commercial and residential sectors.",
        "hero-contact-btn": "Contact Us Now",
        "hero-services-btn": "Our Services",
        "featured-products": "Featured Products",
        "product1-title": "Modern Lighting Systems",
        "product1-desc": "LED, Smart Lighting, Emergency Lighting",
        "product2-title": "Connection and Distribution Equipment",
        "product2-desc": "Switches, Sockets, Distribution Panels",
        "product3-title": "Automation Control Systems",
        "product3-desc": "Home and Factory Automation",
        "product4-title": "Electrical Cables and Wires",
        "product4-desc": "All Sizes and Types",
        "about-title": "About Our Company",
        "about-description": "We are pioneers in the field of electrical materials supply since 2000, providing integrated solutions that meet the needs of the local and global market.",
        "feature1-title": "Quality & Excellence",
        "feature1-desc": "We are committed to the highest quality standards in all our products and services.",
        "feature2-title": "Specialized Team",
        "feature2-desc": "A team of engineers and technicians with long experience in the field.",
        "feature3-title": "Fast Delivery",
        "feature3-desc": "Fast and reliable delivery service throughout the Kingdom.",
        "explore-title": "Explore Our Site",
        "explore-description": "Browse our site sections to learn about our products and services",
        "card1-title": "Photo Gallery",
        "card1-desc": "Browse photos of our products and successful projects",
        "card2-title": "Our Services",
        "card2-desc": "Learn about our integrated services in the electrical field",
        "card3-title": "Location",
        "card3-desc": "Find our branch locations and how to reach us",
        "card4-title": "Contact Us",
        "card4-desc": "Contact us to inquire about our products and services",
        
        // Gallery page
        "gallery-title": "Photo Gallery",
        "gallery-description": "Get to know our products and projects through the photo gallery that includes the latest electrical materials and practical applications",
        "all-category-btn": "All",
        "lighting-category-btn": "Lighting",
        "distribution-category-btn": "Distribution",
        "cables-category-btn": "Cables",
        "projects-category-btn": "Projects",
        "gallery-item1-title": "Electrical Distribution Panels",
        "gallery-item1-desc": "High quality electrical distribution panels with European specifications",
        "gallery-item2-title": "LED Lighting Systems",
        "gallery-item2-desc": "Energy-saving lighting with long operational life",
        "gallery-item3-title": "Cables and Wires",
        "gallery-item3-desc": "Electrical cables with global quality standards",
        "gallery-item4-title": "Switches and Sockets",
        "gallery-item4-desc": "Modern and practical designs with quality guarantee",
        "gallery-item5-title": "Home Automation Systems",
        "gallery-item5-desc": "Smart control of lighting and electrical appliances",
        "gallery-item6-title": "Commercial Projects",
        "gallery-item6-desc": "Supply and installation of electrical materials for commercial projects",
        "gallery-item7-title": "Outdoor Lighting",
        "gallery-item7-desc": "Lighting systems for outdoor spaces and gardens",
        "gallery-item8-title": "Underground Cables",
        "gallery-item8-desc": "High quality buried cables for outdoor use",
        "gallery-item9-title": "Industrial Equipment",
        "gallery-item9-desc": "Electrical equipment for use in industrial environments",
        
        // Services page
        "services-title": "Our Services",
        "services-description": "We provide a wide range of services in the field of electrical materials to meet the needs of all sectors",
        "service1-title": "Supply of Electrical Materials",
        "service1-description": "We provide all types of electrical materials including cables, switches, sockets, distribution panels, and lighting systems with high quality.",
        "service1-feature1": "All sizes and types",
        "service1-feature2": "Quality assurance certificates",
        "service1-feature3": "Competitive prices",
        "service2-title": "Installation and Maintenance of Electrical Systems",
        "service2-description": "A specialized technical team in installing and maintaining electrical systems for homes, factories and commercial facilities.",
        "service2-feature1": "Qualified and licensed technicians",
        "service2-feature2": "Regular maintenance service",
        "service2-feature3": "Safety system auditing",
        "service3-title": "Advanced Lighting Solutions",
        "service3-description": "Design and installation of innovative and energy-saving lighting systems using the latest LED and smart lighting technologies.",
        "service3-feature1": "Custom lighting design",
        "service3-feature2": "Smart lighting systems",
        "service3-feature3": "Up to 80% energy saving",
        "service4-title": "Solar Energy Systems",
        "service4-description": "Design and installation of solar energy systems for homes and factories to generate clean and renewable electricity.",
        "service4-feature1": "Integrated systems",
        "service4-feature2": "Economic feasibility studies",
        "service4-feature3": "Maintenance and operation",
        "service5-title": "Smart Home Automation",
        "service5-description": "Transform your home into a smart home that can control its lighting and devices remotely via smartphone.",
        "service5-feature1": "Central control systems",
        "service5-feature2": "Integration with smart devices",
        "service5-feature3": "Energy consumption saving",
        "service6-title": "Engineering Consultations",
        "service6-description": "Providing specialized engineering consultations in the field of electricity and energy for new projects and renovations.",
        "service6-feature1": "Technical feasibility studies",
        "service6-feature2": "Electrical system design",
        "service6-feature3": "Supervision of implementation",
        "consultation-title": "Electrical Engineering Consultations",
        "consultation-description": "We provide specialized engineering consultations in the field of electricity and energy, including designing electrical systems for new projects and developing existing systems to improve their efficiency and reduce energy consumption.",
        "consultation-btn": "Request Free Consultation",
        "support-title": "Continuous Technical Support",
        "support-description": "We provide 24/7 technical support to solve any emergency electrical problem.",
        
        // Location page
        "location-title": "Location",
        "location-description": "Visit us at our main location or contact us to learn about our other branches",
        "main-address-title": "Main Address",
        "main-address": "Riyadh, Al Olaya District, King Fahd Road, next to Al Olaya Commercial Center",
        "branches-title": "Branches Information",
        "branch1-title": "Main Branch - Riyadh",
        "branch1-address": "Riyadh, Al Olaya District, King Fahd Road",
        "branch1-hours": "Saturday to Thursday, 8 AM - 10 PM",
        "branch2-title": "Jeddah Branch",
        "branch2-address": "Jeddah, Al Salamah District, Prince Sultan Street",
        "branch2-hours": "Saturday to Thursday, 8 AM - 10 PM",
        "branch3-title": "Dammam Branch",
        "branch3-address": "Dammam, Al Nuzha District, King Abdullah Street",
        "branch3-hours": "Saturday to Thursday, 8 AM - 10 PM",
        "working-hours-title": "Working Hours",
        "weekdays": "Saturday - Thursday",
        "friday": "Friday",
        
        // Contact page
        "contact-title": "Contact Us",
        "contact-description": "We are here to help you with all your inquiries related to electrical materials. Do not hesitate to contact us",
        "contact-info-title": "Contact Information",
        "phone-title": "Phone",
        "email-title": "Email",
        "address-title": "Address",
        "address-text": "Riyadh, Al Olaya District, King Fahd Road, next to Al Olaya Commercial Center",
        "working-hours-title": "Working Hours",
        "weekdays-hours": "Saturday - Thursday: 8 AM - 10 PM",
        "friday-hours": "Friday: 4 PM - 10 PM",
        "social-media-title": "Follow us on Social Media",
        "send-message-title": "Send a Message",
        "send-message-description": "Please fill out the form below and we will get back to you as soon as possible",
        "name-label": "Full Name *",
        "phone-label": "Phone Number *",
        "email-label": "Email Address *",
        "subject-label": "Subject *",
        "select-subject": "Select Subject",
        "option-inquiry": "Product Inquiry",
        "option-quotation": "Price Request",
        "option-service": "Service Request",
        "option-support": "Technical Support",
        "option-other": "Other Subject",
        "message-label": "Message *",
        "send-button": "Send Message",
        
        // Footer
        "footer-company-name": "Advanced Company",
        "footer-company-subtitle": "For Electrical Materials",
        "footer-description": "A leading company in the supply and installation of all types of electrical materials. We are committed to providing high-quality products and excellent services to our customers.",
        "footer-links1-title": "Quick Links",
        "footer-links2-title": "Additional Links",
        "copyright": "All Rights Reserved © 2023 Advanced Electrical Materials Company",
        "privacy-policy": "Privacy Policy",
        "terms": "Terms & Conditions"
    }
};

// الحالة الحالية للغة
let currentLang = 'ar';

// دالة لتبديل اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(currentLang);
    localStorage.setItem('language', currentLang);
}

// دالة لتطبيق اللغة
function applyLanguage(lang) {
    // تحديث اتجاه الصفحة
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // تحديث النصوص
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const id = element.id;
        if (translations[lang] && translations[lang][id]) {
            element.textContent = translations[lang][id];
        }
    });
    
    // تحديث زر تبديل اللغة
    const langButton = document.getElementById('lang-text');
    if (langButton) {
        langButton.textContent = translations[lang]['lang-text'];
    }
}

// تهيئة اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحميل اللغة المحفوظة
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLang = savedLang;
    }
    
    // تطبيق اللغة
    applyLanguage(currentLang);
    
    // إضافة حدث لزر تبديل اللغة
    const langSwitchButton = document.getElementById('lang-switch');
    if (langSwitchButton) {
        langSwitchButton.addEventListener('click', toggleLanguage);
    }
});

// جعل الدوال متاحة عالمياً
window.toggleLanguage = toggleLanguage;
window.applyLanguage = applyLanguage;