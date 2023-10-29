type ProductInputProps = {
  name: string
  placeholder: string
  className: string
  icon: string
}

export default function ProductInput({ name, placeholder, className, icon }: ProductInputProps) {
  const upperCaseName = name.toUpperCase()

  return (
    <fieldset className="relative flex w-[50%] items-center gap-4">
      <legend hidden>{upperCaseName}</legend>
      {name === 'discount' ? <span className="text-grey absolute left-[-2rem]">Optional</span> : null}
      <label htmlFor="price" className="w-32 text-right">{upperCaseName}</label>
      <input
        placeholder={placeholder}
        type="number"
        name={name}
        id={name}
        className={`bg-bkg p-2 ${className}`}
      />
      <span className="absolute right-2">{icon}</span>
    </fieldset>
  )
}
