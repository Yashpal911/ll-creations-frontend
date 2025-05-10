import clientPromise from "../../lib/mongodb";


export default async function LogoDesignGallery({HomeData}) {


  // const fetchData = async () => {
  //   try {
  //     const client = await clientPromise;
  //     const db = client.db("llcreations");
  //     const dataCollection = db.collection(collectionName);
  //     const data = await dataCollection.find({}).toArray();
  //     return JSON.parse(JSON.stringify(data));
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //     return [];
  //   }
  // };

  const data = HomeData; // Fetch data on the server

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-3xl"></div>

          <div className="absolute right-0 top-1/4 w-full h-64 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%238B5CF6' fill-opacity='1' d='M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,90.7C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
              transform: 'scaleY(0.5)',
            }}>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-100/20 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Logo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Design</span> Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Distinctive brand identities crafted with precision and creativity, each logo tells a unique story and captures the essence of the brand it represents.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.length === 0 ? (
            <p>No data found.</p>
          ) : (
            data.map((item) => (


              <div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    <img
                      src={item.image} alt={item.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-white font-medium text-lg">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
