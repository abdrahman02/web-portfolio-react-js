// * TGA
import berandaTGA from "../assets/images/pengaduan kekerasan seksual/beranda.png";
import chatBotTGA from "../assets/images/pengaduan kekerasan seksual/chatbot.png";
import kekerasanSeksualTGA from "../assets/images/pengaduan kekerasan seksual/kekerasan-seksual.png";
import loginTGA from "../assets/images/pengaduan kekerasan seksual/login.png";

// * PT. Bina Utama
import indexPelanggan from "../assets/images/pt-bina-utama/index-pelanggan.png";
import login from "../assets/images/pt-bina-utama/login.png";
import tambahPelanggan from "../assets/images/pt-bina-utama/tambah-pelanggan.png";

// * SISFOPUS
import dashboard from "../assets/images/sisfopus/dashboard.png";
import homeSisfopus from "../assets/images/sisfopus/home.png";
import keranjangPeminjamanBuku from "../assets/images/sisfopus/keranjang-peminjaman-buku.png";
import loginSisfopus from "../assets/images/sisfopus/login.png";

// * Web PLN
import beritaPage from "../assets/images/web-pln/berita-page.png";
import dashboardAdmin from "../assets/images/web-pln/dashboard-admin.png";
import home from "../assets/images/web-pln/home.png";
import penyambunganBaruPelanggan from "../assets/images/web-pln/penyambungan-baru-pelanggan.png";

// * My other portfolio website
import portfolioBootstrap from "../assets/images/portfolio-bootstrap/portfolio-bootstrap.png";
import portfolioExpertises from "../assets/images/portfolio-bootstrap/expertises.png";

const Projects = [
  {
    images: [berandaTGA, chatBotTGA, kekerasanSeksualTGA, loginTGA],
    title:
      "Website of the task force for preventing and handling sexual violence",
    resources: ["HTML", "CSS", "Javascript", "Bootstrap", "etc"],
    features: ["Basic Auth", "Google Oauth", "CRUD", "ChatBot", "etc"],
    liveDemo: null,
  },
  {
    images: [indexPelanggan, login, tambahPelanggan],
    title: "Goods data collection website",
    resources: ["HTML", "CSS", "Javascript", "Bootstrap", "etc"],
    features: ["Basic Auth", "CRUD", "etc"],
    liveDemo: null,
  },
  {
    images: [dashboard, homeSisfopus, keranjangPeminjamanBuku, loginSisfopus],
    title: "Library information system user interface",
    resources: ["HTML", "CSS", "Javascript", "Bootstrap", "etc"],
    features: ["None"],
    liveDemo: null,
  },
  {
    images: [beritaPage, dashboardAdmin, home, penyambunganBaruPelanggan],
    title: "PLN service website",
    resources: ["HTML", "CSS", "Javascript", "Bootstrap", "etc"],
    features: ["Basic Auth", "CRUD", "etc"],
    liveDemo: null,
  },
  {
    images: [portfolioBootstrap, portfolioExpertises],
    title: "My other portfolio website",
    resources: ["HTML", "CSS", "Bootstrap", "etc"],
    features: ["Just UI"],
    liveDemo: "https://abdrahman02.github.io/myportofolio/",
  },
];

export default Projects;
