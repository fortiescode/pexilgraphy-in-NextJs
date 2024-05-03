interface pageTitle {
  title: string;
}
export default function PageHeading(props: pageTitle) {
  return (
    <div>
      <h1 className="font-semibold text-orange-700/60 text-3xl">{props.title}</h1>
    </div>
  );
}
