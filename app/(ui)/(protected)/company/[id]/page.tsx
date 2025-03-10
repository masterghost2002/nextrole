const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const respnse = await fetch(`${DOMAIN}/api/company?id=${id}`);
  const data = await respnse.json();
  return (
    <div className="text-neutral-900">My Post: {JSON.stringify(data)}</div>
  );
}
