// --- 1. SVGs (Icons & Logos) ---
const Logo = "/images/shared/desktop/logo.svg";
const IconCart = "/images/shared/desktop/icon-cart.svg";
const IconHamburger = "/images/shared/tablet/icon-hamburger.svg";
const IconFacebook = "/images/shared/desktop/icon-facebook.svg";
const IconTwitter = "/images/shared/desktop/icon-twitter.svg";
const IconInstagram = "/images/shared/desktop/icon-instagram.svg";
const Checkout = "/images/checkout/icon-cash-on-delivery.svg";

// --- 2. Home Hero ---
const HeroMobile = "/images/home/mobile/image-hero.webp";
const HeroTablet = "/images/home/tablet/image-hero.webp";
const Desktop = "/images/home/desktop/image-hero.webp";

// --- 3. Home Products Sections ---
const imgYX1Desktop = "/images/home/desktop/image-earphones-yx1.webp";
const imgYX1Tablet = "/images/home/tablet/image-earphones-yx1.webp";
const imgYX1Mobile = "/images/home/mobile/image-earphones-yx1.webp";

const imgZX7Desktop = "/images/home/desktop/image-speaker-zx7.webp";
const imgZX7Tablet = "/images/home/tablet/image-speaker-zx7.webp";
const imgZX7Mobile = "/images/home/mobile/image-speaker-zx7.webp";

const imgZX9Desktop = "/images/home/desktop/image-speaker-zx9.webp";
const imgZX9Tablet = "/images/home/tablet/image-speaker-zx9.webp";
const imgZX9Mobile = "/images/home/mobile/image-speaker-zx9.webp";

// --- 4. Shared Content ---
const BestGearDesktop = "/images/shared/desktop/image-best-gear.webp";
const BestGearTablet = "/images/shared/tablet/image-best-gear.webp";
const BestGearMobile = "/images/shared/mobile/image-best-gear.webp";

// --- 5. Category ---
const CategoryEarphones = "/images/shared/desktop/image-earphones.webp";
const CategoryHeadphones = "/images/shared/desktop/image-headphones.webp";
const CategorySpeakers = "/images/shared/desktop/image-speakers.webp";

// --- 6. EmpthyCart ---
const EmpthyCart = "/images/cart/empty-cart.webp";

export const IMAGES = {
  home: {
    hero: {
      mobile: HeroMobile,
      tablet: HeroTablet,
      desktop: Desktop,
    },
    yx1: { desktop: imgYX1Desktop, tablet: imgYX1Tablet, mobile: imgYX1Mobile },
    zx7: { desktop: imgZX7Desktop, tablet: imgZX7Tablet, mobile: imgZX7Mobile },
    zx9: { desktop: imgZX9Desktop, tablet: imgZX9Tablet, mobile: imgZX9Mobile },
  },
  shared: {
    bestGear: {
      desktop: BestGearDesktop,
      tablet: BestGearTablet,
      mobile: BestGearMobile,
    },
    categories: {
      earphones: CategoryEarphones,
      headphones: CategoryHeadphones,
      speakers: CategorySpeakers,
    },
  },
  cart: {
    empthyCart: EmpthyCart,
  },
};

export const ICONS = {
  Logo,
  Cart: IconCart,
  Hamburger: IconHamburger,
  Social: {
    Facebook: IconFacebook,
    Twitter: IconTwitter,
    Instagram: IconInstagram,
  },
  Checkout: Checkout,
};
