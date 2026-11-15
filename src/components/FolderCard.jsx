import { ArrowUpRight, Code2, Award, BadgeCheck } from 'lucide-react';
const icons = { Projects: Code2, Certificates: BadgeCheck, Awards: Award };
export default function FolderCard({ title, count, onClick, index }) {
 const Icon = icons[title];
 return <button className="folder-card" onClick={onClick} style={{ '--delay': `${index * -1.3}s` }} aria-label={`Open ${title}, ${count} items`}><div className="folder-scene"><div className="folder-back"/><div className="folder-paper paper-one"><Icon size={28}/><span>{title === 'Projects' ? 'SELECTED WORK' : 'THE COLLECTION'}</span></div><div className="folder-paper paper-two"/><div className="folder-front"><div className="folder-front-title"><strong>{count}</strong><span>{title}</span></div><span className="folder-action"><ArrowUpRight size={16}/></span></div></div></button>;
}
