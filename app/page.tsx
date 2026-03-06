import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-2xl text-white">
            

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              wedsgarden <span className="text-white/90">A/C</span>
              <span className="block text-white/90">Function Hall</span>
            </h1>

            <p className="mt-4 text-lg text-white/85">
              Celebrate in style and make your occasion memorable — weddings, receptions,
              engagements, birthdays & corporate events.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-black hover:bg-white/90"
              >
                Check Availability
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 font-medium text-white hover:bg-white/10"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">About our hall</h2>
        <p className="mt-3 max-w-3xl text-black/70">
          Weds Garden A/C Function Hall is a premium venue in Hyderabad for weddings,
          receptions, engagements, birthdays and corporate events. Elegant interiors,
          modern facilities, and a smooth experience for you and your guests.
        </p>
      </section>

      {/* Facilities */}
      <section className="bg-black/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Facilities</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
  {
    title: "Spacious Hall",
    icon: "🏛️",
    desc: "Large elegant hall accommodating up to 2000 guests comfortably for weddings and events."
  },
  {
    title: "Parking Available",
    icon: "🚗",
    desc: "Spacious parking facility with dedicated valet parking service for the guests."
  },
  {
    title: "Fully Air Conditioned",
    icon: "❄️",
    desc: "Modern fully air-conditioned halls ensuring comfort for all guests during events."
  },
  {
    title: "Stage Decoration",
    icon: "🎭",
    desc: "Professional stage decoration with beautiful themes for weddings and celebrations."
  }
].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="text-2xl">{f.icon}</div>
                <div className="mt-3 font-medium">{f.title}</div>
                <p className="mt-1 text-sm text-black/60">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery (placeholder for now) */}
      <section id="gallery" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Gallery</h2>
            <p className="mt-2 text-black/70">
              
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
  "/images/01.png",
  "/images/02.png",
  "/images/03.jpeg",
  "/images/04.jpeg",
  "/images/05.jpeg",
  "/images/06.jpeg"
].map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Venue"
                className="h-64 w-full object-cover transition hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-black/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-3xl font-semibold">Contact</h2>

            <div className="mt-5 space-y-2 text-black/75">
              <p>
                <span className="font-medium text-black">Phone:</span> +91 98850 57086
              </p>
              <p>
                <span className="font-medium text-black">Phone:</span> +91 96037 21111
              </p>
              <p>
                <span className="font-medium text-black">Phone:</span> +91 96407 12222
              </p>
              <p>
                <span className="font-medium text-black">Email:</span> wedsgarden@gmail.com
              </p>
              <p>
                <span className="font-medium text-black">Address:</span> 19-4-6/1, Beside Bharat Petrol Pump,
                Hashambad Road, Near Chandrayangutta Flyover Bridge, Hyderabad, Telangana
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-xl border border-black/15 px-5 py-3 text-center hover:bg-black/[0.03]"
                href="tel:+919885057086"
              >
                Call Now
              </a>
              <a
                className="rounded-xl bg-green-600 px-5 py-3 text-center font-medium text-white hover:opacity-95"
                href="https://wa.me/919885057086"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="rounded-xl bg-black px-5 py-3 text-center font-medium text-white hover:bg-black/90"
                href="https://www.google.com/maps?q=17.325713,78.473229"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <iframe
              title="Weds Garden Location"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=17.325713,78.473229&output=embed"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10">
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">

    <div className="flex flex-col items-center">
  <p className="text-sm text-black/70">
    © 2019 Weds Garden A/C Function Hall
  </p>

  <p className="text-sm text-black/50">
    @N
  </p>
</div>

    <p className="text-sm text-black/60">
      Hyderabad, Telangana
    </p>

    

    <div className="flex gap-5 text-2xl">

      <a href="https://www.instagram.com/wedsgardenac" target="_blank" className="hover:text-pink-500 transition">
        <FaInstagram />
      </a>

      <a href="https://www.facebook.com/wedsgardenac" target="_blank" className="hover:text-blue-600 transition">
        <FaFacebook />
      </a>

      <a href="https://x.com/wedsgarden" target="_blank" className="hover:text-black transition">
        <FaXTwitter />
      </a>

    </div>

  </div>
</footer>
    </main>
  );
}