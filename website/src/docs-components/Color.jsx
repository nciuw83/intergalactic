import React from 'react';
import styles from './Color.module.css';
import Copy from '../components/Copy';

import cssVariableFile from '!!raw-loader!@semcore/utils/style/var.css';

const cssVariable = Object.fromEntries(
  cssVariableFile
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('--') && line.endsWith(';'))
    .map((line) => {
      const [name, value] = line.split(': ');
      // remove ";"
      return [name, value.slice(0, -1)];
    }),
);

const Color = ({ name, ...other }) => {
  const varValue = cssVariable[name];
  const value = varValue || name;

  return (
    <Copy
      text={varValue ? `${name}: ${value}` : value}
      textTooltip={
        <span>
          Click to copy:
          <br />
          {varValue ? `${name}: "${value}"` : value}
        </span>
      }
    >
      <span
        className={styles.paintedElement}
        {...other}
        value={value}
        style={{ ...(other.style ?? {}), backgroundColor: value }}
      />
    </Copy>
  );
};

export default Color;
