// Verified against personal and team/collaborator repositories. Keep unconfirmed demo URLs empty.
export const projects = [
  {
    id: 'perlahan', title: 'Perlahan App', category: 'APPLICATION',
    color: 'sage', mark: 'perlahan.',
    description: 'Proyek tim pengelolaan informasi lahan dengan fondasi Laravel. README membagi tugas autentikasi, akses pengguna, CRUD lahan, dan pencarian pada branch backend/adithya; fitur bisnis masih dikembangkan di branch tim.',
    stack: ['PHP', 'Laravel', 'Blade'], github: 'https://github.com/perlahan-app-team/perlahan-app', demo: '',
  },
  {
    id: 'parkir-rek', title: 'Parkir Rek', category: 'WEB / PARKING MANAGEMENT',
    color: 'blue', mark: 'parkir rek.',
    description: 'Sistem parkir digital kampus dengan akses mahasiswa dan admin, pencatatan masuk-keluar, pengelolaan kendaraan, riwayat parkir, serta pelaporan pelanggaran dengan foto.',
    stack: ['Laravel', 'Blade', 'Bootstrap', 'MySQL', 'Docker'], github: 'https://github.com/Zhacksdev/parkirrek-website', demo: '',
  },
  {
    id: 'credifox', title: 'CREDIFOX AI Chatbot', category: 'AI / RAG CHATBOT',
    color: 'sage', mark: 'credifox /', image: '/images/projects/credifox.png',
    description: 'Katalog 30 produk outdoor dengan pencarian, filter, dan chatbot RAG berbasis Groq. Proyek praktikum independen dengan frontend web dan gateway WhatsApp lokal.',
    stack: ['JavaScript', 'Node.js', 'Groq', 'Vercel'],
    github: 'https://github.com/adithyaananda2005-coder/chatbot-deploy',
    demo: 'https://chatbot-deploy-ten.vercel.app',
  },
  {
    id: 'pendekin', title: 'Pendekin', category: 'URL SHORTENER',
    color: 'peach', mark: 'pendek.in',
    description: 'Proyek tim pemendek URL dengan fondasi Laravel, Tailwind CSS, Vite, dan konfigurasi Docker. Branch main yang diperiksa masih berupa scaffold; fitur pemendek URL belum terlihat pada route utama.',
    stack: ['PHP', 'Laravel', 'Tailwind CSS', 'Vite', 'Docker'], github: 'https://github.com/Afandixd/Pendekin', demo: '',
  },
];
