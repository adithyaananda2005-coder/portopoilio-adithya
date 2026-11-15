export default function CloudForeground() {
  return <div className="cloudscape cloudscape-hd" aria-hidden="true">{['panorama', 'west', 'east'].map(layer => <div className={`ocean-layer ocean-${layer}`} key={layer}><img src="/images/cloud-sea-hd.png" alt="" width="1536" height="1024" decoding="async" draggable="false"/></div>)}</div>;
}
