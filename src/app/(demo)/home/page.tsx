"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const images = ["/04.jpg", "/03.jpg"];

export default function StrategyPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Kích hoạt animation ngay khi component mount
  }, []);

  if (!sidebar) return null;

  return (
    <ContentLayout title="Đoàn Hải Anh(Dâu Tây)">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-6">
          {images.map((src, index) => (
            <ImageWithSpring key={index} src={src} delay={index * 200} trigger={animate} />
          ))}
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

// Component nhỏ gọn để bọc mỗi ảnh
function ImageWithSpring({ src, delay, trigger }) {
  const styles = useSpring({
    opacity: trigger ? 1 : 0,
    transform: trigger ? "scale(1) translateY(0)" : "scale(0.8) translateY(50px)",
    config: { tension: 200, friction: 20 },
    delay,
  });

  return (
    <animated.div style={styles} className="w-full overflow-hidden rounded-xl shadow-md">
      <img src={src} alt="Ảnh đẹp" className="w-full h-auto object-cover" />
    </animated.div>
  );
}
