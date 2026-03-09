const SkillBadge = ({ skill, className = '' }) => {
  return (
    <span className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm ${className}`}>
      {skill}
    </span>
  );
};

export default SkillBadge;