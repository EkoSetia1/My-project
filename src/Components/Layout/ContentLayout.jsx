function ContentLayout(props) {
  const { children = "Content", title, style, color } = props;
  return (
    <div
      className={`bg-slate-100 flex flex-col items-center px-16 py-8 min-h-screen ${style}`}
    >
      <h1
        className={`text-3xl uppercase font-extrabold tracking-widest ${color}`}
      >
        {title}
      </h1>
      <main className="h-[80vh] pt-8 ">{children}</main>
    </div>
  );
}

export default ContentLayout;
