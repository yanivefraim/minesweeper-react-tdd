import React from 'react';

export const Game = () => {
  return (
    <table>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, i) => {
      return (
        <tr className="row" key={i + row}>
           {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((col, j) => {
             return (
               <td className="cell" key={j + col}>*</td>
             );
           })}
        </tr>
     );
    })}
    </table>
  );
};
