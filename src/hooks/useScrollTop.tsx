export const useScrollTop = () => {
  return () => {
    const body = document.querySelector("#root") as HTMLBodyElement;
    body &&
      body.scrollIntoView({
        behavior: "smooth",
      });
  };
};
