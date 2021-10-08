import React from 'react';
import style from './Image.module.css';

const Image = ({ alt, ...props }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.skeleton}></div>
      <img className={style.img} src="" alt={alt} {...props} />
    </div>
  );
};

export default Image;
