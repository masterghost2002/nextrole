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
import { useAvatarQuery } from "@/lib/hooks/query";

export type AvatarOption = {
  id: string;
  url: string;
  alt: string;
};

interface AvatarSelectorProps {
  selectedAvatarId: number | null;
  onAvatarSelect: (avatarId: number) => void;
  error?: string;
}

export function AvatarSelector({
  selectedAvatarId,
  onAvatarSelect,
  error,
}: AvatarSelectorProps) {
  const [open, setOpen] = useState(false);

  const handleAvatarSelect = (
    avatar: DatabaseSchema["public"]["Tables"]["avatars"]["Row"]
  ) => {
    onAvatarSelect(avatar.id);
    setOpen(false);
  };

  const avatars = useAvatarQuery();
  const selectedAvatar = avatars.find(
    (avatar) => avatar.id === selectedAvatarId
  );

  return (
    <div className="flex flex-col items-center mb-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <Avatar className="w-32 h-32 border-4 border-[#D91656]">
              {selectedAvatar ? (
                <AvatarImage
                  src={selectedAvatar.url}
                  alt={selectedAvatar.name}
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
            {avatars.map((avatar) => (
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
                  <AvatarImage src={avatar.url} alt={avatar.name} />
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
