export default function DocumentPreview({ item, expanded = false }) {
  return <span className={`document-preview ${item.imageRotation ? 'document-landscape' : 'document-portrait'} ${expanded ? 'document-expanded' : ''}`}><span className="document-mat"><img src={item.image} alt={`Piagam ${item.title}`} loading="lazy" style={item.imageRotation ? { transform: `translate(-50%, -50%) rotate(${item.imageRotation}deg)` } : undefined}/></span><span className="document-year">{item.year}</span></span>;
}
