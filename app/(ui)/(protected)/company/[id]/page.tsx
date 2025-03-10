export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const respnse = await fetch(`http://localhost:3000/api/company?id=${id}`);
  const data = await respnse.json();
  return (
    <div className="text-neutral-900">My Post: {JSON.stringify(data)}</div>
  );
}
