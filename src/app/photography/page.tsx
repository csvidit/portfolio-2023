import Footer from "@/components/Footer/Footer";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { gql } from "graphql-request";
import { Photo, PhotosData } from "@/hygraph.config";
import PhotoItem from "@/components/Photography/PhotoItem";
import { throttledPhotosFetch } from "@/throttle";
import MainContent from "@/components/MainContent";

const getData = async () => {
  const query = gql`
    query Photos {
      photos(orderBy: priority_ASC, where: { toShow: true }) {
        caption
        date
        id
        priority
        photo {
          url
          width
          size
          mimeType
          height
        }
      }
    }
  `;

  const response: PhotosData = await throttledPhotosFetch(query);

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response;
};

const PhotographyPage = async () => {
  const data: PhotosData = await getData();

  return (
    <MainContent>
      <SimplePageTitle color="text-emerald-500">
        casual photography
      </SimplePageTitle>
      {data ? (
        <>
          {data.photos.map((x: Photo) => (
            <PhotoItem
              width={x.photo.width}
              height={x.photo.height}
              key={x.id}
              caption={x.caption}
              src={x.photo.url}
              priority={x.priority}
              date={x.date}
            />
          ))}
        </>
      ) : (
        <PapersLoading />
      )}
      <Footer />
    </MainContent>
  );
};

export default PhotographyPage;
