const BlogContent = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen min-h-screen w-full h-full flex flex-col space-y-4 lg:grid grid-cols-1 lg:grid-cols-4 lg:space-y-0 lg:gap-4 bg-transparent py-8 px-2 lg:px-20">
      {props.children}
    </div>
  );
};

export default BlogContent;
