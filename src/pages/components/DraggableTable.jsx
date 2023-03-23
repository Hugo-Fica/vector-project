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
    const idValue = valueVector.map((x) => x.vector).includes(uidV);
    const idPos = valueVector
      .filter((x) => x.vector === uidV)
      .map((x) => x._id);
    const pos = valueVector
      .filter((x) => x.vector === uidV)
      .map((x) => x.position);
    if (idValue) {
      pos[0] += ui.x;
      const pActual = pos.reduce((prev, curr) => {
        return ui.x;
      }, 0);
      for (let a = 1; a < idPos.length; a++) {
        pos[a] += pActual;
      }
      for (let i = 0; i < idPos.length; i++) {
        const id = idPos[i];
        const newValor = pos[i];
        const valor = { position: newValor };
        console.log(valor);
        putValueVector(id, valor, token);
      }
    }
    console.log('valor de X:' + ui.x);
    setState({
      deltaPosition: {
        x: ui.x,
        y: ui.y + ui.deltaY,
      },
    });
  };
  useEffect(() => {
    getVectors(token).then(({ vectors }) => setVector(vectors));
    getVectorsValue(token).then(({ valueVectors }) =>
      setValueVector(valueVectors),
    );
  }, []);

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
      </div>
    </div>
  );
};
