import { useState } from 'react';
import Draggable from 'react-draggable';
import { truck } from '../../datos';

export const DraggableTable = () => {
  const [data] = useState(truck());
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
  const handleDrag = (event, ui) => {
    console.log('valor de X:' + ui.x);
    setState({
      deltaPosition: {
        x: ui.x,
        y: ui.y + ui.deltaY,
      },
    });
  };

  // const prueba = data
  //   .map((d) => d.vector.map((v) => v.id))
  //   .filter((x, prueba) => x.length >= 6);
  // console.log(prueba);

  const dragHandlres = { onStart, onStop };
  return (
    <div className='flex flex-row p-3 '>
      <div className='flex flex-col'>
        <div className='mb-3'>
          <h1 className='text-2xl text-black'>Vector Name</h1>
        </div>
        {data.map((d) => (
          <p key={d.id} className='py-1pt text-lg font-semibold'>
            {d.name}
          </p>
        ))}
      </div>
      <div className='ml-12 flex flex-col'>
        <div className='mb-3'>
          <h1 className='text-2xl'>Requirement Vector</h1>
        </div>
        {data.map((d) => (
          <Draggable
            id={d.id}
            key={d.id}
            axis='x'
            onDrag={handleDrag}
            grid={[47, 60]}
            {...dragHandlres}>
            <div
              id={d.id}
              key={d.id}
              className=' mt-7xl w-mc rounded-20xl border-10xl border-blue-800 p-1'>
              {d.vector.map((v) => (
                <button
                  disabled={true}
                  key={v.id}
                  value={v.valor}
                  className='ml-10xl mr-10xl border border-white'>
                  {v.valor}
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
