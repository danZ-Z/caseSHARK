import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

interface SelectorProps {
  selectedPhone: Dispatch<SetStateAction<string>>;
}



const Selector: React.FC<SelectorProps> = ({ selectedPhone }) => {
  return (
    <div>
      <Select onValueChange={selectedPhone}>
        <SelectTrigger value="Iphone 11" className="w-full rounded-sm">
          <SelectValue placeholder="Select your phone" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="iPhone 11">iPhone 11</SelectItem>
          <SelectItem value="iPhone 11 Pro">iPhone 11 Pro</SelectItem>
          <SelectItem value="iPhone 11 Pro Max">iPhone 11 Pro Max</SelectItem>
          <SelectItem value="iPhone 12">iPhone 12</SelectItem>
          <SelectItem value="iPhone 12 Mini">iPhone 12 Mini</SelectItem>
          <SelectItem value="iPhone 12 Pro">iPhone 12 Pro</SelectItem>
          <SelectItem value="iPhone 12 Pro Max">iPhone 12 Pro Max</SelectItem>
          <SelectItem value="iPhone 13">iPhone 13</SelectItem>
          <SelectItem value="iPhone 13 Mini">iPhone 13 Mini</SelectItem>
          <SelectItem value="iPhone 13 Pro">iPhone 13 Pro</SelectItem>
          <SelectItem value="iPhone 13 Pro Max">iPhone 13 Pro Max</SelectItem>
          <SelectItem value="iPhone 14">iPhone 14</SelectItem>
          <SelectItem value="iPhone 14 Plus">iPhone 14 Plus</SelectItem>
          <SelectItem value="iPhone 14 Pro">iPhone 14 Pro</SelectItem>
          <SelectItem value="iPhone 14 Pro Max">iPhone 14 Pro Max</SelectItem>
          <SelectItem value="iPhone 15">iPhone 15</SelectItem>
          <SelectItem value="iPhone 15 Plus">iPhone 15 Plus</SelectItem>
          <SelectItem value="iPhone 15 Pro">iPhone 15 Pro</SelectItem>
          <SelectItem value="iPhone 15 Pro Max">iPhone 15 Pro Max</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Selector;
