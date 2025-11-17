import { Link } from "react-router-dom";

const ctaClass =
  "inline-block px-4 py-2 rounded-full bg-[#181716] text-white font-bold text-sm hover:bg-gray-800 transition-colors";

const HomePage = () => {
  return (
    <>
      <main className="hero grid grid-cols-[45%_1fr] gap-6 min-h-screen p-6 relative" id="home">
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#7A6F68]/82 via-[#7A6F68]/58 via-[#7A6F68]/32 via-[#7A6F68]/12 to-transparent"></div>

        <div className="hero__text flex items-center justify-center p-8 relative z-10">
          <h1 className="text-white font-black text-[clamp(64px,9vw,110px)] leading-none tracking-wide">
            Quick
            <br />
            <span className="whitespace-nowrap">Cart</span>
          </h1>
        </div>

        <div className="hero__collage columns-4 gap-3 p-0 relative z-0">
          {Array.from({ length: 12 }).map((_, idx) => (
            <img
              key={idx}
              src={`https://picsum.photos/200/${200 + idx * 5}?random=${idx + 1}`}
              alt={`Showcase ${idx + 1}`}
              className="block w-full h-auto mb-3 break-inside-avoid"
            />
          ))}
        </div>
      </main>

      <section className="py-3">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {["ELECTRONICS", "FLASH SALE"].map((title, idx) => (
            <div key={title} className="relative h-[360px] rounded-lg overflow-hidden bg-gradient-to-br from-[#756A63] to-[#8A7F78]">
              <img src={`https://picsum.photos/600/360?random=${idx + 13}`} alt={title} className="w-full h-full object-cover" />
              <div className="absolute left-4 bottom-4 right-4 text-white space-y-2">
                <h2 className="text-2xl font-bold tracking-wider">{title}</h2>
                <p className="opacity-95">
                  {idx === 0 ? "Latest gadgets at amazing prices" : "Up to 50% Off · Limited Time"}
                </p>
                <Link to="/products" className={ctaClass}>
                  {idx === 0 ? "Shop Now" : "Explore"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-2">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex gap-12 whitespace-nowrap overflow-hidden py-3 rounded-xl bg-[#181716] text-white font-semibold tracking-wider">
            <span className="pl-full animate-ticker">FREE SHIPPING · 30-DAY RETURNS · 24/7 SUPPORT · </span>
            <span className="pl-full animate-ticker" aria-hidden="true">
              FREE SHIPPING · 30-DAY RETURNS · 24/7 SUPPORT ·
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-7" id="new">
        <h2 className="text-center tracking-[0.18em] font-bold text-[#5a524d] mb-4">FEATURED CATEGORIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Electronics", "Fashion", "Home & Garden", "Sports"].map((label, idx) => (
            <Link
              key={label}
              to="/products"
              className="relative h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-[#756A63] to-[#8A7F78] group hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <img src={`https://picsum.photos/300/200?random=${idx + 15}`} alt={label} className="w-full h-full object-cover" />
              <span className="absolute left-3 bottom-3 text-white font-bold tracking-wider text-sm">
                {label.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1B1A19] text-gray-200 py-9 my-7">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4 items-center">
          <div className="h-[320px] rounded-lg overflow-hidden bg-gradient-to-br from-[#756A63] to-[#8A7F78]">
            <img src="https://picsum.photos/500/320?random=19" alt="Shopping Experience" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-wider mb-3">SHOPPING MADE SIMPLE</h3>
            <p className="text-[#cfcac6] mb-4">
              Discover millions of products from trusted sellers. Fast shipping, easy returns, and 24/7 customer support.
            </p>
            <Link to="/products" className="inline-block bg-white text-gray-900 rounded-lg px-4 py-3 font-bold hover:bg-gray-100 transition-colors">
              Start Shopping
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-7" id="categories">
        <h2 className="text-center tracking-[0.18em] font-bold text-[#5a524d] mb-4">
          SHOP BY CATEGORY
        </h2>
        <div className="category-grid gap-4 h-[540px]">
          {["Electronics & Gadgets", "Fashion & Accessories", "Home & Lifestyle", "Sports & Outdoors", "Books & Media"].map(
            (label, idx) => (
              <Link
                key={label}
                to="/products"
                className={`relative rounded-lg overflow-hidden bg-gradient-to-br from-[#756A63] to-[#8A7F78] group hover:-translate-y-1 hover:shadow-lg transition-all duration-200 grid-area-t${idx + 1}`}
              >
                <img src={`https://picsum.photos/400/540?random=${20 + idx}`} alt={label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>
                <span className="absolute left-3 bottom-3 text-white font-extrabold tracking-wider text-sm">
                  {label}
                </span>
              </Link>
            )
          )}
        </div>
      </section>

      <footer className="bg-[#1B1A19] text-[#d8d4d1] mt-9">
        <div className="max-w-[1200px] mx-auto px-4 py-7 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="font-extrabold tracking-[0.18em]">QUICKCART</div>
          <div>
            <h4 className="mb-2 text-white tracking-wider">Company</h4>
            <a href="#" className="block text-[#d8d4d1] no-underline my-1">
              About
            </a>
            <a href="#" className="block text-[#d8d4d1] no-underline my-1">
              Careers
            </a>
            <a href="#" className="block text-[#d8d4d1] no-underline my-1">
              Contact
            </a>
          </div>
          <div>
            <h4 className="mb-2 text-white tracking-wider">Support</h4>
            <a href="#" className="block text-[#d8d4d1] no-underline my-1">
              Help Center
            </a>
            <a href="#" className="block text-[#d8d4d1] no-underline my-1">
              Shipping Info
            </a>
            <a href="#" className="block text-[#d8d4d1] no-underline my-1">
              Returns
            </a>
          </div>
          <div>
            <h4 className="mb-2 text-white tracking-wider">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg border border-white/25 bg-white/6 text-white placeholder-white/70"
              />
              <button className="px-3 py-2 bg-white text-gray-900 rounded-lg font-bold text-sm">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;

