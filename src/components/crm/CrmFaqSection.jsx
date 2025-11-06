import { useState } from "react";
import { ChevronDown } from "lucide-react";

function CrmFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Apa itu Plasgos CRM?",
      answer: (
        <div className="text-muted-foreground flex flex-col gap-4 pt-0 pb-4 text-balance">
          <p>
            Plasgos CRM adalah platform Platform Otomatisasi Chat & Penjualan
            via WhatsApp yang membantu kamu berkomunikasi, menjual, dan
            mengelola pelanggan secara otomatis.
          </p>
          <p>Dengan Plasgos, kamu bisa:</p>
          <ul className="flex flex-col gap-y-2">
            <li>🤖 Balas chat otomatis 24/7 pakai AI</li>
            <li>📣 Kirim pesan broadcast massal tanpa batas</li>
            <li>📊 Kelola leads & pelanggan lewat dashboard CRM</li>
            <li>🔁 Follow-up otomatis ke calon pelanggan</li>
            <li>🔗 Kelola Banyak Nomor WhatsApp</li>
          </ul>
          <p>Cocok banget untuk kamu yang ingin:</p>
          <ul className="flex flex-col gap-y-2">
            <li>✅ Hemat waktu</li>
            <li>✅ Naikkan penjualan</li>
            <li>✅ Tetap fast response meski CS sedang offline</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Apakah Plasgos CRM Cocok untuk Saya?",
      answer: (
        <div>
          <p className="text-muted-foreground pt-0 pb-4 text-balance">
            Kalau kamu ingin jualan lebih cepat, otomatis, dan efisien —
            jawabannya: cocok banget! Plasgos ideal untuk pemilik bisnis online,
            UMKM, agensi, hingga tim CS yang kewalahan handle chat manual. Satu
            dashboard, semua beres: dari broadcast, chat, CRM, sampai follow-up.
          </p>
        </div>
      ),
    },
    {
      question: "Apa Bedanya Plasgos dengan Tool WhatsApp Lainnya?",
      answer: (
        <div>
          <p className="text-muted-foreground pt-0 pb-4 text-balance">
            Plasgos bukan hanya tool kirim pesan — tapi sistem cerdas dengan AI
            chatbot, CRM pelanggan, integrasi eksternal, dan insight performa.
            Jadi bukan sekadar “blast”, tapi solusi end-to-end.
          </p>
        </div>
      ),
    },
    {
      question: "Apakah Saya Perlu Menginstal Aplikasi di Komputer?",
      answer: (
        <div>
          <p className="text-muted-foreground pt-0 pb-4 text-balance">
            Plasgos CRM berbasis web, jadi kamu bisa langsung akses dari browser
            — tanpa instalasi, tanpa ribet. Cukup buka laptop atau HP, login ke
            dashboard, dan semua fitur siap digunakan.
          </p>
        </div>
      ),
    },
    {
      question: "Saya Gaptek, Apa Ada Panduannya?",
      answer: (
        <div>
          <p className="text-muted-foreground pt-0 pb-4 text-balance">
            Tenang, kami siap bantu dari A–Z, Plasgos dirancang untuk orang awam
            sekalipun. panduan langkah demi langkah, dan tim support kami juga
            siap dampingi kamu lewat chat. Gak perlu ngerti teknis, yang penting
            siap jualan 😎
          </p>
        </div>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div className="flex w-full justify-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-10 px-5 py-5">
        <div className="my-10 flex flex-col items-center gap-y-10">
          <p className="font-raleway text-center text-2xl font-semibold md:text-3xl">
            F A Q
          </p>

          <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between">
            {/* Left Side - Header and Image */}
            <div>
              <p className="font-raleway mb-3 text-2xl font-semibold md:text-3xl">
                Pertanyaan yang Sering Ditanyakan
              </p>
              <p className="font-raleway text-muted-foreground">
                Biar kamu gak bingung, ini penjelasan dari pertanyaan umum yang
                sering muncul.
              </p>
              <div className="flex justify-center md:justify-start">
                <img
                  src="/crm/questions-amico-CzmF04nc.svg"
                  alt="growth"
                  className="w-[300px] object-contain md:mt-10 md:w-[350px]"
                />
              </div>
            </div>

            {/* Right Side - Accordion */}
            <div className="w-full" data-orientation="vertical">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  data-state={openIndex === index ? "open" : "closed"}
                  data-orientation="vertical"
                  className={`my-3 rounded-lg border border-gray-300 p-3 ${
                    openIndex === index
                      ? "bg-linear-to-b from-sky-50 to-orange-100"
                      : "bg-neutral-50"
                  }`}
                >
                  <h3
                    data-orientation="vertical"
                    data-state={openIndex === index ? "open" : "closed"}
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-expanded={openIndex === index}
                      data-state={openIndex === index ? "open" : "closed"}
                      data-orientation="vertical"
                      onClick={() => toggleAccordion(index)}
                      className={`flex flex-1 items-center justify-between py-4 text-left text-sm font-bold no-underline! transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${
                        openIndex === index ? "" : "border-b-0"
                      }`}
                    >
                      <span className="flex w-full cursor-pointer items-center justify-between">
                        {faq.question}
                        <ChevronDown
                          className={`text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  {openIndex === index && faq.answer && (
                    <div
                      data-state="open"
                      role="region"
                      data-orientation="vertical"
                      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
                      style={{
                        "--radix-accordion-content-height":
                          "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width":
                          "var(--radix-collapsible-content-width)",
                        transitionDuration: "0s",
                        animationName: "none",
                        "--radix-collapsible-content-height": "368px",
                        "--radix-collapsible-content-width": "781.6875px",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}

                  {openIndex !== index && (
                    <div
                      data-state="closed"
                      hidden
                      role="region"
                      data-orientation="vertical"
                      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
                      style={{
                        "--radix-accordion-content-height":
                          "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width":
                          "var(--radix-collapsible-content-width)",
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmFaqSection;
