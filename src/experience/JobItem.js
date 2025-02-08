const JobItem = ({ title, company, duration, summary }) => {
  return (
    <section className="job-item p-4 border rounded-lg shadow-sm">
      <div className="job-details mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>
      <div className="job-summary text-sm text-gray-700">
        <p>{summary}</p>
      </div>
    </section>
  );
};

export default JobItem;
