import React from "react";

// [&>:not(:last-child)]:flex-grow -> for all but last to grow
function ChatArea() {
  function handleSend(e) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col w-4/5">
      <header className="flex justify-between">
        <span>User Name</span>
        <span>Video call button</span>
      </header>
      <div className="flex-grow">chat here</div>
      <form className="flex gap-2" onSubmit={handleSend}>
        <textarea
          className="border-2 flex-grow resize-none rounded-md"
          maxLength={1000}
          rows={2}
        />
        <input
          className="border-2 p-2 rounded-md bg-slate-500 text-white"
          type="submit"
        />
      </form>
    </div>
  );
}

export default ChatArea;
