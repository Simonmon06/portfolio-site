import React, { useEffect, useMemo, useState } from "react";
import { SlideShowContainer } from "./projects.styles";
import Image from "next/image";

const PLACEHOLDER_IMAGE = "/images/no_image_placeholder.png";

const SlideShow = ({ images }: { images: string[] }) => {
  const projectImages = useMemo(() => {
    if (!images?.length) {
      return [PLACEHOLDER_IMAGE];
    }

    return images.map((image) => image || PLACEHOLDER_IMAGE);
  }, [images]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        projectImages.length > 0
          ? prev === projectImages.length - 1
            ? 0
            : prev + 1
          : 0
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [projectImages.length]);

  useEffect(() => {
    setIndex(0);
  }, [projectImages.length]);
  return (
    <SlideShowContainer>
      <Image
        src={projectImages[index] ?? PLACEHOLDER_IMAGE}
        alt={`Slide ${index + 1}`}
        width={800}
        height={600}
        className="SlideImage"
      />
    </SlideShowContainer>
  );
};

export default SlideShow;
