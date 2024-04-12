import ChatCard from "./components/chat/ChatCard";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(156.72deg, #E6EEFF 28.87%, rgba(230, 238, 255, 0) 103.1%)",
        }}
        className="w-screen h-screen flex justify-center items-center"
      >
        <ChatCard />
      </div>
    </>
  );
}

export default App;
