import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const types = ['best', 'hot', 'new', 'top', 'rising'];

export default function CategoryGroup() {
  const [active, setActive] = useState(types[0]);

  return (
    <ButtonGroup>
      {types.map((type) => (
        <ButtonToggle key={type} active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

// export default function CategoryButton(props) {
//   function handleClick() {
//     console.log(props.name);
//   }

//   return (
//     <button type="button" className="btn toggle-btn" name={props.name} aria-pressed={props.isPressed} onClick={handleClick}>
//       <span className="visually-hidden">Show {props.name} posts</span>
//     </button>
//   );
// }
