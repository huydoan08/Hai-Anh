"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store"
import { useRouter } from "next/navigation";
import {  Dot } from "lucide-react"

const raisingchildren = [
    "..."
]

export default function RaisingChildrenPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  if (!sidebar) return null;
  return (
    <ContentLayout title="Nuôi dạy con cái đúng cách">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            Cách nuôi dạy con cái đúng cách:
          </div>
          <div className="space-y-2">
            {raisingchildren.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <Dot/>
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
