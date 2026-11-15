import { ArrowUpRight, BookOpen } from 'lucide-react';
import { publications } from '../data/publications';
import { profile } from '../data/profile';
import AnimatedSection from './AnimatedSection';

export default function Publications() {
  if (!publications.length) return null;
  return <AnimatedSection className="publications">
    <h3><BookOpen size={20}/> Research & Publications</h3>
    {publications.map(publication => <article className="publication-card" key={publication.id}>
      <div className="publication-meta"><span>{publication.journal}</span><a href={publication.accreditationUrl} target="_blank" rel="noreferrer" aria-label="Lihat akreditasi JATI di SINTA">{publication.accreditation} <ArrowUpRight size={12}/></a></div>
      <h4>{publication.title}</h4>
      <p className="publication-authors">{publication.authors.map((author, index) => <span key={author}>{index > 0 && ', '}{author === profile.name ? <strong>{author}</strong> : author}</span>)}</p>
      <p className="publication-issue">{publication.year} · {publication.issue} · pp. {publication.pages}</p>
      <div className="publication-links"><a href={publication.url} target="_blank" rel="noreferrer">Baca artikel <ArrowUpRight size={15}/></a><a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer">DOI: {publication.doi} <ArrowUpRight size={14}/></a></div>
    </article>)}
  </AnimatedSection>;
}
