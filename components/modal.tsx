import IDCardFlip from "./idCardFlipModal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Modal({ isOpen, setIsOpen }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
     
      <div
        className="fixed inset-0 max-w-[425px] bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      ></div>

  
      <div className="fixed inset-0  flex items-center justify-center z-50">
        <div
          className="max-w-[405px] w-full bg-[#081D48] rounded-xl relative p-4 "
          onClick={(e) => e.stopPropagation()} 
        >
       
          <div className="flex items-center justify-between mb-4">
            <div className="text-white font-medium text-[18px]">
              Иргэний үнэмлэх
            </div>
            <button
              className="text-white text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          
          <div className="flex justify-center mb-3 ml-[100px]">
            <IDCardFlip />
          </div>

          <p className="text-[#BCC6D5] text-[14px] text-center mb-4">
            Бичиг баримтын арын хуудсыг харах бол үнэмлэх дээр дарна уу.
          </p>

        
          <div className="flex gap-4 justify-center mb-3">
            <a href="/service/5d8b13383666c358f659b2ee">
              <button className="whitespace-nowrap rounded-full px-6 h-10 inline-flex items-center justify-center bg-[#3B82F6] text-white font-semibold hover:bg-blue-600 transition">
                Лавлагаа авах
              </button>
            </a>

            <a href="/service/5d89092e0384df7e7f11858a">
              <button className="whitespace-nowrap rounded-full px-6 h-10 inline-flex items-center justify-center border-[1.5px] border-[#3B82F6] bg-[#1E2A40] text-[#3B82F6] font-semibold hover:bg-blue-950 transition">
                Дахин захиалах
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}