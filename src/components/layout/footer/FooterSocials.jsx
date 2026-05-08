import { ICONS } from "../../../assets";
const { Social } = ICONS;

const FooterSocials = () => {
  return (
    <div className="flex flex-col items-center md:items-end justify-between h-full gap-12 md:gap-0">
      <div className="flex items-start gap-4">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="Visit Facebook page"
        >
          <img src={Social.Facebook} alt="Facebook" />
        </a>

        <a
          href="https://x.com/home"
          target="_blank"
          aria-label="Visit Twitter page"
        >
          <img src={Social.Twitter} alt="Twitter" />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Visit Instagram page"
        >
          <img src={Social.Instagram} alt="Instagram" />
        </a>
      </div>

      <p className="text-text-muted font-bold text-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          className="text-text-white hover:text-primary standard-smooth"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/moaz-harfoush-87ab77405/"
          target="_blank"
          className="text-text-white hover:text-primary standard-smooth"
        >
          Moaz Harfoush
        </a>
      </p>
    </div>
  );
};

export default FooterSocials;
