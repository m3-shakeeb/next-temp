export default async function Page({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const slug = (await params).language;



  return <div>{slug}</div>;
}








