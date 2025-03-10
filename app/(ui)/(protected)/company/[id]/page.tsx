import { Suspense } from "react";
import { CompanyBanner, CompanyBannerSkeleton } from "./component";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="text-neutral-900  pb-20">
      <Suspense fallback={<CompanyBannerSkeleton />}>
        <CompanyBanner id={id} />
      </Suspense>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore impedit
      eligendi deserunt omnis dignissimos expedita suscipit odio eos in
      doloremque libero aperiam, perferendis, soluta reprehenderit maxime,
      possimus inventore rem temporibus. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Voluptates perspiciatis, deleniti aliquid tempore dolore
      hic fugit, rerum natus alias quidem mollitia? Reiciendis autem quae cum
      vel molestias natus corporis consequuntur. Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Natus accusantium debitis laborum commodi
      ullam id ab inventore quis, odio adipisci cupiditate consequatur soluta
      tenetur dolor autem in vero? Ducimus, suscipit. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sit suscipit quisquam, mollitia ad fuga
      doloremque maxime deleniti exercitationem quibusdam sapiente facilis est
      quidem modi voluptates, delectus eum? Exercitationem, unde deleniti! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptas
      molestias exercitationem, quibusdam assumenda deleniti excepturi, odio
      iste dolores dicta sed ea necessitatibus, facilis velit laborum sint.
      Voluptatem, suscipit earum! Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Perspiciatis rem unde dicta dolorem nesciunt esse
      provident ea ut adipisci, a voluptatum. Quidem vero totam dolor facilis
      cupiditate veritatis pariatur a. Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Deleniti, vel, repudiandae officiis voluptate repellat
      totam neque quis cumque corrupti magni incidunt ex molestias suscipit
      veniam laborum accusamus, fugiat animi unde. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Minima aut iste maiores quas quos harum
      natus vitae, maxime rerum magni sit, cumque totam. Iste alias suscipit,
      exercitationem voluptate ullam quas. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Doloribus animi inventore rem deleniti
      suscipit nemo voluptates ratione ducimus corrupti? Expedita voluptates,
      consectetur ab dicta harum facilis minus delectus mollitia quidem?
    </div>
  );
}
