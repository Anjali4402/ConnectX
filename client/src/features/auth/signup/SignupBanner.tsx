import Logo from "@/components/ui/shared/Logo";
import Image from "next/image";

const SignupBanner = () => {
  return (
    <div className="w-full md:w-1/2 relative bg-surface-container overflow-hidden flex flex-col justify-between p-12">
      {/* <!-- Background Elements --> */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-background/40"></div>
      </div>
      {/* <!-- Content --> */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-16">
          <Logo />
        </div>
        <h1 className="text-5xl font-bold text-on-surface mb-6 max-w-sm">
          Connect with clarity.
        </h1>
        <p className="text-on-surface-variant max-w-xs leading-relaxed opacity-80">
          Experience the next generation of secure, high-performance
          communication designed for the modern era.
        </p>
      </div>
      <div className="relative z-10 mt-auto">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 max-w-85">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-2">
              <Image
                alt="User 1"
                height={32}
                width={32}
                className="rounded-full border-2 border-surface-container"
                data-alt="A professional headshot of a young man with glasses and a friendly expression, set against a soft blurred studio background with purple and blue ambient lighting. High-end photography style with sharp focus on eyes and soft bokeh."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK06XtGhPzdpqaohAl5vXx4vBgrdQzyEHxgXBRksUakGgWdd28UG7mqJWalE0tmRg-VxG4vJpRmSynOJmXemeiT0P777o7yuzsmXpqdfKrR2Od0lTN4aeZUtJbpSybi3kaispLdwWiL9qwa4vclHVFaxYTCZZY8c-5Cxmc-ggCCrcOnZ8Dak0sn3Cbc-A4nsw4Af8u8jskMAJr530T6_BTbelTOXyuYvWf7aeh78rjx0A_hInZTTKAQ48zy8MUmXai-hT31N8gNGM"
              />
              <Image
                alt="User 2"
                height={32}
                width={32}
                className="rounded-full border-2 border-surface-container"
                data-alt="A close-up portrait of a woman with vibrant hair, smiling warmly. The lighting is dramatic with cool cyan and warm indigo highlights, matching a sleek technology brand aesthetic. Shallow depth of field with a clean minimalist background."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYukPVCibqo3qmTYJKsfRqTuYC36aNweRetK-sIdTtmVT48bDXmbfbobo1RCnfuvii2gMAz672uUyP85VoHgqBH4nluXcV2ckCAtW6AALReM4aPDwz9nWVfQqneUSNSfxPnEhToA9uLLWh8t8Z8yYpLwsUesV_Q8OLbwj7njtlv0k69KqAk5oDzTn-N8LNaL_zQAC9c3uZQrjuUuLaNkgyVGCRmvGJhdTxoeweUmQkc-rDOA7iMFyF4haPz0XpuX633wdeVt2yCxc"
              />
              <Image
                alt="User 3"
                height={32}
                width={32}
                className="rounded-full border-2 border-surface-container"
                data-alt="A detailed portrait of a creative professional with a neutral expression. Soft rim lighting in Electric Indigo colors defines the silhouette against a dark, tech-oriented studio background. Cinematic quality with natural skin textures and high-resolution details."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACI88OaxkGxNAlIbIN0osOEd8kvMfv5sy5ihjkZIHSWJ8zar62EXSxMVPJ_bOtJZw-5es_XdqdfZRDiOOzPbs9PBuUdO2gPjMj0LK5_jkoOFKfx_2pfwXq9KiHNzogT9eKtEgcStX_8V1ZoSQ8ZEqBZRtesSY3k79t8PTnBTCRAE6qnfWwsFPMiSKGuc3dx8OCJCAkB8ZwnxQHzYQLOhQ-OSYoFVFcIoxdChvYPKJyRuH3FVN2wEvgwRBUErbb2bfaBsGpRIKNLME"
              />
            </div>
            <span className="font-label-md text-on-surface-variant">
              +2.4k active users
            </span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3 shadow-[0_0_10px_#c0c1ff]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupBanner;
