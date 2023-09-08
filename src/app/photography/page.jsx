import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import LiteratureItem from "@/components/Literature/LiteratureItem";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { GraphQLClient, gql } from "graphql-request";
import MarqueeButton from "@/components/MarqueeButton";
import { hygraphClient } from "@/hygraph.config";
import PhotoItem from "@/components/Photography/PhotoItem";

const getData = async () => {
  const query = gql`
    query Photos {
      photos(orderBy: date_DESC, where: { toShow: true }) {
        caption
        date
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

  const response = await hygraphClient.request(query);

  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response;
};

const PhotographyPage = async () => {
  const data = await getData();

  return (
    <IndexContent>
      <SimplePageTitle color="text-emerald-500">
        casual photography
      </SimplePageTitle>
      {data ? (
        <>
          {data.photos.map((x, index) => (
            <PhotoItem
              width={x.photo.width}
              height={x.photo.height}
              key={x.id}
              caption={x.caption}
              src={x.photo.url}
              priority={x.priority}
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
