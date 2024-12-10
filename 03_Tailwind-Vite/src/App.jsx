import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-3xl bg-slate-900 text-lime-600 p-4 rounded-2xl">
          Hello Tailwind
        </h1>
        <Card
          username="Rajnandini Patra"
          post="UI/UX"
          about="I am a passionate UI/UX designer dedicated to creating user-centered, intuitive, and visually appealing digital experiences, combining design tools like Figma and Adobe XD with user research and accessibility principles to craft innovative solutions."
        />
        <Card
          post="Web Developer"
          photo="/profile-2.webp"
          username="Subham Mallick"
          about="I am a web developer specializing in building responsive and scalable web applications using modern front-end frameworks like React and back-end technologies like Node.js, with a strong focus on clean code and seamless user experiences."
        />
        <Card
          photo="/profile-4.jpeg"
          username="Deep Paul"
          post="Unreal Artist"
          about="I am a creative Unreal artist skilled in crafting immersive 3D environments and real-time visualizations, leveraging the power of Unreal Engine to deliver stunning, interactive digital content for games, VR, and visual storytelling."
        />
      </div>
    </>
  );
}

export default App;
