import { AdminFooter, AdminNav } from "@/app/components/admin";
import { ProductsContent } from "@/app/components/admin/indexServer";
import { useSupabaseServer } from "@/app/components/hooks/serverIndex";
import serverQueryTable from "@/utils/serverQueryTable";

type PageParams = {
  params: { [key: string]: string | string[] | undefined }
}

export default async function Page({ params }: PageParams) {
  const { lang } = params
  const products = await serverQueryTable('products')

  return (
    <section className="bg-bkg min-h-[70vh]">
      <div id="popup-root"></div>
      <section className="bg-bkg text-content mx-auto flex min-h-[70vh] max-w-[1700px] flex-col items-center">

        <AdminNav params={params} />

        <main className="w-full">
          <ProductsContent products={products} />
        </main>

      </section>

      <AdminFooter lang={lang as string} />
    </section>
  )
}
