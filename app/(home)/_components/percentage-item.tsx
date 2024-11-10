import { ReactNode } from "react";

interface PercentageItemProps {
    icon: ReactNode;
    title: string;
    value: number;
}

const PercentageItem = ({icon,title,value}: PercentageItemProps) => {
    return ( 
        <div className="flex items-center justify-between">
        <div className="flex items-cente gap-2">
            {icon}
            <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        <p className="font-bold text-sm">{value}%</p>
    </div>
     );
}
 
export default PercentageItem;