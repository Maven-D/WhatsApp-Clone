import ChatArea from "./components/ChatArea";
import UserListSideNav from "./components/UserListSideNav";

function App() {
  return (
    <main className="flex gap-4 h-64 p-4">
      <UserListSideNav />
      <ChatArea />
    </main>
  );
}

export default App;
