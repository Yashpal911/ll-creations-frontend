import clientPromise from '@/lib/mongodb';
// import LogoDesignGallery from '../displayage/page';
import Display from '@/components/Display/page';

export default async function DisplayApi({ collectionName }) {
    const fetchData = async () => {
        try {
            const client = await clientPromise;
            const db = client.db("DisplayPage");
            const dataCollection = db.collection(collectionName);
            const data = await dataCollection.find({}).toArray();
            return JSON.parse(JSON.stringify(data));
        } catch (error) {
            console.error("Failed to fetch data:", error);
            return [];
        }
    };

    const HomeData = await fetchData();

    return (
        <div>
                  {/* <h1>working this is the category: {collectionName} </h1> */}

            <Display HomeData={HomeData} name={collectionName}/>
        </div>
    );
}
