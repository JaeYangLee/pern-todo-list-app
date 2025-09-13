import React from "react";

function ToDoFooter() {
  return (
    <>
      <footer className="flex items-center justify-center w-full px-4 py-2 font-mono bg-black md:justify-between">
        <section>
          <p className="text-[8px] text-white lg:text-base">
            © 2025 Jian Lee Ramos. All rights reserved.
          </p>
        </section>
        <section className="hidden">
          <p className="text-xs text-white">Built with PERN</p>
        </section>
      </footer>
    </>
  );
}

export default ToDoFooter;
