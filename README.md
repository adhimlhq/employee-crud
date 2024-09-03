1. Clone Repository dari GitHub

Buka Terminal atau Command Prompt dan navigasikan ke direktori tempat Anda ingin menyimpan proyek:

        cd /path/to/your/directory

Clone Repository dari GitHub:

    git clone https://github.com/adhimlhq/employee-crud.git

Ganti YOUR_USERNAME dengan nama pengguna GitHub Anda dan REPO_NAME dengan nama repository Anda.

2. Masuk ke Direktori Proyek

Setelah cloning selesai, navigasikan ke direktori proyek:

    cd REPO_NAME

3. Install Dependensi

Proyek Vite + Vue.js memerlukan dependensi yang dikelola oleh npm atau yarn. Jalankan salah satu dari perintah berikut:

Dengan npm:

    npm install

4. Konfigurasi Lingkungan

Jika proyek Anda menggunakan file .env untuk pengaturan lingkungan, pastikan file .env ada dan dikonfigurasi dengan benar. Jika tidak ada, Anda mungkin perlu membuatnya berdasarkan file .env.example (jika tersedia) dan mengisinya dengan pengaturan yang sesuai untuk proyek Anda.
Untuk menyalin file .env.example menjadi .env:

    cp .env.example .env

Edit file .env untuk mengatur variabel lingkungan yang diperlukan oleh proyek.

5. Jalankan Proyek
Sekarang, Anda dapat menjalankan server pengembangan lokal dengan salah satu dari perintah berikut:

Dengan npm:

    npm run dev
