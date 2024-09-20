import React from 'react';

const SectionTitle = (props) => {
  const {
    itemClass,
    subTitleClass,
    subTitle,
    titleClass,
    title,
    titleImage,
    description,
    hasAfterImage,
  } = props;

  return (
    <div
      className={
        itemClass ? itemClass : 'ed-category-title-box text-center mb-70'
      }
    >
      
      <h4 className={titleClass ? titleClass : 'ed-section-title'}>
        {title ? title : 'Browse By Categories'}
      </h4>
      <p>{description ? description : ''}</p>
    </div>
  );
};
export default SectionTitle;
