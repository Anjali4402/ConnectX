import Image from "next/image";
import { MdAutoGraph, MdOutlineChatBubbleOutline } from "react-icons/md";

const LoginBanner = () => {
  return (
    <aside className="hidden lg:flex w-[55%] h-full relative overflow-hidden bg-surface-container-lowest">
      {/* <!-- Background Animation --> */}

      {/* <!-- Glassmorphism Elements --> */}
      <div className="absolute inset-0 flex items-center justify-center p-20 z-10">
        <div className="relative w-full max-w-2xl aspect-square">
          {/* <!-- Floating 3D Cards / Connectivity Visuals --> */}
          <div className="floating-element glass-panel absolute top-0 left-0 w-64 h-80 rounded-3xl p-8 flex flex-col justify-between shadow-2xl backdrop-blur-3xl transform -rotate-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <MdOutlineChatBubbleOutline className="size-5 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="h-2 w-20 bg-primary/40 rounded-full"></div>
                <div className="h-1.5 w-12 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-white/5 rounded-full"></div>
              <div className="h-2 w-4/5 bg-white/5 rounded-full"></div>
              <div className="h-2 w-full bg-white/5 rounded-full"></div>
            </div>
          </div>
          <div
            className="floating-element glass-panel absolute bottom-10 right-0 w-72 h-64 rounded-3xl p-8 flex flex-col justify-between shadow-2xl backdrop-blur-3xl transform rotate-12 transition-all duration-1000"
            style={{ animationDelay: "-2s" }}
          >
            <div className="flex -space-x-3">
              <Image
                alt="User 1"
                width={48}
                height={48}
                className="rounded-full border-2 border-surface bg-primary/30 overflow-hidden"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6SZukhiwchfiTkCD1DJ11en4BwOrX8HLVHOuoD7vEgbm1vn7Dt75tgMrEv7Rcw7R6dbcENERf_1DT1zQRRdc34OyvhvNPlEX0A0lszMWclFL4SXOR04YY4_2jLl279nKo4hf07eshXT1xWCgVe9G7PM5InUp8eXPKujCwOa_dah34l7EqDQs7AMjKf3SPCSWpHhMqZrJBQvu7LGUAnH18TxzaY_P-uD37pGJfIazBeZ2yFC0-63eAiyVCEj3YOjtSuWzUHQtmkO4"
              />
              <Image
                alt="User 1"
                width={48}
                height={48}
                className="rounded-full border-2 border-surface bg-primary/30 overflow-hidden"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzAo7MDf7thBpjnx3f4HpsLUtAjur0_hr7EaoxCFPs7QM1AuSS889tYIw4w2uWh7eZ7dCuslw3B-8gZizjkVYVlrLwNCrI-DFlXEMKaQYF4Q_k_oNa7a1PVZ-nDAyaZYD6tBAU_Qt37Xi29Sg0N50fU_mdcrBJxBLHrXyE7CpWFHkVv7kVVX9g2kf9eQnj1ICuRMSfYNuGmJJMakP2wynT1v-nMVaGwl-pIlHnhlZwXh3svsGpxG3JLzI59bkhQSDepij2Rh_-1Tw"
              />
              <Image
                alt="User 1"
                width={48}
                height={48}
                className="rounded-full border-2 border-surface bg-primary/30 overflow-hidden"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqI89C4C1GSUIJyXiFeGTnBihbV7WE36PR3fnBpS3u4BIP2RROygNmlg9WLECkPlb3tTLYeRNpW7qix2lwGojqmqupPrpVXWVZoC6PiuM5Q-0Zf8QL53rrLs4CAm_pr-QBSaDQCSwWioDn0YDTkWWz2PxI93yqAtO9yI2fTNvVzinNrRYP5fONoLfHljQCdO_i8Gb78oyzOUDnKjlniGIFNAXwPLooJkh6seZ8kvtQmQa0eTnQz4lzG_c8ZKMT2oZ-auanhtFip-8"
              />
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-primary/20 rounded-full"></div>
              <div className="flex justify-between items-center">
                <div className="h-6 w-24 bg-primary rounded-lg"></div>
                <MdAutoGraph className="text-primary size-6" />
              </div>
            </div>
          </div>
          {/* <!-- Abstract Connectivity Graphic --> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 blur-[80px] opacity-20 pointer-events-none">
            <div className="w-full h-full rounded-full bg-linear-to-br from-primary via-inverse-primary to-secondary animate-pulse"></div>
          </div>
        </div>
      </div>
      {/* <!-- Descriptive Text Overlay --> */}
      <div className="absolute bottom-20 left-20 right-20 z-20">
        <h2 className="text-5xl font-bold text-on-surface mb-4">
          Connect with precision.
        </h2>
        <p className="text-on-surface-variant max-w-lg">
          Luminal Chat offers ultra-low latency messaging, end-to-end
          encryption, and a workflow designed for the modern elite professional.
        </p>
      </div>
      {/* <!-- Image Placeholder with detailed Prompt --> */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPed5i48zqMp4JaPQtpRUNzP7rPVRi57p6kGVOIWWrJhzyhusad0MwoeniW5a4RmPqMAi1toOOK7ZaLGH30hee1Q3-CjH_rf5ZirNin868oLuUTODhFCqAcOu1KteZOWsX_YUusRi_FawBwgvivGtU29gwIYx6TC4Wut1fNId0f05S3oacF2agLNY9IsxQ0jpyXIw4re4_2fxFaTq4E3--mLIvSHcerMOulWGnlVrLyVS09B63vB2PwRwZyVQaofBJdRBTs642vdA"
          alt="Abstract futuristic crystalline ribbons"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </aside>
  );
};

export default LoginBanner;
