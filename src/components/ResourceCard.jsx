export default function ResourceCard({ title, url }) {
    if (!url) return null;

    return (
        <div className="bg-indigo-50 shadow-md rounded-lg p-4 flex flex-col justify-between scroll-mt-24 hover:shadow-xl transition-shadow duration-300">
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 text-lg font-medium hover:text-blue-800 underline mt-auto"
            >
                {title}
            </a>
        </div>
    );
}
