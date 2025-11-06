import { useState } from "react";

function CrmStepsTabsSection() {
  const [activeTab, setActiveTab] = useState("ai");

  const ArrowIcon = ({ className = "" }) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className={className}
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
    </svg>
  );

  const ArrowIconLarge = ({ className = "" }) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      className={className}
      height="80"
      width="80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
    </svg>
  );

  const aiSteps = [
    {
      image: "/crm/scan-code-DVt8dR-o.png",
      title: "Scan Nomor Whatapps Anda",
      description:
        "Sambungkan nomor WhatsApp  Anda ke dashboard hanya dengan scan QR - cepat dan aman",
      bgColor: "bg-sky-100",
    },
    {
      image: "/crm/knowledge-rDd3p6tC.png",
      title: "Tambahkan Info Produk & Bisnis Anda",
      description:
        "Masukkan daftar pertanyaan umum, info produk, layanan, dan jawaban penting. Semakin lengkap, semakin pintar AI Anda menjawab.",
      bgColor: "bg-sky-100",
    },
    {
      image: "/crm/ai-technology-BFqn_qkV.png",
      title: "Aktifkan AI Chat Bot",
      description:
        "Hanya dengan satu klik, AI langsung aktif dan mulai menjawab pesan dari pelanggan secara otomatis — 24 jam nonstop.",
      bgColor: "bg-sky-100",
    },
  ];

  const broadcastSteps = [
    {
      image: "/crm/scan-code-DVt8dR-o.png",
      title: "Scan Nomor Whatapps Anda",
      description:
        "Sambungkan nomor WhatsApp  Anda ke dashboard hanya dengan scan QR - cepat dan aman",
      bgColor: "bg-orange-100",
    },
    {
      image: "/crm/download-file-BkRoDfxR.png",
      title: "Import Daftar Kontak",
      description:
        "Upload data pelanggan dari file Excel atau tambahkan secara manual. Semua langsung tersimpan rapi di dashboard.",
      bgColor: "bg-orange-100",
    },
    {
      image: "/crm/broadcast-UaNJ78QV.png",
      title: "Buat & Kirim Broadcast",
      description:
        "Tulis pesan promosi, personalisasi nama pelanggan, lalu kirim ke ribuan kontak hanya dengan satu klik.",
      bgColor: "bg-orange-100",
    },
  ];

  const currentSteps = activeTab === "ai" ? aiSteps : broadcastSteps;

  return (
    // ai agent : w-full rounded-xl bg-gradient-to-b from-white via-sky-100 to-white bg-sky-200
    // broadcast: w-full rounded-xl bg-gradient-to-b from-white via-orange-100 to-white
    <div
      className={`${activeTab == "ai" ? "bg-sky-200 via-sky-100 to-white" : "via-orange-100 to-white"} flex w-full justify-center rounded-xl bg-linear-to-b from-white`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-10 px-5 py-5">
        <div className="flex flex-col items-center justify-center gap-y-10 md:justify-start">
          <h1
            className="font-raleway text-center text-2xl font-semibold md:text-4xl"
            style={{ opacity: 1, transform: "none" }}
          >
            Hanya 3 Langkah, Bisnismu Siap Jalan Otomatis
          </h1>
          <div dir="ltr" data-orientation="horizontal" className="w-full">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="border-border text-muted-foreground flex w-full items-center justify-center gap-0 rounded-t-xl border-0 p-0"
              tabIndex="0"
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "ai"}
                aria-controls="radix-:r9:-content-ai"
                data-state={activeTab === "ai" ? "active" : "inactive"}
                id="radix-:r9:-trigger-ai"
                className="disabled:text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground -mb-0.5 inline-flex items-center justify-start border-b-2 bg-transparent! px-10 py-2 text-base font-medium whitespace-nowrap transition-all first-of-type:ml-0 disabled:pointer-events-none data-[state=active]:rounded-t-xl data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
                tabIndex={activeTab === "ai" ? 0 : -1}
                data-orientation="horizontal"
                data-radix-collection-item=""
                onClick={() => setActiveTab("ai")}
              >
                AI Agent
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "broadcast"}
                aria-controls="radix-:r9:-content-broadcast"
                data-state={activeTab === "broadcast" ? "active" : "inactive"}
                id="radix-:r9:-trigger-broadcast"
                className="disabled:text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground -mb-0.5 inline-flex items-center justify-start border-b-2 bg-transparent! px-10 py-2 text-base font-medium whitespace-nowrap transition-all first-of-type:ml-0 disabled:pointer-events-none data-[state=active]:rounded-t-xl data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=inactive]:border-transparent"
                tabIndex={activeTab === "broadcast" ? 0 : -1}
                data-orientation="horizontal"
                data-radix-collection-item=""
                onClick={() => setActiveTab("broadcast")}
              >
                Broadcast
              </button>
            </div>
            <div
              data-state={activeTab === "ai" ? "active" : "inactive"}
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r9:-trigger-ai"
              id="radix-:r9:-content-ai"
              tabIndex="0"
              className="ring-offset-background focus-visible:ring-ring mt-10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              style={{ display: activeTab === "ai" ? "block" : "none" }}
              hidden={activeTab !== "ai"}
            >
              <div className="block md:hidden">
                <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                  {currentSteps.map((step, index) => (
                    <>
                      <div
                        key={`mobile-step-${index}`}
                        className={`flex items-center gap-x-5 rounded-xl border p-3 shadow-md ${index === 1 ? "flex-row-reverse" : ""}`}
                        style={{ opacity: 0, transform: "translateY(30px)" }}
                      >
                        <div
                          className={`flex shrink-0 items-center justify-center rounded-full p-2 ${step.bgColor}`}
                        >
                          <img
                            src={step.image}
                            alt="bot"
                            className="w-14 object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-raleway text-lg font-bold">
                            {step.title}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < currentSteps.length - 1 && (
                        <div
                          key={`mobile-arrow-${index}`}
                          className={
                            index === 0 ? "mr-5 ml-auto" : "mr-auto ml-5"
                          }
                          style={{
                            opacity: 0,
                            transform: "translateY(30px)",
                          }}
                        >
                          <ArrowIcon className="rotate-90" />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                  {currentSteps.map((step, index) => (
                    <>
                      <div
                        key={`desktop-step-${index}`}
                        className="flex flex-col items-center gap-y-5"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <div>
                          <div
                            className={`flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full ${step.bgColor}`}
                          >
                            <img
                              src={step.image}
                              alt="scan"
                              className="w-[100px] object-contain"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-raleway text-lg font-semibold md:text-center">
                            {step.title}
                          </p>
                          <p className="font-raleway text-muted-foreground md:text-center">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < currentSteps.length - 1 && (
                        <div
                          key={`desktop-arrow-${index}`}
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <ArrowIconLarge className="hidden md:mb-32 md:block" />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div
              data-state={activeTab === "broadcast" ? "active" : "inactive"}
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r9:-trigger-broadcast"
              id="radix-:r9:-content-broadcast"
              tabIndex="0"
              className="ring-offset-background focus-visible:ring-ring mt-10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              style={{
                display: activeTab === "broadcast" ? "block" : "none",
              }}
              hidden={activeTab !== "broadcast"}
            >
              <div className="block md:hidden">
                <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                  {currentSteps.map((step, index) => (
                    <>
                      <div
                        key={`mobile-step-${index}`}
                        className={`flex items-center gap-x-5 rounded-xl border p-3 shadow-md ${index === 1 ? "flex-row-reverse" : ""}`}
                        style={{ opacity: 0, transform: "translateY(30px)" }}
                      >
                        <div
                          className={`flex shrink-0 items-center justify-center rounded-full p-2 ${step.bgColor}`}
                        >
                          <img
                            src={step.image}
                            alt="bot"
                            className="w-14 object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="font-raleway text-lg font-bold">
                            {step.title}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < currentSteps.length - 1 && (
                        <div
                          key={`mobile-arrow-${index}`}
                          className={
                            index === 0 ? "mr-5 ml-auto" : "mr-auto ml-5"
                          }
                          style={{
                            opacity: 0,
                            transform: "translateY(30px)",
                          }}
                        >
                          <ArrowIcon className="rotate-90" />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                  {currentSteps.map((step, index) => (
                    <>
                      <div
                        key={`desktop-step-${index}`}
                        className="flex flex-col items-center gap-y-5"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <div>
                          <div
                            className={`flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full ${step.bgColor}`}
                          >
                            <img
                              src={step.image}
                              alt="scan"
                              className="w-[100px] object-contain"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-raleway text-lg font-semibold md:text-center">
                            {step.title}
                          </p>
                          <p className="font-raleway text-muted-foreground md:text-center">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {index < currentSteps.length - 1 && (
                        <div
                          key={`desktop-arrow-${index}`}
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <ArrowIconLarge className="hidden md:mb-32 md:block" />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmStepsTabsSection;
