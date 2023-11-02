function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-full h-full px-[calc(9rem)] py-9 scroll-smooth">
      <div className="mx-auto w-full">{children}</div>
    </div>
  );
}

export default Container;
