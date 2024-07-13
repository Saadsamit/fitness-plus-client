import img1 from "@/assets/1.jfif";
import img2 from "@/assets/2.jfif";
import img3 from "@/assets/3.jfif";
import img4 from "@/assets/4.jfif";
import img5 from "@/assets/5.jfif";
import img6 from "@/assets/6.jfif";
import img7 from "@/assets/7.jfif";
import img8 from "@/assets/8.jfif";
import img9 from "@/assets/9.jfif";

const ImageGallery = () => {
  const photo = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="grid grid-cols-3 sm:gap-5 gap-1 rounded-xl">
      {photo?.map((item) => (
        <img src={item} className="w-full size-full" />
      ))}
    </div>
  );
};

export default ImageGallery;
