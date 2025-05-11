import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Gallery() {
  // Dynamically load all images from the "public/images" folder, excluding "partners"
  const images = fs
    .readdirSync(path.join(process.cwd(), "public/images"))
    .flatMap((folder) => {
      const folderPath = path.join(process.cwd(), "public/images", folder);
      if (fs.lstatSync(folderPath).isDirectory() && folder !== "partners") {
        return fs
          .readdirSync(folderPath)
          .map((file) => `/images/${folder}/${file}`);
      }
      return [];
    });

  return (
    <main className="min-h-screen p-8 bg-background">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
