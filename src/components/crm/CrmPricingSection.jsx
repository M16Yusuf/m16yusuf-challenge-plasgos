import { CircleCheckBig, CircleX, Star, ChevronRight } from "lucide-react";

function CrmPricingSection() {
  const pricingPlans = [
    {
      name: "Trial Free",
      description: "Broadcast Whatsapp Trial Plan",
      originalPrice: "",
      price: "Free",
      period: "3 Days",
      discount: "",
      isMostPopular: false,
      features: [
        "Send Unlimited Messages",
        "1 WhatsApp Number Broadcast (Included)",
        "Create Unlimited Content",
        "Multi Sender Suffle",
        "Basic delivery reports",
        "Image Upload Support",
        "Broadcast Scheduling",
        "Smart Spintax Replace",
        "Video Upload Support",
        "Perfect Timing Broadcast",
        "Document Upload Support",
        "Spintax Text",
        "WhatsApp Number Warm Up (Included)",
        "Allow Unsubscribe",
        "Automation Reply with AI Support",
        "Free 100 AI Response",
      ],
      contacts: [
        { text: "5.000 Contacts (Include)", available: true },
        { text: "Manual Input Contacts", available: true },
        { text: "Import from TXT File", available: true },
        { text: "Import from CSV File", available: true },
        { text: "Import from EXCEL File", available: true },
        { text: "Group Contacts Grabber", available: false },
      ],
      support: [
        { text: "Email & Chat Support", available: false },
        { text: "Prioritized Technical Support", available: false },
      ],
    },
    {
      name: "Enterprise",
      description: "Broadcast Whatsapp with AI Enterprise Plan",
      originalPrice: "Rp.350.000",
      price: "199.000",
      period: "/ Bulan",
      discount: "Discount 43%",
      isMostPopular: false,
      features: [
        "Send Unlimited Messages",
        "6 WhatsApp Number Broadcast (Included)",
        "Create Unlimited Content",
        "Multi Sender Suffle",
        "Basic delivery reports",
        "Image Upload Support",
        "Broadcast Scheduling",
        "Smart Spintax Replace",
        "Video Upload Support",
        "Perfect Timing Broadcast",
        "Document Upload Support",
        "Spintax Text",
        "3 WhatsApp Number Warm Up (Included)",
        "Allow Unsubscribe",
        "Automation Reply with AI Support",
        "Free 500 AI Response",
      ],
      contacts: [
        { text: "50.000 Contacts (Include)", available: true },
        { text: "Manual Input Contacts", available: true },
        { text: "Import from TXT File", available: true },
        { text: "Import from CSV File", available: true },
        { text: "Import from EXCEL File", available: true },
        { text: "Group Contacts Grabber", available: true },
      ],
      support: [
        { text: "Email & Chat Support", available: true },
        { text: "Prioritized Technical Support", available: true },
      ],
    },
    {
      name: "Enterprise Plus",
      description: "Broadcast Whatsapp with AI Enterprise Plus",
      originalPrice: "Rp.1.850.000",
      price: "399.000",
      period: "/ 3 Bulan",
      discount: "Discount 78%",
      isMostPopular: false,
      features: [
        "Send Unlimited Messages",
        "8 WhatsApp Number Broadcast (Included)",
        "Create Unlimited Content",
        "Multi Sender Suffle",
        "Basic delivery reports",
        "Image Upload Support",
        "Broadcast Scheduling",
        "Smart Spintax Replace",
        "Video Upload Support",
        "Perfect Timing Broadcast",
        "Document Upload Support",
        "Spintax Text",
        "4 WhatsApp Number Warm Up (Included)",
        "Allow Unsubscribe",
        "Automation Reply with AI Support",
        "Free 1500 AI Response",
      ],
      contacts: [
        { text: "100.000 Contacts (Include)", available: true },
        { text: "Manual Input Contacts", available: true },
        { text: "Import from TXT File", available: true },
        { text: "Import from CSV File", available: true },
        { text: "Import from EXCEL File", available: true },
        { text: "Group Contacts Grabber", available: true },
      ],
      support: [
        { text: "Email & Chat Support", available: true },
        { text: "Prioritized Technical Support", available: true },
      ],
    },
    {
      name: "Enterprise Pro",
      description: "Broadcast Whatsapp with AI Enterprise Pro",
      originalPrice: "Rp.4.800.000",
      price: "890.000",
      period: "/ Tahun",
      discount: "Discount 81%",
      isMostPopular: true,
      features: [
        "Send Unlimited Messages",
        "10 WhatsApp Number Broadcast (Included)",
        "Create Unlimited Content",
        "Multi Sender Suffle",
        "Basic delivery reports",
        "Image Upload Support",
        "Broadcast Scheduling",
        "Smart Spintax Replace",
        "Video Upload Support",
        "Perfect Timing Broadcast",
        "Document Upload Support",
        "Spintax Text",
        "5 WhatsApp Number Warm Up (Included)",
        "Allow Unsubscribe",
        "Automation Reply with AI Support",
        "Free 5000 AI Response",
      ],
      contacts: [
        { text: "300.000 Contacts (Include)", available: true },
        { text: "Manual Input Contacts", available: true },
        { text: "Import from TXT File", available: true },
        { text: "Import from CSV File", available: true },
        { text: "Import from EXCEL File", available: true },
        { text: "Group Contacts Grabber", available: true },
      ],
      support: [
        { text: "Email & Chat Support", available: true },
        { text: "Prioritized Technical Support", available: true },
      ],
    },
  ];
  return (
    <div
      id="pricing"
      className="flex w-full scroll-mt-[75px] flex-col items-center justify-center gap-y-5"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-10 px-5 py-5">
        <div className="relative flex h-full w-full justify-center">
          <div className="flex w-11/12 justify-center">
            <div className="text-center">
              <div>
                <h1 className="text-4xl font-bold capitalize">
                  Pilih Paket dan Tingkatkan Bisnis dengan Mudah
                </h1>
              </div>
              <p className="text-muted-foreground my-2">
                Jangkau lebih banyak pelanggan, tingkatkan penjualan, dan
                kembangkan bisnis Anda dengan paltform kami yang praktis dan
                efektif.
              </p>

              {/* Pricing Cards Grid */}
              <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`text-card-foreground relative flex w-full flex-col justify-between rounded-xl border border-gray-200 bg-white shadow-lg ${
                      plan.isMostPopular ? "ring-primary ring-1" : ""
                    }`}
                  >
                    {/* Most Popular Badge */}
                    {plan.isMostPopular && (
                      <div
                        style={{
                          position: "absolute",
                          left: "0px",
                          right: "0px",
                        }}
                      >
                        <div className="focus:ring-ring -mt-10 inline-flex items-center rounded-xl border border-transparent bg-white px-3 py-2 text-base font-semibold text-black shadow ring-1 ring-orange-500 transition-colors hover:bg-white focus:ring-2 focus:ring-offset-2 focus:outline-none">
                          <Star className="mr-2 text-yellow-500" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="py-5">
                      {/* Header */}
                      <div>
                        <div
                          className="flex flex-col space-y-1.5 p-6"
                          style={{ minHeight: "185px" }}
                        >
                          <div className="text-2xl font-semibold tracking-tight">
                            {plan.name}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {plan.description}
                          </div>

                          {/* Price Info */}
                          <div className="flex items-center justify-center gap-x-3">
                            {plan.originalPrice && (
                              <p className="text-muted-foreground line-through">
                                {plan.originalPrice}
                              </p>
                            )}
                            {plan.discount && (
                              <div className="focus:ring-ring inline-flex items-center rounded-md border border-transparent bg-orange-400 px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:outline-none">
                                {plan.discount}
                              </div>
                            )}
                          </div>

                          <div className="">
                            <p>
                              {plan.price === "Free" ? (
                                <span className="text-4xl font-bold">
                                  {plan.price}
                                </span>
                              ) : (
                                <>
                                  Rp.{" "}
                                  <span className="text-4xl font-bold">
                                    {plan.price}
                                  </span>
                                  <span className="text-xs">
                                    <span className="text-xs">
                                      {plan.period}
                                    </span>
                                  </span>
                                </>
                              )}
                            </p>
                            <p>{plan.price === "Free" && plan.period}</p>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mb-3 p-6 pt-0">
                          <button className="focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-8 text-sm font-medium whitespace-nowrap text-white shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                            Pilih Paket
                          </button>

                          {/* Features Section */}
                          <div className="my-4 flex items-center justify-center gap-x-5">
                            <hr className="w-full text-gray-300" />
                            <p className="font-semibold">Features</p>
                            <hr className="w-full text-gray-300" />
                          </div>

                          <div className="flex flex-col gap-y-3">
                            {plan.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="mr-3">
                                  <CircleCheckBig
                                    className="text-green-600"
                                    size={16}
                                  />
                                </div>
                                <div className="text-left text-sm">
                                  {feature}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contacts Section */}
                    <div>
                      <div className="p-6 pt-0">
                        <div className="my-4 flex items-center justify-center gap-x-5">
                          <hr className="w-full text-gray-300" />
                          <p className="font-semibold">Contacts</p>
                          <hr className="w-full text-gray-300" />
                        </div>
                        <div className="flex flex-col gap-y-3">
                          {plan.contacts.map((contact, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="mr-5">
                                {contact.available ? (
                                  <CircleCheckBig
                                    className="text-green-600"
                                    size={16}
                                  />
                                ) : (
                                  <CircleX
                                    className="text-muted-foreground"
                                    size={16}
                                  />
                                )}
                              </div>
                              <div className="text-left text-sm">
                                {contact.text}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Support Section */}
                    <div>
                      <div className="p-6 pt-0">
                        <div className="my-4 flex items-center justify-center gap-x-5">
                          <hr className="w-full text-gray-300" />
                          <p className="font-semibold">Support</p>
                          <hr className="w-full text-gray-300" />
                        </div>
                        <div className="flex flex-col gap-y-3">
                          {plan.support.map((sup, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="mr-5">
                                {sup.available ? (
                                  <CircleCheckBig
                                    className="text-green-600"
                                    size={16}
                                  />
                                ) : (
                                  <CircleX
                                    className="text-muted-foreground"
                                    size={16}
                                  />
                                )}
                              </div>
                              <div className="text-left text-sm">
                                {sup.text}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Divider */}
                    <div className="flex items-center p-6 pt-0">
                      <div className="w-full">
                        <hr className="my-5 w-full text-gray-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More Button */}

              <div className="mt-3 flex items-center justify-center">
                <button className="inline-flex transform items-center justify-center gap-2 rounded-full bg-[#0451a5] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:shadow-xl">
                  Lihat paket lainnya
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmPricingSection;
