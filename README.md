# Banalu · Bread & Coffee

Situs brand Banalu, dibangun dengan [VitePress](https://vitepress.dev) + Bun dan di-deploy ke GitHub Pages (stack yang sama dengan espresso dan tamper).

**Live:** https://suryakencana007.github.io/banalu/

## Pengembangan

```sh
bun install
bun run docs:dev      # server lokal
bun run docs:build    # build ke docs/.vitepress/dist
```

Setiap push ke `main` yang mengubah `docs/**`, `package.json`, atau workflow akan otomatis di-build dan di-deploy oleh `.github/workflows/docs.yml`.

## Brand

Mengikuti *Banalu Brand Guideline & Catalog*, Edisi 1 (Oktober 2026):

| Peran | Warna |
|---|---|
| Cokelat Banalu (utama) | `#6B4226` |
| Krem Roti (latar digital) | `#F3E7DA` |
| Cokelat Tua (teks di latar terang) | `#4A2A17` |
| Cokelat Logo | `#371D12` |
| Putih | `#FFFFFF` |

- Font: **Fredoka** (400/500/600), cadangan Trebuchet MS.
- Logo adalah lettering. Selalu pakai file `docs/public/logo.png` atau `logo-white.png`, jangan diketik ulang.
- Maskot boleh miring maksimal ±10°, maksimal 1–3 maskot per halaman.
- Instagram selalu ditulis `banalu.bjn` (tanpa @) dengan ikon.

Aset di `docs/public/` diekstrak dari PDF brand guideline.

## Yang masih perlu diisi

Cari `TODO` di `docs/`: alamat & jam buka, nomor WhatsApp, tautan unduh aplikasi, dan (opsional) harga menu.
