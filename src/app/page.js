import HomePageComponent from "@/components/mainPage/page";
import clientPromise from "@/lib/mongodb";

export default async function Home() {


  const fetchData = async () => {
    try {
      const client = await clientPromise;
      const db = client.db("Home");
      const dataCollection = db.collection("HeroSection");
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
      <HomePageComponent  HomeData={HomeData} />
    </div>
  );
}
