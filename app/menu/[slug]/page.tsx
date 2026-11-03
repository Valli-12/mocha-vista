import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import ProductDetailClient from "./ProductDetailClient";
import ProductCard from "@/components/ui/ProductCard";
import DietBadge from "@/components/ui/DietBadge";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = menuItems.find((i) => i.slug === slug);
  if (!item) return { title: "Item Not Found" };
  return {
    title: item.name,
    description: item.description,
    openGraph: {
      title: `${item.name} | Mocha Vista Menu`,
      description: item.description,
      images: [{ url: item.image, alt: item.name }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const item = menuItems.find((i) => i.slug === slug);

  if (!item) notFound();

  const related = menuItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 4);

  return (
    <main className="min-h-[80vh] bg-[#f5ebdd] pb-12">
      {/* Breadcrumbs */}
      <div className="border-b border-[#201b19]/10 bg-[#f5ebdd]/60">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap text-xs text-[#9b8272] font-sans">
              <li>
                <Link href="/" className="hover:text-[#201b19] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#201b19] transition-colors">
                  Menu
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link
                  href={`/menu?category=${encodeURIComponent(item.category)}`}
                  className="hover:text-[#201b19] transition-colors"
                >
                  {item.category}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li aria-current="page" className="font-semibold text-[#201b19] truncate max-w-[200px] sm:max-w-none">
                {item.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Detail Layout */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Image */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border border-[#201b19]/10 bg-white">
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {item.isVegetarian !== undefined && (
                <div className="absolute top-4 left-4 z-10">
                  <DietBadge isVegetarian={item.isVegetarian} showText />
                </div>
              )}
            </div>
          </div>

          {/* Interactive Customization Details */}
          <div className="lg:col-span-6 bg-white/60 backdrop-blur-xs p-6 sm:p-10 rounded-3xl border border-[#201b19]/10 shadow-sm">
            <ProductDetailClient item={item} />
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-12 pt-10 border-t border-[#201b19]/10">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#b98254] block mb-1">
                  More From {item.category}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#201b19]">
                  You May Also Like
                </h2>
              </div>
              <Link
                href={`/menu?category=${encodeURIComponent(item.category)}`}
                className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-wider text-[#b98254] hover:text-[#8f5e35] transition-colors"
              >
                View Category →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((rel) => (
                <ProductCard key={rel.id} item={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
