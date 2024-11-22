const PageTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="pb-1 text-3xl text-stone-700 font-semibold border-b">
      {text}
    </h1>
  );
};

export default PageTitle;
