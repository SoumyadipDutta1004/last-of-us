export default function Title({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h1 className={`${className} uppercase font-TheLastOfUs`}>
      {children.split("<br/>")[0]}
      <br />
      {children.split("<br/>")[1]}
    </h1>
  );
}
