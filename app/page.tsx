export default function Home() {
  return (
     <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto" }}>
      <h1>Permintaan Hapus Akun</h1>
      <p>
        Jika Anda ingin menghapus akun dari aplikasi ini (baik akun Google atau Email/Password), silakan ikuti langkah-langkah berikut:
      </p>
      <ol>
        <li>Buka aplikasi <strong>MyApp</strong> di perangkat Anda.</li>
        <li>Masuk ke menu <strong>Pengaturan</strong>.</li>
        <li>Pilih <strong>Hapus Akun</strong> dan konfirmasi.</li>
      </ol>
      <p>
        Atau Anda bisa mengirim permintaan penghapusan akun melalui email ke:
        <br />
        <strong>support@myapp.com</strong>
      </p>
    </main>
  );
}
