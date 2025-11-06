function CrmSolutionSection() {
  const CheckIcon = () => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1"
      viewBox="0 0 48 48"
      enableBackground="new 0 0 48 48"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        fill="#8BC34A"
        points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"
      ></polygon>
      <polygon
        fill="#CCFF90"
        points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
      ></polygon>
    </svg>
  );

  const solutions1 = [
    {
      title: "Kirim Broadcast WhatsApp ke Ribuan Kontak Sekaligus",
      description:
        "Tanpa perlu kirim satu per satu — cukup 1 klik, pesan langsung tersebar luas.",
    },
    {
      title: "Personalisasi Otomatis Setiap Pesan",
      description:
        "Gunakan nama pelanggan, promo spesifik, atau produk yang mereka suka di setiap pesan.",
    },
    {
      title: "Penjadwalan Pesan Broadcast",
      description:
        "Atur kapan pesan dikirim — jam optimal, hari tertentu, bahkan secara berulang.",
    },
    {
      title: "Semua Data Kontak Tersimpan Rapi",
      description:
        "Tidak ada lagi kontak tercecer di Excel atau WhatsApp — semua tersentralisasi di dashboard CRM.",
    },
    {
      title: "Tanpa Takut Nomor Diblokir",
      description:
        "Sistem kami telah dioptimasi agar broadcast tetap aman dan tidak dianggap spam oleh WhatsApp.",
    },
  ];

  const solutions2 = [
    {
      title: "AI Chat Bot Aktif 24/7",
      description:
        "Bot cerdas menjawab pertanyaan pelanggan secara otomatis, bahkan saat Anda tidur.",
    },
    {
      title: "Respon dalam Hitungan Detik, Bukan Menit Bahkan Jam",
      description:
        "Chat masuk langsung dibalas — tidak ada lagi pelanggan nunggu atau kabur.",
    },
    {
      title: "Terintegrasi dengan Data Produk, Promo & Cek Ongkir",
      description:
        "Bot bisa kasih informasi stok, harga, diskon, Cek Biaya Ongkos Kirim hingga jadwal pengiriman.",
    },
    {
      title: "Latih Bot dengan Cepat dan Mudah",
      description:
        "Cukup Input FAQ atau ketik beberapa jawaban, bot langsung belajar & siap digunakan.",
    },
    {
      title: "Follow-up Otomatis",
      description:
        "Kirim pesan lanjutan otomatis jika pelanggan belum merespon dalam X jam/hari.",
    },
  ];

  return (
    <div className="flex w-full items-center justify-center bg-linear-to-b from-sky-50 via-orange-100 to-white">
      <div
        id="solusi"
        className="mx-auto flex w-full max-w-7xl scroll-mt-[75px] flex-col gap-y-10 px-5 py-5"
      >
        <div className="flex w-full flex-col items-center justify-center gap-y-5">
          <h1
            className="font-raleway text-center text-2xl font-semibold md:text-4xl"
            style={{ opacity: 1, transform: "none" }}
          >
            Tenang, Solusinya Sudah Kami Siapkan Untuk Anda
          </h1>
          <div className="mt-5 flex w-full flex-col justify-center gap-12 md:flex-row md:justify-between">
            <div style={{ opacity: 1, transform: "none" }}>
              {solutions1.map((solution, index) => (
                <div key={index} className="my-3 flex items-center gap-x-3">
                  <div className="shrink-0">
                    <CheckIcon />
                  </div>
                  <div className="">
                    <p className="font-raleway text-base font-semibold">
                      {solution.title}
                    </p>
                    <p className="font-raleway text-muted-foreground text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              {solutions2.map((solution, index) => (
                <div key={index} className="my-3 flex items-center gap-x-3">
                  <div className="shrink-0">
                    <CheckIcon />
                  </div>
                  <div className="">
                    <p className="font-raleway text-base font-semibold">
                      {solution.title}
                    </p>
                    <p className="font-raleway text-muted-foreground text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmSolutionSection;
