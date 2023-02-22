export default function ContactInfo() {
  return (
    <div className="w-full border-r border-lines md:w-1/4">
      <p className="flex gap-3 border border-lines py-[10px] px-4 text-white">
        <i className="ri-arrow-down-s-fill"></i> contact-info
      </p>
      <p className="flex gap-2 py-4 px-3 text-secondary1 ">
        <i className="ri-mail-fill"></i>
        <span className="cursor-pointer break-all hover:underline">
          luciano.bicaku2307@gmail.com
        </span>
      </p>
      <p className="flex gap-2 py-4 px-3 text-secondary1">
        <i className="ri-phone-fill"></i>355688030642
      </p>
      <p className="flex gap-2 py-4 px-3 text-secondary1">
        <i className="ri-map-pin-fill"></i> Tirana, Albania
      </p>
    </div>
  );
}
