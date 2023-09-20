import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { gql } from "graphql-request";
import { hygraphClient } from "@/hygraph.config";
import PhotoItem from "@/components/Photography/PhotoItem";

export type Photo = {
  caption: string;
  date: string;
  id: string;
  priority: number,
  photo: {
    url: string;
    width: number;
    size: number;
    mimeType: string;
    height: number;
  };
  
};

export type PhotosData = {
  photos: Photo[];
};

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

  const response: PhotosData = await hygraphClient.request(query);

  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response;
};

const PhotographyPage = async () => {
  const data: PhotosData = await getData();

  return (
    <IndexContent>
      <SimplePageTitle color="text-indigo-500">
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
    </IndexContent>
  );
};

export default PhotographyPage;
