import Image from "next/image";
import { IoMdDoneAll } from "react-icons/io";

const ChatContent = () => {
  return (
    <div className="flex-1 overflow-y-auto p-gutter flex flex-col space-y-8 pb-2">
      {/* <!-- Day Divider --> */}
      <div className="flex items-center justify-center">
        <div className="h-px flex-1 bg-white/5"></div>
        <span className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-40">
          Today
        </span>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>
      {/* <!-- Incoming Message --> */}
      <div className="flex items-start space-x-3 max-w-[80%]">
        <Image
          alt="Felix"
          className="rounded-full mt-6"
          width={32}
          height={32}
          data-alt="Close-up portrait of a digital artist avatar with a modern aesthetic, wearing dark designer glasses and a minimal black turtleneck, against a soft blurred studio background with purple and blue light leaks."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt-w5e1FFoZzRHBxLvwrNkFZIpbXEwqfyTcEDPE6RfzIukSUgANCo_mgLm00JOZdA752D0RsIBKK5qdMzZiKInU43nlsLxG07eoIFwSCqCTSX-AnRdkw6U4jogpyNc5hiwlC0G7PDAYQ1EpN2YNgTTz9Q8ct0ltOxJ2XAdrNkjcFskwE-PYUlvyP4CiEpiGN821UjQrsoto6VNNcc5Gd93UKtF1qCyLxfDMtbQ153kxzYSRibzgW9UNQGAhyU7_dnThWWU3btNf4c"
        />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-primary ml-1 mb-1">
            Felix
          </span>
          <div className="message-bubble-in p-4 text-sm text-on-surface">
            Just uploaded the latest prototype for the Luminal Dashboard. Let me
            know what you guys think about the glassmorphism intensity on the
            sidebar! 🎨
          </div>
          <span className="text-[10px] text-on-surface-variant mt-1 ml-1 opacity-50">
            10:24 AM
          </span>
        </div>
      </div>
      {/* <!-- Outgoing Message --> */}
      <div className="flex items-end justify-end space-x-3 self-end max-w-[80%]">
        <div className="flex flex-col items-end">
          <div className="message-bubble-out p-4 text-sm text-on-primarys text-white">
            The blur radius looks perfect, Felix. It really helps the typography
            pop. I&apos;m testing it on the ultrawide monitor now.
          </div>
          <div className="flex items-center mt-1 space-x-1 mr-1">
            <span className="text-[10px] text-on-surface-variant opacity-50">
              10:26 AM
            </span>
            <IoMdDoneAll className="size-3 text-primary" />
          </div>
        </div>
      </div>
      {/* <!-- Another Incoming Message --> */}
      <div className="flex items-start space-x-3 max-w-[80%]">
        <Image
          alt="Sarah"
          className="rounded-full mt-6"
          width={32}
          height={32}
          data-alt="A portrait of a senior creative director with an elegant, modern style, featuring high-quality rendering, soft directional lighting from the side, and a professional workspace background with subtle hints of technology."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVljrF6AwAi8T2FCqgzTGFcmBjBbvCTIwfimWXmWR7tJarEeDXrVBRsa7qQ3SyZx17V76Q6z_8L-Yc8XsXrtrFnhYaElsV1NaV6aqZk8TNEg3rdj1TLUKfMTzyEqyvg7X4ztd-mbHVHf--G2dWEnZkd3pFUPtHfgGwcLJvHqnb3lJLpcGBQOmjCRGXpvUr2tFZ4w0vC9RNoBHiVNb_WBRWsR8J34XPFw7Vw-eUi_CmHgNTDj8TAjYHDgq9tdz52xPMmpbtAb8uN2o"
        />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-tertiary ml-1 mb-1">
            Sarah
          </span>
          <div className="message-bubble-in p-4 text-sm text-on-surface">
            Agreed! I think we should push the indigo accents a bit more in the
            active states though. They feel slightly muted in the dark mode
            variant.
          </div>
          <span className="text-[10px] text-on-surface-variant mt-1 ml-1 opacity-50">
            10:30 AM
          </span>
        </div>
      </div>
      {/* <!-- Shared Media Preview in Chat --> */}
      <div className="flex items-start space-x-3 max-w-[80%]">
        <Image
          alt="Marcus"
          className="rounded-full mt-6"
          width={32}
          height={32}
          data-alt="A detailed avatar of a young tech professional with a friendly expression, styled in a high-end cinematic digital painting style with vibrant blue and neon violet backlight."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr_eG8oIo3bs-JLGTxk7wPyaJkb8vcOGzwCw0cOECOEkG0xgXoSnceH-MdJe23NkiCOKWzETgIALBjxQ_kcdnyKR3UYegNegQ8RUVxzmkMlPP_3JRxDD2t9-7mpKswrrtqz01msS35zm0dAXKjsslqPiZlia6JCU4tikMrxaj5773MBXUSd9Wb5WwRQIQPZvZcODNcOpBSt40FBO3Wn0F1_9YnoK4iYFKU6xTg8YDxvzwv5ewmXxuYqJWJJAyYVE-muDLTYubkoOs"
        />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-secondary ml-1 mb-1">
            Marcus
          </span>
          <div className="message-bubble-in p-2">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="h-32 relative w-full">
                <Image
                  className="rounded-lg object-cover"
                  fill
                  alt="image-1"
                  data-alt="A stunning abstract 3D render of flowing silk-like shapes in electric indigo and charcoal, featuring high-contrast lighting and deep shadows to illustrate premium dark mode design aesthetics."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ibMkwpIHcmvH9LQVupURSiMat8xidbYSZvaryksKsgdGmC6cadrXeAfFFNJmoWUtuyZk9f1WH3ijPymO9Aw4pHNQP6T6GL83isKyksQpgsUwJRyaBQaWuuKZX9QIBIMhUMAMoNuoexNGkLJmxsG_ZSXOzPMniKinsfftYMXsdAVlCxSHKHLzcRDYyMqfwOetdnG-cPGIUKBlw2IhlSKEgHElfyaZTUrMNkThOBrqVsETmGzQ4jNTFWe1JXie6BO6gx_ohwEDqbk"
                />
              </div>
              <div className="h-32 relative w-full">
                <Image
                  className="rounded-lg object-cover"
                  fill
                  alt="image-2"
                  data-alt="A stunning abstract 3D render of flowing silk-like shapes in electric indigo and charcoal, featuring high-contrast lighting and deep shadows to illustrate premium dark mode design aesthetics."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdwr0Lfi7x4EgZGsHeToROjUgPPgn5wioUyIOlyIuqt9c_uZtslW52O8Uj0AWqFXX_eN988p8PHpZ3JrmTXqc5YbDEOv98Y3zs7a5UuKzgTb38NiEC1ihjkwOuIVaw9zNloWaWoDFYCpCBGMiBe8iuJkICodzYYsfGR3PN8zrFvnyXRvEEwwr0UY7yIuZguitnAirNZp2c7cwlA_yfvMrtfyMujF_Uk5636VrV1olaQ-ATwW7bs1BUsWNwZ2DUQrm2mYxQSCbVX0A"
                />
              </div>
            </div>
            <div className="px-2 pb-2">
              <p className="text-sm text-on-surface">
                Reference frames for the new login transition.
              </p>
            </div>
          </div>
          <span className="text-[10px] text-on-surface-variant mt-1 ml-1 opacity-50">
            10:45 AM
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
