type ProfileSettings = {
  children: React.ReactNode
  showPopup: (popup: boolean) => void
}

export default function ProfileSettings({ children, showPopup }: ProfileSettings) {

  return (
    <div className="bg-faded relative w-[50%] rounded-full px-12 py-5 text-black">
      <p className="text-[0.875rem] font-bold">{children}</p>
      <span className="text-[0.75rem] font-medium">jane@doe.com</span>

      <span
        className="absolute bottom-8 right-10 cursor-pointer text-[0.75rem] font-semibold"
        onClick={() => showPopup(true)}
      >
        EDIT
      </span>
    </div>
  )
}
