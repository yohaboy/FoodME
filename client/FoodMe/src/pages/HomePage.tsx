import React, { type ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PreferenceItemProps {
  label: string;
  children: ReactNode;
}

function PreferenceItem({ label, children }: PreferenceItemProps) {
  return (
    <div className="flex flex-col gap-3 px-2 py-2 w-full max-w-md">
      <label
        className="text-white font-semibold text-lg select-none mb-1"
        htmlFor={label.replace(/\s+/g, "").toLowerCase()}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const foodImages = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col gap-10">
      <header className="flex items-center justify-between px-12 py-6 bg-black bg-opacity-60 backdrop-blur-md shadow-md rounded-b-2xl">
        <div className="flex items-center gap-4">
          <div className="text-blue-400 text-3xl animate-pulse">🍽️</div>
          <h1 className="text-2xl font-extrabold tracking-wide select-none">
            FeedME
          </h1>
        </div>
        <nav className="flex gap-10 text-lg font-medium">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold leading-tight mb-3 drop-shadow-md">
          Tell us about your overall preferences
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          We'll then recommend the best foods that fit your choice.
        </p>
      </section>

      {/* Main Content */}
      <main className="flex justify-center gap-16 px-12 max-w-7xl mx-auto">
        {/* Image Gallery */}
        <div className="w-2/3 grid grid-cols-3 gap-6 rounded-3xl overflow-hidden shadow-2xl">
          {foodImages.map((url, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl"
              aria-label={`Food option ${idx + 1}`}
            >
              <img
                src={url}
                alt={`Food option ${idx + 1}`}
                className="w-full h-52 object-cover rounded-2xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60 group-hover:opacity-80 rounded-2xl transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg select-none">
                Food #{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Preferences Form */}
        <section className="w-1/3 flex flex-col items-center justify-start rounded-3xl bg-gradient-to-tr from-[#121212] to-[#1f2937] shadow-lg p-8 max-h-[650px] overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-hide">
          <form className="flex flex-col gap-6 w-full max-w-md">
            <PreferenceItem label="Mood">
              <Select>
                <SelectTrigger
                  className="w-full h-12 rounded-lg px-4 bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 transition"
                  id="mood"
                >
                  <SelectValue placeholder="Select your mood" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="sad">Sad</SelectItem>
                  <SelectItem value="lazy">Lazy</SelectItem>
                </SelectContent>
              </Select>
            </PreferenceItem>

            <PreferenceItem label="Diet Type">
              <RadioGroup
                defaultValue="none"
                className="flex gap-4 items-center"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="vegan"
                    id="vegan"
                    className="radio-group-item w-4 h-4 border border-gray-300"
                  />
                  <label htmlFor="vegan">Vegan</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="keto"
                    id="keto"
                    className="radio-group-item w-4 h-4 border border-gray-300"
                  />
                  <label htmlFor="keto">Keto</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="random"
                    id="random"
                    className="radio-group-item w-4 h-4 border border-gray-300"
                  />
                  <label htmlFor="random">Random</label>
                </div>
              </RadioGroup>
            </PreferenceItem>

            <PreferenceItem label="Preferred Meal Time">
              <Select>
                <SelectTrigger
                  className="w-full h-12 rounded-lg px-4 bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 transition"
                  id="mealTime"
                >
                  <SelectValue placeholder="Choose meal time" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                </SelectContent>
              </Select>
            </PreferenceItem>

            <PreferenceItem label="Serving Size">
              <Slider
                defaultValue={[2]}
                max={10}
                step={1}
                className="w-full"
                aria-label="Serving size slider"
              />
            </PreferenceItem>

            <PreferenceItem label="Health Goal">
              <Select>
                <SelectTrigger
                  className="w-full h-12 rounded-lg px-4 bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 transition"
                  id="healthGoal"
                >
                  <SelectValue placeholder="Choose a goal" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white">
                  <SelectItem value="weight-loss">Weight Loss</SelectItem>
                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                  <SelectItem value="energy">Energy Boost</SelectItem>
                </SelectContent>
              </Select>
            </PreferenceItem>

            <PreferenceItem label="Spice Level">
              <RadioGroup
                defaultValue="mild"
                className="flex gap-4 items-center"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="mild"
                    id="mild"
                    className="radio-group-item w-4 h-4 border border-gray-300"
                  />
                  <label htmlFor="mild">Mild</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="medium"
                    id="medium"
                    className="radio-group-item w-4 h-4 border border-gray-300"
                  />
                  <label htmlFor="medium">Medium</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="hot"
                    id="hot"
                    className="radio-group-item w-4 h-4 border border-gray-300"
                  />
                  <label htmlFor="hot">Hot</label>
                </div>
              </RadioGroup>
            </PreferenceItem>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 text-white font-bold py-3 rounded-xl shadow-lg transition"
            >
              Submit Preferences
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
