import { useRef, useState } from "react";
import {
    CalendarIcon,
    ChartBarIcon,
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
  } from "@heroicons/react/outline";
  import data from '@emoji-mart/data';
  import Picker from '@emoji-mart/react';

export default function Input() {
    const [ input, setInput ] = useState('');
    const [ selectedFile, setSelectedFile ] = useState(null);
    const [ showEmojis, setShowEmojis ] = useState(false);
    const filePickerRef = useRef(null);

    const addImageToPost = () => {};

    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
      };
  
    return (
        <div
        className={`border-b border-gray-700 p-3 flex space-x-3 scrollbar-hide `}
        >
            <img src="" alt="" className="h-11 w-11 rounded-full cursor-pointer" />
            <div className="w-full divide-y divide-gray-700">
                <div className={``}>
                    <textarea 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    rows="2" 
                    placeholder="What's happening?"
                    className="bg-transparent outline-none text-[#d9d9d9] 
                    text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" />

                </div>

                {selectedFile && (
                <div className="relative">
                    <div className="absolute w-8 h-8 bg-[#151515] hover:bg-[#272c26] 
                    bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                    onClick={ () => setSelectedFile(null) }
                    >
                        <XIcon className=" text-white h-5"/>
                    </div>
                    <img 
                    src={selectedFile} 
                    alt="" 
                    className="rounded-2xl max-h-80 object-contain "/>
                </div>
            )}
        

                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex items-center">
                        <div className="icon"
                        onClick={() => filePickerRef.current.click()}
                        >
                            <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                            <input 
                            type="file" 
                            hidden
                            onChange={addImageToPost} 
                            ref={filePickerRef}/>
                        </div>

                        
              <div className="icon rotate-90">
                <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon">
                <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    marginTop: "465px",
                    marginLeft: -40,
                    maxWidth: "320px",
                    borderRadius: "20px",
                  }}
                  theme="dark"
                />
              )}

                        

                    </div>
                </div>
        </div>           
    </div>
  )
}
