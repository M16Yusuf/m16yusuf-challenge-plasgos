import { useState } from "react";

function CrmAdvanceFeature() {
  const [isExpanded, setIsExpanded] = useState(false);

  const baseFeatures = [
    {
      image: "/crm/technical-support--KB_zeLE.png",
      title: "Balas Chat Otomatis 24 Jam",
      description: "AI aktif nonstop bantu layani semua pesan masuk",
      bgColor: "bg-sky-100",
    },
    {
      image: "/crm/followers-C7Eo-hKY.png",
      title: "Follow-Up Tanpa Perlu Diingat",
      description: "Chat lanjutan otomatis terkirim sesuai alur",
      bgColor: "bg-emerald-100",
    },
    {
      image: "/crm/online-community-DiqfE6zL.png",
      title: "Kelola Banyak Nomor WhatsApp",
      description: "Pantau semua akun dalam satu dashboard",
      bgColor: "bg-amber-100",
    },
    {
      image: "/crm/shipping-cost-DVzuV1ZT.png",
      title: "Cek Ongkir Langsung dari Chat",
      description:
        "Pelanggan tinggal ketik alamat, harga onkos kirim langsung keluar",
      bgColor: "bg-violet-100",
    },
    {
      image: "/crm/missed-call-BOuubmGd.png",
      title: "Bot Otomatis Alihkan ke CS",
      description: "Chat dialihkan ke tim sesuai antrian & waktu aktif",
      bgColor: "bg-rose-100",
    },
    {
      image: "/crm/ai-DvJ1TlT1.png",
      title: "AI Paham Pesan yang Tidak Jelas",
      description: "Chat ambigu tetap dijawab dengan pintar & natural",
      bgColor: "bg-lime-100",
    },
    {
      image: "/crm/digital-key-DTbXNHtW.png",
      title: "Bot Tanggapi Kata Kunci Otomatis",
      description: "Chat masuk berisi trigger langsung direspon",
      bgColor: "bg-orange-50",
    },
    {
      image: "/crm/user-engagement-DcZO-BqR.png",
      title: "Leads Baru Masuk Setiap Hari",
      description: "Sistem aktif kumpulkan prospek dari berbagai sumber",
      bgColor: "bg-teal-100",
    },
    {
      image: "/crm/broadcast-UaNJ78QV.png",
      title: "Kirim Broadcast Tanpa Batas",
      description: "Bebas kirim ribuan pesan tanpa limit harian",
      bgColor: "bg-indigo-100",
    },
    {
      image: "/crm/content-creator-CSvjrOQE.png",
      title: "Pesan Bisa Dikustom Sepenuhnya",
      description: "Sesuaikan isi pesan dengan nama, produk, dll.",
      bgColor: "bg-pink-100",
    },
  ];

  const expandedFeatures = [
    {
      image: "/crm/uploading-PyZYs6cO.png",
      title: "Kirim Gambar Lewat Broadcast",
      description: "Tambahkan media visual agar pesan makin menarik",
      bgColor: "bg-sky-100",
    },
    {
      image: "/crm/clock-tIPi06Mx.png",
      title: "Kirim di Waktu Paling Tepat",
      description: "Pesan dikirim saat audiens sedang aktif",
      bgColor: "bg-emerald-100",
    },
    {
      image: "/crm/calendar-DefjSFmI.png",
      title: "Jadwalkan Pesan Otomatis",
      description: "Tulis sekarang, kirim otomatis kapan pun kamu mau",
      bgColor: "bg-amber-100",
    },
    {
      image: "/crm/text-box-Hbk7iEJB.png",
      title: "Spintax: Variasi Kata Otomatis",
      description: "Gunakan variasi kata agar pesan tidak monoton",
      bgColor: "bg-violet-100",
    },
    {
      image: "/crm/group1-UKS4tfz8.png",
      title: "Ambil Kontak dari Grup WA",
      description: "Scrape semua nomor dari grup hanya dengan 1 klik",
      bgColor: "bg-rose-100",
    },
    {
      image: "/crm/statistical-iRkMKfAI.png",
      title: "Lihat Status Broadcast",
      description: "Pantau pesan yang terkirim, dibaca, atau gagal",
      bgColor: "bg-lime-100",
    },
    {
      image: "/crm/ab-testing-JA0hSVc6.png",
      title: "Uji A/B Isi Pesan",
      description: "Bandingkan dua versi pesan untuk lihat performa terbaik",
      bgColor: "bg-orange-50",
    },
    {
      image: "/crm/cloud-storage-CNIUAzlf.png",
      title: "Import & Export Kontak",
      description: "Upload atau unduh data kontak dari file CSV atau Excel",
      bgColor: "bg-teal-100",
    },
  ];

  const displayedFeatures = isExpanded
    ? [...baseFeatures, ...expandedFeatures]
    : baseFeatures;

  return (
    <div
      id="fitur"
      className="flex w-full scroll-mt-[75px] justify-center bg-linear-to-b from-white via-sky-100 to-white"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-10 px-5 py-5">
        <div className="my-10 flex flex-col items-center gap-y-10">
          {/* Header */}
          <div>
            <h1
              className="font-raleway text-center text-2xl font-semibold md:text-4xl"
              style={{ opacity: 1, transform: "none" }}
            >
              Fitur-Fitur Canggih untuk Jalankan Bisnis Tanpa Ribet
            </h1>
            <p className="font-raleway text-muted-foreground mt-5">
              Semua fitur dirancang untuk bantu kamu jangkau lebih banyak
              pelanggan, bekerja lebih efisien, dan tetap terhubung 24/7.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {displayedFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white! p-6 shadow-md"
                tabIndex="0"
                style={{ transform: "none" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: 0,
                    background:
                      "radial-gradient(circle at 0px 0px, rgba(0, 229, 255, 0.2), transparent 80%)",
                  }}
                ></div>
                <div className="flex items-center gap-x-5">
                  <div
                    className={`flex items-center justify-center rounded-xl p-2 ${feature.bgColor}`}
                  >
                    <img
                      src={feature.image}
                      alt="bot"
                      className="w-12 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-raleway text-lg font-bold">
                      {feature.title}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div></div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="focus-visible:ring-ring hover:bg-primary/90 mx-auto inline-flex h-10 items-center justify-center gap-2 rounded-md bg-orange-500 px-8 text-sm font-medium whitespace-nowrap text-white shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            {isExpanded
              ? "Lihat Sedikit Fitur"
              : "Lihat Lebih Banyak Fitur Lainnya"}
            {isExpanded ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrmAdvanceFeature;
