import { defineConfig } from "vitepress";

const BASE = "/banalu/";
const SITE_URL = `https://suryakencana007.github.io${BASE}`;
const DESC = "Banalu Bread & Coffee — roti dan kopi dari Bojonegoro, pesan lewat aplikasi dan diantar ke rumah.";

export default defineConfig({
  lang: "id-ID",
  title: "Banalu",
  titleTemplate: ":title · Banalu Bread & Coffee",
  description: DESC,
  base: BASE,
  cleanUrls: true,
  // Brand guide: materi digital memakai latar krem — tidak ada mode gelap.
  appearance: false,
  sitemap: { hostname: SITE_URL },

  head: [
    ["link", { rel: "icon", href: `${BASE}favicon.png`, type: "image/png" }],
    ["meta", { name: "theme-color", content: "#6B4226" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&display=swap",
      },
    ],
    ["meta", { property: "og:title", content: "Banalu · Bread & Coffee" }],
    ["meta", { property: "og:description", content: DESC }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: SITE_URL }],
    ["meta", { property: "og:image", content: `${SITE_URL}img/kotak.png` }],
    ["meta", { property: "og:locale", content: "id_ID" }],
  ],

  themeConfig: {
    // Logo adalah lettering asli — jangan diketik ulang dengan font.
    logo: { src: "/logo.png", alt: "Banalu" },
    siteTitle: false,

    nav: [
      { text: "Menu", link: "/menu", activeMatch: "/menu" },
      { text: "Cara Pesan", link: "/cara-pesan", activeMatch: "/cara-pesan" },
      { text: "Tentang", link: "/tentang", activeMatch: "/tentang" },
    ],

    socialLinks: [{ icon: "instagram", link: "https://instagram.com/banalu.bjn", ariaLabel: "Instagram banalu.bjn" }],

    footer: {
      message: "Bread & Coffee · Bojonegoro",
      copyright: `© ${new Date().getFullYear()} Banalu`,
    },

    outline: { label: "Di halaman ini" },
    docFooter: { prev: "Sebelumnya", next: "Berikutnya" },
    returnToTopLabel: "Kembali ke atas",
    sidebarMenuLabel: "Menu",
    notFound: {
      title: "Halaman tidak ditemukan",
      quote: "Rotinya sudah habis duluan. Coba kembali ke beranda.",
      linkText: "Ke beranda",
    },
  },
});
