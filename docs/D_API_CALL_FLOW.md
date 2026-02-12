# API Call Flow Documentation

## Overview
Dokumentasi ini menjelaskan alur lengkap pemanggilan API dari konfigurasi `.env.local` hingga integrasi ke komponen frontend menggunakan pendekatan Backend for Frontend (BFF). Selain itu, mencakup integrasi dengan **Zustand**, **React Hook Form**, dan **TanStack Query**.

---

## 1. Konfigurasi Variabel Lingkungan di `.env.local`
Tambahkan variabel `BASE_URL` di file `.env.local` untuk menyimpan URL dasar API eksternal.

```env
BASE_URL=https://api.example.com
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

- **`BASE_URL`**: URL dasar API eksternal.
- **`MONGODB_URI`**: URL koneksi ke database MongoDB.
- Variabel ini akan diakses menggunakan `process.env` di dalam kode.

---

## 2. Klien API di `lib/apiClient.ts`
Buat klien API untuk mempermudah pemanggilan API eksternal. Klien ini akan membaca `BASE_URL` dari `.env.local`.

```typescript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.BASE_URL, // Ambil BASE_URL dari .env.local
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
```

- **`axios.create`**: Membuat instance klien API dengan konfigurasi default.
- **`baseURL`**: Diambil dari `process.env.BASE_URL`.

---

## 3. Fungsi API di `services/`
Tambahkan fungsi untuk memanggil endpoint API eksternal atau database. Fungsi ini akan menggunakan klien API dari `lib/apiClient.ts` atau koneksi database dari `lib/mongodb.ts`.

```typescript
import apiClient from '@/lib/apiClient';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';

export const fetchExampleData = async () => {
  try {
    const response = await apiClient.get('/example-endpoint'); // Endpoint spesifik
    return response.data;
  } catch (error) {
    console.error('Error fetching example data:', error);
    throw error;
  }
};

export const getUserFromDB = async (email: string) => {
  try {
    await connectDB();
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error('Error fetching user from DB:', error);
    throw error;
  }
};
```

- **`fetchExampleData`**: Fungsi untuk memanggil endpoint `/example-endpoint`.
- **`getUserFromDB`**: Fungsi untuk mengambil data user dari database MongoDB.

---

## 4. Backend for Frontend (BFF) di `app/api/`
Tambahkan route BFF di Next.js untuk memproses permintaan dari frontend. Route ini akan memanggil fungsi dari `services/`.

```typescript
import { NextResponse } from 'next/server';
import { getUserFromDB } from '@/services/authService';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const user = await getUserFromDB(email); // Panggil fungsi dari services
    return NextResponse.json(user); // Kirim respons ke frontend
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
```

- **`POST`**: Route untuk menangani permintaan POST.
- **`getUserFromDB`**: Fungsi dari `services/` dipanggil di sini.
- **`NextResponse.json`**: Mengembalikan data ke frontend.

---

## 5. Integrasi dengan Library Tambahan

### **a. Zustand**
Gunakan Zustand untuk menyimpan state global yang dapat diakses di seluruh aplikasi.

**Contoh Store Zustand:**
```typescript
import { create } from 'zustand';
import { fetchExampleData } from '@/services/exampleService';

const useExampleStore = create((set) => ({
  data: null,
  fetchData: async () => {
    const data = await fetchExampleData();
    set({ data });
  },
}));

export default useExampleStore;
```

**Penggunaan di Komponen:**
```typescript
'use client';

import { useEffect } from 'react';
import useExampleStore from '@/store/exampleStore';

export default function Page() {
  const { data, fetchData } = useExampleStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Data from Zustand</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
```

---

### **b. React Hook Form**
Gunakan React Hook Form untuk mengelola form dan validasi sebelum mengirim data ke API.

**Contoh Penggunaan:**
```typescript
import { useForm } from 'react-hook-form';
import { fetchExampleData } from '@/services/exampleService';

export default function FormPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetchExampleData(data);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('exampleField')} placeholder="Enter value" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### **c. TanStack Query**
Gunakan TanStack Query untuk fetching data dengan caching otomatis dan pengelolaan state data server.

**Contoh Penggunaan:**
```typescript
import { useQuery } from '@tanstack/react-query';
import { fetchExampleData } from '@/services/exampleService';

export default function Page() {
  const { data, isLoading, error } = useQuery(['exampleData'], fetchExampleData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from TanStack Query</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

---

## 6. Alur Lengkap
1. **Konfigurasi di `.env.local`**:
   - Tambahkan `BASE_URL` untuk menyimpan URL dasar API.
   - Tambahkan `MONGODB_URI` untuk koneksi database.
2. **Klien API di `lib/apiClient.ts`**:
   - Buat klien API menggunakan `axios` yang membaca `BASE_URL`.
3. **Fungsi API di `services/`**:
   - Tambahkan fungsi untuk memanggil endpoint spesifik atau database.
4. **BFF di `app/api/`**:
   - Tambahkan route untuk memproses permintaan dari frontend.
5. **Integrasi dengan Library**:
   - **Zustand**: Untuk state global.
   - **React Hook Form**: Untuk validasi dan pengelolaan form.
   - **TanStack Query**: Untuk fetching data dengan caching otomatis.
6. **Komponen Frontend**:
   - Panggil route BFF menggunakan `fetch` atau library tambahan.

---

## Keuntungan Pendekatan Ini
- **Keamanan**: API eksternal tidak terekspos langsung ke frontend.
- **Abstraksi**: Logika API eksternal dikelola di backend.
- **Fleksibilitas**: Anda dapat menambahkan caching, transformasi data, atau logika tambahan di BFF.