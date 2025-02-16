import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import { Button } from "./ui/button";

export type AvatarOption = {
  id: string;
  url: string;
  alt: string;
};

interface AvatarSelectorProps {
  selectedAvatarId: string | null;
  onAvatarSelect: (avatarId: string) => void;
  error?: string;
}

const avatarOptions: AvatarOption[] = [
  { id: "avatar1", url: "/avatars/1.png", alt: "Cool Avatar" },
  { id: "avatar2", url: "/avatars/2.png", alt: "Fun Avatar" },
  { id: "avatar3", url: "/avatars/3.png", alt: "Serious Avatar" },
  // Add more avatars as needed
];

export function AvatarSelector({
  selectedAvatarId,
  onAvatarSelect,
  error,
}: AvatarSelectorProps) {
  const [open, setOpen] = useState(false);
  const selectedAvatar = avatarOptions.find(
    (avatar) => avatar.id === selectedAvatarId
  );

  const handleAvatarSelect = (avatar: AvatarOption) => {
    onAvatarSelect(avatar.id);
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <Avatar className="w-32 h-32 border-4 border-[#D91656]">
              {selectedAvatar ? (
                <AvatarImage
                  src={selectedAvatar.url}
                  alt={selectedAvatar.alt}
                />
              ) : (
                <AvatarFallback className="bg-neutral-100 text-neutral-400">
                  No avatar
                </AvatarFallback>
              )}
            </Avatar>
            <Button
              type="button"
              variant="secondary"
              className="py-2 mt-2 px-3"
            >
              Select Avatar
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Choose your avatar</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {avatarOptions.map((avatar) => (
              <div
                key={avatar.id}
                className={`cursor-pointer transition-all ${
                  selectedAvatarId === avatar.id
                    ? "ring-4 ring-[#D91656] ring-offset-2"
                    : "hover:scale-105"
                }`}
                onClick={() => handleAvatarSelect(avatar)}
              >
                <Avatar className="w-24 h-24">
                  <AvatarImage src={avatar.url} alt={avatar.alt} />
                  <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      {error && <p className="text-[#D91656] text-sm mt-1">{error}</p>}
    </div>
  );
}
