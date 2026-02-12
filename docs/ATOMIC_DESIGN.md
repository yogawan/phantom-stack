# Atomic Design

## Overview
Atomic Design adalah metodologi untuk membangun antarmuka pengguna (UI) secara sistematis dengan memecahnya menjadi bagian-bagian kecil yang dapat digunakan kembali. Metodologi ini diperkenalkan oleh Brad Frost dan membantu pengembang serta desainer menciptakan sistem desain yang konsisten dan terorganisir.

---

## Prinsip Utama Atomic Design
Atomic Design terdiri dari lima tingkat hierarki:

### 1. **Atoms**
- **Definisi**: Komponen terkecil dalam UI, seperti tombol, input, atau label.
- **Karakteristik**: Tidak dapat dipecah lebih kecil lagi.
- **Contoh**:
  - Tombol (`<Button />`)
  - Input teks (`<Input />`)
  - Label (`<Label />`)

### 2. **Molecules**
- **Definisi**: Gabungan dari beberapa atom untuk membentuk blok fungsional kecil.
- **Karakteristik**: Memiliki fungsi spesifik.
- **Contoh**:
  - Form field yang terdiri dari label dan input.
  - Komponen kartu sederhana dengan gambar dan teks.

### 3. **Organisms**
- **Definisi**: Gabungan dari beberapa molekul dan/atau atom untuk membentuk bagian UI yang lebih kompleks.
- **Karakteristik**: Biasanya merupakan bagian besar dari halaman.
- **Contoh**:
  - Header dengan logo, navigasi, dan tombol pencarian.
  - Daftar produk dengan kartu produk.

### 4. **Templates**
- **Definisi**: Struktur halaman yang terdiri dari organisme yang diatur dalam tata letak tertentu.
- **Karakteristik**: Tidak memiliki data spesifik, hanya kerangka.
- **Contoh**:
  - Tata letak halaman produk.
  - Tata letak halaman login.

---

## Keuntungan Menggunakan Atomic Design
1. **Konsistensi**:
   - Komponen yang dapat digunakan kembali memastikan desain yang seragam di seluruh aplikasi.
2. **Skalabilitas**:
   - Mudah untuk menambahkan atau memodifikasi komponen tanpa memengaruhi seluruh sistem.
3. **Kolaborasi**:
   - Memudahkan komunikasi antara desainer dan pengembang dengan struktur yang jelas.
4. **Efisiensi**:
   - Mengurangi duplikasi kode dengan memanfaatkan komponen yang dapat digunakan kembali.

---

## Implementasi Atomic Design di Proyek Ini
1. **Folder Struktur**:
   - Komponen akan diorganisasi berdasarkan hierarki Atomic Design.
   ```
   components/
     atoms/
       Button.tsx
       Input.tsx
     molecules/
       FormField.tsx
       Card.tsx
     organisms/
       Header.tsx
       ProductList.tsx
     templates/
       ProductPageTemplate.tsx
       LoginPageTemplate.tsx
   ```

2. **Pendekatan Pengembangan**:
   - Mulai dari komponen terkecil (atoms) dan bangun hierarki ke atas.
   - Gunakan Storybook untuk mendokumentasikan dan menguji setiap komponen secara terisolasi.

3. **Integrasi dengan Next.js**:
   - Gunakan file routing bawaan Next.js di folder `app/` untuk mengelola halaman.
   - Templates dapat digunakan langsung di file `page.tsx` untuk membangun halaman.
   - Contoh:
     ```typescript
     // app/products/page.tsx
     import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
     import ProductList from '@/components/organisms/ProductList';

     export default function ProductsPage() {
       return (
         <ProductPageTemplate>
           <ProductList />
         </ProductPageTemplate>
       );
     }
     ```

4. **Best Practices**:
   - Pastikan setiap komponen memiliki tanggung jawab tunggal.
   - Gunakan TypeScript untuk memastikan tipe data yang konsisten.
   - Tambahkan dokumentasi untuk setiap komponen.

---

## Referensi
- [Atomic Design by Brad Frost](http://atomicdesign.bradfrost.com/)
- [Storybook](https://storybook.js.org/)