import { GraduationCap, BriefcaseBusiness } from 'lucide-react';
export default function Timeline({ type, items }) {
 const Icon = type === 'Education' ? GraduationCap : BriefcaseBusiness;
 return <div className="timeline"><h3><Icon size={20}/>{type}</h3>{items.length ? items.map((item, i) => <article className="timeline-entry" key={i}><span>{item.period}</span><h4>{item.title}</h4><p>{item.organization}</p><p>{item.description}</p>{item.url && <a href={item.url} target="_blank" rel="noreferrer">Website institusi ↗</a>}</article>) : <div className="timeline-entry"><span>THE JOURNEY</span><h4>{type === 'Education' ? 'Learning, every day.' : 'Room for what’s next.'}</h4><p>{type === 'Education' ? 'Education details will be shared here.' : 'Experience details will be shared here.'}</p></div>}</div>;
}
