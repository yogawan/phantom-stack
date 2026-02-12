# Storybook Documentation

Dokumentasi lengkap komponen UI menggunakan Storybook untuk proyek Phantom Stack (GHOST Stack).

## 📚 Daftar Isi

- [Pengenalan](#pengenalan)
- [Instalasi & Setup](#instalasi--setup)
- [Menjalankan Storybook](#menjalankan-storybook)
- [Struktur Stories](#struktur-stories)
- [Komponen yang Tersedia](#komponen-yang-tersedia)
- [Cara Membuat Story Baru](#cara-membuat-story-baru)
- [Best Practices](#best-practices)

## 🎯 Pengenalan

Storybook adalah tool untuk mengembangkan dan mendokumentasikan UI components secara terisolasi. Proyek ini menggunakan Storybook untuk mendokumentasikan semua komponen berdasarkan metodologi **Atomic Design**.

### Keuntungan Menggunakan Storybook:

- ✅ Develop komponen secara terisolasi
- ✅ Dokumentasi otomatis dengan Autodocs
- ✅ Testing visual untuk setiap state komponen
- ✅ Berbagi komponen dengan tim
- ✅ Memastikan konsistensi design system

## 🚀 Instalasi & Setup

Storybook sudah dikonfigurasi dalam proyek ini. Pastikan dependencies sudah terinstall:

```bash
npm install
# atau
pnpm install
# atau
yarn install
```

## ▶️ Menjalankan Storybook

### Development Mode

```bash
npm run storybook
# atau
pnpm storybook
# atau
yarn storybook
```

Storybook akan berjalan di `http://localhost:6006`

### Build Storybook

Untuk membuat build static:

```bash
npm run build-storybook
# atau
pnpm build-storybook
```

Output akan tersimpan di folder `storybook-static/`

## 📁 Struktur Stories

Stories diorganisir berdasarkan Atomic Design methodology:

```
stories/
├── atoms/              # Komponen terkecil (Button, Input, Badge, dll)
│   ├── Button.stories.tsx
│   ├── Input.stories.tsx
│   ├── Badge.stories.tsx
│   └── ...
├── molecules/          # Kombinasi atoms (Card, Alert, Dialog, dll)
│   ├── Card.stories.tsx
│   ├── Alert.stories.tsx
│   ├── Dialog.stories.tsx
│   └── ...
├── organisms/          # Komponen kompleks (Table, Form, Accordion, dll)
│   ├── Table.stories.tsx
│   ├── Accordion.stories.tsx
│   ├── Pagination.stories.tsx
│   └── ...
└── templates/          # Layout halaman
    └── DashboardTemplate.stories.tsx
```

## 🎨 Komponen yang Tersedia

### ⚛️ Atoms (17 komponen)
- Button - Tombol dengan berbagai variant dan size
- Input - Input field dengan validasi
- Badge - Label kecil untuk status atau kategori
- Avatar - Foto profil dengan fallback
- Checkbox - Checkbox dengan custom styling
- Switch - Toggle switch
- Label - Label untuk form fields
- Textarea - Multi-line text input
- Progress - Progress bar
- Select - Dropdown select
- Spinner - Loading indicator
- Toggle - Toggle button
- RadioGroup - Radio button group
- Separator - Pembatas visual
- AspectRatio - Container dengan aspect ratio
- Kbd - Keyboard shortcut display
- NativeSelect - Native HTML select

### 🧬 Molecules (10+ komponen)
- Alert - Pesan notifikasi
- Card - Container dengan header dan footer
- Tabs - Tab navigation
- Dialog - Modal dialog
- Tooltip - Tooltip informasi
- Popover - Popover content
- Field - Form field dengan label dan error
- Empty - Empty state placeholder
- Breadcrumb - Navigasi breadcrumb
- AlertDialog - Confirmation dialog

### 🔬 Organisms (8+ komponen)
- Accordion - Collapsible content sections
- Table - Data table dengan sorting
- Pagination - Page navigation
- Skeleton - Loading skeleton
- Collapsible - Collapsible content
- Slider - Range slider
- Sheet - Side panel/drawer
- Form - Form dengan validasi

### 📐 Templates
- DashboardTemplate - Layout untuk dashboard

## 📝 Cara Membuat Story Baru

### 1. Buat File Story

Buat file baru dengan format `[ComponentName].stories.tsx`:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '@/components/atoms/MyComponent';

const meta = {
  title: 'Atoms/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Component variant',
    },
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'My Component',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Variant',
  },
};
```

### 2. Tambahkan Multiple States

Buat multiple stories untuk menampilkan berbagai state:

```typescript
export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Error message',
  },
};
```

### 3. Gunakan Render Function untuk Complex Stories

```typescript
export const Complex: Story = {
  render: () => (
    <div className="space-y-4">
      <MyComponent variant="primary">Primary</MyComponent>
      <MyComponent variant="secondary">Secondary</MyComponent>
    </div>
  ),
};
```

## ✨ Best Practices

### 1. **Naming Convention**
- Gunakan PascalCase untuk story names: `Default`, `WithError`, `Loading`
- File stories: `ComponentName.stories.tsx`

### 2. **Documentation**
- Gunakan `tags: ['autodocs']` untuk dokumentasi otomatis
- Tambahkan description pada argTypes untuk clarity

### 3. **ArgTypes**
- Define semua props yang bisa di-control
- Gunakan control yang sesuai: `select`, `boolean`, `text`, `number`, dll

### 4. **Layout**
```typescript
parameters: {
  layout: 'centered', // atau 'fullscreen', 'padded'
}
```

### 5. **Variants**
- Buat story terpisah untuk setiap variant penting
- Tampilkan state: default, hover, focus, disabled, error

### 6. **Interactive Examples**
- Gunakan `args` untuk membuat komponen interactive
- Tambahkan `argTypes` dengan controls untuk live editing

### 7. **Composition**
- Tunjukkan bagaimana komponen bekerja bersama
- Buat stories yang mendemonstrasikan use cases nyata

## 📚 Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Atomic Design Methodology](http://atomicdesign.bradfrost.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)

## 🤝 Contributing

Ketika menambahkan komponen baru:

1. Buat komponen di folder yang sesuai (`atoms/`, `molecules/`, `organisms/`, `templates/`)
2. Buat story file dengan minimal 2-3 variants
3. Tambahkan documentation dengan argTypes
4. Test di Storybook sebelum commit
5. Pastikan story berjalan tanpa error

## 📞 Support

Jika ada pertanyaan atau issues terkait Storybook:
- Check dokumentasi di folder `/docs`
- Lihat existing stories sebagai referensi
- Buka issue di repository

---

**Happy Coding! 🚀**
