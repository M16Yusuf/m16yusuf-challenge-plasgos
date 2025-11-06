function CrmFeatureSection() {
  const features = [
    {
      image: "/crm/bc2-BBr_EG1_.png",
      title: "Broadcast",
      description:
        "Kirim pesan massal ke ratusan kontak sekaligus dengan personalisasi otomatis. Jadwalkan campaign dan tracking delivery rate secara real-time.",
      colSpan: "lg:col-span-2",
    },
    {
      image: "/crm/serial-messages2-D3xjtKsB.png",
      title: "Serial Messages",
      description:
        "Otomasi follow-up dengan sequence message yang terstruktur. Buat drip campaign untuk nurturing leads hingga closing dengan timing sempurna.",
      colSpan: "",
    },
    {
      image: "/crm/groups2-Ccp76XSm.png",
      title: "Group & Contact Management",
      description:
        "Kelola database kontak dengan segmentasi pintar. Organisir leads dalam grup custom dan filter berdasarkan behavior untuk targeting presisi.",
      colSpan: "",
    },
    {
      image: "/crm/dashboard2-DR7AOrbC.png",
      title: "Dashboard Analytics",
      description:
        "Visualisasi data lengkap dengan metrics penting. Monitor conversion rate, response time, dan ROI campaign dalam satu dashboard interaktif.",
      colSpan: "",
    },
    {
      image: "/crm/link-rotator2-CbhFkOEb.png",
      title: "Link Rotator & Multi Agent",
      description:
        "Distribusi lead otomatis ke multiple agent dengan link rotation. Balance workload tim dan maksimalkan response time untuk kepuasan customer.",
      colSpan: "",
    },
    {
      image: "/crm/flow2-S4U7mYMx.png",
      title: "Flow Interactive Message",
      description:
        "Bangun conversational flow dengan daftar opsi interaktif untuk menciptakan percakapan yang dinamis dan logika bercabang yang merespons secara otomatis.",
      colSpan: "lg:col-span-3",
    },
  ];
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-10 px-5 py-5">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="mb-6 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">
            <span className="text-sm font-semibold tracking-wide text-orange-300">
              FITUR LENGKAP CRM
            </span>
          </div>
          <h2 className="mb-3 text-4xl font-bold md:text-5xl">
            Semua yang Anda Butuhkan
            <span className="block bg-linear-to-tr from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Dalam Satu Platform
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl leading-relaxed md:text-lg">
            Tingkatkan produktivitas tim sales dengan tools automation yang
            powerful dan analytics mendalam untuk keputusan bisnis yang tepat
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border-white/10 p-3 shadow ring-1 ring-gray-200 transition-all duration-500 hover:scale-102 hover:border-white/30 hover:shadow-xl hover:shadow-orange-500/10 ${feature.colSpan}`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-5 max-h-[300px] w-full rounded-xl object-contain"
              />
              <h3 className="mb-10group-hover:text-transparent px-2 text-2xl font-bold transition-all duration-300 group-hover:bg-linear-to-b group-hover:from-orange-400 group-hover:to-pink-500 group-hover:bg-clip-text">
                {feature.title}
              </h3>
              <p className="text-muted-foreground px-2 text-sm leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CrmFeatureSection;
