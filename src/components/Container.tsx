function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full py-2 scroll-smooth">
      <div className="mx-auto w-full">{children}</div>
    </div>
  );
}

export default Container;
