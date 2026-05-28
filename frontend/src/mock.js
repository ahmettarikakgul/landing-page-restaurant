// Mock data for RestoraX - Restaurant SaaS Platform

export const mockData = {
  // Product modules
  modules: [
    {
      id: 1,
      icon: 'QrCode',
      title: 'QR Menü',
      description: 'Dijital menü sistemi ile müşterilerinize temassız, hızlı ve modern bir deneyim sunun.',
      features: ['Sınırsız ürün', 'Çoklu dil desteği', 'Anında güncelleme']
    },
    {
      id: 2,
      icon: 'Receipt',
      title: 'Adisyon Yönetimi',
      description: 'Masaları takip edin, siparişleri yönetin, ödeme süreçlerini hızlandırın.',
      features: ['Hızlı sipariş', 'Bölünmüş hesap', 'Anlık raporlama']
    },
    {
      id: 3,
      icon: 'LayoutGrid',
      title: 'Masa Yönetimi',
      description: 'Restoran planınızı dijitalleştirin, masa durumlarını anlık takip edin.',
      features: ['Görsel masa planı', 'Rezervasyon sistemi', 'Durum takibi']
    },
    {
      id: 4,
      icon: 'Building2',
      title: 'Çoklu Şube',
      description: 'Tüm şubelerinizi tek panelden yönetin, merkezi kontrol sağlayın.',
      features: ['Merkezi yönetim', 'Şube raporları', 'Stok transferi']
    },
    {
      id: 5,
      icon: 'Box',
      title: '3D QR Vitrin',
      description: 'Ürünlerinizi 3D görseller ve detaylı içeriklerle müşterilerinize tanıtın.',
      features: ['3D görselleştirme', 'Detaylı açıklamalar', 'Alerjik uyarılar']
    },
    {
      id: 6,
      icon: 'Users',
      title: 'Garson Operasyonları',
      description: 'Garson ekibinizi dijitalleştirin, sipariş süreçlerini optimize edin.',
      features: ['Mobil sipariş', 'Masa transferi', 'Performans takibi']
    },
    {
      id: 7,
      icon: 'ChefHat',
      title: 'Mutfak Ekranı',
      description: 'Mutfak operasyonlarını optimize edin, sipariş akışını hızlandırın.',
      features: ['Sipariş sırası', 'Hazırlık zamanı', 'Departman yönetimi']
    },
    {
      id: 8,
      icon: 'BarChart3',
      title: 'Raporlama & Analiz',
      description: 'Detaylı raporlarla işletmenizi analiz edin, veriye dayalı kararlar alın.',
      features: ['Satış analizi', 'Ürün performansı', 'Personel raporları']
    }
  ],

  // Customer testimonials
  testimonials: [
    {
      id: 1,
      name: 'Mehmet Yılmaz',
      role: 'Kurucu, Burger Palace',
      content: 'RestoraX ile operasyonlarımızı dijitalleştirdik. Sipariş süremiz %40 azaldı, müşteri memnuniyeti arttı.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ayşe Demir',
      role: 'İşletme Müdürü, Cafe Aroma',
      content: 'QR menü ve masa yönetimi sistemleri sayesinde 3 şubemizi tek yerden yönetiyoruz. Harika bir çözüm.',
      rating: 5
    },
    {
      id: 3,
      name: 'Can Özkan',
      role: 'Patron, Lezzet Durağı',
      content: 'Mutfak ekranı ve garson uygulaması ile iş akışımız çok daha verimli. Ekip olarak çok memnunuz.',
      rating: 5
    }
  ],

  // Pricing plans
  pricingPlans: [
    {
      id: 1,
      name: 'Başlangıç',
      price: '₺1.499',
      period: '/ay',
      description: 'Küçük işletmeler için ideal',
      features: [
        'QR Menü',
        'Masa Yönetimi',
        'Adisyon Sistemi',
        '1 Şube',
        'Temel Raporlar',
        'Email Destek'
      ],
      highlighted: false
    },
    {
      id: 2,
      name: 'Profesyonel',
      price: '₺2.999',
      period: '/ay',
      description: 'Büyüyen restoranlar için',
      features: [
        'Tüm Başlangıç özellikleri',
        '3D QR Vitrin',
        'Mutfak Ekranı',
        '3 Şubeye kadar',
        'Gelişmiş Raporlar',
        'Öncelikli Destek',
        'Özelleştirme'
      ],
      highlighted: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Özel',
      period: 'fiyat',
      description: 'Zincir işletmeler için',
      features: [
        'Tüm Profesyonel özellikleri',
        'Sınırsız Şube',
        'API Entegrasyonu',
        'Özel Geliştirme',
        'Özel Eğitim',
        '7/24 Destek',
        'Hesap Yöneticisi'
      ],
      highlighted: false
    }
  ],

  // FAQ items
  faqs: [
    {
      id: 1,
      question: 'RestoraX nasıl çalışır?',
      answer: 'RestoraX, restoranınızın tüm operasyonlarını dijitalleştiren bulut tabanlı bir platformdur. QR menüden mutfak ekranına, masa yönetiminden raporlamaya kadar tüm süreçlerinizi tek bir sistemde yönetebilirsiniz.'
    },
    {
      id: 2,
      question: 'Kurulum ne kadar sürer?',
      answer: 'Temel kurulum 1 iş günü içinde tamamlanır. Menü girişi ve personel eğitimi dahil tam entegrasyon 3-5 iş günü sürmektedir. Teknik ekibimiz tüm süreçte yanınızda olacaktır.'
    },
    {
      id: 3,
      question: 'Mevcut sistemimle entegre olur mu?',
      answer: 'Evet, RestoraX esnek API yapısı sayesinde mevcut POS, muhasebe ve diğer sistemlerinizle entegre çalışabilir. Teknik ekibimiz entegrasyon sürecinde size destek verir.'
    },
    {
      id: 4,
      question: 'Destek hizmeti nasıl çalışır?',
      answer: 'Tüm paketlerde email destek standart olarak gelir. Profesyonel pakette öncelikli destek, Enterprise pakette ise 7/24 telefon ve WhatsApp desteği sunulmaktadır.'
    },
    {
      id: 5,
      question: 'Sözleşme süresi var mı?',
      answer: 'Minimum 3 aylık kullanım süresi bulunmaktadır. Sonrasında aylık veya yıllık (%20 indirimli) seçeneklerle devam edebilirsiniz. İstediğiniz zaman iptal edebilirsiniz.'
    },
    {
      id: 6,
      question: 'Verilerim güvende mi?',
      answer: 'Tüm verileriniz ISO 27001 sertifikalı veri merkezlerinde, şifreli olarak saklanır. Günlük yedekleme yapılır ve KVKK uyumlu çalışıyoruz.'
    }
  ],

  // Stats for social proof
  stats: [
    { label: 'Aktif Restoran', value: '1.200+' },
    { label: 'Günlük Sipariş', value: '50.000+' },
    { label: 'Şube Yönetimi', value: '3.500+' },
    { label: 'Müşteri Memnuniyeti', value: '%98' }
  ],

  // Feature highlights
  features: [
    {
      id: 1,
      title: 'Mobil Öncelikli',
      description: 'Tüm cihazlarda mükemmel çalışan, mobil optimizasyonlu sistem',
      icon: 'Smartphone'
    },
    {
      id: 2,
      title: 'Kolay Kullanım',
      description: 'Sezgisel arayüz ile dakikalar içinde öğrenin, hemen kullanmaya başlayın',
      icon: 'Zap'
    },
    {
      id: 3,
      title: 'Güvenilir Altyapı',
      description: 'Bulut tabanlı, %99.9 uptime garantili güvenilir sistem',
      icon: 'Shield'
    },
    {
      id: 4,
      title: 'Çoklu Dil',
      description: 'Menülerinizi dilediğiniz dillerde yayınlayın, uluslararası misafirlerinize hizmet verin',
      icon: 'Globe'
    }
  ]
};
