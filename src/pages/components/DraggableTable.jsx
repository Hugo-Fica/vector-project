import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';
import {
  getVectors,
  getVectorsValue,
  putValueVector,
} from '../../helpers/userAuth';

export const DraggableTable = () => {
  const { token } = useSelector((state) => state.auth);
  const [vector, setVector] = useState([]);
  const [valueVector, setValueVector] = useState([]);
  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
  });
  const onStart = () => {
    setState({
      activeDrags: ++state.activeDrags,
      deltaPosition: {
        x: state.deltaPosition.x,
        y: state.deltaPosition.y,
      },
    });
  };
  const onStop = () => {
    setState({
      activeDrags: --state.activeDrags,
      deltaPosition: {
        x: state.deltaPosition.x,
        y: state.deltaPosition.y,
      },
    });
  };
  const handleDrag = (e, ui) => {
    const uidV = e.target.id;
    // console.log(ui);
    setState({
      deltaPosition: {
        x: ui.x,
        y: ui.y + ui.deltaY,
      },
    });
    const idPos = valueVector
      .filter((x) => x.vector === uidV)
      .map((x) => x._id);
    const pos = valueVector
      .filter((x) => x.vector === uidV)
      .map((x) => x.position);
    for (let a = 0; a < pos.length; a++) {
      pos[a] += ui.deltaX;
    }

    for (let i = 0; i < pos.length; i++) {
      const id = idPos[i];
      const newValor = pos[i];
      const valor = { position: newValor };
      putValueVector(id, valor, token);
    }
    console.log('valor de X:' + ui.x);
  };
  const newValueVector = {};
  valueVector.forEach((valVector) => {
    if (newValueVector[valVector.position]) {
      newValueVector[valVector.position].push(valVector.value);
    } else {
      newValueVector[valVector.position] = [valVector.value];
    }
  });
  const result = Object.keys(newValueVector).map((position) => {
    const values = newValueVector[position];
    const sum = values.reduce((total, value) => total + value, 0);
    return { position: parseInt(position), value: sum };
  });
  useEffect(() => {
    getVectors(token).then(({ vectors }) => setVector(vectors));
    getVectorsValue(token).then(({ valueVectors }) =>
      setValueVector(valueVectors),
    );
    console.log('se lanzo');
  }, [state]);
  const dragHandlres = { onStart, onStop };
  return (
    <div className='flex flex-row p-3 '>
      <div className='flex flex-col'>
        <div className='mb-3'>
          <h1 className='text-2xl text-black'>Vector Name</h1>
        </div>
        {vector.map((d) => (
          <p key={d._id} className='py-1pt text-lg font-semibold'>
            {d.name}
          </p>
        ))}
      </div>
      <div className='ml-12 flex flex-col'>
        <div className='mb-3'>
          <h1 className='text-2xl'>Requirement Vector</h1>
        </div>
        {vector.map((d) => (
          <Draggable
            id={d._id}
            key={d._id}
            axis='x'
            onDrag={handleDrag}
            grid={[47, 60]}
            {...dragHandlres}>
            <div
              id={d._id}
              key={d._id}
              className=' mt-7xl w-mc rounded-20xl border-10xl border-blue-800 p-1'>
              {valueVector
                .filter((x) => x.vector === d._id)
                .map((v) => (
                  <button
                    disabled={true}
                    key={v._id}
                    value={v.value}
                    className='ml-10xl mr-10xl border border-white'>
                    {v.value}
                  </button>
                ))}
            </div>
          </Draggable>
        ))}
        <div className='mt-3 h-1 max-w-screen-2xl bg-blue-800' />
        <div>
          {result.map((x) => (
            <button className='ml-5' key={x.position}>
              {x.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
