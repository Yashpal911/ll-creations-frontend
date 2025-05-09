import HomePageComponent from '@/components/mainPage/page';
import clientPromise from '@/lib/mongodb';
import Title from './testpage/page';


const fetchData = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("llcreations");
    const collection = db.collection("HeroSection");
    const data = await collection.find({}).toArray();
    return JSON.parse(JSON.stringify(data)); // Convert MongoDB ObjectId
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};
export default async function Home() {



  const HomeData = await fetchData();
  return (

    <>
      <div>
        {/* <Title HomeData={HomeData} /> */}
        <HomePageComponent HomeData={HomeData} />
      </div>



    </>
  );
}