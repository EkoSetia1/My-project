function CardAbout(props) {
  const { title, paragraph } = props;
  return (
    <div className="flex flex-col items-center justify-center text-slate-100">
      <p className="text-3xl font-bold  ">{title} </p>
      <p className="font-thin text-sm ">{paragraph}</p>
    </div>
  );
}

export default CardAbout;
