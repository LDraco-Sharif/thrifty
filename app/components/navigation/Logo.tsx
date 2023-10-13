"use client"
import { useThemeStore } from "@/state/themeState";
import { getSvgColor } from "@/utils/theme";
import { useRouter, usePathname } from "next/navigation";

type LogoProps = {};

const Logo = ({ }: LogoProps) => {
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const [, locale, category] = usePathname().split('/')
  const router = useRouter()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={132}
      height={21}
      fill="none"
      onClick={() => router.push(`/${locale}/${category}`)}
      className="col-start-2 col-end-3 justify-self-center self-center cursor-pointer">
      <path
        fill={color}
        d="M3.94 11.987v8.623c0 .096.041.143.13.143h3.308c.076 0 .114-.047.114-.143l-.015-8.623H3.94ZM11.273.361H.127a.1.1 0 0 0-.114.114L0 3.755a.126.126 0 0 0 .144.14h3.813v4.55h3.52v-4.55h3.85c.077 0 .115-.046.115-.14V.475c-.003-.076-.065-.114-.17-.114ZM23.442.361h-3.264a.1.1 0 0 0-.115.114v7.972h-4.4l.03-7.972c0-.076-.05-.114-.144-.114h-3.264c-.094 0-.141.038-.141.114l-.03 20.135c0 .096.039.143.115.143h3.317c.077 0 .115-.047.115-.143v-8.614h4.4v8.614a.127.127 0 0 0 .085.138.125.125 0 0 0 .058.005h3.294a.126.126 0 0 0 .144-.143L23.582.475c.004-.076-.043-.114-.14-.114ZM36.151 9.578c.318-.453.575-.945.766-1.465a5.47 5.47 0 0 0 .328-1.946 5.539 5.539 0 0 0-.795-2.948 5.937 5.937 0 0 0-2.126-2.075A5.717 5.717 0 0 0 31.39.37h-5.916a.102.102 0 0 0-.118.114l-.055 20.134c0 .097.038.144.114.144h3.33c.075 0 .114-.047.114-.144l.029-8.613h1.933a2.444 2.444 0 0 1 1.833.774 2.55 2.55 0 0 1 .745 1.831v6.067c0 .059.038.085.114.085h3.323a.126.126 0 0 0 .141-.144l-.026-6.008a5.97 5.97 0 0 0-1.59-4.135c.3-.265.564-.566.79-.897Zm-3.138-1.776a2.276 2.276 0 0 1-1.61.674h-2.52V3.857h2.52a2.245 2.245 0 0 1 1.633.68 2.246 2.246 0 0 1-.023 3.254v.011ZM42.14.361h-3.293a.1.1 0 0 0-.115.114l-.03 20.135a.125.125 0 0 0 .086.138.125.125 0 0 0 .059.005h3.323c.076 0 .114-.047.114-.143L42.254.475a.1.1 0 0 0-.114-.114ZM53.723 8.447H47.71V3.896h6.013a.1.1 0 0 0 .114-.115V.475c0-.076-.046-.114-.14-.114H44.29a.1.1 0 0 0-.114.114L44.12 20.61a.125.125 0 0 0 .086.138.126.126 0 0 0 .058.005h3.294a.126.126 0 0 0 .144-.143v-8.585h6.012c.097 0 .144-.038.144-.114l-.03-3.32c.01-.097-.029-.144-.105-.144ZM58.563 11.996v8.614c0 .096.04.143.129.143H62c.077 0 .115-.047.115-.143v-8.614h-3.552ZM80.696 12.01v8.553c0 .096.044.143.129.143h3.308c.076 0 .115-.047.115-.143l-.015-8.558-3.537.006Z"
      />
      <path
        fill={color}
        d="M88.028.32H76.883a.1.1 0 0 0-.115.114l-.03 3.248a5.596 5.596 0 0 0-.39-.8 6.054 6.054 0 0 0-2.085-2.09 5.503 5.503 0 0 0-2.862-.77 5.441 5.441 0 0 0-2.816.764 6.02 6.02 0 0 0-2.097 2.052 5.57 5.57 0 0 0-.443.911V.475c0-.076-.053-.114-.158-.114H54.74a.1.1 0 0 0-.114.114l-.03 3.28a.126.126 0 0 0 .144.14h3.813v4.567h3.52V3.896h3.862a.109.109 0 0 0 .074-.024 5.782 5.782 0 0 0-.32 1.929 6.562 6.562 0 0 0 .78 3.2 6.29 6.29 0 0 0 2.385 2.368l.918.507c.314.176.64.355.974.536.334.182.621.343.865.481.243.138.443.255.587.349.936.535 1.404 1.16 1.401 1.875a2.36 2.36 0 0 1-.642 1.639 2.07 2.07 0 0 1-3.109.014 2.344 2.344 0 0 1-.645-1.653v-1.345c0-.105-.038-.158-.114-.158h-3.286c-.093 0-.14.053-.14.158v1.345c-.01 1.03.26 2.042.78 2.931a6.02 6.02 0 0 0 2.082 2.14 5.42 5.42 0 0 0 2.88.803 5.559 5.559 0 0 0 2.893-.774 5.784 5.784 0 0 0 2.862-5.108 4.868 4.868 0 0 0-.85-2.931 7.003 7.003 0 0 0-2.315-2.005l-.501-.264c-.276-.149-.587-.313-.924-.5L71.65 8.9c-.279-.152-.455-.249-.53-.293a3.88 3.88 0 0 1-1.497-1.23 2.928 2.928 0 0 1-.41-1.604 2.302 2.302 0 0 1 .645-1.63 2.053 2.053 0 0 1 1.549-.688 2.093 2.093 0 0 1 1.53.645 2.268 2.268 0 0 1 .646 1.673l.026 2.406a.102.102 0 0 0 .03.087.103.103 0 0 0 .088.028h3.293a.1.1 0 0 0 .115-.115V5.774a5.783 5.783 0 0 0-.335-1.97.156.156 0 0 0 .088.024h3.813v4.599h3.52V3.828h3.851c.077 0 .115-.047.115-.143V.435c0-.077-.053-.115-.159-.115ZM99.884.32H96.59a.1.1 0 0 0-.114.114v14.654a2.402 2.402 0 0 1-.631 1.682 2.036 2.036 0 0 1-1.575.695 1.99 1.99 0 0 1-1.531-.695 2.417 2.417 0 0 1-.63-1.682V.434a.1.1 0 0 0-.029-.086.1.1 0 0 0-.086-.028H88.7a.1.1 0 0 0-.114.114l-.06 14.654a5.81 5.81 0 0 0 .781 2.954 5.966 5.966 0 0 0 2.1 2.154c.86.531 1.852.81 2.863.803a5.517 5.517 0 0 0 2.933-.794 6.019 6.019 0 0 0 2.091-2.14 5.914 5.914 0 0 0 .775-2.977L100.01.434a.107.107 0 0 0-.003-.05.1.1 0 0 0-.123-.064ZM110.238 1.035a5.385 5.385 0 0 0-2.951-.744l-5.485.03a.096.096 0 0 0-.086.028.094.094 0 0 0-.028.085l-.059 20.135a.128.128 0 0 0 .035.108.13.13 0 0 0 .109.035l5.256-.03a6.117 6.117 0 0 0 3.106-.849 6.287 6.287 0 0 0 2.203-2.201 6.016 6.016 0 0 0 .818-3.089V6.117a5.715 5.715 0 0 0-.795-2.957 6.004 6.004 0 0 0-2.123-2.125Zm-.631 13.482a2.516 2.516 0 0 1-.745 1.817 2.485 2.485 0 0 1-1.833.759h-1.819l.03-13.282 2.053-.027a2.116 2.116 0 0 1 1.63.666 2.228 2.228 0 0 1 .69 1.623l-.006 8.444ZM118.169.32h-3.294a.101.101 0 0 0-.087.028.102.102 0 0 0-.028.086l-.029 20.135a.128.128 0 0 0 .035.108.13.13 0 0 0 .109.035h3.329c.076 0 .114-.047.114-.143L118.289.434a.1.1 0 0 0-.03-.089.099.099 0 0 0-.09-.025ZM123.392 5.83a2.264 2.264 0 0 1 .646-1.659 2.076 2.076 0 0 1 1.545-.66 2.028 2.028 0 0 1 1.561.672c.411.448.632 1.039.616 1.647v2.638h3.552V5.83a5.684 5.684 0 0 0-.781-2.93 5.986 5.986 0 0 0-2.053-2.114 5.369 5.369 0 0 0-2.88-.785 5.433 5.433 0 0 0-2.863.794 5.915 5.915 0 0 0-2.091 2.11 5.566 5.566 0 0 0-.789 2.93V8.43h3.561l-.024-2.6ZM131.332 12.008h-3.552v3.11a2.34 2.34 0 0 1-.66 1.623 2.03 2.03 0 0 1-1.539.724 2.041 2.041 0 0 1-1.552-.695 2.34 2.34 0 0 1-.645-1.653v-3.12h-3.561v3.12a5.66 5.66 0 0 0 .795 2.931 6.156 6.156 0 0 0 2.1 2.14 5.573 5.573 0 0 0 5.769 0 6.054 6.054 0 0 0 2.091-2.146c.517-.89.785-1.902.775-2.93l-.021-3.104Z"
      />
    </svg>
  );
};

export default Logo;
