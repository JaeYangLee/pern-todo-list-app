import React from "react";

function ToDoDeleteValidator({
  todos,
  isDeleteValidatorOpen,
  onDeleteValidatorClose,
  onDelete,
}) {
  if (!isDeleteValidatorOpen) return null;
  return (
    <>
      <div className="top-0 fixed flex items-center justify-center w-screen h-screen bg-black/40 font-mono">
        <div className="px-3 py-2 flex flex-col justify-center w-50 gap-4 bg-[#ffedd6] shadow-black/20 shadow-sm">
          <p className="text-sm text-left">
            Are you sure you want to delete this task?
          </p>
          <section className="flex justify-end text-sm gap-2">
            <button
              onClick={onDelete}
              className="px-2 border-black border-1 bg-[#E97A54] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] hover:bg-[#ba6243]"
            >
              Delete
            </button>
            <button
              onClick={onDeleteValidatorClose}
              className="px-2 border-black border-1 bg-[#ffedd6] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] hover:bg-[#d7bfa0]"
            >
              Cancel
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default ToDoDeleteValidator;
