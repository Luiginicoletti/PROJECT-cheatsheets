"use client"
import Image from "next/image";
import { useState } from "react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Modal from "@/components/Modal";
import { Heart, MessagesSquare } from "lucide-react";

type Companion = {
  id: string;
  categoryId: string;
  name: string;
  src: string;
  description: string;
  userName: string;
  messages: string;
};

interface CompanionsProps {
  data: Companion[];
}

export const Companions = ({ data }: CompanionsProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const handleCardClick = (imageUrl: any) => {
    setSelectedImage(imageUrl)
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image
            width={600}
            height={600}
            className="grayscale" src="/empty.png" alt="Empty" />
        </div>
        <p className="text-sm text-muted-foreground">Ops, num achei...</p>
      </div>
    );
  }

  if (modalOpen) {
    return (
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImage}
        altText="Image"
      />
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 pb-10">
      {data.map((item) => (
        <Card
          onClick={() => handleCardClick(item.src)}
          key={item.id}
          className="bg-secondary rounded-xl cursor-pointer opacity-75 hover:opacity-100 transition border-0"
        >
          <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
            <div className="relative w-44 h-48 md:w-52 md:h-56 ">
              <Image
                fill
                src={item.src}
                className="rounded-xl object-fill hover:object-cover transition"
                alt="Character"
              />
            </div>
            <p className="font-bold">{item.name}</p>
            <p className="text-xs">{item.description}</p>
          </CardHeader>
          <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
            <p className="lowercase">@{item.userName}</p>
            <div className="flex items-center">
              <Heart className="hover:fill-red-400 w-4 h-4 mr-1" />

            </div>
          </CardFooter>
        </Card>
      ))}

    </div>



  );
};
