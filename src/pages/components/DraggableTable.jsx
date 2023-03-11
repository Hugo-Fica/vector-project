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
  const dragHandlres = { onStart, onStop };
  return (
    <div className='flex flex-row p-3'>
      <div className='flex flex-col'>
        {data.map((d) => (
          <p key={d.id} className='mt-8'>
            {d.name}
          </p>
        ))}
      </div>
      <div className='ml-3 mt-3 flex flex-col'>
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
              className='mt-1 w-mc rounded-20xl border-10xl border-violet-800 p-1'>
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
      </div>
    </div>
  );
};
