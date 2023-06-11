import React, { useRef, useEffect } from 'react';
// import ArrowSVG from '../../assets/Arrow.svg'

function Arrow() {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrow = arrowRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const arrowRect = arrow.getBoundingClientRect();
      const arrowCenterX = arrowRect.left + arrowRect.width / 2;
      const arrowCenterY = arrowRect.top + arrowRect.height / 2;
      const offsetX = clientX - arrowCenterX;
      const offsetY = clientY - arrowCenterY;

      arrow.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={arrowRef}><ArrowSVG /></div>;
}

export default Arrow;