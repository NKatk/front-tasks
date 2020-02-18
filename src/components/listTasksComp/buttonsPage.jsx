import React from 'react';

const ButtonsPage = ({ page, totalTaskCount, choicePage }) => {
  const pageNumbers = [];
  if (totalTaskCount > 3) {
    for (let i = 0; totalTaskCount > i * 3; i++) {
      pageNumbers.push(i + 1);
    }
  }

  return (
    <div className="buttons-page">
      {pageNumbers.map((item) => {
        if (item >= page - 1 && item <= page + 1) {
          return (
            <button
              type="button"
              className={item === page ? 'active-page' : null}
              onClick={() => choicePage(item)}
              key={item}
            >
              <span>{item}</span>
            </button>
          );
        }
        if (
          item >= page - 2 && item !== 1
          && item <= page + 2
          && item !== pageNumbers.length
        ) {
          return (
            <span className="dots" key={item}>...</span>
          );
        }
        if (item === 1 || item === pageNumbers.length) {
          return (
            <button
              type="button"
              className={item === page ? 'active-page' : null}
              onClick={() => choicePage(item)}
              key={item}
            >
              <span>{item}</span>
            </button>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ButtonsPage;
