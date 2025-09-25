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
      <div className="fixed top-0 flex items-center justify-center w-screen h-screen font-mono bg-black/70">
        <div className="px-3 py-2 xl:px-5 xl:py-4 flex flex-col justify-center w-50 md:w-66 lg:w-78 xl:w-90 gap-4 lg:gap-8 bg-[#ffedd6] shadow-black/20 shadow-sm">
          <p className="text-sm text-left lg:text-lg xl:text-2xl">
            Are you sure you want to delete this task?
          </p>
          <section className="flex justify-end gap-2 text-sm lg:gap-4 lg:text-lg xl:text-2xl">
            <button
              onClick={onDelete}
              className="px-2 xl:px-4 border-black border-1 bg-[#E97A54] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] hover:bg-[#ba6243]"
            >
              Delete
            </button>
            <button
              onClick={onDeleteValidatorClose}
              className="px-2 xl:px-4 border-black border-1 bg-[#ffedd6] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] hover:bg-[#d7bfa0]"
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
