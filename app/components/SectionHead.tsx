export default function SectionHead({
  id,
  index,
  title,
  lead,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="section-head" data-reveal>
      <p className="eyebrow">
        <span aria-hidden="true">{index} / </span>
        {id}
      </p>
      <h2 id={`${id}-title`}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
