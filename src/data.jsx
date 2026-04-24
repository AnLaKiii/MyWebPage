// Static data for the portfolio

const PROFILE = {
  name: "Kaan Kürşat Kılıç",
  role: "Software & Data Engineer",
  tagline: "Veritabanları, veri analizi ve yapay zekâ ile çalışan bir bilgisayar mühendisi.",
  location: "İstanbul, Türkiye",
  email: "kaankursatkilic@gmail.com",
  phone: "+90 507 764 22 95",
  github: "https://github.com/AnLaKiii",
  linkedin: "https://www.linkedin.com/in/kaan-k%C3%BCr%C5%9Fat-k%C4%B1l%C4%B1%C3%A7/",
  available: true,
};

// Featured GitHub projects (curated from his public repos)
const PROJECTS = [
  {
    id: "dbAnomaly",
    title: "DB Anomaly Detection",
    subtitle: "Bitirme Projesi · ML + DL",
    desc: "Makine öğrenmesi ve derin öğrenme (LSTM, RNN, Random Forest, SVM, KNN) ile veritabanı anomalilerini tespit eden web tabanlı karar destek sistemi. Otomatik PDF raporlama ve Telegram bildirimleri dahil.",
    tags: ["Python", "Flask", "React", "MSSQL", "LSTM", "Telegram API"],
    lang: "Python",
    langColor: "oklch(72% 0.14 250)",
    repo: "https://github.com/AnLaKiii/dbAnomalyDetection",
    category: "ai",
    featured: true,
  },
  {
    id: "movieChatbot",
    title: "Akıllı Film Önerici",
    subtitle: "RAG + Gemini",
    desc: "Kullanıcının girdiği tür veya konuya göre film öneren RAG sistemi. ChromaDB ile vektör arama, Gemini API ile alaka puanlaması.",
    tags: ["Python", "Streamlit", "Gemini", "ChromaDB", "RAG"],
    lang: "Python",
    langColor: "oklch(72% 0.14 250)",
    repo: "https://github.com/AnLaKiii/movie_suggestion_chatbot",
    category: "ai",
  },
  {
    id: "todoList",
    title: "Python To-Do List",
    subtitle: "Masaüstü uygulama",
    desc: "Tkinter ile geliştirilmiş, tarih/saat kontrollü görev yönetim uygulaması. Dosya tabanlı kalıcı depolama.",
    tags: ["Python", "Tkinter", "GUI"],
    lang: "Python",
    langColor: "oklch(72% 0.14 250)",
    repo: "https://github.com/AnLaKiii/todoList",
    category: "yazilim",
  },
  {
    id: "chatbotTemelleri",
    title: "Chatbot Geliştirme Temelleri",
    subtitle: "Ders Notları",
    desc: "Marmara Üniversitesi ve YTÜ kapsamındaki üretken yapay zekâ ile chatbot geliştirme dersinin açık kaynak notları.",
    tags: ["NLP", "LLM", "Education"],
    lang: "Jupyter",
    langColor: "oklch(80% 0.14 55)",
    repo: "https://github.com/AnLaKiii/uretken-yapayzeka-chatbot-gelistirme-temelleri",
    category: "ai",
  },
  {
    id: "hastaneKayit",
    title: "Hastane Kayıt Sistemi",
    subtitle: "C# Masaüstü",
    desc: "Klinik hasta kayıt ve yönetim uygulaması. C# + SQL tabanlı; kayıt, arama ve raporlama modülleri.",
    tags: ["C#", "SQL", "Windows Forms"],
    lang: "C#",
    langColor: "oklch(65% 0.18 300)",
    repo: "https://github.com/AnLaKiii/Hastane-Kayit-Sistemi",
    category: "yazilim",
  },
  {
    id: "javaDers",
    title: "Java Ders Takip",
    subtitle: "Ders projesi",
    desc: "Öğrencilerin ders ve not takibi yapabileceği Java tabanlı uygulama. OOP prensipleri üzerine kurulu.",
    tags: ["Java", "OOP"],
    lang: "Java",
    langColor: "oklch(70% 0.17 35)",
    repo: "https://github.com/AnLaKiii/Java-Ders-Takip",
    category: "yazilim",
  },
];

// Certifications
const CERTS = [
  { img: "images/SQL101.png", title: "SQL 101", issuer: "Geleceği Yazanlar", cat: "Veri Tabanı" },
  { img: "images/sql.png", title: "İleri SQL", issuer: "Udemy", cat: "Veri Tabanı" },
  { img: "images/c_c++.png", title: "C / C++ Programlama", issuer: "Udemy", cat: "Yazılım" },
  { img: "images/web.png", title: "Web Geliştirme", issuer: "Udemy", cat: "Web" },
  { img: "images/temel_network.png", title: "Temel Network", issuer: "Geleceği Yazanlar", cat: "Ağ" },
  { img: "images/ileri_ag_teknolojileri.png", title: "İleri Ağ Teknolojileri", issuer: "BTK Akademi", cat: "Ağ" },
  { img: "images/linux101.png", title: "Linux 101", issuer: "Geleceği Yazanlar", cat: "Linux" },
  { img: "images/linux201.png", title: "Linux 201", issuer: "Geleceği Yazanlar", cat: "Linux" },
  { img: "images/linux301.png", title: "Linux 301", issuer: "Geleceği Yazanlar", cat: "Linux" },
  { img: "images/linux401.png", title: "Linux 401", issuer: "Geleceği Yazanlar", cat: "Linux" },
];

// PDF documents (certificates & references) — shown as downloadable PDF cards
const DOCS = [
  { pdf: "documents/sertifika-1.pdf", title: "Sertifika", issuer: "Resmi Belge", cat: "Sertifika" },
  { pdf: "documents/referans-1.pdf", title: "Referans Mektubu", issuer: "Referans", cat: "Referans" },
];
window.DOCS = DOCS;

const EXPERIENCE = [
  {
    date: "Aralık 2023 — Haziran 2025",
    title: "Database Administrator",
    org: "Dataplatform",
    desc: "Kurumsal veri tabanlarının yönetimi, performans izleme, yedekleme ve güvenlik süreçlerinde aktif rol. Python ile masaüstü uygulamalar ve otomasyon araçları geliştirdim; AI destekli anomali tespiti projelerinde yer aldım.",
    current: false,
  },
  {
    date: "Temmuz 2023 — Eylül 2023",
    title: "BT Stajyeri",
    org: "Modern Ambalaj",
    desc: "C# ve SQL ile şirkete özel masaüstü uygulaması geliştirdim. Yazılım geliştirme süreçleri ve iş entegrasyonu konularında saha deneyimi kazandım.",
    current: false,
  },
];

const EDUCATION = [
  {
    date: "Eylül 2021 — Haziran 2025",
    title: "Bilgisayar Mühendisliği",
    org: "Marmara Üniversitesi",
    desc: "Yazılım geliştirme, veri yapıları, veri tabanı sistemleri ve yapay zekâ üzerine odaklandım. Farklı dillerde çok sayıda proje geliştirdim.",
    current: false,
  },
  {
    date: "Eylül 2023 — Günümüz",
    title: "Yönetim Bilişim Sistemleri",
    org: "Anadolu Üniversitesi",
    desc: "İş süreçleri, bilgi sistemleri yönetimi ve organizasyonel yapılar üzerine destekleyici bir eğitim. Teknik altyapımı yönetsel bakış açısıyla tamamlıyorum.",
    current: true,
  },
];

const SKILLS = [
  { group: "Diller", items: ["Python", "Java", "C / C++", "C#", "JavaScript", "SQL"] },
  { group: "Web & UI", items: ["React", "HTML", "CSS", "Streamlit", "Flask", "Ant Design"] },
  { group: "Veri & AI", items: ["MSSQL", "MySQL", "ChromaDB", "LSTM / RNN", "Random Forest", "Gemini API"] },
  { group: "Araçlar", items: ["Git", "Linux", "Docker", "Tkinter", "Telegram Bot API"] },
];

window.PROFILE = PROFILE;
window.PROJECTS = PROJECTS;
window.CERTS = CERTS;
window.EXPERIENCE = EXPERIENCE;
window.EDUCATION = EDUCATION;
window.SKILLS = SKILLS;
