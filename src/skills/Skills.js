import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Pill from '../components/Pill';
import skillsEn from '../i18n/locales/skills.en.json';
import skillsPt from '../i18n/locales/skills.pt.json';

const Skills = () => {
  const { t, i18n } = useTranslation();

  // Get skills data based on current language
  const skillsData = i18n.language === 'pt' ? skillsPt : skillsEn;
  const skills = skillsData['skills'];

  const uniqueCategoryKeys = useMemo(
    () => Array.from(new Set(skills.map((skill) => skill.categoryKey))),
    [skills],
  );

  const categoryLabels = useMemo(() => {
    const map = new Map();
    skills.forEach((skill) => {
      if (!map.has(skill.categoryKey)) {
        map.set(skill.categoryKey, skill.category);
      }
    });
    return map;
  }, [skills]);

  const [showAll, setShowAll] = useState(false);
  const [selectedCategories, setSelectedCategories] =
    useState(uniqueCategoryKeys);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setSelectedCategories((prevSelectedCategories) => {
      const filtered = prevSelectedCategories.filter((categoryKey) =>
        uniqueCategoryKeys.includes(categoryKey),
      );

      return filtered.length > 0 ? filtered : uniqueCategoryKeys;
    });
  }, [uniqueCategoryKeys]);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      // If the clicked category is the only one selected, select all
      if (
        prevSelectedCategories.length === 1 &&
        prevSelectedCategories.includes(category)
      ) {
        return uniqueCategoryKeys;
      } else {
        // Otherwise, select only the clicked category
        return [category];
      }
    });
  };

  return (
    <section id='skills' className='w-full mx-auto pt-16'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl'>
          {t('skills.title')}
        </h2>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl'>
        <div className='flex flex-wrap my-6'>
          {uniqueCategoryKeys.map((categoryKey) => (
            <Pill
              key={categoryKey}
              active={selectedCategories.includes(categoryKey)}
              onClick={() => toggleCategory(categoryKey)}
              text={categoryLabels.get(categoryKey) || categoryKey}
            />
          ))}
        </div>
        <dl className='my-12 grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 pb-4'>
          {skills
            .filter((skill) => selectedCategories.includes(skill.categoryKey))
            .slice(0, showAll ? skills.length : 6)
            .map((skill, index) => skillCard(skill, index))}
        </dl>
        {skills.filter((skill) =>
          selectedCategories.includes(skill.categoryKey),
        ).length > 6 && (
          <div className='flex justify-center'>
            <Button
              className='text-gray-700 rounded-full bg-white transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:drop-shadow-xl'
              onClick={handleShowAll}
              text={showAll ? t('skills.showLess') : t('skills.showMore')}
            />
          </div>
        )}
      </div>
    </section>
  );

  function skillCard(skill, index) {
    return (
      <div
        key={skill.id}
        className={`group relative rounded-3xl bg-white/95 px-6 py-6 pl-20 transform transition-all duration-500 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        } hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <dt className='text-base font-semibold leading-7 text-gray-900'>
          <div className='absolute top-6 left-6 flex h-10 w-10 items-center justify-center rounded-lg'>
            <div
              className='aspect-square p-3 rounded-full text-2xl border border-gray-200 shadow-md transition-colors duration-300 group-hover:border-primary-blue group-hover:text-primary-blue'
              aria-hidden='true'
            >
              {skill.icon}
            </div>
          </div>
          {skill.name}
        </dt>
        <dd className='mt-4 text-base leading-7 text-gray-600'>
          {skill.description}
        </dd>
      </div>
    );
  }
};

export default Skills;
