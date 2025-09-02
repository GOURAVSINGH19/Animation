import Home from "@/components/page";
export default function page() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-full h-full bg-black flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white">Scroll down for more 👇🏻</h1>
      </div>
      <Home />
    </div>
  );
}
