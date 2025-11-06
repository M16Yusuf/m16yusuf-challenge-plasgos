function CrmProblemSection() {
  const XIcon = () => (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="text-muted-foreground"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const problems1 = [
    "Promosi lewat WhatsApp terbatas, tidak bisa kirim ke banyak kontak sekaligus",
    "Tidak bisa personalisasi pesan, semua pesan terlihat sama",
    "Nomor diblokir karena dianggap spam oleh WhatsApp",
    "Kontak tercecer di banyak tempat (Excel, HP, grup WA)",
    "Harus copas teks promosi berulang kali ke ratusan kontak",
    "Tidak ada fitur penjadwalan broadcast, harus standby tiap mau kirim",
  ];

  const problems2 = [
    "Chat WhatsApp menumpuk dan harus dibalas satu per satu",
    "Waktu habis hanya untuk menjawab pertanyaan berulang dari pelanggan",
    "Follow-up pelanggan berantakan, sering lupa atau terlewat",
    "Pelanggan sering kabur karena respon terlalu lama",
    "Tim CS kewalahan, padahal pertanyaan pelanggan itu-itu saja",
    "Penjualan stagnan, padahal kontak dan traffic banyak",
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-10 px-5 py-5">
        <div className="flex w-full flex-col items-center justify-center gap-y-5">
          <h1
            className="font-raleway text-center text-2xl font-semibold md:text-4xl"
            style={{ opacity: 1, transform: "none" }}
          >
            Apakah Anda Sedang Mengalami Masalah Ini ?
          </h1>
          <div className="flex w-full flex-wrap items-center justify-center md:justify-between">
            <img
              src="/crm/stress-pana-Dp6-KdCx.png"
              alt="problem"
              className="w-[220px] object-contain md:w-[320px]"
              style={{ opacity: 1, transform: "none" }}
            />
            <div>
              {problems1.map((problem, index) => (
                <div
                  key={index}
                  className="my-3 flex items-center gap-x-3"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="shrink-0">
                    <XIcon />
                  </div>
                  <p className="font-raleway text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between">
            <div>
              {problems2.map((problem, index) => (
                <div
                  key={index}
                  className="my-3 flex items-center gap-x-3"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="shrink-0">
                    <XIcon />
                  </div>
                  <p className="font-raleway text-lg">{problem}</p>
                </div>
              ))}
            </div>
            <img
              src="/crm/money-stress-pana-Qo4xlV6q.png"
              alt="problem"
              className="w-[220px] object-contain md:w-[350px]"
              style={{ opacity: 1, transform: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmProblemSection;
