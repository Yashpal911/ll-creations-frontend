import HomePageComponent from '@/components/mainPage/page';
import clientPromise from '@/lib/mongodb';
import LogoDesignGallery from '../logoDisplay/page';

export default async function Testing({ collectionName }) {
    const fetchData = async () => {
        try {
            const client = await clientPromise;
            const db = client.db("llcreations");
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
                        <LogoDesignGallery HomeData={HomeData} />

            {/* <HomePageComponent HomeData={HomeData} /> */}
        </div>
    );
}
