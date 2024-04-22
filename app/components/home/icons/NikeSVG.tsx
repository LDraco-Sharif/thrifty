type NikeSVGProps = {
  className: string
  textColor: string
}

const NikeSVG = ({ className, textColor }: NikeSVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1920 1080"
    width={'100%'}
    height={'100%'}
    preserveAspectRatio='xMidYMid meet'
    className={className}
  >
    <path
      d="M591.4 265.4c-76 86.9-181.3 184.1-206.6 305.4C345 762.1 577.7 756.9 690.6 710.3c332.3-137.4 661.1-283.4 991.6-425.1C1360.8 370.8 1040.6 460.9 718 542c-230.7 58-185.8-147.9-126.6-276.6z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: textColor,
      }}
    />
    <path
      d="M591.7 265.1c-.2-.2-.5-.2-.7 0l-4.8 5.4c-1.2 1.4-2.4 2.7-3.7 4.1-4.5 5.1-9.1 10.1-13.6 15.2-13.8 15.2-27.6 30.3-41.3 45.5-32.2 35.8-63.7 72.7-90 113.2-20.5 31.5-37.7 65.4-48.1 101.6-1.8 6.2-3.4 12.4-4.7 18.8-6.9 32.2-8.1 67.3 6.7 97.5 2.3 4.8 5 9.4 8.1 13.8 4.9 6.9 10.6 13.2 16.9 18.8 9.5 8.3 20.4 15 31.9 20.2 17.6 8.1 36.6 12.8 55.8 15.6 28.3 4.1 57.1 3.8 85.4.7 28-3.1 55.8-8.9 82.5-17.9 11.2-3.8 22-8.4 32.8-12.9 12.6-5.2 25.1-10.4 37.6-15.6 43.2-18 86.4-36.2 129.5-54.4 162.6-68.8 324.5-139.1 486.5-209.4 81.6-35.4 163.2-70.9 244.9-106.1l59.4-25.5c4.7-2 9.4-4.1 14.2-6.1 1.3-.6 2.6-1.1 3.9-1.7.2-.1 1.1-.4 1.1-.5 0-.2-.2-.2-.3-.2 0 0-.1-.1 0-.1h-.1c-.3 0-.6.1-.8.2-.8.2-1.7.4-2.5.7l-12.6 3.3c-10.9 2.9-21.8 5.8-32.6 8.8-31.8 8.5-63.6 17.1-95.3 25.6-95.3 25.7-190.6 51.7-285.9 77.5-167.6 45.4-335.3 90.5-503.7 133.1-10.1 2.6-20.1 5.1-30.2 7.6-8.5 2.1-17.2 4.1-25.8 5.6-6.8 1.2-13.6 2.2-20.4 3-5.3.6-10.5 1-15.8 1.2 16.1-.7 32.2-3.1 48-6.5 7.2-1.6 14.4-3.4 21.6-5.2 7.6-1.9 15.1-3.8 22.7-5.7 42-10.6 83.9-21.5 125.8-32.3 143.4-37.1 286.3-75.8 429.3-114.6 84-22.8 168-45.6 252.1-68.2 28-7.6 56-15.1 84.1-22.6 9.6-2.6 19.2-5.2 28.9-7.7l8.8-2.3c.8-.2 1.6-.4 2.5-.7-.1 0-.1 0-.2.1-1.3.6-2.6 1.1-3.9 1.7-4.3 1.8-8.6 3.7-12.9 5.6l-51.6 22.2c-68.4 29.4-136.7 59-205 88.7-170.1 73.7-340.2 147.8-510.9 220-50 21.2-100.1 42.2-150.2 63.1-13.4 5.6-26.8 11.2-40.2 16.7-9.6 4-19.2 8.1-29 11.5-19.5 6.8-39.6 11.9-59.9 15.4-13.3 2.3-26.7 4-40.2 5-10.5.8-21 1.1-31.5 1-8.4-.1-16.9-.5-25.2-1.2-5.6-.5-11.2-1.2-16.8-2-35.3-5.4-72.1-18.4-95.9-46.3-3.8-4.4-7.2-9.2-10.2-14.3-4.3-7.3-7.7-15.2-10.1-23.4-3.9-13-5.4-26.6-5.2-40.1.3-22 4.8-43.8 11.3-64.8 10.3-33.4 26.4-64.8 45.3-94.2 28.9-45 64.3-85.3 100.2-124.8 12-13.2 24-26.3 36-39.5 3.5-3.9 2.1-2.4 17.3-19.5.8-.9 0 0 .9-1.1 0-.2 0-.4-.2-.6.1 0 .1 0 0 0zM656 551.8c-14.7.7-30.1-.2-44.6-3.8 11.4 2.9 23.3 4.1 35.1 4.1 3.2 0 6.4-.2 9.5-.3zm-65.9-283.3c-.6 1.4-1.2 2.7-1.8 4.1-.9 1.9-1.7 3.8-2.5 5.8.4-1.1 1.6-4 4.3-9.9zm-4.4 9.8c-.2.4-1.3 2.8-1.6 3.6-.2.4-.3.8-.4 1.1.7-1.6 1.3-3.1 2-4.7zm-2 4.7-.9 2.1c-3.6 8.4-6.9 16.9-10.1 25.5 3.4-9.3 7.1-18.5 11-27.6zm-11 27.6c-.2.5-.5 1.1-.7 1.6-1.1 2.9-2.1 5.8-3.1 8.8 1.3-3.5 2.5-7 3.8-10.4zm-3.8 10.3c-.8 2.3-1.7 4.6-2.5 6.9-.2.5-.3 1.1-.5 1.6 1-2.8 2-5.6 3-8.5zm-3 8.6c-.7 1.9-1.2 3.9-1.9 5.9.7-2 1.3-4 1.9-5.9zm-1.8 5.8c-1.3 4.1-2.7 8.2-3.9 12.4 1.2-4.1 2.5-8.2 3.9-12.4zm-4 12.5c-.6 2-1.1 4-1.7 5.9.6-2 1.2-4 1.7-5.9zm-1.6 5.9c-.9 3.1-1.8 6.3-2.7 9.4-.2 1-.5 1.9-.7 2.9 1-4.1 2.2-8.2 3.4-12.3zm-3.4 12.3c-.5 1.8-.9 3.6-1.3 5.4.4-1.8.8-3.6 1.3-5.4zm-4.5 19.2c-.1.6-.3 1.2-.4 1.8-.1.6-.2 1.1-.3 1.7.3-1.1.5-2.3.7-3.5zm-4.9 29.3c-.2 1.9-.4 3.9-.6 5.8.2-1.9.4-3.9.6-5.8zm-.6 5.8c-.2 2.2-.5 4.4-.7 6.6-.1 1.5-.2 3-.2 4.5.2-3.7.6-7.4.9-11.1zm-1 12.1c-.3 4.7-.4 9.4-.4 14.2 0-4.7.2-9.4.4-14.2zm-.3 14.8c.1 5.8.4 11.7 1 17.5-.6-5.9-1-11.7-1-17.5zm1.3 19.6c.3 2.3.5 4.6.9 6.9.1.7.3 1.3.4 1.9-.5-2.9-1-5.8-1.3-8.8zm1.3 8.9c.7 3.6 1.5 7.2 2.5 10.7-1-3.6-1.8-7.1-2.5-10.7zm2.5 10.6c.3 1.3.7 2.6 1.1 3.9-.4-1.3-.7-2.6-1.1-3.9zm3.9 11.8c.3.9.7 1.7 1.1 2.6-.4-.9-.7-1.7-1.1-2.6zm1.1 2.6c.9 2.1 1.9 4.1 3 6.2-1.1-2.1-2.1-4.2-3-6.2zm3 6.1c.2.4.4.7.6 1.1-.3-.3-.4-.7-.6-1.1zm.5 1.1zm4.6 7.4c2.9 4.2 6.2 8.2 10 11.8 2.7 2.6 5.7 4.9 8.8 7.1-3-2.2-6-4.5-8.7-7.2-3.9-3.5-7.2-7.4-10.1-11.7zm18.9 19.1c1.2.8 2.3 1.7 3.5 2.5 1.3.8 2.7 1.4 4.1 2.2-2.5-1.5-5.1-2.9-7.6-4.7zm7.7 4.7zm13.6 6.1c1.4.5 2.7 1.1 4.1 1.5 1.5.5 3.1.8 4.7 1.2-2.9-.7-5.9-1.7-8.8-2.7z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)
export default NikeSVG