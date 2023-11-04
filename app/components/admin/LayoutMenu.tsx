import { LayoutAddNew, LayoutSearchId } from ".";

type LayoutMenuProps = {
  params: { [key: string]: string | string[] | undefined }
}

export default function LayoutMenu({ params }: LayoutMenuProps) {

  return (
    <div className="flex gap-6">
      <LayoutAddNew params={params} />
      <LayoutSearchId />
    </div>
  )
}
