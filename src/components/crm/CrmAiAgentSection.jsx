import {
  Truck,
  PackageSearch,
  ShoppingBag,
  MessageSquare,
  Sparkles,
  Zap,
  SendHorizontal,
  Wifi,
  BatteryFull,
  EllipsisVertical,
} from "lucide-react";

function CrmAiAgentSection() {
  const features = [
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Cek Ongkir Otomatis",
      description: "Hitung biaya pengiriman ke seluruh Indonesia secara instan",
    },
    {
      icon: <PackageSearch className="h-5 w-5" />,
      title: "Lacak Pesanan Real-time",
      description: "Pantau status pengiriman pelanggan kapan saja",
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "Katalog Produk Lengkap",
      description: "Tampilkan semua produk dengan detail harga dan stok",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Follow-up Otomatis",
      description: "Ingatkan pelanggan tentang keranjang atau promo terbaru",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Rekomendasi Produk Pintar",
      description: "Sarankan produk yang tepat sesuai preferensi pelanggan",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path>
          <circle cx="9" cy="13" r="1"></circle>
          <circle cx="15" cy="13" r="1"></circle>
          <path d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"></path>
        </svg>
      ),
      title: "Switch to Human",
      description:
        "chat bisa di alihkan ke Human / CS saat perlu sentuhan chat personal.",
    },
  ];

  const stats = [
    { value: "24/7", label: "Layanan Aktif" },
    { value: "80%", label: "Hemat Biaya CS" },
    {
      value: (
        <div className="flex items-center justify-center gap-x-2">
          <Zap className="text-primary h-8 w-8" />
          <p>
            3 <span className="-ml-3 text-base lg:text-lg">Detik</span>
          </p>
        </div>
      ),
      label: "Response chat",
    },
    { value: "3x", label: "Konversi Lebih Cepat" },
  ];

  const messages = [
    {
      type: "sent",
      text: "Halo, saya mau tanya soal produk skincare kalian.",
      time: "11.37",
    },
    {
      type: "received",
      text: "Hai! 👋 Makasih udah chat ya. Kamu lagi cari produk skincare untuk kebutuhan apa nih? 😊",
      time: "11.37",
    },
    {
      type: "sent",
      text: "Saya lagi cari skincare buat mencerahkan wajah.",
      time: "11.37",
    },
    {
      type: "received",
      text: "<p>Oke noted! ✨ Kalau buat mencerahkan, kita ada dua produk best seller:</p><ul><li><p>🌸 <strong>Bright Glow Serum</strong> – bantu mencerahkan dan samarkan noda hitam.</p></li><li><p>💧 <strong>Radiant Day Cream</strong> – bikin kulit lembap, halus, dan glowing alami.</p></li></ul><p>Kamu lebih suka yang simple (pakai 1 produk) atau mau sekalian paket biar hasilnya lebih cepat kelihatan?</p>",
      time: "11.37",
    },
    {
      type: "sent",
      text: "Saya lebih suka yang paket aja deh.",
      time: "11.37",
    },
    {
      type: "received",
      text: "<p>Good choice! 🥰 Paket <strong>Bright Glow Series</strong> isinya serum + day cream + night cream.</p><p>Harga normalnya <s>Rp 325.000</s>, tapi lagi ada promo jadi cuma <strong>Rp 279.000</strong> aja.</p><p>Mau aku bantu cek ongkir ke kota kamu?</p>",
      time: "11.37",
    },
    {
      type: "sent",
      text: "Boleh, saya di Bandung.",
      time: "11.37",
    },
    {
      type: "received",
      text: "<p>Oke, bentar ya aku cekin... 🔍</p><p>Untuk pengiriman ke <strong>Bandung</strong>, ongkirnya sekitar <strong>Rp 15.000</strong> via J&T atau SiCepat, estimasi sampai <strong>1–2 hari kerja</strong>.</p><p>Jadi totalnya sekitar <strong>Rp 294.000</strong> udah termasuk ongkir. Gimana, mau lanjut checkout sekarang?</p>",
      time: "11.37",
    },
    {
      type: "sent",
      text: "Iya, lanjut aja.",
      time: "11.37",
    },
    {
      type: "received",
      text: "<p>Oke siap! 🙌 Pembayarannya bisa via:</p><ul><li><p>🏦 Transfer bank</p></li><li><p>💰 E-wallet (Gopay, Dana, OVO)</p></li><li><p>📦 COD (bayar di tempat)</p></li></ul><p>Kamu mau pilih metode yang mana?</p>",
      time: "11.37",
    },
    {
      type: "sent",
      text: "COD aja deh biar gampang.",
      time: "11.37",
    },
    {
      type: "received",
      text: "<p>Siap! Jadi kamu pesan <strong>Bright Glow Series</strong> seharga <strong>Rp 279.000 + Rp 15.000 ongkir (Bandung)</strong>, total <strong>Rp 294.000</strong>, dan pilih metode <strong>COD</strong> ya.</p><p>Pesanan kamu bakal dikirim hari ini dan estimasi sampai dalam 1–2 hari kerja.</p><p>Nanti kurir tinggal antar dan kamu bisa bayar langsung di tempat 👍</p>",
      time: "11.37",
    },
    {
      type: "sent",
      text: "Oke, makasih ya infonya. Simple banget prosesnya.",
      time: "11.37",
    },
    {
      type: "received",
      text: "<p>Sama-sama yaa! 🥰 Makasih juga udah order.</p><p>Semoga cocok dan kulit kamu makin cerah serta glowing tiap hari ✨🌿</p>",
      time: "11.37",
    },
  ];
  return (
    <div className="relative flex justify-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-10 px-5 py-5">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="flex flex-col">
              <h1 className="text-3xl leading-tight font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Respon Cepat, Penjualan Meningkat, Biaya Hemat
                <br />
                <span className="to-primary bg-linear-to-tr from-orange-400 bg-clip-text text-transparent">
                  AI Agent Kami Solusinya
                </span>
              </h1>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-gray-600">
                AI Agent kami bantu bisnis kamu tetap aktif 24 jam tanpa tim
                tambahan - hemat biaya, tingkatkan konversi, dan tingkatkan
                kepuasan pelanggan.
              </p>
            </div>

            {/* Features Grid */}
            <div className="mt-6 grid max-w-3xl grid-cols-1 gap-4 lg:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg p-3 transition-colors duration-200 hover:bg-white/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-tl from-orange-300 to-orange-500 text-white">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid - Desktop & Mobile */}
            <div className="grid max-w-3xl grid-cols-2 gap-5 md:hidden lg:grid lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center ${index < 3 ? "border-r border-orange-300" : ""} ${index === 1 ? "border-orange-300 lg:border-r" : ""}`}
                >
                  <div className="to-primary mb-2 bg-linear-to-r from-orange-400 bg-clip-text text-5xl font-bold text-transparent lg:text-6xl">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm font-semibold lg:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="w-full max-w-sm">
            <div className="w-full">
              <div className="overflow-hidden rounded-4xl border-8 border-gray-800 bg-white shadow-2xl">
                {/* Phone Header */}
                <div className="flex items-center justify-between border-b bg-white px-6 py-2 text-xs shadow">
                  <div className="flex items-center gap-2">
                    <span>9:41</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-4 rounded-sm border border-white"></div>
                    <div className="h-3 w-4 rounded-sm border border-white"></div>
                    <Wifi className="h-4 w-4" />
                    <BatteryFull className="h-[18px] w-[18px]" />
                  </div>
                </div>

                {/* Chat Header */}
                <div className="flex items-center gap-3 bg-white px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-purple-500 text-xs font-semibold text-white">
                    🤖
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Your Bussiness</h3>
                    <p className="text-muted-foreground text-xs">Online</p>
                  </div>
                  <EllipsisVertical className="h-6 w-6" />
                </div>

                {/* Chat Messages */}
                <div
                  className="h-[500px] overflow-y-auto bg-[#f2ece1] p-4"
                  style={{
                    backgroundImage:
                      "url('/crm/assets/bg-wa-dark-D2Ez1DeL.png')",
                    backgroundPosition: "center center",
                    backgroundSize: "280px",
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "local",
                  }}
                >
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"} mb-3`}
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div
                        className={`flex max-w-[75%] items-end gap-2 ${message.type === "sent" ? "flex-row-reverse" : "flex-row"}`}
                      >
                        <div
                          className={`relative rounded-2xl p-2 shadow-sm ${message.type === "sent" ? "rounded-br-none bg-[#D9FDD3]" : "rounded-bl-none bg-white text-gray-800"}`}
                        >
                          <div className="flex w-full flex-col gap-y-1">
                            <div className="relative">
                              <div>
                                <div
                                  className="tiptap ProseMirror h-full overflow-y-auto p-3 px-3 py-2 leading-normal focus:outline-none"
                                  dangerouslySetInnerHTML={{
                                    __html: message.text,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="flex items-center gap-x-1">
                              <span className="mt-1 block text-[10px] text-gray-500">
                                {message.time}
                              </span>
                              {message.type === "sent" && (
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-blue-500"
                                  height="12"
                                  width="12"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M18 6 7 17l-5-5"></path>
                                  <path d="m22 10-7.5 7.5L13 16"></path>
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-4 py-3">
                  <div className="flex-1 rounded-full bg-gray-100 px-4 py-2">
                    <p className="text-sm text-gray-400">Type a message...</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                    <SendHorizontal className="h-[18px] w-[18px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid - Tablet Only */}
            <div className="mt-10 hidden max-w-3xl grid-cols-2 gap-5 md:grid lg:hidden">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center ${index < 3 ? "border-r border-orange-300" : ""} ${index === 1 ? "border-orange-300 lg:border-r" : ""}`}
                >
                  <div className="to-primary mb-2 bg-linear-to-r from-orange-400 bg-clip-text text-5xl font-bold text-transparent lg:text-6xl">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm font-semibold lg:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1.5px)] bg-size-[16px_16px]"></div>
    </div>
  );
}

export default CrmAiAgentSection;
