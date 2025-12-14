import React from 'react';
import Card from './Card';

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-blue-100 text-blue-600">
            <Icon size={18} />
          </div>
          <h3 className="text-sm font-medium text-gray-900">
            {skill.name}
          </h3>
        </div>

        <span className="text-sm text-gray-500">
          {skill.level}%
        </span>
      </div>

      <div className="w-full h-2 rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-600 transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </Card>
  );
};

export default SkillCard;
