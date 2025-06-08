import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { ReactNode } from "react";

interface PreferenceItemProps {
  label: string;
  children: ReactNode;
}

function PreferenceItem({ label, children }: PreferenceItemProps) {
  return (
    <div className="flex flex-col gap-8 px-4 py-3 w-full max-w-md">
      <label className="text-white font-medium text-sm px-1">{label}</label>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#101923] text-white flex flex-col">
      <header className="flex items-center justify-between border-b border-[#223449] px-10 py-4">
        <div className="flex items-center gap-4">
          <div className="text-blue-500 font-bold text-xl">🍽️</div>
          <h1 className="text-lg font-bold">Recipe Preferences</h1>
        </div>
        <nav className="flex gap-8">
          <a href="#" className="text-white hover:text-blue-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            About
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-start px-4 py-10">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-center mb-2">
            Tell us about your recipe preferences
          </h2>
          <p className="text-center text-sm text-gray-300 mb-8">
            We'll use this information to tailor your recipe recommendations.
          </p>

          {/* Mood Select */}
          <PreferenceItem label="Mood">
            <Select>
              <SelectTrigger className="w-full h-12 rounded-lg px-4 bg-[#223449]">
                <SelectValue placeholder="Select your mood" />
              </SelectTrigger>
              <SelectContent className="bg-[#223449] text-white">
                <SelectItem value="happy">Happy</SelectItem>
                <SelectItem value="sad">Sad</SelectItem>
                <SelectItem value="lazy">Lazy</SelectItem>
              </SelectContent>
            </Select>
          </PreferenceItem>

          {/* Diet Type */}
          <PreferenceItem label="Diet Type">
            <RadioGroup defaultValue="none" className="flex gap-4">
              <RadioGroupItem value="vegan" id="vegan" />
              <label htmlFor="vegan">Vegan</label>
              <RadioGroupItem value="keto" id="keto" />
              <label htmlFor="keto">Keto</label>
              <RadioGroupItem value="none" id="none" />
              <label htmlFor="none">None</label>
            </RadioGroup>
          </PreferenceItem>

          {/* Preferred Time */}
          <PreferenceItem label="Preferred Meal Time">
            <Select>
              <SelectTrigger className="w-full h-12 rounded-lg px-4 bg-[#223449]">
                <SelectValue placeholder="Choose meal time" />
              </SelectTrigger>
              <SelectContent className="bg-[#223449] text-white">
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
              </SelectContent>
            </Select>
          </PreferenceItem>

          {/* Serving Size */}
          <PreferenceItem label="Serving Size">
            <Slider defaultValue={[2]} max={10} step={1} className="w-full" />
          </PreferenceItem>

          {/* Health Goal */}
          <PreferenceItem label="Health Goal">
            <Select>
              <SelectTrigger className="w-full h-12 rounded-lg px-4 bg-[#223449]">
                <SelectValue placeholder="Choose a goal" />
              </SelectTrigger>
              <SelectContent className="bg-[#223449] text-white">
                <SelectItem value="weight-loss">Weight Loss</SelectItem>
                <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                <SelectItem value="energy">Energy Boost</SelectItem>
              </SelectContent>
            </Select>
          </PreferenceItem>

          {/* Cost Range */}
          <PreferenceItem label="Cost Range (Min - Max)">
            <Slider
              defaultValue={[10, 30]}
              max={100}
              step={5}
              className="w-full"
            />
          </PreferenceItem>

          {/* Spice Level */}
          <PreferenceItem label="Spice Level">
            <RadioGroup defaultValue="medium" className="flex gap-4">
              <RadioGroupItem value="mild" id="mild" />
              <label htmlFor="mild">Mild</label>
              <RadioGroupItem value="medium" id="medium" />
              <label htmlFor="medium">Medium</label>
              <RadioGroupItem value="hot" id="hot" />
              <label htmlFor="hot">Hot</label>
            </RadioGroup>
          </PreferenceItem>

          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-bold text-white">
              Submit Preferences
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
