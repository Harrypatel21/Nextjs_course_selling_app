import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 text-gray-800">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h1 className="text-2xl font-semibold text-center mb-4">Course Selling App</h1>
        <p className="text-center">Welcome to the Course Selling App!</p>
        <Image
          src="/course_image.jpg"
          alt="Course Image"
          width={300}
          height={200}
          className="mt-4 rounded-lg"
        />
      </div>
    </div>
  );
}
