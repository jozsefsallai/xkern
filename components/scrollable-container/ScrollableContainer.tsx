import styles from './ScrollableContainer.module.scss';

import React, { ReactNode, useState, useEffect, useRef, createRef } from 'react';
import BlockSelector from './BlockSelector';

export interface ScrollableContainerOpts {
  children: ReactNode;
}

const ScrollableContainer = ({ children }: ScrollableContainerOpts) => {
  const refs = useRef(
    new Array(React.Children.count(children)).fill(0).map(_ => createRef<HTMLDivElement>())
  );

  const [currentBlock, setCurrentBlock] = useState(0);

  const currentBlockRef = useRef(currentBlock);

  const stepCurrentBlock = (delta: number): boolean => {
    if (delta === 1 && currentBlockRef.current === refs.current.length - 1) {
      return false;
    }

    if (delta === -1 && currentBlockRef.current === 0) {
      return false;
    }

    scroll(currentBlockRef.current + delta);
    return true;
  };

  const scroll = (idx: number) => {
    if (idx < 0 || idx >= refs.current.length) {
      return;
    }

    currentBlockRef.current = idx;
    setCurrentBlock(idx);
    refs.current[idx].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const canScroll = useRef(true);

  const handleScroll = (e: WheelEvent) => {
    e.preventDefault();

    const delta = Math.sign(e.deltaY);

    if (canScroll.current) {
      const scrolled = stepCurrentBlock(delta);

      if (scrolled) {
        // 1 second cooldown if scroll was successful
        canScroll.current = false;

        setTimeout(() => {
          canScroll.current = true;
        }, 1000);
      }
    }
  };

  const handleKey = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'PageUp':
      case 'ArrowLeft':
      case 'ArrowUp':
        return stepCurrentBlock(-1);
      case 'PageDown':
      case 'ArrowRight':
      case 'ArrowDown':
        return stepCurrentBlock(1);
      case 'End':
        return scroll(refs.current.length - 1);
      case 'Home':
        return scroll(0);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keyup', handleKey);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keyup', handleKey);
    };
  }, []);

  return (
    <div className={styles.unscroll}>
      {React.Children.map(children, (child, idx) => {
        return (
          <div ref={refs.current[idx]}>
            {child}
          </div>
        );
      })}

      <div className={styles.switcher}>
        {refs.current.map((_, idx) => (
          <BlockSelector
            idx={idx}
            scroll={scroll}
            current={currentBlock}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollableContainer;
