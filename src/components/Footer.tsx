"use client";

const footerLinks = {
  Product: [
    { label: "Isaac 0", href: "#product" },
    { label: "Specifications", href: "#specs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Order", href: "#order" },
  ],
  Company: [
    { label: "About", href: "https://www.weaverobotics.com" },
    { label: "Careers", href: "https://www.weaverobotics.com" },
    { label: "Blog", href: "https://www.weaverobotics.com/discover" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/weaverobotics",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M12.6.75h2.454l-5.36 6.126L16 15.25h-4.937l-3.867-5.055-4.425 5.055H.316l5.733-6.554L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/weave-robotics",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H6.29c.032.678 0 7.225 0 7.225h2.36z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@weaverobotics",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M15.665 4.042a2.006 2.006 0 0 0-1.41-1.42C13.005 2.262 8 2.262 8 2.262s-5.005 0-6.255.36a2.006 2.006 0 0 0-1.41 1.42A21.03 21.03 0 0 0 0 8.001c-.01 1.34.11 2.678.335 3.998a2.006 2.006 0 0 0 1.41 1.38c1.25.34 6.255.34 6.255.34s5.005 0 6.255-.34a2.006 2.006 0 0 0 1.41-1.38c.24-1.32.36-2.658.335-3.998a21.03 21.03 0 0 0-.335-3.959zM6.4 10.462V5.54L10.562 8 6.4 10.462z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-weave-black text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-16 pb-16 border-b border-weave-gray-800">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-display font-extrabold text-[22px] tracking-[-0.04em] text-white">
                ISAAC
              </span>
              <span className="text-[10px] font-mono font-bold text-weave-orange tracking-[0.05em] mt-1">
                0
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-weave-gray-500 max-w-xs mb-6">
              The first personal robot for your home. Built by Weave Robotics.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-weave-gray-800 text-weave-gray-400 hover:bg-weave-gray-700 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-mono font-bold uppercase tracking-[0.15em] text-weave-gray-500 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-weave-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[12px] text-weave-gray-600">
            &copy; {new Date().getFullYear()} Isaac by Weave Robotics. All rights
            reserved.
          </p>
          <p className="text-[12px] text-weave-gray-700 font-mono">
            San Francisco, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
