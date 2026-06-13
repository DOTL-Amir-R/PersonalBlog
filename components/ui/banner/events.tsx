import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const EventBanner = (
	{banners}:
	{banners:
		{alt:string , href:string, id:string , image:StaticImageData }[]
	}
	) => {
  return (
    <section className="flex justify-center">
      {banners.map((banner) => (
        <Link
          className="pt-3 px-1"
          href={banner.href}
          key={banner.id}
          >
          <Image
            alt={banner.alt}
            src={banner.image}
            />
        </Link>
        ))}
    </section>
  );
};
