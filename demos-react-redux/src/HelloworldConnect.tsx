// import { useState } from "react";

import { connect, useDispatch, useSelector } from 'react-redux';
import { nameSelector, updateName } from './slices';
import { Dispatch } from 'react';

type Props = Readonly<{
  name: string;
  setName(v: string): void;
}>;

function Helloworld({ name, setName }: Props) {
  return (
    <div className="Helloworld">
      <div>
        Name :{' '}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <p>Hello {name}</p>
    </div>
  );
}

// function HelloworldConnect() {
//   const name = useSelector(nameSelector);
//   const dispatch = useDispatch();

//   function setName(val: string) {
//     dispatch(updateName(val));
//   }

//   return <Helloworld name={name} setName={setName} />;
// }

function mapStateToProps(state: any) {
  return {
    name: nameSelector(state),
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setName(val: string) {
      dispatch(updateName(val));
    },
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

const HelloworldConnect = enhance(Helloworld);

export default HelloworldConnect;
