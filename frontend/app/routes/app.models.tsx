import type { MetaFunction } from "@remix-run/cloudflare";
import { TitleBar } from "~/components/ui/shell-header";

export const meta: MetaFunction = () => {
    return [
        { title: "KodeRumah - Models" },
        {
            name: "description",
            content: "Manage your models",
        },

    ];
};

export default function Index() {
    return (
        <>
            <TitleBar title={"Models"} />

            <div className="p-4"> 
                <p className="text-sm text-gray-500">
                    Manage your models
                </p>
            </div>
        </>
    );
}
