'use client'

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import type { AnimationItem } from 'lottie-web';

function Animation(props: any) {
  const { renderer, loop, path, canvasStyle } = props;

  const lottieRef = useRef<HTMLDivElement>(null);
  const [, setLottie] = useState<AnimationItem>();

  useEffect(() => {
    let lottieInstance: AnimationItem;

    // 动态导入 lottie-web
    import('lottie-web').then((module) => {
      const lottie = module.default; // ✅ 注意这里使用 default 导出
      if (lottieRef.current) {
        lottieInstance = lottie.loadAnimation({
          container: lottieRef.current,
          renderer,
          loop,
          path,
        });
        setLottie(lottieInstance);
      }
    });

    return () => {
      lottieInstance?.destroy();
    };
  }, [renderer, loop, path]);

  return (
    <div>
      <div ref={lottieRef} className="lottie" style={canvasStyle}></div>
    </div>
  );
}

// 动态导入组件本身，禁用 SSR
export default dynamic(() => Promise.resolve(Animation), { ssr: false });
