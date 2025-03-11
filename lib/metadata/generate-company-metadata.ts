import { Metadata } from 'next';
import { getCompanyById } from '@/actions';
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export async function generateCompanyMetadata(id: string): Promise<Metadata> {
  const company = await getCompanyById(id);

  if (!company) return {};

  const name = company.name || 'Untitled Company';
  const description =
    company.description || `${name} - Discover more about us.`;
  const logoUrl = company.logo_url || '/default-logo.png';
  const canonicalUrl = `${DOMAIN}/companies/${company.id}`;
  const logoImage = `${DOMAIN}/api/image?url=${encodeURIComponent(logoUrl)}`;
  const website = company.website || DOMAIN;
  const numUsers = company.num_users_on_app
    ? `${company.num_users_on_app} users`
    : 'Join our platform!';
  const verified = company.verification_status
    ? `Verified: ${company.verification_status}`
    : 'Not Verified';

  return {
    applicationName: 'Next Role',
    authors: [{ name, url: website }],
    generator: 'Nex Role',
    keywords: [name, 'company', 'startup', verified, numUsers],
    referrer: 'origin',
    // themeColor: "#000000",
    // colorScheme: "dark",
    creator: 'Next Role',
    publisher: `${name} - ${verified}`,
    title: name,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: name,
      description,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: logoImage,
          alt: `${name} Logo`
        }
      ]
    },
    robots: {
      index: true,
      follow: true
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-icon.png'
    },
    manifest: '/manifest.json',
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: [logoImage]
    }
  };
}
