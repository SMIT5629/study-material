export default function ResourceCard({ title, url }) {
    if (!url) return null;

    return (
        <div className="resource-card">
            <h3>{title}</h3>
            <a href={url} target="_blank" rel="noreferrer">
                View / Download
            </a>
        </div>
    );
}
