import { ReactNode } from "react";
// import { StyledHeader } from "./styled";
// import LocalePicker from './LocalePicker';

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header>
      {children} {/* ThemeToggler */}
      <a
        href="/"
        style={{
          background: "red",
          color: "white",
          padding: "1rem",
        }}>
        Home
      </a>
      {/* <LocalePicker /> */}
      {/* {!closeBanner && <Banner bannerConfig={{ bannerMessages, closeBannerElement }} />} */}
    </header>
  );
}
