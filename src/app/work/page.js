import Work from '@/components/Work/page';
import clientPromise from '@/lib/mongodb';
// import LogoDesignGallery from '../displayage/page';

export default async function WorkPageApi({ collectionName }) {
    const fetchData = async () => {
        try {
            const client = await clientPromise;
            const db = client.db("WorkPage");
            const dataCollection = db.collection("Categories");
            const data = await dataCollection.find({}).toArray();
            return JSON.parse(JSON.stringify(data));
        } catch (error) {
            console.error("Failed to fetch data:", error);
            return [];
        }
    };

    const data = await fetchData();

    return(
      <>
      <Work workCategories= {data}/>
      </>
    )
}
