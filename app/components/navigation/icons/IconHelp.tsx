"use client"
import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

type IconHelpProps = {
  invert?: boolean
  isHovered?: boolean
}

function IconHelp({ invert, isHovered }: IconHelpProps) {
  const color = useThemeStore((state) => getSvgColor(state.theme, invert ? invert : isHovered))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M7.965 12.553c.266 0 .49-.092.674-.275a.913.913 0 00.274-.673.918.918 0 00-.274-.674.912.912 0 00-.674-.274.914.914 0 00-.673.275.919.919 0 00-.275.673c0 .265.092.49.275.673a.912.912 0 00.673.275zm-.683-2.92h1.404c0-.417.047-.746.142-.986.095-.24.364-.57.806-.986.328-.329.588-.642.777-.94.19-.297.285-.654.285-1.07 0-.708-.26-1.252-.778-1.631-.518-.38-1.131-.569-1.84-.569-.72 0-1.304.19-1.753.569-.448.38-.761.834-.939 1.365l1.252.493c.063-.227.205-.474.427-.74.221-.265.56-.398 1.014-.398.404 0 .708.111.91.333.202.221.303.464.303.73 0 .252-.075.49-.227.71a3.03 3.03 0 01-.569.617c-.556.493-.898.866-1.024 1.119-.126.252-.19.714-.19 1.384zm.721 5.954a7.391 7.391 0 01-2.958-.597 7.65 7.65 0 01-2.408-1.622 7.655 7.655 0 01-1.621-2.408 7.399 7.399 0 01-.598-2.958c0-1.05.2-2.035.598-2.958a7.672 7.672 0 011.62-2.408 7.655 7.655 0 012.409-1.621A7.4 7.4 0 018.003.417c1.05 0 2.035.2 2.958.598a7.672 7.672 0 012.408 1.62 7.665 7.665 0 011.622 2.409c.399.923.598 1.909.597 2.958 0 1.05-.2 2.035-.598 2.958a7.673 7.673 0 01-1.62 2.408 7.667 7.667 0 01-2.409 1.622 7.374 7.374 0 01-2.958.597z"
      ></path>
    </svg>
  );
}

export default IconHelp;

