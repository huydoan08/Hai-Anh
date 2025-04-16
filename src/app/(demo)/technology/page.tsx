"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { useRouter } from "next/navigation";
import { Dot } from "lucide-react";

const technology = ["Công thức để viết một câu hỏi: [mô tả task/ngữ cảnh]-[vấn đề cụ thể hoặc điều cần làm]-[cung cấp dữ liệu]-[hành động mong muốn: giải thích, sửa, tối ưu, v.v.]"];

export default function TechnologyPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  if (!sidebar) return null;
  return (
    <ContentLayout title="Mẹo sử dụng công nghệ">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            Cách sử dụng AI hiệu quả:
          </div>
          <div className="space-y-2">
            {technology.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <Dot />
                <Label className="text-black-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
