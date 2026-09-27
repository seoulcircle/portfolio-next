import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import WorkDetail from "../../../../features/studio/components/WorkDetail";
import { works, type Work } from "../../../../features/studio/data/works";

type Params = Promise<{ locale: string; slug: string }>;

const find = (slug: string) => works.find((w) => w.slug === slug);

export function generateStaticParams() {
  return works.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!find(slug)) return {};
  const t = await getTranslations({ locale, namespace: "studio.work.items" });
  return { title: `${t(`${slug}.title`)} — Seoul Circle` };
}

export default async function WorkPage({ params }: { params: Params }) {
  const { slug } = await params;
  if (!find(slug)) notFound();
  return <WorkDetail slug={slug as Work["slug"]} />;
}
